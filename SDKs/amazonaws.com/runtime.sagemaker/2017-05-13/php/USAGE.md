<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvokeEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\InvokeEndpointRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvokeEndpointRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';
    $request->endpointName = 'distinctio';
    $request->requestBody = new InvokeEndpointRequestBody();
    $request->requestBody->body = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmznSageMakerCustomAttributes = 'suscipit';
    $request->xAmznSageMakerEnableExplanations = 'iure';
    $request->xAmznSageMakerInferenceId = 'magnam';
    $request->xAmznSageMakerTargetContainerHostname = 'debitis';
    $request->xAmznSageMakerTargetModel = 'ipsa';
    $request->xAmznSageMakerTargetVariant = 'delectus';

    $response = $sdk->invokeEndpoint($request);

    if ($response->invokeEndpointOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->