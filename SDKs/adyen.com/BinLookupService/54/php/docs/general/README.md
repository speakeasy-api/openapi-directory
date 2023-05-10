# general

### Available Operations

* [postGet3dsAvailability](#postget3dsavailability) - Check if 3D Secure is available
* [postGetCostEstimate](#postgetcostestimate) - Get a fees cost estimate

## postGet3dsAvailability

Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.

For more information, refer to [3D Secure 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ThreeDSAvailabilityRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostGet3dsAvailabilitySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ThreeDSAvailabilityRequest();
    $request->additionalData = [
        'tempora' => 'suscipit',
        'molestiae' => 'minus',
        'placeat' => 'voluptatum',
        'iusto' => 'excepturi',
    ];
    $request->brands = [
        'recusandae',
        'temporibus',
    ];
    $request->cardNumber = 'ab';
    $request->merchantAccount = 'quis';
    $request->recurringDetailReference = 'veritatis';
    $request->shopperReference = 'deserunt';

    $requestSecurity = new PostGet3dsAvailabilitySecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postGet3dsAvailability($request, $requestSecurity);

    if ($response->threeDSAvailabilityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postGetCostEstimate

>This API is available only for merchants operating in Australia, the EU, and the UK.

Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.

To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).

> Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CostEstimateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\CostEstimateAssumptions;
use \OpenAPI\OpenAPI\Models\Shared\MerchantDetails;
use \OpenAPI\OpenAPI\Models\Shared\Recurring;
use \OpenAPI\OpenAPI\Models\Shared\RecurringContractEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecurringTokenServiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\CostEstimateRequestShopperInteractionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostGetCostEstimateSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CostEstimateRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'perferendis';
    $request->amount->value = 368241;
    $request->assumptions = new CostEstimateAssumptions();
    $request->assumptions->assume3DSecureAuthenticated = false;
    $request->assumptions->assumeLevel3Data = false;
    $request->assumptions->installments = 832620;
    $request->cardNumber = 'sapiente';
    $request->encryptedCardNumber = 'quo';
    $request->merchantAccount = 'odit';
    $request->merchantDetails = new MerchantDetails();
    $request->merchantDetails->countryCode = 'TG';
    $request->merchantDetails->enrolledIn3DSecure = false;
    $request->merchantDetails->mcc = 'at';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::PAYOUT;
    $request->recurring->recurringDetailName = 'molestiae';
    $request->recurring->recurringExpiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-07T00:03:55.328Z');
    $request->recurring->recurringFrequency = 'esse';
    $request->recurring->tokenService = RecurringTokenServiceEnum::MCTOKENSERVICE;
    $request->selectedRecurringDetailReference = 'porro';
    $request->shopperInteraction = CostEstimateRequestShopperInteractionEnum::MOTO;
    $request->shopperReference = 'dicta';

    $requestSecurity = new PostGetCostEstimateSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postGetCostEstimate($request, $requestSecurity);

    if ($response->costEstimateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
