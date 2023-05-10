# crx

### Available Operations

* [getCrxdeStatus](#getcrxdestatus)
* [getInstallStatus](#getinstallstatus)
* [getPackageManagerServlet](#getpackagemanagerservlet)
* [postPackageService](#postpackageservice)
* [postPackageServiceJson](#postpackageservicejson)
* [postPackageUpdate](#postpackageupdate)
* [postSetPassword](#postsetpassword)

## getCrxdeStatus

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
    $response = $sdk->crx->getCrxdeStatus();

    if ($response->getCrxdeStatus200PlainTextString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstallStatus

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
    $response = $sdk->crx->getInstallStatus();

    if ($response->installStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPackageManagerServlet

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
    $response = $sdk->crx->getPackageManagerServlet();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPackageService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPackageServiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPackageServiceRequest();
    $request->cmd = 'dolorum';

    $response = $sdk->crx->postPackageService($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPackageServiceJson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPackageServiceJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostPackageServiceJsonRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostPackageServiceJsonRequestBodyPackage;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPackageServiceJsonRequest();
    $request->requestBody = new PostPackageServiceJsonRequestBody();
    $request->requestBody->package = new PostPackageServiceJsonRequestBodyPackage();
    $request->requestBody->package->content = 'dicta';
    $request->requestBody->package->package = 'nam';
    $request->charset = 'officia';
    $request->cmd = 'occaecati';
    $request->force = false;
    $request->groupName = 'fugit';
    $request->packageName = 'deleniti';
    $request->packageVersion = 'hic';
    $request->path = 'optio';
    $request->recursive = false;

    $response = $sdk->crx->postPackageServiceJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPackageUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostPackageUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPackageUpdateRequest();
    $request->charset = 'totam';
    $request->filter = 'beatae';
    $request->groupName = 'commodi';
    $request->packageName = 'molestiae';
    $request->path = 'modi';
    $request->version = 'qui';

    $response = $sdk->crx->postPackageUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetPassword

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSetPasswordRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSetPasswordRequest();
    $request->old = 'impedit';
    $request->plain = 'cum';
    $request->verify = 'esse';

    $response = $sdk->crx->postSetPassword($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
