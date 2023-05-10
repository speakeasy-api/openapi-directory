# bankAccountValidation

### Available Operations

* [postValidateBankAccountIdentification](#postvalidatebankaccountidentification) - Validate a bank account

## postValidateBankAccountIdentification

Validates bank account identification details. You can use this endpoint to validate bank account details before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) or [create a transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountIdentificationValidationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostValidateBankAccountIdentificationSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BankAccountIdentificationValidationRequest();
    $request->accountIdentification = new SELocalAccountIdentification();
    $request->accountIdentification->accountNumber = 'ipsam';
    $request->accountIdentification->clearingNumber = 'voluptate';
    $request->accountIdentification->type = SELocalAccountIdentificationTypeEnum::SE_LOCAL;

    $requestSecurity = new PostValidateBankAccountIdentificationSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->bankAccountValidation->postValidateBankAccountIdentification($request, $requestSecurity);

    if ($response->void !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
