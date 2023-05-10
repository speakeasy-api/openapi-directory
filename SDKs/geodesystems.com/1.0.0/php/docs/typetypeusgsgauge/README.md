# typeTypeUsgsGauge

## Overview

Search API for 'USGS Stream Gauge' entry type

### Available Operations

* [searchTypeUsgsGauge](#searchtypeusgsgauge) - Search API for 'USGS Stream Gauge' entry type

## searchTypeUsgsGauge

API to search for entries of type USGS Stream Gauge

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeUsgsGaugeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeUsgsGaugeRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-09T13:36:42.900Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-11T13:45:47.122Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-20T23:02:38.907Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-13T17:18:01.984Z');
    $request->description = 'ratione';
    $request->filesuffix = 'soluta';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-15T02:47:25.293Z');
    $request->group = 'laudantium';
    $request->max = 26990;
    $request->maxlatitude = 5940.2;
    $request->maxlongitude = 3114.65;
    $request->minlatitude = 2010.56;
    $request->minlongitude = 4744.53;
    $request->name = 'Laverne Bednar II';
    $request->skip = 355451;
    $request->text = 'excepturi';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-04T06:33:21.309Z');

    $response = $sdk->typeTypeUsgsGauge->searchTypeUsgsGauge($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
