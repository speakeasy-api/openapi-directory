# merchants

### Available Operations

* [merchantsAdd](#merchantsadd) - Create Merchant
* [merchantsAll](#merchantsall) - List Merchants
* [merchantsDelete](#merchantsdelete) - Delete Merchant
* [merchantsOne](#merchantsone) - Get Merchant
* [merchantsUpdate](#merchantsupdate) - Update Merchant

## merchantsAdd

Create Merchant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MerchantsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\MerchantInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MerchantStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\MerchantsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MerchantsAddRequest();
    $request->merchantInput = new MerchantInput();
    $request->merchantInput->address = new Address();
    $request->merchantInput->address->city = 'San Francisco';
    $request->merchantInput->address->contactName = 'Elon Musk';
    $request->merchantInput->address->country = 'US';
    $request->merchantInput->address->county = 'Santa Clara';
    $request->merchantInput->address->email = 'elon@musk.com';
    $request->merchantInput->address->fax = '122-111-1111';
    $request->merchantInput->address->id = '123';
    $request->merchantInput->address->latitude = '40.759211';
    $request->merchantInput->address->line1 = 'Main street';
    $request->merchantInput->address->line2 = 'apt #';
    $request->merchantInput->address->line3 = 'Suite #';
    $request->merchantInput->address->line4 = 'delivery instructions';
    $request->merchantInput->address->longitude = '-73.984638';
    $request->merchantInput->address->name = 'HQ US';
    $request->merchantInput->address->phoneNumber = '111-111-1111';
    $request->merchantInput->address->postalCode = '94104';
    $request->merchantInput->address->rowVersion = '1-12345';
    $request->merchantInput->address->salutation = 'Mr';
    $request->merchantInput->address->state = 'CA';
    $request->merchantInput->address->streetNumber = '25';
    $request->merchantInput->address->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->merchantInput->address->type = AddressTypeEnum::PRIMARY;
    $request->merchantInput->address->website = 'https://elonmusk.com';
    $request->merchantInput->currency = CurrencyEnum::USD;
    $request->merchantInput->language = 'EN';
    $request->merchantInput->mainLocationId = '12345';
    $request->merchantInput->name = 'Dunkin Donuts';
    $request->merchantInput->ownerId = '12345';
    $request->merchantInput->serviceCharges = [
        new ServiceChargeInput(),
        new ServiceChargeInput(),
        new ServiceChargeInput(),
        new ServiceChargeInput(),
    ];
    $request->merchantInput->status = MerchantStatusEnum::ACTIVE;
    $request->raw = false;
    $request->xApideckAppId = 'aspernatur';
    $request->xApideckConsumerId = 'architecto';
    $request->xApideckServiceId = 'magnam';

    $requestSecurity = new MerchantsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->merchants->merchantsAdd($request, $requestSecurity);

    if ($response->createMerchantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## merchantsAll

List Merchants

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MerchantsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\MerchantsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MerchantsAllRequest();
    $request->cursor = 'et';
    $request->fields = 'excepturi';
    $request->limit = 354047;
    $request->raw = false;
    $request->xApideckAppId = 'provident';
    $request->xApideckConsumerId = 'quos';
    $request->xApideckServiceId = 'sint';

    $requestSecurity = new MerchantsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->merchants->merchantsAll($request, $requestSecurity);

    if ($response->getMerchantsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## merchantsDelete

Delete Merchant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MerchantsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\MerchantsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MerchantsDeleteRequest();
    $request->id = '0afa563e-2516-4fe4-88b7-11e5b7fd2ed0';
    $request->raw = false;
    $request->xApideckAppId = 'consequuntur';
    $request->xApideckConsumerId = 'praesentium';
    $request->xApideckServiceId = 'natus';

    $requestSecurity = new MerchantsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->merchants->merchantsDelete($request, $requestSecurity);

    if ($response->deleteMerchantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## merchantsOne

Get Merchant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MerchantsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\MerchantsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MerchantsOneRequest();
    $request->fields = 'magni';
    $request->id = '1cddc692-601f-4b57-ab0d-5f0d30c5fbb2';
    $request->raw = false;
    $request->xApideckAppId = 'quis';
    $request->xApideckConsumerId = 'totam';
    $request->xApideckServiceId = 'dignissimos';

    $requestSecurity = new MerchantsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->merchants->merchantsOne($request, $requestSecurity);

    if ($response->getMerchantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## merchantsUpdate

Update Merchant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MerchantsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\MerchantInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MerchantStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\MerchantsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MerchantsUpdateRequest();
    $request->merchantInput = new MerchantInput();
    $request->merchantInput->address = new Address();
    $request->merchantInput->address->city = 'San Francisco';
    $request->merchantInput->address->contactName = 'Elon Musk';
    $request->merchantInput->address->country = 'US';
    $request->merchantInput->address->county = 'Santa Clara';
    $request->merchantInput->address->email = 'elon@musk.com';
    $request->merchantInput->address->fax = '122-111-1111';
    $request->merchantInput->address->id = '123';
    $request->merchantInput->address->latitude = '40.759211';
    $request->merchantInput->address->line1 = 'Main street';
    $request->merchantInput->address->line2 = 'apt #';
    $request->merchantInput->address->line3 = 'Suite #';
    $request->merchantInput->address->line4 = 'delivery instructions';
    $request->merchantInput->address->longitude = '-73.984638';
    $request->merchantInput->address->name = 'HQ US';
    $request->merchantInput->address->phoneNumber = '111-111-1111';
    $request->merchantInput->address->postalCode = '94104';
    $request->merchantInput->address->rowVersion = '1-12345';
    $request->merchantInput->address->salutation = 'Mr';
    $request->merchantInput->address->state = 'CA';
    $request->merchantInput->address->streetNumber = '25';
    $request->merchantInput->address->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->merchantInput->address->type = AddressTypeEnum::PRIMARY;
    $request->merchantInput->address->website = 'https://elonmusk.com';
    $request->merchantInput->currency = CurrencyEnum::USD;
    $request->merchantInput->language = 'EN';
    $request->merchantInput->mainLocationId = '12345';
    $request->merchantInput->name = 'Dunkin Donuts';
    $request->merchantInput->ownerId = '12345';
    $request->merchantInput->serviceCharges = [
        new ServiceChargeInput(),
    ];
    $request->merchantInput->status = MerchantStatusEnum::ACTIVE;
    $request->id = '53202c73-d5fe-49b9-8c28-909b3fe49a8d';
    $request->raw = false;
    $request->xApideckAppId = 'provident';
    $request->xApideckConsumerId = 'nobis';
    $request->xApideckServiceId = 'libero';

    $requestSecurity = new MerchantsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->merchants->merchantsUpdate($request, $requestSecurity);

    if ($response->updateMerchantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
