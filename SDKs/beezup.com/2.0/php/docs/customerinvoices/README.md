# customerInvoices

### Available Operations

* [getInvoices](#getinvoices) - Get all your invoices

## getInvoices

Get all your invoices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInvoicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvoicesRequest();
    $request->ifNoneMatch = 'ipsum';

    $response = $sdk->customerInvoices->getInvoices($request);

    if ($response->invoiceList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
