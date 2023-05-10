<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddCustomRoutingEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddCustomRoutingEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomRoutingEndpointConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\AddCustomRoutingEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddCustomRoutingEndpointsRequest();
    $request->addCustomRoutingEndpointsRequest = new AddCustomRoutingEndpointsRequest();
    $request->addCustomRoutingEndpointsRequest->endpointConfigurations = [
        new CustomRoutingEndpointConfiguration(),
        new CustomRoutingEndpointConfiguration(),
        new CustomRoutingEndpointConfiguration(),
    ];
    $request->addCustomRoutingEndpointsRequest->endpointGroupArn = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AddCustomRoutingEndpointsXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_ADD_CUSTOM_ROUTING_ENDPOINTS;

    $response = $sdk->addCustomRoutingEndpoints($request);

    if ($response->addCustomRoutingEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->