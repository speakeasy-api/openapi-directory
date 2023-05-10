<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeploymentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeploymentsRequest();
    $request->requestBody = new GetDeploymentsRequestBody();
    $request->requestBody->deviceFleetName = 'corrupti';
    $request->requestBody->deviceName = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->getDeployments($request);

    if ($response->getDeploymentsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->