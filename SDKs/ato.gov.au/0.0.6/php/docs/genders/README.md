# genders

## Overview

A classification scheme for the representation of human sexes.


### Available Operations

* [getClassificationsGenders](#getclassificationsgenders) - Retrieve a list of genders

## getClassificationsGenders

Retrieve a list of genders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsGendersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsGendersRequest();
    $request->apiKey = 'nulla';

    $response = $sdk->genders->getClassificationsGenders($request);

    if ($response->genders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
