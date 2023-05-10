# typeBioOntologyCohort

## Overview

Search API for 'Cohort' entry type

### Available Operations

* [searchBioOntologyCohort](#searchbioontologycohort) - Search API for 'Cohort' entry type

## searchBioOntologyCohort

API to search for entries of type Cohort

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchBioOntologyCohortRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchBioOntologyCohortRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-19T10:57:57.489Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-12T10:47:34.158Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-18T18:29:26.833Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-09T22:25:53.570Z');
    $request->description = 'perferendis';
    $request->filesuffix = 'fugiat';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-27T17:23:03.738Z');
    $request->group = 'cumque';
    $request->max = 359978;
    $request->maxlatitude = 9441.24;
    $request->maxlongitude = 7299.91;
    $request->minlatitude = 7499.99;
    $request->minlongitude = 1716.29;
    $request->name = 'Mrs. Deanna Kuhn';
    $request->skip = 179490;
    $request->text = 'perferendis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-17T07:12:29.048Z');

    $response = $sdk->typeBioOntologyCohort->searchBioOntologyCohort($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
