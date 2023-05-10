# typeBioOntologySeries

## Overview

Search API for 'Series' entry type

### Available Operations

* [searchBioOntologySeries](#searchbioontologyseries) - Search API for 'Series' entry type

## searchBioOntologySeries

API to search for entries of type Series

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioOntologySeriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioOntologySeriesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T13:18:59.478Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-16T23:42:38.113Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-23T01:35:05.899Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-04T12:00:33.616Z');
    $request->description = 'dolorum';
    $request->filesuffix = 'iusto';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-28T20:45:55.086Z');
    $request->group = 'deleniti';
    $request->max = 607045;
    $request->maxlatitude = 8966.72;
    $request->maxlongitude = 7146.97;
    $request->minlatitude = 9903.39;
    $request->minlongitude = 4694.97;
    $request->name = 'Tamara Ondricka';
    $request->skip = 137220;
    $request->text = 'perferendis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-30T04:36:10.591Z');

    $response = $sdk->typeBioOntologySeries->searchBioOntologySeries($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
