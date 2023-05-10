# productTypes

### Available Operations

* [productTypesGet](#producttypesget) - Returns a list of global Product Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## productTypesGet

Returns a list of global Product Types. Supports OData querying protocol.
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
    $response = $sdk->productTypes->productTypesGet();

    if ($response->pageResultOwnerTypeDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
