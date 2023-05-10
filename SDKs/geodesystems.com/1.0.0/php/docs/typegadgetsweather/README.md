# typeGadgetsWeather

## Overview

Search API for 'Weather' entry type

### Available Operations

* [searchGadgetsWeather](#searchgadgetsweather) - Search API for 'Weather' entry type

## searchGadgetsWeather

API to search for entries of type Weather

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchGadgetsWeatherRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGadgetsWeatherRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-30T21:28:00.704Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-19T18:05:42.224Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-15T17:32:59.128Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-22T21:20:56.552Z');
    $request->description = 'ex';
    $request->filesuffix = 'quaerat';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-10T15:43:41.658Z');
    $request->group = 'placeat';
    $request->max = 697274;
    $request->maxlatitude = 3481.92;
    $request->maxlongitude = 4633.44;
    $request->minlatitude = 2114.55;
    $request->minlongitude = 2646.19;
    $request->name = 'Bobbie Terry';
    $request->skip = 741232;
    $request->text = 'dicta';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-30T18:01:47.888Z');

    $response = $sdk->typeGadgetsWeather->searchGadgetsWeather($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
