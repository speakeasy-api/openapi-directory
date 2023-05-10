# marketplacesOrdersOrder

### Available Operations

* [~~changeOrder~~](#changeorder) - [DEPRECATED] Change your marketplace Order Information (accept, ship, etc.) :warning: **Deprecated**
* [~~clearMerchantOrderInfo~~](#clearmerchantorderinfo) - [DEPRECATED] Clear an Order's merchant information :warning: **Deprecated**
* [~~getOrder~~](#getorder) - [DEPRECATED] DEPRECATED - Get full Order and Order Item(s) properties :warning: **Deprecated**
* [~~getOrderHistory~~](#getorderhistory) - [DEPRECATED] Get an Order's harvest and change history :warning: **Deprecated**
* [~~harvestOrder~~](#harvestorder) - [DEPRECATED] Send harvest request for a single Order :warning: **Deprecated**
* [~~headOrder~~](#headorder) - [DEPRECATED] DEPRECATED - Get the meta information about the order (ETag, Last-Modified) :warning: **Deprecated**
* [~~setMerchantOrderInfo~~](#setmerchantorderinfo) - [DEPRECATED] Set an Order's merchant information :warning: **Deprecated**

## ~~changeOrder~~

[DEPRECATED] Change your marketplace Order Information (accept, ship, etc.)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeOrderRequest();
    $request->ifMatch = 'neque';
    $request->requestBody = [
        'vel' => 'libero',
    ];
    $request->accountId = 374170;
    $request->beezUPOrderId = 'a73429cd-b1a8-4422-bb67-9d2322715bf0';
    $request->changeOrderType = 'cumque';
    $request->marketplaceTechnicalCode = 'soluta';
    $request->testMode = false;
    $request->userName = 'Nella.Bosco8';

    $response = $sdk->marketplacesOrdersOrder->changeOrder($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~clearMerchantOrderInfo~~

[DEPRECATED] Clear an Order's merchant information

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClearMerchantOrderInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearMerchantOrderInfoRequest();
    $request->accountId = 749255;
    $request->beezUPOrderId = '8b90f344-3a11-408e-8adc-f4b921879fce';
    $request->marketplaceTechnicalCode = 'omnis';

    $response = $sdk->marketplacesOrdersOrder->clearMerchantOrderInfo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getOrder~~

DEPRECATED - Use /orders/v3 instead

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderRequest();
    $request->ifNoneMatch = 'quis';
    $request->accountId = 218403;
    $request->beezUPOrderId = 'f73ef7fb-c7ab-4d74-9d39-c0f5d2cff7c7';
    $request->marketplaceTechnicalCode = 'alias';

    $response = $sdk->marketplacesOrdersOrder->getOrder($request);

    if ($response->order !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getOrderHistory~~

[DEPRECATED] Get an Order's harvest and change history

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderHistoryRequest();
    $request->ifNoneMatch = 'officia';
    $request->accountId = 269479;
    $request->beezUPOrderId = '5626d436-813f-416d-9f5f-ce6c556146c3';
    $request->marketplaceTechnicalCode = 'recusandae';

    $response = $sdk->marketplacesOrdersOrder->getOrderHistory($request);

    if ($response->orderHistory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~harvestOrder~~

[DEPRECATED] Send harvest request for a single Order

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HarvestOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HarvestOrderRequest();
    $request->accountId = 132487;
    $request->beezUPOrderId = '50fb008c-42e1-441a-ac36-6c8dd6b14429';
    $request->marketplaceTechnicalCode = 'ipsa';

    $response = $sdk->marketplacesOrdersOrder->harvestOrder($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~headOrder~~

DEPRECATED - Use /orders/v3 instead
The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.
This could be useful


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HeadOrderRequest();
    $request->ifNoneMatch = 'molestiae';
    $request->accountId = 301598;
    $request->beezUPOrderId = '74778a7b-d466-4d28-810a-b3cdca425190';
    $request->marketplaceTechnicalCode = 'tempora';

    $response = $sdk->marketplacesOrdersOrder->headOrder($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~setMerchantOrderInfo~~

[DEPRECATED] Set an Order's merchant information

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetMerchantOrderInfoRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetMerchantOrderInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetMerchantOrderInfoRequest();
    $request->accountId = 892050;
    $request->beezUPOrderId = '523c7e0b-c717-48e4-b96f-2a70c688282a';
    $request->marketplaceTechnicalCode = 'mollitia';
    $request->setMerchantOrderInfoRequest = new SetMerchantOrderInfoRequest();
    $request->setMerchantOrderInfoRequest->orderMerchantECommerceSoftwareName = 'Prestashop';
    $request->setMerchantOrderInfoRequest->orderMerchantECommerceSoftwareVersion = '123.0.1';
    $request->setMerchantOrderInfoRequest->orderMerchantOrderId = 'MyOrderMerchantId';

    $response = $sdk->marketplacesOrdersOrder->setMerchantOrderInfo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
