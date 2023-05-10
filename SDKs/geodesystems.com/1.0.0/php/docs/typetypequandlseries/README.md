# typeTypeQuandlSeries

## Overview

Search API for 'QUANDL Series' entry type

### Available Operations

* [searchTypeQuandlSeries](#searchtypequandlseries) - Search API for 'QUANDL Series' entry type

## searchTypeQuandlSeries

API to search for entries of type QUANDL Series

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeQuandlSeriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeQuandlSeriesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-05T22:27:28.341Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-22T03:39:05.204Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-24T20:43:14.437Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-29T17:11:28.894Z');
    $request->description = 'impedit';
    $request->filesuffix = 'officia';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-19T09:06:20.044Z');
    $request->group = 'mollitia';
    $request->max = 918967;
    $request->maxlatitude = 7354.1;
    $request->maxlongitude = 4526.05;
    $request->minlatitude = 7378.82;
    $request->minlongitude = 4611.03;
    $request->name = 'Kathryn Bradtke';
    $request->skip = 168512;
    $request->text = 'quae';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T05:00:36.286Z');

    $response = $sdk->typeTypeQuandlSeries->searchTypeQuandlSeries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
