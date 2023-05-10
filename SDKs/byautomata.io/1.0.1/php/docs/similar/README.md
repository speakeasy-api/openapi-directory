# similar

### Available Operations

* [getSimilar](#getsimilar) - Send a company website to receive a list of companies related to them.

## getSimilar

Send a company website to receive a list of companies related to them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSimilarRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSimilarRequest();
    $request->link = 'nulla';
    $request->page = 'corrupti';

    $response = $sdk->similar->getSimilar($request);

    if ($response->getSimilar200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
