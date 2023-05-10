<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddAttachmentsToSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddAttachmentsToSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\Attachment;
use \OpenAPI\OpenAPI\Models\Operations\AddAttachmentsToSetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddAttachmentsToSetRequest();
    $request->addAttachmentsToSetRequest = new AddAttachmentsToSetRequest();
    $request->addAttachmentsToSetRequest->attachmentSetId = 'corrupti';
    $request->addAttachmentsToSetRequest->attachments = [
        new Attachment(),
        new Attachment(),
        new Attachment(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AddAttachmentsToSetXAmzTargetEnum::AWS_SUPPORT20130415_ADD_ATTACHMENTS_TO_SET;

    $response = $sdk->addAttachmentsToSet($request);

    if ($response->addAttachmentsToSetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->