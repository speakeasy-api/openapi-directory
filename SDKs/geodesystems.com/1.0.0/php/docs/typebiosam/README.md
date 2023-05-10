# typeBioSam

## Overview

Search API for 'SAM Data' entry type

### Available Operations

* [searchBioSam](#searchbiosam) - Search API for 'SAM Data' entry type

## searchBioSam

API to search for entries of type SAM Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioSamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioSamRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-29T09:11:09.370Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-08T12:03:15.868Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-16T12:43:49.763Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-21T14:54:44.081Z');
    $request->description = 'sit';
    $request->filesuffix = 'expedita';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-05T21:38:15.600Z');
    $request->group = 'vel';
    $request->max = 730442;
    $request->maxlatitude = 3741.7;
    $request->maxlongitude = 6462.65;
    $request->minlatitude = 4635.75;
    $request->minlongitude = 2148.8;
    $request->name = 'Norma McGlynn';
    $request->skip = 747080;
    $request->text = 'dicta';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-19T07:31:04.219Z');

    $response = $sdk->typeBioSam->searchBioSam($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
