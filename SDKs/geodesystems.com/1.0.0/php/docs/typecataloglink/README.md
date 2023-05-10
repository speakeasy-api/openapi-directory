# typeCataloglink

## Overview

Search API for 'Catalog Link' entry type

### Available Operations

* [searchCataloglink](#searchcataloglink) - Search API for 'Catalog Link' entry type

## searchCataloglink

API to search for entries of type Catalog Link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCataloglinkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCataloglinkRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T06:52:38.237Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-08T02:07:04.894Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-04T14:18:49.875Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-30T00:19:55.496Z');
    $request->description = 'suscipit';
    $request->filesuffix = 'repudiandae';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-01T19:00:30.130Z');
    $request->group = 'sunt';
    $request->max = 923306;
    $request->maxlatitude = 6806.97;
    $request->maxlongitude = 8298.98;
    $request->minlatitude = 2871.19;
    $request->minlongitude = 9682.87;
    $request->name = 'Mr. Elvira Buckridge';
    $request->skip = 316488;
    $request->text = 'laboriosam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-18T11:13:47.798Z');

    $response = $sdk->typeCataloglink->searchCataloglink($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
