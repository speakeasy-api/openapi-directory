# typeNwsfeed

## Overview

Search API for 'NWS Forecast Feed' entry type

### Available Operations

* [searchNwsfeed](#searchnwsfeed) - Search API for 'NWS Forecast Feed' entry type

## searchNwsfeed

API to search for entries of type NWS Forecast Feed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchNwsfeedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchNwsfeedRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-31T06:08:59.133Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-12T00:16:23.616Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-17T18:12:26.163Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-16T07:19:53.468Z');
    $request->description = 'saepe';
    $request->filesuffix = 'delectus';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-05T07:23:40.175Z');
    $request->group = 'cumque';
    $request->max = 617497;
    $request->maxlatitude = 3125.11;
    $request->maxlongitude = 9853.79;
    $request->minlatitude = 1560.98;
    $request->minlongitude = 8872.84;
    $request->name = 'Noel Hauck';
    $request->skip = 365539;
    $request->text = 'illum';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-23T20:22:30.828Z');

    $response = $sdk->typeNwsfeed->searchNwsfeed($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
