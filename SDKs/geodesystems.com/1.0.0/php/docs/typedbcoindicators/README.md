# typeDbCoIndicators

## Overview

Search API for 'Colorado Health Indicators' entry type

### Available Operations

* [searchDbCoIndicators](#searchdbcoindicators) - Search API for 'Colorado Health Indicators' entry type

## searchDbCoIndicators

API to search for entries of type Colorado Health Indicators

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchDbCoIndicatorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchDbCoIndicatorsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T03:58:31.955Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-25T18:20:51.968Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-06T07:12:03.115Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-26T01:55:33.743Z');
    $request->description = 'nobis';
    $request->filesuffix = 'laboriosam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T08:51:26.881Z');
    $request->group = 'voluptatem';
    $request->max = 350207;
    $request->maxlatitude = 8956.92;
    $request->maxlongitude = 956.19;
    $request->minlatitude = 3925.69;
    $request->minlongitude = 8711.03;
    $request->name = 'Carlton Pollich';
    $request->searchDbDbCoIndicatorsDescription = 'repudiandae';
    $request->searchDbDbCoIndicatorsDomain = 'optio';
    $request->searchDbDbCoIndicatorsGeoName = 'occaecati';
    $request->searchDbDbCoIndicatorsIndicatorName = 'nemo';
    $request->searchDbDbCoIndicatorsLocation = 'voluptate';
    $request->searchDbDbCoIndicatorsMeasure = 5010.63;
    $request->searchDbDbCoIndicatorsSubdomain = 'officia';
    $request->skip = 376389;
    $request->text = 'numquam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-13T20:32:47.541Z');

    $response = $sdk->typeDbCoIndicators->searchDbCoIndicators($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
