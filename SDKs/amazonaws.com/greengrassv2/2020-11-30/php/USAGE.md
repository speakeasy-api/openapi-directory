<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateServiceRoleToAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateServiceRoleToAccountRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateServiceRoleToAccountRequest();
    $request->requestBody = new AssociateServiceRoleToAccountRequestBody();
    $request->requestBody->roleArn = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->associateServiceRoleToAccount($request);

    if ($response->associateServiceRoleToAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->