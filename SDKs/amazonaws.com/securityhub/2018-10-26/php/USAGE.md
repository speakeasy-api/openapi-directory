<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptAdministratorInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptAdministratorInvitationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptAdministratorInvitationRequest();
    $request->requestBody = new AcceptAdministratorInvitationRequestBody();
    $request->requestBody->administratorId = 'corrupti';
    $request->requestBody->invitationId = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->acceptAdministratorInvitation($request);

    if ($response->acceptAdministratorInvitationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->