# vatCategories

### Available Operations

* [vatCategoriesGet](#vatcategoriesget) - Returns a list of global Vat Categories. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.
* [vatCategoriesProcessVatRates](#vatcategoriesprocessvatrates) - Process Vat Rates

## vatCategoriesGet

Returns a list of global Vat Categories. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->vatCategories->vatCategoriesGet();

    if ($response->pageResultVatCategoryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vatCategoriesProcessVatRates

Process Vat Rates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\VatRatesByVatCategoryDto;
use \OpenAPI\OpenAPI\Models\Shared\VatRateDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new VatRatesByVatCategoryDto(),
        new VatRatesByVatCategoryDto(),
        new VatRatesByVatCategoryDto(),
    ]

    $response = $sdk->vatCategories->vatCategoriesProcessVatRates($request);

    if ($response->vatCategoriesProcessVatRates200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
