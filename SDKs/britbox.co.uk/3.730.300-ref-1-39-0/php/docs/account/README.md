# account

### Available Operations

* [addPaymentMethod](#addpaymentmethod) - Add a new payment method to an account.
* [authorizeDevice](#authorizedevice) - Authorize a device from a generated device authorization code.

This is the second step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

This endpoint then authorizes the device associated with the code to sign in
to a user account. Typically this endpoint will be called from a page
presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.

* [cancelSubscription](#cancelsubscription) - Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.

* [changePassword](#changepassword) - Change the password of an account.

The expected token scope is Settings.

* [changePin](#changepin) - Change the pin of an account.
* [createProfile](#createprofile) - Create a new profile under the active account.
* [deleteProfileWithId](#deleteprofilewithid) - Delete a profile with a specific id under the active account.

Note that you cannot delete the primary profile.

* [deregisterDevice](#deregisterdevice) - Deregister a playback device from an account.
* [generateNonce](#generatenonce) - Generate a new account nonce.

A nonce may be required to help sign a response from a third party
service which will be passed back to these services.

For example a Facebook single-sign-on request initiated by a client
application may first get a nonce from here to include in the request.
Facebook will then include the nonce in the auth token it issues. This
token can be passed back to our services and the nonce checked for validity.

* [getAccount](#getaccount) - Get the details of an account along with the profiles and entitlements under it.
* [getDevice](#getdevice) - Get a registered device.
* [getDevices](#getdevices) - Get all devices registered under this account.

Also includes information around device registration and deregistration limits.

* [getEntitlements](#getentitlements) - Get all entitlements under the account.

This list is returned under the call to get account information so a call here is
only required when wishing to refresh a local copy of entitlements.

* [getItemMediaFiles](#getitemmediafiles) - Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint accepts an Account Catalog token, however if when requesting
playback files you receive an *403 status code with error code 1* then the file
you're requesting is classification restricted. This means you should switch
to target the `/account/items/{id}/videos-guarded` endpoint, passing it an Account
Playback token. If not already obtained, this token can be requested via the
`/itv/pinauthorization` endpoint with an account level pin.

For convenience you may also access free / public files through this endpoint
instead of the /items/{id}/videos endpoint, when authenticated.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.

* [getItemMediaFilesGuarded](#getitemmediafilesguarded) - Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint is identical to the `/account/items/{id}/videos` however it expects
an Account Playback token. This token, and in association this endpoint, is specifically
for use when playback files are classification restricted and require an account
level pin to access them.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.

* [getPaymentMethod](#getpaymentmethod) - Get a payment method under an account.
* [getPaymentMethods](#getpaymentmethods) - Get the available payment methods under an account.
* [getProfileWithId](#getprofilewithid) - Get the summary of a profile with a specific id under the active account.
* [getPurchases](#getpurchases) - Get a list of all purchases made under an account.
* [makePurchase](#makepurchase) - Purchase a plan or item offer.
The result of a successful transaction is a new entitlement.

* [registerDevice](#registerdevice) - Register a playback device under an account.

If a device with the same id already exists a `409` conflict will be returned.

* [removePaymentMethod](#removepaymentmethod) - Remove a payment method from an account.
* [renameDevice](#renamedevice) - Rename a device
* [requestEmailVerification](#requestemailverification) - Request that the email address tied to an account be verified.

This will send a verification email to the email address of the primary profile containing
a link which, once clicked, completes the verification process via the /verify-email endpoint.

Note that when an account is created this email is sent automatically so there's no need
to call this directly.

If the user doesn't click the link before it expires then this endpoint can be called
to request a new verification email. In the future it may also be used if we add support
for changing an account email address.

* [updateAccount](#updateaccount) - Update the details of an account.

With the exception of the address, this supports partial updates, so you can send just the
properties you wish to update.

When the address is provided any properties which are omitted from the address will be cleared.

* [updateProfileWithId](#updateprofilewithid) - Update the summary of a profile with a specific id under the active account.

This supports partial updates so you can send just the properties you wish to update.

* [updateSubscription](#updatesubscription) - Renew a cancelled subscription or switch subscription to a different plan.

When renewing a cancelled subscription membership, hit this endpoint with
the id of subscription to renew.

To switch plans provide the id of the current active subscription membership
of the account, and in the query specify the id of the plan to switch to.


## addPaymentMethod

Add a new payment method to an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddPaymentMethodRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddPaymentMethodRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddPaymentMethodRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddPaymentMethodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddPaymentMethodRequest();
    $request->addPaymentMethodRequest = new AddPaymentMethodRequest();
    $request->addPaymentMethodRequest->makeDefault = false;
    $request->addPaymentMethodRequest->token = 'corrupti';
    $request->addPaymentMethodRequest->type = AddPaymentMethodRequestTypeEnum::CARD;
    $request->ff = [
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::HB,
    ];
    $request->lang = 'iure';

    $requestSecurity = new AddPaymentMethodSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->addPaymentMethod($request, $requestSecurity);

    if ($response->paymentMethod !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizeDevice

Authorize a device from a generated device authorization code.

This is the second step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

This endpoint then authorizes the device associated with the code to sign in
to a user account. Typically this endpoint will be called from a page
presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizeDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceAuthorizationCode;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizeDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizeDeviceRequest();
    $request->deviceAuthorizationCode = new DeviceAuthorizationCode();
    $request->deviceAuthorizationCode->code = 'magnam';
    $request->ff = [
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::HB,
    ];
    $request->lang = 'molestiae';

    $requestSecurity = new AuthorizeDeviceSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->authorizeDevice($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelSubscription

Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CancelSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CancelSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelSubscriptionRequest();
    $request->ff = [
        FeatureFlagsEnum::LRL,
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::RPT,
    ];
    $request->id = '6ed151a0-5dfc-42dd-b7cc-78ca1ba928fc';
    $request->lang = 'totam';

    $requestSecurity = new CancelSubscriptionSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->cancelSubscription($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changePassword

Change the password of an account.

The expected token scope is Settings.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangePasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangePasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChangePasswordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangePasswordRequest();
    $request->changePasswordRequest = new ChangePasswordRequest();
    $request->changePasswordRequest->password = 'beatae';
    $request->changePasswordRequest->profileToken = 'commodi';
    $request->ff = [
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::IDP,
    ];
    $request->lang = 'impedit';

    $requestSecurity = new ChangePasswordSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->changePassword($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changePin

Change the pin of an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangePinRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangePinRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChangePinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangePinRequest();
    $request->changePinRequest = new ChangePinRequest();
    $request->changePinRequest->pin = 'cum';
    $request->ff = [
        FeatureFlagsEnum::IDP,
        FeatureFlagsEnum::RPT,
    ];
    $request->lang = 'aspernatur';

    $requestSecurity = new ChangePinSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->changePin($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProfile

Create a new profile under the active account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProfileCreationRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProfileRequest();
    $request->profileCreationRequest = new ProfileCreationRequest();
    $request->profileCreationRequest->languageCode = 'perferendis';
    $request->profileCreationRequest->name = 'Faye Cormier';
    $request->profileCreationRequest->pinEnabled = false;
    $request->profileCreationRequest->purchaseEnabled = false;
    $request->profileCreationRequest->segments = [
        'laboriosam',
        'hic',
        'saepe',
    ];
    $request->ff = [
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::RPT,
    ];
    $request->lang = 'iure';

    $requestSecurity = new CreateProfileSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->createProfile($request, $requestSecurity);

    if ($response->profileDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProfileWithId

Delete a profile with a specific id under the active account.

Note that you cannot delete the primary profile.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfileWithIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfileWithIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProfileWithIdRequest();
    $request->ff = [
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::CD,
    ];
    $request->id = 'aaa2352c-5955-4907-aff1-a3a2fa946773';
    $request->lang = 'error';

    $requestSecurity = new DeleteProfileWithIdSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->deleteProfileWithId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterDevice

Deregister a playback device from an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterDeviceRequest();
    $request->ff = [
        FeatureFlagsEnum::LDP,
    ];
    $request->id = '1aa52c3f-5ad0-419d-a1ff-e78f097b0074';
    $request->lang = 'maiores';

    $requestSecurity = new DeregisterDeviceSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->deregisterDevice($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateNonce

Generate a new account nonce.

A nonce may be required to help sign a response from a third party
service which will be passed back to these services.

For example a Facebook single-sign-on request initiated by a client
application may first get a nonce from here to include in the request.
Facebook will then include the nonce in the auth token it issues. This
token can be passed back to our services and the nonce checked for validity.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenerateNonceRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GenerateNonceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateNonceRequest();
    $request->ff = [
        FeatureFlagsEnum::LDP,
    ];
    $request->lang = 'dolore';

    $requestSecurity = new GenerateNonceSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->generateNonce($request, $requestSecurity);

    if ($response->accountNonce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccount

Get the details of an account along with the profiles and entitlements under it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountRequest();
    $request->ff = [
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::CAS,
    ];
    $request->lang = 'enim';

    $requestSecurity = new GetAccountSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->getAccount($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevice

Get a registered device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceRequest();
    $request->ff = [
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::IDP,
    ];
    $request->id = 'b99d488e-1e91-4e45-8ad2-abd44269802d';
    $request->lang = 'ipsam';

    $requestSecurity = new GetDeviceSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->getDevice($request, $requestSecurity);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevices

Get all devices registered under this account.

Also includes information around device registration and deregistration limits.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevicesRequest();
    $request->ff = [
        FeatureFlagsEnum::IDP,
    ];
    $request->lang = 'dolorum';

    $requestSecurity = new GetDevicesSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->getDevices($request, $requestSecurity);

    if ($response->accountDevices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEntitlements

Get all entitlements under the account.

This list is returned under the call to get account information so a call here is
only required when wishing to refresh a local copy of entitlements.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitlementsRequest();
    $request->ff = [
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::CAS,
    ];
    $request->lang = 'labore';

    $requestSecurity = new GetEntitlementsSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->getEntitlements($request, $requestSecurity);

    if ($response->entitlements !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemMediaFiles

Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint accepts an Account Catalog token, however if when requesting
playback files you receive an *403 status code with error code 1* then the file
you're requesting is classification restricted. This means you should switch
to target the `/account/items/{id}/videos-guarded` endpoint, passing it an Account
Playback token. If not already obtained, this token can be requested via the
`/itv/pinauthorization` endpoint with an account level pin.

For convenience you may also access free / public files through this endpoint
instead of the /items/{id}/videos endpoint, when authenticated.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemMediaFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\MediaFileDeliveryEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediaFileFormatsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediaFileResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetItemMediaFilesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemMediaFilesRequest();
    $request->delivery = [
        MediaFileDeliveryEnum::PROGRESSIVE,
        MediaFileDeliveryEnum::STREAM,
        MediaFileDeliveryEnum::DOWNLOAD,
        MediaFileDeliveryEnum::PROGRESSIVE,
    ];
    $request->device = 'aliquid';
    $request->ff = [
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::CAS,
    ];
    $request->formats = [
        MediaFileFormatsEnum::EXTERNAL,
    ];
    $request->id = 'fa77dfb1-4cd6-46ae-b95e-fb9ba88f3a66';
    $request->lang = 'natus';
    $request->resolution = MediaFileResolutionEnum::SD;
    $request->segments = [
        'perferendis',
        'nihil',
    ];
    $request->sub = 'magnam';

    $requestSecurity = new GetItemMediaFilesSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->getItemMediaFiles($request, $requestSecurity);

    if ($response->mediaFiles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemMediaFilesGuarded

Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint is identical to the `/account/items/{id}/videos` however it expects
an Account Playback token. This token, and in association this endpoint, is specifically
for use when playback files are classification restricted and require an account
level pin to access them.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemMediaFilesGuardedRequest;
use \OpenAPI\OpenAPI\Models\Shared\MediaFileDeliveryEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediaFileFormatsEnum;
use \OpenAPI\OpenAPI\Models\Shared\MediaFileResolutionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetItemMediaFilesGuardedSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemMediaFilesGuardedRequest();
    $request->delivery = [
        MediaFileDeliveryEnum::PROGRESSIVE,
        MediaFileDeliveryEnum::STREAM,
        MediaFileDeliveryEnum::STREAM,
    ];
    $request->device = 'suscipit';
    $request->ff = [
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::CD,
    ];
    $request->formats = [
        MediaFileFormatsEnum::MP4,
    ];
    $request->id = '41959890-afa5-463e-a516-fe4c8b711e5b';
    $request->lang = 'nihil';
    $request->resolution = MediaFileResolutionEnum::EXTERNAL;
    $request->segments = [
        'sed',
        'saepe',
        'pariatur',
        'accusantium',
    ];
    $request->sub = 'consequuntur';

    $requestSecurity = new GetItemMediaFilesGuardedSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->getItemMediaFilesGuarded($request, $requestSecurity);

    if ($response->mediaFiles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentMethod

Get a payment method under an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentMethodRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentMethodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentMethodRequest();
    $request->ff = [
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::IDP,
        FeatureFlagsEnum::ALL,
    ];
    $request->id = 'cddc6926-01fb-4576-b0d5-f0d30c5fbb25';
    $request->lang = 'totam';

    $requestSecurity = new GetPaymentMethodSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->getPaymentMethod($request, $requestSecurity);

    if ($response->paymentMethod !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentMethods

Get the available payment methods under an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentMethodsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentMethodsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentMethodsRequest();
    $request->ff = [
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::LDP,
    ];
    $request->lang = 'nesciunt';

    $requestSecurity = new GetPaymentMethodsSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->getPaymentMethods($request, $requestSecurity);

    if ($response->paymentMethods !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProfileWithId

Get the summary of a profile with a specific id under the active account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileWithIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileWithIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProfileWithIdRequest();
    $request->ff = [
        FeatureFlagsEnum::ALL,
    ];
    $request->id = '2c73d5fe-9b90-4c28-909b-3fe49a8d9cbf';
    $request->lang = 'quaerat';

    $requestSecurity = new GetProfileWithIdSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->getProfileWithId($request, $requestSecurity);

    if ($response->profileSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPurchases

Get a list of all purchases made under an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPurchasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPurchasesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPurchasesRequest();
    $request->ff = [
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::IDP,
        FeatureFlagsEnum::IDP,
    ];
    $request->lang = 'dolor';

    $requestSecurity = new GetPurchasesSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->getPurchases($request, $requestSecurity);

    if ($response->purchases !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## makePurchase

Purchase a plan or item offer.
The result of a successful transaction is a new entitlement.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MakePurchaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\PurchaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\MakePurchaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MakePurchaseRequest();
    $request->purchaseRequest = new PurchaseRequest();
    $request->purchaseRequest->itemId = 'qui';
    $request->purchaseRequest->offerId = 'ipsum';
    $request->purchaseRequest->paymentMethodId = 'hic';
    $request->purchaseRequest->planId = 'excepturi';
    $request->ff = [
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::CD,
    ];
    $request->lang = 'amet';

    $requestSecurity = new MakePurchaseSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->makePurchase($request, $requestSecurity);

    if ($response->entitlement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerDevice

Register a playback device under an account.

If a device with the same id already exists a `409` conflict will be returned.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceRegistrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterDeviceRequest();
    $request->deviceRegistrationRequest = new DeviceRegistrationRequest();
    $request->deviceRegistrationRequest->id = 'a4100674-ebf6-4928-8d1b-a77a89ebf737';
    $request->deviceRegistrationRequest->name = 'Elbert Gislason I';
    $request->deviceRegistrationRequest->type = 'optio';
    $request->ff = [
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::CAS,
    ];
    $request->lang = 'provident';

    $requestSecurity = new RegisterDeviceSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->registerDevice($request, $requestSecurity);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removePaymentMethod

Remove a payment method from an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RemovePaymentMethodRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\RemovePaymentMethodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemovePaymentMethodRequest();
    $request->ff = [
        FeatureFlagsEnum::LRL,
        FeatureFlagsEnum::RPT,
    ];
    $request->id = 'a0d446ce-2af7-4a73-8f3b-e453f870b326';
    $request->lang = 'libero';

    $requestSecurity = new RemovePaymentMethodSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->removePaymentMethod($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renameDevice

Rename a device

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RenameDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\RenameDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenameDeviceRequest();
    $request->ff = [
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::HB,
    ];
    $request->id = '3429cdb1-a842-42bb-a79d-2322715bf0cb';
    $request->lang = 'nobis';
    $request->name = 'Miss Kerry Emmerich';

    $requestSecurity = new RenameDeviceSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->renameDevice($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## requestEmailVerification

Request that the email address tied to an account be verified.

This will send a verification email to the email address of the primary profile containing
a link which, once clicked, completes the verification process via the /verify-email endpoint.

Note that when an account is created this email is sent automatically so there's no need
to call this directly.

If the user doesn't click the link before it expires then this endpoint can be called
to request a new verification email. In the future it may also be used if we add support
for changing an account email address.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RequestEmailVerificationRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\RequestEmailVerificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RequestEmailVerificationRequest();
    $request->ff = [
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::CD,
    ];
    $request->lang = 'dolorem';

    $requestSecurity = new RequestEmailVerificationSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->requestEmailVerification($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccount

Update the details of an account.

With the exception of the address, this supports partial updates, so you can send just the
properties you wish to update.

When the address is provided any properties which are omitted from the address will be cleared.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountRequest();
    $request->accountUpdateRequest = new AccountUpdateRequest();
    $request->accountUpdateRequest->address = new Address();
    $request->accountUpdateRequest->address->addressLine1 = 'dolore';
    $request->accountUpdateRequest->address->addressLine2 = 'labore';
    $request->accountUpdateRequest->address->city = 'Lake Barbara';
    $request->accountUpdateRequest->address->country = 'Bahamas';
    $request->accountUpdateRequest->address->postcode = '59068';
    $request->accountUpdateRequest->address->state = 'porro';
    $request->accountUpdateRequest->defaultPaymentInstrumentId = 'doloribus';
    $request->accountUpdateRequest->defaultPaymentMethodId = 'ut';
    $request->accountUpdateRequest->firstName = 'Mckayla';
    $request->accountUpdateRequest->lastName = 'McGlynn';
    $request->accountUpdateRequest->minRatingPlaybackGuard = 'qui';
    $request->accountUpdateRequest->segments = [
        'laudantium',
    ];
    $request->accountUpdateRequest->trackingEnabled = false;
    $request->ff = [
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::CD,
    ];
    $request->lang = 'quisquam';

    $requestSecurity = new UpdateAccountSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->updateAccount($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProfileWithId

Update the summary of a profile with a specific id under the active account.

This supports partial updates so you can send just the properties you wish to update.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileWithIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProfileUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileWithIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProfileWithIdRequest();
    $request->profileUpdateRequest = new ProfileUpdateRequest();
    $request->profileUpdateRequest->heroAutoplay = false;
    $request->profileUpdateRequest->heroWithAudio = false;
    $request->profileUpdateRequest->languageCode = 'vero';
    $request->profileUpdateRequest->name = 'Tim Erdman';
    $request->profileUpdateRequest->pinEnabled = false;
    $request->profileUpdateRequest->purchaseEnabled = false;
    $request->profileUpdateRequest->segments = [
        'vero',
    ];
    $request->ff = [
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::LRL,
    ];
    $request->id = '7abd74dd-39c0-4f5d-acff-7c70a45626d4';
    $request->lang = 'ratione';

    $requestSecurity = new UpdateProfileWithIdSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->updateProfileWithId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscription

Renew a cancelled subscription or switch subscription to a different plan.

When renewing a cancelled subscription membership, hit this endpoint with
the id of subscription to renew.

To switch plans provide the id of the current active subscription membership
of the account, and in the query specify the id of the plan to switch to.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriptionRequest();
    $request->ff = [
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::ALL,
    ];
    $request->id = '3f16d9f5-fce6-4c55-a146-c3e250fb008c';
    $request->lang = 'aliquam';
    $request->planId = 'fugit';

    $requestSecurity = new UpdateSubscriptionSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->updateSubscription($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
