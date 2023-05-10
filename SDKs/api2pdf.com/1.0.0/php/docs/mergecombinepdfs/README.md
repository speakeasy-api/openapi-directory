# mergeCombinePdfs

### Available Operations

* [mergePost](#mergepost) - Merge multiple PDFs together

## mergePost

Merge two or more PDFs together on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\MergeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergeRequest();
    $request->fileName = 'test.pdf';
    $request->inlinePdf = true;
    $request->urls = [
        'quibusdam',
        'unde',
        'nulla',
    ];

    $response = $sdk->mergeCombinePdfs->mergePost($request);

    if ($response->apiResponseSuccess !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
