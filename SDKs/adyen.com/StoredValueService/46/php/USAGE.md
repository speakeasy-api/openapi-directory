<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueStatusChangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueStatusChangeRequestShopperInteractionEnum;
use \OpenAPI\OpenAPI\Models\Shared\StoredValueStatusChangeRequestStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostChangeStatusSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoredValueStatusChangeRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'corrupti';
    $request->amount->value = 592845;
    $request->merchantAccount = 'distinctio';
    $request->paymentMethod = [
        'unde' => 'nulla',
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
    ];
    $request->recurringDetailReference = 'iure';
    $request->reference = 'magnam';
    $request->shopperInteraction = StoredValueStatusChangeRequestShopperInteractionEnum::POS;
    $request->shopperReference = 'ipsa';
    $request->status = StoredValueStatusChangeRequestStatusEnum::INACTIVE;
    $request->store = 'tempora';

    $requestSecurity = new PostChangeStatusSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postChangeStatus($request, $requestSecurity);

    if ($response->storedValueStatusChangeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->