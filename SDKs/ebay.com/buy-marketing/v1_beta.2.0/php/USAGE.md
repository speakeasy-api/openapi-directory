<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchandisedProductsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchandisedProductsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchandisedProductsRequest();
    $request->aspectFilter = 'corrupti';
    $request->categoryId = 'provident';
    $request->limit = 'distinctio';
    $request->metricName = 'quibusdam';

    $requestSecurity = new GetMerchandisedProductsSecurity();
    $requestSecurity->clientCredentials = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->merchandisedProduct->getMerchandisedProducts($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->