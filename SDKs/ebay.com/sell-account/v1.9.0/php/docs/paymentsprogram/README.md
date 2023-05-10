# paymentsProgram

### Available Operations

* [getPaymentsProgram](#getpaymentsprogram) - <span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method returns whether or not the user is opted-in to the specified payments program. Sellers opt-in to payments programs by marketplace and you use the <b>marketplace_id</b> path parameter to specify the marketplace of the status flag you want returned.

## getPaymentsProgram

<span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method returns whether or not the user is opted-in to the specified payments program. Sellers opt-in to payments programs by marketplace and you use the <b>marketplace_id</b> path parameter to specify the marketplace of the status flag you want returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsProgramRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentsProgramSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentsProgramRequest();
    $request->marketplaceId = 'culpa';
    $request->paymentsProgramType = 'consequuntur';

    $requestSecurity = new GetPaymentsProgramSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->paymentsProgram->getPaymentsProgram($request, $requestSecurity);

    if ($response->paymentsProgramResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
