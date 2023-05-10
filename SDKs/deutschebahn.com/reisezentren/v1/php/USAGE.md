<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReisezentrenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReisezentrenRequest();
    $request->name = 'Terrence Rau';

    $response = $sdk->getReisezentren($request);

    if ($response->travelCenterList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->