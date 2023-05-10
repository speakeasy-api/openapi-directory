# v1NifVerification

## Overview

NIF Verification methods

### Available Operations

* [nifBasic](#nifbasic) - Verifies a NIF number
* [nifComprehensive](#nifcomprehensive) - Verifies a NIF number and retrieves company data

## nifBasic

Performs a basic verification check of a given NIF tax number against NIF.com. Optional parameters may be added to improve calculation of confidence score.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NifBasicRequest;
use \OpenAPI\OpenAPI\Models\Operations\NifBasicRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\NifBasicSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NifBasicRequest();
    $request->requestBody = new NifBasicRequestBody();
    $request->requestBody->companyAddress = 'iure';
    $request->requestBody->companyName = 'culpa';
    $request->requestBody->nifNumber = 'doloribus';
    $request->country = 'sapiente';

    $requestSecurity = new NifBasicSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1NifVerification->nifBasic($request, $requestSecurity);

    if ($response->nifBasic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## nifComprehensive

Comprehensive verification of given portuguese NIF number against NIF.com. Optional parameters may help to build a better confidence score. Additional company data will be provided.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NifComprehensiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\NifComprehensiveRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\NifComprehensiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NifComprehensiveRequest();
    $request->requestBody = new NifComprehensiveRequestBody();
    $request->requestBody->companyAddress = 'architecto';
    $request->requestBody->companyName = 'mollitia';
    $request->requestBody->nifNumber = 'dolorem';
    $request->country = 'culpa';

    $requestSecurity = new NifComprehensiveSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1NifVerification->nifComprehensive($request, $requestSecurity);

    if ($response->nifComprehensive200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
