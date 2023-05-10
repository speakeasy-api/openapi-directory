# credentials

## Overview

Game Credentials Rest V 2 Controller

### Available Operations

* [updateCredentialSecretUsingPOST](#updatecredentialsecretusingpost) - Resets the secret of a credential

## updateCredentialSecretUsingPOST

Resets the secret of a credential

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCredentialSecretUsingPOSTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCredentialSecretUsingPOSTRequest();
    $request->apiKey = 'modi';
    $request->credentialName = 'qui';

    $response = $sdk->credentials->updateCredentialSecretUsingPOST($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
