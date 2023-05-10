# bt

### Available Operations

* [assignToken](#assigntoken) - Assigns an UserToken to a profile on the ITV side. Currently throws an exception.
* [checkEeBtEligibility](#checkeebteligibility) - Check whether or not a user is eligible for switching to Bt or EE offers.
* [checkUserToken](#checkusertoken) - Checks a provided token for BT eligible user.

* [getPlanByToken](#getplanbytoken) - Returns all the plans available for BT flow including additional description data.
* [getPlans](#getplans) - Returns all the plans available for BT flow including additional description data.

## assignToken

Assigns an UserToken to a profile on the ITV side. Currently throws an exception.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AssignTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvAssignBtTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssignTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignTokenRequest();
    $request->itvAssignBtTokenRequest = new ItvAssignBtTokenRequest();
    $request->itvAssignBtTokenRequest->profileToken = 'aut';
    $request->itvAssignBtTokenRequest->token = 'voluptatum';
    $request->lang = 'qui';

    $requestSecurity = new AssignTokenSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bt->assignToken($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkEeBtEligibility

Check whether or not a user is eligible for switching to Bt or EE offers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CheckEeBtEligibilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\CheckEeBtEligibilitySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckEeBtEligibilityRequest();
    $request->lang = 'quibusdam';

    $requestSecurity = new CheckEeBtEligibilitySecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->bt->checkEeBtEligibility($request, $requestSecurity);

    if ($response->eeBtEligibility !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkUserToken

Checks a provided token for BT eligible user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CheckUserTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckUserTokenRequest();
    $request->ff = [
        FeatureFlagsEnum::RPT,
        FeatureFlagsEnum::CD,
    ];
    $request->id = 'a19f1d17-0513-439d-8808-6a1840394c26';
    $request->lang = 'aut';

    $response = $sdk->bt->checkUserToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlanByToken

Returns all the plans available for BT flow including additional description data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlanByTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlanByTokenRequest();
    $request->lang = 'dignissimos';
    $request->token = 'dicta';

    $response = $sdk->bt->getPlanByToken($request);

    if ($response->btPlanListItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlans

Returns all the plans available for BT flow including additional description data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlansRequest();
    $request->lang = 'maiores';

    $response = $sdk->bt->getPlans($request);

    if ($response->btPlans !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
