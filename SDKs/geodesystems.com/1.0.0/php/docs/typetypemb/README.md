# typeTypeMb

## Overview

Search API for 'MB Bathymetry' entry type

### Available Operations

* [searchTypeMb](#searchtypemb) - Search API for 'MB Bathymetry' entry type

## searchTypeMb

API to search for entries of type MB Bathymetry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeMbRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypeMbRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-17T16:31:04.532Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-28T01:35:11.563Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-05T05:37:18.912Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-12T12:22:15.424Z');
    $request->description = 'distinctio';
    $request->filesuffix = 'quaerat';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-17T18:52:45.867Z');
    $request->group = 'nihil';
    $request->max = 928102;
    $request->maxlatitude = 2538.55;
    $request->maxlongitude = 6520.13;
    $request->minlatitude = 6515.04;
    $request->minlongitude = 5043.86;
    $request->name = 'Dianne Hayes';
    $request->skip = 614175;
    $request->text = 'ea';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-20T10:09:28.379Z');

    $response = $sdk->typeTypeMb->searchTypeMb($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
