# v1EinVerification

## Overview

US EIN tax number methods

### Available Operations

* [einVerificationBasic](#einverificationbasic) - Verifies an EIN number
* [einVerificationComprehensive](#einverificationcomprehensive) - Verifies EIN number and retrieves company data
* [einVerificationLookup](#einverificationlookup) - Retrieves a list of EIN numbers

## einVerificationBasic

Performs a basic verification check of a given EIN tax number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EinVerificationBasicRequest;
use \OpenAPI\OpenAPI\Models\Operations\EinVerificationBasicSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EinVerificationBasicRequest();
    $request->ein = 'omnis';

    $requestSecurity = new EinVerificationBasicSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1EinVerification->einVerificationBasic($request, $requestSecurity);

    if ($response->einVerificationBasic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## einVerificationComprehensive

Comprehensive verification of a given EIN number. Additionally to the basic verification it will lookup company details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EinVerificationComprehensiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\EinVerificationComprehensiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EinVerificationComprehensiveRequest();
    $request->ein = 'nemo';

    $requestSecurity = new EinVerificationComprehensiveSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1EinVerification->einVerificationComprehensive($request, $requestSecurity);

    if ($response->einVerificationComprehensive200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## einVerificationLookup

Lookup EIN number for a company by its company name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EinVerificationLookupRequest;
use \OpenAPI\OpenAPI\Models\Operations\EinVerificationLookupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EinVerificationLookupRequest();
    $request->name = 'minima';
    $request->state = 'excepturi';
    $request->tight = false;
    $request->zip = 'accusantium';

    $requestSecurity = new EinVerificationLookupSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1EinVerification->einVerificationLookup($request, $requestSecurity);

    if ($response->einVerificationLookup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
