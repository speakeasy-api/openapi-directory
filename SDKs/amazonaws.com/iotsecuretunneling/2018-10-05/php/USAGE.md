<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CloseTunnelRequest;
use \OpenAPI\OpenAPI\Models\Shared\CloseTunnelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CloseTunnelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloseTunnelRequest();
    $request->closeTunnelRequest = new CloseTunnelRequest();
    $request->closeTunnelRequest->delete = false;
    $request->closeTunnelRequest->tunnelId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = CloseTunnelXAmzTargetEnum::IO_T_SECURED_TUNNELING_CLOSE_TUNNEL;

    $response = $sdk->closeTunnel($request);

    if ($response->closeTunnelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->