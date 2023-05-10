# typeGeoGeotiff

## Overview

Search API for 'GeoTIFF' entry type

### Available Operations

* [searchGeoGeotiff](#searchgeogeotiff) - Search API for 'GeoTIFF' entry type

## searchGeoGeotiff

API to search for entries of type GeoTIFF

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGeoGeotiffRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGeoGeotiffRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-15T19:28:43.232Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-10T07:13:59.609Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-22T16:52:21.456Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-12T15:53:23.836Z');
    $request->description = 'dicta';
    $request->filesuffix = 'error';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-31T21:53:00.029Z');
    $request->group = 'dignissimos';
    $request->max = 458970;
    $request->maxlatitude = 8541.15;
    $request->maxlongitude = 3223.33;
    $request->minlatitude = 1348.18;
    $request->minlongitude = 3165.01;
    $request->name = 'Tyrone Kulas Jr.';
    $request->skip = 280114;
    $request->text = 'accusamus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-18T09:05:37.895Z');

    $response = $sdk->typeGeoGeotiff->searchGeoGeotiff($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
