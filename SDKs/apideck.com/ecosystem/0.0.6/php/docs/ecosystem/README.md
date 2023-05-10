# ecosystem

### Available Operations

* [ecosystemsOne](#ecosystemsone) - Get ecosystem

## ecosystemsOne

Get ecosystem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EcosystemsOneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EcosystemsOneRequest();
    $request->ecosystemId = 'vero';

    $response = $sdk->ecosystem->ecosystemsOne($request);

    if ($response->getEcosystemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
