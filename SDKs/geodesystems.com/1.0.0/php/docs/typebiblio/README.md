# typeBiblio

## Overview

Search API for 'Bibliographic Entry' entry type

### Available Operations

* [searchBiblio](#searchbiblio) - Search API for 'Bibliographic Entry' entry type

## searchBiblio

API to search for entries of type Bibliographic Entry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBiblioRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBiblioRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-10T11:47:13.463Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-06T21:04:34.044Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-24T21:51:02.112Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-09T11:41:25.666Z');
    $request->description = 'sapiente';
    $request->filesuffix = 'architecto';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-01T12:28:44.292Z');
    $request->group = 'culpa';
    $request->max = 161309;
    $request->maxlatitude = 9953;
    $request->maxlongitude = 6531.08;
    $request->minlatitude = 5818.5;
    $request->minlongitude = 2532.91;
    $request->name = 'Claudia Krajcik';
    $request->searchBiblioInstitution = 'quia';
    $request->searchBiblioOtherAuthors = 'quis';
    $request->searchBiblioPrimaryAuthor = 'vitae';
    $request->searchBiblioPublication = 'laborum';
    $request->searchBiblioType = 'animi';
    $request->skip = 317202;
    $request->text = 'odit';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T17:48:55.594Z');

    $response = $sdk->typeBiblio->searchBiblio($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
