# orders

## Overview

Creating, viewing, and canceling orders.

### Available Operations

* [deleteOrdersId](#deleteordersid) - Cancel an Order
* [getOrders](#getorders) - List of Orders
* [getOrder](#getorder) - Order Details
* [postOrders](#postorders) - New Order

## deleteOrdersId

Request an order is canceled to prevent shipment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrdersIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrdersIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrdersIdRequest();
    $request->id = 678880;

    $requestSecurity = new DeleteOrdersIdSecurity();
    $requestSecurity->fdcAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->deleteOrdersId($request, $requestSecurity);

    if ($response->oneordersPostResponses201ContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrders

Retrieve many orders at once

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrdersRequest;
use \OpenAPI\OpenAPI\Models\Shared\HydrateParamEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrdersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrdersRequest();
    $request->fromDate = 'dicta';
    $request->hydrate = [
        HydrateParamEnum::LINE_ITEMS,
        HydrateParamEnum::LINE_ITEMS,
        HydrateParamEnum::INTEGRATOR,
    ];
    $request->limit = 537373;
    $request->merchantIds = [
        758616,
        521848,
        105907,
        414662,
    ];
    $request->page = 473600;
    $request->toDate = 'modi';
    $request->warehouseIds = [
        774234,
    ];

    $requestSecurity = new GetOrdersSecurity();
    $requestSecurity->fdcAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->getOrders($request, $requestSecurity);

    if ($response->orderResponseOneOfV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrder

For the fastest results use the FDC provided `id` however you can use your `merchantOrderId` as the `id`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\HydrateParamEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderRequest();
    $request->hydrate = [
        HydrateParamEnum::LINE_ITEMS,
        HydrateParamEnum::INTEGRATOR,
        HydrateParamEnum::LINE_ITEMS,
    ];
    $request->id = '20592939-6fea-4759-aeb1-0faaa2352c59';
    $request->merchantId = 363711;

    $requestSecurity = new GetOrderSecurity();
    $requestSecurity->fdcAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->getOrder($request, $requestSecurity);

    if ($response->oneordersGetResponses200ContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOrders

Error Notes&#58;
* When `409 Conflict` is a 'Duplicate Order' the `context` will include the FDC `id`, see samples.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostOrdersOrderRequestV2;
use \OpenAPI\OpenAPI\Models\Operations\PostOrdersOrderRequestV2IntegratorEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostOrdersOrderRequestV2Items;
use \OpenAPI\OpenAPI\Models\Operations\PostOrdersOrderRequestV2ConsigneeNewV2;
use \OpenAPI\OpenAPI\Models\Operations\PostOrdersOrderRequestV2Warehouse;
use \OpenAPI\OpenAPI\Models\Operations\PostOrdersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOrdersOrderRequestV2();
    $request->integrator = PostOrdersOrderRequestV2IntegratorEnum::FOXY_CART;
    $request->items = [
        new PostOrdersOrderRequestV2Items(),
        new PostOrdersOrderRequestV2Items(),
        new PostOrdersOrderRequestV2Items(),
    ];
    $request->merchantId = 38425;
    $request->merchantOrderId = 'iure';
    $request->notes = 'culpa';
    $request->recipient = new PostOrdersOrderRequestV2ConsigneeNewV2();
    $request->recipient->address1 = 'doloribus';
    $request->recipient->address2 = 'sapiente';
    $request->recipient->addressLocality = 'architecto';
    $request->recipient->addressRegion = 'mollitia';
    $request->recipient->companyName = 'dolorem';
    $request->recipient->country = 'New Caledonia';
    $request->recipient->email = 'Zechariah.OHara@gmail.com';
    $request->recipient->firstName = 'Harvey';
    $request->recipient->lastName = 'Konopelski';
    $request->recipient->phone = '361.416.6317 x193';
    $request->recipient->postalCode = '80068-6099';
    $request->shippingMethod = 'Ground';
    $request->warehouse = new PostOrdersOrderRequestV2Warehouse();
    $request->warehouse->id = 878194;

    $requestSecurity = new PostOrdersSecurity();
    $requestSecurity->fdcAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->orders->postOrders($request, $requestSecurity);

    if ($response->orderResponseV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
