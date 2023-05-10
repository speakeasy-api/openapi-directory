# typeLidarLas

## Overview

Search API for 'LAS Lidar Data' entry type

### Available Operations

* [searchLidarLas](#searchlidarlas) - Search API for 'LAS Lidar Data' entry type

## searchLidarLas

API to search for entries of type LAS Lidar Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchLidarLasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchLidarLasRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-05T18:49:15.247Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-04T20:08:46.226Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-06T09:59:59.144Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T19:36:03.657Z');
    $request->description = 'provident';
    $request->filesuffix = 'cum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-21T03:47:05.182Z');
    $request->group = 'quidem';
    $request->max = 932080;
    $request->maxlatitude = 3895.48;
    $request->maxlongitude = 6017.14;
    $request->minlatitude = 2637.67;
    $request->minlongitude = 5951.98;
    $request->name = 'Jonathon Collins';
    $request->skip = 279172;
    $request->text = 'recusandae';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-03T04:35:17.852Z');

    $response = $sdk->typeLidarLas->searchLidarLas($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
