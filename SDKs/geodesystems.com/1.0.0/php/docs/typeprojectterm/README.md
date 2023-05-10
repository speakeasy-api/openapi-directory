# typeProjectTerm

## Overview

Search API for 'Vocabulary Term' entry type

### Available Operations

* [searchProjectTerm](#searchprojectterm) - Search API for 'Vocabulary Term' entry type

## searchProjectTerm

API to search for entries of type Vocabulary Term

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchProjectTermRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchProjectTermRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-24T17:08:44.205Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-08T23:10:36.760Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-08T09:26:05.109Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-29T16:18:11.316Z');
    $request->description = 'in';
    $request->filesuffix = 'sed';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T19:38:47.401Z');
    $request->group = 'fugiat';
    $request->max = 743938;
    $request->maxlatitude = 584.63;
    $request->maxlongitude = 9670.47;
    $request->minlatitude = 2891.53;
    $request->minlongitude = 8748.43;
    $request->name = 'Ms. Billie Boyle';
    $request->searchProjectTermValue = 'fugiat';
    $request->skip = 313695;
    $request->text = 'iure';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-21T07:53:38.590Z');

    $response = $sdk->typeProjectTerm->searchProjectTerm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
