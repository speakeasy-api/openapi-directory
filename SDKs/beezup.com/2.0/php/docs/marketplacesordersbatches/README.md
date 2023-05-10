# marketplacesOrdersBatches

### Available Operations

* [~~changeOrderList~~](#changeorderlist) - [DEPRECATED] Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call) :warning: **Deprecated**
* [~~clearMerchantOrderInfoList~~](#clearmerchantorderinfolist) - [DEPRECATED] Send a batch of operations to clear an Order's merchant information (max 100 items per call) :warning: **Deprecated**
* [~~setMerchantOrderInfoList~~](#setmerchantorderinfolist) - [DEPRECATED] Send a batch of operations to set an Order's merchant information  (max 100 items per call) :warning: **Deprecated**

## ~~changeOrderList~~

The purpose of this operation is to reduce the amount of request to the API. 
Max 100 items per call.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeOrderListRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOrderListRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOrderListRequestItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderIdentifierWithETag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeOrderListRequest();
    $request->changeOrderListRequest = new ChangeOrderListRequest();
    $request->changeOrderListRequest->changeOrders = [
        new ChangeOrderListRequestItem(),
        new ChangeOrderListRequestItem(),
    ];
    $request->changeOrderType = 'id';
    $request->testMode = false;
    $request->userName = 'Suzanne2';

    $response = $sdk->marketplacesOrdersBatches->changeOrderList($request);

    if ($response->batchOrderOperationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~clearMerchantOrderInfoList~~

The purpose of this operation is to reduce the amount of request to the API.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ClearMerchantOrderInfoListRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearMerchantOrderInfoListRequest();
    $request->orders = [
        new OrderIdentifier(),
    ];

    $response = $sdk->marketplacesOrdersBatches->clearMerchantOrderInfoList($request);

    if ($response->batchOrderOperationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~setMerchantOrderInfoList~~

The purpose of this operation is to reduce the amount of request to the API.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SetMerchantOrderInfoListRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetMerchantOrderInfoListRequestItem;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetMerchantOrderInfoListRequest();
    $request->orderMerchantECommerceSoftwareName = 'Prestashop';
    $request->orderMerchantECommerceSoftwareVersion = '123.0.1';
    $request->orders = [
        new SetMerchantOrderInfoListRequestItem(),
        new SetMerchantOrderInfoListRequestItem(),
        new SetMerchantOrderInfoListRequestItem(),
        new SetMerchantOrderInfoListRequestItem(),
    ];

    $response = $sdk->marketplacesOrdersBatches->setMerchantOrderInfoList($request);

    if ($response->batchOrderOperationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
