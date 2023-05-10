<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcknowledgeJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcknowledgeJobInput;
use \OpenAPI\OpenAPI\Models\Operations\AcknowledgeJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcknowledgeJobRequest();
    $request->acknowledgeJobInput = new AcknowledgeJobInput();
    $request->acknowledgeJobInput->jobId = 'corrupti';
    $request->acknowledgeJobInput->nonce = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AcknowledgeJobXAmzTargetEnum::CODE_PIPELINE20150709_ACKNOWLEDGE_JOB;

    $response = $sdk->acknowledgeJob($request);

    if ($response->acknowledgeJobOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->