# channelCatalogsExclusionFilters

### Available Operations

* [configureChannelCatalogExclusionFilters](#configurechannelcatalogexclusionfilters) - Configure channel catalog exclusion filters
* [getChannelCatalogExclusionFilters](#getchannelcatalogexclusionfilters) - Get channel catalog exclusion filters

## configureChannelCatalogExclusionFilters

Configure channel catalog exclusion filters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureChannelCatalogExclusionFiltersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExclusionFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureChannelCatalogExclusionFiltersRequest();
    $request->requestBody = [
        new ExclusionFilter(),
        new ExclusionFilter(),
        new ExclusionFilter(),
        new ExclusionFilter(),
    ];
    $request->channelCatalogId = 'amet';

    $response = $sdk->channelCatalogsExclusionFilters->configureChannelCatalogExclusionFilters($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalogExclusionFilters

Get channel catalog exclusion filters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCatalogExclusionFiltersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCatalogExclusionFiltersRequest();
    $request->channelCatalogId = 'deserunt';

    $response = $sdk->channelCatalogsExclusionFilters->getChannelCatalogExclusionFilters($request);

    if ($response->exclusionFiltersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
