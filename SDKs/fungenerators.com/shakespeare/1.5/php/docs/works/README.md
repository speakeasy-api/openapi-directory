# works

## Overview

Get Shakespeare Works via API

Find out more
<http://fungenerators.com/api/shakespeare/>
### Available Operations

* [getShakespeareQuote](#getshakespearequote) - Get a random Shakespeare quote.

## getShakespeareQuote

Get a random Shakespeare quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetShakespeareQuoteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetShakespeareQuoteSecurity();
    $requestSecurity->xFungeneratorsApiSecret = 'YOUR_API_KEY_HERE';

    $response = $sdk->works->getShakespeareQuote($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
