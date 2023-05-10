# typeBioFasta

## Overview

Search API for 'FASTA File' entry type

### Available Operations

* [searchBioFasta](#searchbiofasta) - Search API for 'FASTA File' entry type

## searchBioFasta

API to search for entries of type FASTA File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioFastaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioFastaRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-26T18:54:54.344Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-26T08:57:48.803Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-08T19:05:24.174Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-23T10:34:02.904Z');
    $request->description = 'perferendis';
    $request->filesuffix = 'magni';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-22T01:26:35.048Z');
    $request->group = 'alias';
    $request->max = 146441;
    $request->maxlatitude = 6778.17;
    $request->maxlongitude = 5696.18;
    $request->minlatitude = 2700.08;
    $request->minlongitude = 7037.37;
    $request->name = 'Francisco Windler';
    $request->skip = 756107;
    $request->text = 'sint';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-29T21:42:45.399Z');

    $response = $sdk->typeBioFasta->searchBioFasta($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
