# typeTypeGtfsRoute

## Overview

Search API for 'Transit Route' entry type

### Available Operations

* [searchTypeGtfsRoute](#searchtypegtfsroute) - Search API for 'Transit Route' entry type

## searchTypeGtfsRoute

API to search for entries of type Transit Route

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeGtfsRouteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeGtfsRouteRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-19T15:30:32.385Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-11T14:51:38.024Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-23T01:50:15.716Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-04T07:21:12.859Z');
    $request->description = 'modi';
    $request->filesuffix = 'illum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-13T00:51:44.607Z');
    $request->group = 'reprehenderit';
    $request->max = 758184;
    $request->maxlatitude = 7363.13;
    $request->maxlongitude = 6338.25;
    $request->minlatitude = 6370.37;
    $request->minlongitude = 9551.26;
    $request->name = 'Monica Hane';
    $request->searchTypeGtfsRouteRouteId = 'quaerat';
    $request->searchTypeGtfsRouteStopNames = 'voluptatum';
    $request->skip = 257959;
    $request->text = 'explicabo';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-29T12:54:59.051Z');

    $response = $sdk->typeTypeGtfsRoute->searchTypeGtfsRoute($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
