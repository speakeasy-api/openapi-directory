# typeTypeEsriRestserver

## Overview

Search API for 'ESRI Web Server' entry type

### Available Operations

* [searchTypeEsriRestserver](#searchtypeesrirestserver) - Search API for 'ESRI Web Server' entry type

## searchTypeEsriRestserver

API to search for entries of type ESRI Web Server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEsriRestserverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeEsriRestserverRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T22:40:23.758Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-09T22:17:56.070Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-15T18:05:43.333Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-02T12:55:59.519Z');
    $request->description = 'beatae';
    $request->filesuffix = 'sequi';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-27T22:00:03.556Z');
    $request->group = 'debitis';
    $request->max = 339118;
    $request->maxlatitude = 546.77;
    $request->maxlongitude = 2774.18;
    $request->minlatitude = 2814.36;
    $request->minlongitude = 9622.8;
    $request->name = 'Samantha Wolff';
    $request->skip = 181041;
    $request->text = 'assumenda';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-27T04:10:09.693Z');

    $response = $sdk->typeTypeEsriRestserver->searchTypeEsriRestserver($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
