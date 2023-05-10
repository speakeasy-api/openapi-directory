# typeTypeBlsSeries

## Overview

Search API for 'BLS Series' entry type

### Available Operations

* [searchTypeBlsSeries](#searchtypeblsseries) - Search API for 'BLS Series' entry type

## searchTypeBlsSeries

API to search for entries of type BLS Series

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeBlsSeriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeBlsSeriesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-07T02:17:11.579Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-06T14:06:29.385Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-06T15:52:44.474Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-09T19:30:20.243Z');
    $request->description = 'ullam';
    $request->filesuffix = 'ullam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-02T06:02:30.053Z');
    $request->group = 'qui';
    $request->max = 508773;
    $request->maxlatitude = 2371.89;
    $request->maxlongitude = 5191.32;
    $request->minlatitude = 1835.04;
    $request->minlongitude = 6481.66;
    $request->name = 'Troy Leuschke';
    $request->searchTypeBlsSeriesArea = 'reiciendis';
    $request->searchTypeBlsSeriesIndustry = 'possimus';
    $request->searchTypeBlsSeriesItem = 'odit';
    $request->searchTypeBlsSeriesMeasureDataType = 'consectetur';
    $request->searchTypeBlsSeriesSeasonality = 'inventore';
    $request->searchTypeBlsSeriesSector = 'minima';
    $request->searchTypeBlsSeriesSurveyName = 'facilis';
    $request->skip = 708360;
    $request->text = 'deserunt';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-18T14:16:26.757Z');

    $response = $sdk->typeTypeBlsSeries->searchTypeBlsSeries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
