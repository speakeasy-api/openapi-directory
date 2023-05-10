# userDefinedFields

### Available Operations

* [userDefinedFieldsGet](#userdefinedfieldsget) - Returns a list of company's User Defined Fields. Supports OData querying protocol.
Filtering is allowed by "categoryTypeId" field.
Ordering is allowed by "id" and "orderIndex" fields.

## userDefinedFieldsGet

Returns a list of company's User Defined Fields. Supports OData querying protocol.
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
    $response = $sdk->userDefinedFields->userDefinedFieldsGet();

    if ($response->pageResultUserDefinedFieldDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
