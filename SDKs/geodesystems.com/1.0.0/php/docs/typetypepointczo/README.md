# typeTypePointCzo

## Overview

Search API for 'CZO Display File Format' entry type

### Available Operations

* [searchTypePointCzo](#searchtypepointczo) - Search API for 'CZO Display File Format' entry type

## searchTypePointCzo

API to search for entries of type CZO Display File Format

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointCzoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointCzoRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-21T17:50:54.328Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-31T14:44:31.131Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-08T00:50:35.455Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-10T16:00:54.799Z');
    $request->description = 'consectetur';
    $request->filesuffix = 'quos';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T07:07:10.067Z');
    $request->group = 'repudiandae';
    $request->max = 818273;
    $request->maxlatitude = 7165.38;
    $request->maxlongitude = 4973.63;
    $request->minlatitude = 5404.16;
    $request->minlongitude = 2343.83;
    $request->name = 'Sherri Tillman';
    $request->skip = 327624;
    $request->text = 'cumque';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-27T00:11:05.949Z');

    $response = $sdk->typeTypePointCzo->searchTypePointCzo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
