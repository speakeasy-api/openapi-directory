# marketplacesOrdersExports

### Available Operations

* [exportOrders](#exportorders) - Request a new Order report exportation to be generated
* [getOrderExportations](#getorderexportations) - Get a paginated list of Order report exportations

## exportOrders

A new file will be generated containing a summary of all the Orders matching the requested filter settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ExportOrderListRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportOrderListFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderListRequestWithoutPagination;
use \OpenAPI\OpenAPI\Models\Shared\DateSearchTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportOrderListRequest();
    $request->format = ExportOrderListFormatEnum::CSV;
    $request->orderListRequestWithoutPagination = new OrderListRequestWithoutPagination();
    $request->orderListRequestWithoutPagination->accountIds = [
        1234,
        1234,
        1234,
        1234,
    ];
    $request->orderListRequestWithoutPagination->beezUPOrderStatuses = [
        'Shipped',
        'Shipped',
    ];
    $request->orderListRequestWithoutPagination->beginPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2017-03-01T13:10:01Z');
    $request->orderListRequestWithoutPagination->dateSearchType = DateSearchTypeEnum::MARKET_PLACE_MODIFICATION;
    $request->orderListRequestWithoutPagination->endPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2017-04-01T13:10:01Z');
    $request->orderListRequestWithoutPagination->invoiceAvailabilityType = 'All';
    $request->orderListRequestWithoutPagination->marketplaceBusinessCodes = [
        'GOSPORT',
        'GOSPORT',
    ];
    $request->orderListRequestWithoutPagination->marketplaceOrderIds = [
        'AMAZON12345',
        'AMAZON12345',
        'AMAZON12345',
    ];
    $request->orderListRequestWithoutPagination->marketplaceTechnicalCodes = [
        'Amazon',
        'Amazon',
        'Amazon',
    ];
    $request->orderListRequestWithoutPagination->orderMerchantInfoSynchronizationStatus = 'All';
    $request->orderListRequestWithoutPagination->orderBuyerName = 'Monroe';
    $request->orderListRequestWithoutPagination->orderMerchantOrderIds = [
        'MyOrderMerchantId',
        'MyOrderMerchantId',
    ];
    $request->orderListRequestWithoutPagination->storeIds = [
        '64f43358-63a1-47f7-97ec-0301fc39956b',
        '64f43358-63a1-47f7-97ec-0301fc39956b',
        '64f43358-63a1-47f7-97ec-0301fc39956b',
        '64f43358-63a1-47f7-97ec-0301fc39956b',
    ];
    $request->storeId = '64f43358-63a1-47f7-97ec-0301fc39956b';

    $response = $sdk->marketplacesOrdersExports->exportOrders($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrderExportations

Get a paginated list of Order report exportations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderExportationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderExportationsRequest();
    $request->ifNoneMatch = 'totam';
    $request->pageNumber = 628982;
    $request->pageSize = 55;
    $request->storeId = 'at';

    $response = $sdk->marketplacesOrdersExports->getOrderExportations($request);

    if ($response->orderExportations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
