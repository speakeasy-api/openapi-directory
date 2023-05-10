# marketplacesOrdersV3Batches

### Available Operations

* [changeOrderListV2](#changeorderlistv2) - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* [changeOrderListV3](#changeorderlistv3) - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
* [clearMerchantOrderInfoListV3](#clearmerchantorderinfolistv3) - Send a batch of operations to clear an Order's merchant information (max 100 items per call)
* [setMerchantOrderInfoListV3](#setmerchantorderinfolistv3) - Send a batch of operations to set an Order's merchant information  (max 100 items per call)

## changeOrderListV2

The purpose of this operation is to reduce the amount of request to the API. 
Max 100 items per call.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeOrderListV2Request;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOrderListRequestV2;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOrderListRequestItemV2;
use \OpenAPI\OpenAPI\Models\Shared\OrderIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeOrderListV2Request();
    $request->changeOrderListRequestV2 = new ChangeOrderListRequestV2();
    $request->changeOrderListRequestV2->changeOrders = [
        new ChangeOrderListRequestItemV2(),
    ];
    $request->changeOrderType = 'esse';
    $request->testMode = false;
    $request->userName = 'Talon45';

    $response = $sdk->marketplacesOrdersV3Batches->changeOrderListV2($request);

    if ($response->batchOrderOperationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeOrderListV3

The purpose of this operation is to reduce the amount of request to the API. 
Max 100 items per call.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeOrderListV3Request;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOrderListRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOrderListRequestItem;
use \OpenAPI\OpenAPI\Models\Shared\OrderIdentifierWithETag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeOrderListV3Request();
    $request->changeOrderListRequest = new ChangeOrderListRequest();
    $request->changeOrderListRequest->changeOrders = [
        new ChangeOrderListRequestItem(),
        new ChangeOrderListRequestItem(),
        new ChangeOrderListRequestItem(),
        new ChangeOrderListRequestItem(),
    ];
    $request->testMode = false;
    $request->userName = 'Modesta.Terry';

    $response = $sdk->marketplacesOrdersV3Batches->changeOrderListV3($request);

    if ($response->batchOrderOperationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clearMerchantOrderInfoListV3

The purpose of this operation is to reduce the amount of request to the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClearMerchantOrderInfoListV3Request;
use \OpenAPI\OpenAPI\Models\Shared\ClearMerchantOrderInfoListRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearMerchantOrderInfoListV3Request();
    $request->clearMerchantOrderInfoListRequest = new ClearMerchantOrderInfoListRequest();
    $request->clearMerchantOrderInfoListRequest->orders = [
        new OrderIdentifier(),
        new OrderIdentifier(),
        new OrderIdentifier(),
        new OrderIdentifier(),
    ];
    $request->testMode = false;

    $response = $sdk->marketplacesOrdersV3Batches->clearMerchantOrderInfoListV3($request);

    if ($response->batchOrderOperationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setMerchantOrderInfoListV3

The purpose of this operation is to reduce the amount of request to the API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetMerchantOrderInfoListV3Request;
use \OpenAPI\OpenAPI\Models\Shared\SetMerchantOrderInfoListRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetMerchantOrderInfoListRequestItem;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetMerchantOrderInfoListV3Request();
    $request->setMerchantOrderInfoListRequest = new SetMerchantOrderInfoListRequest();
    $request->setMerchantOrderInfoListRequest->orderMerchantECommerceSoftwareName = 'Prestashop';
    $request->setMerchantOrderInfoListRequest->orderMerchantECommerceSoftwareVersion = '123.0.1';
    $request->setMerchantOrderInfoListRequest->orders = [
        new SetMerchantOrderInfoListRequestItem(),
        new SetMerchantOrderInfoListRequestItem(),
    ];
    $request->testMode = false;

    $response = $sdk->marketplacesOrdersV3Batches->setMerchantOrderInfoListV3($request);

    if ($response->batchOrderOperationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
