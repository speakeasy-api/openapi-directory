# discovery

### Available Operations

* [getNamespace](#getnamespace) - Get namespace
* [getNamespaces](#getnamespaces) - Get namespaces and repos

## getNamespace

Gets metadata associated with specified namespace, including extra repos associated with the namespace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamespaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamespaceRequest();
    $request->namespace = 'corrupti';

    $response = $sdk->discovery->getNamespace($request);

    if ($response->namespaceMetadata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamespaces

Gets a list of your namespaces and repos which have data available

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->discovery->getNamespaces();

    if ($response->namespaceData !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
