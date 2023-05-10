# businessNames

## Overview

A business name is a name or title under which a person or organisation conducts a business.


### Available Operations

* [getBusinessNames](#getbusinessnames) - Retrieve a list of business names

## getBusinessNames

Retrieve a list of business names


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBusinessNamesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBusinessNamesRequest();
    $request->apiKey = 'quibusdam';

    $response = $sdk->businessNames->getBusinessNames($request);

    if ($response->businessNames !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
