<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFraudsterRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateFraudsterRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFraudsterXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateFraudsterRequest();
    $request->associateFraudsterRequest = new AssociateFraudsterRequest();
    $request->associateFraudsterRequest->domainId = 'corrupti';
    $request->associateFraudsterRequest->fraudsterId = 'provident';
    $request->associateFraudsterRequest->watchlistId = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AssociateFraudsterXAmzTargetEnum::VOICE_ID_ASSOCIATE_FRAUDSTER;

    $response = $sdk->associateFraudster($request);

    if ($response->associateFraudsterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->