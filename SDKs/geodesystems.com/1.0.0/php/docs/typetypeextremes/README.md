# typeTypeExtremes

## Overview

Search API for 'NOAA Extremes Data' entry type

### Available Operations

* [searchTypeExtremes](#searchtypeextremes) - Search API for 'NOAA Extremes Data' entry type

## searchTypeExtremes

API to search for entries of type NOAA Extremes Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeExtremesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeExtremesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-29T14:05:24.229Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-19T00:41:21.069Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-26T15:14:21.697Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-15T17:52:33.252Z');
    $request->description = 'tenetur';
    $request->filesuffix = 'sed';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-29T12:20:12.457Z');
    $request->group = 'id';
    $request->max = 719077;
    $request->maxlatitude = 3585.58;
    $request->maxlongitude = 5595.71;
    $request->minlatitude = 7453.04;
    $request->minlongitude = 5846.45;
    $request->name = 'Henry Schaden';
    $request->searchTypeExtremesRegion = 'suscipit';
    $request->searchTypeExtremesVariable = 'facere';
    $request->skip = 867581;
    $request->text = 'nam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-15T17:31:08.491Z');

    $response = $sdk->typeTypeExtremes->searchTypeExtremes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
