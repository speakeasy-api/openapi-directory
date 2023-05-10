# typeTypeDocumentDoc

## Overview

Search API for 'Word File' entry type

### Available Operations

* [searchTypeDocumentDoc](#searchtypedocumentdoc) - Search API for 'Word File' entry type

## searchTypeDocumentDoc

API to search for entries of type Word File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeDocumentDocRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeDocumentDocRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-12T21:34:14.646Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-13T00:59:27.963Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-08T16:14:41.942Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-26T00:44:17.067Z');
    $request->description = 'neque';
    $request->filesuffix = 'quam';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-22T00:34:03.284Z');
    $request->group = 'voluptatum';
    $request->max = 28256;
    $request->maxlatitude = 7892.86;
    $request->maxlongitude = 1138.08;
    $request->minlatitude = 7664.98;
    $request->minlongitude = 1020.71;
    $request->name = 'Guillermo McClure';
    $request->skip = 637969;
    $request->text = 'iste';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-18T22:27:59.069Z');

    $response = $sdk->typeTypeDocumentDoc->searchTypeDocumentDoc($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
