<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionSettingsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConnectionSettingsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionSettingsAllRequest();
    $request->resource = 'corrupti';
    $request->serviceId = 'provident';
    $request->unifiedApi = 'distinctio';
    $request->xApideckAppId = 'quibusdam';
    $request->xApideckConsumerId = 'unde';

    $requestSecurity = new ConnectionSettingsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->connections->connectionSettingsAll($request, $requestSecurity);

    if ($response->getConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->