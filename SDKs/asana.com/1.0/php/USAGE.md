<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAttachmentForObjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentRequestFile;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentRequestResourceSubtypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAttachmentForObjectRequest();
    $request->attachmentRequest = new AttachmentRequest();
    $request->attachmentRequest->connectToApp = false;
    $request->attachmentRequest->file = new AttachmentRequestFile();
    $request->attachmentRequest->file->content = 'corrupti';
    $request->attachmentRequest->file->file = 'provident';
    $request->attachmentRequest->name = 'Ellis Mitchell';
    $request->attachmentRequest->parent = 'illum';
    $request->attachmentRequest->resourceSubtype = AttachmentRequestResourceSubtypeEnum::EXTERNAL;
    $request->attachmentRequest->url = 'vel';
    $request->optFields = [
        'deserunt',
        'suscipit',
        'iure',
    ];
    $request->optPretty = false;

    $response = $sdk->attachments->createAttachmentForObject($request);

    if ($response->createAttachmentForObject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->