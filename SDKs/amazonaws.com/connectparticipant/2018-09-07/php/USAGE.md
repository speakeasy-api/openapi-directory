<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompleteAttachmentUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompleteAttachmentUploadRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompleteAttachmentUploadRequest();
    $request->requestBody = new CompleteAttachmentUploadRequestBody();
    $request->requestBody->attachmentIds = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->requestBody->clientToken = 'unde';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzBearer = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->completeAttachmentUpload($request);

    if ($response->completeAttachmentUploadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->