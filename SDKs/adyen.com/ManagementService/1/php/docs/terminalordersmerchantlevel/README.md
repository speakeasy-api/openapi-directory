# terminalOrdersMerchantLevel

### Available Operations

* [getMerchantsMerchantIdBillingEntities](#getmerchantsmerchantidbillingentities) - Get a list of billing entities
* [getMerchantsMerchantIdShippingLocations](#getmerchantsmerchantidshippinglocations) - Get a list of shipping locations
* [getMerchantsMerchantIdTerminalModels](#getmerchantsmerchantidterminalmodels) - Get a list of terminal models
* [getMerchantsMerchantIdTerminalOrders](#getmerchantsmerchantidterminalorders) - Get a list of orders
* [getMerchantsMerchantIdTerminalOrdersOrderId](#getmerchantsmerchantidterminalordersorderid) - Get an order
* [getMerchantsMerchantIdTerminalProducts](#getmerchantsmerchantidterminalproducts) - Get a list of terminal products
* [patchMerchantsMerchantIdTerminalOrdersOrderId](#patchmerchantsmerchantidterminalordersorderid) - Update an order
* [postMerchantsMerchantIdShippingLocations](#postmerchantsmerchantidshippinglocations) - Create a shipping location
* [postMerchantsMerchantIdTerminalOrders](#postmerchantsmerchantidterminalorders) - Create an order
* [postMerchantsMerchantIdTerminalOrdersOrderIdCancel](#postmerchantsmerchantidterminalordersorderidcancel) - Cancel an order

## getMerchantsMerchantIdBillingEntities

Returns the billing entities of the merchant account identified in the path.
A billing entity is a legal entity where we charge orders to. An order for terminal products must contain the ID of a billing entity.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdBillingEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdBillingEntitiesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdBillingEntitiesRequest();
    $request->merchantId = 'itaque';
    $request->name = 'Jodi Skiles';

    $requestSecurity = new GetMerchantsMerchantIdBillingEntitiesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersMerchantLevel->getMerchantsMerchantIdBillingEntities($request, $requestSecurity);

    if ($response->billingEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdShippingLocations

Returns the shipping locations for the merchant account identified in the path.
A shipping location includes the address where orders can be delivered, and an ID which you need to specify when ordering terminal products.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdShippingLocationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdShippingLocationsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdShippingLocationsRequest();
    $request->limit = 281730;
    $request->merchantId = 'facilis';
    $request->name = 'Alan Bergnaum';
    $request->offset = 580447;

    $requestSecurity = new GetMerchantsMerchantIdShippingLocationsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersMerchantLevel->getMerchantsMerchantIdShippingLocations($request, $requestSecurity);

    if ($response->shippingLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdTerminalModels

Returns the payment terminal models that merchant account identified in the path has access to. The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdTerminalModelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdTerminalModelsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdTerminalModelsRequest();
    $request->merchantId = 'voluptatibus';

    $requestSecurity = new GetMerchantsMerchantIdTerminalModelsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersMerchantLevel->getMerchantsMerchantIdTerminalModels($request, $requestSecurity);

    if ($response->terminalModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdTerminalOrders

Returns a list of terminal products orders for the merchant account identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdTerminalOrdersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdTerminalOrdersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdTerminalOrdersRequest();
    $request->customerOrderReference = 'quisquam';
    $request->limit = 876506;
    $request->merchantId = 'omnis';
    $request->offset = 338159;
    $request->status = 'ipsum';

    $requestSecurity = new GetMerchantsMerchantIdTerminalOrdersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersMerchantLevel->getMerchantsMerchantIdTerminalOrders($request, $requestSecurity);

    if ($response->terminalOrdersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdTerminalOrdersOrderId

Returns the details of the terminal products order identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdTerminalOrdersOrderIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdTerminalOrdersOrderIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdTerminalOrdersOrderIdRequest();
    $request->merchantId = 'delectus';
    $request->orderId = 'voluptate';

    $requestSecurity = new GetMerchantsMerchantIdTerminalOrdersOrderIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersMerchantLevel->getMerchantsMerchantIdTerminalOrdersOrderId($request, $requestSecurity);

    if ($response->terminalOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdTerminalProducts

Returns a country-specific list of payment terminal packages and parts that the merchant account identified in the path has access to.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdTerminalProductsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdTerminalProductsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdTerminalProductsRequest();
    $request->country = 'Denmark';
    $request->limit = 878870;
    $request->merchantId = 'tenetur';
    $request->offset = 492268;
    $request->terminalModelId = 'hic';

    $requestSecurity = new GetMerchantsMerchantIdTerminalProductsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersMerchantLevel->getMerchantsMerchantIdTerminalProducts($request, $requestSecurity);

    if ($response->terminalProductsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMerchantsMerchantIdTerminalOrdersOrderId

Updates the terminal products order identified in the path.
Updating is only possible while the order has the status **Placed**.

The request body only needs to contain what you want to change. 
However, to update the products in the `items` array, you must provice the entire array. For example, if the array has three items:
 To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdTerminalOrdersOrderIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminalOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderItem;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdTerminalOrdersOrderIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMerchantsMerchantIdTerminalOrdersOrderIdRequest();
    $request->terminalOrderRequest = new TerminalOrderRequest();
    $request->terminalOrderRequest->billingEntityId = 'distinctio';
    $request->terminalOrderRequest->customerOrderReference = 'quod';
    $request->terminalOrderRequest->items = [
        new OrderItem(),
        new OrderItem(),
    ];
    $request->terminalOrderRequest->shippingLocationId = 'similique';
    $request->terminalOrderRequest->taxId = 'facilis';
    $request->merchantId = 'vero';
    $request->orderId = 'ducimus';

    $requestSecurity = new PatchMerchantsMerchantIdTerminalOrdersOrderIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersMerchantLevel->patchMerchantsMerchantIdTerminalOrdersOrderId($request, $requestSecurity);

    if ($response->terminalOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdShippingLocations

Creates a shipping location for the merchant account identified in the path. A shipping location defines an address where orders can be shipped to. 

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdShippingLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShippingLocation;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdShippingLocationsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdShippingLocationsRequest();
    $request->shippingLocation = new ShippingLocation();
    $request->shippingLocation->address = new Address();
    $request->shippingLocation->address->city = 'Port Rosina';
    $request->shippingLocation->address->companyName = 'sequi';
    $request->shippingLocation->address->country = 'Nauru';
    $request->shippingLocation->address->postalCode = '09381-7994';
    $request->shippingLocation->address->stateOrProvince = 'eligendi';
    $request->shippingLocation->address->streetAddress = 'ducimus';
    $request->shippingLocation->address->streetAddress2 = 'alias';
    $request->shippingLocation->contact = new Contact();
    $request->shippingLocation->contact->email = 'Domingo.Hills@yahoo.com';
    $request->shippingLocation->contact->firstName = 'Hilbert';
    $request->shippingLocation->contact->infix = 'possimus';
    $request->shippingLocation->contact->lastName = 'Gulgowski';
    $request->shippingLocation->contact->phoneNumber = 'ratione';
    $request->shippingLocation->id = '6813f16d-9f5f-4ce6-8556-146c3e250fb0';
    $request->shippingLocation->name = 'Margie Russel';
    $request->merchantId = 'accusamus';

    $requestSecurity = new PostMerchantsMerchantIdShippingLocationsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersMerchantLevel->postMerchantsMerchantIdShippingLocations($request, $requestSecurity);

    if ($response->shippingLocation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdTerminalOrders

Creates an order for payment terminal products for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdTerminalOrdersRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminalOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderItem;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdTerminalOrdersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdTerminalOrdersRequest();
    $request->terminalOrderRequest = new TerminalOrderRequest();
    $request->terminalOrderRequest->billingEntityId = 'inventore';
    $request->terminalOrderRequest->customerOrderReference = 'non';
    $request->terminalOrderRequest->items = [
        new OrderItem(),
    ];
    $request->terminalOrderRequest->shippingLocationId = 'dolorum';
    $request->terminalOrderRequest->taxId = 'laborum';
    $request->merchantId = 'placeat';

    $requestSecurity = new PostMerchantsMerchantIdTerminalOrdersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersMerchantLevel->postMerchantsMerchantIdTerminalOrders($request, $requestSecurity);

    if ($response->terminalOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdTerminalOrdersOrderIdCancel

Cancels the terminal products order identified in the path.
Cancelling is only possible while the order has the status **Placed**.
To cancel an order, make a POST call without a request body. The response returns the full order details, but with the status changed to **Cancelled**.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdTerminalOrdersOrderIdCancelRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdTerminalOrdersOrderIdCancelSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdTerminalOrdersOrderIdCancelRequest();
    $request->merchantId = 'velit';
    $request->orderId = 'eum';

    $requestSecurity = new PostMerchantsMerchantIdTerminalOrdersOrderIdCancelSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersMerchantLevel->postMerchantsMerchantIdTerminalOrdersOrderIdCancel($request, $requestSecurity);

    if ($response->terminalOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
