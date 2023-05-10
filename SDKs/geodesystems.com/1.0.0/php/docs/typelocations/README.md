# typeLocations

## Overview

Search API for 'Locations' entry type

### Available Operations

* [searchLocations](#searchlocations) - Search API for 'Locations' entry type

## searchLocations

API to search for entries of type Locations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchLocationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchLocationsRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-23T12:52:34.546Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-08T04:42:37.704Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-17T18:03:37.666Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-30T13:07:06.451Z');
    $request->description = 'quasi';
    $request->filesuffix = 'neque';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-20T21:19:50.796Z');
    $request->group = 'accusantium';
    $request->max = 185816;
    $request->maxlatitude = 7712.41;
    $request->maxlongitude = 1047.36;
    $request->minlatitude = 2783.29;
    $request->minlongitude = 1165.58;
    $request->name = 'Miss Dana Prohaska';
    $request->searchDbLocationsLocation = 'accusantium';
    $request->searchDbLocationsName = 'id';
    $request->searchDbLocationsType = 'laboriosam';
    $request->skip = 401688;
    $request->text = 'quas';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-23T21:35:10.953Z');

    $response = $sdk->typeLocations->searchLocations($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
