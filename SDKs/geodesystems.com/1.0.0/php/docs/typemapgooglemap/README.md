# typeMapGooglemap

## Overview

Search API for 'Google Map URL' entry type

### Available Operations

* [searchMapGooglemap](#searchmapgooglemap) - Search API for 'Google Map URL' entry type

## searchMapGooglemap

API to search for entries of type Google Map URL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchMapGooglemapRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchMapGooglemapRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-15T10:08:44.059Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-16T03:46:30.247Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-10T02:09:22.586Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-04T13:22:29.959Z');
    $request->description = 'sed';
    $request->filesuffix = 'nesciunt';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-27T01:32:30.329Z');
    $request->group = 'cupiditate';
    $request->max = 303253;
    $request->maxlatitude = 5692.87;
    $request->maxlongitude = 9804.1;
    $request->minlatitude = 5120.81;
    $request->minlongitude = 2439.04;
    $request->name = 'Miss Vincent Hickle';
    $request->skip = 555294;
    $request->text = 'molestiae';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-05T00:04:42.693Z');

    $response = $sdk->typeMapGooglemap->searchMapGooglemap($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
