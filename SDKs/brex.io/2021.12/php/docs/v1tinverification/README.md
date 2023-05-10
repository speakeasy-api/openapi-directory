# v1TinVerification

## Overview

TIN Verification methods

### Available Operations

* [tinVerificationBasicCheck](#tinverificationbasiccheck) - Verifies a TIN number
* [tinVerificationComprehensiveCheck](#tinverificationcomprehensivecheck) - EIN Name Lookup with TIN number and retrieves company data
* [tinVerificationNameLookup](#tinverificationnamelookup) - EIN Name Lookup with TIN number

## tinVerificationBasicCheck

Performs a basic verification check of a given TIN number and name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TinVerificationBasicCheckRequest;
use \OpenAPI\OpenAPI\Models\Operations\TinVerificationBasicCheckSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TinVerificationBasicCheckRequest();
    $request->name = 'aut';
    $request->tin = 'quasi';

    $requestSecurity = new TinVerificationBasicCheckSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1TinVerification->tinVerificationBasicCheck($request, $requestSecurity);

    if ($response->tinVerificationBasicCheck200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tinVerificationComprehensiveCheck

Performs an EIN name match using provided TIN Number. Additionally to the name lookup it will lookup company details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TinVerificationComprehensiveCheckRequest;
use \OpenAPI\OpenAPI\Models\Operations\TinVerificationComprehensiveCheckSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TinVerificationComprehensiveCheckRequest();
    $request->name = 'error';
    $request->threshold = 837945;
    $request->tin = 'laborum';

    $requestSecurity = new TinVerificationComprehensiveCheckSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1TinVerification->tinVerificationComprehensiveCheck($request, $requestSecurity);

    if ($response->tinVerificationComprehensiveCheck200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tinVerificationNameLookup

Performs an EIN name match using provided TIN Number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TinVerificationNameLookupRequest;
use \OpenAPI\OpenAPI\Models\Operations\TinVerificationNameLookupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TinVerificationNameLookupRequest();
    $request->tin = 'quasi';

    $requestSecurity = new TinVerificationNameLookupSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1TinVerification->tinVerificationNameLookup($request, $requestSecurity);

    if ($response->tinVerificationNameLookup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
