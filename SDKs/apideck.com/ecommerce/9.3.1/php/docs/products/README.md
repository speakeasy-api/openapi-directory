# products

### Available Operations

* [productsAll](#productsall) - List Products
* [productsOne](#productsone) - Get Product

## productsAll

List Products

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductsAllRequest();
    $request->cursor = 'est';
    $request->fields = 'mollitia';
    $request->limit = 670638;
    $request->raw = false;
    $request->xApideckAppId = 'dolores';
    $request->xApideckConsumerId = 'dolorem';
    $request->xApideckServiceId = 'corporis';

    $requestSecurity = new ProductsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->products->productsAll($request, $requestSecurity);

    if ($response->getProductsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsOne

Get Product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProductsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProductsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductsOneRequest();
    $request->fields = 'explicabo';
    $request->id = 'c5955907-aff1-4a3a-afa9-467739251aa5';
    $request->raw = false;
    $request->xApideckAppId = 'odit';
    $request->xApideckConsumerId = 'quo';
    $request->xApideckServiceId = 'sequi';

    $requestSecurity = new ProductsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->products->productsOne($request, $requestSecurity);

    if ($response->getProductResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
