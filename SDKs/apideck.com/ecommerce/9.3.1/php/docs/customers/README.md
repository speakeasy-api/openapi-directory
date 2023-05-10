# customers

### Available Operations

* [customersAll](#customersall) - List Customers
* [customersOne](#customersone) - Get Customer

## customersAll

List Customers

### Example Usage

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
    $request->fields = 'illum';
    $request->filter = new EcommerceCustomersFilter();
    $request->filter->email = 'elon@musk.com';
    $request->filter->phoneNumber = '111-111-1111';
    $request->limit = 423655;
    $request->raw = false;
    $request->xApideckAppId = 'error';
    $request->xApideckConsumerId = 'deserunt';
    $request->xApideckServiceId = 'suscipit';

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

## customersOne

Get Customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CustomersOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomersOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersOneRequest();
    $request->fields = 'iure';
    $request->id = '4e0f467c-c879-46ed-951a-05dfc2ddf7cc';
    $request->raw = false;
    $request->xApideckAppId = 'esse';
    $request->xApideckConsumerId = 'totam';
    $request->xApideckServiceId = 'porro';

    $requestSecurity = new CustomersOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersOne($request, $requestSecurity);

    if ($response->getEcommerceCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
