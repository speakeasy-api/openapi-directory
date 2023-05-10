# typeProjectVisit

## Overview

Search API for 'Site Visit' entry type

### Available Operations

* [searchProjectVisit](#searchprojectvisit) - Search API for 'Site Visit' entry type

## searchProjectVisit

API to search for entries of type Site Visit

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectVisitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectVisitRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T00:18:26.818Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-28T08:47:25.593Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-26T03:36:42.239Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-05T18:49:24.442Z');
    $request->description = 'unde';
    $request->filesuffix = 'quae';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-29T09:17:21.956Z');
    $request->group = 'eveniet';
    $request->max = 389630;
    $request->maxlatitude = 1873.61;
    $request->maxlongitude = 5054.73;
    $request->minlatitude = 6977.29;
    $request->minlongitude = 8486.49;
    $request->name = 'Mrs. Guadalupe Daniel';
    $request->skip = 693724;
    $request->text = 'voluptas';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-19T08:10:54.315Z');

    $response = $sdk->typeProjectVisit->searchProjectVisit($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
