# ssoStrategies

## Overview

Operations about sso_strategies

### Available Operations

* [getSsoStrategies](#getssostrategies) - List Sso Strategies
* [getSsoStrategiesId](#getssostrategiesid) - Show Sso Strategy
* [postSsoStrategiesIdSync](#postssostrategiesidsync) - Synchronize provisioning data with the SSO remote server.

## getSsoStrategies

List Sso Strategies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSsoStrategiesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSsoStrategiesRequest();
    $request->cursor = 'dolor';
    $request->perPage = 856277;

    $response = $sdk->ssoStrategies->getSsoStrategies($request);

    if ($response->ssoStrategyEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSsoStrategiesId

Show Sso Strategy

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSsoStrategiesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSsoStrategiesIdRequest();
    $request->id = 369490;

    $response = $sdk->ssoStrategies->getSsoStrategiesId($request);

    if ($response->ssoStrategyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSsoStrategiesIdSync

Synchronize provisioning data with the SSO remote server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSsoStrategiesIdSyncRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSsoStrategiesIdSyncRequest();
    $request->id = 162120;

    $response = $sdk->ssoStrategies->postSsoStrategiesIdSync($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
