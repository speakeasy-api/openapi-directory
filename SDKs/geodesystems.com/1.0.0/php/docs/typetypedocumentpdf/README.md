# typeTypeDocumentPdf

## Overview

Search API for 'PDF File' entry type

### Available Operations

* [searchTypeDocumentPdf](#searchtypedocumentpdf) - Search API for 'PDF File' entry type

## searchTypeDocumentPdf

API to search for entries of type PDF File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeDocumentPdfRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeDocumentPdfRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-02T05:43:50.216Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-18T06:55:38.525Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-24T11:49:51.417Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-24T06:32:15.469Z');
    $request->description = 'voluptates';
    $request->filesuffix = 'delectus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-14T20:40:34.498Z');
    $request->group = 'exercitationem';
    $request->max = 217552;
    $request->maxlatitude = 3851.65;
    $request->maxlongitude = 413.46;
    $request->minlatitude = 1533.7;
    $request->minlongitude = 5301.99;
    $request->name = 'Darnell Watsica';
    $request->skip = 584663;
    $request->text = 'adipisci';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-05T19:27:10.992Z');

    $response = $sdk->typeTypeDocumentPdf->searchTypeDocumentPdf($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
