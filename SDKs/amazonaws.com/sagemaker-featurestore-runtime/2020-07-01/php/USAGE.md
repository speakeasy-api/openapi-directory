<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetRecordRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetRecordRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetRecordIdentifier;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetRecordRequest();
    $request->requestBody = new BatchGetRecordRequestBody();
    $request->requestBody->identifiers = [
        new BatchGetRecordIdentifier(),
        new BatchGetRecordIdentifier(),
        new BatchGetRecordIdentifier(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->batchGetRecord($request);

    if ($response->batchGetRecordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->