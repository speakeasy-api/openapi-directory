# v1IbanVerification

## Overview

IBAN Verification methods

### Available Operations

* [ibanBasic](#ibanbasic) - Checks validity of an IBAN number
* [ibanComprehensive](#ibancomprehensive) - Checks validity of an IBAN number

## ibanBasic

Basic verification of an IBAN number validating its structure

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IbanBasicRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\IbanBasicSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IbanBasicRequestBody();
    $request->ibanNumber = 'AT483200000012345864';

    $requestSecurity = new IbanBasicSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1IbanVerification->ibanBasic($request, $requestSecurity);

    if ($response->ibanBasic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ibanComprehensive

Comprehensive verification of IBAN number using a service provider for verification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IbanComprehensiveRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\IbanComprehensiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IbanComprehensiveRequestBody();
    $request->ibanNumber = 'AT483200000012345864';

    $requestSecurity = new IbanComprehensiveSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1IbanVerification->ibanComprehensive($request, $requestSecurity);

    if ($response->oneapi1v11ibanVerification1checkIbanPostResponses200ContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
