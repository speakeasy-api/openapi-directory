# typeLidarCollection

## Overview

Search API for 'LiDAR Collection' entry type

### Available Operations

* [searchLidarCollection](#searchlidarcollection) - Search API for 'LiDAR Collection' entry type

## searchLidarCollection

API to search for entries of type LiDAR Collection

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchLidarCollectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchLidarCollectionRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-20T09:59:23.505Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-05T11:14:11.433Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-04T08:05:54.832Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-30T01:26:23.904Z');
    $request->description = 'culpa';
    $request->filesuffix = 'ipsa';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-22T11:30:26.635Z');
    $request->group = 'quia';
    $request->max = 118932;
    $request->maxlatitude = 4260.02;
    $request->maxlongitude = 5955.84;
    $request->minlatitude = 8927.08;
    $request->minlongitude = 3548.21;
    $request->name = 'Ms. Donna Auer';
    $request->skip = 435531;
    $request->text = 'quibusdam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-29T06:28:27.205Z');

    $response = $sdk->typeLidarCollection->searchLidarCollection($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
