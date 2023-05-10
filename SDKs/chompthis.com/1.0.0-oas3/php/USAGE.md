<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFoodBrandedBarcodePhpRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFoodBrandedBarcodePhpSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFoodBrandedBarcodePhpRequest();
    $request->code = 'corrupti';

    $requestSecurity = new GetFoodBrandedBarcodePhpSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->getFoodBrandedBarcodePhp($request, $requestSecurity);

    if ($response->brandedFoodObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->