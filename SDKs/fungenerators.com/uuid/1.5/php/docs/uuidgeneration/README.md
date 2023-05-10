# uuidGeneration

## Overview

Generate different versions of UUID easily.

Find out more
<https://fungenerators.com/api/uuid/>
### Available Operations

* [getUuid](#getuuid) - Generate a random UUID (v4).
* [getUuidVersionVersion](#getuuidversionversion) - Generate a random UUID (v4).

## getUuid

Generate a random UUID (v4).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUuidRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUuidSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUuidRequest();
    $request->count = 592845;

    $requestSecurity = new GetUuidSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->uuidGeneration->getUuid($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUuidVersionVersion

Generate a random UUID (v4).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUuidVersionVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUuidVersionVersionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUuidVersionVersionRequest();
    $request->count = 715190;
    $request->text = 'quibusdam';
    $request->type = 'unde';
    $request->version = 857946;

    $requestSecurity = new GetUuidVersionVersionSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->uuidGeneration->getUuidVersionVersion($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
