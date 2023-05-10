<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteReportDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReportDefinitionRequest();
    $request->deleteReportDefinitionRequest = new DeleteReportDefinitionRequest();
    $request->deleteReportDefinitionRequest->reportName = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DeleteReportDefinitionXAmzTargetEnum::AWS_ORIGAMI_SERVICE_GATEWAY_SERVICE_DELETE_REPORT_DEFINITION;

    $response = $sdk->deleteReportDefinition($request);

    if ($response->deleteReportDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->