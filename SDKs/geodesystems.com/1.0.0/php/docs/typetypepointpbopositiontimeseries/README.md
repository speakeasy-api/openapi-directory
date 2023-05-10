# typeTypePointPboPositionTimeSeries

## Overview

Search API for 'PBO Position Time Series' entry type

### Available Operations

* [searchTypePointPboPositionTimeSeries](#searchtypepointpbopositiontimeseries) - Search API for 'PBO Position Time Series' entry type

## searchTypePointPboPositionTimeSeries

API to search for entries of type PBO Position Time Series

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointPboPositionTimeSeriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointPboPositionTimeSeriesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-13T23:07:49.934Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-06T21:53:41.627Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-01T15:55:43.983Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-28T15:54:56.449Z');
    $request->description = 'accusamus';
    $request->filesuffix = 'excepturi';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-04T03:46:01.468Z');
    $request->group = 'perspiciatis';
    $request->max = 18173;
    $request->maxlatitude = 3581.57;
    $request->maxlongitude = 3525.96;
    $request->minlatitude = 4754.03;
    $request->minlongitude = 2405.45;
    $request->name = 'Enrique Ruecker';
    $request->searchTypePointPboPositionTimeSeriesFormatVersion = 'nam';
    $request->searchTypePointPboPositionTimeSeriesFourCharId = 'id';
    $request->searchTypePointPboPositionTimeSeriesProcessingCenter = 'cumque';
    $request->searchTypePointPboPositionTimeSeriesReferenceFrame = 'in';
    $request->searchTypePointPboPositionTimeSeriesStationName = 'a';
    $request->skip = 844799;
    $request->text = 'culpa';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-04T03:04:36.464Z');

    $response = $sdk->typeTypePointPboPositionTimeSeries->searchTypePointPboPositionTimeSeries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
