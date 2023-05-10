<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DeviceFeatures;
use \OpenAPI\OpenAPI\Models\Operations\DetectDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeviceFeatures();
    $request->ftpBanner = 'corrupti';
    $request->hostname = 'opulent-rabbit.org';
    $request->httpResponse = 'unde';
    $request->httpsResponse = 'nulla';
    $request->nicMac = 'corrupti';
    $request->snmpSysdescr = 'illum';
    $request->snmpSysoid = 'vel';
    $request->telnetBanner = 'error';
    $request->upnpResponse = 'deserunt';

    $requestSecurity = new DetectDeviceSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->device->detectDevice($request, $requestSecurity);

    if ($response->deviceInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->