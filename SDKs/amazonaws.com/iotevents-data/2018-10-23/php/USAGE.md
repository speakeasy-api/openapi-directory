<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchAcknowledgeAlarmRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchAcknowledgeAlarmRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AcknowledgeAlarmActionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchAcknowledgeAlarmRequest();
    $request->requestBody = new BatchAcknowledgeAlarmRequestBody();
    $request->requestBody->acknowledgeActionRequests = [
        new AcknowledgeAlarmActionRequest(),
        new AcknowledgeAlarmActionRequest(),
        new AcknowledgeAlarmActionRequest(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->batchAcknowledgeAlarm($request);

    if ($response->batchAcknowledgeAlarmResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->