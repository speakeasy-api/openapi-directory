# analytics

## Overview

Analytics Restv 2 Controller

### Available Operations

* [getAnalyticsDataUsingGET](#getanalyticsdatausingget) - Returns the results of executed query defined by the parameters passed in
* [getDataCountUsingGET](#getdatacountusingget) - Returns the count of executed query
* [getRetentionUsingGET](#getretentionusingget) - Returns the percentage of user retention over the last 30 days

## getAnalyticsDataUsingGET

Returns the results of executed query defined by the parameters passed in

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETAnalyticsDataUsingGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAnalyticsDataUsingGETDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAnalyticsDataUsingGETPrecisionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAnalyticsDataUsingGETStageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAnalyticsDataUsingGETRequest();
    $request->apiKey = 'error';
    $request->dataType = GETAnalyticsDataUsingGETDataTypeEnum::SESSION_ANALYTIC;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-07-25');
    $request->keys = 'magnam';
    $request->precision = GETAnalyticsDataUsingGETPrecisionEnum::MONTHLY;
    $request->stage = GETAnalyticsDataUsingGETStageEnum::LIVE;
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-03-08');

    $response = $sdk->analytics->getAnalyticsDataUsingGET($request);

    if ($response->analyticsDataSwaggerModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataCountUsingGET

Returns the count of executed query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETDataCountUsingGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDataCountUsingGETQueryNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDataCountUsingGETStageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDataCountUsingGETRequest();
    $request->apiKey = 'suscipit';
    $request->queryName = GETDataCountUsingGETQueryNameEnum::AVERAGE_DAILY_ACTIVE_USERS;
    $request->stage = GETDataCountUsingGETStageEnum::PREVIEW;

    $response = $sdk->analytics->getDataCountUsingGET($request);

    if ($response->analyticsDataCountSwaggerModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRetentionUsingGET

Returns the percentage of user retention over the last 30 days

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETRetentionUsingGETRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRetentionUsingGETStageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRetentionUsingGETRequest();
    $request->apiKey = 'placeat';
    $request->stage = GETRetentionUsingGETStageEnum::PREVIEW;

    $response = $sdk->analytics->getRetentionUsingGET($request);

    if ($response->analyticsDataCountSwaggerModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
