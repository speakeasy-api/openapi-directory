# typeCdmGrid

## Overview

Search API for 'Gridded Data File' entry type

### Available Operations

* [searchCdmGrid](#searchcdmgrid) - Search API for 'Gridded Data File' entry type

## searchCdmGrid

API to search for entries of type Gridded Data File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCdmGridRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCdmGridRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-26T23:29:35.541Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T06:54:36.386Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-24T23:56:32.062Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-09T03:10:10.926Z');
    $request->description = 'adipisci';
    $request->filesuffix = 'eveniet';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-06T00:45:42.817Z');
    $request->group = 'fugit';
    $request->max = 661118;
    $request->maxlatitude = 3356.31;
    $request->maxlongitude = 4402.64;
    $request->minlatitude = 6255.28;
    $request->minlongitude = 764.86;
    $request->name = 'Melody Vandervort';
    $request->skip = 39615;
    $request->text = 'iure';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-26T01:43:04.262Z');

    $response = $sdk->typeCdmGrid->searchCdmGrid($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
