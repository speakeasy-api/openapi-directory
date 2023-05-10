# translation

## Overview

Translate to Shakespeare English

Find out more
<http://fungenerators.com/api/shakespeare/>
### Available Operations

* [getShakespeareTranslate](#getshakespearetranslate) - Translate from English to Shakespeare English.

## getShakespeareTranslate

Translate from English to Shakespeare English.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShakespeareTranslateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetShakespeareTranslateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShakespeareTranslateRequest();
    $request->text = 'corrupti';

    $requestSecurity = new GetShakespeareTranslateSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->translation->getShakespeareTranslate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
