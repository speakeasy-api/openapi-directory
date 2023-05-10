# groups

## Overview

Registry artifacts can be collected together using groups. This section includes all of the primary operations related to groups.

### Available Operations

* [createGroup](#creategroup) - Create a new group
* [deleteGroupById](#deletegroupbyid) - Delete a group by the specified ID.
* [getGroupById](#getgroupbyid) - Get a group by the specified ID.
* [listGroups](#listgroups) - List groups

## createGroup

Creates a new group.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)
* The group already exist (HTTP error `409`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateGroupMetaData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGroupMetaData();
    $request->description = 'fuga';
    $request->id = '7596eb10-faaa-4235-ac59-55907aff1a3a';
    $request->properties = [
        'repellat' => 'mollitia',
    ];

    $response = $sdk->groups->createGroup($request);

    if ($response->groupMetaData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGroupById

Deletes a group by identifier.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)
* The group does not exist (HTTP error `404`)


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGroupByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGroupByIdRequest();
    $request->groupId = '"my-group"';

    $response = $sdk->groups->deleteGroupById($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGroupById

Returns a group using the specified id.

This operation can fail for the following reasons:

* No group exists with the specified ID (HTTP error `404`)
* A server error occurred (HTTP error `500`)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGroupByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGroupByIdRequest();
    $request->groupId = '"my-group"';

    $response = $sdk->groups->getGroupById($request);

    if ($response->groupMetaData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGroups

Returns a list of all groups.  This list is paged.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListGroupsRequest();
    $request->limit = 581850;
    $request->offset = 253291;
    $request->order = SortOrderEnum::ASC;
    $request->orderby = SortByEnum::NAME;

    $response = $sdk->groups->listGroups($request);

    if ($response->groupSearchResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
