# me

## Overview

The `Me` endpoint returns metadata about the authenticated User.

### Available Operations

* [disconnectVendor](#disconnectvendor) - Disconnect Vendor
* [getMe](#getme) - Get My User

## disconnectVendor

Disconnect a single Vendor from the User's account.

All stored data about their Vendor account will be deleted, and any vehicles that were provided by that Vendor will disappear from the system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectVendorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectVendorVendorEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisconnectVendorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisconnectVendorRequest();
    $request->vendor = DisconnectVendorVendorEnum::TESLA;

    $requestSecurity = new DisconnectVendorSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->me->disconnectVendor($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMe

Returns metadata about the authenticated User, including a list of vendors for which the user has provided credentials.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetMeSecurity();
    $requestSecurity->userAccessToken = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->me->getMe($requestSecurity);

    if ($response->getMe200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
