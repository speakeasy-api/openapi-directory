# servicepacks

### Available Operations

* [servicepacks](#servicepacks) - Overview of service packs

## servicepacks

Overview of service packs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->servicepacks->servicepacks();

    if ($response->servicepacks !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
