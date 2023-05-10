# customers

### Available Operations

* [customersAdd](#customersadd) - Create Customer
* [customersAll](#customersall) - List Customers
* [customersDelete](#customersdelete) - Delete Customer
* [customersOne](#customersone) - Get Customer
* [customersUpdate](#customersupdate) - Update Customer

## customersAdd

Create Customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CustomersAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountingCustomerInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankAccount;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedParentCustomer;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountingCustomerStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CustomersAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersAddRequest();
    $request->accountingCustomerInput = new AccountingCustomerInput();
    $request->accountingCustomerInput->account = new LinkedLedgerAccountInput();
    $request->accountingCustomerInput->account->code = '453';
    $request->accountingCustomerInput->account->id = '123456';
    $request->accountingCustomerInput->account->nominalCode = 'N091';
    $request->accountingCustomerInput->addresses = [
        new Address(),
    ];
    $request->accountingCustomerInput->bankAccounts = [
        new BankAccount(),
        new BankAccount(),
    ];
    $request->accountingCustomerInput->companyName = 'SpaceX';
    $request->accountingCustomerInput->currency = CurrencyEnum::USD;
    $request->accountingCustomerInput->displayId = 'EMP00101';
    $request->accountingCustomerInput->displayName = 'Windsurf Shop';
    $request->accountingCustomerInput->emails = [
        new Email(),
    ];
    $request->accountingCustomerInput->firstName = 'Elon';
    $request->accountingCustomerInput->individual = true;
    $request->accountingCustomerInput->lastName = 'Musk';
    $request->accountingCustomerInput->middleName = 'D.';
    $request->accountingCustomerInput->notes = 'Some notes about this customer';
    $request->accountingCustomerInput->parent = new LinkedParentCustomer();
    $request->accountingCustomerInput->parent->id = '12345';
    $request->accountingCustomerInput->parent->name = 'Windsurf Shop';
    $request->accountingCustomerInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->accountingCustomerInput->project = false;
    $request->accountingCustomerInput->rowVersion = '1-12345';
    $request->accountingCustomerInput->status = AccountingCustomerStatusEnum::ACTIVE;
    $request->accountingCustomerInput->suffix = 'Jr.';
    $request->accountingCustomerInput->taxNumber = 'US123945459';
    $request->accountingCustomerInput->taxRate = new LinkedTaxRateInput();
    $request->accountingCustomerInput->taxRate->id = '123456';
    $request->accountingCustomerInput->title = 'CEO';
    $request->accountingCustomerInput->websites = [
        new Website(),
        new Website(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'provident';
    $request->xApideckConsumerId = 'quos';
    $request->xApideckServiceId = 'sint';

    $requestSecurity = new CustomersAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersAdd($request, $requestSecurity);

    if ($response->createCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersAll

List Customers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CustomersAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomersFilter;
use \OpenAPI\OpenAPI\Models\Operations\CustomersAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersAllRequest();
    $request->cursor = 'accusantium';
    $request->fields = 'mollitia';
    $request->filter = new CustomersFilter();
    $request->filter->companyName = 'SpaceX';
    $request->filter->displayName = 'Techno King';
    $request->filter->email = 'elon@spacex.com';
    $request->filter->firstName = 'Elon';
    $request->filter->lastName = 'Musk';
    $request->limit = 968962;
    $request->passThrough = [
        'ad' => 'eum',
        'dolor' => 'necessitatibus',
        'odit' => 'nemo',
    ];
    $request->raw = false;
    $request->xApideckAppId = 'quasi';
    $request->xApideckConsumerId = 'iure';
    $request->xApideckServiceId = 'doloribus';

    $requestSecurity = new CustomersAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersAll($request, $requestSecurity);

    if ($response->getCustomersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersDelete

Delete Customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CustomersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersDeleteRequest();
    $request->id = 'e4c8b711-e5b7-4fd2-ad02-8921cddc6926';
    $request->raw = false;
    $request->xApideckAppId = 'accusantium';
    $request->xApideckConsumerId = 'ab';
    $request->xApideckServiceId = 'maiores';

    $requestSecurity = new CustomersDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersDelete($request, $requestSecurity);

    if ($response->deleteCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersOne

Get Customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CustomersOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomersOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersOneRequest();
    $request->fields = 'quidem';
    $request->id = '576b0d5f-0d30-4c5f-bb25-87053202c73d';
    $request->raw = false;
    $request->xApideckAppId = 'nostrum';
    $request->xApideckConsumerId = 'hic';
    $request->xApideckServiceId = 'recusandae';

    $requestSecurity = new CustomersOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersOne($request, $requestSecurity);

    if ($response->getCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersUpdate

Update Customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CustomersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountingCustomerInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankAccount;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedParentCustomer;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountingCustomerStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CustomersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersUpdateRequest();
    $request->accountingCustomerInput = new AccountingCustomerInput();
    $request->accountingCustomerInput->account = new LinkedLedgerAccountInput();
    $request->accountingCustomerInput->account->code = '453';
    $request->accountingCustomerInput->account->id = '123456';
    $request->accountingCustomerInput->account->nominalCode = 'N091';
    $request->accountingCustomerInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->accountingCustomerInput->bankAccounts = [
        new BankAccount(),
        new BankAccount(),
        new BankAccount(),
    ];
    $request->accountingCustomerInput->companyName = 'SpaceX';
    $request->accountingCustomerInput->currency = CurrencyEnum::USD;
    $request->accountingCustomerInput->displayId = 'EMP00101';
    $request->accountingCustomerInput->displayName = 'Windsurf Shop';
    $request->accountingCustomerInput->emails = [
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->accountingCustomerInput->firstName = 'Elon';
    $request->accountingCustomerInput->individual = true;
    $request->accountingCustomerInput->lastName = 'Musk';
    $request->accountingCustomerInput->middleName = 'D.';
    $request->accountingCustomerInput->notes = 'Some notes about this customer';
    $request->accountingCustomerInput->parent = new LinkedParentCustomer();
    $request->accountingCustomerInput->parent->id = '12345';
    $request->accountingCustomerInput->parent->name = 'Windsurf Shop';
    $request->accountingCustomerInput->phoneNumbers = [
        new PhoneNumber(),
    ];
    $request->accountingCustomerInput->project = false;
    $request->accountingCustomerInput->rowVersion = '1-12345';
    $request->accountingCustomerInput->status = AccountingCustomerStatusEnum::ACTIVE;
    $request->accountingCustomerInput->suffix = 'Jr.';
    $request->accountingCustomerInput->taxNumber = 'US123945459';
    $request->accountingCustomerInput->taxRate = new LinkedTaxRateInput();
    $request->accountingCustomerInput->taxRate->id = '123456';
    $request->accountingCustomerInput->title = 'CEO';
    $request->accountingCustomerInput->websites = [
        new Website(),
        new Website(),
        new Website(),
        new Website(),
    ];
    $request->id = '28909b3f-e49a-48d9-8bf4-8633323f9b77';
    $request->raw = false;
    $request->xApideckAppId = 'reiciendis';
    $request->xApideckConsumerId = 'amet';
    $request->xApideckServiceId = 'dolorum';

    $requestSecurity = new CustomersUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersUpdate($request, $requestSecurity);

    if ($response->updateCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
