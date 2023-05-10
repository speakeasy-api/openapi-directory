# vatAnalysisTypes

### Available Operations

* [vatAnalysisTypesGet](#vatanalysistypesget) - Returns a list of global Vat Analysis Types. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

## vatAnalysisTypesGet

Returns a list of global Vat Analysis Types. Supports OData querying protocol.
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
    $response = $sdk->vatAnalysisTypes->vatAnalysisTypesGet();

    if ($response->pageResultVatAnalysisTypeDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
