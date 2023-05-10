# apiKey

## Overview

Operations about api_keys

### Available Operations

* [apiKeyDeleteCurrent](#apikeydeletecurrent) - Delete current API key.  (Requires current API connection to be using an API key.)
* [apiKeyFindCurrent](#apikeyfindcurrent) - Show information about current API key.  (Requires current API connection to be using an API key.)
* [apiKeyUpdateCurrent](#apikeyupdatecurrent) - Update current API key.  (Requires current API connection to be using an API key.)

## apiKeyDeleteCurrent

Delete current API key.  (Requires current API connection to be using an API key.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apiKey->apiKeyDeleteCurrent();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiKeyFindCurrent

Show information about current API key.  (Requires current API connection to be using an API key.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->apiKey->apiKeyFindCurrent();

    if ($response->apiKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## apiKeyUpdateCurrent

Update current API key.  (Requires current API connection to be using an API key.)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeyUpdateCurrentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ApiKeyUpdateCurrentRequestBodyPermissionSetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiKeyUpdateCurrentRequestBody();
    $request->expiresAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->name = 'My Main API Key';
    $request->permissionSet = ApiKeyUpdateCurrentRequestBodyPermissionSetEnum::FULL;

    $response = $sdk->apiKey->apiKeyUpdateCurrent($request);

    if ($response->apiKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
