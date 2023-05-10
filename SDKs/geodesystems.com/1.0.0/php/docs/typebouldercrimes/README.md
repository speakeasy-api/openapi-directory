# typeBoulderCrimes

## Overview

Search API for 'Boulder Crime Reports' entry type

### Available Operations

* [searchBoulderCrimes](#searchbouldercrimes) - Search API for 'Boulder Crime Reports' entry type

## searchBoulderCrimes

API to search for entries of type Boulder Crime Reports

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBoulderCrimesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBoulderCrimesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T04:07:51.208Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-16T02:54:19.259Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-15T15:27:41.112Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-17T09:09:54.947Z');
    $request->description = 'minima';
    $request->filesuffix = 'nobis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T09:37:00.887Z');
    $request->group = 'minus';
    $request->max = 171853;
    $request->maxlatitude = 5039.34;
    $request->maxlongitude = 4492.92;
    $request->minlatitude = 2962.42;
    $request->minlongitude = 3044.68;
    $request->name = 'Lionel Herman';
    $request->searchDbBoulderCrimesBlockadd = 'blanditiis';
    $request->searchDbBoulderCrimesLocation = 'quas';
    $request->searchDbBoulderCrimesOffense = 'hic';
    $request->searchDbBoulderCrimesReportdate = 'nesciunt';
    $request->skip = 633998;
    $request->text = 'corrupti';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-10T23:47:11.065Z');

    $response = $sdk->typeBoulderCrimes->searchBoulderCrimes($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
