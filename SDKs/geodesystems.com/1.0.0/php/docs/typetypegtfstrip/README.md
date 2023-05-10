# typeTypeGtfsTrip

## Overview

Search API for 'Transit Trip' entry type

### Available Operations

* [searchTypeGtfsTrip](#searchtypegtfstrip) - Search API for 'Transit Trip' entry type

## searchTypeGtfsTrip

API to search for entries of type Transit Trip

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeGtfsTripRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeGtfsTripRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-18T16:38:13.772Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-02T02:24:08.784Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-07T08:21:07.346Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-24T09:30:03.833Z');
    $request->description = 'rem';
    $request->filesuffix = 'a';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-31T20:35:45.651Z');
    $request->group = 'aut';
    $request->max = 170126;
    $request->maxlatitude = 7002.04;
    $request->maxlongitude = 9766.41;
    $request->minlatitude = 8584.78;
    $request->minlongitude = 7967.05;
    $request->name = 'Ms. Joanne Halvorson';
    $request->searchTypeGtfsTripBikesAllowed = 'illo';
    $request->searchTypeGtfsTripStopIds = 'a';
    $request->searchTypeGtfsTripTripId = 'et';
    $request->searchTypeGtfsTripWheelchairAccessible = 'molestiae';
    $request->skip = 421111;
    $request->text = 'dolore';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-29T00:38:22.538Z');

    $response = $sdk->typeTypeGtfsTrip->searchTypeGtfsTrip($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
