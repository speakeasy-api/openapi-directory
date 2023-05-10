# typeTypePointNetcdf

## Overview

Search API for 'NetCDF Point File' entry type

### Available Operations

* [searchTypePointNetcdf](#searchtypepointnetcdf) - Search API for 'NetCDF Point File' entry type

## searchTypePointNetcdf

API to search for entries of type NetCDF Point File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointNetcdfRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointNetcdfRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-22T21:28:33.711Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-03T04:08:50.103Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-24T13:14:37.287Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-07T11:36:17.844Z');
    $request->description = 'in';
    $request->filesuffix = 'rerum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-29T07:13:23.289Z');
    $request->group = 'saepe';
    $request->max = 25737;
    $request->maxlatitude = 7625.4;
    $request->maxlongitude = 7743.53;
    $request->minlatitude = 5493.32;
    $request->minlongitude = 5603.74;
    $request->name = 'Carolyn Macejkovic';
    $request->skip = 287293;
    $request->text = 'nulla';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-21T09:24:31.624Z');

    $response = $sdk->typeTypePointNetcdf->searchTypePointNetcdf($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
