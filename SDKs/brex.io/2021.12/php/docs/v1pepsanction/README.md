# v1Pepsanction

## Overview

Pep Sanction Check methods

### Available Operations

* [pepMonitorList](#pepmonitorlist) - Retrieves a list of monitor entries
* [pepMonitorUnregister](#pepmonitorunregister) - Deactive a pep sanction monitor
* [pepMonitorUpdate](#pepmonitorupdate) - Update details of active Pep Sanction monitor
* [pepOrder](#peporder) - Orders a new Pep Sanction Check Report
* [pepRetrieve](#pepretrieve) - Returns a json or pdf report

## pepMonitorList

Retrieve a list of all active Pep Sanction Report monitors for this account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PepMonitorListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PepMonitorListSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Pepsanction->pepMonitorList($requestSecurity);

    if ($response->pepMonitorList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pepMonitorUnregister

Unregister a previously created Pep Sanction Report Monitor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PepMonitorUnregisterRequest;
use \OpenAPI\OpenAPI\Models\Operations\PepMonitorUnregisterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PepMonitorUnregisterRequest();
    $request->id = 'consequuntur';

    $requestSecurity = new PepMonitorUnregisterSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Pepsanction->pepMonitorUnregister($request, $requestSecurity);

    if ($response->pepMonitorUnregister200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pepMonitorUpdate

Update the webhook URL of an active Pep Sanction Report Monitor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PepMonitorUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PepMonitorUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PepMonitorUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PepMonitorUpdateRequest();
    $request->requestBody = new PepMonitorUpdateRequestBody();
    $request->requestBody->webhook = 'null';
    $request->id = 'repellat';

    $requestSecurity = new PepMonitorUpdateSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Pepsanction->pepMonitorUpdate($request, $requestSecurity);

    if ($response->pepMonitorUpdate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pepOrder

Order a new Pep Sanction Check by providing either a business or person name with some additional optional parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PepOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\PepOrderRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PepOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PepOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PepOrderRequest();
    $request->requestBody = new PepOrderRequestBody();
    $request->requestBody->aliases = 'null';
    $request->requestBody->country = 'null';
    $request->requestBody->dob = 'null';
    $request->requestBody->familyName = 'null';
    $request->requestBody->filters = 'null';
    $request->requestBody->givenName = 'null';
    $request->requestBody->lei = 'null';
    $request->requestBody->locale = 'null';
    $request->requestBody->medialists = 'NMEDIA';
    $request->requestBody->middleName = 'null';
    $request->requestBody->monitoring = false;
    $request->requestBody->peplists = 'GOV,PEPD,SOE';
    $request->requestBody->region = 'null';
    $request->requestBody->smartMatch = false;
    $request->requestBody->watchlists = 'SANCTIONS,FINANCE,TERRORISM,CRIME,SMAGOV,OFAC,MEDICAL';
    $request->requestBody->webhook = 'null';
    $request->search = 'mollitia';
    $request->type = PepOrderTypeEnum::B;

    $requestSecurity = new PepOrderSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Pepsanction->pepOrder($request, $requestSecurity);

    if ($response->pepOrder200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pepRetrieve

Retrieve a completed Pep Sanction check structured or in pdf depending on given accept header

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PepRetrieveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PepRetrieveAcceptEnum;
use \OpenAPI\OpenAPI\Models\Operations\PepRetrieveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PepRetrieveRequest();
    $request->accept = PepRetrieveAcceptEnum::APPLICATION_JSON;
    $request->id = 'commodi';

    $requestSecurity = new PepRetrieveSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Pepsanction->pepRetrieve($request, $requestSecurity);

    if ($response->pepRetrieve200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
