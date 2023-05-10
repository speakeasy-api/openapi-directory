# permissionGroups

## Overview

With these endpoints you can manage your Permission Groups.

<a href="https://configcat.com/docs/advanced/team-collaboration#permissions--groups" target="_blank" rel="noopener noreferrer">Here</a> you can read more about Permissions.

### Available Operations

* [createPermissionGroup](#createpermissiongroup) - Create Permission Group
* [deletePermissionGroup](#deletepermissiongroup) - Delete Permission Group
* [getPermissionGroup](#getpermissiongroup) - Get Permission Group
* [getPermissionGroups](#getpermissiongroups) - List Permission Groups
* [updatePermissionGroup](#updatepermissiongroup) - Update Permission Group

## createPermissionGroup

This endpoint creates a new Permission Group in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePermissionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePermissionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateOrUpdateEnvironmentAccessModel;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAccessTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePermissionGroupRequest();
    $request->createPermissionGroupRequest = new CreatePermissionGroupRequest();
    $request->createPermissionGroupRequest->accessType = AccessTypeEnum::FULL;
    $request->createPermissionGroupRequest->canCreateOrUpdateConfig = false;
    $request->createPermissionGroupRequest->canCreateOrUpdateEnvironment = false;
    $request->createPermissionGroupRequest->canCreateOrUpdateSegments = false;
    $request->createPermissionGroupRequest->canCreateOrUpdateSetting = false;
    $request->createPermissionGroupRequest->canCreateOrUpdateTag = false;
    $request->createPermissionGroupRequest->canDeleteConfig = false;
    $request->createPermissionGroupRequest->canDeleteEnvironment = false;
    $request->createPermissionGroupRequest->canDeleteSegments = false;
    $request->createPermissionGroupRequest->canDeleteSetting = false;
    $request->createPermissionGroupRequest->canDeleteTag = false;
    $request->createPermissionGroupRequest->canManageIntegrations = false;
    $request->createPermissionGroupRequest->canManageMembers = false;
    $request->createPermissionGroupRequest->canManageProductPreferences = false;
    $request->createPermissionGroupRequest->canManageWebhook = false;
    $request->createPermissionGroupRequest->canRotateSDKKey = false;
    $request->createPermissionGroupRequest->canTagSetting = false;
    $request->createPermissionGroupRequest->canUseExportImport = false;
    $request->createPermissionGroupRequest->canViewProductAuditLog = false;
    $request->createPermissionGroupRequest->canViewProductStatistics = false;
    $request->createPermissionGroupRequest->canViewSDKKey = false;
    $request->createPermissionGroupRequest->environmentAccesses = [
        new CreateOrUpdateEnvironmentAccessModel(),
        new CreateOrUpdateEnvironmentAccessModel(),
        new CreateOrUpdateEnvironmentAccessModel(),
        new CreateOrUpdateEnvironmentAccessModel(),
    ];
    $request->createPermissionGroupRequest->name = 'Alton Hintz';
    $request->createPermissionGroupRequest->newEnvironmentAccessType = EnvironmentAccessTypeEnum::FULL;
    $request->productId = '18143010-4218-413d-9208-ece7e253b668';

    $response = $sdk->permissionGroups->createPermissionGroup($request);

    if ($response->permissionGroupModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePermissionGroup

This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePermissionGroupRequest();
    $request->permissionGroupId = 301692;

    $response = $sdk->permissionGroups->deletePermissionGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPermissionGroup

This endpoint returns the metadata of a Permission Group 
identified by the `permissionGroupId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPermissionGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPermissionGroupRequest();
    $request->permissionGroupId = 349440;

    $response = $sdk->permissionGroups->getPermissionGroup($request);

    if ($response->permissionGroupModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPermissionGroups

This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPermissionGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPermissionGroupsRequest();
    $request->productId = '1c6c6e20-5e16-4dea-b3fe-c9578a645842';

    $response = $sdk->permissionGroups->getPermissionGroups($request);

    if ($response->permissionGroupModelHaljsons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePermissionGroup

This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePermissionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePermissionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateOrUpdateEnvironmentAccessModel;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAccessTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePermissionGroupRequest();
    $request->updatePermissionGroupRequest = new UpdatePermissionGroupRequest();
    $request->updatePermissionGroupRequest->accessType = AccessTypeEnum::FULL;
    $request->updatePermissionGroupRequest->canCreateOrUpdateConfig = false;
    $request->updatePermissionGroupRequest->canCreateOrUpdateEnvironment = false;
    $request->updatePermissionGroupRequest->canCreateOrUpdateSegments = false;
    $request->updatePermissionGroupRequest->canCreateOrUpdateSetting = false;
    $request->updatePermissionGroupRequest->canCreateOrUpdateTag = false;
    $request->updatePermissionGroupRequest->canDeleteConfig = false;
    $request->updatePermissionGroupRequest->canDeleteEnvironment = false;
    $request->updatePermissionGroupRequest->canDeleteSegments = false;
    $request->updatePermissionGroupRequest->canDeleteSetting = false;
    $request->updatePermissionGroupRequest->canDeleteTag = false;
    $request->updatePermissionGroupRequest->canManageIntegrations = false;
    $request->updatePermissionGroupRequest->canManageMembers = false;
    $request->updatePermissionGroupRequest->canManageProductPreferences = false;
    $request->updatePermissionGroupRequest->canManageWebhook = false;
    $request->updatePermissionGroupRequest->canRotateSDKKey = false;
    $request->updatePermissionGroupRequest->canTagSetting = false;
    $request->updatePermissionGroupRequest->canUseExportImport = false;
    $request->updatePermissionGroupRequest->canViewProductAuditLog = false;
    $request->updatePermissionGroupRequest->canViewProductStatistics = false;
    $request->updatePermissionGroupRequest->canViewSDKKey = false;
    $request->updatePermissionGroupRequest->environmentAccesses = [
        new CreateOrUpdateEnvironmentAccessModel(),
    ];
    $request->updatePermissionGroupRequest->name = 'Ms. Armando Gottlieb';
    $request->updatePermissionGroupRequest->newEnvironmentAccessType = EnvironmentAccessTypeEnum::FULL;
    $request->permissionGroupId = 395544;

    $response = $sdk->permissionGroups->updatePermissionGroup($request);

    if ($response->permissionGroupModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
