<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCompanyConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompanyConfigurationRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';

    $response = $sdk->configuration->getCompanyConfiguration($request);

    if ($response->companyConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->