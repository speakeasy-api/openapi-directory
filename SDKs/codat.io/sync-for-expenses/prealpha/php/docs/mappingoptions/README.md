# mappingOptions

## Overview

Mapping options for a companies expenses.

### Available Operations

* [getMappingOptions](#getmappingoptions) - Mapping options

## getMappingOptions

Gets the expense mapping options for a companies accounting software

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMappingOptionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMappingOptionsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';

    $response = $sdk->mappingOptions->getMappingOptions($request);

    if ($response->mappingOptions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
