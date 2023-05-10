# usersMerchantLevel

### Available Operations

* [getMerchantsMerchantIdUsers](#getmerchantsmerchantidusers) - Get a list of users
* [getMerchantsMerchantIdUsersUserId](#getmerchantsmerchantidusersuserid) - Get user details
* [patchMerchantsMerchantIdUsersUserId](#patchmerchantsmerchantidusersuserid) - Update a user
* [postMerchantsMerchantIdUsers](#postmerchantsmerchantidusers) - Create a new user

## getMerchantsMerchantIdUsers

Returns a list of users associated with the `merchantId` specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdUsersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdUsersRequest();
    $request->merchantId = 'nobis';
    $request->pageNumber = 680116;
    $request->pageSize = 237807;
    $request->username = 'Pete.DAmore';

    $requestSecurity = new GetMerchantsMerchantIdUsersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->usersMerchantLevel->getMerchantsMerchantIdUsers($request, $requestSecurity);

    if ($response->listMerchantUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdUsersUserId

Returns user details for the `userId` and the `merchantId` specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdUsersUserIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdUsersUserIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdUsersUserIdRequest();
    $request->merchantId = 'dolore';
    $request->userId = 'aliquam';

    $requestSecurity = new GetMerchantsMerchantIdUsersUserIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->usersMerchantLevel->getMerchantsMerchantIdUsersUserId($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMerchantsMerchantIdUsersUserId

Updates user details for the `userId` and the `merchantId` specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdUsersUserIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMerchantUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\Name2;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdUsersUserIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMerchantsMerchantIdUsersUserIdRequest();
    $request->updateMerchantUserRequest = new UpdateMerchantUserRequest();
    $request->updateMerchantUserRequest->accountGroups = [
        'temporibus',
        'ullam',
        'adipisci',
        'cum',
    ];
    $request->updateMerchantUserRequest->active = false;
    $request->updateMerchantUserRequest->authnAppsToAdd = [
        'quas',
        'hic',
        'nesciunt',
    ];
    $request->updateMerchantUserRequest->authnAppsToRemove = [
        'corrupti',
        'pariatur',
        'totam',
    ];
    $request->updateMerchantUserRequest->email = 'Fausto69@hotmail.com';
    $request->updateMerchantUserRequest->name = new Name2();
    $request->updateMerchantUserRequest->name->firstName = 'Calista';
    $request->updateMerchantUserRequest->name->lastName = 'Wisoky';
    $request->updateMerchantUserRequest->roles = [
        'asperiores',
    ];
    $request->updateMerchantUserRequest->timeZoneCode = 'facilis';
    $request->merchantId = 'voluptate';
    $request->userId = 'expedita';

    $requestSecurity = new PatchMerchantsMerchantIdUsersUserIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->usersMerchantLevel->patchMerchantsMerchantIdUsersUserId($request, $requestSecurity);

    if ($response->user !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdUsers

Creates a user for the `merchantId` specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMerchantUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdUsersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdUsersRequest();
    $request->createMerchantUserRequest = new CreateMerchantUserRequest();
    $request->createMerchantUserRequest->accountGroups = [
        'iste',
    ];
    $request->createMerchantUserRequest->authnApps = [
        'laborum',
        'sed',
    ];
    $request->createMerchantUserRequest->email = 'Haylie37@yahoo.com';
    $request->createMerchantUserRequest->name = new Name();
    $request->createMerchantUserRequest->name->firstName = 'Leilani';
    $request->createMerchantUserRequest->name->lastName = 'Bradtke';
    $request->createMerchantUserRequest->roles = [
        'sapiente',
        'debitis',
    ];
    $request->createMerchantUserRequest->timeZoneCode = 'illo';
    $request->createMerchantUserRequest->username = 'Viviane_Aufderhar';
    $request->merchantId = 'incidunt';

    $requestSecurity = new PostMerchantsMerchantIdUsersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->usersMerchantLevel->postMerchantsMerchantIdUsers($request, $requestSecurity);

    if ($response->createUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
