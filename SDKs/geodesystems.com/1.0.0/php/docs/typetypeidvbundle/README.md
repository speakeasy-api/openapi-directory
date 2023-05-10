# typeTypeIdvBundle

## Overview

Search API for 'IDV Bundle' entry type

### Available Operations

* [searchTypeIdvBundle](#searchtypeidvbundle) - Search API for 'IDV Bundle' entry type

## searchTypeIdvBundle

API to search for entries of type IDV Bundle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeIdvBundleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeIdvBundleRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T21:35:25.876Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-09T03:34:35.256Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-08T17:29:46.483Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-15T00:58:22.386Z');
    $request->description = 'facilis';
    $request->filesuffix = 'minus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-06T04:49:44.902Z');
    $request->group = 'omnis';
    $request->max = 92279;
    $request->maxlatitude = 9391.31;
    $request->maxlongitude = 6855.13;
    $request->minlatitude = 6654.27;
    $request->minlongitude = 7160.24;
    $request->name = 'Jody Lebsack';
    $request->skip = 461094;
    $request->text = 'vitae';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-03T21:22:50.101Z');

    $response = $sdk->typeTypeIdvBundle->searchTypeIdvBundle($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
