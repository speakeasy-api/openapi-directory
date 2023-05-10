# typeTypeSocrataSeries

## Overview

Search API for 'SOCRATA Series' entry type

### Available Operations

* [searchTypeSocrataSeries](#searchtypesocrataseries) - Search API for 'SOCRATA Series' entry type

## searchTypeSocrataSeries

API to search for entries of type SOCRATA Series

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeSocrataSeriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeSocrataSeriesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-10T07:25:38.174Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-05T14:03:55.499Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-08T10:08:23.784Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-15T14:39:56.529Z');
    $request->description = 'molestias';
    $request->filesuffix = 'odio';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T11:07:18.347Z');
    $request->group = 'sint';
    $request->max = 10180;
    $request->maxlatitude = 8495.44;
    $request->maxlongitude = 2378.75;
    $request->minlatitude = 2106.51;
    $request->minlongitude = 4031.87;
    $request->name = 'Natalie Bogisich';
    $request->skip = 635677;
    $request->text = 'architecto';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-02T02:57:48.522Z');

    $response = $sdk->typeTypeSocrataSeries->searchTypeSocrataSeries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
