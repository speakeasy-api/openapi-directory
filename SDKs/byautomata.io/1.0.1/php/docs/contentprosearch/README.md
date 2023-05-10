# contentproSearch

### Available Operations

* [getContentproSearch](#getcontentprosearch) - Send search terms to receive the most relevant articles and companies.

## getContentproSearch

Send search terms to receive the most relevant articles and companies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContentproSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContentproSearchRequest();
    $request->terms = 'provident';

    $response = $sdk->contentproSearch->getContentproSearch($request);

    if ($response->getContentproSearch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
