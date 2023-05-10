# ee

### Available Operations

* [assignMsisdn](#assignmsisdn) - Assigns a msisdn to a profile on ITV side.
* [checkEeBtEligibility](#checkeebteligibility) - Check whether or not a user is eligible for switching to Bt or EE offers.
* [createPinRequest](#createpinrequest) - Creates a PIN request that will send an SMS to the given msisdn.
This call is to validate MSISDN entered by a user not comming through EE network.
This call should be followed by POST ee/pin.

* [createToken](#createtoken) - Returns a token for later calls to EE API. TTL is one hour. Recommended is FE refreshes this token before each call.
* [getEligibleOffers](#geteligibleoffers) - Returns eligible partner specific offers for the querying partner for an EE MSISDN.
This call is supposed to be called after we have MSISDN accired.
This call should be followed by POST /ee/msisdn.

* [getPlan](#getplan) - Returns the plan description for EE flow including additional description data.
* [getEePlans](#geteeplans) - Returns all the plans available for EE flow including additional description data.
* [validatePinRequest](#validatepinrequest) - Validate PIN request created by calling POST /ee/pin This call is to validate MSISDN entered by a user not comming through EE network. This call should be called after PUT /ee/pin. This call should be followed by POST /ee/offers.

## assignMsisdn

Assigns a msisdn to a profile on ITV side.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AssignMsisdnRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvAssignMsisdnRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssignMsisdnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignMsisdnRequest();
    $request->itvAssignMsisdnRequest = new ItvAssignMsisdnRequest();
    $request->itvAssignMsisdnRequest->eeProductId = 'necessitatibus';
    $request->itvAssignMsisdnRequest->msisdn = 'ratione';
    $request->itvAssignMsisdnRequest->profileToken = 'laborum';
    $request->itvAssignMsisdnRequest->trackingHeader = 'distinctio';
    $request->lang = 'voluptatum';

    $requestSecurity = new AssignMsisdnSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->ee->assignMsisdn($request, $requestSecurity);

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
    $request->lang = 'rem';

    $requestSecurity = new CheckEeBtEligibilitySecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->ee->checkEeBtEligibility($request, $requestSecurity);

    if ($response->eeBtEligibility !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPinRequest

Creates a PIN request that will send an SMS to the given msisdn.
This call is to validate MSISDN entered by a user not comming through EE network.
This call should be followed by POST ee/pin.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePinRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\EeCreatePinRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePinRequestRequest();
    $request->eeCreatePinRequest = new EeCreatePinRequest();
    $request->eeCreatePinRequest->accessToken = 'aliquam';
    $request->eeCreatePinRequest->msisdn = 'ad';
    $request->eeCreatePinRequest->trackingHeader = 'repellat';
    $request->ff = [
        FeatureFlagsEnum::LDP,
    ];
    $request->lang = 'perspiciatis';

    $response = $sdk->ee->createPinRequest($request);

    if ($response->eeCreatePinResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createToken

Returns a token for later calls to EE API. TTL is one hour. Recommended is FE refreshes this token before each call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->ee->createToken();

    if ($response->eeCreateTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEligibleOffers

Returns eligible partner specific offers for the querying partner for an EE MSISDN.
This call is supposed to be called after we have MSISDN accired.
This call should be followed by POST /ee/msisdn.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEligibleOffersRequest;
use \OpenAPI\OpenAPI\Models\Shared\EeOffersRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEligibleOffersRequest();
    $request->eeOffersRequest = new EeOffersRequest();
    $request->eeOffersRequest->accessToken = 'nihil';
    $request->eeOffersRequest->msisdn = 'mollitia';
    $request->eeOffersRequest->trackingHeader = 'voluptas';
    $request->ff = [
        FeatureFlagsEnum::CD,
    ];
    $request->lang = 'reiciendis';

    $response = $sdk->ee->getEligibleOffers($request);

    if ($response->eeOffersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlan

Returns the plan description for EE flow including additional description data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPlanRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlanRequest();
    $request->id = '2a54a31e-9476-44a3-a865-e7956f9251a5';
    $request->lang = 'mollitia';

    $response = $sdk->ee->getPlan($request);

    if ($response->eePlanListItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEePlans

Returns all the plans available for EE flow including additional description data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEePlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEePlansRequest();
    $request->lang = 'provident';

    $response = $sdk->ee->getEePlans($request);

    if ($response->eePlans !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validatePinRequest

Validate PIN request created by calling POST /ee/pin This call is to validate MSISDN entered by a user not comming through EE network. This call should be called after PUT /ee/pin. This call should be followed by POST /ee/offers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ValidatePinRequestRequest;
use \OpenAPI\OpenAPI\Models\Shared\EeValidatePinRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidatePinRequestRequest();
    $request->eeValidatePinRequest = new EeValidatePinRequest();
    $request->eeValidatePinRequest->accessToken = 'possimus';
    $request->eeValidatePinRequest->pin = 'animi';
    $request->eeValidatePinRequest->pinReference = 'ex';
    $request->eeValidatePinRequest->trackingHeader = 'aliquid';
    $request->ff = [
        FeatureFlagsEnum::CD,
    ];
    $request->lang = 'doloribus';

    $response = $sdk->ee->validatePinRequest($request);

    if ($response->eeValidatePinResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
