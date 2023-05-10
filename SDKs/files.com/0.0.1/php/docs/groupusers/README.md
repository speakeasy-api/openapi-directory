# groupUsers

## Overview

Operations about group_users

### Available Operations

* [deleteGroupUsersId](#deletegroupusersid) - Delete Group User
* [getGroupUsers](#getgroupusers) - List Group Users
* [patchGroupUsersId](#patchgroupusersid) - Update Group User
* [postGroupUsers](#postgroupusers) - Create Group User

## deleteGroupUsersId

Delete Group User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupUsersIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupUsersIdRequest();
    $request->groupId = 392676;
    $request->id = 147014;
    $request->userId = 956406;

    $response = $sdk->groupUsers->deleteGroupUsersId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupUsers

List Group Users

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupUsersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupUsersRequest();
    $request->cursor = 'consequuntur';
    $request->groupId = 187131;
    $request->perPage = 129412;
    $request->userId = 903984;

    $response = $sdk->groupUsers->getGroupUsers($request);

    if ($response->groupUserEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchGroupUsersId

Update Group User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchGroupUsersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchGroupUsersIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchGroupUsersIdRequest();
    $request->requestBody = new PatchGroupUsersIdRequestBody();
    $request->requestBody->admin = false;
    $request->requestBody->groupId = 578922;
    $request->requestBody->userId = 543806;
    $request->id = 92260;

    $response = $sdk->groupUsers->patchGroupUsersId($request);

    if ($response->groupUserEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGroupUsers

Create Group User

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostGroupUsersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostGroupUsersRequestBody();
    $request->admin = false;
    $request->groupId = 456911;
    $request->userId = 910545;

    $response = $sdk->groupUsers->postGroupUsers($request);

    if ($response->groupUserEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
