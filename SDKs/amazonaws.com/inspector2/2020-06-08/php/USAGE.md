<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMemberRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateMemberRequest();
    $request->requestBody = new AssociateMemberRequestBody();
    $request->requestBody->accountId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->associateMember($request);

    if ($response->associateMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->