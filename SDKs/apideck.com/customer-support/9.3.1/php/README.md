# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->raw = false;
    $request->xApideckAppId = 'quibusdam';
    $request->xApideckConsumerId = 'unde';
    $request->xApideckServiceId = 'nulla';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [customers](docs/customers/README.md)

* [customersAdd](docs/customers/README.md#customersadd) - Create Customer Support Customer
* [customersAll](docs/customers/README.md#customersall) - List Customer Support Customers
* [customersDelete](docs/customers/README.md#customersdelete) - Delete Customer Support Customer
* [customersOne](docs/customers/README.md#customersone) - Get Customer Support Customer
* [customersUpdate](docs/customers/README.md#customersupdate) - Update Customer Support Customer
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
