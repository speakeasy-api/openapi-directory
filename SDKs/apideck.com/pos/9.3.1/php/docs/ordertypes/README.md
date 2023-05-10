# orderTypes

### Available Operations

* [orderTypesAdd](#ordertypesadd) - Create Order Type
* [orderTypesAll](#ordertypesall) - List Order Types
* [orderTypesDelete](#ordertypesdelete) - Delete Order Type
* [orderTypesOne](#ordertypesone) - Get Order Type
* [orderTypesUpdate](#ordertypesupdate) - Update Order Type

## orderTypesAdd

Create Order Type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrderTypesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderTypeInput;
use \OpenAPI\OpenAPI\Models\Operations\OrderTypesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderTypesAddRequest();
    $request->orderTypeInput = new OrderTypeInput();
    $request->orderTypeInput->default = true;
    $request->orderTypeInput->name = 'Default order type';
    $request->raw = false;
    $request->xApideckAppId = 'corporis';
    $request->xApideckConsumerId = 'veniam';
    $request->xApideckServiceId = 'aliquid';

    $requestSecurity = new OrderTypesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orderTypes->orderTypesAdd($request, $requestSecurity);

    if ($response->createOrderTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderTypesAll

List Order Types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrderTypesAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrderTypesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderTypesAllRequest();
    $request->cursor = 'inventore';
    $request->fields = 'magnam';
    $request->limit = 407241;
    $request->raw = false;
    $request->xApideckAppId = 'quo';
    $request->xApideckConsumerId = 'consectetur';
    $request->xApideckServiceId = 'recusandae';

    $requestSecurity = new OrderTypesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orderTypes->orderTypesAll($request, $requestSecurity);

    if ($response->getOrderTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderTypesDelete

Delete Order Type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrderTypesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrderTypesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderTypesDeleteRequest();
    $request->id = '250fb008-c42e-4141-aac3-66c8dd6b1442';
    $request->raw = false;
    $request->xApideckAppId = 'provident';
    $request->xApideckConsumerId = 'ipsa';
    $request->xApideckServiceId = 'molestiae';

    $requestSecurity = new OrderTypesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orderTypes->orderTypesDelete($request, $requestSecurity);

    if ($response->deleteOrderTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderTypesOne

Get Order Type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrderTypesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrderTypesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderTypesOneRequest();
    $request->fields = 'magnam';
    $request->id = '74778a7b-d466-4d28-810a-b3cdca425190';
    $request->raw = false;
    $request->xApideckAppId = 'tempora';
    $request->xApideckConsumerId = 'debitis';
    $request->xApideckServiceId = 'ipsam';

    $requestSecurity = new OrderTypesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orderTypes->orderTypesOne($request, $requestSecurity);

    if ($response->getOrderTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderTypesUpdate

Update Order Type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrderTypesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderTypeInput;
use \OpenAPI\OpenAPI\Models\Operations\OrderTypesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderTypesUpdateRequest();
    $request->orderTypeInput = new OrderTypeInput();
    $request->orderTypeInput->default = true;
    $request->orderTypeInput->name = 'Default order type';
    $request->id = '23c7e0bc-7178-4e47-96f2-a70c688282aa';
    $request->raw = false;
    $request->xApideckAppId = 'incidunt';
    $request->xApideckConsumerId = 'atque';
    $request->xApideckServiceId = 'explicabo';

    $requestSecurity = new OrderTypesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orderTypes->orderTypesUpdate($request, $requestSecurity);

    if ($response->updateOrderTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
