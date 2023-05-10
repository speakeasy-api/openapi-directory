# payments

### Available Operations

* [paymentsAdd](#paymentsadd) - Create Payment
* [paymentsAll](#paymentsall) - List Payments
* [paymentsDelete](#paymentsdelete) - Delete Payment
* [paymentsOne](#paymentsone) - Get Payment
* [paymentsUpdate](#paymentsupdate) - Update Payment

## paymentsAdd

Create Payment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentInput;
use \OpenAPI\OpenAPI\Models\Shared\PosBankAccount;
use \OpenAPI\OpenAPI\Models\Shared\PosBankAccountAchDetails;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentCardDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardCardBrandEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardCardTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardPrepaidTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentCashDetails;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentExternalDetails;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentExternalDetailsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentProcessingFees;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentProcessingFeesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentWalletDetails;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentWalletDetailsStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsAddRequest();
    $request->posPaymentInput = new PosPaymentInput();
    $request->posPaymentInput->amount = 27.5;
    $request->posPaymentInput->appFee = 3;
    $request->posPaymentInput->approved = 37.5;
    $request->posPaymentInput->bankAccount = new PosBankAccount();
    $request->posPaymentInput->bankAccount->accountOwnershipType = 'asperiores';
    $request->posPaymentInput->bankAccount->achDetails = new PosBankAccountAchDetails();
    $request->posPaymentInput->bankAccount->achDetails->accountNumberSuffix = 'adipisci';
    $request->posPaymentInput->bankAccount->achDetails->accountType = 'non';
    $request->posPaymentInput->bankAccount->achDetails->routingNumber = 'amet';
    $request->posPaymentInput->bankAccount->bankName = 'beatae';
    $request->posPaymentInput->bankAccount->country = 'US';
    $request->posPaymentInput->bankAccount->fingerprint = 'dignissimos';
    $request->posPaymentInput->bankAccount->statementDescription = 'a';
    $request->posPaymentInput->bankAccount->transferType = 'debitis';
    $request->posPaymentInput->cardDetails = new PosPaymentCardDetailsInput();
    $request->posPaymentInput->cardDetails->card = new PaymentCardInput();
    $request->posPaymentInput->cardDetails->card->billingAddress = new Address();
    $request->posPaymentInput->cardDetails->card->billingAddress->city = 'San Francisco';
    $request->posPaymentInput->cardDetails->card->billingAddress->contactName = 'Elon Musk';
    $request->posPaymentInput->cardDetails->card->billingAddress->country = 'US';
    $request->posPaymentInput->cardDetails->card->billingAddress->county = 'Santa Clara';
    $request->posPaymentInput->cardDetails->card->billingAddress->email = 'elon@musk.com';
    $request->posPaymentInput->cardDetails->card->billingAddress->fax = '122-111-1111';
    $request->posPaymentInput->cardDetails->card->billingAddress->id = '123';
    $request->posPaymentInput->cardDetails->card->billingAddress->latitude = '40.759211';
    $request->posPaymentInput->cardDetails->card->billingAddress->line1 = 'Main street';
    $request->posPaymentInput->cardDetails->card->billingAddress->line2 = 'apt #';
    $request->posPaymentInput->cardDetails->card->billingAddress->line3 = 'Suite #';
    $request->posPaymentInput->cardDetails->card->billingAddress->line4 = 'delivery instructions';
    $request->posPaymentInput->cardDetails->card->billingAddress->longitude = '-73.984638';
    $request->posPaymentInput->cardDetails->card->billingAddress->name = 'HQ US';
    $request->posPaymentInput->cardDetails->card->billingAddress->phoneNumber = '111-111-1111';
    $request->posPaymentInput->cardDetails->card->billingAddress->postalCode = '94104';
    $request->posPaymentInput->cardDetails->card->billingAddress->rowVersion = '1-12345';
    $request->posPaymentInput->cardDetails->card->billingAddress->salutation = 'Mr';
    $request->posPaymentInput->cardDetails->card->billingAddress->state = 'CA';
    $request->posPaymentInput->cardDetails->card->billingAddress->streetNumber = '25';
    $request->posPaymentInput->cardDetails->card->billingAddress->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->posPaymentInput->cardDetails->card->billingAddress->type = AddressTypeEnum::PRIMARY;
    $request->posPaymentInput->cardDetails->card->billingAddress->website = 'https://elonmusk.com';
    $request->posPaymentInput->cardDetails->card->bin = '41111';
    $request->posPaymentInput->cardDetails->card->cardBrand = PaymentCardCardBrandEnum::DISCOVER;
    $request->posPaymentInput->cardDetails->card->cardType = PaymentCardCardTypeEnum::CREDIT;
    $request->posPaymentInput->cardDetails->card->cardholderName = 'John Doe';
    $request->posPaymentInput->cardDetails->card->customerId = '12345';
    $request->posPaymentInput->cardDetails->card->enabled = true;
    $request->posPaymentInput->cardDetails->card->expMonth = 1;
    $request->posPaymentInput->cardDetails->card->expYear = 2022;
    $request->posPaymentInput->cardDetails->card->fingerprint = ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.';
    $request->posPaymentInput->cardDetails->card->last4 = 'The last 4 digits of the card number.';
    $request->posPaymentInput->cardDetails->card->merchantId = '12345';
    $request->posPaymentInput->cardDetails->card->prepaidType = PaymentCardPrepaidTypeEnum::PREPAID;
    $request->posPaymentInput->cardDetails->card->referenceId = 'card-001';
    $request->posPaymentInput->cardDetails->card->version = '230320320320';
    $request->posPaymentInput->cash = new PosPaymentCashDetails();
    $request->posPaymentInput->cash->amount = 'corporis';
    $request->posPaymentInput->cash->chargeBackAmount = 'harum';
    $request->posPaymentInput->changeBackCashAmount = 20;
    $request->posPaymentInput->currency = CurrencyEnum::USD;
    $request->posPaymentInput->customerId = '12345';
    $request->posPaymentInput->deviceId = '12345';
    $request->posPaymentInput->employeeId = '12345';
    $request->posPaymentInput->externalDetails = new PosPaymentExternalDetails();
    $request->posPaymentInput->externalDetails->source = 'laboriosam';
    $request->posPaymentInput->externalDetails->sourceFeeAmount = 2.5;
    $request->posPaymentInput->externalDetails->sourceId = 'ipsa';
    $request->posPaymentInput->externalDetails->type = PosPaymentExternalDetailsTypeEnum::OTHER;
    $request->posPaymentInput->externalPaymentId = '12345';
    $request->posPaymentInput->idempotencyKey = 'random_string';
    $request->posPaymentInput->locationId = '12345';
    $request->posPaymentInput->merchantId = '12345';
    $request->posPaymentInput->orderId = '12345';
    $request->posPaymentInput->processingFees = [
        new PosPaymentProcessingFees(),
        new PosPaymentProcessingFees(),
        new PosPaymentProcessingFees(),
    ];
    $request->posPaymentInput->refunded = 37.5;
    $request->posPaymentInput->serviceCharges = [
        new ServiceChargeInput(),
    ];
    $request->posPaymentInput->source = PosPaymentSourceEnum::EXTERNAL;
    $request->posPaymentInput->sourceId = '12345';
    $request->posPaymentInput->status = PosPaymentStatusEnum::APPROVED;
    $request->posPaymentInput->tax = 20;
    $request->posPaymentInput->tenderId = '12345';
    $request->posPaymentInput->tip = 7;
    $request->posPaymentInput->total = 37.5;
    $request->posPaymentInput->wallet = new PosPaymentWalletDetails();
    $request->posPaymentInput->wallet->status = PosPaymentWalletDetailsStatusEnum::OTHER;
    $request->raw = false;
    $request->xApideckAppId = 'similique';
    $request->xApideckConsumerId = 'tempora';
    $request->xApideckServiceId = 'aspernatur';

    $requestSecurity = new PaymentsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->paymentsAdd($request, $requestSecurity);

    if ($response->createPosPaymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsAll

List Payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsAllRequest();
    $request->cursor = 'voluptas';
    $request->fields = 'voluptas';
    $request->limit = 374296;
    $request->raw = false;
    $request->xApideckAppId = 'minima';
    $request->xApideckConsumerId = 'nobis';
    $request->xApideckServiceId = 'dolorum';

    $requestSecurity = new PaymentsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->paymentsAll($request, $requestSecurity);

    if ($response->getPosPaymentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsDelete

Delete Payment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsDeleteRequest();
    $request->id = '3c28744e-d53b-488f-ba8d-8f5c0b2f2fb7';
    $request->raw = false;
    $request->xApideckAppId = 'expedita';
    $request->xApideckConsumerId = 'ab';
    $request->xApideckServiceId = 'iste';

    $requestSecurity = new PaymentsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->paymentsDelete($request, $requestSecurity);

    if ($response->deletePosPaymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsOne

Get Payment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsOneRequest();
    $request->fields = 'dolore';
    $request->id = 'a276b269-16fe-41f0-8f42-94e3698f447f';
    $request->raw = false;
    $request->xApideckAppId = 'ex';
    $request->xApideckConsumerId = 'sit';
    $request->xApideckServiceId = 'non';

    $requestSecurity = new PaymentsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->paymentsOne($request, $requestSecurity);

    if ($response->getPosPaymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsUpdate

Update Payment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentInput;
use \OpenAPI\OpenAPI\Models\Shared\PosBankAccount;
use \OpenAPI\OpenAPI\Models\Shared\PosBankAccountAchDetails;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentCardDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardCardBrandEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardCardTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardPrepaidTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentCashDetails;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentExternalDetails;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentExternalDetailsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentProcessingFees;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentProcessingFeesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentWalletDetails;
use \OpenAPI\OpenAPI\Models\Shared\PosPaymentWalletDetailsStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsUpdateRequest();
    $request->posPaymentInput = new PosPaymentInput();
    $request->posPaymentInput->amount = 27.5;
    $request->posPaymentInput->appFee = 3;
    $request->posPaymentInput->approved = 37.5;
    $request->posPaymentInput->bankAccount = new PosBankAccount();
    $request->posPaymentInput->bankAccount->accountOwnershipType = 'officiis';
    $request->posPaymentInput->bankAccount->achDetails = new PosBankAccountAchDetails();
    $request->posPaymentInput->bankAccount->achDetails->accountNumberSuffix = 'praesentium';
    $request->posPaymentInput->bankAccount->achDetails->accountType = 'facilis';
    $request->posPaymentInput->bankAccount->achDetails->routingNumber = 'quaerat';
    $request->posPaymentInput->bankAccount->bankName = 'incidunt';
    $request->posPaymentInput->bankAccount->country = 'US';
    $request->posPaymentInput->bankAccount->fingerprint = 'ipsam';
    $request->posPaymentInput->bankAccount->statementDescription = 'debitis';
    $request->posPaymentInput->bankAccount->transferType = 'rem';
    $request->posPaymentInput->cardDetails = new PosPaymentCardDetailsInput();
    $request->posPaymentInput->cardDetails->card = new PaymentCardInput();
    $request->posPaymentInput->cardDetails->card->billingAddress = new Address();
    $request->posPaymentInput->cardDetails->card->billingAddress->city = 'San Francisco';
    $request->posPaymentInput->cardDetails->card->billingAddress->contactName = 'Elon Musk';
    $request->posPaymentInput->cardDetails->card->billingAddress->country = 'US';
    $request->posPaymentInput->cardDetails->card->billingAddress->county = 'Santa Clara';
    $request->posPaymentInput->cardDetails->card->billingAddress->email = 'elon@musk.com';
    $request->posPaymentInput->cardDetails->card->billingAddress->fax = '122-111-1111';
    $request->posPaymentInput->cardDetails->card->billingAddress->id = '123';
    $request->posPaymentInput->cardDetails->card->billingAddress->latitude = '40.759211';
    $request->posPaymentInput->cardDetails->card->billingAddress->line1 = 'Main street';
    $request->posPaymentInput->cardDetails->card->billingAddress->line2 = 'apt #';
    $request->posPaymentInput->cardDetails->card->billingAddress->line3 = 'Suite #';
    $request->posPaymentInput->cardDetails->card->billingAddress->line4 = 'delivery instructions';
    $request->posPaymentInput->cardDetails->card->billingAddress->longitude = '-73.984638';
    $request->posPaymentInput->cardDetails->card->billingAddress->name = 'HQ US';
    $request->posPaymentInput->cardDetails->card->billingAddress->phoneNumber = '111-111-1111';
    $request->posPaymentInput->cardDetails->card->billingAddress->postalCode = '94104';
    $request->posPaymentInput->cardDetails->card->billingAddress->rowVersion = '1-12345';
    $request->posPaymentInput->cardDetails->card->billingAddress->salutation = 'Mr';
    $request->posPaymentInput->cardDetails->card->billingAddress->state = 'CA';
    $request->posPaymentInput->cardDetails->card->billingAddress->streetNumber = '25';
    $request->posPaymentInput->cardDetails->card->billingAddress->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->posPaymentInput->cardDetails->card->billingAddress->type = AddressTypeEnum::PRIMARY;
    $request->posPaymentInput->cardDetails->card->billingAddress->website = 'https://elonmusk.com';
    $request->posPaymentInput->cardDetails->card->bin = '41111';
    $request->posPaymentInput->cardDetails->card->cardBrand = PaymentCardCardBrandEnum::VISA;
    $request->posPaymentInput->cardDetails->card->cardType = PaymentCardCardTypeEnum::CREDIT;
    $request->posPaymentInput->cardDetails->card->cardholderName = 'John Doe';
    $request->posPaymentInput->cardDetails->card->customerId = '12345';
    $request->posPaymentInput->cardDetails->card->enabled = true;
    $request->posPaymentInput->cardDetails->card->expMonth = 1;
    $request->posPaymentInput->cardDetails->card->expYear = 2022;
    $request->posPaymentInput->cardDetails->card->fingerprint = ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.';
    $request->posPaymentInput->cardDetails->card->last4 = 'The last 4 digits of the card number.';
    $request->posPaymentInput->cardDetails->card->merchantId = '12345';
    $request->posPaymentInput->cardDetails->card->prepaidType = PaymentCardPrepaidTypeEnum::PREPAID;
    $request->posPaymentInput->cardDetails->card->referenceId = 'card-001';
    $request->posPaymentInput->cardDetails->card->version = '230320320320';
    $request->posPaymentInput->cash = new PosPaymentCashDetails();
    $request->posPaymentInput->cash->amount = 'nobis';
    $request->posPaymentInput->cash->chargeBackAmount = 'error';
    $request->posPaymentInput->changeBackCashAmount = 20;
    $request->posPaymentInput->currency = CurrencyEnum::USD;
    $request->posPaymentInput->customerId = '12345';
    $request->posPaymentInput->deviceId = '12345';
    $request->posPaymentInput->employeeId = '12345';
    $request->posPaymentInput->externalDetails = new PosPaymentExternalDetails();
    $request->posPaymentInput->externalDetails->source = 'veniam';
    $request->posPaymentInput->externalDetails->sourceFeeAmount = 2.5;
    $request->posPaymentInput->externalDetails->sourceId = 'minima';
    $request->posPaymentInput->externalDetails->type = PosPaymentExternalDetailsTypeEnum::OTHER;
    $request->posPaymentInput->externalPaymentId = '12345';
    $request->posPaymentInput->idempotencyKey = 'random_string';
    $request->posPaymentInput->locationId = '12345';
    $request->posPaymentInput->merchantId = '12345';
    $request->posPaymentInput->orderId = '12345';
    $request->posPaymentInput->processingFees = [
        new PosPaymentProcessingFees(),
        new PosPaymentProcessingFees(),
        new PosPaymentProcessingFees(),
        new PosPaymentProcessingFees(),
    ];
    $request->posPaymentInput->refunded = 37.5;
    $request->posPaymentInput->serviceCharges = [
        new ServiceChargeInput(),
        new ServiceChargeInput(),
        new ServiceChargeInput(),
        new ServiceChargeInput(),
    ];
    $request->posPaymentInput->source = PosPaymentSourceEnum::EXTERNAL;
    $request->posPaymentInput->sourceId = '12345';
    $request->posPaymentInput->status = PosPaymentStatusEnum::APPROVED;
    $request->posPaymentInput->tax = 20;
    $request->posPaymentInput->tenderId = '12345';
    $request->posPaymentInput->tip = 7;
    $request->posPaymentInput->total = 37.5;
    $request->posPaymentInput->wallet = new PosPaymentWalletDetails();
    $request->posPaymentInput->wallet->status = PosPaymentWalletDetailsStatusEnum::AUTHORIZED;
    $request->id = '0e457e18-58b6-4a89-bbe3-a5aa8e4824d0';
    $request->raw = false;
    $request->xApideckAppId = 'culpa';
    $request->xApideckConsumerId = 'expedita';
    $request->xApideckServiceId = 'magnam';

    $requestSecurity = new PaymentsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->paymentsUpdate($request, $requestSecurity);

    if ($response->updatePosPaymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
