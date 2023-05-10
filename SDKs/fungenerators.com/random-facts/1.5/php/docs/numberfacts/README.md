# numberFacts

## Overview

Get a random interesting fact about a number.

Find out more
<http://fungenerators.com/api/facts#number>
### Available Operations

* [getFactNumbers](#getfactnumbers) - Get a random fact about a number

## getFactNumbers

Get a random fact about a number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFactNumbersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFactNumbersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFactNumbersRequest();
    $request->number = 715190;

    $requestSecurity = new GetFactNumbersSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->numberFacts->getFactNumbers($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
