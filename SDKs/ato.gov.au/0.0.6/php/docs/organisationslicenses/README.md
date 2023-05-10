# organisationsLicenses

## Overview

If you carry on a business you may need to hold a licence.

  For example, if you provide financial services, you are required to hold an Australian Financial
  Services (AFS) licence.


### Available Operations

* [deleteOrganisationsPartyIdLicensesProductId](#deleteorganisationspartyidlicensesproductid) - Delete a license
* [getOrganisationsPartyIdLicenses](#getorganisationspartyidlicenses) - Retrieve a list of licenses
* [getOrganisationsPartyIdLicensesProductId](#getorganisationspartyidlicensesproductid) - Retrieve a license
* [postOrganisationsPartyIdLicenses](#postorganisationspartyidlicenses) - Create a license
* [putOrganisationsPartyIdLicensesProductId](#putorganisationspartyidlicensesproductid) - Update a license

## deleteOrganisationsPartyIdLicensesProductId

Delete a license


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOrganisationsPartyIdLicensesProductIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOrganisationsPartyIdLicensesProductIdRequest();
    $request->apiKey = 'delectus';
    $request->partyId = 'eum';
    $request->productId = 'non';

    $response = $sdk->organisationsLicenses->deleteOrganisationsPartyIdLicensesProductId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganisationsPartyIdLicenses

Retrieve a list of licenses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganisationsPartyIdLicensesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganisationsPartyIdLicensesRequest();
    $request->apiKey = 'eligendi';
    $request->partyId = 'sint';

    $response = $sdk->organisationsLicenses->getOrganisationsPartyIdLicenses($request);

    if ($response->licenses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganisationsPartyIdLicensesProductId

Retrieve a license


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganisationsPartyIdLicensesProductIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganisationsPartyIdLicensesProductIdRequest();
    $request->apiKey = 'aliquid';
    $request->partyId = 'provident';
    $request->productId = 'necessitatibus';

    $response = $sdk->organisationsLicenses->getOrganisationsPartyIdLicensesProductId($request);

    if ($response->license !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postOrganisationsPartyIdLicenses

Create a license


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostOrganisationsPartyIdLicensesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseInput;
use \OpenAPI\OpenAPI\Models\Shared\LicenseLicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LicenseLifecycleStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostOrganisationsPartyIdLicensesRequest();
    $request->apiKey = 'sint';
    $request->licenseInput = new LicenseInput();
    $request->licenseInput->licenseType = LicenseLicenseTypeEnum::LICENSE2_B;
    $request->licenseInput->lifecycleState = LicenseLifecycleStateEnum::EXPIRED;
    $request->partyId = 'debitis';

    $response = $sdk->organisationsLicenses->postOrganisationsPartyIdLicenses($request);

    if ($response->license !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putOrganisationsPartyIdLicensesProductId

Update a license


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutOrganisationsPartyIdLicensesProductIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseInput;
use \OpenAPI\OpenAPI\Models\Shared\LicenseLicenseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LicenseLifecycleStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutOrganisationsPartyIdLicensesProductIdRequest();
    $request->apiKey = 'a';
    $request->licenseInput = new LicenseInput();
    $request->licenseInput->licenseType = LicenseLicenseTypeEnum::LICENSE2_B;
    $request->licenseInput->lifecycleState = LicenseLifecycleStateEnum::ISSUED;
    $request->partyId = 'in';
    $request->productId = 'illum';

    $response = $sdk->organisationsLicenses->putOrganisationsPartyIdLicensesProductId($request);

    if ($response->license !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
