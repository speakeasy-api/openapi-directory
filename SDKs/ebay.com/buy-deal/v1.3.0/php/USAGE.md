<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDealItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDealItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDealItemsRequest();
    $request->xEbayCMarketplaceId = 'corrupti';
    $request->categoryIds = 'provident';
    $request->commissionable = 'distinctio';
    $request->deliveryCountry = 'quibusdam';
    $request->limit = 'unde';
    $request->offset = 'nulla';

    $requestSecurity = new GetDealItemsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->dealItem->getDealItems($request, $requestSecurity);

    if ($response->dealItemSearchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->