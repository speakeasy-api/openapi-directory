# payeeBankAccounts

### Available Operations

* [getPayees](#getpayees) - List all Payee Bank Accounts

## getPayees

Returns all your payee bank accounts. 

Ordered by payee name ascending. 

Can be paginated.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->payeeBankAccounts->getPayees();

    if ($response->payeeBankAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
