# typeTypeBizStockseries

## Overview

Search API for 'Stock Ticker Data' entry type

### Available Operations

* [searchTypeBizStockseries](#searchtypebizstockseries) - Search API for 'Stock Ticker Data' entry type

## searchTypeBizStockseries

API to search for entries of type Stock Ticker Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeBizStockseriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeBizStockseriesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-28T10:28:14.400Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T20:55:13.479Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-16T05:04:45.088Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-03T05:07:19.458Z');
    $request->description = 'adipisci';
    $request->filesuffix = 'cupiditate';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-26T15:12:35.709Z');
    $request->group = 'fugiat';
    $request->max = 473386;
    $request->maxlatitude = 5568.98;
    $request->maxlongitude = 8341.77;
    $request->minlatitude = 9065.24;
    $request->minlongitude = 2304;
    $request->name = 'Cecil Tromp';
    $request->skip = 545629;
    $request->text = 'cupiditate';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-08T15:04:06.780Z');

    $response = $sdk->typeTypeBizStockseries->searchTypeBizStockseries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
