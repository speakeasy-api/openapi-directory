# marketplacesOrdersGlobal

### Available Operations

* [~~getMarketplaceAccountsSynchronization~~](#getmarketplaceaccountssynchronization) - [DEPRECATED] Get current synchronization status between your marketplaces and BeezUP accounts :warning: **Deprecated**
* [~~getOrderIndex~~](#getorderindex) - [DEPRECATED] Get all actions you can do on the order API :warning: **Deprecated**
* [~~harvestAll~~](#harvestall) - [DEPRECATED] Send harvest request to all your marketplaces :warning: **Deprecated**

## ~~getMarketplaceAccountsSynchronization~~

Use /orders/v3

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMarketplaceAccountsSynchronizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMarketplaceAccountsSynchronizationRequest();
    $request->ifNoneMatch = 'quaerat';
    $request->storeId = 'tempora';

    $response = $sdk->marketplacesOrdersGlobal->getMarketplaceAccountsSynchronization($request);

    if ($response->accountSynchronizationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getOrderIndex~~

[DEPRECATED] Get all actions you can do on the order API

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderIndexRequest();
    $request->ifNoneMatch = 'vel';

    $response = $sdk->marketplacesOrdersGlobal->getOrderIndex($request);

    if ($response->orderIndex !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~harvestAll~~

[DEPRECATED] Send harvest request to all your marketplaces

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HarvestAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HarvestAllRequest();
    $request->storeId = 'quod';

    $response = $sdk->marketplacesOrdersGlobal->harvestAll($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
