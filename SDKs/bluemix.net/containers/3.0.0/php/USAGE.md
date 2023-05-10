<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContainersMessagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContainersMessagesRequest();
    $request->xAuthProjectId = 'corrupti';
    $request->xAuthToken = 'provident';

    $response = $sdk->apiInfo->getContainersMessages($request);

    if ($response->getContainersMessages200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->