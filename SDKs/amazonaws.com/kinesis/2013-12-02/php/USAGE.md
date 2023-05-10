<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsToStreamInput;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsToStreamRequest();
    $request->addTagsToStreamInput = new AddTagsToStreamInput();
    $request->addTagsToStreamInput->streamARN = 'corrupti';
    $request->addTagsToStreamInput->streamName = 'provident';
    $request->addTagsToStreamInput->tags = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = AddTagsToStreamXAmzTargetEnum::KINESIS20131202_ADD_TAGS_TO_STREAM;

    $response = $sdk->addTagsToStream($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->