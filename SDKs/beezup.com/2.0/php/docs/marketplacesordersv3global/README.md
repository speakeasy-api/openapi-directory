# marketplacesOrdersV3Global

### Available Operations

* [getMarketplaceAccountsSynchronizationV3](#getmarketplaceaccountssynchronizationv3) - Get current synchronization status between your marketplaces and BeezUP accounts
* [getOrderManagementReadyMarketplaceBusinessCode](#getordermanagementreadymarketplacebusinesscode) - Get the list of MarketplaceBusinessCode ready for Order Management
* [harvestAllV3](#harvestallv3) - Send harvest request to all your marketplaces

## getMarketplaceAccountsSynchronizationV3

Get current synchronization status between your marketplaces and BeezUP accounts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMarketplaceAccountsSynchronizationV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMarketplaceAccountsSynchronizationV3Request();
    $request->ifNoneMatch = 'harum';
    $request->storeIds = [
        'rerum',
        'occaecati',
    ];

    $response = $sdk->marketplacesOrdersV3Global->getMarketplaceAccountsSynchronizationV3($request);

    if ($response->accountSynchronizationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrderManagementReadyMarketplaceBusinessCode

Get the list of MarketplaceBusinessCode ready for Order Management

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderManagementReadyMarketplaceBusinessCodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderManagementReadyMarketplaceBusinessCodeRequest();
    $request->acceptLanguage = [
        'distinctio',
        'eligendi',
    ];
    $request->storeIds = [
        'culpa',
    ];

    $response = $sdk->marketplacesOrdersV3Global->getOrderManagementReadyMarketplaceBusinessCode($request);

    if ($response->oMReadyMarketplaceBusinessCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## harvestAllV3

Send harvest request to all your marketplaces

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HarvestAllV3Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HarvestAllV3Request();
    $request->storeId = 'tempore';

    $response = $sdk->marketplacesOrdersV3Global->harvestAllV3($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
