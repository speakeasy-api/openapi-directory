# typeTypeEsriGpserver

## Overview

Search API for 'ESRI GP Server' entry type

### Available Operations

* [searchTypeEsriGpserver](#searchtypeesrigpserver) - Search API for 'ESRI GP Server' entry type

## searchTypeEsriGpserver

API to search for entries of type ESRI GP Server

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEsriGpserverRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeEsriGpserverRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-21T00:52:09.696Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-07T15:32:11.672Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-11T12:25:57.456Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-17T17:41:13.405Z');
    $request->description = 'vel';
    $request->filesuffix = 'dolorum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-26T09:43:06.454Z');
    $request->group = 'ab';
    $request->max = 125154;
    $request->maxlatitude = 2264.91;
    $request->maxlongitude = 7370.61;
    $request->minlatitude = 4811.02;
    $request->minlongitude = 5465.4;
    $request->name = 'Tamara Terry';
    $request->skip = 607276;
    $request->text = 'recusandae';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-10T04:51:48.901Z');

    $response = $sdk->typeTypeEsriGpserver->searchTypeEsriGpserver($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
