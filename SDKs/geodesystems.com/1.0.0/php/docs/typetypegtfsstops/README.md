# typeTypeGtfsStops

## Overview

Search API for 'Transit Stop Collection' entry type

### Available Operations

* [searchTypeGtfsStops](#searchtypegtfsstops) - Search API for 'Transit Stop Collection' entry type

## searchTypeGtfsStops

API to search for entries of type Transit Stop Collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeGtfsStopsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeGtfsStopsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-20T05:05:50.222Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-25T19:21:38.946Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-28T00:08:33.411Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-20T18:12:10.943Z');
    $request->description = 'omnis';
    $request->filesuffix = 'quis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-08T17:46:54.478Z');
    $request->group = 'aliquam';
    $request->max = 878595;
    $request->maxlatitude = 3944.91;
    $request->maxlongitude = 5066.89;
    $request->minlatitude = 4331.94;
    $request->minlongitude = 1151.37;
    $request->name = 'Owen Reinger';
    $request->skip = 983067;
    $request->text = 'iste';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-21T10:33:51.138Z');

    $response = $sdk->typeTypeGtfsStops->searchTypeGtfsStops($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
