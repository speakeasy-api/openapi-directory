# transactionRequests1234

### Available Operations

* [sendtransaction4](#sendtransaction4) - sendTransaction

## sendtransaction4

sendTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Sendtransaction4RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Sendtransaction4RequestBody();
    $request->amount = '1';
    $request->password = 'Test123';
    $request->speed = 'fast';
    $request->subtractfee = false;
    $request->to = 'bc1qzq8m9ukvvgvj7kmlejnfr2q4ndmk2e4ndtr9rn';
    $request->walletname = 'Evolo_6928232';

    $response = $sdk->transactionRequests1234->sendtransaction4($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
