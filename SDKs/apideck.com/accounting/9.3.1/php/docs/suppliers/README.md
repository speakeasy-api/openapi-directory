# suppliers

### Available Operations

* [suppliersAdd](#suppliersadd) - Create Supplier
* [suppliersAll](#suppliersall) - List Suppliers
* [suppliersDelete](#suppliersdelete) - Delete Supplier
* [suppliersOne](#suppliersone) - Get Supplier
* [suppliersUpdate](#suppliersupdate) - Update Supplier

## suppliersAdd

Create Supplier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\SupplierInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankAccount;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SupplierStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuppliersAddRequest();
    $request->supplierInput = new SupplierInput();
    $request->supplierInput->account = new LinkedLedgerAccountInput();
    $request->supplierInput->account->code = '453';
    $request->supplierInput->account->id = '123456';
    $request->supplierInput->account->nominalCode = 'N091';
    $request->supplierInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->supplierInput->bankAccounts = [
        new BankAccount(),
    ];
    $request->supplierInput->companyName = 'SpaceX';
    $request->supplierInput->currency = CurrencyEnum::USD;
    $request->supplierInput->displayId = 'EMP00101';
    $request->supplierInput->displayName = 'Windsurf Shop';
    $request->supplierInput->emails = [
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->supplierInput->firstName = 'Elon';
    $request->supplierInput->individual = true;
    $request->supplierInput->lastName = 'Musk';
    $request->supplierInput->middleName = 'D.';
    $request->supplierInput->notes = 'Some notes about this supplier';
    $request->supplierInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->supplierInput->rowVersion = '1-12345';
    $request->supplierInput->status = SupplierStatusEnum::ACTIVE;
    $request->supplierInput->suffix = 'Jr.';
    $request->supplierInput->taxNumber = 'US123945459';
    $request->supplierInput->taxRate = new LinkedTaxRateInput();
    $request->supplierInput->taxRate->id = '123456';
    $request->supplierInput->title = 'CEO';
    $request->supplierInput->websites = [
        new Website(),
        new Website(),
        new Website(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'cum';
    $request->xApideckConsumerId = 'laboriosam';
    $request->xApideckServiceId = 'dolorum';

    $requestSecurity = new SuppliersAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->suppliers->suppliersAdd($request, $requestSecurity);

    if ($response->createSupplierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suppliersAll

List Suppliers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\SuppliersFilter;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuppliersAllRequest();
    $request->cursor = 'voluptatum';
    $request->fields = 'error';
    $request->filter = new SuppliersFilter();
    $request->filter->companyName = 'SpaceX';
    $request->filter->email = 'elon@spacex.com';
    $request->limit = 944708;
    $request->passThrough = [
        'debitis' => 'neque',
        'dolorum' => 'nostrum',
        'officia' => 'dolorum',
    ];
    $request->raw = false;
    $request->xApideckAppId = 'corrupti';
    $request->xApideckConsumerId = 'accusamus';
    $request->xApideckServiceId = 'tempora';

    $requestSecurity = new SuppliersAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->suppliers->suppliersAll($request, $requestSecurity);

    if ($response->getSuppliersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suppliersDelete

Delete Supplier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuppliersDeleteRequest();
    $request->id = '824d0ab4-0750-488e-9186-2065e904f3b1';
    $request->raw = false;
    $request->xApideckAppId = 'architecto';
    $request->xApideckConsumerId = 'occaecati';
    $request->xApideckServiceId = 'labore';

    $requestSecurity = new SuppliersDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->suppliers->suppliersDelete($request, $requestSecurity);

    if ($response->deleteSupplierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suppliersOne

Get Supplier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuppliersOneRequest();
    $request->fields = 'quidem';
    $request->id = '8abf603a-79f9-4dfe-8ab7-da8a50ce187f';
    $request->raw = false;
    $request->xApideckAppId = 'totam';
    $request->xApideckConsumerId = 'suscipit';
    $request->xApideckServiceId = 'quidem';

    $requestSecurity = new SuppliersOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->suppliers->suppliersOne($request, $requestSecurity);

    if ($response->getSupplierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## suppliersUpdate

Update Supplier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SupplierInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankAccount;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SupplierStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SuppliersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SuppliersUpdateRequest();
    $request->supplierInput = new SupplierInput();
    $request->supplierInput->account = new LinkedLedgerAccountInput();
    $request->supplierInput->account->code = '453';
    $request->supplierInput->account->id = '123456';
    $request->supplierInput->account->nominalCode = 'N091';
    $request->supplierInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->supplierInput->bankAccounts = [
        new BankAccount(),
    ];
    $request->supplierInput->companyName = 'SpaceX';
    $request->supplierInput->currency = CurrencyEnum::USD;
    $request->supplierInput->displayId = 'EMP00101';
    $request->supplierInput->displayName = 'Windsurf Shop';
    $request->supplierInput->emails = [
        new Email(),
        new Email(),
    ];
    $request->supplierInput->firstName = 'Elon';
    $request->supplierInput->individual = true;
    $request->supplierInput->lastName = 'Musk';
    $request->supplierInput->middleName = 'D.';
    $request->supplierInput->notes = 'Some notes about this supplier';
    $request->supplierInput->phoneNumbers = [
        new PhoneNumber(),
    ];
    $request->supplierInput->rowVersion = '1-12345';
    $request->supplierInput->status = SupplierStatusEnum::ACTIVE;
    $request->supplierInput->suffix = 'Jr.';
    $request->supplierInput->taxNumber = 'US123945459';
    $request->supplierInput->taxRate = new LinkedTaxRateInput();
    $request->supplierInput->taxRate->id = '123456';
    $request->supplierInput->title = 'CEO';
    $request->supplierInput->websites = [
        new Website(),
        new Website(),
        new Website(),
        new Website(),
    ];
    $request->id = '689eee95-26f8-4d98-ae88-1ead4f0e1012';
    $request->raw = false;
    $request->xApideckAppId = 'enim';
    $request->xApideckConsumerId = 'laboriosam';
    $request->xApideckServiceId = 'velit';

    $requestSecurity = new SuppliersUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->suppliers->suppliersUpdate($request, $requestSecurity);

    if ($response->updateSupplierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
