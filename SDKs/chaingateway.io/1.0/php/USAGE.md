<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAddressRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->deleteAddressRequest = new DeleteAddressRequest();
    $request->deleteAddressRequest->ethereumaddress = 'corrupti';
    $request->deleteAddressRequest->password = 'provident';

    $response = $sdk->addressRequests->deleteAddress($request);

    if ($response->deleteAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->