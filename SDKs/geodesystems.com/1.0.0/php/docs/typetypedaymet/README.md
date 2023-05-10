# typeTypeDaymet

## Overview

Search API for 'Daymet Daily Weather' entry type

### Available Operations

* [searchTypeDaymet](#searchtypedaymet) - Search API for 'Daymet Daily Weather' entry type

## searchTypeDaymet

API to search for entries of type Daymet Daily Weather

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeDaymetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeDaymetRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-06T19:59:53.042Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-13T12:14:41.518Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-03T17:51:05.151Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-07T17:15:50.087Z');
    $request->description = 'accusantium';
    $request->filesuffix = 'voluptates';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-16T17:23:13.201Z');
    $request->group = 'quaerat';
    $request->max = 256647;
    $request->maxlatitude = 2482.76;
    $request->maxlongitude = 7410.24;
    $request->minlatitude = 2779.35;
    $request->minlongitude = 1754.55;
    $request->name = 'Marcia Rempel';
    $request->skip = 179588;
    $request->text = 'quisquam';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-04T22:57:21.083Z');

    $response = $sdk->typeTypeDaymet->searchTypeDaymet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
