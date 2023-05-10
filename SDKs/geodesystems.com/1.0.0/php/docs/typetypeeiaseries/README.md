# typeTypeEiaSeries

## Overview

Search API for 'EIA Series' entry type

### Available Operations

* [searchTypeEiaSeries](#searchtypeeiaseries) - Search API for 'EIA Series' entry type

## searchTypeEiaSeries

API to search for entries of type EIA Series

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEiaSeriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeEiaSeriesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-16T10:46:58.362Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-03T10:03:07.115Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-16T20:58:04.785Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-01T02:30:07.830Z');
    $request->description = 'optio';
    $request->filesuffix = 'eveniet';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-28T15:17:19.917Z');
    $request->group = 'a';
    $request->max = 620842;
    $request->maxlatitude = 9590;
    $request->maxlongitude = 8329.89;
    $request->minlatitude = 7063.71;
    $request->minlongitude = 5645.97;
    $request->name = 'Catherine Bashirian';
    $request->skip = 245849;
    $request->text = 'tempore';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-13T08:00:41.549Z');

    $response = $sdk->typeTypeEiaSeries->searchTypeEiaSeries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
