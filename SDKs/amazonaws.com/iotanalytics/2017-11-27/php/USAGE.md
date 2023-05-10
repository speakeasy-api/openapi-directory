<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchPutMessageRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Message;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchPutMessageRequest();
    $request->requestBody = new BatchPutMessageRequestBody();
    $request->requestBody->channelName = 'corrupti';
    $request->requestBody->messages = [
        new Message(),
        new Message(),
        new Message(),
    ];
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->batchPutMessage($request);

    if ($response->batchPutMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->