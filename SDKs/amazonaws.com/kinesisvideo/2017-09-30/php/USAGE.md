<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSignalingChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSignalingChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSignalingChannelRequestBodyChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSignalingChannelRequestBodySingleMasterConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSignalingChannelRequest();
    $request->requestBody = new CreateSignalingChannelRequestBody();
    $request->requestBody->channelName = 'corrupti';
    $request->requestBody->channelType = CreateSignalingChannelRequestBodyChannelTypeEnum::FULL_MESH;
    $request->requestBody->singleMasterConfiguration = new CreateSignalingChannelRequestBodySingleMasterConfiguration();
    $request->requestBody->singleMasterConfiguration->messageTtlSeconds = 715190;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->createSignalingChannel($request);

    if ($response->createSignalingChannelOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->