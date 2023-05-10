<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAssessmentReportEvidenceFolderRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateAssessmentReportEvidenceFolderRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateAssessmentReportEvidenceFolderRequest();
    $request->requestBody = new AssociateAssessmentReportEvidenceFolderRequestBody();
    $request->requestBody->evidenceFolderId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->assessmentId = 'vel';

    $response = $sdk->associateAssessmentReportEvidenceFolder($request);

    if ($response->associateAssessmentReportEvidenceFolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->