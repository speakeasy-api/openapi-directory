<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyAlternativeSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyAlternativeSearchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CompanyAlternativeSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyAlternativeSearchRequest();
    $request->requestBody = new CompanyAlternativeSearchRequestBody();
    $request->requestBody->address = '5786 Little Streets';
    $request->requestBody->name = 'Sabrina Oberbrunner';
    $request->requestBody->number = 'magnam';
    $request->requestBody->phone = '1-292-547-8545 x39803';
    $request->requestBody->url = 'veritatis';
    $request->requestBody->vat = 'deserunt';
    $request->country = 'perferendis';

    $requestSecurity = new CompanyAlternativeSearchSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyAlternativeSearch($request, $requestSecurity);

    if ($response->companyAlternativeSearch200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->