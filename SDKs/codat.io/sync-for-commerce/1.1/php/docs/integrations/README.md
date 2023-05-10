# integrations

## Overview

View useful information about codat's integrations.

### Available Operations

* [getIntegrationBranding](#getintegrationbranding) - Get branding for an integration
* [listIntegrations](#listintegrations) - List information on Codat's supported integrations

## getIntegrationBranding

Retrieve Integration branding assets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIntegrationBrandingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntegrationBrandingRequest();
    $request->platformKey = 'ea';

    $response = $sdk->integrations->getIntegrationBranding($request);

    if ($response->branding !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIntegrations

Retrieve a list of available integrations support by datatype and state of release.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIntegrationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIntegrationsRequest();
    $request->orderBy = 'aliquid';
    $request->page = 675439;
    $request->pageSize = 881104;
    $request->query = 'non';

    $response = $sdk->integrations->listIntegrations($request);

    if ($response->integrations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
