# typeTypePointNcdcClimate

## Overview

Search API for 'NC  DC Climate Data' entry type

### Available Operations

* [searchTypePointNcdcClimate](#searchtypepointncdcclimate) - Search API for 'NC  DC Climate Data' entry type

## searchTypePointNcdcClimate

API to search for entries of type NC  DC Climate Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointNcdcClimateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointNcdcClimateRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-15T23:19:42.151Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-16T05:46:43.018Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-03T19:29:44.864Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-15T09:20:26.769Z');
    $request->description = 'quod';
    $request->filesuffix = 'alias';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-10T08:13:32.523Z');
    $request->group = 'modi';
    $request->max = 629440;
    $request->maxlatitude = 936.6;
    $request->maxlongitude = 5164.82;
    $request->minlatitude = 2807.06;
    $request->minlongitude = 8214.87;
    $request->name = 'Melanie Schumm';
    $request->skip = 115077;
    $request->text = 'reiciendis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-17T21:53:03.520Z');

    $response = $sdk->typeTypePointNcdcClimate->searchTypePointNcdcClimate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
