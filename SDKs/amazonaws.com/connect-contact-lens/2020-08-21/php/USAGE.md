<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRealtimeContactAnalysisSegmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRealtimeContactAnalysisSegmentsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRealtimeContactAnalysisSegmentsRequest();
    $request->maxResults = 'corrupti';
    $request->nextToken = 'provident';
    $request->requestBody = new ListRealtimeContactAnalysisSegmentsRequestBody();
    $request->requestBody->contactId = 'distinctio';
    $request->requestBody->instanceId = 'quibusdam';
    $request->requestBody->maxResults = 602763;
    $request->requestBody->nextToken = 'nulla';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->listRealtimeContactAnalysisSegments($request);

    if ($response->listRealtimeContactAnalysisSegmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->