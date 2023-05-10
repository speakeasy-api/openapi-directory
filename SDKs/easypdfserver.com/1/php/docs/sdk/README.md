# SDK

## Overview

API for converting HTML to PDF.

### Available Operations

* [postMakePdf](#postmakepdf) - Generate a PDF from HTML or URL.

## postMakePdf

Generate a PDF from HTML or URL.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMakePdfRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMakePdfRequestBody();
    $request->html = 'quibusdam';
    $request->key = 'unde';
    $request->url = 'nulla';

    $response = $sdk->sdk->postMakePdf($request);

    if ($response->postMakePdf200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
