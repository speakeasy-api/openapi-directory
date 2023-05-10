# news

### Available Operations

* [newsSearchRead](#newssearchread) - Return news or article search result

## newsSearchRead

Return news or article search result

### Response Class (Status 200)

* __{title}__: Used as a key word to search news and articles,

For more details on how news & articles are listed [see here][ref].
[ref]: https://etmdb.com/en/news-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NewsSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewsSearchReadRequest();
    $request->title = 'Mr.';

    $response = $sdk->news->newsSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
