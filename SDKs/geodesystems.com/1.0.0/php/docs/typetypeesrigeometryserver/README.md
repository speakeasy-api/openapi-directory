# typeTypeEsriGeometryserver

## Overview

Search API for 'ESRI Geometry Server' entry type

### Available Operations

* [searchTypeEsriGeometryserver](#searchtypeesrigeometryserver) - Search API for 'ESRI Geometry Server' entry type

## searchTypeEsriGeometryserver

API to search for entries of type ESRI Geometry Server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEsriGeometryserverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeEsriGeometryserverRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-07T09:20:33.609Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-27T19:43:15.619Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-23T13:19:03.770Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-04T10:52:35.870Z');
    $request->description = 'architecto';
    $request->filesuffix = 'sint';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-20T13:37:06.781Z');
    $request->group = 'asperiores';
    $request->max = 98250;
    $request->maxlatitude = 1597.29;
    $request->maxlongitude = 3661.17;
    $request->minlatitude = 7519.01;
    $request->minlongitude = 8926.4;
    $request->name = 'Christine Harber';
    $request->skip = 625418;
    $request->text = 'expedita';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-18T04:27:16.690Z');

    $response = $sdk->typeTypeEsriGeometryserver->searchTypeEsriGeometryserver($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
