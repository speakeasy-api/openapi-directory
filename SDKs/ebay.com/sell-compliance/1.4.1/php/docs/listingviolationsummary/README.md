# listingViolationSummary

### Available Operations

* [getListingViolationsSummary](#getlistingviolationssummary) - This call returns listing violation counts for a seller. A user can pass in one or more compliance types through the compliance_type query parameter. See ComplianceTypeEnum for more information on the supported listing compliance types. Listing violations are returned for multiple marketplaces if the seller sells on multiple eBay marketplaces. Note: Only a canned response, with counts for all listing compliance types, is returned in the Sandbox environment. Due to this limitation, the compliance_type query parameter (if used) will not have an effect on the response.

## getListingViolationsSummary

This call returns listing violation counts for a seller. A user can pass in one or more compliance types through the compliance_type query parameter. See ComplianceTypeEnum for more information on the supported listing compliance types. Listing violations are returned for multiple marketplaces if the seller sells on multiple eBay marketplaces. Note: Only a canned response, with counts for all listing compliance types, is returned in the Sandbox environment. Due to this limitation, the compliance_type query parameter (if used) will not have an effect on the response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetListingViolationsSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetListingViolationsSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListingViolationsSummaryRequest();
    $request->xEbayCMarketplaceId = 'debitis';
    $request->complianceType = 'ipsa';

    $requestSecurity = new GetListingViolationsSummarySecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->listingViolationSummary->getListingViolationsSummary($request, $requestSecurity);

    if ($response->complianceSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
