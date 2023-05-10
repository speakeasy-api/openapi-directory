# typeTypePointNoaaFlaskEvent

## Overview

Search API for 'NOAA Flask Event Measurements' entry type

### Available Operations

* [searchTypePointNoaaFlaskEvent](#searchtypepointnoaaflaskevent) - Search API for 'NOAA Flask Event Measurements' entry type

## searchTypePointNoaaFlaskEvent

API to search for entries of type NOAA Flask Event Measurements

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointNoaaFlaskEventRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointNoaaFlaskEventRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-25T19:35:03.327Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-13T00:34:09.899Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T04:19:22.805Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-09T08:21:03.844Z');
    $request->description = 'enim';
    $request->filesuffix = 'cumque';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-26T18:20:37.660Z');
    $request->group = 'blanditiis';
    $request->max = 93299;
    $request->maxlatitude = 9636;
    $request->maxlongitude = 1287.44;
    $request->minlatitude = 6117.83;
    $request->minlongitude = 182.85;
    $request->name = 'Judy Will';
    $request->searchTypePointNoaaFlaskEventLabIdNumber = 'iste';
    $request->searchTypePointNoaaFlaskEventMeasurementGroup = 'quidem';
    $request->searchTypePointNoaaFlaskEventParameter = 'iusto';
    $request->searchTypePointNoaaFlaskEventProject = 'culpa';
    $request->searchTypePointNoaaFlaskEventSiteId = 'reiciendis';
    $request->skip = 952911;
    $request->text = 'consequatur';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-19T20:04:09.350Z');

    $response = $sdk->typeTypePointNoaaFlaskEvent->searchTypePointNoaaFlaskEvent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
