<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AbortMultipartUploadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AbortMultipartUploadRequest();
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->accountId = 'illum';
    $request->uploadId = 'vel';
    $request->vaultName = 'error';

    $response = $sdk->abortMultipartUpload($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->