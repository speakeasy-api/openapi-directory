# typeBioHmmerIndex

## Overview

Search API for 'HMMER Index File' entry type

### Available Operations

* [searchBioHmmerIndex](#searchbiohmmerindex) - Search API for 'HMMER Index File' entry type

## searchBioHmmerIndex

API to search for entries of type HMMER Index File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioHmmerIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioHmmerIndexRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-06T10:36:33.442Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-07T18:13:34.827Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-23T13:35:30.978Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-18T17:53:23.400Z');
    $request->description = 'vel';
    $request->filesuffix = 'natus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T08:19:15.156Z');
    $request->group = 'perferendis';
    $request->max = 470132;
    $request->maxlatitude = 3015.75;
    $request->maxlongitude = 7160.75;
    $request->minlatitude = 6601.74;
    $request->minlongitude = 2879.91;
    $request->name = 'Laurie Mosciski';
    $request->skip = 878453;
    $request->text = 'aspernatur';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-14T03:02:47.808Z');

    $response = $sdk->typeBioHmmerIndex->searchBioHmmerIndex($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
