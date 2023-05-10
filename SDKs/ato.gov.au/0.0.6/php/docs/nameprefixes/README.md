# namePrefixes

## Overview

A classification scheme for names.


### Available Operations

* [getClassificationsNamePrefixes](#getclassificationsnameprefixes) - Retrieve a list of name prefixes

## getClassificationsNamePrefixes

Retrieve a list of name prefixes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetClassificationsNamePrefixesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassificationsNamePrefixesRequest();
    $request->apiKey = 'enim';

    $response = $sdk->namePrefixes->getClassificationsNamePrefixes($request);

    if ($response->namePrefixes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
