<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClipRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClipRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetClipRequestBodyClipFragmentSelector;
use \OpenAPI\OpenAPI\Models\Shared\ClipFragmentSelectorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClipTimestampRange;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClipRequest();
    $request->requestBody = new GetClipRequestBody();
    $request->requestBody->clipFragmentSelector = new GetClipRequestBodyClipFragmentSelector();
    $request->requestBody->clipFragmentSelector->fragmentSelectorType = ClipFragmentSelectorTypeEnum::SERVER_TIMESTAMP;
    $request->requestBody->clipFragmentSelector->timestampRange = new ClipTimestampRange();
    $request->requestBody->clipFragmentSelector->timestampRange->endTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-27T21:52:56.087Z');
    $request->requestBody->clipFragmentSelector->timestampRange->startTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-11T23:22:42.658Z');
    $request->requestBody->streamARN = 'nulla';
    $request->requestBody->streamName = 'corrupti';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->getClip($request);

    if ($response->getClipOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->