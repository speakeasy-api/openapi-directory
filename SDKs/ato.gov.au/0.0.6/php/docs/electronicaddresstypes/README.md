# electronicAddressTypes

## Overview

A classification scheme for electronic addresses.


### Available Operations

* [getClassificationsElectronicAddressTypes](#getclassificationselectronicaddresstypes) - Retrieve a list of electronic address types

## getClassificationsElectronicAddressTypes

Retrieve a list of electronic address types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsElectronicAddressTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsElectronicAddressTypesRequest();
    $request->apiKey = 'unde';

    $response = $sdk->electronicAddressTypes->getClassificationsElectronicAddressTypes($request);

    if ($response->electronicAddressTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
