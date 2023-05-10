# configuration

## Overview

Expressively configure preferences for any given sync for commerce company.

### Available Operations

* [getConfiguration](#getconfiguration) - Retrieve config preferences set for a company.
* [getSyncStatus](#getsyncstatus) - Get status for a company's syncs
* [setConfiguration](#setconfiguration) - Create or update configuration.

## getConfiguration

Retrieve current config preferences.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigurationRequest();
    $request->companyId = 'da1ffe78-f097-4b00-b4f1-5471b5e6e13b';

    $response = $sdk->configuration->getConfiguration($request);

    if ($response->configuration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSyncStatus

Check the sync history and sync status for a company.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSyncStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSyncStatusRequest();
    $request->companyId = '99d488e1-e91e-4450-ad2a-bd44269802d5';

    $response = $sdk->configuration->getSyncStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setConfiguration

Make changes to configuration preferences.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetConfigurationRequest();
    $request->companyId = '02a94bb4-f63c-4969-a9a3-efa77dfb14cd';

    $response = $sdk->configuration->setConfiguration($request);

    if ($response->configuration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
