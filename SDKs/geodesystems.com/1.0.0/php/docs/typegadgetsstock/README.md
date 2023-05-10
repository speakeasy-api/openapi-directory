# typeGadgetsStock

## Overview

Search API for 'Stock Ticker' entry type

### Available Operations

* [searchGadgetsStock](#searchgadgetsstock) - Search API for 'Stock Ticker' entry type

## searchGadgetsStock

API to search for entries of type Stock Ticker

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGadgetsStockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGadgetsStockRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-17T04:21:28.778Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-05T06:31:50.944Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-22T14:23:17.198Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-16T14:37:42.020Z');
    $request->description = 'fuga';
    $request->filesuffix = 'nostrum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-17T06:18:33.339Z');
    $request->group = 'delectus';
    $request->max = 735894;
    $request->maxlatitude = 8786.01;
    $request->maxlongitude = 1415.06;
    $request->minlatitude = 9974.37;
    $request->minlongitude = 8659.46;
    $request->name = 'Bessie Bayer';
    $request->skip = 448369;
    $request->text = 'ducimus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-28T07:07:51.380Z');

    $response = $sdk->typeGadgetsStock->searchGadgetsStock($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
