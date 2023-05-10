# info

## Overview

TLD Statistics

### Available Operations

* [getInfoTld](#getinfotld) - Returns overall Tld info
* [getInfoTldZone](#getinfotldzone) - Returns statistics for specific zone
* [getApiInfoItem](#getapiinfoitem)
* [getStatisticsCollection](#getstatisticscollection) - Returns overall stagtistics
* [getStatisticsItem](#getstatisticsitem) - Returns statistics for specific zone

## getInfoTld

Returns overall Tld info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->info->getInfoTld();

    if ($response->zoneInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInfoTldZone

Returns statistics for specific zone

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInfoTldZoneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInfoTldZoneRequest();
    $request->limit = 758616;
    $request->page = 'totam';
    $request->zone = 'beatae';

    $response = $sdk->info->getInfoTldZone($request);

    if ($response->zoneInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiInfoItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiInfoItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiInfoItemRequest();
    $request->apiKey = 'commodi';

    $response = $sdk->info->getApiInfoItem($request);

    if ($response->apiKeyInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatisticsCollection

Returns overall stagtistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStatisticsCollectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatisticsCollectionRequest();
    $request->limit = 473600;
    $request->page = 'modi';

    $response = $sdk->info->getStatisticsCollection($request);

    if ($response->zoneStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatisticsItem

Returns statistics for specific zone

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStatisticsItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatisticsItemRequest();
    $request->limit = 186332;
    $request->page = 'impedit';
    $request->zone = 'cum';

    $response = $sdk->info->getStatisticsItem($request);

    if ($response->zoneStats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
