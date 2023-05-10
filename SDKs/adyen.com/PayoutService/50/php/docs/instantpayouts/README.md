# instantPayouts

### Available Operations

* [postPayout](#postpayout) - Make an instant card payout

## postPayout

With this call, you can pay out to your customers, and funds will be made available within 30 minutes on the cardholder's bank account (this is dependent on whether the issuer supports this functionality). Instant card payouts are only supported for Visa and Mastercard cards.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PayoutRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Card;
use \OpenAPI\OpenAPI\Models\Shared\FundSource;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Shared\Recurring;
use \OpenAPI\OpenAPI\Models\Shared\RecurringContractEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecurringTokenServiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\PayoutRequestShopperInteractionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPayoutSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayoutRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'dolorum';
    $request->amount->value = 447125;
    $request->billingAddress = new Address();
    $request->billingAddress->city = 'Roseworth';
    $request->billingAddress->country = 'Peru';
    $request->billingAddress->houseNumberOrName = 'dicta';
    $request->billingAddress->postalCode = '78436';
    $request->billingAddress->stateOrProvince = 'accusamus';
    $request->billingAddress->street = '53896 Reinger Plains';
    $request->card = new Card();
    $request->card->cvc = 'blanditiis';
    $request->card->expiryMonth = 'deleniti';
    $request->card->expiryYear = 'sapiente';
    $request->card->holderName = 'amet';
    $request->card->issueNumber = 'deserunt';
    $request->card->number = 'nisi';
    $request->card->startMonth = 'vel';
    $request->card->startYear = 'natus';
    $request->fraudOffset = 606393;
    $request->fundSource = new FundSource();
    $request->fundSource->additionalData = [
        'perferendis' => 'nihil',
        'magnam' => 'distinctio',
    ];
    $request->fundSource->billingAddress = new Address();
    $request->fundSource->billingAddress->city = 'Greenboro';
    $request->fundSource->billingAddress->country = 'Holy See (Vatican City State)';
    $request->fundSource->billingAddress->houseNumberOrName = 'natus';
    $request->fundSource->billingAddress->postalCode = '48112-0535';
    $request->fundSource->billingAddress->stateOrProvince = 'quos';
    $request->fundSource->billingAddress->street = '0696 Holden Extensions';
    $request->fundSource->card = new Card();
    $request->fundSource->card->cvc = 'necessitatibus';
    $request->fundSource->card->expiryMonth = 'odit';
    $request->fundSource->card->expiryYear = 'nemo';
    $request->fundSource->card->holderName = 'quasi';
    $request->fundSource->card->issueNumber = 'iure';
    $request->fundSource->card->number = 'doloribus';
    $request->fundSource->card->startMonth = 'debitis';
    $request->fundSource->card->startYear = 'eius';
    $request->fundSource->shopperEmail = 'maxime';
    $request->fundSource->shopperName = new Name();
    $request->fundSource->shopperName->firstName = 'Kaitlyn';
    $request->fundSource->shopperName->lastName = 'Prosacco';
    $request->fundSource->telephoneNumber = 'in';
    $request->merchantAccount = 'architecto';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::ONECLICK;
    $request->recurring->recurringDetailName = 'repudiandae';
    $request->recurring->recurringExpiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-15T07:14:46.128Z');
    $request->recurring->recurringFrequency = 'nihil';
    $request->recurring->tokenService = RecurringTokenServiceEnum::MCTOKENSERVICE;
    $request->reference = 'quibusdam';
    $request->selectedRecurringDetailReference = 'sed';
    $request->shopperEmail = 'saepe';
    $request->shopperInteraction = PayoutRequestShopperInteractionEnum::POS;
    $request->shopperName = new Name();
    $request->shopperName->firstName = 'Alia';
    $request->shopperName->lastName = 'Crooks';
    $request->shopperReference = 'praesentium';
    $request->telephoneNumber = 'natus';

    $requestSecurity = new PostPayoutSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->instantPayouts->postPayout($request, $requestSecurity);

    if ($response->payoutResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
