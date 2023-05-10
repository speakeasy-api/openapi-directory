<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecommendationPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRecommendationPreferencesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecommendationPreferenceNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Scope;
use \OpenAPI\OpenAPI\Models\Shared\ScopeNameEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecommendationPreferencesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecommendationPreferencesRequest();
    $request->deleteRecommendationPreferencesRequest = new DeleteRecommendationPreferencesRequest();
    $request->deleteRecommendationPreferencesRequest->recommendationPreferenceNames = [
        RecommendationPreferenceNameEnum::INFERRED_WORKLOAD_TYPES,
        RecommendationPreferenceNameEnum::EXTERNAL_METRICS_PREFERENCE,
        RecommendationPreferenceNameEnum::EXTERNAL_METRICS_PREFERENCE,
    ];
    $request->deleteRecommendationPreferencesRequest->resourceType = ResourceTypeEnum::LAMBDA_FUNCTION;
    $request->deleteRecommendationPreferencesRequest->scope = new Scope();
    $request->deleteRecommendationPreferencesRequest->scope->name = ScopeNameEnum::RESOURCE_ARN;
    $request->deleteRecommendationPreferencesRequest->scope->value = 'corrupti';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = DeleteRecommendationPreferencesXAmzTargetEnum::COMPUTE_OPTIMIZER_SERVICE_DELETE_RECOMMENDATION_PREFERENCES;

    $response = $sdk->deleteRecommendationPreferences($request);

    if ($response->deleteRecommendationPreferencesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->