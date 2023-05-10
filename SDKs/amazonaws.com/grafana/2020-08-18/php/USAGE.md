<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateLicenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateLicenseLicenseTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateLicenseRequest();
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'unde';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->licenseType = AssociateLicenseLicenseTypeEnum::ENTERPRISE_FREE_TRIAL;
    $request->workspaceId = 'vel';

    $response = $sdk->associateLicense($request);

    if ($response->associateLicenseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->