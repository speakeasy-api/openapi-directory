<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAdvertisingEligibilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAdvertisingEligibilitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdvertisingEligibilityRequest();
    $request->xEbayCMarketplaceId = 'corrupti';
    $request->programTypes = 'provident';

    $requestSecurity = new GetAdvertisingEligibilitySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisingEligibility->getAdvertisingEligibility($request, $requestSecurity);

    if ($response->sellerEligibilityMultiProgramResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->