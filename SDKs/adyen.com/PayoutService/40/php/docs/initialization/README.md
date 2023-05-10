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
        'excepturi' => 'aspernatur',
    ];
    $request->bank = new BankAccount();
    $request->bank->bankAccountNumber = 'perferendis';
    $request->bank->bankCity = 'ad';
    $request->bank->bankLocationId = 'natus';
    $request->bank->bankName = 'sed';
    $request->bank->bic = 'iste';
    $request->bank->countryCode = 'CZ';
    $request->bank->iban = 'natus';
    $request->bank->ownerName = 'laboriosam';
    $request->bank->taxId = 'hic';
    $request->billingAddress = new Address();
    $request->billingAddress->city = 'Petaluma';
    $request->billingAddress->country = 'Jordan';
    $request->billingAddress->houseNumberOrName = 'corporis';
    $request->billingAddress->postalCode = '49600-9666';
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
    $request->recurring->recurringExpiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-03T18:49:53.900Z');
    $request->recurring->recurringFrequency = 'error';
    $request->recurring->tokenService = RecurringTokenServiceEnum::VISATOKENSERVICE;
    $request->selectedBrand = 'quis';
    $request->shopperEmail = 'vitae';
    $request->shopperName = new Name();
    $request->shopperName->firstName = 'Marguerite';
    $request->shopperName->lastName = 'O'Kon';
    $request->shopperReference = 'enim';
    $request->socialSecurityNumber = 'odit';

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
        'sequi' => 'tenetur',
        'ipsam' => 'id',
        'possimus' => 'aut',
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
        'magni' => 'assumenda',
    ];
    $request->amount = new Amount();
    $request->amount->currency = 'ipsam';
    $request->amount->value = 4695;
    $request->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2022-04-28');
    $request->entityType = SubmitRequestEntityTypeEnum::COMPANY;
    $request->fraudOffset = 270008;
    $request->merchantAccount = 'facilis';
    $request->nationality = 'tempore';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::ONECLICK;
    $request->recurring->recurringDetailName = 'delectus';
    $request->recurring->recurringExpiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-02T04:55:20.234Z');
    $request->recurring->recurringFrequency = 'eligendi';
    $request->recurring->tokenService = RecurringTokenServiceEnum::MCTOKENSERVICE;
    $request->reference = 'aliquid';
    $request->selectedRecurringDetailReference = 'provident';
    $request->shopperEmail = 'necessitatibus';
    $request->shopperName = new Name();
    $request->shopperName->firstName = 'Kianna';
    $request->shopperName->lastName = 'Nikolaus';
    $request->shopperReference = 'dolor';
    $request->shopperStatement = 'debitis';
    $request->socialSecurityNumber = 'a';

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
