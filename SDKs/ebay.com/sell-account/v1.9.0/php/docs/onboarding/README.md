# onboarding

### Available Operations

* [getPaymentsProgramOnboarding](#getpaymentsprogramonboarding) - <span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method retrieves a seller's onboarding status for a payments program for a specified marketplace. The overall onboarding status of the seller and the status of each onboarding step is returned.

## getPaymentsProgramOnboarding

<span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method retrieves a seller's onboarding status for a payments program for a specified marketplace. The overall onboarding status of the seller and the status of each onboarding step is returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsProgramOnboardingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsProgramOnboardingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentsProgramOnboardingRequest();
    $request->marketplaceId = 'cum';
    $request->paymentsProgramType = 'esse';

    $requestSecurity = new GetPaymentsProgramOnboardingSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->onboarding->getPaymentsProgramOnboarding($request, $requestSecurity);

    if ($response->paymentsProgramOnboardingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
