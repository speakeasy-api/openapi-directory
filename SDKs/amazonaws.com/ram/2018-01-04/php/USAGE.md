<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptResourceShareInvitationRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptResourceShareInvitationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptResourceShareInvitationRequest();
    $request->requestBody = new AcceptResourceShareInvitationRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->resourceShareInvitationArn = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->acceptResourceShareInvitation($request);

    if ($response->acceptResourceShareInvitationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->