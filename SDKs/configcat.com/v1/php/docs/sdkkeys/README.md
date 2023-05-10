# sdkKeys

## Overview

With these endpoints you can manage your SDK Keys.

### Available Operations

* [getSDKKeys](#getsdkkeys) - Get SDK Key

## getSDKKeys

This endpoint returns the SDK Key for your Config in a specified Environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSDKKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSDKKeysRequest();
    $request->configId = '59eac55a-9741-4d31-9352-965bb8a72026';
    $request->environmentId = '11435e13-9dbc-4225-9b1a-bda8c070e108';

    $response = $sdk->sdkKeys->getSDKKeys($request);

    if ($response->sdkKeysModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
