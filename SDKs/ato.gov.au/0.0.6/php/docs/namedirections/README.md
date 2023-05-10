# nameDirections

## Overview

A classification scheme for names.


### Available Operations

* [getClassificationsNameDirections](#getclassificationsnamedirections) - Retrieve a list of name directions

## getClassificationsNameDirections

Retrieve a list of name directions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsNameDirectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsNameDirectionsRequest();
    $request->apiKey = 'animi';

    $response = $sdk->nameDirections->getClassificationsNameDirections($request);

    if ($response->nameDirections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
