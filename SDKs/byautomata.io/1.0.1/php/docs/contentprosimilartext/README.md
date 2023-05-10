# contentproSimilarText

### Available Operations

* [postContentproSimilarText](#postcontentprosimilartext) - The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.

## postContentproSimilarText

The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContentproSimilarTextRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContentproSimilarTextRequestBody();
    $request->text = 'distinctio';

    $response = $sdk->contentproSimilarText->postContentproSimilarText($request);

    if ($response->postContentproSimilarText200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
