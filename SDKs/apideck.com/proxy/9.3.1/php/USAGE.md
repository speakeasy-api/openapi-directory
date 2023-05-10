<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProxyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProxySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProxyRequest();
    $request->xApideckAppId = 'corrupti';
    $request->xApideckConsumerId = 'provident';
    $request->xApideckDownstreamAuthorization = 'distinctio';
    $request->xApideckDownstreamUrl = 'quibusdam';
    $request->xApideckServiceId = 'unde';

    $requestSecurity = new DeleteProxySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->execute->deleteProxy($request, $requestSecurity);

    if ($response->deleteProxy200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->