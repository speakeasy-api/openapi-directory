<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayoutRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPayoutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayoutRequest();
    $request->xEbayCMarketplaceId = 'corrupti';
    $request->payoutId = 'provident';

    $requestSecurity = new GetPayoutSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->payout->getPayout($request, $requestSecurity);

    if ($response->payout !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->