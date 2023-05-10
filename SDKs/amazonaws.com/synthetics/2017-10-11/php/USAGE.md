<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateResourceRequest();
    $request->requestBody = new AssociateResourceRequestBody();
    $request->requestBody->resourceArn = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->groupIdentifier = 'vel';

    $response = $sdk->associateResource($request);

    if ($response->associateResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->