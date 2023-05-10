# typeGroup

## Overview

Search API for 'Folder' entry type

### Available Operations

* [searchGroup](#searchgroup) - Search API for 'Folder' entry type

## searchGroup

API to search for entries of type Folder

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGroupRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T23:22:33.052Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-02T19:45:49.999Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-01T08:37:58.653Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-25T07:28:31.947Z');
    $request->description = 'qui';
    $request->filesuffix = 'necessitatibus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-30T11:43:51.351Z');
    $request->group = 'beatae';
    $request->max = 397988;
    $request->maxlatitude = 2646.49;
    $request->maxlongitude = 7600.49;
    $request->minlatitude = 9750.95;
    $request->minlongitude = 5629.48;
    $request->name = 'Randolph Lebsack';
    $request->skip = 412052;
    $request->text = 'impedit';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-10T13:12:44.057Z');

    $response = $sdk->typeGroup->searchGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
