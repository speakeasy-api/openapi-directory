# channelCatalogsLegacyTrackingGlobal

### Available Operations

* [getLegacyTrackingChannelCatalog](#getlegacytrackingchannelcatalog) - Get the channel catalog configured to use legacy tracking format information
* [getLegacyTrackingChannelCatalogs](#getlegacytrackingchannelcatalogs) - List all your current channel catalogs configured to use legacy tracking format
* [migrateLegacyTrackingChannelCatalog](#migratelegacytrackingchannelcatalog) - Migrate a channel catalog to current tracking format

## getLegacyTrackingChannelCatalog

Get the channel catalog configured to use legacy tracking format information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLegacyTrackingChannelCatalogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLegacyTrackingChannelCatalogRequest();
    $request->channelCatalogId = 'distinctio';

    $response = $sdk->channelCatalogsLegacyTrackingGlobal->getLegacyTrackingChannelCatalog($request);

    if ($response->legacyTrackingChannelCatalog !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLegacyTrackingChannelCatalogs

List all your current channel catalogs configured to use legacy tracking format

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLegacyTrackingChannelCatalogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLegacyTrackingChannelCatalogsRequest();
    $request->storeId = 'id';

    $response = $sdk->channelCatalogsLegacyTrackingGlobal->getLegacyTrackingChannelCatalogs($request);

    if ($response->legacyTrackingChannelCatalogList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrateLegacyTrackingChannelCatalog

Migrate a channel catalog to current tracking format

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrateLegacyTrackingChannelCatalogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrateLegacyTrackingChannelCatalogRequest();
    $request->channelCatalogId = 'labore';

    $response = $sdk->channelCatalogsLegacyTrackingGlobal->migrateLegacyTrackingChannelCatalog($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
