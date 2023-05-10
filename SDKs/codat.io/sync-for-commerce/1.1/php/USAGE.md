<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateCompany;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCompany();
    $request->name = 'corrupti';

    $response = $sdk->companyManagement->createCompany($request);

    if ($response->company !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->