# typeProjectDataset

## Overview

Search API for 'Dataset' entry type

### Available Operations

* [searchProjectDataset](#searchprojectdataset) - Search API for 'Dataset' entry type

## searchProjectDataset

API to search for entries of type Dataset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectDatasetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectDatasetRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-22T05:03:27.540Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-29T20:19:51.485Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-03T11:57:21.616Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-24T15:33:44.473Z');
    $request->description = 'laudantium';
    $request->filesuffix = 'iusto';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T08:01:00.558Z');
    $request->group = 'quis';
    $request->max = 435883;
    $request->maxlatitude = 685.96;
    $request->maxlongitude = 3086.58;
    $request->minlatitude = 2289.07;
    $request->minlongitude = 9569.42;
    $request->name = 'Monique Kerluke';
    $request->searchProjectDatasetDataLevel = 'laudantium';
    $request->searchProjectDatasetDataType = 'nam';
    $request->searchProjectDatasetDatasetId = 'nemo';
    $request->skip = 317632;
    $request->text = 'ipsam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-23T05:09:40.748Z');

    $response = $sdk->typeProjectDataset->searchProjectDataset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
