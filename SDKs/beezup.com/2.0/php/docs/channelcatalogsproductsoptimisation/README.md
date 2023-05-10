# channelCatalogsProductsOptimisation

### Available Operations

* [disableChannelCatalogProduct](#disablechannelcatalogproduct) - Disable channel catalog product
* [reenableChannelCatalogProduct](#reenablechannelcatalogproduct) - Reenable channel catalog product

## disableChannelCatalogProduct

By default a all your catalog products are exposed to the channel.
You can disable a product by using this operation.
/!\ In case of massive optimisation we recommand you to use the analytics api


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisableChannelCatalogProductRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableChannelCatalogProductRequest();
    $request->channelCatalogId = 'corporis';
    $request->productId = 'hic';

    $response = $sdk->channelCatalogsProductsOptimisation->disableChannelCatalogProduct($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reenableChannelCatalogProduct

By default a all your catalog products are exposed to the channel.
You can reenable a product by using this operation.
/!\ In case of massive optimisation we recommand you to use the analytics api


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReenableChannelCatalogProductRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReenableChannelCatalogProductRequest();
    $request->channelCatalogId = 'libero';
    $request->productId = 'nobis';

    $response = $sdk->channelCatalogsProductsOptimisation->reenableChannelCatalogProduct($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
