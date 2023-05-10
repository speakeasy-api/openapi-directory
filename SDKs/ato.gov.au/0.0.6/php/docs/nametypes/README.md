# nameTypes

## Overview

A classification scheme for names.


### Available Operations

* [getClassificationsNameTypes](#getclassificationsnametypes) - Retrieve a list of name types

## getClassificationsNameTypes

Retrieve a list of name types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsNameTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsNameTypesRequest();
    $request->apiKey = 'odit';

    $response = $sdk->nameTypes->getClassificationsNameTypes($request);

    if ($response->nameTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
