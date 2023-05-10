<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptQualificationRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptQualificationRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptQualificationRequestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptQualificationRequestRequest();
    $request->acceptQualificationRequestRequest = new AcceptQualificationRequestRequest();
    $request->acceptQualificationRequestRequest->integerValue = 548814;
    $request->acceptQualificationRequestRequest->qualificationRequestId = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AcceptQualificationRequestXAmzTargetEnum::M_TURK_REQUESTER_SERVICE_V20170117_ACCEPT_QUALIFICATION_REQUEST;

    $response = $sdk->acceptQualificationRequest($request);

    if ($response->acceptQualificationRequestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->