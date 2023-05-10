<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetListingViolationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetListingViolationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListingViolationsRequest();
    $request->xEbayCMarketplaceId = 'corrupti';
    $request->complianceType = 'provident';
    $request->filter = 'distinctio';
    $request->limit = 'quibusdam';
    $request->listingId = 'unde';
    $request->offset = 'nulla';

    $requestSecurity = new GetListingViolationsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->listingViolation->getListingViolations($request, $requestSecurity);

    if ($response->pagedComplianceViolationCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->