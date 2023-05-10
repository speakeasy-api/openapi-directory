# typeGeoShapefile

## Overview

Search API for 'Shapefile' entry type

### Available Operations

* [searchGeoShapefile](#searchgeoshapefile) - Search API for 'Shapefile' entry type

## searchGeoShapefile

API to search for entries of type Shapefile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGeoShapefileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGeoShapefileRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-06T12:29:45.421Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T08:20:32.050Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-09T04:08:42.865Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-27T10:34:01.168Z');
    $request->description = 'consectetur';
    $request->filesuffix = 'eligendi';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T22:05:31.165Z');
    $request->group = 'soluta';
    $request->max = 620500;
    $request->maxlatitude = 8398.07;
    $request->maxlongitude = 6396.22;
    $request->minlatitude = 2288.57;
    $request->minlongitude = 9485.41;
    $request->name = 'Angelica Waters';
    $request->skip = 490420;
    $request->text = 'vero';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T04:19:24.254Z');

    $response = $sdk->typeGeoShapefile->searchGeoShapefile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
