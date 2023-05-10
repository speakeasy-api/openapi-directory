# inventory

### Available Operations

* [getInventory](#getinventory) - List of Item Inventories

## getInventory

Retrieve inventory for one or more items. This API requires elevated permissions, please speak to your success manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInventoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInventorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInventoryRequest();
    $request->externalSkuNames = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->limit = 957156;
    $request->merchantIds = [
        140350,
        870013,
        870088,
        978619,
    ];
    $request->page = 473608;
    $request->warehouseIds = [
        800911,
        461479,
        520478,
        780529,
    ];

    $requestSecurity = new GetInventorySecurity();
    $requestSecurity->fdcAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->inventory->getInventory($request, $requestSecurity);

    if ($response->itemInventoryArrayV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
