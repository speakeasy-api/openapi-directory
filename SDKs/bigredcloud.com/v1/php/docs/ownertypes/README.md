# ownerTypes

### Available Operations

* [ownerTypesGet](#ownertypesget) - Returns a list of global Owner Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## ownerTypesGet

Returns a list of global Owner Types. Supports OData querying protocol.
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
    $response = $sdk->ownerTypes->ownerTypesGet();

    if ($response->pageResultOwnerTypeDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
