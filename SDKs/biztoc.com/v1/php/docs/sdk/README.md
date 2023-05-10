# SDK

## Overview

Get the latest business news articles.

### Available Operations

* [getNews](#getnews) - Retrieves the latest news whose content contains the query string.

## getNews

Retrieves the latest news whose content contains the query string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNewsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNewsRequest();
    $request->query = 'provident';

    $response = $sdk->sdk->getNews($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
