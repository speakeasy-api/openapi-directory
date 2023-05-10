# permissions

## Overview

Operations about permissions

### Available Operations

* [deletePermissionsId](#deletepermissionsid) - Delete Permission
* [getPermissions](#getpermissions) - List Permissions
* [postPermissions](#postpermissions) - Create Permission

## deletePermissionsId

Delete Permission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePermissionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePermissionsIdRequest();
    $request->id = 962771;

    $response = $sdk->permissions->deletePermissionsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPermissions

List Permissions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPermissionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPermissionsRequest();
    $request->cursor = 'voluptates';
    $request->filter = [
        'est' => 'quidem',
    ];
    $request->filterPrefix = [
        'facere' => 'fuga',
        'praesentium' => 'mollitia',
    ];
    $request->groupId = 'veniam';
    $request->includeGroups = false;
    $request->path = 'voluptatem';
    $request->perPage = 790840;
    $request->sortBy = [
        'quasi' => 'atque',
        'reprehenderit' => 'asperiores',
        'totam' => 'suscipit',
        'quidem' => 'maxime',
    ];
    $request->userId = 'et';

    $response = $sdk->permissions->getPermissions($request);

    if ($response->permissionEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPermissions

Create Permission

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPermissionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPermissionsRequestBody();
    $request->groupId = 461007;
    $request->path = 'amet';
    $request->permission = 'assumenda';
    $request->recursive = false;
    $request->userId = 410301;
    $request->username = 'Kameron_Mueller88';

    $response = $sdk->permissions->postPermissions($request);

    if ($response->permissionEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
