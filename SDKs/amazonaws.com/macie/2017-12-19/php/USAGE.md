<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMemberAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateMemberAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMemberAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateMemberAccountRequest();
    $request->associateMemberAccountRequest = new AssociateMemberAccountRequest();
    $request->associateMemberAccountRequest->memberAccountId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = AssociateMemberAccountXAmzTargetEnum::MACIE_SERVICE_ASSOCIATE_MEMBER_ACCOUNT;

    $response = $sdk->associateMemberAccount($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->