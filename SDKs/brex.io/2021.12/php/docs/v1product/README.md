# v1Product

## Overview

Product Search, Order and Retrieve methods

### Available Operations

* [productAvailability](#productavailability) - Retrieves a document availability result
* [productCatalog](#productcatalog) - Returns a catalog of products
* [productNotifier](#productnotifier) - Returns metadata for a notifier
* [productNotifierCreate](#productnotifiercreate) - Creates a notifier for an order
* [productOrder](#productorder) - Places a product order
* [productOrderConcierge](#productorderconcierge) - Places a concierge order
* [productOrderUbo](#productorderubo) - Places a UBO order
* [productOrderWithOption](#productorderwithoption) - Places a product order
* [productRetrieve](#productretrieve) - Retrieves the result of an order
* [productSearch](#productsearch) - Returns a list of products
* [productStatus](#productstatus) - Returns metadata for a order
* [productUpdateAction](#productupdateaction) - Updates metadata of an order

## productAvailability

Check availability and valid options for a particular product for a particular company identfied by its id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductAvailabilitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductAvailabilityRequest();
    $request->sku = 'quam';
    $request->subjectId = 'molestiae';

    $requestSecurity = new ProductAvailabilitySecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Product->productAvailability($request, $requestSecurity);

    if ($response->productAvailability200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productCatalog

Returns a catalog of purchasable products available with some metadata for a particular country

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductCatalogRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductCatalogSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductCatalogRequest();
    $request->country = 'velit';

    $requestSecurity = new ProductCatalogSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Product->productCatalog($request, $requestSecurity);

    if ($response->productCatalog200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productNotifier

Queries and returns all metadata associated with a notifier identified by its notifer id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductNotifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductNotifierSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductNotifierRequest();
    $request->notifierId = 'error';

    $requestSecurity = new ProductNotifierSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Product->productNotifier($request, $requestSecurity);

    if ($response->productNotifier200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productNotifierCreate

Create a notifier for a particular order. Parameters can be supplied in the path

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductNotifierCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductNotifierCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductNotifierCreateRequest();
    $request->orderId = 'quia';
    $request->type = 'quis';
    $request->uri = 'vitae';

    $requestSecurity = new ProductNotifierCreateSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Product->productNotifierCreate($request, $requestSecurity);

    if ($response->productNotifierCreate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productOrder

Place an order for a particular product identified by its SKU for a particular company identified by its id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductOrderRequest();
    $request->sku = 'laborum';
    $request->subjectId = 'animi';

    $requestSecurity = new ProductOrderSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Product->productOrder($request, $requestSecurity);

    if ($response->productOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productOrderConcierge

Place an order for a concierge product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductOrderConciergeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ProductOrderConciergeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductOrderConciergeRequestBody();
    $request->companyName = 'null';
    $request->contactEmail = 'null';
    $request->contactPhone = 'null';
    $request->costConfirmation = false;
    $request->country = 'null';
    $request->financialData = false;
    $request->historicInformation = false;
    $request->informationRequirements = 'null';
    $request->locationInvestigation = false;
    $request->priority = 'standard';
    $request->registerData = false;
    $request->registerNumber = 'null';
    $request->subjectId = 'null';

    $requestSecurity = new ProductOrderConciergeSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Product->productOrderConcierge($request, $requestSecurity);

    if ($response->productOrderConcierge200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productOrderUbo

Place an order for a UBO (ultimate beneficial owner) discovery report

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductOrderUboRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ProductOrderUboSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductOrderUboRequestBody();
    $request->callbackUrl = 'null';
    $request->credits = -1;
    $request->includeDocs = false;
    $request->levels = '25,50';
    $request->strategy = 'FULL';
    $request->subjectId = 'null';

    $requestSecurity = new ProductOrderUboSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Product->productOrderUbo($request, $requestSecurity);

    if ($response->productOrderUbo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productOrderWithOption

Place an order for a particular product identified by its SKU with a particular option for a particular company identified by its id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductOrderWithOptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductOrderWithOptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductOrderWithOptionRequest();
    $request->option = 'enim';
    $request->sku = 'odit';
    $request->subjectId = 'quo';

    $requestSecurity = new ProductOrderWithOptionSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Product->productOrderWithOption($request, $requestSecurity);

    if ($response->productOrderWithOption200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productRetrieve

Retrieves the document or structured data associated with a completed order identified with its order id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductRetrieveRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductRetrieveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductRetrieveRequest();
    $request->orderId = 'sequi';

    $requestSecurity = new ProductRetrieveSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Product->productRetrieve($request, $requestSecurity);

    if ($response->productRetrieve200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productSearch

Search for possible products for a particular company identified by its id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductSearchRequest();
    $request->subjectId = 'tenetur';

    $requestSecurity = new ProductSearchSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Product->productSearch($request, $requestSecurity);

    if ($response->productSearch200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productStatus

Retrieve the current status of an order identified by its order id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductStatusRequest();
    $request->orderId = 'ipsam';

    $requestSecurity = new ProductStatusSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Product->productStatus($request, $requestSecurity);

    if ($response->productStatus200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productUpdateAction

Update an existing order identified by its order id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductUpdateActionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductUpdateActionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ProductUpdateActionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductUpdateActionRequest();
    $request->requestBody = new ProductUpdateActionRequestBody();
    $request->requestBody->credits = 100;
    $request->action = 'id';
    $request->orderId = 'possimus';

    $requestSecurity = new ProductUpdateActionSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Product->productUpdateAction($request, $requestSecurity);

    if ($response->productUpdateAction200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
