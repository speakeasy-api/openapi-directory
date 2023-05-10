# SDK

## Overview

GeoDataSource™ Web Service is a REST API enable user to lookup for a city by using latitude and longitude coordinate. It will return the result in either JSON or XML containing the information of country, region, city, latitude and longitude. Visit https://www.geodatasource.com/web-service for further information.

### Available Operations

* [getCity](#getcity) - Get City name by using latitude and longitude

## getCity

Get City name by using latitude and longitude

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCityFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCityRequest();
    $request->format = GetCityFormatEnum::XML;
    $request->key = 'nulla';
    $request->lat = 5448.83;
    $request->lng = 8472.52;

    $response = $sdk->sdk->getCity($request);

    if ($response->getCity200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
