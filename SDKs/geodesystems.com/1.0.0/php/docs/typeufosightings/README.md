# typeUfoSightings

## Overview

Search API for 'Ufo Sightings' entry type

### Available Operations

* [searchUfoSightings](#searchufosightings) - Search API for 'Ufo Sightings' entry type

## searchUfoSightings

API to search for entries of type Ufo Sightings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchUfoSightingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchUfoSightingsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-21T13:08:52.539Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-19T00:24:16.492Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-18T16:55:04.907Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-22T23:18:05.416Z');
    $request->description = 'itaque';
    $request->filesuffix = 'assumenda';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-17T00:29:41.636Z');
    $request->group = 'a';
    $request->max = 465190;
    $request->maxlatitude = 5536.34;
    $request->maxlongitude = 4937.74;
    $request->minlatitude = 9366.83;
    $request->minlongitude = 2369.1;
    $request->name = 'Delia Bartell';
    $request->searchDbUfoSightingsCity = 'nesciunt';
    $request->searchDbUfoSightingsComments = 'pariatur';
    $request->searchDbUfoSightingsCountry = 'velit';
    $request->searchDbUfoSightingsDatePosted = 'necessitatibus';
    $request->searchDbUfoSightingsDatetime = 'facere';
    $request->searchDbUfoSightingsDurationHoursMin = 'quae';
    $request->searchDbUfoSightingsDurationSeconds = 7685.46;
    $request->searchDbUfoSightingsLatitude = 3532.32;
    $request->searchDbUfoSightingsLongitude = 4271.07;
    $request->searchDbUfoSightingsShape = 'reprehenderit';
    $request->searchDbUfoSightingsState = 'aut';
    $request->skip = 926225;
    $request->text = 'voluptatibus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T15:01:42.389Z');

    $response = $sdk->typeUfoSightings->searchUfoSightings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
