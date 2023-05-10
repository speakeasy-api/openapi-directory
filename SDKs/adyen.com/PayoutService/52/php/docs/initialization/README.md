# initialization

### Available Operations

* [postStoreDetail](#poststoredetail) - Store payout details
* [postStoreDetailAndSubmitThirdParty](#poststoredetailandsubmitthirdparty) - Store details and submit a payout
* [postSubmitThirdParty](#postsubmitthirdparty) - Submit a payout

## postStoreDetail

Stores payment details under the `PAYOUT` recurring contract. These payment details can be used later to submit a payout via the `/submitThirdParty` call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\StoreDetailRequest;
use \OpenAPI\OpenAPI\Models\Shared\BankAccount;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Card;
use \OpenAPI\OpenAPI\Models\Shared\StoreDetailRequestEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recurring;
use \OpenAPI\OpenAPI\Models\Shared\RecurringContractEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecurringTokenServiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Operations\PostStoreDetailSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreDetailRequest();
    $request->additionalData = [
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
        'sed' => 'iste',
    ];
    $request->bank = new BankAccount();
    $request->bank->bankAccountNumber = 'dolor';
    $request->bank->bankCity = 'natus';
    $request->bank->bankLocationId = 'laboriosam';
    $request->bank->bankName = 'hic';
    $request->bank->bic = 'saepe';
    $request->bank->countryCode = 'NU';
    $request->bank->iban = 'in';
    $request->bank->ownerName = 'corporis';
    $request->bank->taxId = 'iste';
    $request->billingAddress = new Address();
    $request->billingAddress->city = 'Sterlingcester';
    $request->billingAddress->country = 'Bhutan';
    $request->billingAddress->houseNumberOrName = 'ipsa';
    $request->billingAddress->postalCode = '66612-3173';
    $request->billingAddress->stateOrProvince = 'omnis';
    $request->billingAddress->street = '3504 Yundt Ville';
    $request->card = new Card();
    $request->card->cvc = 'architecto';
    $request->card->expiryMonth = 'mollitia';
    $request->card->expiryYear = 'dolorem';
    $request->card->holderName = 'culpa';
    $request->card->issueNumber = 'consequuntur';
    $request->card->number = 'repellat';
    $request->card->startMonth = 'mollitia';
    $request->card->startYear = 'occaecati';
    $request->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2022-08-02');
    $request->entityType = StoreDetailRequestEntityTypeEnum::NATURAL_PERSON;
    $request->fraudOffset = 474697;
    $request->merchantAccount = 'velit';
    $request->nationality = 'error';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::ONECLICK;
    $request->recurring->recurringDetailName = 'quis';
    $request->recurring->recurringExpiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-29T17:10:10.440Z');
    $request->recurring->recurringFrequency = 'animi';
    $request->recurring->tokenService = RecurringTokenServiceEnum::VISATOKENSERVICE;
    $request->selectedBrand = 'odit';
    $request->shopperEmail = 'quo';
    $request->shopperName = new Name();
    $request->shopperName->firstName = 'Cleveland';
    $request->shopperName->lastName = 'Wiegand';
    $request->shopperReference = 'ipsam';
    $request->socialSecurityNumber = 'id';
    $request->telephoneNumber = 'possimus';

    $requestSecurity = new PostStoreDetailSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->initialization->postStoreDetail($request, $requestSecurity);

    if ($response->storeDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postStoreDetailAndSubmitThirdParty

Submits a payout and stores its details for subsequent payouts.

The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\StoreDetailAndSubmitRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\BankAccount;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Card;
use \OpenAPI\OpenAPI\Models\Shared\StoreDetailAndSubmitRequestEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recurring;
use \OpenAPI\OpenAPI\Models\Shared\RecurringContractEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecurringTokenServiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Operations\PostStoreDetailAndSubmitThirdPartySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StoreDetailAndSubmitRequest();
    $request->additionalData = [
        'quasi' => 'error',
    ];
    $request->amount = new Amount();
    $request->amount->currency = 'temporibus';
    $request->amount->value = 673660;
    $request->bank = new BankAccount();
    $request->bank->bankAccountNumber = 'quasi';
    $request->bank->bankCity = 'reiciendis';
    $request->bank->bankLocationId = 'voluptatibus';
    $request->bank->bankName = 'vero';
    $request->bank->bic = 'nihil';
    $request->bank->countryCode = 'LB';
    $request->bank->iban = 'voluptatibus';
    $request->bank->ownerName = 'ipsa';
    $request->bank->taxId = 'omnis';
    $request->billingAddress = new Address();
    $request->billingAddress->city = 'Myrtistown';
    $request->billingAddress->country = 'Argentina';
    $request->billingAddress->houseNumberOrName = 'reprehenderit';
    $request->billingAddress->postalCode = '91324';
    $request->billingAddress->stateOrProvince = 'dicta';
    $request->billingAddress->street = '384 Bergnaum Extension';
    $request->card = new Card();
    $request->card->cvc = 'quidem';
    $request->card->expiryMonth = 'molestias';
    $request->card->expiryYear = 'excepturi';
    $request->card->holderName = 'pariatur';
    $request->card->issueNumber = 'modi';
    $request->card->number = 'praesentium';
    $request->card->startMonth = 'rem';
    $request->card->startYear = 'voluptates';
    $request->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2022-01-29');
    $request->entityType = StoreDetailAndSubmitRequestEntityTypeEnum::COMPANY;
    $request->fraudOffset = 83112;
    $request->merchantAccount = 'itaque';
    $request->nationality = 'incidunt';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::ONECLICK;
    $request->recurring->recurringDetailName = 'consequatur';
    $request->recurring->recurringExpiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-26T02:10:00.226Z');
    $request->recurring->recurringFrequency = 'explicabo';
    $request->recurring->tokenService = RecurringTokenServiceEnum::MCTOKENSERVICE;
    $request->reference = 'distinctio';
    $request->selectedBrand = 'quibusdam';
    $request->shopperEmail = 'labore';
    $request->shopperName = new Name();
    $request->shopperName->firstName = 'Dillan';
    $request->shopperName->lastName = 'Deckow';
    $request->shopperReference = 'aliquid';
    $request->shopperStatement = 'cupiditate';
    $request->socialSecurityNumber = 'quos';
    $request->telephoneNumber = 'perferendis';

    $requestSecurity = new PostStoreDetailAndSubmitThirdPartySecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->initialization->postStoreDetailAndSubmitThirdParty($request, $requestSecurity);

    if ($response->storeDetailAndSubmitResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSubmitThirdParty

Submits a payout using the previously stored payment details. To store payment details, use the `/storeDetail` API call.

The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SubmitRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\SubmitRequestEntityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Recurring;
use \OpenAPI\OpenAPI\Models\Shared\RecurringContractEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecurringTokenServiceEnum;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Operations\PostSubmitThirdPartySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitRequest();
    $request->additionalData = [
        'assumenda' => 'ipsam',
    ];
    $request->amount = new Amount();
    $request->amount->currency = 'alias';
    $request->amount->value = 146441;
    $request->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2021-11-11');
    $request->entityType = SubmitRequestEntityTypeEnum::NATURAL_PERSON;
    $request->fraudOffset = 703737;
    $request->merchantAccount = 'tempore';
    $request->nationality = 'labore';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::PAYOUT;
    $request->recurring->recurringDetailName = 'eum';
    $request->recurring->recurringExpiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-31T00:30:19.135Z');
    $request->recurring->recurringFrequency = 'sint';
    $request->recurring->tokenService = RecurringTokenServiceEnum::VISATOKENSERVICE;
    $request->reference = 'provident';
    $request->selectedRecurringDetailReference = 'necessitatibus';
    $request->shopperEmail = 'sint';
    $request->shopperName = new Name();
    $request->shopperName->firstName = 'Loyce';
    $request->shopperName->lastName = 'Fadel';
    $request->shopperReference = 'debitis';
    $request->shopperStatement = 'a';
    $request->socialSecurityNumber = 'dolorum';

    $requestSecurity = new PostSubmitThirdPartySecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->initialization->postSubmitThirdParty($request, $requestSecurity);

    if ($response->submitResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
