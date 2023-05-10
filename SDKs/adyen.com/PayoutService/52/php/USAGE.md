<!-- Start SDK Example Usage -->
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
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->bank = new BankAccount();
    $request->bank->bankAccountNumber = 'illum';
    $request->bank->bankCity = 'vel';
    $request->bank->bankLocationId = 'error';
    $request->bank->bankName = 'deserunt';
    $request->bank->bic = 'suscipit';
    $request->bank->countryCode = 'IS';
    $request->bank->iban = 'magnam';
    $request->bank->ownerName = 'debitis';
    $request->bank->taxId = 'ipsa';
    $request->billingAddress = new Address();
    $request->billingAddress->city = 'Edinburg';
    $request->billingAddress->country = 'Holy See (Vatican City State)';
    $request->billingAddress->houseNumberOrName = 'molestiae';
    $request->billingAddress->postalCode = '85453-9803';
    $request->billingAddress->stateOrProvince = 'veritatis';
    $request->billingAddress->street = '0389 Connelly Trace';
    $request->card = new Card();
    $request->card->cvc = 'at';
    $request->card->expiryMonth = 'maiores';
    $request->card->expiryYear = 'molestiae';
    $request->card->holderName = 'quod';
    $request->card->issueNumber = 'quod';
    $request->card->number = 'esse';
    $request->card->startMonth = 'totam';
    $request->card->startYear = 'porro';
    $request->dateOfBirth = DateTime::createFromFormat('Y-m-d', '2022-10-06');
    $request->entityType = StoreDetailRequestEntityTypeEnum::COMPANY;
    $request->fraudOffset = 639921;
    $request->merchantAccount = 'occaecati';
    $request->nationality = 'fugit';
    $request->recurring = new Recurring();
    $request->recurring->contract = RecurringContractEnum::RECURRING;
    $request->recurring->recurringDetailName = 'hic';
    $request->recurring->recurringExpiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-08T13:49:32.889Z');
    $request->recurring->recurringFrequency = 'beatae';
    $request->recurring->tokenService = RecurringTokenServiceEnum::VISATOKENSERVICE;
    $request->selectedBrand = 'molestiae';
    $request->shopperEmail = 'modi';
    $request->shopperName = new Name();
    $request->shopperName->firstName = 'Christy';
    $request->shopperName->lastName = 'Ryan';
    $request->shopperReference = 'cum';
    $request->socialSecurityNumber = 'esse';
    $request->telephoneNumber = 'ipsum';

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
<!-- End SDK Example Usage -->