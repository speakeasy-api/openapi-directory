<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetTracesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetTracesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetTracesRequest();
    $request->nextToken = 'corrupti';
    $request->requestBody = new BatchGetTracesRequestBody();
    $request->requestBody->nextToken = 'provident';
    $request->requestBody->traceIds = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->batchGetTraces($request);

    if ($response->batchGetTracesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->