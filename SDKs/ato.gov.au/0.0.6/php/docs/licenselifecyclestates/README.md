# licenseLifecycleStates

## Overview

A classification scheme for licenses.


### Available Operations

* [getClassificationsLicenseLifecycleStates](#getclassificationslicenselifecyclestates) - Retrieve a list of license lifecycle states

## getClassificationsLicenseLifecycleStates

Retrieve a list of license lifecycle states

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsLicenseLifecycleStatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsLicenseLifecycleStatesRequest();
    $request->apiKey = 'quis';

    $response = $sdk->licenseLifecycleStates->getClassificationsLicenseLifecycleStates($request);

    if ($response->licenseLifecycleStates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
