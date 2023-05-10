# me

### Available Operations

* [meGetMe](#megetme) - Retrieve current account data
* [meGetMePlan](#megetmeplan) - Retrieve current account plan

## meGetMe

Retrieve current account data

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
    $response = $sdk->me->meGetMe();

    if ($response->apiCoreDtoAccountingUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## meGetMePlan

Retrieve current account plan

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
    $response = $sdk->me->meGetMePlan();

    if ($response->apiCoreDtoAccountingPlan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
