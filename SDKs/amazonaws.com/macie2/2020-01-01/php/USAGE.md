<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptInvitationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptInvitationRequest();
    $request->requestBody = new AcceptInvitationRequestBody();
    $request->requestBody->administratorAccountId = 'corrupti';
    $request->requestBody->invitationId = 'provident';
    $request->requestBody->masterAccount = 'distinctio';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->acceptInvitation($request);

    if ($response->acceptInvitationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->