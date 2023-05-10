# inventoryTask

### Available Operations

* [createInventoryTask](#createinventorytask) - This method creates an inventory-related download task for a specified feed type with optional filter criteria. When using this method, specify the <strong>feedType</strong>. <br/><br/>This method returns the location response header containing the <strong>getInventoryTask</strong> call URI to retrieve the inventory task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the inventory task.<br/><br/>To retrieve the status of the task, use the <strong>getInventoryTask</strong> method to retrieve a single task ID or the <strong>getInventoryTasks</strong> method to retrieve multiple task IDs.<p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p>Presently, this method supports Active Inventory Report. The <strong>ActiveInventoryReport</strong> returns a report that contains price and quantity information for all of the active listings for a specific seller. A seller can use this information to maintain their inventory on eBay.
* [getInventoryTask](#getinventorytask) - This method retrieves the task details and status of the specified inventory-related task. The input is <strong>task_id</strong>.
* [getInventoryTasks](#getinventorytasks) - This method searches for multiple tasks of a specific feed type, and includes date filters and pagination.

## createInventoryTask

This method creates an inventory-related download task for a specified feed type with optional filter criteria. When using this method, specify the <strong>feedType</strong>. <br/><br/>This method returns the location response header containing the <strong>getInventoryTask</strong> call URI to retrieve the inventory task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the inventory task.<br/><br/>To retrieve the status of the task, use the <strong>getInventoryTask</strong> method to retrieve a single task ID or the <strong>getInventoryTasks</strong> method to retrieve multiple task IDs.<p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p>Presently, this method supports Active Inventory Report. The <strong>ActiveInventoryReport</strong> returns a report that contains price and quantity information for all of the active listings for a specific seller. A seller can use this information to maintain their inventory on eBay.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateInventoryTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\InventoryFilterCriteria;
use \OpenAPI\OpenAPI\Models\Operations\CreateInventoryTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInventoryTaskRequest();
    $request->feedType = 'repellendus';
    $request->filterCriteria = new InventoryFilterCriteria();
    $request->filterCriteria->listingFormat = 'sapiente';
    $request->schemaVersion = 'quo';

    $requestSecurity = new CreateInventoryTaskSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventoryTask->createInventoryTask($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInventoryTask

This method retrieves the task details and status of the specified inventory-related task. The input is <strong>task_id</strong>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInventoryTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInventoryTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInventoryTaskRequest();
    $request->taskId = 'odit';

    $requestSecurity = new GetInventoryTaskSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventoryTask->getInventoryTask($request, $requestSecurity);

    if ($response->inventoryTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInventoryTasks

This method searches for multiple tasks of a specific feed type, and includes date filters and pagination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInventoryTasksRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInventoryTasksSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInventoryTasksRequest();
    $request->dateRange = 'at';
    $request->feedType = 'at';
    $request->limit = 'maiores';
    $request->lookBackDays = 'molestiae';
    $request->offset = 'quod';
    $request->scheduleId = 'quod';

    $requestSecurity = new GetInventoryTasksSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventoryTask->getInventoryTasks($request, $requestSecurity);

    if ($response->inventoryTaskCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
