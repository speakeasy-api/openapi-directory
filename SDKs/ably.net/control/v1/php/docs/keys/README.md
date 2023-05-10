# keys

### Available Operations

* [getAppsAppIdKeys](#getappsappidkeys) - Lists app keys
* [patchAppsAppIdKeysKeyId](#patchappsappidkeyskeyid) - Updates a key
* [postAppsAppIdKeys](#postappsappidkeys) - Creates a key
* [postAppsAppIdKeysKeyIdRevoke](#postappsappidkeyskeyidrevoke) - Revokes a key

## getAppsAppIdKeys

Lists app keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAppIdKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAppIdKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsAppIdKeysRequest();
    $request->appId = 'voluptate';

    $requestSecurity = new GetAppsAppIdKeysSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->keys->getAppsAppIdKeys($request, $requestSecurity);

    if ($response->keyResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchAppsAppIdKeysKeyId

Updates a key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchAppsAppIdKeysKeyIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\KeyPatch;
use \OpenAPI\OpenAPI\Models\Operations\PatchAppsAppIdKeysKeyIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchAppsAppIdKeysKeyIdRequest();
    $request->appId = 'cum';
    $request->keyId = 'perferendis';
    $request->keyPatch = new KeyPatch();
    $request->keyPatch->capability = [
        'reprehenderit' => [
            'maiores',
            'dicta',
        ],
    ];
    $request->keyPatch->name = 'Miss Valerie Kshlerin';

    $requestSecurity = new PatchAppsAppIdKeysKeyIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->keys->patchAppsAppIdKeysKeyId($request, $requestSecurity);

    if ($response->keyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAppsAppIdKeys

Creates a key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\KeyPost;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAppsAppIdKeysRequest();
    $request->appId = 'accusamus';
    $request->keyPost = new KeyPost();
    $request->keyPost->capability = [
        'repudiandae' => [
            'ipsum',
        ],
        'quidem' => [
            'excepturi',
            'pariatur',
            'modi',
        ],
    ];
    $request->keyPost->name = 'Dr. Jordan Von';

    $requestSecurity = new PostAppsAppIdKeysSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->keys->postAppsAppIdKeys($request, $requestSecurity);

    if ($response->keyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAppsAppIdKeysKeyIdRevoke

Revokes a key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdKeysKeyIdRevokeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdKeysKeyIdRevokeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAppsAppIdKeysKeyIdRevokeRequest();
    $request->appId = 'veritatis';
    $request->keyId = 'itaque';

    $requestSecurity = new PostAppsAppIdKeysKeyIdRevokeSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->keys->postAppsAppIdKeysKeyIdRevoke($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
