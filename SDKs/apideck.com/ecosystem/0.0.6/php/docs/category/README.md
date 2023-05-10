# category

### Available Operations

* [categoriesAll](#categoriesall) - List categories
* [categoriesOne](#categoriesone) - Get category
* [categoryListingsAll](#categorylistingsall) - List category listings

## categoriesAll

List categories

### Example Usage

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
    $request->cursor = 'quibusdam';
    $request->ecosystemId = 'unde';
    $request->limit = 857946;

    $response = $sdk->category->categoriesAll($request);

    if ($response->getCategoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## categoriesOne

Get category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CategoriesOneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CategoriesOneRequest();
    $request->ecosystemId = 'corrupti';
    $request->id = 'd69a674e-0f46-47cc-8796-ed151a05dfc2';

    $response = $sdk->category->categoriesOne($request);

    if ($response->getCategoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## categoryListingsAll

List category listings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CategoryListingsAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CategoryListingsAllRequest();
    $request->cursor = 'at';
    $request->ecosystemId = 'at';
    $request->id = 'f7cc78ca-1ba9-428f-8816-742cb7392059';
    $request->limit = 149675;

    $response = $sdk->category->categoryListingsAll($request);

    if ($response->getListingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
