# typeTypeTmy

## Overview

Search API for 'NREL TMY Data' entry type

### Available Operations

* [searchTypeTmy](#searchtypetmy) - Search API for 'NREL TMY Data' entry type

## searchTypeTmy

API to search for entries of type NREL TMY Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeTmyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeTmyRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-18T02:30:42.135Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-11T02:17:59.836Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-28T14:30:56.159Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-01T09:16:59.500Z');
    $request->description = 'assumenda';
    $request->filesuffix = 'laborum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T06:55:42.234Z');
    $request->group = 'fugit';
    $request->max = 471317;
    $request->maxlatitude = 8467.15;
    $request->maxlongitude = 8601.44;
    $request->minlatitude = 3648.57;
    $request->minlongitude = 6073.65;
    $request->name = 'Darla Williamson';
    $request->skip = 96301;
    $request->text = 'inventore';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-05T10:47:22.933Z');

    $response = $sdk->typeTypeTmy->searchTypeTmy($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
