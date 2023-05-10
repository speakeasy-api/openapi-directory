# typeTypePointNoaaCarbon

## Overview

Search API for 'NOAA Carbon Measurements' entry type

### Available Operations

* [searchTypePointNoaaCarbon](#searchtypepointnoaacarbon) - Search API for 'NOAA Carbon Measurements' entry type

## searchTypePointNoaaCarbon

API to search for entries of type NOAA Carbon Measurements

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointNoaaCarbonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointNoaaCarbonRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-30T03:55:16.926Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-17T07:41:52.559Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-24T06:04:24.357Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-26T13:41:14.544Z');
    $request->description = 'facere';
    $request->filesuffix = 'pariatur';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-02T20:48:09.142Z');
    $request->group = 'commodi';
    $request->max = 649511;
    $request->maxlatitude = 6296.18;
    $request->maxlongitude = 964.95;
    $request->minlatitude = 7785.85;
    $request->minlongitude = 9744.29;
    $request->name = 'Angel Schumm';
    $request->searchTypePointNoaaCarbonLabIdNumber = 'blanditiis';
    $request->searchTypePointNoaaCarbonMeasurementGroup = 'assumenda';
    $request->searchTypePointNoaaCarbonParameter = 'culpa';
    $request->searchTypePointNoaaCarbonProject = 'ipsa';
    $request->searchTypePointNoaaCarbonSiteId = 'inventore';
    $request->skip = 200170;
    $request->text = 'et';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-05T05:50:08.633Z');

    $response = $sdk->typeTypePointNoaaCarbon->searchTypePointNoaaCarbon($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
