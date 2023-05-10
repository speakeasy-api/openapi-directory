# typeTypePointOceanOoiDmgx

## Overview

Search API for 'OOI Data' entry type

### Available Operations

* [searchTypePointOceanOoiDmgx](#searchtypepointoceanooidmgx) - Search API for 'OOI Data' entry type

## searchTypePointOceanOoiDmgx

API to search for entries of type OOI Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointOceanOoiDmgxRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointOceanOoiDmgxRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-09T06:42:37.007Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-24T07:52:55.534Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-03T06:33:14.026Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-19T04:05:25.599Z');
    $request->description = 'temporibus';
    $request->filesuffix = 'error';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-13T19:37:58.646Z');
    $request->group = 'molestiae';
    $request->max = 646456;
    $request->maxlatitude = 6756.77;
    $request->maxlongitude = 1413.14;
    $request->minlatitude = 6980.88;
    $request->minlongitude = 1612.18;
    $request->name = 'Frances Bosco';
    $request->skip = 597951;
    $request->text = 'nostrum';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-24T20:51:26.798Z');

    $response = $sdk->typeTypePointOceanOoiDmgx->searchTypePointOceanOoiDmgx($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
