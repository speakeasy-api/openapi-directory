<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCharityOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCharityOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCharityOrgRequest();
    $request->xEbayCMarketplaceId = 'corrupti';
    $request->charityOrgId = 'provident';

    $requestSecurity = new GetCharityOrgSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->charityOrg->getCharityOrg($request, $requestSecurity);

    if ($response->charityOrg !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->