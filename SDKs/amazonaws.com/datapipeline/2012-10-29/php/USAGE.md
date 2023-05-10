<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivatePipelineRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActivatePipelineInput;
use \OpenAPI\OpenAPI\Models\Shared\ParameterValue;
use \OpenAPI\OpenAPI\Models\Operations\ActivatePipelineXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivatePipelineRequest();
    $request->activatePipelineInput = new ActivatePipelineInput();
    $request->activatePipelineInput->parameterValues = [
        new ParameterValue(),
        new ParameterValue(),
        new ParameterValue(),
    ];
    $request->activatePipelineInput->pipelineId = 'provident';
    $request->activatePipelineInput->startTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-24T16:27:50.833Z');
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = ActivatePipelineXAmzTargetEnum::DATA_PIPELINE_ACTIVATE_PIPELINE;

    $response = $sdk->activatePipeline($request);

    if ($response->activatePipelineOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->