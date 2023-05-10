# device

### Available Operations

* [detectDevice](#detectdevice) - Detect iot device by service banners and mac address

## detectDevice

Use device service banners and mac address captured by your network port scanner, vulnerability assessment or asset discovery tools to detect device maker, model and firmware information

### Example Usage

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
    $request->ftpBanner = 'suscipit';
    $request->hostname = 'innocent-effect.org';
    $request->httpResponse = 'ipsa';
    $request->httpsResponse = 'delectus';
    $request->nicMac = 'tempora';
    $request->snmpSysdescr = 'suscipit';
    $request->snmpSysoid = 'molestiae';
    $request->telnetBanner = 'minus';
    $request->upnpResponse = 'placeat';

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
