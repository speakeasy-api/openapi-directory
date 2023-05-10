<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApiResourceCoverageOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApiResourceCoverageOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiResourceCoverageOneRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';
    $request->resourceId = 'deserunt';
    $request->xApideckAppId = 'perferendis';

    $requestSecurity = new ApiResourceCoverageOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiResources->apiResourceCoverageOne($request, $requestSecurity);

    if ($response->getApiResourceCoverageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->