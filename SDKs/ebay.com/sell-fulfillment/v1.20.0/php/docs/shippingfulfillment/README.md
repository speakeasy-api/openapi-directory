# shippingFulfillment

### Available Operations

* [createShippingFulfillment](#createshippingfulfillment) - When you group an order's line items into one or more packages, each package requires a corresponding plan for handling, addressing, and shipping; this is a <i>shipping fulfillment</i>. For each package, execute this call once to generate a shipping fulfillment associated with that package. <br><br> <span class="tablenote"><strong>Note:</strong> A single line item in an order can consist of multiple units of a purchased item, and one unit can consist of multiple parts or components. Although these components might be provided by the manufacturer in separate packaging, the seller must include all components of a given line item in the same package.</span> <br><br>Before using this call for a given package, you must determine which line items are in the package. If the package has been shipped, you should provide the date of shipment in the request. If not provided, it will default to the current date and time.
* [getShippingFulfillment](#getshippingfulfillment) - Use this call to retrieve the contents of a fulfillment based on its unique identifier, <b>fulfillmentId</b> (combined with the associated order's <b>orderId</b>). The <b>fulfillmentId</b> value was originally generated by the <b>createShippingFulfillment</b> call, and is returned by the <b>getShippingFulfillments</b> call in the <b>members.fulfillmentId</b> field.
* [getShippingFulfillments](#getshippingfulfillments) - Use this call to retrieve the contents of all fulfillments currently defined for a specified order based on the order's unique identifier, <b>orderId</b>. This value is returned in the <b>getOrders</b> call's <b>members.orderId</b> field when you search for orders by creation date or shipment status.

## createShippingFulfillment

When you group an order's line items into one or more packages, each package requires a corresponding plan for handling, addressing, and shipping; this is a <i>shipping fulfillment</i>. For each package, execute this call once to generate a shipping fulfillment associated with that package. <br><br> <span class="tablenote"><strong>Note:</strong> A single line item in an order can consist of multiple units of a purchased item, and one unit can consist of multiple parts or components. Although these components might be provided by the manufacturer in separate packaging, the seller must include all components of a given line item in the same package.</span> <br><br>Before using this call for a given package, you must determine which line items are in the package. If the package has been shipped, you should provide the date of shipment in the request. If not provided, it will default to the current date and time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateShippingFulfillmentRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShippingFulfillmentDetails;
use \OpenAPI\OpenAPI\Models\Shared\LineItemReference;
use \OpenAPI\OpenAPI\Models\Operations\CreateShippingFulfillmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateShippingFulfillmentRequest();
    $request->shippingFulfillmentDetails = new ShippingFulfillmentDetails();
    $request->shippingFulfillmentDetails->lineItems = [
        new LineItemReference(),
        new LineItemReference(),
    ];
    $request->shippingFulfillmentDetails->shippedDate = 'iste';
    $request->shippingFulfillmentDetails->shippingCarrierCode = 'iure';
    $request->shippingFulfillmentDetails->trackingNumber = 'saepe';
    $request->orderId = 'quidem';

    $requestSecurity = new CreateShippingFulfillmentSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shippingFulfillment->createShippingFulfillment($request, $requestSecurity);

    if ($response->createShippingFulfillment201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShippingFulfillment

Use this call to retrieve the contents of a fulfillment based on its unique identifier, <b>fulfillmentId</b> (combined with the associated order's <b>orderId</b>). The <b>fulfillmentId</b> value was originally generated by the <b>createShippingFulfillment</b> call, and is returned by the <b>getShippingFulfillments</b> call in the <b>members.fulfillmentId</b> field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShippingFulfillmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetShippingFulfillmentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShippingFulfillmentRequest();
    $request->fulfillmentId = 'architecto';
    $request->orderId = 'ipsa';

    $requestSecurity = new GetShippingFulfillmentSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shippingFulfillment->getShippingFulfillment($request, $requestSecurity);

    if ($response->shippingFulfillment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShippingFulfillments

Use this call to retrieve the contents of all fulfillments currently defined for a specified order based on the order's unique identifier, <b>orderId</b>. This value is returned in the <b>getOrders</b> call's <b>members.orderId</b> field when you search for orders by creation date or shipment status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShippingFulfillmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetShippingFulfillmentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShippingFulfillmentsRequest();
    $request->orderId = 'reiciendis';

    $requestSecurity = new GetShippingFulfillmentsSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->shippingFulfillment->getShippingFulfillments($request, $requestSecurity);

    if ($response->shippingFulfillmentPagedCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
