# typeTypeGtfsAgency

## Overview

Search API for 'Transit Agency' entry type

### Available Operations

* [searchTypeGtfsAgency](#searchtypegtfsagency) - Search API for 'Transit Agency' entry type

## searchTypeGtfsAgency

API to search for entries of type Transit Agency

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeGtfsAgencyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeGtfsAgencyRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-23T19:43:14.990Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-14T16:05:15.385Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-30T09:42:12.301Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T23:46:26.725Z');
    $request->description = 'consectetur';
    $request->filesuffix = 'soluta';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-23T15:00:23.547Z');
    $request->group = 'perspiciatis';
    $request->max = 380034;
    $request->maxlatitude = 3553.42;
    $request->maxlongitude = 6016.34;
    $request->minlatitude = 8927.12;
    $request->minlongitude = 6946.11;
    $request->name = 'Laura Thompson III';
    $request->skip = 938230;
    $request->text = 'est';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-02T12:40:05.211Z');

    $response = $sdk->typeTypeGtfsAgency->searchTypeGtfsAgency($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
