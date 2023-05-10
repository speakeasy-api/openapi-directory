# SDK

## Overview

Analyzes a password and calculates its entropy.

### Available Operations

* [getAbout](#getabout) - Metadata about this API&#58; version number, release date and available languages.

Metadata requests are NOT billed.

* [getEc](#getec) - The entropy calculator - alias ec -, analyzes a password and calculates its entropy.

Entropy calculator requests are billed.


## getAbout

Metadata about this API&#58; version number, release date and available languages.

Metadata requests are NOT billed.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAboutRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAboutRequest();
    $request->outputFormat = 'provident';

    $response = $sdk->sdk->getAbout($request);

    if ($response->about !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEc

The entropy calculator - alias ec -, analyzes a password and calculates its entropy.

Entropy calculator requests are billed.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEcRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEcRequest();
    $request->outputFormat = 'distinctio';
    $request->password = 'quibusdam';
    $request->penalty = 6027.63;
    $request->reqId = 'nulla';

    $response = $sdk->sdk->getEc($request);

    if ($response->ec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
