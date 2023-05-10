<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankAccountInput();
    $request->accountNumber = 'corrupti';
    $request->accountNumberIban = 'provident';
    $request->currency = CurrencyEnum::PLN;
    $request->name = 'Stuart Stiedemann';
    $request->needQr = false;
    $request->swift = 'vel';

    $response = $sdk->bankAccount->createBankAccount($request);

    if ($response->bankAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->