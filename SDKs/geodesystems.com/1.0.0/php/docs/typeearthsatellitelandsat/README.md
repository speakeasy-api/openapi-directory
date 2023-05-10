# typeEarthSatelliteLandsat

## Overview

Search API for 'Landsat Satellite Data' entry type

### Available Operations

* [searchEarthSatelliteLandsat](#searchearthsatellitelandsat) - Search API for 'Landsat Satellite Data' entry type

## searchEarthSatelliteLandsat

API to search for entries of type Landsat Satellite Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchEarthSatelliteLandsatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchEarthSatelliteLandsatRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T20:31:38.306Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-19T19:28:46.304Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-21T17:45:55.733Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-26T09:57:27.688Z');
    $request->description = 'rem';
    $request->filesuffix = 'fugiat';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T15:02:09.217Z');
    $request->group = 'consequuntur';
    $request->max = 233078;
    $request->maxlatitude = 468.06;
    $request->maxlongitude = 5854.32;
    $request->minlatitude = 9707.32;
    $request->minlongitude = 7468.37;
    $request->name = 'Belinda Daugherty';
    $request->searchEarthSatelliteLandsatArchiveVersionNumber = 170099;
    $request->searchEarthSatelliteLandsatGroundStation = 'inventore';
    $request->searchEarthSatelliteLandsatSatellite = 'fuga';
    $request->searchEarthSatelliteLandsatSensor = 'accusamus';
    $request->searchEarthSatelliteLandsatWrsPathNumber = 976802;
    $request->searchEarthSatelliteLandsatWrsRowNumber = 719620;
    $request->skip = 608593;
    $request->text = 'delectus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T17:06:44.946Z');

    $response = $sdk->typeEarthSatelliteLandsat->searchEarthSatelliteLandsat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
