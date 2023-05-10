# typeGeoGe

## Overview

Search API for 'GeoJson File' entry type

### Available Operations

* [searchGeoGeojson](#searchgeogeojson) - Search API for 'GeoJson File' entry type

## searchGeoGeojson

API to search for entries of type GeoJson File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGeoGeojsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGeoGeojsonRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-16T07:44:14.632Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-09T04:56:37.970Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-01T03:10:08.438Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T12:36:58.674Z');
    $request->description = 'quis';
    $request->filesuffix = 'nisi';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-31T00:14:48.748Z');
    $request->group = 'facere';
    $request->max = 706061;
    $request->maxlatitude = 2176.63;
    $request->maxlongitude = 3189.17;
    $request->minlatitude = 9738.19;
    $request->minlongitude = 9745.89;
    $request->name = 'Raquel Greenfelder';
    $request->skip = 440777;
    $request->text = 'nostrum';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T18:39:59.383Z');

    $response = $sdk->typeGeoGe->searchGeoGeojson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
