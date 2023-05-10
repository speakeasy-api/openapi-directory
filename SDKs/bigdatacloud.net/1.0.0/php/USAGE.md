<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IpGeolocationWithConfidenceAreaAndHazardReportApiRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IpGeolocationWithConfidenceAreaAndHazardReportApiRequest();
    $request->ip = '193.114.112.122';
    $request->key = '{{API KEY}}';
    $request->localityLanguage = 'en';

    $response = $sdk->ipGeolocationWithConfidenceAreaAndHazardReportApi($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->