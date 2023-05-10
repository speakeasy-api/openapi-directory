# typeLidarLvis

## Overview

Search API for 'LVIS Lidar Data' entry type

### Available Operations

* [searchLidarLvis](#searchlidarlvis) - Search API for 'LVIS Lidar Data' entry type

## searchLidarLvis

API to search for entries of type LVIS Lidar Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchLidarLvisRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchLidarLvisRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-24T18:07:45.123Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-28T02:31:04.579Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-24T14:44:53.995Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-17T23:24:31.493Z');
    $request->description = 'non';
    $request->filesuffix = 'mollitia';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-20T20:47:10.956Z');
    $request->group = 'distinctio';
    $request->max = 866861;
    $request->maxlatitude = 3233.65;
    $request->maxlongitude = 8161.51;
    $request->minlatitude = 6746.83;
    $request->minlongitude = 9114.51;
    $request->name = 'Randall Schmitt III';
    $request->skip = 647210;
    $request->text = 'molestias';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-31T04:48:59.619Z');

    $response = $sdk->typeLidarLvis->searchLidarLvis($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
