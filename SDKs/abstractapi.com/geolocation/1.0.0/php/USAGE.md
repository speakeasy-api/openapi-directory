<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1Request();
    $request->apiKey = 'corrupti';
    $request->fields = 'country,city,timezone';
    $request->ipAddress = '195.154.25.40';

    $response = $sdk->getV1($request);

    if ($response->inlineResponse200 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->