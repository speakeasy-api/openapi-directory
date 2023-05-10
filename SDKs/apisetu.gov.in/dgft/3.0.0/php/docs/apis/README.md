# apIs

### Available Operations

* [importerExporterCodeVerificationAPI](#importerexportercodeverificationapi) - Importer-Exporter Code (IEC) Verification API.

## importerExporterCodeVerificationAPI

Description of Importer-Exporter Code (IEC) Verification API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImporterExporterCodeVerificationAPIRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImporterExporterCodeVerificationAPISecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImporterExporterCodeVerificationAPIRequest();
    $request->iec = 'provident';

    $requestSecurity = new ImporterExporterCodeVerificationAPISecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->apIs->importerExporterCodeVerificationAPI($request, $requestSecurity);

    if ($response->importerExporterCodeVerificationAPI200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
