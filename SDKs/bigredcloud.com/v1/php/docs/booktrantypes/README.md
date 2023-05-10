# bookTranTypes

### Available Operations

* [bookTranTypesGet](#booktrantypesget) - Returns a list of global Book Transactions' Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## bookTranTypesGet

Returns a list of global Book Transactions' Types. Supports OData querying protocol.
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
    $response = $sdk->bookTranTypes->bookTranTypesGet();

    if ($response->pageResultBookTranTypeDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
