# accounts

### Available Operations

* [accountsGet](#accountsget) - Returns a list of company's Accounts. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.

## accountsGet

Returns a list of company's Accounts. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->accounts->accountsGet();

    if ($response->pageResultAccountDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
