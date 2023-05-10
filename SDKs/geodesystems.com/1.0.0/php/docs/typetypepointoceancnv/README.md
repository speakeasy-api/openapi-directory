# typeTypePointOceanCnv

## Overview

Search API for 'SeaBird CNV Data' entry type

### Available Operations

* [searchTypePointOceanCnv](#searchtypepointoceancnv) - Search API for 'SeaBird CNV Data' entry type

## searchTypePointOceanCnv

API to search for entries of type SeaBird CNV Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointOceanCnvRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointOceanCnvRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-17T22:59:09.800Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-31T07:53:06.376Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-31T06:16:27.327Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-10T04:07:17.266Z');
    $request->description = 'suscipit';
    $request->filesuffix = 'assumenda';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-21T14:25:08.203Z');
    $request->group = 'suscipit';
    $request->max = 837590;
    $request->maxlatitude = 4245.1;
    $request->maxlongitude = 9301.05;
    $request->minlatitude = 8616.38;
    $request->minlongitude = 5662.13;
    $request->name = 'Arnold Dooley';
    $request->skip = 433798;
    $request->text = 'non';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-29T04:39:24.132Z');

    $response = $sdk->typeTypePointOceanCnv->searchTypePointOceanCnv($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
