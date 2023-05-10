# SDK

## Overview

A web service containing utility functions available for merchants integrating with Checkout APIs.
## Authentication
Each request to the Checkout Utility API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the Checkout API key](https://docs.adyen.com/developers/user-management/how-to-get-the-checkout-api-key). Then set this key to the `X-API-Key` header value, for example:

```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: Your_Checkout_API_key" \
...
```
Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/developers/api-reference/live-endpoints).

## Versioning
Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://checkout-test.adyen.com/v1/originKeys
```

### Available Operations

* [postOriginKeys](#postoriginkeys) - Create originKey values for one or more merchant domains.

## postOriginKeys

This operation takes the origin domains and returns a JSON object containing the corresponding origin keys for the domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CheckoutUtilityRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckoutUtilityRequest();
    $request->originDomains = [
        'nulla',
        'corrupti',
        'illum',
    ];

    $response = $sdk->sdk->postOriginKeys($request);

    if ($response->checkoutUtilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
