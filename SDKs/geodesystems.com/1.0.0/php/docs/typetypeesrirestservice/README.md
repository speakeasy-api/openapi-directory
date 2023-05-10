# typeTypeEsriRestservice

## Overview

Search API for 'ESRI Rest Service' entry type

### Available Operations

* [searchTypeEsriRestservice](#searchtypeesrirestservice) - Search API for 'ESRI Rest Service' entry type

## searchTypeEsriRestservice

API to search for entries of type ESRI Rest Service

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEsriRestserviceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeEsriRestserviceRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-14T02:49:59.585Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-05T13:27:07.035Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-26T10:15:26.218Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-14T18:29:04.841Z');
    $request->description = 'tenetur';
    $request->filesuffix = 'non';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-14T19:22:35.532Z');
    $request->group = 'itaque';
    $request->max = 938015;
    $request->maxlatitude = 7738.54;
    $request->maxlongitude = 1199.28;
    $request->minlatitude = 3588.61;
    $request->minlongitude = 7720.62;
    $request->name = 'Jonathon Gulgowski';
    $request->skip = 889201;
    $request->text = 'quasi';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-11T15:38:38.962Z');

    $response = $sdk->typeTypeEsriRestservice->searchTypeEsriRestservice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
