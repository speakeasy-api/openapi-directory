<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelImageCreationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelImageCreationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelImageCreationRequest();
    $request->requestBody = new CancelImageCreationRequestBody();
    $request->requestBody->clientToken = 'corrupti';
    $request->requestBody->imageBuildVersionArn = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->cancelImageCreation($request);

    if ($response->cancelImageCreationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->