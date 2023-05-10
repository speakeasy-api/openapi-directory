# typeHipchatGroup

## Overview

Search API for 'HipChat Group' entry type

### Available Operations

* [searchHipchatGroup](#searchhipchatgroup) - Search API for 'HipChat Group' entry type

## searchHipchatGroup

API to search for entries of type HipChat Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchHipchatGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchHipchatGroupRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-12T22:07:15.196Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-02T01:41:14.280Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-07T02:38:58.799Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-15T00:25:29.820Z');
    $request->description = 'nisi';
    $request->filesuffix = 'rerum';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-04-05T22:53:14.639Z');
    $request->group = 'non';
    $request->max = 524577;
    $request->maxlatitude = 1578.84;
    $request->maxlongitude = 3542.25;
    $request->minlatitude = 7868.6;
    $request->minlongitude = 1202.77;
    $request->name = 'Colin Berge Sr.';
    $request->skip = 317898;
    $request->text = 'optio';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-19T13:06:00.021Z');

    $response = $sdk->typeHipchatGroup->searchHipchatGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
