# typeTypePointIdv

## Overview

Search API for 'IDV Point File' entry type

### Available Operations

* [searchTypePointIdv](#searchtypepointidv) - Search API for 'IDV Point File' entry type

## searchTypePointIdv

API to search for entries of type IDV Point File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointIdvRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointIdvRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-18T05:16:16.243Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-11T08:21:58.068Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-19T05:40:22.978Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-11T01:56:03.304Z');
    $request->description = 'quia';
    $request->filesuffix = 'maxime';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-31T05:34:29.866Z');
    $request->group = 'maiores';
    $request->max = 346164;
    $request->maxlatitude = 4998.74;
    $request->maxlongitude = 2935.12;
    $request->minlatitude = 6152.06;
    $request->minlongitude = 817.75;
    $request->name = 'Rex Pollich';
    $request->skip = 135992;
    $request->text = 'vero';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-26T22:57:11.830Z');

    $response = $sdk->typeTypePointIdv->searchTypePointIdv($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
