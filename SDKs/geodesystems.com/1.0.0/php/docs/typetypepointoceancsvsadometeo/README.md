# typeTypePointOceanCsvSadoMeteo

## Overview

Search API for 'SADO Meteo Data' entry type

### Available Operations

* [searchTypePointOceanCsvSadoMeteo](#searchtypepointoceancsvsadometeo) - Search API for 'SADO Meteo Data' entry type

## searchTypePointOceanCsvSadoMeteo

API to search for entries of type SADO Meteo Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointOceanCsvSadoMeteoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointOceanCsvSadoMeteoRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-13T11:12:39.454Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-11T22:31:41.392Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T05:18:24.814Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-11T09:21:33.418Z');
    $request->description = 'non';
    $request->filesuffix = 'facere';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-15T21:04:43.668Z');
    $request->group = 'quidem';
    $request->max = 408208;
    $request->maxlatitude = 4772.22;
    $request->maxlongitude = 1124.41;
    $request->minlatitude = 5704.37;
    $request->minlongitude = 5280.85;
    $request->name = 'Gary Wisozk';
    $request->skip = 667449;
    $request->text = 'tempora';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-31T23:57:53.258Z');

    $response = $sdk->typeTypePointOceanCsvSadoMeteo->searchTypePointOceanCsvSadoMeteo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
