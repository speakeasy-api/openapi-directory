# locations

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [listLocations](#listlocations) - List locations

## listLocations

Retrieve a list of locations as seen in the commerce platform.

A `location` is a geographic place at which stocks of products may be held, or from where orders were placed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLocationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLocationsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->locations->listLocations($request);

    if ($response->locationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
