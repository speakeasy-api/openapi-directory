<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteaddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteaddressRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteaddressRequest();
    $request->requestBody = new DeleteaddressRequestBody();
    $request->requestBody->ethereumaddress = '0xfa343ee01667869cfb409b24ae33f7ce8b110eb0';
    $request->requestBody->password = 'test123';
    $request->address = '0xfa343ee01667869cfb409b24ae33f7ce8b110eb0';

    $response = $sdk->addressRequests->deleteaddress($request);

    if ($response->deleteaddress200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->