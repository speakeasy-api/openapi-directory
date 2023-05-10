<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptGrantRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptGrantRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptGrantXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptGrantRequest();
    $request->acceptGrantRequest = new AcceptGrantRequest();
    $request->acceptGrantRequest->grantArn = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = AcceptGrantXAmzTargetEnum::AWS_LICENSE_MANAGER_ACCEPT_GRANT;

    $response = $sdk->acceptGrant($request);

    if ($response->acceptGrantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->