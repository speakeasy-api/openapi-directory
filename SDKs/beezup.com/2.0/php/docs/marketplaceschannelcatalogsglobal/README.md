# marketplacesChannelCatalogsGlobal

### Available Operations

* [getMarketplaceChannelCatalogs](#getmarketplacechannelcatalogs) - Get your marketplace channel catalog list

## getMarketplaceChannelCatalogs

Get your marketplace channel catalog list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMarketplaceChannelCatalogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMarketplaceChannelCatalogsRequest();
    $request->storeId = 'odio';

    $response = $sdk->marketplacesChannelCatalogsGlobal->getMarketplaceChannelCatalogs($request);

    if ($response->marketplaceChannelCatalogList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
