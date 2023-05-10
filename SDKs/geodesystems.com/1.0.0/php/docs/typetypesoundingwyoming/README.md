# typeTypeSoundingWyoming

## Overview

Search API for 'UW Sounding' entry type

### Available Operations

* [searchTypeSoundingWyoming](#searchtypesoundingwyoming) - Search API for 'UW Sounding' entry type

## searchTypeSoundingWyoming

API to search for entries of type UW Sounding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeSoundingWyomingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeSoundingWyomingRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-21T11:05:43.092Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-17T23:25:34.923Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-16T17:27:52.094Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-04T07:57:15.879Z');
    $request->description = 'reiciendis';
    $request->filesuffix = 'debitis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-26T20:47:27.046Z');
    $request->group = 'accusamus';
    $request->max = 372925;
    $request->maxlatitude = 1344.12;
    $request->maxlongitude = 5425.06;
    $request->minlatitude = 6556.94;
    $request->minlongitude = 2635.77;
    $request->name = 'Iris Schimmel MD';
    $request->skip = 507946;
    $request->text = 'ullam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-13T02:45:17.589Z');

    $response = $sdk->typeTypeSoundingWyoming->searchTypeSoundingWyoming($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
