# firmware

### Available Operations

* [getAccounts](#getaccounts) - Get default accounts and password hashes of a firmware
* [getConfigIssues](#getconfigissues) - Get default OS configuration issues of a device firmware
* [getExpiredCerts](#getexpiredcerts) - Get expired digital certificates embedded in a device firmware
* [getPrivateKeys](#getprivatekeys) - Get private crypto keys embedded in a device firmware
* [getRisk](#getrisk) - Get iot device firmware risk analysis
* [getWeakCerts](#getweakcerts) - Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
* [getWeakKeys](#getweakkeys) - Get weak crypto keys with short length

## getAccounts

Get default accounts and password hashes of a firmware

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountsRequest();
    $request->firmwareHash = 'af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175';

    $requestSecurity = new GetAccountsSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->firmware->getAccounts($request, $requestSecurity);

    if ($response->defaultAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigIssues

Get default OS configuration issues of a device firmware

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigIssuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigIssuesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigIssuesRequest();
    $request->firmwareHash = 'aa96e4d41a4b0ceb3f1ae4d94f3cb445621b9501e3a9c69e6b9eb37c5888a03c';

    $requestSecurity = new GetConfigIssuesSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->firmware->getConfigIssues($request, $requestSecurity);

    if ($response->configIssues !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getExpiredCerts

Get expired digital certificates embedded in a device firmware

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetExpiredCertsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetExpiredCertsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetExpiredCertsRequest();
    $request->firmwareHash = 'ac7c090c34338ea6a3b335004755e24578e7e4eee739c5c33736f0822b64907e';

    $requestSecurity = new GetExpiredCertsSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->firmware->getExpiredCerts($request, $requestSecurity);

    if ($response->expiredCerts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPrivateKeys

Get private crypto keys embedded in a device firmware

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPrivateKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPrivateKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPrivateKeysRequest();
    $request->firmwareHash = '90e3e68e1c61850f20c50e551816d47d484d7feb46890f5bc0a0e0dab3e3ba0b';

    $requestSecurity = new GetPrivateKeysSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->firmware->getPrivateKeys($request, $requestSecurity);

    if ($response->cryptoKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRisk

Get iot device firmware risk analysis

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRiskRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRiskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRiskRequest();
    $request->firmwareHash = 'af88b1aaac0b222df8539f3ae1479b5c8eaeae41f1776b5dd2fa805cb33a1175';

    $requestSecurity = new GetRiskSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->firmware->getRisk($request, $requestSecurity);

    if ($response->firmwareRisk !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWeakCerts

Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWeakCertsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWeakCertsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWeakCertsRequest();
    $request->firmwareHash = '52841661d61e00649451cc471e9b56d169df8041926b1252bb3fd0710c27b12c';

    $requestSecurity = new GetWeakCertsSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->firmware->getWeakCerts($request, $requestSecurity);

    if ($response->weakCerts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWeakKeys

Get weak crypto keys with short length

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWeakKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWeakKeysSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWeakKeysRequest();
    $request->firmwareHash = '852031776c09f8152c90496f2c3fac85b46a938d20612d7fc03eea8aab46f23e';

    $requestSecurity = new GetWeakKeysSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->firmware->getWeakKeys($request, $requestSecurity);

    if ($response->cryptoKeys !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
