# SDK

## Overview

Abstract IP geolocation API allows developers to retrieve the region, country and city behind any IP worldwide. The API covers the geolocation of IPv4 and IPv6 addresses in 180+ countries worldwide. Extra information can be retrieved like the currency, flag or language associated to an IP.

API Documentation
<https://www.abstractapi.com/ip-geolocation-api#docs>
### Available Operations

* [getV1](#getv1) - Retrieve the location of an IP address

## getV1

Retrieve the location of an IP address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1Request();
    $request->apiKey = 'provident';
    $request->fields = 'country,city,timezone';
    $request->ipAddress = '195.154.25.40';

    $response = $sdk->sdk->getV1($request);

    if ($response->inlineResponse200 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
