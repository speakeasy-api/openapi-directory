<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BalanceTransferRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\BalanceTransferRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostBalanceTransferSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BalanceTransferRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'corrupti';
    $request->amount->value = 592845;
    $request->description = 'distinctio';
    $request->fromMerchant = 'quibusdam';
    $request->reference = 'unde';
    $request->toMerchant = 'nulla';
    $request->type = BalanceTransferRequestTypeEnum::CREDIT;

    $requestSecurity = new PostBalanceTransferSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postBalanceTransfer($request, $requestSecurity);

    if ($response->balanceTransferResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->