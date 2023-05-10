<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsAddressTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsAddressTypesRequest();
    $request->apiKey = 'corrupti';

    $response = $sdk->addressTypes->getClassificationsAddressTypes($request);

    if ($response->addressTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->