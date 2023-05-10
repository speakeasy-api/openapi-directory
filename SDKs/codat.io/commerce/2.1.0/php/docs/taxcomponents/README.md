# taxComponents

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [getTaxComponents](#gettaxcomponents) - List tax components

## getTaxComponents

This endpoint returns a lits of tax rates from the commerce platform, including tax rate names and values. This supports the mapping of tax rates from the commerce platform to the accounting platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTaxComponentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaxComponentsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->taxComponents->getTaxComponents($request);

    if ($response->taxComponents !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
