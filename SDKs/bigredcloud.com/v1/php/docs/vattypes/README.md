# vatTypes

### Available Operations

* [vatTypesGet](#vattypesget) - Returns a list of global Vat Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## vatTypesGet

Returns a list of global Vat Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->vatTypes->vatTypesGet();

    if ($response->pageResultVatTypeDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
