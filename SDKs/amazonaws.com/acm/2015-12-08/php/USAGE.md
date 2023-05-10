<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsToCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsToCertificateRequest();
    $request->addTagsToCertificateRequest = new AddTagsToCertificateRequest();
    $request->addTagsToCertificateRequest->certificateArn = 'corrupti';
    $request->addTagsToCertificateRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AddTagsToCertificateXAmzTargetEnum::CERTIFICATE_MANAGER_ADD_TAGS_TO_CERTIFICATE;

    $response = $sdk->addTagsToCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->