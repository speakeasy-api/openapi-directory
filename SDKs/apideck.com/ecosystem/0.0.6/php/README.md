# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CategoriesAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CategoriesAllRequest();
    $request->cursor = 'corrupti';
    $request->ecosystemId = 'provident';
    $request->limit = 715190;

    $response = $sdk->category->categoriesAll($request);

    if ($response->getCategoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [category](docs/category/README.md)

* [categoriesAll](docs/category/README.md#categoriesall) - List categories
* [categoriesOne](docs/category/README.md#categoriesone) - Get category
* [categoryListingsAll](docs/category/README.md#categorylistingsall) - List category listings

### [collection](docs/collection/README.md)

* [collectionListingsAll](docs/collection/README.md#collectionlistingsall) - List collection listings
* [collectionsAll](docs/collection/README.md#collectionsall) - List collections
* [collectionsOne](docs/collection/README.md#collectionsone) - Get collection

### [ecosystem](docs/ecosystem/README.md)

* [ecosystemsOne](docs/ecosystem/README.md#ecosystemsone) - Get ecosystem

### [listing](docs/listing/README.md)

* [listingsAll](docs/listing/README.md#listingsall) - List listings
* [listingsOne](docs/listing/README.md#listingsone) - Get listing

### [product](docs/product/README.md)

* [productListingsAll](docs/product/README.md#productlistingsall) - List product listings
* [productsAll](docs/product/README.md#productsall) - List products
* [productsOne](docs/product/README.md#productsone) - Get product
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
