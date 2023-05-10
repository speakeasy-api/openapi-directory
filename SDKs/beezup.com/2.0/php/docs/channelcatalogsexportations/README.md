# channelCatalogsExportations

### Available Operations

* [clearChannelCatalogExportationCache](#clearchannelcatalogexportationcache) - Clear the exportation cache
* [getChannelCatalogExportationCacheInfo](#getchannelcatalogexportationcacheinfo) - Get the exportation cache information
* [getChannelCatalogExportationHistory](#getchannelcatalogexportationhistory) - Get the exportation history

## clearChannelCatalogExportationCache

Clear the exportation cache

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClearChannelCatalogExportationCacheRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearChannelCatalogExportationCacheRequest();
    $request->channelCatalogId = 'nisi';

    $response = $sdk->channelCatalogsExportations->clearChannelCatalogExportationCache($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalogExportationCacheInfo

Get the exportation cache information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCatalogExportationCacheInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCatalogExportationCacheInfoRequest();
    $request->channelCatalogId = 'vel';

    $response = $sdk->channelCatalogsExportations->getChannelCatalogExportationCacheInfo($request);

    if ($response->channelCatalogExportCacheInfoResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalogExportationHistory

Get the exportation history

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCatalogExportationHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCatalogExportationHistoryRequest();
    $request->channelCatalogId = 'natus';
    $request->pageNumber = 606393;
    $request->pageSize = 474867;

    $response = $sdk->channelCatalogsExportations->getChannelCatalogExportationHistory($request);

    if ($response->channelCatalogExportationHistory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
