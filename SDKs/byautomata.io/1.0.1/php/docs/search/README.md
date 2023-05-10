# search

### Available Operations

* [getSearch](#getsearch) - Send search terms to receive the most relevant companies along with text snippets.

## getSearch

Send search terms to receive the most relevant companies along with text snippets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchRequest();
    $request->page = 'quibusdam';
    $request->terms = 'unde';

    $response = $sdk->search->getSearch($request);

    if ($response->getSearch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
