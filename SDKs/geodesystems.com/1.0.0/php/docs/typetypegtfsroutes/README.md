# typeTypeGtfsRoutes

## Overview

Search API for 'Transit Route Collection' entry type

### Available Operations

* [searchTypeGtfsRoutes](#searchtypegtfsroutes) - Search API for 'Transit Route Collection' entry type

## searchTypeGtfsRoutes

API to search for entries of type Transit Route Collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeGtfsRoutesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeGtfsRoutesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-22T06:36:31.491Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-06T20:13:58.301Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-14T19:35:34.450Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-28T23:57:16.474Z');
    $request->description = 'sapiente';
    $request->filesuffix = 'necessitatibus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-21T08:52:32.010Z');
    $request->group = 'mollitia';
    $request->max = 530232;
    $request->maxlatitude = 5006.92;
    $request->maxlongitude = 9580.91;
    $request->minlatitude = 2835.57;
    $request->minlongitude = 2779.43;
    $request->name = 'Debbie Haley';
    $request->skip = 947704;
    $request->text = 'saepe';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-05T01:17:49.031Z');

    $response = $sdk->typeTypeGtfsRoutes->searchTypeGtfsRoutes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
