# businessNameLifecycleStates

## Overview

A classification scheme for business names.


### Available Operations

* [getClassificationsBusinessNameLifecycleStates](#getclassificationsbusinessnamelifecyclestates) - Retrieve a list of business name lifecycle states

## getClassificationsBusinessNameLifecycleStates

Retrieve a list of business name lifecycle states

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsBusinessNameLifecycleStatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsBusinessNameLifecycleStatesRequest();
    $request->apiKey = 'distinctio';

    $response = $sdk->businessNameLifecycleStates->getClassificationsBusinessNameLifecycleStates($request);

    if ($response->businessNameLifecycleStates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
