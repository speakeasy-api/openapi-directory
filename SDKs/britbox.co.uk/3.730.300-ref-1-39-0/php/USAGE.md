<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddPaymentMethodRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddPaymentMethodRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddPaymentMethodRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\AddPaymentMethodSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddPaymentMethodRequest();
    $request->addPaymentMethodRequest = new AddPaymentMethodRequest();
    $request->addPaymentMethodRequest->makeDefault = false;
    $request->addPaymentMethodRequest->token = 'corrupti';
    $request->addPaymentMethodRequest->type = AddPaymentMethodRequestTypeEnum::CARD;
    $request->ff = [
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::LRL,
        FeatureFlagsEnum::RPT,
    ];
    $request->lang = 'nulla';

    $requestSecurity = new AddPaymentMethodSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->account->addPaymentMethod($request, $requestSecurity);

    if ($response->paymentMethod !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->