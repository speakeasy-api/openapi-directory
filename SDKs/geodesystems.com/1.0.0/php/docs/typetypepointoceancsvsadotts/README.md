# typeTypePointOceanCsvSadoTTS

## Overview

Search API for 'SADO TTS Data' entry type

### Available Operations

* [searchTypePointOceanCsvSadoTTS](#searchtypepointoceancsvsadotts) - Search API for 'SADO TTS Data' entry type

## searchTypePointOceanCsvSadoTTS

API to search for entries of type SADO TTS Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointOceanCsvSadoTTSRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointOceanCsvSadoTTSRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-03T23:04:12.170Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-11T19:04:42.317Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-21T23:19:50.215Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-25T23:03:51.261Z');
    $request->description = 'deleniti';
    $request->filesuffix = 'dignissimos';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-26T21:44:20.533Z');
    $request->group = 'adipisci';
    $request->max = 793752;
    $request->maxlatitude = 3309.08;
    $request->maxlongitude = 6646.79;
    $request->minlatitude = 1021.82;
    $request->minlongitude = 9782.29;
    $request->name = 'Wilbert Cummings';
    $request->skip = 789015;
    $request->text = 'odio';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-16T00:22:11.378Z');

    $response = $sdk->typeTypePointOceanCsvSadoTTS->searchTypePointOceanCsvSadoTTS($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
