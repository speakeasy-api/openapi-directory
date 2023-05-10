# typeTypePointOceanNetcdfGlider

## Overview

Search API for 'NetCDF Glider Data' entry type

### Available Operations

* [searchTypePointOceanNetcdfGlider](#searchtypepointoceannetcdfglider) - Search API for 'NetCDF Glider Data' entry type

## searchTypePointOceanNetcdfGlider

API to search for entries of type NetCDF Glider Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointOceanNetcdfGliderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointOceanNetcdfGliderRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-30T16:10:24.701Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-17T17:28:36.302Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-09T08:30:53.107Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-20T23:52:32.501Z');
    $request->description = 'corporis';
    $request->filesuffix = 'consequuntur';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-15T13:53:40.574Z');
    $request->group = 'quis';
    $request->max = 747358;
    $request->maxlatitude = 1074.24;
    $request->maxlongitude = 8313.04;
    $request->minlatitude = 4021.21;
    $request->minlongitude = 1628.49;
    $request->name = 'Loren Schuster';
    $request->searchTypePointOceanNetcdfTrackPlatform = 'debitis';
    $request->skip = 100926;
    $request->text = 'reiciendis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-16T13:43:29.251Z');

    $response = $sdk->typeTypePointOceanNetcdfGlider->searchTypePointOceanNetcdfGlider($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
