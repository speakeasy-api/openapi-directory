# advertisingEligibility

### Available Operations

* [getAdvertisingEligibility](#getadvertisingeligibility) - This method allows developers to check the seller eligibility status for eBay advertising programs.

## getAdvertisingEligibility

This method allows developers to check the seller eligibility status for eBay advertising programs.

### Example Usage

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
    $request->xEbayCMarketplaceId = 'distinctio';
    $request->programTypes = 'quibusdam';

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
