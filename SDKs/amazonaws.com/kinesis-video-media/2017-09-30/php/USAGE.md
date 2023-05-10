<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetMediaRequestBodyStartSelector;
use \OpenAPI\OpenAPI\Models\Shared\StartSelectorTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMediaRequest();
    $request->requestBody = new GetMediaRequestBody();
    $request->requestBody->startSelector = new GetMediaRequestBodyStartSelector();
    $request->requestBody->startSelector->afterFragmentNumber = 'corrupti';
    $request->requestBody->startSelector->continuationToken = 'provident';
    $request->requestBody->startSelector->startSelectorType = StartSelectorTypeEnum::EARLIEST;
    $request->requestBody->startSelector->startTimestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-11T23:22:42.658Z');
    $request->requestBody->streamARN = 'nulla';
    $request->requestBody->streamName = 'corrupti';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->getMedia($request);

    if ($response->getMediaOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->