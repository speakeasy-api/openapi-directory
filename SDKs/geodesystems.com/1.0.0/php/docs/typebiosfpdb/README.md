# typeBioSfPdb

## Overview

Search API for 'PDB Protein File' entry type

### Available Operations

* [searchBioSfPdb](#searchbiosfpdb) - Search API for 'PDB Protein File' entry type

## searchBioSfPdb

API to search for entries of type PDB Protein File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioSfPdbRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioSfPdbRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-13T19:04:59.225Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-14T08:18:32.851Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-17T21:02:01.759Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-08T14:54:33.206Z');
    $request->description = 'temporibus';
    $request->filesuffix = 'qui';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-09T03:08:00.106Z');
    $request->group = 'magni';
    $request->max = 488056;
    $request->maxlatitude = 1248.33;
    $request->maxlongitude = 3556.13;
    $request->minlatitude = 7220.81;
    $request->minlongitude = 9404.32;
    $request->name = 'Erma Rogahn PhD';
    $request->skip = 217450;
    $request->text = 'veritatis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-23T21:35:15.992Z');

    $response = $sdk->typeBioSfPdb->searchBioSfPdb($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
