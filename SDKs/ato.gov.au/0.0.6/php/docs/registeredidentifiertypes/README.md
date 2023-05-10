# registeredIdentifierTypes

## Overview

A classification scheme for registered identifiers.


### Available Operations

* [getClassificationsRegisteredIdentifierTypes](#getclassificationsregisteredidentifiertypes) - Retrieve a list of registered identifier types

## getClassificationsRegisteredIdentifierTypes

Retrieve a list of registered identifier types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsRegisteredIdentifierTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsRegisteredIdentifierTypesRequest();
    $request->apiKey = 'blanditiis';

    $response = $sdk->registeredIdentifierTypes->getClassificationsRegisteredIdentifierTypes($request);

    if ($response->registeredIdentifierTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
