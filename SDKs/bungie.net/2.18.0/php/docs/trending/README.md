# trending

## Overview

trending

### Available Operations

* [trendingGetTrendingCategories](#trendinggettrendingcategories) - Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
* [trendingGetTrendingCategory](#trendinggettrendingcategory) - Returns paginated lists of trending items for a category.
* [trendingGetTrendingEntryDetail](#trendinggettrendingentrydetail) - Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.

## trendingGetTrendingCategories

Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->trending->trendingGetTrendingCategories();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trendingGetTrendingCategory

Returns paginated lists of trending items for a category.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TrendingGetTrendingCategoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrendingGetTrendingCategoryRequest();
    $request->categoryId = 'doloribus';
    $request->pageNumber = 891924;

    $response = $sdk->trending->trendingGetTrendingCategory($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trendingGetTrendingEntryDetail

Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TrendingGetTrendingEntryDetailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrendingGetTrendingEntryDetailRequest();
    $request->identifier = 'eius';
    $request->trendingEntryType = 806194;

    $response = $sdk->trending->trendingGetTrendingEntryDetail($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
