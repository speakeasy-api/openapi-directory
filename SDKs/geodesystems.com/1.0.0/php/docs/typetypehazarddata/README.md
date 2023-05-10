# typeTypeHazarddata

## Overview

Search API for 'Hazard Data' entry type

### Available Operations

* [searchTypeHazarddata](#searchtypehazarddata) - Search API for 'Hazard Data' entry type

## searchTypeHazarddata

API to search for entries of type Hazard Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeHazarddataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeHazarddataRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-09T08:14:07.846Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-08T15:55:59.943Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-08T04:50:58.280Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-29T23:58:11.356Z');
    $request->description = 'odit';
    $request->filesuffix = 'molestiae';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-10T21:13:18.872Z');
    $request->group = 'inventore';
    $request->max = 988407;
    $request->maxlatitude = 5076.35;
    $request->maxlongitude = 3977.3;
    $request->minlatitude = 1639.1;
    $request->minlongitude = 3894.4;
    $request->name = 'Delores Roberts';
    $request->searchTypeHazarddataSource = 'delectus';
    $request->skip = 806952;
    $request->text = 'vel';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-30T02:25:02.152Z');

    $response = $sdk->typeTypeHazarddata->searchTypeHazarddata($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
