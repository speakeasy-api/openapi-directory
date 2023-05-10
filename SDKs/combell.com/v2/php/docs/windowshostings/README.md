# windowsHostings

## Overview

Manage your windows hostings.

### Available Operations

* [getWindowsHosting](#getwindowshosting) - Windows hosting detail
* [getWindowsHostings](#getwindowshostings) - Overview of windows hostings

## getWindowsHosting

Windows hosting detail

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWindowsHostingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWindowsHostingRequest();
    $request->domainNamePathParameter = 'et';
    $request->domainNameQueryParameter = 'saepe';

    $response = $sdk->windowsHostings->getWindowsHosting($request);

    if ($response->windowsHostingDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWindowsHostings

Overview of windows hostings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWindowsHostingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWindowsHostingsRequest();
    $request->skip = 217450;
    $request->take = 83422;

    $response = $sdk->windowsHostings->getWindowsHostings($request);

    if ($response->windowsHostings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
