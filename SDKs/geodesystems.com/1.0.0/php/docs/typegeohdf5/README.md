# typeGeoHdf5

## Overview

Search API for 'HDF5 File' entry type

### Available Operations

* [searchGeoHdf5](#searchgeohdf5) - Search API for 'HDF5 File' entry type

## searchGeoHdf5

API to search for entries of type HDF5 File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGeoHdf5Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGeoHdf5Request();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-11T20:45:20.947Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-02T23:06:10.498Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-03T12:56:33.515Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T07:11:32.953Z');
    $request->description = 'ad';
    $request->filesuffix = 'quae';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-24T23:57:50.783Z');
    $request->group = 'praesentium';
    $request->max = 695526;
    $request->maxlatitude = 7368.53;
    $request->maxlongitude = 2304.11;
    $request->minlatitude = 976.76;
    $request->minlongitude = 1181.26;
    $request->name = 'Ronald Wehner';
    $request->skip = 587967;
    $request->text = 'dolorum';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-22T19:06:23.209Z');

    $response = $sdk->typeGeoHdf5->searchGeoHdf5($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
