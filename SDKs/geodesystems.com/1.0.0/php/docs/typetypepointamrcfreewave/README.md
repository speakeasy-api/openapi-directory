# typeTypePointAmrcFreewave

## Overview

Search API for 'AMRC Freewave  Data' entry type

### Available Operations

* [searchTypePointAmrcFreewave](#searchtypepointamrcfreewave) - Search API for 'AMRC Freewave  Data' entry type

## searchTypePointAmrcFreewave

API to search for entries of type AMRC Freewave  Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypePointAmrcFreewaveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTypePointAmrcFreewaveRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-12T21:53:27.420Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-30T19:57:19.656Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-28T06:13:48.877Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-05T06:34:33.185Z');
    $request->description = 'alias';
    $request->filesuffix = 'laudantium';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-11T05:46:20.273Z');
    $request->group = 'maiores';
    $request->max = 723374;
    $request->maxlatitude = 8672.86;
    $request->maxlongitude = 7972.62;
    $request->minlatitude = 2665.04;
    $request->minlongitude = 1143.41;
    $request->name = 'Toby Hilll';
    $request->searchTypePointAmrcFreewaveDataloggerModel = 'officiis';
    $request->searchTypePointAmrcFreewaveDataloggerSerial = 'sed';
    $request->searchTypePointAmrcFreewaveFormat = 'mollitia';
    $request->searchTypePointAmrcFreewaveStationName = 'saepe';
    $request->skip = 289373;
    $request->text = 'doloribus';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-06T23:45:07.291Z');

    $response = $sdk->typeTypePointAmrcFreewave->searchTypePointAmrcFreewave($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
