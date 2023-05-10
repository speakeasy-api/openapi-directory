# individualsLicenses

## Overview

If you carry on a business you may need to hold a licence.

  For example, if you provide financial services, you are required to hold an Australian Financial
  Services (AFS) licence.


### Available Operations

* [deleteIndividualsPartyIdLicensesProductId](#deleteindividualspartyidlicensesproductid) - Delete a license
* [getIndividualsPartyIdLicenses](#getindividualspartyidlicenses) - Retrieve a list of licenses
* [getIndividualsPartyIdLicensesProductId](#getindividualspartyidlicensesproductid) - Retrieve a license
* [postIndividualsPartyIdLicenses](#postindividualspartyidlicenses) - Create a license
* [putIndividualsPartyIdLicensesProductId](#putindividualspartyidlicensesproductid) - Update a license

## deleteIndividualsPartyIdLicensesProductId

Delete a license


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIndividualsPartyIdLicensesProductIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIndividualsPartyIdLicensesProductIdRequest();
    $request->apiKey = 'quidem';
    $request->partyId = 'architecto';
    $request->productId = 'ipsa';

    $response = $sdk->individualsLicenses->deleteIndividualsPartyIdLicensesProductId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndividualsPartyIdLicenses

Retrieve a list of licenses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualsPartyIdLicensesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualsPartyIdLicensesRequest();
    $request->apiKey = 'reiciendis';
    $request->partyId = 'est';

    $response = $sdk->individualsLicenses->getIndividualsPartyIdLicenses($request);

    if ($response->licenses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIndividualsPartyIdLicensesProductId

Retrieve a license


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIndividualsPartyIdLicensesProductIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIndividualsPartyIdLicensesProductIdRequest();
    $request->apiKey = 'mollitia';
    $request->partyId = 'laborum';
    $request->productId = 'dolores';

    $response = $sdk->individualsLicenses->getIndividualsPartyIdLicensesProductId($request);

    if ($response->license !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postIndividualsPartyIdLicenses

Create a license


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostIndividualsPartyIdLicensesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseInput;
use \OpenAPI\OpenAPI\Models\Shared\LicenseLicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LicenseLifecycleStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostIndividualsPartyIdLicensesRequest();
    $request->apiKey = 'dolorem';
    $request->licenseInput = new LicenseInput();
    $request->licenseInput->licenseType = LicenseLicenseTypeEnum::AUSTRALIAN_FINANCIAL_SERVICES_LICENSE;
    $request->licenseInput->lifecycleState = LicenseLifecycleStateEnum::APPROVED;
    $request->partyId = 'nobis';

    $response = $sdk->individualsLicenses->postIndividualsPartyIdLicenses($request);

    if ($response->license !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putIndividualsPartyIdLicensesProductId

Update a license


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutIndividualsPartyIdLicensesProductIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseInput;
use \OpenAPI\OpenAPI\Models\Shared\LicenseLicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LicenseLifecycleStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutIndividualsPartyIdLicensesProductIdRequest();
    $request->apiKey = 'enim';
    $request->licenseInput = new LicenseInput();
    $request->licenseInput->licenseType = LicenseLicenseTypeEnum::LICENSE2_B;
    $request->licenseInput->lifecycleState = LicenseLifecycleStateEnum::EXPIRED;
    $request->partyId = 'minima';
    $request->productId = 'excepturi';

    $response = $sdk->individualsLicenses->putIndividualsPartyIdLicensesProductId($request);

    if ($response->license !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
