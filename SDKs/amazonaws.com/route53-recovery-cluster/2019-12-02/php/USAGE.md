<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRoutingControlStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRoutingControlStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRoutingControlStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRoutingControlStateRequest();
    $request->getRoutingControlStateRequest = new GetRoutingControlStateRequest();
    $request->getRoutingControlStateRequest->routingControlArn = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = GetRoutingControlStateXAmzTargetEnum::TOGGLE_CUSTOMER_API_GET_ROUTING_CONTROL_STATE;

    $response = $sdk->getRoutingControlState($request);

    if ($response->getRoutingControlStateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->