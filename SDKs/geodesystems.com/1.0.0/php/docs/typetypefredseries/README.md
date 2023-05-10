# typeTypeFredSeries

## Overview

Search API for 'FRED Series' entry type

### Available Operations

* [searchTypeFredSeries](#searchtypefredseries) - Search API for 'FRED Series' entry type

## searchTypeFredSeries

API to search for entries of type FRED Series

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeFredSeriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeFredSeriesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-16T11:29:04.824Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-27T07:32:45.617Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-08T17:14:19.851Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-14T15:31:01.936Z');
    $request->description = 'explicabo';
    $request->filesuffix = 'delectus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-06T15:54:45.514Z');
    $request->group = 'enim';
    $request->max = 24614;
    $request->maxlatitude = 279.55;
    $request->maxlongitude = 6197.72;
    $request->minlatitude = 293.46;
    $request->minlongitude = 2712.16;
    $request->name = 'Roger Boehm V';
    $request->skip = 172878;
    $request->text = 'perferendis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-10T22:44:59.336Z');

    $response = $sdk->typeTypeFredSeries->searchTypeFredSeries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
