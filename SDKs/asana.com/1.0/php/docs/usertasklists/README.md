# userTaskLists

## Overview

A user task list represents the tasks assigned to a particular user. This list is the user's [My Tasks](https://asana.com/guide/help/fundamentals/my-tasks) list.

### Available Operations

* [getUserTaskList](#getusertasklist) - Get a user task list
* [getUserTaskListForUser](#getusertasklistforuser) - Get a user's task list

## getUserTaskList

Returns the full record for a user task list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserTaskListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserTaskListRequest();
    $request->optFields = [
        'error',
        'veniam',
        'minima',
        'recusandae',
    ];
    $request->optPretty = false;
    $request->userTaskListGid = 'reiciendis';

    $response = $sdk->userTaskLists->getUserTaskList($request);

    if ($response->getUserTaskList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserTaskListForUser

Returns the full record for a user's task list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserTaskListForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserTaskListForUserRequest();
    $request->optFields = [
        'magni',
        'aperiam',
        'saepe',
        'numquam',
    ];
    $request->optPretty = false;
    $request->userGid = 'veniam';
    $request->workspace = 'in';

    $response = $sdk->userTaskLists->getUserTaskListForUser($request);

    if ($response->getUserTaskListForUser200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
