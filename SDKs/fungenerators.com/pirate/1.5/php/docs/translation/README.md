# translation

## Overview

Translate to pirate lingo

Find out more
<http://fungenerators.com/api/pirate/>
### Available Operations

* [getPirateTranslate](#getpiratetranslate) - Translate from English to pirate.

## getPirateTranslate

Translate from English to pirate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPirateTranslateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPirateTranslateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPirateTranslateRequest();
    $request->text = 'corrupti';

    $requestSecurity = new GetPirateTranslateSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->translation->getPirateTranslate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
