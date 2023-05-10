<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1VerificationResultRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetV1VerificationResultFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1VerificationResultRequest();
    $request->format = GetV1VerificationResultFormatEnum::XML;
    $request->key = 'provident';
    $request->otp = 'distinctio';
    $request->tranId = 'quibusdam';

    $response = $sdk->getV1VerificationResult($request);

    if ($response->getV1VerificationResult200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->