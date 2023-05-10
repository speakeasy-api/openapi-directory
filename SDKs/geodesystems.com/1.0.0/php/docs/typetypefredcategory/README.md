# typeTypeFredCategory

## Overview

Search API for 'FRED Category' entry type

### Available Operations

* [searchTypeFredCategory](#searchtypefredcategory) - Search API for 'FRED Category' entry type

## searchTypeFredCategory

API to search for entries of type FRED Category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeFredCategoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeFredCategoryRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-25T09:45:59.184Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-26T08:22:25.392Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-19T02:34:49.174Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-09T05:06:53.566Z');
    $request->description = 'inventore';
    $request->filesuffix = 'optio';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-25T01:43:39.041Z');
    $request->group = 'commodi';
    $request->max = 820322;
    $request->maxlatitude = 5890.98;
    $request->maxlongitude = 3304.59;
    $request->minlatitude = 263.89;
    $request->minlongitude = 1460.04;
    $request->name = 'Michael Thiel';
    $request->skip = 187612;
    $request->text = 'perferendis';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-31T01:51:07.320Z');

    $response = $sdk->typeTypeFredCategory->searchTypeFredCategory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
