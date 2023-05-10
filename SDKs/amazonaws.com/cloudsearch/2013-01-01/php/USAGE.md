<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETBuildSuggestersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETBuildSuggestersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETBuildSuggestersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETBuildSuggestersRequest();
    $request->action = GETBuildSuggestersActionEnum::BUILD_SUGGESTERS;
    $request->domainName = 'corrupti';
    $request->version = GETBuildSuggestersVersionEnum::TWO_THOUSAND_AND_THIRTEEN0101;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->getBuildSuggesters($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->