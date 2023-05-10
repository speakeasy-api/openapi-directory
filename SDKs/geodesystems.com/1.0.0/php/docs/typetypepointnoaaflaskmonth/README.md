# typeTypePointNoaaFlaskMonth

## Overview

Search API for 'NOAA Flask Month Measurements' entry type

### Available Operations

* [searchTypePointNoaaFlaskMonth](#searchtypepointnoaaflaskmonth) - Search API for 'NOAA Flask Month Measurements' entry type

## searchTypePointNoaaFlaskMonth

API to search for entries of type NOAA Flask Month Measurements

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointNoaaFlaskMonthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointNoaaFlaskMonthRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-27T23:58:25.067Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-28T19:48:31.120Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-23T21:06:52.870Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-29T19:08:41.456Z');
    $request->description = 'dignissimos';
    $request->filesuffix = 'veritatis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-22T00:29:52.181Z');
    $request->group = 'ab';
    $request->max = 406575;
    $request->maxlatitude = 2198.04;
    $request->maxlongitude = 8847.04;
    $request->minlatitude = 1493.76;
    $request->minlongitude = 4641.11;
    $request->name = 'Horace Donnelly IV';
    $request->searchTypePointNoaaFlaskMonthLabIdNumber = 'aliquam';
    $request->searchTypePointNoaaFlaskMonthMeasurementGroup = 'vero';
    $request->searchTypePointNoaaFlaskMonthParameter = 'dolorum';
    $request->searchTypePointNoaaFlaskMonthProject = 'omnis';
    $request->searchTypePointNoaaFlaskMonthSiteId = 'occaecati';
    $request->skip = 164044;
    $request->text = 'veniam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-02T18:43:29.848Z');

    $response = $sdk->typeTypePointNoaaFlaskMonth->searchTypePointNoaaFlaskMonth($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
