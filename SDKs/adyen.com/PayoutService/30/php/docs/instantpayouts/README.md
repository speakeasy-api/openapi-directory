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
    $request->amount->currency = 'provident';
    $request->amount->value = 896039;
    $request->billingAddress = new Address();
    $request->billingAddress->city = 'Loyceburgh';
    $request->billingAddress->country = 'Togo';
    $request->billingAddress->houseNumberOrName = 'a';
    $request->billingAddress->postalCode = '44896-1278';
    $request->billingAddress->stateOrProvince = 'ea';
    $request->billingAddress->street = '6825 Shannon Walk';
    $request->card = new Card();
    $request->card->cvc = 'quidem';
    $request->card->expiryMonth = 'provident';
    $request->card->expiryYear = 'nam';
    $request->card->holderName = 'id';
    $request->card->issueNumber = 'blanditiis';
    $request->card->number = 'deleniti';
    $request->card->startMonth = 'sapiente';
    $request->card->startYear = 'amet';
    $request->fraudOffset = 643990;
    $request->fundSource = new FundSource();
    $request->fundSource->additionalData = [
        'vel' => 'natus',
        'omnis' => 'molestiae',
    ];
    $request->fundSource->billingAddress = new Address();
    $request->fundSource->billingAddress->city = 'South Elishacester';
    $request->fundSource->billingAddress->country = 'Northern Mariana Islands';
    $request->fundSource->billingAddress->houseNumberOrName = 'labore';
    $request->fundSource->billingAddress->postalCode = '36748';
    $request->fundSource->billingAddress->stateOrProvince = 'aspernatur';
    $request->fundSource->billingAddress->street = '20535 Marvin Burg';
    $request->fundSource->card = new Card();
    $request->fundSource->card->cvc = 'mollitia';
    $request->fundSource->card->expiryMonth = 'reiciendis';
    $request->fundSource->card->expiryYear = 'mollitia';
    $request->fundSource->card->holderName = 'ad';
    $request->fundSource->card->issueNumber = 'eum';
    $request->fundSource->card->number = 'dolor';
    $request->fundSource->card->startMonth = 'necessitatibus';
    $request->fundSource->card->startYear = 'odit';
    $request->fundSource->shopperEmail = 'nemo';
    $request->fundSource->shopperName = new Name();
    $request->fundSource->shopperName->firstName = 'Avis';
    $request->fundSource->shopperName->lastName = 'Kertzmann';
    $request->fundSource->telephoneNumber = 'doloribus';
    $request->merchantAccount = 'debitis';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::ONECLICK;
    $request->recurring->recurringDetailName = 'maxime';
    $request->recurring->tokenService = RecurringTokenServiceEnum::MCTOKENSERVICE;
    $request->reference = 'facilis';
    $request->selectedRecurringDetailReference = 'in';
    $request->shopperEmail = 'architecto';
    $request->shopperInteraction = PayoutRequestShopperInteractionEnum::ECOMMERCE;
    $request->shopperName = new Name();
    $request->shopperName->firstName = 'Tevin';
    $request->shopperName->lastName = 'Herman';
    $request->shopperReference = 'expedita';
    $request->telephoneNumber = 'nihil';

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
