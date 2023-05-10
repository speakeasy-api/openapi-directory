# typeLocalfiles

## Overview

Search API for 'Server Side Files' entry type

### Available Operations

* [searchLocalfiles](#searchlocalfiles) - Search API for 'Server Side Files' entry type

## searchLocalfiles

API to search for entries of type Server Side Files

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchLocalfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchLocalfilesRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T11:24:22.596Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-19T09:30:43.417Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-21T17:37:11.705Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-24T15:03:49.689Z');
    $request->description = 'similique';
    $request->filesuffix = 'porro';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-17T13:10:04.528Z');
    $request->group = 'magni';
    $request->max = 885797;
    $request->maxlatitude = 1483.79;
    $request->maxlongitude = 8981.11;
    $request->minlatitude = 7732.59;
    $request->minlongitude = 559.81;
    $request->name = 'Darnell Wunsch';
    $request->skip = 691;
    $request->text = 'asperiores';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T09:51:21.294Z');

    $response = $sdk->typeLocalfiles->searchLocalfiles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
