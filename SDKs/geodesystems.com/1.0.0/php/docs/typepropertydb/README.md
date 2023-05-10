# typePropertydb

## Overview

Search API for 'Property Database' entry type

### Available Operations

* [searchPropertydb](#searchpropertydb) - Search API for 'Property Database' entry type

## searchPropertydb

API to search for entries of type Property Database

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchPropertydbRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchPropertydbRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-02T14:38:11.345Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-16T15:28:22.285Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-18T13:21:09.532Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-20T07:29:54.943Z');
    $request->description = 'veritatis';
    $request->filesuffix = 'facere';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-25T20:40:11.724Z');
    $request->group = 'dicta';
    $request->max = 32737;
    $request->maxlatitude = 1409.09;
    $request->maxlongitude = 3988.47;
    $request->minlatitude = 8626.66;
    $request->minlongitude = 3184.5;
    $request->name = 'Julie O'Reilly';
    $request->searchDbPropertydbAddress = 'vitae';
    $request->searchDbPropertydbBuildingType = 'omnis';
    $request->searchDbPropertydbCity = 'alias';
    $request->searchDbPropertydbHouseSize = 957489;
    $request->searchDbPropertydbLocation = 'officiis';
    $request->searchDbPropertydbLotAcres = 7088.83;
    $request->searchDbPropertydbLotSqft = 156843;
    $request->searchDbPropertydbOwner = 'vitae';
    $request->searchDbPropertydbPriceSqft = 4878.39;
    $request->searchDbPropertydbPropertyId = 'quas';
    $request->searchDbPropertydbState = 'ipsa';
    $request->searchDbPropertydbValue = 718187;
    $request->skip = 811903;
    $request->text = 'quod';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-03T04:16:30.672Z');

    $response = $sdk->typePropertydb->searchPropertydb($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
