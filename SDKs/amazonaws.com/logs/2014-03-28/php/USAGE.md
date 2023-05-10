<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateKmsKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateKmsKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateKmsKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateKmsKeyRequest();
    $request->associateKmsKeyRequest = new AssociateKmsKeyRequest();
    $request->associateKmsKeyRequest->kmsKeyId = 'corrupti';
    $request->associateKmsKeyRequest->logGroupName = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AssociateKmsKeyXAmzTargetEnum::LOGS20140328_ASSOCIATE_KMS_KEY;

    $response = $sdk->associateKmsKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->