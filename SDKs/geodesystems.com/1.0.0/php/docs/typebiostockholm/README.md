# typeBioStockholm

## Overview

Search API for 'Stockholm File' entry type

### Available Operations

* [searchBioStockholm](#searchbiostockholm) - Search API for 'Stockholm File' entry type

## searchBioStockholm

API to search for entries of type Stockholm File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioStockholmRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioStockholmRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-21T15:23:31.740Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-07T21:49:29.078Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-13T06:47:27.001Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-20T14:09:47.998Z');
    $request->description = 'consectetur';
    $request->filesuffix = 'vero';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-10T23:11:25.857Z');
    $request->group = 'hic';
    $request->max = 715561;
    $request->maxlatitude = 7992.03;
    $request->maxlongitude = 4861.6;
    $request->minlatitude = 6304.48;
    $request->minlongitude = 7085.48;
    $request->name = 'Allan Greenholt';
    $request->skip = 194342;
    $request->text = 'natus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T12:08:06.467Z');

    $response = $sdk->typeBioStockholm->searchBioStockholm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
