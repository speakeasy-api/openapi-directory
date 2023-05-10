# typeTypeDocumentXls

## Overview

Search API for 'Excel File' entry type

### Available Operations

* [searchTypeDocumentXls](#searchtypedocumentxls) - Search API for 'Excel File' entry type

## searchTypeDocumentXls

API to search for entries of type Excel File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeDocumentXlsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeDocumentXlsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-03T09:21:22.769Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-05T00:07:21.775Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-15T12:49:09.774Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-19T03:24:19.827Z');
    $request->description = 'repellat';
    $request->filesuffix = 'cupiditate';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-14T17:52:57.722Z');
    $request->group = 'culpa';
    $request->max = 855647;
    $request->maxlatitude = 780.74;
    $request->maxlongitude = 5417.43;
    $request->minlatitude = 3232.15;
    $request->minlongitude = 9594.2;
    $request->name = 'Dr. Alexander Douglas';
    $request->skip = 696324;
    $request->text = 'delectus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-28T03:56:37.209Z');

    $response = $sdk->typeTypeDocumentXls->searchTypeDocumentXls($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
