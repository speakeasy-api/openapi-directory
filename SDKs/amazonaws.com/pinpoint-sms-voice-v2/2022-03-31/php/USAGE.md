<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateOriginationIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateOriginationIdentityRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateOriginationIdentityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateOriginationIdentityRequest();
    $request->associateOriginationIdentityRequest = new AssociateOriginationIdentityRequest();
    $request->associateOriginationIdentityRequest->clientToken = 'corrupti';
    $request->associateOriginationIdentityRequest->isoCountryCode = 'provident';
    $request->associateOriginationIdentityRequest->originationIdentity = 'distinctio';
    $request->associateOriginationIdentityRequest->poolId = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = AssociateOriginationIdentityXAmzTargetEnum::PINPOINT_SMS_VOICE_V2_ASSOCIATE_ORIGINATION_IDENTITY;

    $response = $sdk->associateOriginationIdentity($request);

    if ($response->associateOriginationIdentityResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->