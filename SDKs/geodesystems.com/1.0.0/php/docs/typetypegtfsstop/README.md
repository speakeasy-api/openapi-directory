# typeTypeGtfsStop

## Overview

Search API for 'Transit Stop' entry type

### Available Operations

* [searchTypeGtfsStop](#searchtypegtfsstop) - Search API for 'Transit Stop' entry type

## searchTypeGtfsStop

API to search for entries of type Transit Stop

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeGtfsStopRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeGtfsStopRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-16T12:02:20.522Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T22:52:38.662Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-23T05:40:24.870Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-11T20:00:29.474Z');
    $request->description = 'placeat';
    $request->filesuffix = 'quos';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-12T02:35:45.315Z');
    $request->group = 'natus';
    $request->max = 191202;
    $request->maxlatitude = 4722.9;
    $request->maxlongitude = 6040.27;
    $request->minlatitude = 6463.21;
    $request->minlongitude = 6621.84;
    $request->name = 'Toni Rowe';
    $request->searchTypeGtfsStopLocationType = 'asperiores';
    $request->searchTypeGtfsStopStopCode = 'nam';
    $request->searchTypeGtfsStopStopId = 'cumque';
    $request->searchTypeGtfsStopWheelchairBoarding = 'sapiente';
    $request->searchTypeGtfsStopZoneId = 'quam';
    $request->skip = 579242;
    $request->text = 'repellendus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-05T02:48:45.510Z');

    $response = $sdk->typeTypeGtfsStop->searchTypeGtfsStop($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
