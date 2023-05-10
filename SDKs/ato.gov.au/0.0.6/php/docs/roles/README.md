# roles

## Overview

A classification scheme for the characteristics of relationships between parties (individuals and organisations).


### Available Operations

* [getClassificationsRoles](#getclassificationsroles) - Retrieve a list of roles

## getClassificationsRoles

Retrieve a list of roles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsRolesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsRolesRequest();
    $request->apiKey = 'deleniti';

    $response = $sdk->roles->getClassificationsRoles($request);

    if ($response->roles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
