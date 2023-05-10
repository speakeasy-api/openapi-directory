# product

## Overview

Product object represents your document's product.

### Available Operations

* [createProduct](#createproduct) - Create a product
* [deleteProduct](#deleteproduct) - Delete a product
* [getProduct](#getproduct) - Retrieve a product
* [listProduct](#listproduct) - List all product
* [updateProduct](#updateproduct) - Update a product

## createProduct

Create a new product. Returns a product object if the create is succeded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ProductInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\VatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductInput();
    $request->comment = 'explicabo';
    $request->currency = CurrencyEnum::NOK;
    $request->generalLedgerNumber = 'distinctio';
    $request->generalLedgerTaxcode = 'quibusdam';
    $request->name = 'Pauline Deckow';
    $request->netUnitPrice = 5528.22;
    $request->unit = 'perferendis';
    $request->vat = VatEnum::FOURTEEN_PERCENT;

    $response = $sdk->product->createProduct($request);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProduct

Delete an existing product.

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
    $request->id = 828940;

    $response = $sdk->product->deleteProduct($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProduct

Retrieves the details of an existing product.

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
    $request->id = 369808;

    $response = $sdk->product->getProduct($request);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProduct

Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProductRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProductRequest();
    $request->page = 4695;
    $request->perPage = 146441;

    $response = $sdk->product->listProduct($request);

    if ($response->productList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProduct

Update an existing product. Returns a product object if the update is succeded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProductRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\VatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProductRequest();
    $request->productInput = new ProductInput();
    $request->productInput->comment = 'dolorum';
    $request->productInput->currency = CurrencyEnum::MXN;
    $request->productInput->generalLedgerNumber = 'tempora';
    $request->productInput->generalLedgerTaxcode = 'facilis';
    $request->productInput->name = 'Francisco Windler';
    $request->productInput->netUnitPrice = 7561.07;
    $request->productInput->unit = 'sint';
    $request->productInput->vat = VatEnum::TWENTY_TWO_PERCENT;
    $request->id = 592042;

    $response = $sdk->product->updateProduct($request);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
