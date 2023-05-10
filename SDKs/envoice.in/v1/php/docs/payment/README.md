# payment

### Available Operations

* [paymentApiSupported](#paymentapisupported) - Return all supported payment gateways (no currencies means all are supported)

## paymentApiSupported

Return all supported payment gateways (no currencies means all are supported)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentApiSupportedRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentApiSupportedRequest();
    $request->xAuthKey = 'quod';
    $request->xAuthSecret = 'nam';

    $response = $sdk->payment->paymentApiSupported($request);

    if ($response->paymentGatewayDetailsApiModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
