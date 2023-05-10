<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelJobRequest();
    $request->requestBody = new CancelJobRequestBody();
    $request->requestBody->jobId = 'corrupti';
    $request->requestBody->reason = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->cancelJob($request);

    if ($response->cancelJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->