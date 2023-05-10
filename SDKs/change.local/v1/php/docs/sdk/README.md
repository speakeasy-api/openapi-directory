# SDK

### Available Operations

* [getApiV1DonationsCarbonCalculate](#getapiv1donationscarboncalculate) - Calculate shipping carbon offset
* [getApiV1DonationsCarbonStats](#getapiv1donationscarbonstats) - Retrieve carbon offset stats
* [getApiV1DonationsCryptoCalculate](#getapiv1donationscryptocalculate) - Calculate crypto carbon offset
* [getApiV1DonationsIndex](#getapiv1donationsindex) - List your donations
* [getApiV1DonationsShow](#getapiv1donationsshow) - Retrieve a donation
* [getApiV1NonprofitsList](#getapiv1nonprofitslist) - Search a nonprofit
* [getApiV1NonprofitsShow](#getapiv1nonprofitsshow) - Show a nonprofit
* [postApiV1DonationsCreate](#postapiv1donationscreate) - Create a donation

## getApiV1DonationsCarbonCalculate

Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a physical shipment. This calculation depends on the weight, primary transportation method, and distance of the shipment. Provide the distance of the shipment using the origin and destination address, or directly with the number of miles. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCarbonCalculateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCarbonCalculateTransportationMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCarbonCalculateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1DonationsCarbonCalculateRequest();
    $request->destinationAddress = 8579.46;
    $request->distanceMi = 5448.83;
    $request->originAddress = 8472.52;
    $request->transportationMethod = GetApiV1DonationsCarbonCalculateTransportationMethodEnum::TRUCK;
    $request->weightLb = 6235.64;

    $requestSecurity = new GetApiV1DonationsCarbonCalculateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getApiV1DonationsCarbonCalculate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1DonationsCarbonStats

Measures your carbon offset impact in relatable terms. Provide the id of a donation to CarbonFund to see stats about that specific donation. If you omit the donation id, this endpoint returns aggregate stats for all of your CarbonFund donations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCarbonStatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCarbonStatsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1DonationsCarbonStatsRequest();
    $request->id = 6458.94;

    $requestSecurity = new GetApiV1DonationsCarbonStatsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getApiV1DonationsCarbonStats($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1DonationsCryptoCalculate

Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a cryptocurrency transaction. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCryptoCalculateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCryptoCalculateCurrencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsCryptoCalculateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1DonationsCryptoCalculateRequest();
    $request->count = 3843.82;
    $request->currency = GetApiV1DonationsCryptoCalculateCurrencyEnum::ETH;

    $requestSecurity = new GetApiV1DonationsCryptoCalculateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getApiV1DonationsCryptoCalculate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1DonationsIndex

Retrieves a list of donations you've previously made. The donations are returned in order of creation, with the most recent donations appearing first. This endpoint is paginated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsIndexSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1DonationsIndexRequest();
    $request->page = 2975.34;

    $requestSecurity = new GetApiV1DonationsIndexSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getApiV1DonationsIndex($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1DonationsShow

Retrieves the details of a donation you've previously made.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsShowRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1DonationsShowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1DonationsShowRequest();
    $request->id = 'e0f467cc-8796-4ed1-91a0-5dfc2ddf7cc7';

    $requestSecurity = new GetApiV1DonationsShowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getApiV1DonationsShow($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1NonprofitsList

Retrieves a list of nonprofits whose names match the provided name. This endpoint is paginated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1NonprofitsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1NonprofitsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1NonprofitsListRequest();
    $request->name = 'Miss Lowell Parisian';
    $request->page = 5820.2;

    $requestSecurity = new GetApiV1NonprofitsListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getApiV1NonprofitsList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiV1NonprofitsShow

Retrieves information for a nonprofit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1NonprofitsShowRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetApiV1NonprofitsShowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiV1NonprofitsShowRequest();
    $request->id = '28fc8167-42cb-4739-a059-29396fea7596';

    $requestSecurity = new GetApiV1NonprofitsShowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->getApiV1NonprofitsShow($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiV1DonationsCreate

Creates a donation to any nonprofit. CHANGE keeps track of your donations, bills you at the end of the month, and handles the nonprofit payouts for you.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1DonationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1DonationsCreateFundingSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostApiV1DonationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiV1DonationsCreateRequest();
    $request->amount = 'saepe';
    $request->fundingSource = PostApiV1DonationsCreateFundingSourceEnum::CUSTOMER;
    $request->nonprofitId = 'architecto';
    $request->zipCode = '96661';

    $requestSecurity = new PostApiV1DonationsCreateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->postApiV1DonationsCreate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
