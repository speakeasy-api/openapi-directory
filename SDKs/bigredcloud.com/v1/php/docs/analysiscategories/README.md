# analysisCategories

### Available Operations

* [analysisCategoriesGet](#analysiscategoriesget) - Returns a list of company's Analysis Categories. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

## analysisCategoriesGet

Returns a list of company's Analysis Categories. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->analysisCategories->analysisCategoriesGet();

    if ($response->pageResultAnalysisCategoryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
