# readinglist

### Available Operations

* [getReadinglist](#getreadinglist) - Readinglist

## getReadinglist

This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.
        It supports pagination, each page will contain `30` articles by default

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReadinglistRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReadinglistRequest();
    $request->page = 820994;
    $request->perPage = 13571;

    $response = $sdk->readinglist->getReadinglist($request);

    if ($response->articleIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
