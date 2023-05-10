<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindEligibleItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindEligibleItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindEligibleItemsRequest();
    $request->xEbayCMarketplaceId = 'corrupti';
    $request->limit = 'provident';
    $request->offset = 'distinctio';

    $requestSecurity = new FindEligibleItemsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->offer->findEligibleItems($request, $requestSecurity);

    if ($response->pagedEligibleItemCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->