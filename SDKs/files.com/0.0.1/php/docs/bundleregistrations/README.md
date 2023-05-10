# bundleRegistrations

## Overview

Operations about bundle_registrations

### Available Operations

* [getBundleRegistrations](#getbundleregistrations) - List Bundle Registrations

## getBundleRegistrations

List Bundle Registrations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBundleRegistrationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBundleRegistrationsRequest();
    $request->bundleId = 565421;
    $request->cursor = 'temporibus';
    $request->perPage = 183280;
    $request->userId = 204865;

    $response = $sdk->bundleRegistrations->getBundleRegistrations($request);

    if ($response->bundleRegistrationEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
