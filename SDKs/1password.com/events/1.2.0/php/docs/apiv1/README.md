# apiV1

### Available Operations

* [getAuditEvents](#getauditevents) - Retrieves audit events for actions performed by team members within a 1Password account
* [getItemUsages](#getitemusages) - Retrieves events for each usage of an item stored in a shared vault within a 1Password account
* [getSignInAttempts](#getsigninattempts) - Retrieves events for both successful and failed attempts to sign into a 1Password account

## getAuditEvents

This endpoint requires your JSON Web Token to have the *auditevents* feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAuditEventsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetCursor();
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-11T16:32:50-03:00');
    $request->limit = 8442.66;
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-11T16:32:50-03:00');

    $requestSecurity = new GetAuditEventsSecurity();
    $requestSecurity->jwtsa = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->apiV1->getAuditEvents($request, $requestSecurity);

    if ($response->getAuditEvents200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemUsages

This endpoint requires your JSON Web Token to have the *itemusages* feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemUsagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetCursor();
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-11T16:32:50-03:00');
    $request->limit = 8579.46;
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-11T16:32:50-03:00');

    $requestSecurity = new GetItemUsagesSecurity();
    $requestSecurity->jwtsa = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->apiV1->getItemUsages($request, $requestSecurity);

    if ($response->getItemUsages200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSignInAttempts

This endpoint requires your JSON Web Token to have the *signinattempts* feature.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSignInAttemptsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetCursor();
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-11T16:32:50-03:00');
    $request->limit = 8472.52;
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-11T16:32:50-03:00');

    $requestSecurity = new GetSignInAttemptsSecurity();
    $requestSecurity->jwtsa = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->apiV1->getSignInAttempts($request, $requestSecurity);

    if ($response->getSignInAttempts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
