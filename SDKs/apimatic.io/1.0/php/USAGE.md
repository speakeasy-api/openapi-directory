<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConvertAPIRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConvertAPIRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ConvertAPIFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConvertAPIRequest();
    $request->requestBody = new ConvertAPIRequestBody();
    $request->requestBody->url = 'corrupti';
    $request->format = ConvertAPIFormatEnum::WADL2009;

    $response = $sdk->convertAPI($request);

    if ($response->convertAPI200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->