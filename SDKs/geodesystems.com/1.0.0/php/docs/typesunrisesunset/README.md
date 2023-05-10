# typeSunrisesunset

## Overview

Search API for 'Sunrise/Sunset Display' entry type

### Available Operations

* [searchSunrisesunset](#searchsunrisesunset) - Search API for 'Sunrise/Sunset Display' entry type

## searchSunrisesunset

API to search for entries of type Sunrise/Sunset Display

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchSunrisesunsetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchSunrisesunsetRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-10T14:02:23.370Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-03T12:07:22.406Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-09T16:36:14.999Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-23T16:20:14.362Z');
    $request->description = 'dicta';
    $request->filesuffix = 'qui';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-29T17:39:27.998Z');
    $request->group = 'amet';
    $request->max = 9284;
    $request->maxlatitude = 8526.34;
    $request->maxlongitude = 5320.92;
    $request->minlatitude = 2451.16;
    $request->minlongitude = 9427.8;
    $request->name = 'Rosie Waters';
    $request->skip = 493865;
    $request->text = 'provident';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-06T00:34:29.656Z');

    $response = $sdk->typeSunrisesunset->searchSunrisesunset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
