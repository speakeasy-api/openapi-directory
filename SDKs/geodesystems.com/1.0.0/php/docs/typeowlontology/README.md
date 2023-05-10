# typeOwlOntology

## Overview

Search API for 'OWL Ontology' entry type

### Available Operations

* [searchOwlOntology](#searchowlontology) - Search API for 'OWL Ontology' entry type

## searchOwlOntology

API to search for entries of type OWL Ontology

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchOwlOntologyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchOwlOntologyRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-23T01:27:41.480Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-08T14:16:56.716Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-29T19:50:28.684Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-09T17:15:53.752Z');
    $request->description = 'esse';
    $request->filesuffix = 'animi';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-29T10:24:00.407Z');
    $request->group = 'eveniet';
    $request->max = 935161;
    $request->maxlatitude = 2464.02;
    $request->maxlongitude = 8847.65;
    $request->minlatitude = 2633.46;
    $request->minlongitude = 7019.78;
    $request->name = 'Lance Hintz';
    $request->skip = 397014;
    $request->text = 'quis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-25T18:23:48.906Z');

    $response = $sdk->typeOwlOntology->searchOwlOntology($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
