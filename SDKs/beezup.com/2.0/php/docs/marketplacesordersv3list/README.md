# marketplacesOrdersV3List

### Available Operations

* [getOrderListFullV3](#getorderlistfullv3) - Get a paginated list of all Orders with all Order and Order Item(s) properties
* [getOrderListLightV3](#getorderlistlightv3) - Get a paginated list of all Orders without details

## getOrderListFullV3

The purpose of this operation is to reduce the amount of request to the API.\
\
Previous implmentation of this feature only returned a partial (light) version of the Orders. The purpose of this API is to reduce the number of incoming requests by returning the complete (full) Order and Order Item(s) properties.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderListFullV3Request;
use \OpenAPI\OpenAPI\Models\Shared\OrderListRequest;
use \OpenAPI\OpenAPI\Models\Shared\DateSearchTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderListFullV3Request();
    $request->acceptEncoding = 'adipisci';
    $request->orderListRequest = new OrderListRequest();
    $request->orderListRequest->accountIds = [
        1234,
        1234,
        1234,
        1234,
    ];
    $request->orderListRequest->beezUPOrderStatuses = [
        'Shipped',
    ];
    $request->orderListRequest->beginPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2017-03-01T13:10:01Z');
    $request->orderListRequest->dateSearchType = DateSearchTypeEnum::MODIFICATION;
    $request->orderListRequest->endPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2017-04-01T13:10:01Z');
    $request->orderListRequest->invoiceAvailabilityType = 'All';
    $request->orderListRequest->marketplaceBusinessCodes = [
        'GOSPORT',
        'GOSPORT',
        'GOSPORT',
        'GOSPORT',
    ];
    $request->orderListRequest->marketplaceOrderIds = [
        'AMAZON12345',
        'AMAZON12345',
    ];
    $request->orderListRequest->marketplaceTechnicalCodes = [
        'Amazon',
        'Amazon',
        'Amazon',
        'Amazon',
    ];
    $request->orderListRequest->orderMerchantInfoSynchronizationStatus = 'All';
    $request->orderListRequest->orderBuyerName = 'Monroe';
    $request->orderListRequest->orderMerchantOrderIds = [
        'MyOrderMerchantId',
    ];
    $request->orderListRequest->pageNumber = 1;
    $request->orderListRequest->pageSize = 100;
    $request->orderListRequest->storeIds = [
        '64f43358-63a1-47f7-97ec-0301fc39956b',
        '64f43358-63a1-47f7-97ec-0301fc39956b',
    ];

    $response = $sdk->marketplacesOrdersV3List->getOrderListFullV3($request);

    if ($response->orderListFullWithLinks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrderListLightV3

Get a paginated list of all Orders without details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OrderListRequest;
use \OpenAPI\OpenAPI\Models\Shared\DateSearchTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderListRequest();
    $request->accountIds = [
        1234,
        1234,
        1234,
    ];
    $request->beezUPOrderStatuses = [
        'Shipped',
        'Shipped',
        'Shipped',
    ];
    $request->beginPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2017-03-01T13:10:01Z');
    $request->dateSearchType = DateSearchTypeEnum::MARKET_PLACE_MODIFICATION;
    $request->endPeriodUtcDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2017-04-01T13:10:01Z');
    $request->invoiceAvailabilityType = 'All';
    $request->marketplaceBusinessCodes = [
        'GOSPORT',
        'GOSPORT',
        'GOSPORT',
        'GOSPORT',
    ];
    $request->marketplaceOrderIds = [
        'AMAZON12345',
        'AMAZON12345',
        'AMAZON12345',
    ];
    $request->marketplaceTechnicalCodes = [
        'Amazon',
        'Amazon',
    ];
    $request->orderMerchantInfoSynchronizationStatus = 'All';
    $request->orderBuyerName = 'Monroe';
    $request->orderMerchantOrderIds = [
        'MyOrderMerchantId',
    ];
    $request->pageNumber = 1;
    $request->pageSize = 100;
    $request->storeIds = [
        '64f43358-63a1-47f7-97ec-0301fc39956b',
        '64f43358-63a1-47f7-97ec-0301fc39956b',
        '64f43358-63a1-47f7-97ec-0301fc39956b',
        '64f43358-63a1-47f7-97ec-0301fc39956b',
    ];

    $response = $sdk->marketplacesOrdersV3List->getOrderListLightV3($request);

    if ($response->orderListLightWithLinks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
