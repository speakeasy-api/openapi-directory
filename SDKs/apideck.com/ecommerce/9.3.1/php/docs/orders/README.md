# orders

### Available Operations

* [ordersAll](#ordersall) - List Orders
* [ordersOne](#ordersone) - Get Order

## ordersAll

List Orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrdersAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\EcommerceOrdersFilter;
use \OpenAPI\OpenAPI\Models\Operations\OrdersAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrdersAllRequest();
    $request->cursor = 'dolorum';
    $request->fields = 'dicta';
    $request->filter = new EcommerceOrdersFilter();
    $request->filter->email = 'elon@musk.com';
    $request->limit = 720633;
    $request->raw = false;
    $request->xApideckAppId = 'officia';
    $request->xApideckConsumerId = 'occaecati';
    $request->xApideckServiceId = 'fugit';

    $requestSecurity = new OrdersAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orders->ordersAll($request, $requestSecurity);

    if ($response->getEcommerceOrdersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ordersOne

Get Order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrdersOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrdersOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrdersOneRequest();
    $request->fields = 'deleniti';
    $request->id = 'fc816742-cb73-4920-9929-396fea7596eb';
    $request->raw = false;
    $request->xApideckAppId = 'architecto';
    $request->xApideckConsumerId = 'ipsa';
    $request->xApideckServiceId = 'reiciendis';

    $requestSecurity = new OrdersOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orders->ordersOne($request, $requestSecurity);

    if ($response->getEcommerceOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
