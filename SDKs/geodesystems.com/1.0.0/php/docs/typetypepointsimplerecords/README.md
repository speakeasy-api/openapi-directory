# typeTypePointSimpleRecords

## Overview

Search API for 'Simple Records' entry type

### Available Operations

* [searchTypePointSimpleRecords](#searchtypepointsimplerecords) - Search API for 'Simple Records' entry type

## searchTypePointSimpleRecords

API to search for entries of type Simple Records

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointSimpleRecordsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointSimpleRecordsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-26T07:38:11.121Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-18T23:32:45.380Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-12T08:15:08.279Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-30T09:42:33.114Z');
    $request->description = 'magni';
    $request->filesuffix = 'mollitia';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-01T11:51:34.202Z');
    $request->group = 'quas';
    $request->max = 13688;
    $request->maxlatitude = 4222.15;
    $request->maxlongitude = 2099.2;
    $request->minlatitude = 1312.49;
    $request->minlongitude = 6999.89;
    $request->name = 'Marion Hamill';
    $request->skip = 434302;
    $request->text = 'voluptatibus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-17T23:17:24.961Z');

    $response = $sdk->typeTypePointSimpleRecords->searchTypePointSimpleRecords($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
