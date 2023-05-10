# SDK

## Overview

Transform API Descriptions from/to various formats

API Transformer Website
<https://apimatic.io/transformer>
### Available Operations

* [convertAPI](#convertapi) - Transform API Descriptions from/to various formats

## convertAPI

Transform API Descriptions from/to various formats e.g., Swagger, API Blueprint, RAML, WADL, Google Discovery, I/O Docs.

### INPUTS
* API Blueprint
* Swagger 1.0 - 1.2
* Swagger 2.0 JSON
* Swagger 2.0 YAML
* WADL - W3C 2009
* Google Discovery
* RAML 0.8
* I/O Docs - Mashery
* HAR 1.2
* Postman Collection 1.0 - 2.0
* APIMATIC Format
* Mashape

### OUTPUTS
* API Blueprint
* Swagger 1.2
* Swagger 2.0 JSON
* Swagger 2.0 YAML
* WADL - W3C 2009
* RAML 0.8 - 1.0
* APIMATIC Format

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConvertAPIRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConvertAPIRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ConvertAPIFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConvertAPIRequest();
    $request->requestBody = new ConvertAPIRequestBody();
    $request->requestBody->url = 'distinctio';
    $request->format = ConvertAPIFormatEnum::RAML;

    $response = $sdk->sdk->convertAPI($request);

    if ($response->convertAPI200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
