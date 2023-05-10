# transfers

### Available Operations

* [postTransfers](#posttransfers) - Transfer funds

## postTransfers

Starts a request to transfer funds to [balance accounts](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts), [transfer instruments](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments), or third-party bank accounts. Adyen sends the outcome of the transfer request through webhooks.

To use this endpoint, you need an additional role for your API credential and transfers must be enabled for the source balance account. Your Adyen contact will set these up for you.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TransferInfo;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\TransferInfoCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\CounterpartyInfoV3;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountV3;
use \OpenAPI\OpenAPI\Models\Shared\PartyIdentification2;
use \OpenAPI\OpenAPI\Models\Shared\Address2;
use \OpenAPI\OpenAPI\Models\Shared\PartyIdentification2TypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferInfoPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\UltimatePartyIdentification;
use \OpenAPI\OpenAPI\Models\Shared\UltimatePartyIdentificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostTransfersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferInfo();
    $request->amount = new Amount();
    $request->amount->currency = 'occaecati';
    $request->amount->value = 143353;
    $request->balanceAccountId = 'deleniti';
    $request->category = TransferInfoCategoryEnum::PLATFORM_PAYMENT;
    $request->counterparty = new CounterpartyInfoV3();
    $request->counterparty->balanceAccountId = 'optio';
    $request->counterparty->bankAccount = new BankAccountV3();
    $request->counterparty->bankAccount->accountHolder = new PartyIdentification2();
    $request->counterparty->bankAccount->accountHolder->address = new Address2();
    $request->counterparty->bankAccount->accountHolder->address->city = 'Benjaminview';
    $request->counterparty->bankAccount->accountHolder->address->country = 'Kuwait';
    $request->counterparty->bankAccount->accountHolder->address->line1 = 'modi';
    $request->counterparty->bankAccount->accountHolder->address->line2 = 'qui';
    $request->counterparty->bankAccount->accountHolder->address->postalCode = '74251-0361';
    $request->counterparty->bankAccount->accountHolder->address->stateOrProvince = 'iste';
    $request->counterparty->bankAccount->accountHolder->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2022-05-20');
    $request->counterparty->bankAccount->accountHolder->firstName = 'Gertrude';
    $request->counterparty->bankAccount->accountHolder->fullName = 'hic';
    $request->counterparty->bankAccount->accountHolder->lastName = 'Turcotte';
    $request->counterparty->bankAccount->accountHolder->reference = 'fuga';
    $request->counterparty->bankAccount->accountHolder->type = PartyIdentification2TypeEnum::ORGANIZATION;
    $request->counterparty->bankAccount->accountIdentification = new HULocalAccountIdentification();
    $request->counterparty->bankAccount->accountIdentification->accountNumber = 'iste';
    $request->counterparty->bankAccount->accountIdentification->type = HULocalAccountIdentificationTypeEnum::HU_LOCAL;
    $request->counterparty->transferInstrumentId = 'iure';
    $request->description = 'saepe';
    $request->id = 'b10faaa2-352c-4595-9907-aff1a3a2fa94';
    $request->paymentInstrumentId = 'commodi';
    $request->priority = TransferInfoPriorityEnum::INSTANT;
    $request->reference = 'molestiae';
    $request->referenceForBeneficiary = 'velit';
    $request->ultimateParty = new UltimatePartyIdentification();
    $request->ultimateParty->address = new Address2();
    $request->ultimateParty->address->city = 'Croninborough';
    $request->ultimateParty->address->country = 'Bosnia and Herzegovina';
    $request->ultimateParty->address->line1 = 'laborum';
    $request->ultimateParty->address->line2 = 'animi';
    $request->ultimateParty->address->postalCode = '17193';
    $request->ultimateParty->address->stateOrProvince = 'id';
    $request->ultimateParty->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2022-12-17');
    $request->ultimateParty->firstName = 'Avery';
    $request->ultimateParty->fullName = 'error';
    $request->ultimateParty->lastName = 'Smitham';
    $request->ultimateParty->reference = 'laborum';
    $request->ultimateParty->type = UltimatePartyIdentificationTypeEnum::INDIVIDUAL;

    $requestSecurity = new PostTransfersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->transfers->postTransfers($request, $requestSecurity);

    if ($response->transfer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
