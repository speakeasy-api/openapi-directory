# customerContracts

### Available Operations

* [createContract](#createcontract) - Create a new contract
* [deleteNextContract](#deletenextcontract) - Delete your next contract
* [getBillingPeriods](#getbillingperiods) - Get billing periods conditions
* [getContracts](#getcontracts) - Get contract list
* [getOffer](#getoffer) - Get offer pricing
* [getStandardOffers](#getstandardoffers) - Get all standard offers
* [reactivateCurrentContract](#reactivatecurrentcontract) - Reactivate your terminated contract.
* [terminateCurrentContract](#terminatecurrentcontract) - Schedule termination of your current contract at the end of the commitment.

## createContract

Now you are ready to create your contract. Before that, please ensure that you check the offer with the same request parameterts. /offers


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OfferRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OfferRequest();
    $request->billingPeriodInMonth = 12;
    $request->couponDiscountCode = 'I-LOVE-BEEZUP';
    $request->couponOfferCode = '04efc310-bc25-4710-a83a-faf200284fe5';
    $request->offerId = 1;
    $request->storeCount = 1;

    $response = $sdk->customerContracts->createContract($request);

    if ($response->createContractResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNextContract

Delete your next contract

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->customerContracts->deleteNextContract();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBillingPeriods

Get billing periods conditions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBillingPeriodsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBillingPeriodsRequest();
    $request->ifNoneMatch = 'quos';

    $response = $sdk->customerContracts->getBillingPeriods($request);

    if ($response->billingPeriodList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContracts

Get contract list

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContractsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContractsRequest();
    $request->ifNoneMatch = 'aliquid';

    $response = $sdk->customerContracts->getContracts($request);

    if ($response->contracts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOffer

Get the offer pricing then you can create your contract with the same request parameters. /v2/user/customer/contracts


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OfferRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OfferRequest();
    $request->billingPeriodInMonth = 12;
    $request->couponDiscountCode = 'I-LOVE-BEEZUP';
    $request->couponOfferCode = '04efc310-bc25-4710-a83a-faf200284fe5';
    $request->offerId = 1;
    $request->storeCount = 1;

    $response = $sdk->customerContracts->getOffer($request);

    if ($response->offer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStandardOffers

Get all standard offers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStandardOffersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStandardOffersRequest();
    $request->ifNoneMatch = 'dolorem';

    $response = $sdk->customerContracts->getStandardOffers($request);

    if ($response->standardOffers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## reactivateCurrentContract

By calling this operation you can re-enable the auto renewal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->customerContracts->reactivateCurrentContract();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## terminateCurrentContract

By default your contract are automatically renew. By calling this operation you can disable the auto renewal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TerminateContract;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TerminateContract();
    $request->contractTerminationReason = 'I'm crazy, I want to leave your splendid service...';
    $request->contractTerminationReasonType = 1;

    $response = $sdk->customerContracts->terminateCurrentContract($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
