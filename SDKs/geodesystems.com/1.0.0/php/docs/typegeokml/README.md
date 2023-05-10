# typeGeoKml

## Overview

Search API for 'KML/KMZ File' entry type

### Available Operations

* [searchGeoKml](#searchgeokml) - Search API for 'KML/KMZ File' entry type

## searchGeoKml

API to search for entries of type KML/KMZ File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGeoKmlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGeoKmlRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T23:31:33.018Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T07:45:44.709Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-15T21:30:50.859Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-29T21:33:00.572Z');
    $request->description = 'sint';
    $request->filesuffix = 'accusamus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-25T04:05:11.831Z');
    $request->group = 'dicta';
    $request->max = 30661;
    $request->maxlatitude = 2443.76;
    $request->maxlongitude = 2244.13;
    $request->minlatitude = 1242.89;
    $request->minlongitude = 9536.76;
    $request->name = 'Dr. Misty Lindgren';
    $request->skip = 794988;
    $request->text = 'esse';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-24T08:28:37.764Z');

    $response = $sdk->typeGeoKml->searchGeoKml($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
