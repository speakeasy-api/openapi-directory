<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CustomersAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\EcommerceCustomersFilter;
use \OpenAPI\OpenAPI\Models\Operations\CustomersAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersAllRequest();
    $request->cursor = 'corrupti';
    $request->fields = 'provident';
    $request->filter = new EcommerceCustomersFilter();
    $request->filter->email = 'elon@musk.com';
    $request->filter->phoneNumber = '111-111-1111';
    $request->limit = 715190;
    $request->raw = false;
    $request->xApideckAppId = 'quibusdam';
    $request->xApideckConsumerId = 'unde';
    $request->xApideckServiceId = 'nulla';

    $requestSecurity = new CustomersAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersAll($request, $requestSecurity);

    if ($response->getEcommerceCustomersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->