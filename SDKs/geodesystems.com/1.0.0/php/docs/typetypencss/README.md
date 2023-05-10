# typeTypeNcss

## Overview

Search API for 'NetCDF Point Subset' entry type

### Available Operations

* [searchTypeNcss](#searchtypencss) - Search API for 'NetCDF Point Subset' entry type

## searchTypeNcss

API to search for entries of type NetCDF Point Subset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeNcssRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeNcssRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-30T15:14:52.146Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-01T20:29:09.374Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-16T06:54:29.871Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-17T16:10:20.035Z');
    $request->description = 'impedit';
    $request->filesuffix = 'consequuntur';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-04T20:42:40.039Z');
    $request->group = 'amet';
    $request->max = 287020;
    $request->maxlatitude = 9984.45;
    $request->maxlongitude = 1795;
    $request->minlatitude = 8451.91;
    $request->minlongitude = 9999.65;
    $request->name = 'Ms. Calvin Nikolaus';
    $request->skip = 952106;
    $request->text = 'iure';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-22T03:37:51.173Z');

    $response = $sdk->typeTypeNcss->searchTypeNcss($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
