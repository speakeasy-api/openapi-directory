# marketplacesOrdersV3Order

### Available Operations

* [changeOrderV3](#changeorderv3) - Change your marketplace Order Information (accept, ship, etc.)
* [clearMerchantOrderInfoV3](#clearmerchantorderinfov3) - Clear an Order's merchant information
* [getOrderChangeReportingV3](#getorderchangereportingv3) - Get the order change reporting
* [getOrderHistoryV3](#getorderhistoryv3) - Get an Order's harvest and change history
* [getOrderV3](#getorderv3) - Get full Order and Order Item(s) properties
* [harvestAccount](#harvestaccount) - Send harvest request for an Account
* [harvestOrderV3](#harvestorderv3) - Send harvest request for a single Order
* [headOrderV3](#headorderv3) - Get the meta information about the order (ETag, Last-Modified)
* [setMerchantOrderInfoV3](#setmerchantorderinfov3) - Set an Order's merchant information

## changeOrderV3

Change your marketplace Order Information (accept, ship, etc.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeOrderV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeOrderV3Request();
    $request->requestBody = [
        'sint' => 'pariatur',
        'possimus' => 'quia',
        'eveniet' => 'asperiores',
    ];
    $request->accountId = 815524;
    $request->beezUPOrderId = '121aa6f1-e674-4bdb-84f1-5756082d68ea';
    $request->changeOrderType = 'architecto';
    $request->marketplaceTechnicalCode = 'omnis';
    $request->testMode = false;
    $request->userName = 'Tyrese.Boyle45';

    $response = $sdk->marketplacesOrdersV3Order->changeOrderV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clearMerchantOrderInfoV3

Clear an Order's merchant information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClearMerchantOrderInfoV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearMerchantOrderInfoV3Request();
    $request->accountId = 55965;
    $request->beezUPOrderId = '51339d08-086a-4184-8394-c26071f93f5f';
    $request->marketplaceTechnicalCode = 'aperiam';
    $request->testMode = false;

    $response = $sdk->marketplacesOrdersV3Order->clearMerchantOrderInfoV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrderChangeReportingV3

This operation will help you to know the status of your order change operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderChangeReportingV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderChangeReportingV3Request();
    $request->accountId = 409054;
    $request->beezUPOrderId = '42dac7af-515c-4c41-baa6-3aae8d67864d';
    $request->marketplaceTechnicalCode = 'facilis';
    $request->orderChangeExecutionUUID = 'cum';

    $response = $sdk->marketplacesOrdersV3Order->getOrderChangeReportingV3($request);

    if ($response->changeOrderReporting !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrderHistoryV3

Get an Order's harvest and change history

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderHistoryV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderHistoryV3Request();
    $request->accountId = 414857;
    $request->beezUPOrderId = '75fd5e60-b375-4ed4-b6fb-ee41f33317fe';
    $request->marketplaceTechnicalCode = 'consectetur';

    $response = $sdk->marketplacesOrdersV3Order->getOrderHistoryV3($request);

    if ($response->orderHistory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrderV3

Get full Order and Order Item(s) properties

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderV3Request();
    $request->ifNoneMatch = 'corporis';
    $request->accountId = 689768;
    $request->beezUPOrderId = '60eb1ea4-2655-45ba-bc28-744ed53b88f3';
    $request->marketplaceTechnicalCode = 'culpa';

    $response = $sdk->marketplacesOrdersV3Order->getOrderV3($request);

    if ($response->orderWithLinks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## harvestAccount

Send harvest request for an Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HarvestAccountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HarvestAccountRequest();
    $request->accountId = 548519;
    $request->beezUPOrderId = 'pariatur';
    $request->marketplaceOrderId = 'totam';
    $request->marketplaceTechnicalCode = 'hic';

    $response = $sdk->marketplacesOrdersV3Order->harvestAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## harvestOrderV3

Send harvest request for a single Order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HarvestOrderV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HarvestOrderV3Request();
    $request->accountId = 348783;
    $request->beezUPOrderId = 'c0b2f2fb-7b19-44a2-b6b2-6916fe1f08f4';
    $request->marketplaceTechnicalCode = 'sed';

    $response = $sdk->marketplacesOrdersV3Order->harvestOrderV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## headOrderV3

The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.
This could be useful


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadOrderV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HeadOrderV3Request();
    $request->ifNoneMatch = 'provident';
    $request->accountId = 258702;
    $request->beezUPOrderId = 'e3698f44-7f60-43e8-b445-e80ca55efd20';
    $request->marketplaceTechnicalCode = 'saepe';

    $response = $sdk->marketplacesOrdersV3Order->headOrderV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setMerchantOrderInfoV3

Set an Order's merchant information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SetMerchantOrderInfoV3Request;
use \OpenAPI\OpenAPI\Models\Shared\SetMerchantOrderInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetMerchantOrderInfoV3Request();
    $request->accountId = 253642;
    $request->beezUPOrderId = '57e1858b-6a89-4fbe-ba5a-a8e4824d0ab4';
    $request->marketplaceTechnicalCode = 'consequatur';
    $request->setMerchantOrderInfoRequest = new SetMerchantOrderInfoRequest();
    $request->setMerchantOrderInfoRequest->orderMerchantECommerceSoftwareName = 'Prestashop';
    $request->setMerchantOrderInfoRequest->orderMerchantECommerceSoftwareVersion = '123.0.1';
    $request->setMerchantOrderInfoRequest->orderMerchantOrderId = 'MyOrderMerchantId';
    $request->testMode = false;

    $response = $sdk->marketplacesOrdersV3Order->setMerchantOrderInfoV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
