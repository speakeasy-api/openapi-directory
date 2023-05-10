# typeGeoGpx

## Overview

Search API for 'GPX GPS File' entry type

### Available Operations

* [searchGeoGpx](#searchgeogpx) - Search API for 'GPX GPS File' entry type

## searchGeoGpx

API to search for entries of type GPX GPS File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGeoGpxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGeoGpxRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-28T13:51:54.669Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-08T14:51:04.568Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-30T04:42:17.193Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-01T01:40:36.755Z');
    $request->description = 'quisquam';
    $request->filesuffix = 'sequi';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-19T18:12:14.535Z');
    $request->group = 'illo';
    $request->max = 290248;
    $request->maxlatitude = 8288.41;
    $request->maxlongitude = 3041.73;
    $request->minlatitude = 7904.63;
    $request->minlongitude = 5910.65;
    $request->name = 'Cornelius Altenwerth';
    $request->searchGeoGpxDistance = 7239.42;
    $request->searchGeoGpxElevationGain = 7119.91;
    $request->searchGeoGpxElevationLoss = 5591.74;
    $request->searchGeoGpxMovingTime = 5908.58;
    $request->searchGeoGpxSpeed = 9222.99;
    $request->searchGeoGpxTotalTime = 7000.45;
    $request->skip = 492361;
    $request->text = 'corporis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-10T19:58:48.033Z');

    $response = $sdk->typeGeoGpx->searchGeoGpx($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
