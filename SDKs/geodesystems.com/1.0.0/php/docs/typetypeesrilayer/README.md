# typeTypeEsriLayer

## Overview

Search API for 'ESRI Layer' entry type

### Available Operations

* [searchTypeEsriLayer](#searchtypeesrilayer) - Search API for 'ESRI Layer' entry type

## searchTypeEsriLayer

API to search for entries of type ESRI Layer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEsriLayerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeEsriLayerRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-09T03:32:00.669Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-12T23:23:33.737Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T06:58:07.900Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-07T15:17:27.791Z');
    $request->description = 'ipsam';
    $request->filesuffix = 'dicta';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-26T09:56:08.753Z');
    $request->group = 'libero';
    $request->max = 9912;
    $request->maxlatitude = 5167.39;
    $request->maxlongitude = 2725.18;
    $request->minlatitude = 7771.93;
    $request->minlongitude = 2244.31;
    $request->name = 'Geneva Kohler V';
    $request->searchTypeEsriLayerLayerType = 'consectetur';
    $request->skip = 644103;
    $request->text = 'odit';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-21T22:37:15.505Z');

    $response = $sdk->typeTypeEsriLayer->searchTypeEsriLayer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
