# typeTypePointAmrcFinal

## Overview

Search API for 'AMRC Final QC Data' entry type

### Available Operations

* [searchTypePointAmrcFinal](#searchtypepointamrcfinal) - Search API for 'AMRC Final QC Data' entry type

## searchTypePointAmrcFinal

API to search for entries of type AMRC Final QC Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointAmrcFinalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointAmrcFinalRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-16T09:12:26.299Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-23T22:29:23.041Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-28T21:09:38.119Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-10T08:14:25.024Z');
    $request->description = 'mollitia';
    $request->filesuffix = 'libero';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-14T05:57:08.843Z');
    $request->group = 'et';
    $request->max = 487625;
    $request->maxlatitude = 7536.8;
    $request->maxlongitude = 2018.38;
    $request->minlatitude = 6902.11;
    $request->minlongitude = 454.45;
    $request->name = 'Leon Braun';
    $request->searchTypePointAmrcFinalArgosId = 'ut';
    $request->searchTypePointAmrcFinalSiteId = 'quidem';
    $request->searchTypePointAmrcFinalSiteName = 'doloribus';
    $request->skip = 22018;
    $request->text = 'architecto';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-17T02:47:13.595Z');

    $response = $sdk->typeTypePointAmrcFinal->searchTypePointAmrcFinal($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
