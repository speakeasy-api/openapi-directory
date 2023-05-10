<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptEnvironmentAccountConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptEnvironmentAccountConnectionInput;
use \OpenAPI\OpenAPI\Models\Operations\AcceptEnvironmentAccountConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptEnvironmentAccountConnectionRequest();
    $request->acceptEnvironmentAccountConnectionInput = new AcceptEnvironmentAccountConnectionInput();
    $request->acceptEnvironmentAccountConnectionInput->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = AcceptEnvironmentAccountConnectionXAmzTargetEnum::AWS_PROTON20200720_ACCEPT_ENVIRONMENT_ACCOUNT_CONNECTION;

    $response = $sdk->acceptEnvironmentAccountConnection($request);

    if ($response->acceptEnvironmentAccountConnectionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->