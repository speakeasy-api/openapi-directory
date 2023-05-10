# typeTypePsdMonthlyClimateIndex

## Overview

Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

### Available Operations

* [searchTypePsdMonthlyClimateIndex](#searchtypepsdmonthlyclimateindex) - Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type

## searchTypePsdMonthlyClimateIndex

API to search for entries of type NOAA-ESRL-PSD Monthly Climate Index

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePsdMonthlyClimateIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePsdMonthlyClimateIndexRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-25T18:04:46.803Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-23T09:12:33.050Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-20T14:19:56.418Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-29T14:23:12.944Z');
    $request->description = 'provident';
    $request->filesuffix = 'quia';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-16T18:13:20.175Z');
    $request->group = 'doloribus';
    $request->max = 89010;
    $request->maxlatitude = 1851.82;
    $request->maxlongitude = 4812.67;
    $request->minlatitude = 9557.83;
    $request->minlongitude = 6941.48;
    $request->name = 'Tricia Barrows';
    $request->searchTypePsdMonthlyClimateIndexUnits = 'beatae';
    $request->skip = 962397;
    $request->text = 'deleniti';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-03T01:08:15.868Z');

    $response = $sdk->typeTypePsdMonthlyClimateIndex->searchTypePsdMonthlyClimateIndex($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
