# typeTypeSoundingFrd

## Overview

Search API for 'FRD Sounding' entry type

### Available Operations

* [searchTypeSoundingFrd](#searchtypesoundingfrd) - Search API for 'FRD Sounding' entry type

## searchTypeSoundingFrd

API to search for entries of type FRD Sounding

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeSoundingFrdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeSoundingFrdRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-10T18:02:08.902Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-14T00:59:39.924Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-22T00:14:35.920Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-25T11:56:59.355Z');
    $request->description = 'enim';
    $request->filesuffix = 'nam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-02T00:03:25.771Z');
    $request->group = 'sapiente';
    $request->max = 912;
    $request->maxlatitude = 9866.23;
    $request->maxlongitude = 3634.67;
    $request->minlatitude = 2961.27;
    $request->minlongitude = 5453.14;
    $request->name = 'Tonya Langworth II';
    $request->skip = 174836;
    $request->text = 'labore';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-25T08:43:43.550Z');

    $response = $sdk->typeTypeSoundingFrd->searchTypeSoundingFrd($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
