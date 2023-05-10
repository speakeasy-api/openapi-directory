# typeTripHotel

## Overview

Search API for 'Lodging' entry type

### Available Operations

* [searchTripHotel](#searchtriphotel) - Search API for 'Lodging' entry type

## searchTripHotel

API to search for entries of type Lodging

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTripHotelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTripHotelRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T04:04:20.256Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-29T07:26:39.700Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-28T09:26:08.422Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-29T09:33:34.942Z');
    $request->description = 'quae';
    $request->filesuffix = 'facere';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-09T09:22:24.048Z');
    $request->group = 'nam';
    $request->max = 225383;
    $request->maxlatitude = 2387.39;
    $request->maxlongitude = 7935.97;
    $request->minlatitude = 9438.28;
    $request->minlongitude = 6291.16;
    $request->name = 'Glenn Green';
    $request->skip = 240027;
    $request->text = 'veritatis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-19T09:57:07.431Z');

    $response = $sdk->typeTripHotel->searchTripHotel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
