<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchEvaluateFeatureRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchEvaluateFeatureRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\EvaluationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchEvaluateFeatureRequest();
    $request->requestBody = new BatchEvaluateFeatureRequestBody();
    $request->requestBody->requests = [
        new EvaluationRequest(),
        new EvaluationRequest(),
        new EvaluationRequest(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->project = 'vel';

    $response = $sdk->batchEvaluateFeature($request);

    if ($response->batchEvaluateFeatureResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->