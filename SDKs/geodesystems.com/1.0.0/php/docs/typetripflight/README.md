# typeTripFlight

## Overview

Search API for 'Flight Leg' entry type

### Available Operations

* [searchTripFlight](#searchtripflight) - Search API for 'Flight Leg' entry type

## searchTripFlight

API to search for entries of type Flight Leg

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTripFlightRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTripFlightRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-23T18:01:52.364Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-20T08:27:41.552Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-25T04:25:07.986Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-09T09:51:02.198Z');
    $request->description = 'similique';
    $request->filesuffix = 'possimus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-11T06:21:56.630Z');
    $request->group = 'ex';
    $request->max = 571550;
    $request->maxlatitude = 6668.17;
    $request->maxlongitude = 9835.56;
    $request->minlatitude = 5890.31;
    $request->minlongitude = 15.94;
    $request->name = 'Billy Jones';
    $request->skip = 805128;
    $request->text = 'facere';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-29T02:26:00.921Z');

    $response = $sdk->typeTripFlight->searchTripFlight($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
