# product

### Available Operations

* [productListingsAll](#productlistingsall) - List product listings
* [productsAll](#productsall) - List products
* [productsOne](#productsone) - Get product

## productListingsAll

List product listings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductListingsAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductListingsAllRequest();
    $request->cursor = 'itaque';
    $request->ecosystemId = 'incidunt';
    $request->id = '50ad2abd-4426-4980-ad50-2a94bb4f63c9';
    $request->limit = 396098;

    $response = $sdk->product->productListingsAll($request);

    if ($response->getListingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsAll

List products

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductsAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductsAllRequest();
    $request->ecosystemId = 'provident';

    $response = $sdk->product->productsAll($request);

    if ($response->getProductsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsOne

Get product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductsOneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductsOneRequest();
    $request->ecosystemId = 'necessitatibus';
    $request->id = '9a3efa77-dfb1-44cd-a6ae-395efb9ba88f';

    $response = $sdk->product->productsOne($request);

    if ($response->getProductResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
