# v1VatVerification

## Overview

VAT Verification methods

### Available Operations

* [vatBasic](#vatbasic) - Returns a verification result
* [vatComprehensive](#vatcomprehensive) - Returns a verification result and company data
* [vatLevelTwo](#vatleveltwo) - Returns a level two verification result
* [vatLookup](#vatlookup) - Returns a list of vat numbers with additional data

## vatBasic

Basic verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VatBasicRequest;
use \OpenAPI\OpenAPI\Models\Operations\VatBasicRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\VatBasicSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VatBasicRequest();
    $request->requestBody = new VatBasicRequestBody();
    $request->requestBody->companyAddress = 'reiciendis';
    $request->requestBody->companyName = 'voluptatibus';
    $request->requestBody->companyNumber = 'vero';
    $request->requestBody->vatNumber = 'nihil';
    $request->country = 'praesentium';

    $requestSecurity = new VatBasicSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1VatVerification->vatBasic($request, $requestSecurity);

    if ($response->vatBasic200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vatComprehensive

Extended verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VatComprehensiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\VatComprehensiveRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\VatComprehensiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VatComprehensiveRequest();
    $request->requestBody = new VatComprehensiveRequestBody();
    $request->requestBody->companyAddress = 'voluptatibus';
    $request->requestBody->companyName = 'ipsa';
    $request->requestBody->companyNumber = 'omnis';
    $request->requestBody->vatNumber = 'voluptate';
    $request->country = 'cum';

    $requestSecurity = new VatComprehensiveSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1VatVerification->vatComprehensive($request, $requestSecurity);

    if ($response->vatComprehensive200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vatLevelTwo

Second Level Verification of VAT number against BMF Austria. Optional confirmation parameter can be provided to order a Confirmation Report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VatLevelTwoRequest;
use \OpenAPI\OpenAPI\Models\Operations\VatLevelTwoRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\VatLevelTwoSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VatLevelTwoRequest();
    $request->requestBody = new VatLevelTwoRequestBody();
    $request->requestBody->confirmation = false;
    $request->requestBody->vatNumber = 'perferendis';
    $request->country = 'doloremque';

    $requestSecurity = new VatLevelTwoSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1VatVerification->vatLevelTwo($request, $requestSecurity);

    if ($response->vatLevelTwo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## vatLookup

Reverse VAT Lookup: Search for companies and their VAT numbers by company name. Search is forwarded to a provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VatLookupRequest;
use \OpenAPI\OpenAPI\Models\Operations\VatLookupRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\VatLookupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VatLookupRequest();
    $request->requestBody = new VatLookupRequestBody();
    $request->requestBody->address = 'null';
    $request->requestBody->name = 'null';
    $request->country = 'reprehenderit';

    $requestSecurity = new VatLookupSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1VatVerification->vatLookup($request, $requestSecurity);

    if ($response->vatLookup200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
