<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateServiceQuotaTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateServiceQuotaTemplateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateServiceQuotaTemplateRequest();
    $request->requestBody = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = AssociateServiceQuotaTemplateXAmzTargetEnum::SERVICE_QUOTAS_V20190624_ASSOCIATE_SERVICE_QUOTA_TEMPLATE;

    $response = $sdk->associateServiceQuotaTemplate($request);

    if ($response->associateServiceQuotaTemplateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->