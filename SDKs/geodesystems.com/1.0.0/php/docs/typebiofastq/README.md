# typeBioFastq

## Overview

Search API for 'FASTQ File' entry type

### Available Operations

* [searchBioFastq](#searchbiofastq) - Search API for 'FASTQ File' entry type

## searchBioFastq

API to search for entries of type FASTQ File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioFastqRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioFastqRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-14T09:13:11.675Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-22T03:36:34.615Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-22T17:45:21.686Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-08T14:21:47.573Z');
    $request->description = 'in';
    $request->filesuffix = 'illum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-26T01:41:04.216Z');
    $request->group = 'dicta';
    $request->max = 297437;
    $request->maxlatitude = 7670.24;
    $request->maxlongitude = 8137.98;
    $request->minlatitude = 4118.2;
    $request->minlongitude = 3965.06;
    $request->name = 'Tomas Friesen';
    $request->skip = 881736;
    $request->text = 'delectus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-28T10:05:29.849Z');

    $response = $sdk->typeBioFastq->searchBioFastq($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
