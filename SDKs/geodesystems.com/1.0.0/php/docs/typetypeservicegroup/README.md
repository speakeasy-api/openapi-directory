# typeTypeServiceGroup

## Overview

Search API for 'Service Group' entry type

### Available Operations

* [searchTypeServiceGroup](#searchtypeservicegroup) - Search API for 'Service Group' entry type

## searchTypeServiceGroup

API to search for entries of type Service Group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeServiceGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeServiceGroupRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-22T14:47:18.885Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-30T02:45:15.076Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-13T00:54:03.818Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-18T13:05:17.215Z');
    $request->description = 'doloremque';
    $request->filesuffix = 'officiis';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-23T14:56:49.236Z');
    $request->group = 'necessitatibus';
    $request->max = 1962;
    $request->maxlatitude = 5898.68;
    $request->maxlongitude = 2853.36;
    $request->minlatitude = 9417.76;
    $request->minlongitude = 8141.59;
    $request->name = 'Alonzo Shields';
    $request->skip = 293991;
    $request->text = 'sit';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-21T13:58:54.874Z');

    $response = $sdk->typeTypeServiceGroup->searchTypeServiceGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
