# typeTypePointOceanCsvSadoPosition

## Overview

Search API for 'SADO Position Data' entry type

### Available Operations

* [searchTypePointOceanCsvSadoPosition](#searchtypepointoceancsvsadoposition) - Search API for 'SADO Position Data' entry type

## searchTypePointOceanCsvSadoPosition

API to search for entries of type SADO Position Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointOceanCsvSadoPositionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointOceanCsvSadoPositionRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-05T10:50:37.967Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-04T22:52:25.370Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-23T00:43:15.987Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-21T23:41:36.278Z');
    $request->description = 'laboriosam';
    $request->filesuffix = 'aperiam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-28T14:35:14.227Z');
    $request->group = 'dicta';
    $request->max = 825283;
    $request->maxlatitude = 4408.77;
    $request->maxlongitude = 2737.93;
    $request->minlatitude = 3204.42;
    $request->minlongitude = 9175.4;
    $request->name = 'Mrs. Sheri Cruickshank';
    $request->skip = 791517;
    $request->text = 'excepturi';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T09:39:20.515Z');

    $response = $sdk->typeTypePointOceanCsvSadoPosition->searchTypePointOceanCsvSadoPosition($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
