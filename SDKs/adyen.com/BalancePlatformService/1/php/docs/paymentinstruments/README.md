# paymentInstruments

### Available Operations

* [getPaymentInstrumentsId](#getpaymentinstrumentsid) - Get a payment instrument
* [getPaymentInstrumentsIdReveal](#getpaymentinstrumentsidreveal) - Get the PAN of a payment instrument
* [getPaymentInstrumentsIdTransactionRules](#getpaymentinstrumentsidtransactionrules) - Get all transaction rules for a payment instrument
* [patchPaymentInstrumentsId](#patchpaymentinstrumentsid) - Update a payment instrument
* [postPaymentInstruments](#postpaymentinstruments) - Create a payment instrument

## getPaymentInstrumentsId

Returns the details of a payment instrument.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInstrumentsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInstrumentsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentInstrumentsIdRequest();
    $request->id = 'f515cc41-3aa6-43aa-a8d6-7864dbb675fd';

    $requestSecurity = new GetPaymentInstrumentsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentInstruments->getPaymentInstrumentsId($request, $requestSecurity);

    if ($response->paymentInstrument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentInstrumentsIdReveal

Returns the primary account number (PAN) of a payment instrument.

To make this request, your API credential must have the following [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):

* Balance Platform BCL PCI role

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInstrumentsIdRevealRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInstrumentsIdRevealSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentInstrumentsIdRevealRequest();
    $request->id = '5e60b375-ed4f-46fb-ae41-f33317fe35b6';

    $requestSecurity = new GetPaymentInstrumentsIdRevealSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentInstruments->getPaymentInstrumentsIdReveal($request, $requestSecurity);

    if ($response->paymentInstrumentRevealInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPaymentInstrumentsIdTransactionRules

Returns a list of transaction rules associated with a payment instrument.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInstrumentsIdTransactionRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentInstrumentsIdTransactionRulesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentInstrumentsIdTransactionRulesRequest();
    $request->id = '0eb1ea42-6555-4ba3-8287-44ed53b88f3a';

    $requestSecurity = new GetPaymentInstrumentsIdTransactionRulesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentInstruments->getPaymentInstrumentsIdTransactionRules($request, $requestSecurity);

    if ($response->transactionRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchPaymentInstrumentsId

Updates a payment instrument. Once a payment instrument is already active, you can only update its status. However, for cards created with **inactive** status, you can still update the balance account associated with the card.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchPaymentInstrumentsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInstrumentUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CardInfo;
use \OpenAPI\OpenAPI\Models\Shared\Authentication;
use \OpenAPI\OpenAPI\Models\Shared\Phone;
use \OpenAPI\OpenAPI\Models\Shared\PhoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CardConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BulkAddress;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Shared\PersonalData;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberPhoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CardInfoFormFactorEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInstrumentUpdateRequestStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchPaymentInstrumentsIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchPaymentInstrumentsIdRequest();
    $request->paymentInstrumentUpdateRequest = new PaymentInstrumentUpdateRequest();
    $request->paymentInstrumentUpdateRequest->balanceAccountId = 'corrupti';
    $request->paymentInstrumentUpdateRequest->card = new CardInfo();
    $request->paymentInstrumentUpdateRequest->card->authentication = new Authentication();
    $request->paymentInstrumentUpdateRequest->card->authentication->email = 'Josianne_Weimann@hotmail.com';
    $request->paymentInstrumentUpdateRequest->card->authentication->password = 'sit';
    $request->paymentInstrumentUpdateRequest->card->authentication->phone = new Phone();
    $request->paymentInstrumentUpdateRequest->card->authentication->phone->number = 'rerum';
    $request->paymentInstrumentUpdateRequest->card->authentication->phone->type = PhoneTypeEnum::LANDLINE;
    $request->paymentInstrumentUpdateRequest->card->brand = 'reiciendis';
    $request->paymentInstrumentUpdateRequest->card->brandVariant = 'explicabo';
    $request->paymentInstrumentUpdateRequest->card->cardholderName = 'asperiores';
    $request->paymentInstrumentUpdateRequest->card->configuration = new CardConfiguration();
    $request->paymentInstrumentUpdateRequest->card->configuration->activation = 'facilis';
    $request->paymentInstrumentUpdateRequest->card->configuration->activationUrl = 'voluptate';
    $request->paymentInstrumentUpdateRequest->card->configuration->bulkAddress = new BulkAddress();
    $request->paymentInstrumentUpdateRequest->card->configuration->bulkAddress->city = 'Bernierfurt';
    $request->paymentInstrumentUpdateRequest->card->configuration->bulkAddress->company = 'Osinski Inc';
    $request->paymentInstrumentUpdateRequest->card->configuration->bulkAddress->country = 'Jordan';
    $request->paymentInstrumentUpdateRequest->card->configuration->bulkAddress->email = 'Mauricio_Cole@yahoo.com';
    $request->paymentInstrumentUpdateRequest->card->configuration->bulkAddress->houseNumberOrName = 'architecto';
    $request->paymentInstrumentUpdateRequest->card->configuration->bulkAddress->mobile = '1-980-905-9215 x282';
    $request->paymentInstrumentUpdateRequest->card->configuration->bulkAddress->postalCode = '55922';
    $request->paymentInstrumentUpdateRequest->card->configuration->bulkAddress->stateOrProvince = 'voluptate';
    $request->paymentInstrumentUpdateRequest->card->configuration->bulkAddress->street = '402 Lakin Rapid';
    $request->paymentInstrumentUpdateRequest->card->configuration->cardImageId = 'quaerat';
    $request->paymentInstrumentUpdateRequest->card->configuration->carrier = 'incidunt';
    $request->paymentInstrumentUpdateRequest->card->configuration->carrierImageId = 'ipsam';
    $request->paymentInstrumentUpdateRequest->card->configuration->configurationProfileId = 'debitis';
    $request->paymentInstrumentUpdateRequest->card->configuration->currency = 'rem';
    $request->paymentInstrumentUpdateRequest->card->configuration->envelope = 'sit';
    $request->paymentInstrumentUpdateRequest->card->configuration->insert = 'nobis';
    $request->paymentInstrumentUpdateRequest->card->configuration->language = 'error';
    $request->paymentInstrumentUpdateRequest->card->configuration->logoImageId = 'veniam';
    $request->paymentInstrumentUpdateRequest->card->configuration->pinMailer = 'minima';
    $request->paymentInstrumentUpdateRequest->card->configuration->shipmentMethod = 'recusandae';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact = new Contact();
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->address = new Address();
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->address->city = 'Stamford';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->address->country = 'Chad';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->address->houseNumberOrName = 'aperiam';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->address->postalCode = '23481-5357';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->address->stateOrProvince = 'laboriosam';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->address->street = '569 Trantow Estate';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->email = 'Evangeline_Nikolaus87@hotmail.com';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->fullPhoneNumber = 'tempora';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->name = new Name();
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->name->firstName = 'Karina';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->name->lastName = 'Cormier';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->personalData = new PersonalData();
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->personalData->dateOfBirth = 'ut';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->personalData->idNumber = 'fugiat';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->personalData->nationality = 'voluptatem';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->phoneNumber = new PhoneNumber();
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->phoneNumber->phoneCountryCode = 'culpa';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->phoneNumber->phoneNumber = 'expedita';
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->phoneNumber->phoneType = PhoneNumberPhoneTypeEnum::LANDLINE;
    $request->paymentInstrumentUpdateRequest->card->deliveryContact->webAddress = 'consequatur';
    $request->paymentInstrumentUpdateRequest->card->formFactor = CardInfoFormFactorEnum::UNKNOWN;
    $request->paymentInstrumentUpdateRequest->status = PaymentInstrumentUpdateRequestStatusEnum::LOST;
    $request->paymentInstrumentUpdateRequest->statusComment = 'sit';
    $request->id = '88e51862-065e-4904-b3b1-194b8abf603a';

    $requestSecurity = new PatchPaymentInstrumentsIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentInstruments->patchPaymentInstrumentsId($request, $requestSecurity);

    if ($response->updatePaymentInstrument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPaymentInstruments

Creates a payment instrument to issue a physical card, a virtual card, or a business account to your user.

 For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/marketplaces-and-platforms/business-accounts).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInstrumentInfo;
use \OpenAPI\OpenAPI\Models\Shared\CardInfo;
use \OpenAPI\OpenAPI\Models\Shared\Authentication;
use \OpenAPI\OpenAPI\Models\Shared\Phone;
use \OpenAPI\OpenAPI\Models\Shared\PhoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CardConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BulkAddress;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\Name;
use \OpenAPI\OpenAPI\Models\Shared\PersonalData;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberPhoneTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CardInfoFormFactorEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInstrumentInfoStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentInstrumentInfoTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostPaymentInstrumentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentInstrumentInfo();
    $request->balanceAccountId = 'voluptate';
    $request->card = new CardInfo();
    $request->card->authentication = new Authentication();
    $request->card->authentication->email = 'Ward_McKenzie91@yahoo.com';
    $request->card->authentication->password = 'perferendis';
    $request->card->authentication->phone = new Phone();
    $request->card->authentication->phone->number = 'est';
    $request->card->authentication->phone->type = PhoneTypeEnum::MOBILE;
    $request->card->brand = 'reprehenderit';
    $request->card->brandVariant = 'facere';
    $request->card->cardholderName = 'fuga';
    $request->card->configuration = new CardConfiguration();
    $request->card->configuration->activation = 'praesentium';
    $request->card->configuration->activationUrl = 'mollitia';
    $request->card->configuration->bulkAddress = new BulkAddress();
    $request->card->configuration->bulkAddress->city = 'North Paul';
    $request->card->configuration->bulkAddress->company = 'Boyer, Littel and Kihn';
    $request->card->configuration->bulkAddress->country = 'Yemen';
    $request->card->configuration->bulkAddress->email = 'Gerald.Powlowski46@yahoo.com';
    $request->card->configuration->bulkAddress->houseNumberOrName = 'amet';
    $request->card->configuration->bulkAddress->mobile = '(556) 988-6314 x95865';
    $request->card->configuration->bulkAddress->postalCode = '95519';
    $request->card->configuration->bulkAddress->stateOrProvince = 'dolorum';
    $request->card->configuration->bulkAddress->street = '290 Buckridge Burgs';
    $request->card->configuration->cardImageId = 'beatae';
    $request->card->configuration->carrier = 'dolores';
    $request->card->configuration->carrierImageId = 'enim';
    $request->card->configuration->configurationProfileId = 'laboriosam';
    $request->card->configuration->currency = 'velit';
    $request->card->configuration->envelope = 'a';
    $request->card->configuration->insert = 'molestias';
    $request->card->configuration->language = 'magnam';
    $request->card->configuration->logoImageId = 'saepe';
    $request->card->configuration->pinMailer = 'consequuntur';
    $request->card->configuration->shipmentMethod = 'occaecati';
    $request->card->deliveryContact = new Contact();
    $request->card->deliveryContact->address = new Address();
    $request->card->deliveryContact->address->city = 'New Braunfels';
    $request->card->deliveryContact->address->country = 'Jersey';
    $request->card->deliveryContact->address->houseNumberOrName = 'adipisci';
    $request->card->deliveryContact->address->postalCode = '51163-4603';
    $request->card->deliveryContact->address->stateOrProvince = 'quidem';
    $request->card->deliveryContact->address->street = '280 Andy Manor';
    $request->card->deliveryContact->email = 'Jarred73@gmail.com';
    $request->card->deliveryContact->fullPhoneNumber = 'iure';
    $request->card->deliveryContact->name = new Name();
    $request->card->deliveryContact->name->firstName = 'Stan';
    $request->card->deliveryContact->name->lastName = 'Dibbert';
    $request->card->deliveryContact->personalData = new PersonalData();
    $request->card->deliveryContact->personalData->dateOfBirth = 'laborum';
    $request->card->deliveryContact->personalData->idNumber = 'distinctio';
    $request->card->deliveryContact->personalData->nationality = 'voluptatum';
    $request->card->deliveryContact->phoneNumber = new PhoneNumber();
    $request->card->deliveryContact->phoneNumber->phoneCountryCode = 'rem';
    $request->card->deliveryContact->phoneNumber->phoneNumber = 'aliquam';
    $request->card->deliveryContact->phoneNumber->phoneType = PhoneNumberPhoneTypeEnum::LANDLINE;
    $request->card->deliveryContact->webAddress = 'repellat';
    $request->card->formFactor = CardInfoFormFactorEnum::PHYSICAL;
    $request->description = 'corporis';
    $request->issuingCountryCode = 'perspiciatis';
    $request->paymentInstrumentGroupId = 'nihil';
    $request->reference = 'mollitia';
    $request->status = PaymentInstrumentInfoStatusEnum::LOST;
    $request->type = PaymentInstrumentInfoTypeEnum::BANK_ACCOUNT;

    $requestSecurity = new PostPaymentInstrumentsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentInstruments->postPaymentInstruments($request, $requestSecurity);

    if ($response->paymentInstrument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
