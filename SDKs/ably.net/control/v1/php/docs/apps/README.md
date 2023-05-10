# apps

### Available Operations

* [deleteAppsId](#deleteappsid) - Deletes an app
* [getAccountsAccountIdApps](#getaccountsaccountidapps) - Lists account apps
* [patchAppsId](#patchappsid) - Updates an app
* [postAccountsAccountIdApps](#postaccountsaccountidapps) - Creates an app
* [postAppsIdPkcs12](#postappsidpkcs12) - Updates app's APNS info from a .p12 file

## deleteAppsId

Deletes an app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppsIdRequest();
    $request->id = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $requestSecurity = new DeleteAppsIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->apps->deleteAppsId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountsAccountIdApps

Lists account apps

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdAppsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsAccountIdAppsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsAccountIdAppsRequest();
    $request->accountId = 'impedit';

    $requestSecurity = new GetAccountsAccountIdAppsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->apps->getAccountsAccountIdApps($request, $requestSecurity);

    if ($response->appResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchAppsId

Updates an app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchAppsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppPatch;
use \OpenAPI\OpenAPI\Models\Operations\PatchAppsIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchAppsIdRequest();
    $request->appPatch = new AppPatch();
    $request->appPatch->apnsCertificate = 'cum';
    $request->appPatch->apnsPrivateKey = 'esse';
    $request->appPatch->apnsUseSandboxEndpoint = false;
    $request->appPatch->fcmKey = 'ipsum';
    $request->appPatch->name = 'Brandon Auer';
    $request->appPatch->status = 'sed';
    $request->appPatch->tlsOnly = false;
    $request->id = '9396fea7-596e-4b10-baaa-2352c5955907';

    $requestSecurity = new PatchAppsIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->apps->patchAppsId($request, $requestSecurity);

    if ($response->appResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAccountsAccountIdApps

Creates an app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountsAccountIdAppsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppPost;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountsAccountIdAppsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAccountsAccountIdAppsRequest();
    $request->accountId = 'culpa';
    $request->appPost = new AppPost();
    $request->appPost->apnsCertificate = 'doloribus';
    $request->appPost->apnsPrivateKey = 'sapiente';
    $request->appPost->apnsUseSandboxEndpoint = false;
    $request->appPost->fcmKey = 'architecto';
    $request->appPost->name = 'Mike Nicolas';
    $request->appPost->status = 'mollitia';
    $request->appPost->tlsOnly = false;

    $requestSecurity = new PostAccountsAccountIdAppsSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->apps->postAccountsAccountIdApps($request, $requestSecurity);

    if ($response->appResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAppsIdPkcs12

Updates app's APNS info from a .p12 file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsIdPkcs12Request;
use \OpenAPI\OpenAPI\Models\Shared\AppPkcs12;
use \OpenAPI\OpenAPI\Models\Shared\AppPkcs12P12File;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsIdPkcs12Security;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAppsIdPkcs12Request();
    $request->appPkcs12 = new AppPkcs12();
    $request->appPkcs12->p12File = new AppPkcs12P12File();
    $request->appPkcs12->p12File->content = 'occaecati';
    $request->appPkcs12->p12File->p12File = 'numquam';
    $request->appPkcs12->p12Pass = 'commodi';
    $request->id = '7739251a-a52c-43f5-ad01-9da1ffe78f09';

    $requestSecurity = new PostAppsIdPkcs12Security();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->apps->postAppsIdPkcs12($request, $requestSecurity);

    if ($response->appResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
