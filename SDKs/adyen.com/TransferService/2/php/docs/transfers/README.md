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
use \OpenAPI\OpenAPI\Models\Shared\Bank;
use \OpenAPI\OpenAPI\Models\Shared\BankPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CounterpartyInfo;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountInfo;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Operations\PostTransfersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferInfo();
    $request->amount = new Amount();
    $request->amount->currency = 'occaecati';
    $request->amount->value = 143353;
    $request->balanceAccountId = 'deleniti';
    $request->bank = new Bank();
    $request->bank->priority = BankPriorityEnum::WIRE;
    $request->counterparty = new CounterpartyInfo();
    $request->counterparty->balanceAccountId = 'optio';
    $request->counterparty->bankAccount = new BankAccountInfo();
    $request->counterparty->bankAccount->address = new Address();
    $request->counterparty->bankAccount->address->city = 'Benjaminview';
    $request->counterparty->bankAccount->address->country = 'Kuwait';
    $request->counterparty->bankAccount->address->houseNumberOrName = 'modi';
    $request->counterparty->bankAccount->address->postalCode = '77425';
    $request->counterparty->bankAccount->address->stateOrProvince = 'aspernatur';
    $request->counterparty->bankAccount->address->street = '36162 Howe Village';
    $request->counterparty->bankAccount->iban = 'saepe';
    $request->counterparty->bankAccount->ownerName = new Name();
    $request->counterparty->bankAccount->ownerName->firstName = 'Marisa';
    $request->counterparty->bankAccount->ownerName->fullName = 'in';
    $request->counterparty->bankAccount->ownerName->infix = 'corporis';
    $request->counterparty->bankAccount->ownerName->lastName = 'Moore';
    $request->counterparty->transferInstrumentId = 'iure';
    $request->description = 'saepe';
    $request->id = 'b10faaa2-352c-4595-9907-aff1a3a2fa94';
    $request->paymentInstrumentId = 'commodi';
    $request->reference = 'quam';
    $request->referenceForBeneficiary = 'molestiae';

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
