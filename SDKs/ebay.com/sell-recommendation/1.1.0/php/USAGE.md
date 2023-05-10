<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindListingRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FindListingRecommendationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindListingRecommendationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindListingRecommendationsRequest();
    $request->findListingRecommendationRequest = new FindListingRecommendationRequest();
    $request->findListingRecommendationRequest->listingIds = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->xEbayCMarketplaceId = 'unde';
    $request->filter = 'nulla';
    $request->limit = 'corrupti';
    $request->offset = 'illum';

    $requestSecurity = new FindListingRecommendationsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->listingRecommendation->findListingRecommendations($request, $requestSecurity);

    if ($response->pagedListingRecommendationCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->