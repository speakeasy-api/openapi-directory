<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDefaultViewRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDefaultViewRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDefaultViewRequest();
    $request->requestBody = new AssociateDefaultViewRequestBody();
    $request->requestBody->viewArn = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->associateDefaultView($request);

    if ($response->associateDefaultViewOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->