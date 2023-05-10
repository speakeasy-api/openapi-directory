<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallAnalyticsCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCallAnalyticsCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\InputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\InterruptionFilter;
use \OpenAPI\OpenAPI\Models\Shared\AbsoluteTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\ParticipantRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\RelativeTimeRange;
use \OpenAPI\OpenAPI\Models\Shared\NonTalkTimeFilter;
use \OpenAPI\OpenAPI\Models\Shared\SentimentFilter;
use \OpenAPI\OpenAPI\Models\Shared\SentimentValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\TranscriptFilter;
use \OpenAPI\OpenAPI\Models\Shared\TranscriptFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallAnalyticsCategoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCallAnalyticsCategoryRequest();
    $request->createCallAnalyticsCategoryRequest = new CreateCallAnalyticsCategoryRequest();
    $request->createCallAnalyticsCategoryRequest->categoryName = 'corrupti';
    $request->createCallAnalyticsCategoryRequest->inputType = InputTypeEnum::POST_CALL;
    $request->createCallAnalyticsCategoryRequest->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = CreateCallAnalyticsCategoryXAmzTargetEnum::TRANSCRIBE_CREATE_CALL_ANALYTICS_CATEGORY;

    $response = $sdk->createCallAnalyticsCategory($request);

    if ($response->createCallAnalyticsCategoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->