# typeTypeWmsLayer

## Overview

Search API for 'WMS Layer' entry type

### Available Operations

* [searchTypeWmsLayer](#searchtypewmslayer) - Search API for 'WMS Layer' entry type

## searchTypeWmsLayer

API to search for entries of type WMS Layer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeWmsLayerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeWmsLayerRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-01T12:28:26.841Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-10T23:32:47.792Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-27T21:05:50.390Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-26T14:13:16.580Z');
    $request->description = 'sit';
    $request->filesuffix = 'magni';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-28T20:12:59.192Z');
    $request->group = 'ratione';
    $request->max = 958592;
    $request->maxlatitude = 47.68;
    $request->maxlongitude = 8297.66;
    $request->minlatitude = 3011.88;
    $request->minlongitude = 3401.07;
    $request->name = 'Gerardo Gislason';
    $request->skip = 748266;
    $request->text = 'ea';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-15T14:22:34.731Z');

    $response = $sdk->typeTypeWmsLayer->searchTypeWmsLayer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
