# typeTypePointOceanNetcdfTrack

## Overview

Search API for 'NetCDF Track Data' entry type

### Available Operations

* [searchTypePointOceanNetcdfTrack](#searchtypepointoceannetcdftrack) - Search API for 'NetCDF Track Data' entry type

## searchTypePointOceanNetcdfTrack

API to search for entries of type NetCDF Track Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointOceanNetcdfTrackRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointOceanNetcdfTrackRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-02T13:17:48.183Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T02:21:50.640Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-07T10:08:56.987Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-21T23:31:37.125Z');
    $request->description = 'sint';
    $request->filesuffix = 'accusamus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-14T13:20:05.965Z');
    $request->group = 'consequuntur';
    $request->max = 318471;
    $request->maxlatitude = 7926.76;
    $request->maxlongitude = 8421.68;
    $request->minlatitude = 348.63;
    $request->minlongitude = 8588.57;
    $request->name = 'Geneva Stamm';
    $request->searchTypePointOceanNetcdfTrackPlatform = 'sint';
    $request->skip = 984080;
    $request->text = 'magnam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T02:43:28.817Z');

    $response = $sdk->typeTypePointOceanNetcdfTrack->searchTypePointOceanNetcdfTrack($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
