# typeTypeDbTable

## Overview

Search API for 'Database Table' entry type

### Available Operations

* [searchTypeDbTable](#searchtypedbtable) - Search API for 'Database Table' entry type

## searchTypeDbTable

API to search for entries of type Database Table

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeDbTableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeDbTableRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-25T15:46:52.343Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-04T07:26:03.876Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-27T11:17:23.811Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-27T21:54:39.142Z');
    $request->description = 'sapiente';
    $request->filesuffix = 'id';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-02T15:06:25.913Z');
    $request->group = 'iste';
    $request->max = 542187;
    $request->maxlatitude = 1295.31;
    $request->maxlongitude = 3560.07;
    $request->minlatitude = 5397.03;
    $request->minlongitude = 9874.35;
    $request->name = 'Richard Murray';
    $request->skip = 723623;
    $request->text = 'animi';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-18T18:41:54.686Z');

    $response = $sdk->typeTypeDbTable->searchTypeDbTable($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
