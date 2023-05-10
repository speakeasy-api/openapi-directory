# addressTypes

## Overview

A classification scheme for addresses.


### Available Operations

* [getClassificationsAddressTypes](#getclassificationsaddresstypes) - Retrieve a list of address types

## getClassificationsAddressTypes

Retrieve a list of address types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsAddressTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsAddressTypesRequest();
    $request->apiKey = 'provident';

    $response = $sdk->addressTypes->getClassificationsAddressTypes($request);

    if ($response->addressTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
