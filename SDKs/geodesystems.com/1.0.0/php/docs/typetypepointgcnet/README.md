# typeTypePointGcnet

## Overview

Search API for 'GC-Net Point Data' entry type

### Available Operations

* [searchTypePointGcnet](#searchtypepointgcnet) - Search API for 'GC-Net Point Data' entry type

## searchTypePointGcnet

API to search for entries of type GC-Net Point Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointGcnetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointGcnetRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T01:16:10.198Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-29T18:28:44.826Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-16T12:05:14.872Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T20:26:41.809Z');
    $request->description = 'perferendis';
    $request->filesuffix = 'soluta';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-20T21:15:59.889Z');
    $request->group = 'nesciunt';
    $request->max = 559715;
    $request->maxlatitude = 1218.79;
    $request->maxlongitude = 461.39;
    $request->minlatitude = 9317.77;
    $request->minlongitude = 3103.8;
    $request->name = 'Santiago Glover';
    $request->skip = 453562;
    $request->text = 'magni';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-31T21:21:45.542Z');

    $response = $sdk->typeTypePointGcnet->searchTypePointGcnet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
