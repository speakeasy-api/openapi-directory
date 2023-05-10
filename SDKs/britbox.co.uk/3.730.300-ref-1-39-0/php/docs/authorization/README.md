# authorization

### Available Operations

* [generateDeviceAuthorizationCode](#generatedeviceauthorizationcode) - Get a generated device authorization code.

This is the first step in the process of authorizing a device by pin code.
The device will make a request to this endpoint providing a unique identifier
for the device such as a serial number. This endpoint will then return a
generated code which is tied to the given device.

The code may subsequently be used to authorize the device to sign in to an
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.

* [getAccountToken](#getaccounttoken) - Request one or more `Account` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restricted endpoints
will require a specific token type (e.g Account) with a specific scope (e.g. Catalog)
before access is granted.

For convenience, where a Profile level token with the same scope exists it will also be returned.

Authorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`
endpoint instead.

* [getAccountTokenByCode](#getaccounttokenbycode) - Get Catalog tokens for an account using a device authorization code.
Where a Profile level token of Catalog scope exists it will also be returned.

This is the final step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

The code is subsequently used to authorize the device to sign in to a given
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, this endpoint will allow the device to sign in without
needing to provide the credentials of the user.

* [getProfileToken](#getprofiletoken) - Request one or more `Profile` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restriced endpoints
will require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)
before access is granted.

* [refreshToken](#refreshtoken) - Refresh an account or profile level authorization token which is marked as refreshable.
* [signOut](#signout) - When a user signs out of an application we need to clear some
basic cookies we assigned them during token authorization.

* [singleSignOn](#singlesignon) - Exchange a third party single-sign-on token for our own authorization tokens.

## generateDeviceAuthorizationCode

Get a generated device authorization code.

This is the first step in the process of authorizing a device by pin code.
The device will make a request to this endpoint providing a unique identifier
for the device such as a serial number. This endpoint will then return a
generated code which is tied to the given device.

The code may subsequently be used to authorize the device to sign in to an
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenerateDeviceAuthorizationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceRegistrationRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateDeviceAuthorizationCodeRequest();
    $request->deviceRegistrationRequest = new DeviceRegistrationRequest();
    $request->deviceRegistrationRequest->id = '4251904e-523c-47e0-bc71-78e4796f2a70';
    $request->deviceRegistrationRequest->name = 'Franklin Lynch';
    $request->deviceRegistrationRequest->type = 'deleniti';
    $request->ff = [
        FeatureFlagsEnum::CAS,
    ];
    $request->lang = 'mollitia';

    $response = $sdk->authorization->generateDeviceAuthorizationCode($request);

    if ($response->deviceAuthorizationCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountToken

Request one or more `Account` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restricted endpoints
will require a specific token type (e.g Account) with a specific scope (e.g. Catalog)
before access is granted.

For convenience, where a Profile level token with the same scope exists it will also be returned.

Authorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`
endpoint instead.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountTokenRequestCookieTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountTokenRequestScopesEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountTokenRequest();
    $request->accountTokenRequest = new AccountTokenRequest();
    $request->accountTokenRequest->cookieType = AccountTokenRequestCookieTypeEnum::SESSION;
    $request->accountTokenRequest->email = 'Braulio.Hansen@yahoo.com';
    $request->accountTokenRequest->password = 'sapiente';
    $request->accountTokenRequest->scopes = [
        AccountTokenRequestScopesEnum::CATALOG,
    ];
    $request->ff = [
        FeatureFlagsEnum::CD,
    ];
    $request->lang = 'occaecati';

    $response = $sdk->authorization->getAccountToken($request);

    if ($response->accessTokens !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountTokenByCode

Get Catalog tokens for an account using a device authorization code.
Where a Profile level token of Catalog scope exists it will also be returned.

This is the final step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

The code is subsequently used to authorize the device to sign in to a given
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, this endpoint will allow the device to sign in without
needing to provide the credentials of the user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenByCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountTokenByCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountTokenByCodeRequestScopesEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountTokenByCodeRequest();
    $request->accountTokenByCodeRequest = new AccountTokenByCodeRequest();
    $request->accountTokenByCodeRequest->code = 'atque';
    $request->accountTokenByCodeRequest->id = '17ee17cb-e61e-46b7-b95b-c0ab3c20c4f3';
    $request->accountTokenByCodeRequest->scopes = [
        AccountTokenByCodeRequestScopesEnum::SETTINGS,
        AccountTokenByCodeRequestScopesEnum::SETTINGS,
    ];
    $request->ff = [
        FeatureFlagsEnum::LRL,
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::ALL,
    ];
    $request->lang = 'a';

    $response = $sdk->authorization->getAccountTokenByCode($request);

    if ($response->accessTokens !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProfileToken

Request one or more `Profile` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restriced endpoints
will require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)
before access is granted.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProfileTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProfileTokenRequestCookieTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProfileTokenRequestScopesEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProfileTokenRequest();
    $request->profileTokenRequest = new ProfileTokenRequest();
    $request->profileTokenRequest->cookieType = ProfileTokenRequestCookieTypeEnum::PERSISTENT;
    $request->profileTokenRequest->pin = 'sint';
    $request->profileTokenRequest->profileId = 'pariatur';
    $request->profileTokenRequest->scopes = [
        ProfileTokenRequestScopesEnum::CATALOG,
        ProfileTokenRequestScopesEnum::SETTINGS,
        ProfileTokenRequestScopesEnum::SETTINGS,
        ProfileTokenRequestScopesEnum::SETTINGS,
    ];
    $request->ff = [
        FeatureFlagsEnum::IDP,
    ];
    $request->lang = 'quasi';

    $requestSecurity = new GetProfileTokenSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->authorization->getProfileToken($request, $requestSecurity);

    if ($response->accessTokens !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## refreshToken

Refresh an account or profile level authorization token which is marked as refreshable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RefreshTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\TokenRefreshRequest;
use \OpenAPI\OpenAPI\Models\Shared\TokenRefreshRequestCookieTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefreshTokenRequest();
    $request->tokenRefreshRequest = new TokenRefreshRequest();
    $request->tokenRefreshRequest->cookieType = TokenRefreshRequestCookieTypeEnum::PERSISTENT;
    $request->tokenRefreshRequest->token = 'culpa';
    $request->ff = [
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::ALL,
    ];
    $request->lang = 'earum';

    $response = $sdk->authorization->refreshToken($request);

    if ($response->accessToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signOut

When a user signs out of an application we need to clear some
basic cookies we assigned them during token authorization.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SignOutRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignOutRequest();
    $request->ff = [
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::LDP,
    ];
    $request->lang = 'libero';

    $response = $sdk->authorization->signOut($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## singleSignOn

Exchange a third party single-sign-on token for our own authorization tokens.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SingleSignOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\SingleSignOnRequest;
use \OpenAPI\OpenAPI\Models\Shared\SingleSignOnRequestCookieTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SingleSignOnRequestProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SingleSignOnRequestScopesEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SingleSignOnRequest();
    $request->singleSignOnRequest = new SingleSignOnRequest();
    $request->singleSignOnRequest->cookieType = SingleSignOnRequestCookieTypeEnum::PERSISTENT;
    $request->singleSignOnRequest->linkAccounts = false;
    $request->singleSignOnRequest->provider = SingleSignOnRequestProviderEnum::FACEBOOK;
    $request->singleSignOnRequest->scopes = [
        SingleSignOnRequestScopesEnum::CATALOG,
        SingleSignOnRequestScopesEnum::COMMERCE,
        SingleSignOnRequestScopesEnum::PLAYBACK,
    ];
    $request->singleSignOnRequest->token = 'dicta';
    $request->ff = [
        FeatureFlagsEnum::HB,
        FeatureFlagsEnum::LDP,
    ];
    $request->lang = 'nisi';

    $response = $sdk->authorization->singleSignOn($request);

    if ($response->accessTokens !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
