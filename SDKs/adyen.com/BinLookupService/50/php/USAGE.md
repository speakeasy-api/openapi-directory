<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ThreeDSAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostGet3dsAvailabilitySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ThreeDSAvailabilityRequest();
    $request->additionalData = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->brands = [
        'vel',
        'error',
        'deserunt',
        'suscipit',
    ];
    $request->cardNumber = 'iure';
    $request->merchantAccount = 'magnam';
    $request->recurringDetailReference = 'debitis';
    $request->shopperReference = 'ipsa';

    $requestSecurity = new PostGet3dsAvailabilitySecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postGet3dsAvailability($request, $requestSecurity);

    if ($response->threeDSAvailabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->