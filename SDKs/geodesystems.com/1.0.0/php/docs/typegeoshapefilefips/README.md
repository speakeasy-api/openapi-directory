# typeGeoShapefileFips

## Overview

Search API for 'Shapefile with FIPS Code' entry type

### Available Operations

* [searchGeoShapefileFips](#searchgeoshapefilefips) - Search API for 'Shapefile with FIPS Code' entry type

## searchGeoShapefileFips

API to search for entries of type Shapefile with FIPS Code

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGeoShapefileFipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGeoShapefileFipsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-13T01:51:09.877Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-26T03:09:04.188Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-30T18:20:54.048Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-05T10:40:26.460Z');
    $request->description = 'hic';
    $request->filesuffix = 'deserunt';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-31T22:08:57.998Z');
    $request->group = 'distinctio';
    $request->max = 450224;
    $request->maxlatitude = 3499.93;
    $request->maxlongitude = 2883;
    $request->minlatitude = 2543.82;
    $request->minlongitude = 9211.93;
    $request->name = 'Maureen Champlin';
    $request->skip = 44016;
    $request->text = 'odit';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-14T18:52:42.885Z');

    $response = $sdk->typeGeoShapefileFips->searchGeoShapefileFips($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
