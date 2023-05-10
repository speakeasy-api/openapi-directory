# provisioning

### Available Operations

* [automaticProvisioningCreateAccountForm](#automaticprovisioningcreateaccountform) - Creates a new Billbee user account with the data passed
* [automaticProvisioningCreateAccountJson](#automaticprovisioningcreateaccountjson) - Creates a new Billbee user account with the data passed
* [automaticProvisioningCreateAccountRaw](#automaticprovisioningcreateaccountraw) - Creates a new Billbee user account with the data passed
* [automaticProvisioningTermsInfo](#automaticprovisioningtermsinfo) - Returns infos about Billbee terms and conditions

## automaticProvisioningCreateAccountForm

Creates a new Billbee user account with the data passed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer();
    $request->acceptTerms = false;
    $request->address = new RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress();
    $request->address->address1 = 'fugiat';
    $request->address->address2 = 'officia';
    $request->address->city = 'Randitown';
    $request->address->company = 'Beer - Volkman';
    $request->address->country = 'Belarus';
    $request->address->name = 'Lena Greenholt';
    $request->address->vatId = 'voluptatem';
    $request->address->zip = 'autem';
    $request->affiliateCouponCode = 'esse';
    $request->defaultCurrrency = 'dolores';
    $request->defaultVatIndex = 824798;
    $request->defaultVatMode = RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnum::ZERO;
    $request->eMail = 'Reba_Lockman@hotmail.com';
    $request->password = 'accusamus';
    $request->vat1Rate = 8964.8;
    $request->vat2Rate = 7332.89;

    $response = $sdk->provisioning->automaticProvisioningCreateAccountForm($request);

    if ($response->automaticProvisioningCreateAccountForm200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automaticProvisioningCreateAccountJson

Creates a new Billbee user account with the data passed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer();
    $request->acceptTerms = false;
    $request->address = new RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress();
    $request->address->address1 = 'sint';
    $request->address->address2 = 'ea';
    $request->address->city = 'Garettcester';
    $request->address->company = 'Hermiston - Towne';
    $request->address->country = 'Virgin Islands, British';
    $request->address->name = 'Josh Abshire';
    $request->address->vatId = 'fuga';
    $request->address->zip = 'repudiandae';
    $request->affiliateCouponCode = 'accusantium';
    $request->defaultCurrrency = 'expedita';
    $request->defaultVatIndex = 885208;
    $request->defaultVatMode = RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnum::ONE;
    $request->eMail = 'Jayne12@hotmail.com';
    $request->password = 'corporis';
    $request->vat1Rate = 6214.73;
    $request->vat2Rate = 9371.17;

    $response = $sdk->provisioning->automaticProvisioningCreateAccountJson($request);

    if ($response->automaticProvisioningCreateAccountJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automaticProvisioningCreateAccountRaw

Creates a new Billbee user account with the data passed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'adipisci'

    $response = $sdk->provisioning->automaticProvisioningCreateAccountRaw($request);

    if ($response->automaticProvisioningCreateAccountRaw200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## automaticProvisioningTermsInfo

Returns infos about Billbee terms and conditions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->provisioning->automaticProvisioningTermsInfo();

    if ($response->automaticProvisioningTermsInfo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
