# channelCatalogsColumnMappings

### Available Operations

* [configureChannelCatalogColumnMappings](#configurechannelcatalogcolumnmappings) - Configure channel catalog column mappings

## configureChannelCatalogColumnMappings

Configure channel catalog column mappings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureChannelCatalogColumnMappingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCatalogColumnMapping;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureChannelCatalogColumnMappingsRequest();
    $request->requestBody = [
        new ChannelCatalogColumnMapping(),
        new ChannelCatalogColumnMapping(),
        new ChannelCatalogColumnMapping(),
    ];
    $request->channelCatalogId = 'deleniti';

    $response = $sdk->channelCatalogsColumnMappings->configureChannelCatalogColumnMappings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
