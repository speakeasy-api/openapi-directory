# usersCompanyLevel

### Available Operations

* [getCompaniesCompanyIdUsers](#getcompaniescompanyidusers) - Get a list of users
* [getCompaniesCompanyIdUsersUserId](#getcompaniescompanyidusersuserid) - Get user details
* [patchCompaniesCompanyIdUsersUserId](#patchcompaniescompanyidusersuserid) - Update user details
* [postCompaniesCompanyIdUsers](#postcompaniescompanyidusers) - Create a new user

## getCompaniesCompanyIdUsers

Returns the list of users for the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdUsersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdUsersRequest();
    $request->companyId = 'adipisci';
    $request->pageNumber = 683573;
    $request->pageSize = 662505;
    $request->username = 'George_Franecki';

    $requestSecurity = new GetCompaniesCompanyIdUsersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->usersCompanyLevel->getCompaniesCompanyIdUsers($request, $requestSecurity);

    if ($response->listCompanyUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdUsersUserId

Returns user details for the `userId` and the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdUsersUserIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdUsersUserIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdUsersUserIdRequest();
    $request->companyId = 'recusandae';
    $request->userId = 'totam';

    $requestSecurity = new GetCompaniesCompanyIdUsersUserIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->usersCompanyLevel->getCompaniesCompanyIdUsersUserId($request, $requestSecurity);

    if ($response->companyUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchCompaniesCompanyIdUsersUserId

Updates user details for the `userId` and the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchCompaniesCompanyIdUsersUserIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCompanyUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\Name2;
use \OpenAPI\OpenAPI\Models\Operations\PatchCompaniesCompanyIdUsersUserIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchCompaniesCompanyIdUsersUserIdRequest();
    $request->updateCompanyUserRequest = new UpdateCompanyUserRequest();
    $request->updateCompanyUserRequest->accountGroups = [
        'vel',
        'ducimus',
        'quos',
        'vel',
    ];
    $request->updateCompanyUserRequest->active = false;
    $request->updateCompanyUserRequest->associatedMerchantAccounts = [
        'possimus',
        'facilis',
    ];
    $request->updateCompanyUserRequest->authnAppsToAdd = [
        'commodi',
        'in',
        'corporis',
    ];
    $request->updateCompanyUserRequest->authnAppsToRemove = [
        'assumenda',
        'nemo',
        'recusandae',
        'aliquid',
    ];
    $request->updateCompanyUserRequest->email = 'Myrtice.Feest@gmail.com';
    $request->updateCompanyUserRequest->name = new Name2();
    $request->updateCompanyUserRequest->name->firstName = 'Tressa';
    $request->updateCompanyUserRequest->name->lastName = 'Schultz';
    $request->updateCompanyUserRequest->roles = [
        'doloribus',
        'suscipit',
    ];
    $request->updateCompanyUserRequest->timeZoneCode = 'reiciendis';
    $request->companyId = 'quidem';
    $request->userId = 'saepe';

    $requestSecurity = new PatchCompaniesCompanyIdUsersUserIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->usersCompanyLevel->patchCompaniesCompanyIdUsersUserId($request, $requestSecurity);

    if ($response->companyUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompaniesCompanyIdUsers

Creates the user for the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCompanyUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdUsersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompaniesCompanyIdUsersRequest();
    $request->createCompanyUserRequest = new CreateCompanyUserRequest();
    $request->createCompanyUserRequest->accountGroups = [
        'dolore',
        'sunt',
        'asperiores',
        'adipisci',
    ];
    $request->createCompanyUserRequest->associatedMerchantAccounts = [
        'amet',
    ];
    $request->createCompanyUserRequest->authnApps = [
        'dignissimos',
    ];
    $request->createCompanyUserRequest->email = 'Sim_Feest@hotmail.com';
    $request->createCompanyUserRequest->name = new Name();
    $request->createCompanyUserRequest->name->firstName = 'Germaine';
    $request->createCompanyUserRequest->name->lastName = 'Beer';
    $request->createCompanyUserRequest->roles = [
        'libero',
        'vitae',
        'accusamus',
        'similique',
    ];
    $request->createCompanyUserRequest->timeZoneCode = 'tempora';
    $request->createCompanyUserRequest->username = 'Brennon.Hoeger';
    $request->companyId = 'minima';

    $requestSecurity = new PostCompaniesCompanyIdUsersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->usersCompanyLevel->postCompaniesCompanyIdUsers($request, $requestSecurity);

    if ($response->createCompanyUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
