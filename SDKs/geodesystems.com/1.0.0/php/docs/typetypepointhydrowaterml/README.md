# typeTypePointHydroWaterml

## Overview

Search API for 'WaterML' entry type

### Available Operations

* [searchTypePointHydroWaterml](#searchtypepointhydrowaterml) - Search API for 'WaterML' entry type

## searchTypePointHydroWaterml

API to search for entries of type WaterML

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointHydroWatermlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointHydroWatermlRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-20T16:02:49.007Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-19T12:36:59.311Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-27T16:31:45.176Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-10T08:29:20.302Z');
    $request->description = 'distinctio';
    $request->filesuffix = 'blanditiis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-11T00:09:42.792Z');
    $request->group = 'ab';
    $request->max = 603512;
    $request->maxlatitude = 3654.73;
    $request->maxlongitude = 2134.05;
    $request->minlatitude = 6979.15;
    $request->minlongitude = 2828.25;
    $request->name = 'Melody Stoltenberg';
    $request->searchTypePointHydroWatermlSiteCode = 'labore';
    $request->searchTypePointHydroWatermlSiteName = 'sequi';
    $request->skip = 86885;
    $request->text = 'veniam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-08T12:41:52.891Z');

    $response = $sdk->typeTypePointHydroWaterml->searchTypePointHydroWaterml($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
