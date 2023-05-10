<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsToResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeForTaggingEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsToResourceRequest();
    $request->addTagsToResourceRequest = new AddTagsToResourceRequest();
    $request->addTagsToResourceRequest->resourceId = 'corrupti';
    $request->addTagsToResourceRequest->resourceType = ResourceTypeForTaggingEnum::OPS_ITEM;
    $request->addTagsToResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AddTagsToResourceXAmzTargetEnum::AMAZON_SSM_ADD_TAGS_TO_RESOURCE;

    $response = $sdk->addTagsToResource($request);

    if ($response->addTagsToResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->