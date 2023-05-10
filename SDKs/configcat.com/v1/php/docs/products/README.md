# products

## Overview

With these endpoints you can manage your Products.
This also can be used to manage [Environments](#tag/Environments), [Configs](#tag/Configs), [Tags](#tag/Tags) and [Permission Groups](#tag/Permission-Groups) through this API.

<a href="https://configcat.com/docs/main-concepts/#product" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Products.

### Available Operations

* [createProduct](#createproduct) - Create Product
* [deleteProduct](#deleteproduct) - Delete Product
* [getProduct](#getproduct) - Get Product
* [getProducts](#getproducts) - List Products
* [updateProduct](#updateproduct) - Update Product

## createProduct

This endpoint creates a new Product in a specified Organization 
identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProductRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProductRequest();
    $request->createProductRequest = new CreateProductRequest();
    $request->createProductRequest->description = 'consequuntur';
    $request->createProductRequest->name = 'Kimberly McDermott';
    $request->organizationId = '0929921a-efb9-4f58-84d8-6e68e4be0560';

    $response = $sdk->products->createProduct($request);

    if ($response->productModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProduct

This endpoint removes a Product identified by the `productId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProductRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProductRequest();
    $request->productId = '13f59da7-57a5-49ec-bef6-6ef1caa3383c';

    $response = $sdk->products->deleteProduct($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProduct

This endpoint returns the metadata of a Product 
identified by the `productId`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProductRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProductRequest();
    $request->productId = '2beb4773-73c8-4d72-b64d-1db1f2c43106';

    $response = $sdk->products->getProduct($request);

    if ($response->productModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProducts

This endpoint returns the list of the Products that belongs to the user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->products->getProducts();

    if ($response->productModelHaljsons !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProduct

This endpoint updates a Product identified by the `productId` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProductRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProductRequest();
    $request->updateProductRequest = new UpdateProductRequest();
    $request->updateProductRequest->description = 'ea';
    $request->updateProductRequest->name = 'Leigh Mante';
    $request->productId = '49e1cf9e-06e3-4a43-b000-ae6b6bc9b8f7';

    $response = $sdk->products->updateProduct($request);

    if ($response->productModelHaljson !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
