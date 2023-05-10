<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsRequest();
    $request->addTagsRequest = new AddTagsRequest();
    $request->addTagsRequest->resourceId = 'corrupti';
    $request->addTagsRequest->tagsList = [
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
    $request->xAmzTarget = AddTagsXAmzTargetEnum::COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL20131101_ADD_TAGS;

    $response = $sdk->addTags($request);

    if ($response->addTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->