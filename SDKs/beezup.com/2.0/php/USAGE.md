<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->analyticsGlobal->analyticsIndex();

    if ($response->analyticsIndex !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->