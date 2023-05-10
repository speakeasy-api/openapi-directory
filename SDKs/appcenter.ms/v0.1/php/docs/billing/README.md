# billing

### Available Operations

* [billingAggregatedInformationGetAll](#billingaggregatedinformationgetall) - Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.
* [billingAggregatedInformationGetByApp](#billingaggregatedinformationgetbyapp) - Aggregated Billing Information for owner of a given app.
* [billingAggregatedInformationGetForOrg](#billingaggregatedinformationgetfororg) - Aggregated Billing Information for a given Organization.

## billingAggregatedInformationGetAll

Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BillingAggregatedInformationGetAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\BillingAggregatedInformationGetAllPeriodEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingAggregatedInformationGetAllServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingAggregatedInformationGetAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingAggregatedInformationGetAllRequest();
    $request->period = BillingAggregatedInformationGetAllPeriodEnum::NEXT;
    $request->service = BillingAggregatedInformationGetAllServiceEnum::TEST;
    $request->showOriginalPlans = false;

    $requestSecurity = new BillingAggregatedInformationGetAllSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->billing->billingAggregatedInformationGetAll($request, $requestSecurity);

    if ($response->billingAggregatedInformationGetAll200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## billingAggregatedInformationGetByApp

Aggregated Billing Information for owner of a given app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BillingAggregatedInformationGetByAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\BillingAggregatedInformationGetByAppPeriodEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingAggregatedInformationGetByAppServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingAggregatedInformationGetByAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingAggregatedInformationGetByAppRequest();
    $request->appName = 'sapiente';
    $request->ownerName = 'consectetur';
    $request->period = BillingAggregatedInformationGetByAppPeriodEnum::CURRENT;
    $request->service = BillingAggregatedInformationGetByAppServiceEnum::BUILD;
    $request->showOriginalPlans = false;

    $requestSecurity = new BillingAggregatedInformationGetByAppSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->billing->billingAggregatedInformationGetByApp($request, $requestSecurity);

    if ($response->billingAggregatedInformationGetByApp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## billingAggregatedInformationGetForOrg

Aggregated Billing Information for a given Organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BillingAggregatedInformationGetForOrgRequest;
use \OpenAPI\OpenAPI\Models\Operations\BillingAggregatedInformationGetForOrgPeriodEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingAggregatedInformationGetForOrgServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillingAggregatedInformationGetForOrgSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingAggregatedInformationGetForOrgRequest();
    $request->orgName = 'provident';
    $request->period = BillingAggregatedInformationGetForOrgPeriodEnum::NEXT;
    $request->service = BillingAggregatedInformationGetForOrgServiceEnum::BUILD;
    $request->showOriginalPlans = false;

    $requestSecurity = new BillingAggregatedInformationGetForOrgSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->billing->billingAggregatedInformationGetForOrg($request, $requestSecurity);

    if ($response->billingAggregatedInformationGetForOrg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
