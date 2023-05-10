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