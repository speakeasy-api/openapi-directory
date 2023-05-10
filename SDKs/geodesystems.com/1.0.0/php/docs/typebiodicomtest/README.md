# typeBioDicomTest

## Overview

Search API for 'DICOM Test File' entry type

### Available Operations

* [searchBioDicomTest](#searchbiodicomtest) - Search API for 'DICOM Test File' entry type

## searchBioDicomTest

API to search for entries of type DICOM Test File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioDicomTestRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioDicomTestRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-18T15:56:41.921Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-13T20:56:04.612Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-04T09:10:06.610Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-22T18:12:12.288Z');
    $request->description = 'ipsum';
    $request->filesuffix = 'quidem';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-13T09:08:33.009Z');
    $request->group = 'pariatur';
    $request->max = 265389;
    $request->maxlatitude = 5089.69;
    $request->maxlongitude = 5232.48;
    $request->minlatitude = 9167.23;
    $request->minlongitude = 939.4;
    $request->name = 'Kirk Boehm';
    $request->searchBioDicomTestPatientID = 'enim';
    $request->searchBioDicomTestPatientName = 'consequatur';
    $request->skip = 667411;
    $request->text = 'quibusdam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T18:45:16.013Z');

    $response = $sdk->typeBioDicomTest->searchBioDicomTest($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
