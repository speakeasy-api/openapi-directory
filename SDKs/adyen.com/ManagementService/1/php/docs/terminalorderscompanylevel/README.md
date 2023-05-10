# terminalOrdersCompanyLevel

### Available Operations

* [getCompaniesCompanyIdBillingEntities](#getcompaniescompanyidbillingentities) - Get a list of billing entities
* [getCompaniesCompanyIdShippingLocations](#getcompaniescompanyidshippinglocations) - Get a list of shipping locations
* [getCompaniesCompanyIdTerminalModels](#getcompaniescompanyidterminalmodels) - Get a list of terminal models
* [getCompaniesCompanyIdTerminalOrders](#getcompaniescompanyidterminalorders) - Get a list of orders
* [getCompaniesCompanyIdTerminalOrdersOrderId](#getcompaniescompanyidterminalordersorderid) - Get an order
* [getCompaniesCompanyIdTerminalProducts](#getcompaniescompanyidterminalproducts) - Get a list of terminal products
* [patchCompaniesCompanyIdTerminalOrdersOrderId](#patchcompaniescompanyidterminalordersorderid) - Update an order
* [postCompaniesCompanyIdShippingLocations](#postcompaniescompanyidshippinglocations) - Create a shipping location
* [postCompaniesCompanyIdTerminalOrders](#postcompaniescompanyidterminalorders) - Create an order
* [postCompaniesCompanyIdTerminalOrdersOrderIdCancel](#postcompaniescompanyidterminalordersorderidcancel) - Cancel an order

## getCompaniesCompanyIdBillingEntities

Returns the billing entities of the company identified in the path and all merchant accounts belonging to the company.
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
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdBillingEntitiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdBillingEntitiesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdBillingEntitiesRequest();
    $request->companyId = 'distinctio';
    $request->name = 'Jessie Emmerich';

    $requestSecurity = new GetCompaniesCompanyIdBillingEntitiesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersCompanyLevel->getCompaniesCompanyIdBillingEntities($request, $requestSecurity);

    if ($response->billingEntitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdShippingLocations

Returns the shipping locations for the company identified in the path and all merchant accounts belonging to the company.
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
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdShippingLocationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdShippingLocationsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdShippingLocationsRequest();
    $request->companyId = 'saepe';
    $request->limit = 263322;
    $request->name = 'Lisa Fay';
    $request->offset = 320017;

    $requestSecurity = new GetCompaniesCompanyIdShippingLocationsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersCompanyLevel->getCompaniesCompanyIdShippingLocations($request, $requestSecurity);

    if ($response->shippingLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdTerminalModels

Returns a list of payment terminal models that the company identified in the path has access to.
The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalModelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalModelsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdTerminalModelsRequest();
    $request->companyId = 'saepe';

    $requestSecurity = new GetCompaniesCompanyIdTerminalModelsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersCompanyLevel->getCompaniesCompanyIdTerminalModels($request, $requestSecurity);

    if ($response->terminalModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdTerminalOrders

Returns a lists of terminal products orders for the company identified in the path.
To filter the list, use one or more of the query parameters.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalOrdersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalOrdersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdTerminalOrdersRequest();
    $request->companyId = 'suscipit';
    $request->customerOrderReference = 'deserunt';
    $request->limit = 588317;
    $request->offset = 324683;
    $request->status = 'repellendus';

    $requestSecurity = new GetCompaniesCompanyIdTerminalOrdersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersCompanyLevel->getCompaniesCompanyIdTerminalOrders($request, $requestSecurity);

    if ($response->terminalOrdersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdTerminalOrdersOrderId

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
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalOrdersOrderIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalOrdersOrderIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdTerminalOrdersOrderIdRequest();
    $request->companyId = 'totam';
    $request->orderId = 'similique';

    $requestSecurity = new GetCompaniesCompanyIdTerminalOrdersOrderIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersCompanyLevel->getCompaniesCompanyIdTerminalOrdersOrderId($request, $requestSecurity);

    if ($response->terminalOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdTerminalProducts

Returns a country-specific list of payment terminal packages and parts that the company identified in the path has access to.
 
To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalProductsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalProductsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdTerminalProductsRequest();
    $request->companyId = 'alias';
    $request->country = 'Taiwan';
    $request->limit = 311860;
    $request->offset = 273542;
    $request->terminalModelId = 'vel';

    $requestSecurity = new GetCompaniesCompanyIdTerminalProductsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersCompanyLevel->getCompaniesCompanyIdTerminalProducts($request, $requestSecurity);

    if ($response->terminalProductsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchCompaniesCompanyIdTerminalOrdersOrderId

Updates the terminal products order identified in the path.
Updating is only possible while the order has the status **Placed**.

The request body only needs to contain what you want to change. 
However, to update the products in the `items` array, you must provide the entire array. For example, if the array has three items:
 To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminalOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderItem;
use \OpenAPI\OpenAPI\Models\Operations\PatchCompaniesCompanyIdTerminalOrdersOrderIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchCompaniesCompanyIdTerminalOrdersOrderIdRequest();
    $request->terminalOrderRequest = new TerminalOrderRequest();
    $request->terminalOrderRequest->billingEntityId = 'quod';
    $request->terminalOrderRequest->customerOrderReference = 'officiis';
    $request->terminalOrderRequest->items = [
        new OrderItem(),
    ];
    $request->terminalOrderRequest->shippingLocationId = 'dolorum';
    $request->terminalOrderRequest->taxId = 'a';
    $request->companyId = 'esse';
    $request->orderId = 'harum';

    $requestSecurity = new PatchCompaniesCompanyIdTerminalOrdersOrderIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersCompanyLevel->patchCompaniesCompanyIdTerminalOrdersOrderId($request, $requestSecurity);

    if ($response->terminalOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompaniesCompanyIdShippingLocations

Creates a shipping location for the company identified in the path. A shipping location defines an address where orders can be delivered.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdShippingLocationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShippingLocation;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdShippingLocationsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompaniesCompanyIdShippingLocationsRequest();
    $request->shippingLocation = new ShippingLocation();
    $request->shippingLocation->address = new Address();
    $request->shippingLocation->address->city = 'Cruzfield';
    $request->shippingLocation->address->companyName = 'tenetur';
    $request->shippingLocation->address->country = 'Czech Republic';
    $request->shippingLocation->address->postalCode = '82329-5407';
    $request->shippingLocation->address->stateOrProvince = 'neque';
    $request->shippingLocation->address->streetAddress = 'sed';
    $request->shippingLocation->address->streetAddress2 = 'vel';
    $request->shippingLocation->contact = new Contact();
    $request->shippingLocation->contact->email = 'Garland.Oberbrunner@hotmail.com';
    $request->shippingLocation->contact->firstName = 'Drew';
    $request->shippingLocation->contact->infix = 'qui';
    $request->shippingLocation->contact->lastName = 'McGlynn';
    $request->shippingLocation->contact->phoneNumber = 'maxime';
    $request->shippingLocation->id = 'db1a8422-bb67-49d2-b227-15bf0cbb1e31';
    $request->shippingLocation->name = 'Isaac Reynolds DVM';
    $request->companyId = 'dolorem';

    $requestSecurity = new PostCompaniesCompanyIdShippingLocationsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersCompanyLevel->postCompaniesCompanyIdShippingLocations($request, $requestSecurity);

    if ($response->shippingLocation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompaniesCompanyIdTerminalOrders

Creates an order for payment terminal products for the company identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdTerminalOrdersRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminalOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderItem;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdTerminalOrdersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompaniesCompanyIdTerminalOrdersRequest();
    $request->terminalOrderRequest = new TerminalOrderRequest();
    $request->terminalOrderRequest->billingEntityId = 'dolore';
    $request->terminalOrderRequest->customerOrderReference = 'labore';
    $request->terminalOrderRequest->items = [
        new OrderItem(),
    ];
    $request->terminalOrderRequest->shippingLocationId = 'dolorum';
    $request->terminalOrderRequest->taxId = 'architecto';
    $request->companyId = 'quae';

    $requestSecurity = new PostCompaniesCompanyIdTerminalOrdersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersCompanyLevel->postCompaniesCompanyIdTerminalOrders($request, $requestSecurity);

    if ($response->terminalOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompaniesCompanyIdTerminalOrdersOrderIdCancel

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
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdTerminalOrdersOrderIdCancelRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdTerminalOrdersOrderIdCancelSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompaniesCompanyIdTerminalOrdersOrderIdCancelRequest();
    $request->companyId = 'aut';
    $request->orderId = 'quas';

    $requestSecurity = new PostCompaniesCompanyIdTerminalOrdersOrderIdCancelSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalOrdersCompanyLevel->postCompaniesCompanyIdTerminalOrdersOrderIdCancel($request, $requestSecurity);

    if ($response->terminalOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
