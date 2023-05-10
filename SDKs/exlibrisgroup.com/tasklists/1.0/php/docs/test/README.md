# test

### Available Operations

* [getAlmawsV1TaskListsTest](#getalmawsv1taskliststest) - GET Task-lists Test API
* [postAlmawsV1TaskListsTest](#postalmawsv1taskliststest) - POST Task-lists Test API

## getAlmawsV1TaskListsTest

This API is used to test if the API key was configured correctly.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>GET - OK - institutionCode: 01ABC_INST</test>

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
    $response = $sdk->test->getAlmawsV1TaskListsTest();

    if ($response->getAlmawsV1TaskListsTest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAlmawsV1TaskListsTest

This API is used to test if the API key was configured correctly, including read/write permissions.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>POST - OK</test>

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
    $response = $sdk->test->postAlmawsV1TaskListsTest();

    if ($response->postAlmawsV1TaskListsTest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
