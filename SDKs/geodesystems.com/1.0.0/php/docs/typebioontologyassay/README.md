# typeBioOntologyAssay

## Overview

Search API for 'Assay' entry type

### Available Operations

* [searchBioOntologyAssay](#searchbioontologyassay) - Search API for 'Assay' entry type

## searchBioOntologyAssay

API to search for entries of type Assay

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioOntologyAssayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioOntologyAssayRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-11T05:14:57.773Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-23T10:45:15.714Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-23T22:50:14.437Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-04T19:17:08.641Z');
    $request->description = 'pariatur';
    $request->filesuffix = 'accusantium';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T11:09:23.468Z');
    $request->group = 'natus';
    $request->max = 166847;
    $request->maxlatitude = 1238.2;
    $request->maxlongitude = 7790.51;
    $request->minlatitude = 8480.09;
    $request->minlongitude = 8649.34;
    $request->name = 'Nathaniel Marks';
    $request->skip = 33222;
    $request->text = 'ab';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-28T07:34:18.392Z');

    $response = $sdk->typeBioOntologyAssay->searchBioOntologyAssay($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
