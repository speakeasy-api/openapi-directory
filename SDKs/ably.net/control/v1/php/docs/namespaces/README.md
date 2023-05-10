# namespaces

### Available Operations

* [deleteAppsAppIdNamespacesNamespaceId](#deleteappsappidnamespacesnamespaceid) - Deletes a namespace
* [getAppsAppIdNamespaces](#getappsappidnamespaces) - Lists namespaces
* [patchAppsAppIdNamespacesNamespaceId](#patchappsappidnamespacesnamespaceid) - Updates a namespace
* [postAppsAppIdNamespaces](#postappsappidnamespaces) - Creates a namespace

## deleteAppsAppIdNamespacesNamespaceId

Deletes a namespace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsAppIdNamespacesNamespaceIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsAppIdNamespacesNamespaceIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppsAppIdNamespacesNamespaceIdRequest();
    $request->appId = 'incidunt';
    $request->namespaceId = 'enim';

    $requestSecurity = new DeleteAppsAppIdNamespacesNamespaceIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->namespaces->deleteAppsAppIdNamespacesNamespaceId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppsAppIdNamespaces

Lists namespaces

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAppIdNamespacesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAppIdNamespacesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsAppIdNamespacesRequest();
    $request->appId = 'consequatur';

    $requestSecurity = new GetAppsAppIdNamespacesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->namespaces->getAppsAppIdNamespaces($request, $requestSecurity);

    if ($response->namespaceResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchAppsAppIdNamespacesNamespaceId

Updates a namespace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchAppsAppIdNamespacesNamespaceIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\NamespacePatch;
use \OpenAPI\OpenAPI\Models\Operations\PatchAppsAppIdNamespacesNamespaceIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchAppsAppIdNamespacesNamespaceIdRequest();
    $request->appId = 'est';
    $request->namespaceId = 'quibusdam';
    $request->namespacePatch = new NamespacePatch();
    $request->namespacePatch->authenticated = false;
    $request->namespacePatch->exposeTimeserial = false;
    $request->namespacePatch->persistLast = false;
    $request->namespacePatch->persisted = false;
    $request->namespacePatch->pushEnabled = false;
    $request->namespacePatch->tlsOnly = false;

    $requestSecurity = new PatchAppsAppIdNamespacesNamespaceIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->namespaces->patchAppsAppIdNamespacesNamespaceId($request, $requestSecurity);

    if ($response->namespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAppsAppIdNamespaces

Creates a namespace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdNamespacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\NamespacePost;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdNamespacesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAppsAppIdNamespacesRequest();
    $request->appId = 'explicabo';
    $request->namespacePost = new NamespacePost();
    $request->namespacePost->authenticated = false;
    $request->namespacePost->exposeTimeserial = false;
    $request->namespacePost->id = 'abd44269-802d-4502-a94b-b4f63c969e9a';
    $request->namespacePost->persistLast = false;
    $request->namespacePost->persisted = false;
    $request->namespacePost->pushEnabled = false;
    $request->namespacePost->tlsOnly = false;

    $requestSecurity = new PostAppsAppIdNamespacesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->namespaces->postAppsAppIdNamespaces($request, $requestSecurity);

    if ($response->namespaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
