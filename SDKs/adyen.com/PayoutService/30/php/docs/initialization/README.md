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
        'cum' => 'esse',
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
        'ad' => 'natus',
    ];
    $request->bank = new BankAccount();
    $request->bank->bankAccountNumber = 'sed';
    $request->bank->bankCity = 'iste';
    $request->bank->bankLocationId = 'dolor';
    $request->bank->bankName = 'natus';
    $request->bank->bic = 'laboriosam';
    $request->bank->countryCode = 'UZ';
    $request->bank->iban = 'saepe';
    $request->bank->ownerName = 'fuga';
    $request->bank->taxId = 'in';
    $request->billingAddress = new Address();
    $request->billingAddress->city = 'New Humberto';
    $request->billingAddress->country = 'Trinidad and Tobago';
    $request->billingAddress->houseNumberOrName = 'quidem';
    $request->billingAddress->postalCode = '09666';
    $request->billingAddress->stateOrProvince = 'dolores';
    $request->billingAddress->street = '31736 Era Mountains';
    $request->card = new Card();
    $request->card->cvc = 'accusantium';
    $request->card->expiryMonth = 'iure';
    $request->card->expiryYear = 'culpa';
    $request->card->holderName = 'doloribus';
    $request->card->issueNumber = 'sapiente';
    $request->card->number = 'architecto';
    $request->card->startMonth = 'mollitia';
    $request->card->startYear = 'dolorem';
    $request->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2022-09-05');
    $request->entityType = StoreDetailRequestEntityTypeEnum::COMPANY;
    $request->fraudOffset = 653108;
    $request->merchantAccount = 'occaecati';
    $request->nationality = 'numquam';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::RECURRING;
    $request->recurring->recurringDetailName = 'quam';
    $request->recurring->tokenService = RecurringTokenServiceEnum::VISATOKENSERVICE;
    $request->selectedBrand = 'velit';
    $request->shopperEmail = 'error';
    $request->shopperName = new Name();
    $request->shopperName->firstName = 'Carmelo';
    $request->shopperName->lastName = 'Hauck';
    $request->shopperReference = 'vitae';
    $request->socialSecurityNumber = 'laborum';

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
        'enim' => 'odit',
        'quo' => 'sequi',
        'tenetur' => 'ipsam',
    ];
    $request->amount = new Amount();
    $request->amount->currency = 'id';
    $request->amount->value = 820994;
    $request->bank = new BankAccount();
    $request->bank->bankAccountNumber = 'aut';
    $request->bank->bankCity = 'quasi';
    $request->bank->bankLocationId = 'error';
    $request->bank->bankName = 'temporibus';
    $request->bank->bic = 'laborum';
    $request->bank->countryCode = 'BI';
    $request->bank->iban = 'reiciendis';
    $request->bank->ownerName = 'voluptatibus';
    $request->bank->taxId = 'vero';
    $request->billingAddress = new Address();
    $request->billingAddress->city = 'Johnworth';
    $request->billingAddress->country = 'Austria';
    $request->billingAddress->houseNumberOrName = 'omnis';
    $request->billingAddress->postalCode = '70042';
    $request->billingAddress->stateOrProvince = 'maiores';
    $request->billingAddress->street = '32416 Shania Isle';
    $request->card = new Card();
    $request->card->cvc = 'repudiandae';
    $request->card->expiryMonth = 'quae';
    $request->card->expiryYear = 'ipsum';
    $request->card->holderName = 'quidem';
    $request->card->issueNumber = 'molestias';
    $request->card->number = 'excepturi';
    $request->card->startMonth = 'pariatur';
    $request->card->startYear = 'modi';
    $request->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2021-12-15');
    $request->entityType = StoreDetailAndSubmitRequestEntityTypeEnum::COMPANY;
    $request->fraudOffset = 93940;
    $request->merchantAccount = 'repudiandae';
    $request->nationality = 'sint';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::ONECLICK;
    $request->recurring->recurringDetailName = 'itaque';
    $request->recurring->tokenService = RecurringTokenServiceEnum::VISATOKENSERVICE;
    $request->reference = 'enim';
    $request->selectedBrand = 'consequatur';
    $request->shopperEmail = 'est';
    $request->shopperName = new Name();
    $request->shopperName->firstName = 'Roosevelt';
    $request->shopperName->lastName = 'Cole';
    $request->shopperReference = 'deserunt';
    $request->shopperStatement = 'distinctio';
    $request->socialSecurityNumber = 'quibusdam';

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
        'modi' => 'qui',
        'aliquid' => 'cupiditate',
    ];
    $request->amount = new Amount();
    $request->amount->currency = 'quos';
    $request->amount->value = 20107;
    $request->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2022-03-04');
    $request->entityType = SubmitRequestEntityTypeEnum::NATURAL_PERSON;
    $request->fraudOffset = 4695;
    $request->merchantAccount = 'fugit';
    $request->nationality = 'dolorum';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::RECURRING;
    $request->recurring->recurringDetailName = 'tempora';
    $request->recurring->tokenService = RecurringTokenServiceEnum::MCTOKENSERVICE;
    $request->reference = 'tempore';
    $request->selectedRecurringDetailReference = 'labore';
    $request->shopperEmail = 'delectus';
    $request->shopperName = new Name();
    $request->shopperName->firstName = 'Horacio';
    $request->shopperName->lastName = 'Franey';
    $request->shopperReference = 'eligendi';
    $request->shopperStatement = 'sint';
    $request->socialSecurityNumber = 'aliquid';

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
