<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetProductRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProductSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductRequest();
    $request->xEbayCMarketplaceId = 'corrupti';
    $request->epid = 'provident';

    $requestSecurity = new GetProductSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->product->getProduct($request, $requestSecurity);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->