# documentBlock

## Overview

DocumentBlock object represents your invoice pad.

### Available Operations

* [listDocumentBlock](#listdocumentblock) - List all document blocks

## listDocumentBlock

Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentBlockRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDocumentBlockRequest();
    $request->page = 60225;
    $request->perPage = 969810;

    $response = $sdk->documentBlock->listDocumentBlock($request);

    if ($response->documentBlockList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
