# products

### Available Operations

* [productsDelete](#productsdelete) - Removes an existing Product.
* [productsGet](#productsget) - Returns a list of company's Products. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "stockCode" fields.
* [productsPost](#productspost) - Creates a new Product.
* [productsProcessBatch](#productsprocessbatch) - Processes a batch of Products.
* [productsPut](#productsput) - Updates an existing Product.
* [getV1ProductsId](#getv1productsid) - Returns information about a single Product.

## productsDelete

Removes an existing Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductsDeleteRequest();
    $request->id = 487838;
    $request->timestamp = 'quaerat';

    $response = $sdk->products->productsDelete($request);

    if ($response->productsDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsGet

Returns a list of company's Products. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "stockCode" fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->products->productsGet();

    if ($response->pageResultProductDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsPost

Creates a new Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ProductDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductDto();
    $request->details = [
        'quidem',
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->grossUnitPrice = false;
    $request->hasDefaultVatRate = false;
    $request->id = 179603;
    $request->productTypeId = 542499;
    $request->stockCode = 'sit';
    $request->timestamp = 'fugiat';
    $request->unitPrice = 672.49;
    $request->vatAnalysisTypeId = 743835;
    $request->vatRateId = 679393;

    $response = $sdk->products->productsPost($request);

    if ($response->productsPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsProcessBatch

Processes a batch of Products.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemProductDto;
use \OpenAPI\OpenAPI\Models\Shared\ProductDto;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemProductDtoOpCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new BatchItemProductDto(),
        new BatchItemProductDto(),
    ]

    $response = $sdk->products->productsProcessBatch($request);

    if ($response->productsProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productsPut

Updates an existing Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductsPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductsPutRequest();
    $request->productDto = new ProductDto();
    $request->productDto->details = [
        'dolorum',
        'deleniti',
    ];
    $request->productDto->grossUnitPrice = false;
    $request->productDto->hasDefaultVatRate = false;
    $request->productDto->id = 607045;
    $request->productDto->productTypeId = 896672;
    $request->productDto->stockCode = 'distinctio';
    $request->productDto->timestamp = 'asperiores';
    $request->productDto->unitPrice = 4694.97;
    $request->productDto->vatAnalysisTypeId = 216897;
    $request->productDto->vatRateId = 456015;
    $request->id = 663078;

    $response = $sdk->products->productsPut($request);

    if ($response->productsPut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1ProductsId

Returns information about a single Product.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1ProductsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1ProductsIdRequest();
    $request->id = 906418;

    $response = $sdk->products->getV1ProductsId($request);

    if ($response->productDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
