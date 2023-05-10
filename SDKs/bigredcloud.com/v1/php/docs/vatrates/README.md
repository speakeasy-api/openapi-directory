# vatRates

### Available Operations

* [vatRatesGet](#vatratesget) - Returns a list of company's Vat Rates. Supports OData querying protocol.
Filtering is allowed by "vatCategoryId" field.
Ordering is allowed by "id" and "orderIndex" fields.

## vatRatesGet

Returns a list of company's Vat Rates. Supports OData querying protocol.
Filtering is allowed by "vatCategoryId" field.
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
    $response = $sdk->vatRates->vatRatesGet();

    if ($response->pageResultVatRateDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
