# categoryTypes

### Available Operations

* [categoryTypesGet](#categorytypesget) - Returns a list of company's Category Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## categoryTypesGet

Returns a list of company's Category Types. Supports OData querying protocol.
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
    $response = $sdk->categoryTypes->categoryTypesGet();

    if ($response->pageResultCategoryTypeDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
