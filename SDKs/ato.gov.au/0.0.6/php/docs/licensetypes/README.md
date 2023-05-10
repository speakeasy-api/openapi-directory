# licenseTypes

## Overview

A classification scheme for licenses.


### Available Operations

* [getClassificationsLicenseTypes](#getclassificationslicensetypes) - Retrieve a list of license types

## getClassificationsLicenseTypes

Retrieve a list of license types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsLicenseTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsLicenseTypesRequest();
    $request->apiKey = 'vitae';

    $response = $sdk->licenseTypes->getClassificationsLicenseTypes($request);

    if ($response->licenseTypes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
