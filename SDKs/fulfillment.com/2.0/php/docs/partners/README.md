# partners

### Available Operations

* [putOrdersIdShip](#putordersidship) - Ship an Order
* [putOrdersIdStatus](#putordersidstatus) - Update Order Status

## putOrdersIdShip

Note, this API is used to update orders and is reserved for our shipping partners.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutOrdersIdShipRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutOrdersIdShipOrderShipV2;
use \OpenAPI\OpenAPI\Models\Operations\PutOrdersIdShipSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOrdersIdShipRequest();
    $request->requestBody = new PutOrdersIdShipOrderShipV2();
    $request->requestBody->trackingNumber = 'nihil';
    $request->requestBody->weightOverride = 5096.24;
    $request->id = 976762;

    $requestSecurity = new PutOrdersIdShipSecurity();
    $requestSecurity->fdcAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->putOrdersIdShip($request, $requestSecurity);

    if ($response->oneordersPostResponses201ContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOrdersIdStatus

Note, this API is used to update orders and is reserved for our shipping partners.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutOrdersIdStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutOrdersIdStatusStatusTypeSimpleV2;
use \OpenAPI\OpenAPI\Models\Operations\PutOrdersIdStatusStatusTypeSimpleV2Status;
use \OpenAPI\OpenAPI\Models\Operations\PutOrdersIdStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOrdersIdStatusRequest();
    $request->requestBody = new PutOrdersIdStatusStatusTypeSimpleV2();
    $request->requestBody->reason = 'ipsa';
    $request->requestBody->status = new PutOrdersIdStatusStatusTypeSimpleV2Status();
    $request->requestBody->status->code = 'omnis';
    $request->id = 451159;

    $requestSecurity = new PutOrdersIdStatusSecurity();
    $requestSecurity->fdcAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->partners->putOrdersIdStatus($request, $requestSecurity);

    if ($response->oneordersPostResponses201ContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
