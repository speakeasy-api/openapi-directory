<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCertificatePdfSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateRequest();
    $request->beneficiaryId = 'corrupti';
    $request->mobile = '(786) 858-4663 x4280';

    $requestSecurity = new GetCertificatePdfSecurity();
    $requestSecurity->certAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->certificate->getCertificatePdf($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->