# serviceMediaTabularExtractsheet

## Overview

 API for Extract sheets

### Available Operations

* [mediaTabularExtractsheet](#mediatabularextractsheet) - API for Extract sheets

## mediaTabularExtractsheet

API to call: Extract sheets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MediaTabularExtractsheetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MediaTabularExtractsheetRequest();
    $request->arg1 = 'quibusdam';
    $request->entryid = 'unde';
    $request->output = 'nulla';

    $response = $sdk->serviceMediaTabularExtractsheet->mediaTabularExtractsheet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
