<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptHandshakeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptHandshakeRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptHandshakeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptHandshakeRequest();
    $request->acceptHandshakeRequest = new AcceptHandshakeRequest();
    $request->acceptHandshakeRequest->handshakeId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = AcceptHandshakeXAmzTargetEnum::AWS_ORGANIZATIONS_V20161128_ACCEPT_HANDSHAKE;

    $response = $sdk->acceptHandshake($request);

    if ($response->acceptHandshakeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->