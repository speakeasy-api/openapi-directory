# customers

### Available Operations

* [customersAdd](#customersadd) - Create Customer Support Customer
* [customersAll](#customersall) - List Customer Support Customers
* [customersDelete](#customersdelete) - Delete Customer Support Customer
* [customersOne](#customersone) - Get Customer Support Customer
* [customersUpdate](#customersupdate) - Update Customer Support Customer

## customersAdd

Create Customer Support Customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CustomersAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerSupportCustomerInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankAccount;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerSupportCustomerStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CustomersAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersAddRequest();
    $request->customerSupportCustomerInput = new CustomerSupportCustomerInput();
    $request->customerSupportCustomerInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->customerSupportCustomerInput->bankAccounts = new BankAccount();
    $request->customerSupportCustomerInput->bankAccounts->accountName = 'SPACEX LLC';
    $request->customerSupportCustomerInput->bankAccounts->accountNumber = '123465';
    $request->customerSupportCustomerInput->bankAccounts->accountType = BankAccountAccountTypeEnum::CREDIT_CARD;
    $request->customerSupportCustomerInput->bankAccounts->bankCode = 'BNH';
    $request->customerSupportCustomerInput->bankAccounts->bic = 'AUDSCHGGXXX';
    $request->customerSupportCustomerInput->bankAccounts->branchIdentifier = '001';
    $request->customerSupportCustomerInput->bankAccounts->bsbNumber = '062-001';
    $request->customerSupportCustomerInput->bankAccounts->currency = CurrencyEnum::USD;
    $request->customerSupportCustomerInput->bankAccounts->iban = 'CH2989144532982975332';
    $request->customerSupportCustomerInput->companyName = 'SpaceX';
    $request->customerSupportCustomerInput->currency = CurrencyEnum::USD;
    $request->customerSupportCustomerInput->emails = [
        new Email(),
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->customerSupportCustomerInput->firstName = 'Elon';
    $request->customerSupportCustomerInput->individual = true;
    $request->customerSupportCustomerInput->lastName = 'Musk';
    $request->customerSupportCustomerInput->notes = 'Some notes about this customer';
    $request->customerSupportCustomerInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->customerSupportCustomerInput->status = CustomerSupportCustomerStatusEnum::ACTIVE;
    $request->customerSupportCustomerInput->taxNumber = 'US123945459';
    $request->raw = false;
    $request->xApideckAppId = 'error';
    $request->xApideckConsumerId = 'deserunt';
    $request->xApideckServiceId = 'suscipit';

    $requestSecurity = new CustomersAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersAdd($request, $requestSecurity);

    if ($response->createCustomerSupportCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersAll

List Customer Support Customers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CustomersAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomersAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersAllRequest();
    $request->cursor = 'iure';
    $request->fields = 'magnam';
    $request->limit = 891773;
    $request->raw = false;
    $request->xApideckAppId = 'ipsa';
    $request->xApideckConsumerId = 'delectus';
    $request->xApideckServiceId = 'tempora';

    $requestSecurity = new CustomersAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersAll($request, $requestSecurity);

    if ($response->getCustomerSupportCustomersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersDelete

Delete Customer Support Customer

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
    $request->id = '67cc8796-ed15-41a0-9dfc-2ddf7cc78ca1';
    $request->raw = false;
    $request->xApideckAppId = 'nam';
    $request->xApideckConsumerId = 'officia';
    $request->xApideckServiceId = 'occaecati';

    $requestSecurity = new CustomersDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersDelete($request, $requestSecurity);

    if ($response->deleteCustomerSupportCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersOne

Get Customer Support Customer

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
    $request->fields = 'fugit';
    $request->id = '8fc81674-2cb7-4392-8592-9396fea7596e';
    $request->raw = false;
    $request->xApideckAppId = 'quidem';
    $request->xApideckConsumerId = 'architecto';
    $request->xApideckServiceId = 'ipsa';

    $requestSecurity = new CustomersOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersOne($request, $requestSecurity);

    if ($response->getCustomerSupportCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customersUpdate

Update Customer Support Customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CustomersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomerSupportCustomerInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankAccount;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerSupportCustomerStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CustomersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomersUpdateRequest();
    $request->customerSupportCustomerInput = new CustomerSupportCustomerInput();
    $request->customerSupportCustomerInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->customerSupportCustomerInput->bankAccounts = new BankAccount();
    $request->customerSupportCustomerInput->bankAccounts->accountName = 'SPACEX LLC';
    $request->customerSupportCustomerInput->bankAccounts->accountNumber = '123465';
    $request->customerSupportCustomerInput->bankAccounts->accountType = BankAccountAccountTypeEnum::CREDIT_CARD;
    $request->customerSupportCustomerInput->bankAccounts->bankCode = 'BNH';
    $request->customerSupportCustomerInput->bankAccounts->bic = 'AUDSCHGGXXX';
    $request->customerSupportCustomerInput->bankAccounts->branchIdentifier = '001';
    $request->customerSupportCustomerInput->bankAccounts->bsbNumber = '062-001';
    $request->customerSupportCustomerInput->bankAccounts->currency = CurrencyEnum::USD;
    $request->customerSupportCustomerInput->bankAccounts->iban = 'CH2989144532982975332';
    $request->customerSupportCustomerInput->companyName = 'SpaceX';
    $request->customerSupportCustomerInput->currency = CurrencyEnum::USD;
    $request->customerSupportCustomerInput->emails = [
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->customerSupportCustomerInput->firstName = 'Elon';
    $request->customerSupportCustomerInput->individual = true;
    $request->customerSupportCustomerInput->lastName = 'Musk';
    $request->customerSupportCustomerInput->notes = 'Some notes about this customer';
    $request->customerSupportCustomerInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->customerSupportCustomerInput->status = CustomerSupportCustomerStatusEnum::ACTIVE;
    $request->customerSupportCustomerInput->taxNumber = 'US123945459';
    $request->id = 'a2352c59-5590-47af-b1a3-a2fa94677392';
    $request->raw = false;
    $request->xApideckAppId = 'quis';
    $request->xApideckConsumerId = 'vitae';
    $request->xApideckServiceId = 'laborum';

    $requestSecurity = new CustomersUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->customers->customersUpdate($request, $requestSecurity);

    if ($response->updateCustomerSupportCustomerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
