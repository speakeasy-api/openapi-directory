# typeTripTrip

## Overview

Search API for 'Trip' entry type

### Available Operations

* [searchTripTrip](#searchtriptrip) - Search API for 'Trip' entry type

## searchTripTrip

API to search for entries of type Trip

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTripTripRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTripTripRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-09T13:31:45.084Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-10T17:05:42.553Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-11T11:22:54.568Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-16T13:36:46.452Z');
    $request->description = 'maxime';
    $request->filesuffix = 'maxime';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-04T20:35:09.945Z');
    $request->group = 'ea';
    $request->max = 771321;
    $request->maxlatitude = 5184.32;
    $request->maxlongitude = 7622.97;
    $request->minlatitude = 6651.83;
    $request->minlongitude = 815.41;
    $request->name = 'Kari Balistreri';
    $request->skip = 136432;
    $request->text = 'perspiciatis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-07T09:19:49.741Z');

    $response = $sdk->typeTripTrip->searchTripTrip($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
