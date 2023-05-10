# custom

### Available Operations

* [getAemHealthCheck](#getaemhealthcheck)
* [postConfigAemHealthCheckServlet](#postconfigaemhealthcheckservlet)
* [postConfigAemPasswordReset](#postconfigaempasswordreset)

## getAemHealthCheck

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAemHealthCheckRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAemHealthCheckRequest();
    $request->combineTagsOr = false;
    $request->tags = 'ipsum';

    $response = $sdk->custom->getAemHealthCheck($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConfigAemHealthCheckServlet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostConfigAemHealthCheckServletRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConfigAemHealthCheckServletRequest();
    $request->bundlesIgnored = [
        'aspernatur',
        'perferendis',
        'ad',
    ];
    $request->bundlesIgnoredAtTypeHint = 'natus';

    $response = $sdk->custom->postConfigAemHealthCheckServlet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConfigAemPasswordReset

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostConfigAemPasswordResetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostConfigAemPasswordResetRequest();
    $request->pwdresetAuthorizables = [
        'iste',
    ];
    $request->pwdresetAuthorizablesAtTypeHint = 'dolor';

    $response = $sdk->custom->postConfigAemPasswordReset($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
