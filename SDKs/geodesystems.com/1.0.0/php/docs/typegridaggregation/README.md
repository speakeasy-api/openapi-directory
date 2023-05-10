# typeGridaggregation

## Overview

Search API for 'Grid Aggregation' entry type

### Available Operations

* [searchGridaggregation](#searchgridaggregation) - Search API for 'Grid Aggregation' entry type

## searchGridaggregation

API to search for entries of type Grid Aggregation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGridaggregationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGridaggregationRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-19T18:24:49.544Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-26T17:47:50.539Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T16:26:34.311Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T14:18:21.018Z');
    $request->description = 'quas';
    $request->filesuffix = 'et';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-17T15:04:57.362Z');
    $request->group = 'autem';
    $request->max = 685415;
    $request->maxlatitude = 53.1;
    $request->maxlongitude = 5264.13;
    $request->minlatitude = 113.55;
    $request->minlongitude = 5500.55;
    $request->name = 'Mr. Marcos Boehm';
    $request->skip = 965517;
    $request->text = 'mollitia';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-29T04:57:19.341Z');

    $response = $sdk->typeGridaggregation->searchGridaggregation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
