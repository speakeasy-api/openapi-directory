# typeTypeDocumentCsv

## Overview

Search API for 'CSV File' entry type

### Available Operations

* [searchTypeDocumentCsv](#searchtypedocumentcsv) - Search API for 'CSV File' entry type

## searchTypeDocumentCsv

API to search for entries of type CSV File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeDocumentCsvRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeDocumentCsvRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-07T18:51:34.254Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-14T06:09:57.887Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-21T12:31:55.446Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-09T12:17:17.081Z');
    $request->description = 'excepturi';
    $request->filesuffix = 'aliquid';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-21T03:02:36.046Z');
    $request->group = 'illum';
    $request->max = 388006;
    $request->maxlatitude = 6328.5;
    $request->maxlongitude = 1167.05;
    $request->minlatitude = 5388.77;
    $request->minlongitude = 1914.25;
    $request->name = 'Rosalie Lindgren';
    $request->skip = 837739;
    $request->text = 'a';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-01T10:57:10.907Z');

    $response = $sdk->typeTypeDocumentCsv->searchTypeDocumentCsv($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
