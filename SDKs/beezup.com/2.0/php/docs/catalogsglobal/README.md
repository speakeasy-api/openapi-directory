# catalogsGlobal

### Available Operations

* [catalogIndex](#catalogindex) - Get the index of the catalog API
* [catalogGetBeezUPColumns](#cataloggetbeezupcolumns) - Get the BeezUP columns

## catalogIndex

The operation will give you all the operations you will be able to do and all the LOV used in this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->catalogsGlobal->catalogIndex();

    if ($response->catalogIndex !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## catalogGetBeezUPColumns

Get the BeezUP columns, this columns are used for mapping during the manual catalog importation process.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->catalogsGlobal->catalogGetBeezUPColumns();

    if ($response->beezUPColumnConfigurations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
