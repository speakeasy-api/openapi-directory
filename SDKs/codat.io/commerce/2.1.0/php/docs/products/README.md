# products

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [listProductCategories](#listproductcategories) - List product categories
* [listProducts](#listproducts) - List products

## listProductCategories

Product categories are used to classify a group of products together, either by type (eg "Furniture"), or sometimes by tax profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProductCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProductCategoriesRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->orderBy = '-modifiedDate';
    $request->page = 1;
    $request->pageSize = 100;
    $request->query = 'nulla';

    $response = $sdk->products->listProductCategories($request);

    if ($response->productCategories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProducts

The Products data type provides the company's product inventory, and includes the price and quantity of all products, and product variants, available for sale.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProductsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProductsRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->orderBy = '-modifiedDate';
    $request->page = 1;
    $request->pageSize = 100;
    $request->query = 'corrupti';

    $response = $sdk->products->listProducts($request);

    if ($response->products !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
