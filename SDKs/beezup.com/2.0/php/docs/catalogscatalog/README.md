# catalogsCatalog

### Available Operations

* [catalogStoreIndex](#catalogstoreindex) - Get the index of the catalog API for this store
* [catalogChangeCatalogColumnUserName](#catalogchangecatalogcolumnusername) - Change Catalog Column User Name
* [catalogChangeCustomColumnExpression](#catalogchangecustomcolumnexpression) - Change custom column expression
* [catalogChangeCustomColumnUserName](#catalogchangecustomcolumnusername) - Change Custom Column User Name
* [catalogComputeExpression](#catalogcomputeexpression) - Compute the expression for this catalog.
* [catalogDeleteCustomColumn](#catalogdeletecustomcolumn) - Delete custom column
* [catalogGetCatalogColumns](#cataloggetcatalogcolumns) - Get catalog column list
* [catalogGetCategories](#cataloggetcategories) - Get category list
* [catalogGetCustomColumnExpression](#cataloggetcustomcolumnexpression) - Get the encrypted custom column expression
* [catalogGetCustomColumns](#cataloggetcustomcolumns) - Get custom column list
* [catalogGetProductByProductId](#cataloggetproductbyproductid) - Get product by ProductId
* [catalogGetProductBySku](#cataloggetproductbysku) - Get product by Sku
* [catalogGetProducts](#cataloggetproducts) - Get product list
* [catalogGetRandomProducts](#cataloggetrandomproducts) - Get random product list
* [catalogSaveCustomColumn](#catalogsavecustomcolumn) - Create or replace a custom column
* [importationGetManualUpdateLastInputConfig](#importationgetmanualupdatelastinputconfig) - Get the last input configuration

## catalogStoreIndex

The operation will give you all the operations you will be able to do on this store for this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogStoreIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogStoreIndexRequest();
    $request->storeId = 'id';

    $response = $sdk->catalogsCatalog->catalogStoreIndex($request);

    if ($response->catalogStoreIndex !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogChangeCatalogColumnUserName

Change Catalog Column User Name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogChangeCatalogColumnUserNameRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangeUserColumnNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogChangeCatalogColumnUserNameRequest();
    $request->changeUserColumnNameRequest = new ChangeUserColumnNameRequest();
    $request->changeUserColumnNameRequest->userColumName = 'My SKU';
    $request->columnId = 'possimus';
    $request->storeId = 'aut';

    $response = $sdk->catalogsCatalog->catalogChangeCatalogColumnUserName($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogChangeCustomColumnExpression

Change custom column expression

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogChangeCustomColumnExpressionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangeCustomColumnExpressionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogChangeCustomColumnExpressionRequest();
    $request->changeCustomColumnExpressionRequest = new ChangeCustomColumnExpressionRequest();
    $request->changeCustomColumnExpressionRequest->encryptedBlocklyExpression = 'apokpoa,opz,sixsoisiosnoisn';
    $request->changeCustomColumnExpressionRequest->encryptedExpression = 'uziushdczaniodnndonisodndsiondsoidsndoin';
    $request->columnId = 'quasi';
    $request->storeId = 'error';

    $response = $sdk->catalogsCatalog->catalogChangeCustomColumnExpression($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogChangeCustomColumnUserName

Change Custom Column User Name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogChangeCustomColumnUserNameRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangeUserColumnNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogChangeCustomColumnUserNameRequest();
    $request->changeUserColumnNameRequest = new ChangeUserColumnNameRequest();
    $request->changeUserColumnNameRequest->userColumName = 'My SKU';
    $request->columnId = 'temporibus';
    $request->storeId = 'laborum';

    $response = $sdk->catalogsCatalog->catalogChangeCustomColumnUserName($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogComputeExpression

Compute the expression for this catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogComputeExpressionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComputeExpressionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogComputeExpressionRequest();
    $request->computeExpressionRequest = new ComputeExpressionRequest();
    $request->computeExpressionRequest->encryptedExpression = 'uziushdczaniodnndonisodndsiondsoidsndoin';
    $request->computeExpressionRequest->productValues = [
        'reiciendis' => 'voluptatibus',
    ];
    $request->storeId = 'vero';

    $response = $sdk->catalogsCatalog->catalogComputeExpression($request);

    if ($response->catalogComputeExpression200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogDeleteCustomColumn

Delete custom column

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogDeleteCustomColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogDeleteCustomColumnRequest();
    $request->columnId = 'nihil';
    $request->storeId = 'praesentium';

    $response = $sdk->catalogsCatalog->catalogDeleteCustomColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogGetCatalogColumns

Get catalog column list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogGetCatalogColumnsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogGetCatalogColumnsRequest();
    $request->storeId = 'voluptatibus';

    $response = $sdk->catalogsCatalog->catalogGetCatalogColumns($request);

    if ($response->catalogColumnList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogGetCategories

Get category list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogGetCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogGetCategoriesRequest();
    $request->acceptEncoding = [
        'omnis',
    ];
    $request->storeId = 'voluptate';

    $response = $sdk->catalogsCatalog->catalogGetCategories($request);

    if ($response->categoryList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogGetCustomColumnExpression

Get the encrypted custom column expression

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogGetCustomColumnExpressionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogGetCustomColumnExpressionRequest();
    $request->columnId = 'cum';
    $request->storeId = 'perferendis';

    $response = $sdk->catalogsCatalog->catalogGetCustomColumnExpression($request);

    if ($response->catalogGetCustomColumnExpression200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogGetCustomColumns

Get custom column list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogGetCustomColumnsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogGetCustomColumnsRequest();
    $request->storeId = 'doloremque';

    $response = $sdk->catalogsCatalog->catalogGetCustomColumns($request);

    if ($response->customColumnList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogGetProductByProductId

Get product by ProductId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogGetProductByProductIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogGetProductByProductIdRequest();
    $request->productId = 'reprehenderit';
    $request->storeId = 'ut';

    $response = $sdk->catalogsCatalog->catalogGetProductByProductId($request);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogGetProductBySku

Get product by Sku

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogGetProductBySkuRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogGetProductBySkuRequest();
    $request->sku = 'maiores';
    $request->storeId = 'dicta';

    $response = $sdk->catalogsCatalog->catalogGetProductBySku($request);

    if ($response->product !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogGetProducts

Get product list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogGetProductsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetProductsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogGetProductsRequest();
    $request->getProductsRequest = new GetProductsRequest();
    $request->getProductsRequest->categoryPath = [
        'dolore',
        'iusto',
    ];
    $request->getProductsRequest->columnIdList = [
        'bea7c21e-948b-4ac3-9ffd-4396e62c4163',
    ];
    $request->getProductsRequest->ean = 'MySku123';
    $request->getProductsRequest->exists = true;
    $request->getProductsRequest->mpn = 'MySku123';
    $request->getProductsRequest->orderByCatalogColumnId = 'bea7c21e-948b-4ac3-9ffd-4396e62c4163';
    $request->getProductsRequest->pageNumber = 1;
    $request->getProductsRequest->pageSize = 100;
    $request->getProductsRequest->productIdList = [
        '578419df-1bbf-41a6-96fa-862e42182b67',
        '578419df-1bbf-41a6-96fa-862e42182b67',
        '578419df-1bbf-41a6-96fa-862e42182b67',
    ];
    $request->getProductsRequest->sku = 'MySku123';
    $request->getProductsRequest->title = 'Frigo';
    $request->getProductsRequest->withoutSubCategories = true;
    $request->storeId = 'enim';

    $response = $sdk->catalogsCatalog->catalogGetProducts($request);

    if ($response->productList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogGetRandomProducts

We will return 10 products randomly selected with all product values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogGetRandomProductsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogGetRandomProductsRequest();
    $request->storeId = 'accusamus';

    $response = $sdk->catalogsCatalog->catalogGetRandomProducts($request);

    if ($response->randomProductList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogSaveCustomColumn

Create or replace a custom column

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CatalogSaveCustomColumnRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCustomColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CatalogSaveCustomColumnRequest();
    $request->columnId = 'commodi';
    $request->createCustomColumnRequest = new CreateCustomColumnRequest();
    $request->createCustomColumnRequest->displayGroupName = 'Category';
    $request->createCustomColumnRequest->encryptedBlocklyExpression = 'apokpoa,opz,sixsoisiosnoisn';
    $request->createCustomColumnRequest->encryptedExpression = 'uziushdczaniodnndonisodndsiondsoidsndoin';
    $request->createCustomColumnRequest->userColumnName = 'My SKU';
    $request->storeId = 'repudiandae';

    $response = $sdk->catalogsCatalog->catalogSaveCustomColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationGetManualUpdateLastInputConfig

Get the last input configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationGetManualUpdateLastInputConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationGetManualUpdateLastInputConfigRequest();
    $request->storeId = 'quae';

    $response = $sdk->catalogsCatalog->importationGetManualUpdateLastInputConfig($request);

    if ($response->lastManualImportInputConfiguration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
