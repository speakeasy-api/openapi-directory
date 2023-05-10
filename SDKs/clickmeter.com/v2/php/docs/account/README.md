# account

### Available Operations

* [accountDeleteDomainWhitelist](#accountdeletedomainwhitelist) - Delete an domain entry
* [accountDeleteGuest](#accountdeleteguest) - Delete a guest
* [accountDeleteIpBlacklist](#accountdeleteipblacklist) - Delete an ip blacklist entry
* [accountGet](#accountget) - Retrieve current account data
* [accountGetDomainWhitelist](#accountgetdomainwhitelist) - Retrieve list of a domains allowed to redirect in DDU mode
* [accountGetGuest](#accountgetguest) - Retrieve a guest
* [accountGetGuests](#accountgetguests) - Retrieve list of a guest
* [accountGetGuestsCount](#accountgetguestscount) - Retrieve count of guests
* [accountGetIpBlacklist](#accountgetipblacklist) - Retrieve list of a ip to exclude from event tracking
* [accountGetPermissions](#accountgetpermissions) - Retrieve permissions for a guest
* [accountGetPermissionsCount](#accountgetpermissionscount) - Retrieve count of the permissions for a guest
* [accountGetPlan](#accountgetplan) - Retrieve current account plan
* [accountPatchPermissionsForm](#accountpatchpermissionsform) - Change the permission on a shared object
* [accountPatchPermissionsJson](#accountpatchpermissionsjson) - Change the permission on a shared object
* [accountPatchPermissionsRaw](#accountpatchpermissionsraw) - Change the permission on a shared object
* [accountPostGuestForm](#accountpostguestform) - Update a guest
* [accountPostGuestJson](#accountpostguestjson) - Update a guest
* [accountPostGuestRaw](#accountpostguestraw) - Update a guest
* [accountPostForm](#accountpostform) - Update current account data
* [accountPostJson](#accountpostjson) - Update current account data
* [accountPostRaw](#accountpostraw) - Update current account data
* [accountPutDomainWhitelistForm](#accountputdomainwhitelistform) - Create an domain entry
* [accountPutDomainWhitelistJson](#accountputdomainwhitelistjson) - Create an domain entry
* [accountPutDomainWhitelistRaw](#accountputdomainwhitelistraw) - Create an domain entry
* [accountPutGuestForm](#accountputguestform) - Create a guest
* [accountPutGuestJson](#accountputguestjson) - Create a guest
* [accountPutGuestRaw](#accountputguestraw) - Create a guest
* [accountPutIpBlacklistForm](#accountputipblacklistform) - Create an ip blacklist entry
* [accountPutIpBlacklistJson](#accountputipblacklistjson) - Create an ip blacklist entry
* [accountPutIpBlacklistRaw](#accountputipblacklistraw) - Create an ip blacklist entry
* [postAccountGuestsGuestIdTypePermissionsPatchForm](#postaccountguestsguestidtypepermissionspatchform) - Change the permission on a shared object
* [postAccountGuestsGuestIdTypePermissionsPatchJson](#postaccountguestsguestidtypepermissionspatchjson) - Change the permission on a shared object
* [postAccountGuestsGuestIdTypePermissionsPatchRaw](#postaccountguestsguestidtypepermissionspatchraw) - Change the permission on a shared object

## accountDeleteDomainWhitelist

Delete an domain entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountDeleteDomainWhitelistRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountDeleteDomainWhitelistRequest();
    $request->whitelistId = 'provident';

    $response = $sdk->account->accountDeleteDomainWhitelist($request);

    if ($response->apiCoreDtoAccountingDomainWhitelistEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountDeleteGuest

Delete a guest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountDeleteGuestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountDeleteGuestRequest();
    $request->guestId = 715190;

    $response = $sdk->account->accountDeleteGuest($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountDeleteIpBlacklist

Delete an ip blacklist entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountDeleteIpBlacklistRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountDeleteIpBlacklistRequest();
    $request->blacklistId = 'quibusdam';

    $response = $sdk->account->accountDeleteIpBlacklist($request);

    if ($response->apiCoreDtoAccountingIpBlacklistEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGet

Retrieve current account data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->account->accountGet();

    if ($response->apiCoreDtoAccountingUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGetDomainWhitelist

Retrieve list of a domains allowed to redirect in DDU mode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetDomainWhitelistRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountGetDomainWhitelistRequest();
    $request->limit = 602763;
    $request->offset = 857946;

    $response = $sdk->account->accountGetDomainWhitelist($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreDtoAccountingDomainWhitelistEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGetGuest

Retrieve a guest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetGuestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountGetGuestRequest();
    $request->guestId = 544883;

    $response = $sdk->account->accountGetGuest($request);

    if ($response->apiCoreDtoAccountingGuest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGetGuests

Retrieve list of a guest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetGuestsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetGuestsSortDirectionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountGetGuestsRequest();
    $request->limit = 847252;
    $request->offset = 423655;
    $request->sortBy = 'error';
    $request->sortDirection = AccountGetGuestsSortDirectionEnum::DESC;
    $request->textSearch = 'suscipit';

    $response = $sdk->account->accountGetGuests($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGetGuestsCount

Retrieve count of guests

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetGuestsCountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountGetGuestsCountRequest();
    $request->textSearch = 'iure';

    $response = $sdk->account->accountGetGuestsCount($request);

    if ($response->apiCoreResponsesCountResponce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGetIpBlacklist

Retrieve list of a ip to exclude from event tracking

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetIpBlacklistRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountGetIpBlacklistRequest();
    $request->limit = 297534;
    $request->offset = 891773;

    $response = $sdk->account->accountGetIpBlacklist($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreDtoAccountingIpBlacklistEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGetPermissions

Retrieve permissions for a guest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetPermissionsEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetPermissionsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountGetPermissionsRequest();
    $request->entityId = 56713;
    $request->entityType = AccountGetPermissionsEntityTypeEnum::GROUP;
    $request->guestId = 272656;
    $request->limit = 383441;
    $request->offset = 477665;
    $request->type = AccountGetPermissionsTypeEnum::W;

    $response = $sdk->account->accountGetPermissions($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGetPermissionsCount

Retrieve count of the permissions for a guest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetPermissionsCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetPermissionsCountEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccountGetPermissionsCountTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountGetPermissionsCountRequest();
    $request->entityId = 812169;
    $request->entityType = AccountGetPermissionsCountEntityTypeEnum::GROUP;
    $request->guestId = 479977;
    $request->type = AccountGetPermissionsCountTypeEnum::W;

    $response = $sdk->account->accountGetPermissionsCount($request);

    if ($response->apiCoreResponsesCountResponce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountGetPlan

Retrieve current account plan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->account->accountGetPlan();

    if ($response->apiCoreDtoAccountingPlan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPatchPermissionsForm

Change the permission on a shared object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountPatchPermissionsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsPermissionPatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountPatchPermissionsFormTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountPatchPermissionsFormRequest();
    $request->apiCoreRequestsPermissionPatchRequest = new ApiCoreRequestsPermissionPatchRequest();
    $request->apiCoreRequestsPermissionPatchRequest->action = 'nisi';
    $request->apiCoreRequestsPermissionPatchRequest->id = 925597;
    $request->apiCoreRequestsPermissionPatchRequest->verb = 'temporibus';
    $request->guestId = 71036;
    $request->type = AccountPatchPermissionsFormTypeEnum::DATAPOINT;

    $response = $sdk->account->accountPatchPermissionsForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPatchPermissionsJson

Change the permission on a shared object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountPatchPermissionsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsPermissionPatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountPatchPermissionsJsonTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountPatchPermissionsJsonRequest();
    $request->apiCoreRequestsPermissionPatchRequest = new ApiCoreRequestsPermissionPatchRequest();
    $request->apiCoreRequestsPermissionPatchRequest->action = 'veritatis';
    $request->apiCoreRequestsPermissionPatchRequest->id = 648172;
    $request->apiCoreRequestsPermissionPatchRequest->verb = 'perferendis';
    $request->guestId = 368241;
    $request->type = AccountPatchPermissionsJsonTypeEnum::GROUP;

    $response = $sdk->account->accountPatchPermissionsJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPatchPermissionsRaw

Change the permission on a shared object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountPatchPermissionsRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\AccountPatchPermissionsRawTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountPatchPermissionsRawRequest();
    $request->requestBody = 'sapiente';
    $request->guestId = 778157;
    $request->type = AccountPatchPermissionsRawTypeEnum::DATAPOINT;

    $response = $sdk->account->accountPatchPermissionsRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPostGuestForm

Update a guest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountPostGuestFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingGuest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingConversionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoGrantsGrant;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreResponsesEntityUriSystemInt64;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingExtendedGrants;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingHitOptions;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingGuestTimeFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountPostGuestFormRequest();
    $request->apiCoreDtoAccountingGuest = new ApiCoreDtoAccountingGuest();
    $request->apiCoreDtoAccountingGuest->apiKey = 'at';
    $request->apiCoreDtoAccountingGuest->conversionOptions = new ApiCoreDtoAccountingConversionOptions();
    $request->apiCoreDtoAccountingGuest->conversionOptions->hideComCost = false;
    $request->apiCoreDtoAccountingGuest->conversionOptions->hideCost = false;
    $request->apiCoreDtoAccountingGuest->conversionOptions->hideCount = false;
    $request->apiCoreDtoAccountingGuest->conversionOptions->hideParams = false;
    $request->apiCoreDtoAccountingGuest->conversionOptions->hideValue = false;
    $request->apiCoreDtoAccountingGuest->conversionOptions->percentCommission = 870088;
    $request->apiCoreDtoAccountingGuest->conversionOptions->percentValue = 978619;
    $request->apiCoreDtoAccountingGuest->creationDate = '20120203120530';
    $request->apiCoreDtoAccountingGuest->currentGrant = new ApiCoreDtoGrantsGrant();
    $request->apiCoreDtoAccountingGuest->currentGrant->datapointType = 'molestiae';
    $request->apiCoreDtoAccountingGuest->currentGrant->entity = new ApiCoreResponsesEntityUriSystemInt64();
    $request->apiCoreDtoAccountingGuest->currentGrant->entity->id = 799159;
    $request->apiCoreDtoAccountingGuest->currentGrant->entity->uri = 'https://jumbo-lobotomy.net';
    $request->apiCoreDtoAccountingGuest->currentGrant->entityName = 'dolorum';
    $request->apiCoreDtoAccountingGuest->currentGrant->entityType = 'dicta';
    $request->apiCoreDtoAccountingGuest->currentGrant->type = 'nam';
    $request->apiCoreDtoAccountingGuest->dateFormat = 'officia';
    $request->apiCoreDtoAccountingGuest->decimalSeparator = 'occaecati';
    $request->apiCoreDtoAccountingGuest->email = 'Kale_Welch10@gmail.com';
    $request->apiCoreDtoAccountingGuest->extendedGrants = new ApiCoreDtoAccountingExtendedGrants();
    $request->apiCoreDtoAccountingGuest->extendedGrants->allowAllGrants = false;
    $request->apiCoreDtoAccountingGuest->extendedGrants->allowGroupCreation = false;
    $request->apiCoreDtoAccountingGuest->groupGrants = 414662;
    $request->apiCoreDtoAccountingGuest->hitOptions = new ApiCoreDtoAccountingHitOptions();
    $request->apiCoreDtoAccountingGuest->hitOptions->hideReferrer = false;
    $request->apiCoreDtoAccountingGuest->id = 473600;
    $request->apiCoreDtoAccountingGuest->key = 'modi';
    $request->apiCoreDtoAccountingGuest->language = 'qui';
    $request->apiCoreDtoAccountingGuest->loginCount = 774234;
    $request->apiCoreDtoAccountingGuest->name = 'Cory Emmerich';
    $request->apiCoreDtoAccountingGuest->notes = 'perferendis';
    $request->apiCoreDtoAccountingGuest->numberGroupSeparator = 'ad';
    $request->apiCoreDtoAccountingGuest->password = 'natus';
    $request->apiCoreDtoAccountingGuest->timeFormat = ApiCoreDtoAccountingGuestTimeFormatEnum::AM_PM;
    $request->apiCoreDtoAccountingGuest->timeZone = 612096;
    $request->apiCoreDtoAccountingGuest->timeframeMinDate = '20120203120530';
    $request->apiCoreDtoAccountingGuest->timezonename = 'dolor';
    $request->apiCoreDtoAccountingGuest->tlGrants = 616934;
    $request->apiCoreDtoAccountingGuest->tpGrants = 386489;
    $request->apiCoreDtoAccountingGuest->userName = 'Tyra.Turcotte35';
    $request->guestId = 613064;

    $response = $sdk->account->accountPostGuestForm($request);

    if ($response->apiCoreDtoAccountingGuest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPostGuestJson

Update a guest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountPostGuestJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingGuest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingConversionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoGrantsGrant;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreResponsesEntityUriSystemInt64;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingExtendedGrants;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingHitOptions;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingGuestTimeFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountPostGuestJsonRequest();
    $request->apiCoreDtoAccountingGuest = new ApiCoreDtoAccountingGuest();
    $request->apiCoreDtoAccountingGuest->apiKey = 'iure';
    $request->apiCoreDtoAccountingGuest->conversionOptions = new ApiCoreDtoAccountingConversionOptions();
    $request->apiCoreDtoAccountingGuest->conversionOptions->hideComCost = false;
    $request->apiCoreDtoAccountingGuest->conversionOptions->hideCost = false;
    $request->apiCoreDtoAccountingGuest->conversionOptions->hideCount = false;
    $request->apiCoreDtoAccountingGuest->conversionOptions->hideParams = false;
    $request->apiCoreDtoAccountingGuest->conversionOptions->hideValue = false;
    $request->apiCoreDtoAccountingGuest->conversionOptions->percentCommission = 902349;
    $request->apiCoreDtoAccountingGuest->conversionOptions->percentValue = 697631;
    $request->apiCoreDtoAccountingGuest->creationDate = '20120203120530';
    $request->apiCoreDtoAccountingGuest->currentGrant = new ApiCoreDtoGrantsGrant();
    $request->apiCoreDtoAccountingGuest->currentGrant->datapointType = 'architecto';
    $request->apiCoreDtoAccountingGuest->currentGrant->entity = new ApiCoreResponsesEntityUriSystemInt64();
    $request->apiCoreDtoAccountingGuest->currentGrant->entity->id = 60225;
    $request->apiCoreDtoAccountingGuest->currentGrant->entity->uri = 'https://qualified-pew.net';
    $request->apiCoreDtoAccountingGuest->currentGrant->entityName = 'dolores';
    $request->apiCoreDtoAccountingGuest->currentGrant->entityType = 'dolorem';
    $request->apiCoreDtoAccountingGuest->currentGrant->type = 'corporis';
    $request->apiCoreDtoAccountingGuest->dateFormat = 'explicabo';
    $request->apiCoreDtoAccountingGuest->decimalSeparator = 'nobis';
    $request->apiCoreDtoAccountingGuest->email = 'Lenore57@gmail.com';
    $request->apiCoreDtoAccountingGuest->extendedGrants = new ApiCoreDtoAccountingExtendedGrants();
    $request->apiCoreDtoAccountingGuest->extendedGrants->allowAllGrants = false;
    $request->apiCoreDtoAccountingGuest->extendedGrants->allowGroupCreation = false;
    $request->apiCoreDtoAccountingGuest->groupGrants = 38425;
    $request->apiCoreDtoAccountingGuest->hitOptions = new ApiCoreDtoAccountingHitOptions();
    $request->apiCoreDtoAccountingGuest->hitOptions->hideReferrer = false;
    $request->apiCoreDtoAccountingGuest->id = 438601;
    $request->apiCoreDtoAccountingGuest->key = 'culpa';
    $request->apiCoreDtoAccountingGuest->language = 'doloribus';
    $request->apiCoreDtoAccountingGuest->loginCount = 958950;
    $request->apiCoreDtoAccountingGuest->name = 'Angie Durgan';
    $request->apiCoreDtoAccountingGuest->notes = 'repellat';
    $request->apiCoreDtoAccountingGuest->numberGroupSeparator = 'mollitia';
    $request->apiCoreDtoAccountingGuest->password = 'occaecati';
    $request->apiCoreDtoAccountingGuest->timeFormat = ApiCoreDtoAccountingGuestTimeFormatEnum::AM_PM;
    $request->apiCoreDtoAccountingGuest->timeZone = 414369;
    $request->apiCoreDtoAccountingGuest->timeframeMinDate = '20120203120530';
    $request->apiCoreDtoAccountingGuest->timezonename = 'quam';
    $request->apiCoreDtoAccountingGuest->tlGrants = 474697;
    $request->apiCoreDtoAccountingGuest->tpGrants = 244425;
    $request->apiCoreDtoAccountingGuest->userName = 'Linda.Cronin';
    $request->guestId = 674752;

    $response = $sdk->account->accountPostGuestJson($request);

    if ($response->apiCoreDtoAccountingGuest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPostGuestRaw

Update a guest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AccountPostGuestRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountPostGuestRawRequest();
    $request->requestBody = 'animi';
    $request->guestId = 317202;

    $response = $sdk->account->accountPostGuestRaw($request);

    if ($response->apiCoreDtoAccountingGuest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPostForm

Update current account data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingUser;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoAccountingUser();
    $request->boGoVal = 'odit';
    $request->bonusClicks = 778346;
    $request->companyName = 'sequi';
    $request->companyRole = 'tenetur';
    $request->email = 'Makayla9@yahoo.com';
    $request->firstName = 'Lina';
    $request->lastName = 'Smitham';
    $request->phone = '1-299-945-9064 x7004';
    $request->redirectOnly = false;
    $request->registrationDate = '20120203120530';
    $request->timeframeMinDate = '20120203120530';
    $request->timezone = 282807;
    $request->timezonename = 'maiores';

    $response = $sdk->account->accountPostForm($request);

    if ($response->apiCoreDtoAccountingUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPostJson

Update current account data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingUser;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoAccountingUser();
    $request->boGoVal = 'dicta';
    $request->bonusClicks = 359444;
    $request->companyName = 'dolore';
    $request->companyRole = 'iusto';
    $request->email = 'Martine.Hamill91@gmail.com';
    $request->firstName = 'Anissa';
    $request->lastName = 'Emmerich';
    $request->phone = '658.455.9095 x0923';
    $request->redirectOnly = false;
    $request->registrationDate = '20120203120530';
    $request->timeframeMinDate = '20120203120530';
    $request->timezone = 9356;
    $request->timezonename = 'est';

    $response = $sdk->account->accountPostJson($request);

    if ($response->apiCoreDtoAccountingUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPostRaw

Update current account data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
'quibusdam'

    $response = $sdk->account->accountPostRaw($request);

    if ($response->apiCoreDtoAccountingUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPutDomainWhitelistForm

Create an domain entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingDomainWhitelistEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoAccountingDomainWhitelistEntry();
    $request->id = '2abd4426-9802-4d50-aa94-bb4f63c969e9';
    $request->name = 'Curtis Toy';

    $response = $sdk->account->accountPutDomainWhitelistForm($request);

    if ($response->apiCoreDtoAccountingDomainWhitelistEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPutDomainWhitelistJson

Create an domain entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingDomainWhitelistEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoAccountingDomainWhitelistEntry();
    $request->id = '77dfb14c-d66a-4e39-9efb-9ba88f3a6699';
    $request->name = 'Dorothy Kovacek';

    $response = $sdk->account->accountPutDomainWhitelistJson($request);

    if ($response->apiCoreDtoAccountingDomainWhitelistEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPutDomainWhitelistRaw

Create an domain entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
'id'

    $response = $sdk->account->accountPutDomainWhitelistRaw($request);

    if ($response->apiCoreDtoAccountingDomainWhitelistEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPutGuestForm

Create a guest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingGuest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingConversionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoGrantsGrant;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreResponsesEntityUriSystemInt64;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingExtendedGrants;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingHitOptions;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingGuestTimeFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoAccountingGuest();
    $request->apiKey = 'labore';
    $request->conversionOptions = new ApiCoreDtoAccountingConversionOptions();
    $request->conversionOptions->hideComCost = false;
    $request->conversionOptions->hideCost = false;
    $request->conversionOptions->hideCount = false;
    $request->conversionOptions->hideParams = false;
    $request->conversionOptions->hideValue = false;
    $request->conversionOptions->percentCommission = 290077;
    $request->conversionOptions->percentValue = 383462;
    $request->creationDate = '20120203120530';
    $request->currentGrant = new ApiCoreDtoGrantsGrant();
    $request->currentGrant->datapointType = 'natus';
    $request->currentGrant->entity = new ApiCoreResponsesEntityUriSystemInt64();
    $request->currentGrant->entity->id = 749170;
    $request->currentGrant->entity->uri = 'http://ugly-cash.com';
    $request->currentGrant->entityName = 'magnam';
    $request->currentGrant->entityType = 'et';
    $request->currentGrant->type = 'excepturi';
    $request->dateFormat = 'ullam';
    $request->decimalSeparator = 'provident';
    $request->email = 'Kiley_Bartoletti@yahoo.com';
    $request->extendedGrants = new ApiCoreDtoAccountingExtendedGrants();
    $request->extendedGrants->allowAllGrants = false;
    $request->extendedGrants->allowGroupCreation = false;
    $request->groupGrants = 652103;
    $request->hitOptions = new ApiCoreDtoAccountingHitOptions();
    $request->hitOptions->hideReferrer = false;
    $request->id = 320997;
    $request->key = 'eum';
    $request->language = 'dolor';
    $request->loginCount = 896547;
    $request->name = 'Vivian Boyle';
    $request->notes = 'debitis';
    $request->numberGroupSeparator = 'eius';
    $request->password = 'maxime';
    $request->timeFormat = ApiCoreDtoAccountingGuestTimeFormatEnum::H24;
    $request->timeZone = 703889;
    $request->timeframeMinDate = '20120203120530';
    $request->timezonename = 'in';
    $request->tlGrants = 100226;
    $request->tpGrants = 99569;
    $request->userName = 'Tevin.Herman99';

    $response = $sdk->account->accountPutGuestForm($request);

    if ($response->apiCoreDtoAccountingGuest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPutGuestJson

Create a guest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingGuest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingConversionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoGrantsGrant;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreResponsesEntityUriSystemInt64;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingExtendedGrants;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingHitOptions;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingGuestTimeFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoAccountingGuest();
    $request->apiKey = 'quibusdam';
    $request->conversionOptions = new ApiCoreDtoAccountingConversionOptions();
    $request->conversionOptions->hideComCost = false;
    $request->conversionOptions->hideCost = false;
    $request->conversionOptions->hideCount = false;
    $request->conversionOptions->hideParams = false;
    $request->conversionOptions->hideValue = false;
    $request->conversionOptions->percentCommission = 149448;
    $request->conversionOptions->percentValue = 904648;
    $request->creationDate = '20120203120530';
    $request->currentGrant = new ApiCoreDtoGrantsGrant();
    $request->currentGrant->datapointType = 'pariatur';
    $request->currentGrant->entity = new ApiCoreResponsesEntityUriSystemInt64();
    $request->currentGrant->entity->id = 37559;
    $request->currentGrant->entity->uri = 'http://luminous-oregano.biz';
    $request->currentGrant->entityName = 'sunt';
    $request->currentGrant->entityType = 'quo';
    $request->currentGrant->type = 'illum';
    $request->dateFormat = 'pariatur';
    $request->decimalSeparator = 'maxime';
    $request->email = 'Keven.Connelly@yahoo.com';
    $request->extendedGrants = new ApiCoreDtoAccountingExtendedGrants();
    $request->extendedGrants->allowAllGrants = false;
    $request->extendedGrants->allowGroupCreation = false;
    $request->groupGrants = 69167;
    $request->hitOptions = new ApiCoreDtoAccountingHitOptions();
    $request->hitOptions->hideReferrer = false;
    $request->id = 982575;
    $request->key = 'quidem';
    $request->language = 'ipsam';
    $request->loginCount = 453543;
    $request->name = 'Candice Beatty';
    $request->notes = 'voluptatibus';
    $request->numberGroupSeparator = 'perferendis';
    $request->password = 'fugiat';
    $request->timeFormat = ApiCoreDtoAccountingGuestTimeFormatEnum::AM_PM;
    $request->timeZone = 11714;
    $request->timeframeMinDate = '20120203120530';
    $request->timezonename = 'cumque';
    $request->tlGrants = 359978;
    $request->tpGrants = 944124;
    $request->userName = 'Morgan33';

    $response = $sdk->account->accountPutGuestJson($request);

    if ($response->apiCoreDtoAccountingGuest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPutGuestRaw

Create a guest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
'totam'

    $response = $sdk->account->accountPutGuestRaw($request);

    if ($response->apiCoreDtoAccountingGuest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPutIpBlacklistForm

Create an ip blacklist entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingIpBlacklistEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoAccountingIpBlacklistEntry();
    $request->id = '7053202c-73d5-4fe9-b90c-28909b3fe49a';
    $request->ip = 'deleniti';

    $response = $sdk->account->accountPutIpBlacklistForm($request);

    if ($response->apiCoreDtoAccountingIpBlacklistEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPutIpBlacklistJson

Create an ip blacklist entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoAccountingIpBlacklistEntry;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoAccountingIpBlacklistEntry();
    $request->id = 'd9cbf486-3332-43f9-b77f-3a4100674ebf';
    $request->ip = 'voluptas';

    $response = $sdk->account->accountPutIpBlacklistJson($request);

    if ($response->apiCoreDtoAccountingIpBlacklistEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accountPutIpBlacklistRaw

Create an ip blacklist entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
'natus'

    $response = $sdk->account->accountPutIpBlacklistRaw($request);

    if ($response->apiCoreDtoAccountingIpBlacklistEntry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAccountGuestsGuestIdTypePermissionsPatchForm

Change the permission on a shared object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountGuestsGuestIdTypePermissionsPatchFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsPermissionPatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountGuestsGuestIdTypePermissionsPatchFormTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAccountGuestsGuestIdTypePermissionsPatchFormRequest();
    $request->apiCoreRequestsPermissionPatchRequest = new ApiCoreRequestsPermissionPatchRequest();
    $request->apiCoreRequestsPermissionPatchRequest->action = 'eos';
    $request->apiCoreRequestsPermissionPatchRequest->id = 542499;
    $request->apiCoreRequestsPermissionPatchRequest->verb = 'sit';
    $request->guestId = 854614;
    $request->type = PostAccountGuestsGuestIdTypePermissionsPatchFormTypeEnum::DATAPOINT;

    $response = $sdk->account->postAccountGuestsGuestIdTypePermissionsPatchForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAccountGuestsGuestIdTypePermissionsPatchJson

Change the permission on a shared object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountGuestsGuestIdTypePermissionsPatchJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsPermissionPatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountGuestsGuestIdTypePermissionsPatchJsonTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAccountGuestsGuestIdTypePermissionsPatchJsonRequest();
    $request->apiCoreRequestsPermissionPatchRequest = new ApiCoreRequestsPermissionPatchRequest();
    $request->apiCoreRequestsPermissionPatchRequest->action = 'soluta';
    $request->apiCoreRequestsPermissionPatchRequest->id = 679393;
    $request->apiCoreRequestsPermissionPatchRequest->verb = 'iusto';
    $request->guestId = 453697;
    $request->type = PostAccountGuestsGuestIdTypePermissionsPatchJsonTypeEnum::GROUP;

    $response = $sdk->account->postAccountGuestsGuestIdTypePermissionsPatchJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAccountGuestsGuestIdTypePermissionsPatchRaw

Change the permission on a shared object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountGuestsGuestIdTypePermissionsPatchRawRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountGuestsGuestIdTypePermissionsPatchRawTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAccountGuestsGuestIdTypePermissionsPatchRawRequest();
    $request->requestBody = 'deleniti';
    $request->guestId = 607045;
    $request->type = PostAccountGuestsGuestIdTypePermissionsPatchRawTypeEnum::GROUP;

    $response = $sdk->account->postAccountGuestsGuestIdTypePermissionsPatchRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
