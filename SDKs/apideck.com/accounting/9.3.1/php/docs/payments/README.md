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
use \OpenAPI\OpenAPI\Models\Shared\PaymentInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentAllocationsInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentAllocationsAllocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedCustomerInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentPaymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedSupplierInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentPaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsAddRequest();
    $request->paymentInput = new PaymentInput();
    $request->paymentInput->account = new LinkedLedgerAccountInput();
    $request->paymentInput->account->code = '453';
    $request->paymentInput->account->id = '123456';
    $request->paymentInput->account->nominalCode = 'N091';
    $request->paymentInput->accountsReceivableAccountId = '123456';
    $request->paymentInput->accountsReceivableAccountType = 'Account';
    $request->paymentInput->allocations = [
        new PaymentAllocationsInput(),
        new PaymentAllocationsInput(),
    ];
    $request->paymentInput->currency = CurrencyEnum::USD;
    $request->paymentInput->currencyRate = 0.69;
    $request->paymentInput->customer = new LinkedCustomerInput();
    $request->paymentInput->customer->displayName = 'Windsurf Shop';
    $request->paymentInput->customer->id = '12345';
    $request->paymentInput->customer->name = 'Windsurf Shop';
    $request->paymentInput->displayId = '123456';
    $request->paymentInput->note = 'Some notes about this payment';
    $request->paymentInput->paymentMethod = 'Credit Card';
    $request->paymentInput->paymentMethodId = '123456';
    $request->paymentInput->paymentMethodReference = '123456';
    $request->paymentInput->reconciled = true;
    $request->paymentInput->reference = '123456';
    $request->paymentInput->rowVersion = '1-12345';
    $request->paymentInput->status = PaymentPaymentStatusEnum::AUTHORISED;
    $request->paymentInput->supplier = new LinkedSupplierInput();
    $request->paymentInput->supplier->address = new Address();
    $request->paymentInput->supplier->address->city = 'San Francisco';
    $request->paymentInput->supplier->address->contactName = 'Elon Musk';
    $request->paymentInput->supplier->address->country = 'US';
    $request->paymentInput->supplier->address->county = 'Santa Clara';
    $request->paymentInput->supplier->address->email = 'elon@musk.com';
    $request->paymentInput->supplier->address->fax = '122-111-1111';
    $request->paymentInput->supplier->address->id = '123';
    $request->paymentInput->supplier->address->latitude = '40.759211';
    $request->paymentInput->supplier->address->line1 = 'Main street';
    $request->paymentInput->supplier->address->line2 = 'apt #';
    $request->paymentInput->supplier->address->line3 = 'Suite #';
    $request->paymentInput->supplier->address->line4 = 'delivery instructions';
    $request->paymentInput->supplier->address->longitude = '-73.984638';
    $request->paymentInput->supplier->address->name = 'HQ US';
    $request->paymentInput->supplier->address->phoneNumber = '111-111-1111';
    $request->paymentInput->supplier->address->postalCode = '94104';
    $request->paymentInput->supplier->address->rowVersion = '1-12345';
    $request->paymentInput->supplier->address->salutation = 'Mr';
    $request->paymentInput->supplier->address->state = 'CA';
    $request->paymentInput->supplier->address->streetNumber = '25';
    $request->paymentInput->supplier->address->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->paymentInput->supplier->address->type = AddressTypeEnum::PRIMARY;
    $request->paymentInput->supplier->address->website = 'https://elonmusk.com';
    $request->paymentInput->supplier->displayName = 'Windsurf Shop';
    $request->paymentInput->supplier->id = '12345';
    $request->paymentInput->totalAmount = 49.99;
    $request->paymentInput->transactionDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-01T12:00:00.000Z');
    $request->paymentInput->type = PaymentPaymentTypeEnum::ACCOUNTS_RECEIVABLE;
    $request->raw = false;
    $request->xApideckAppId = 'exercitationem';
    $request->xApideckConsumerId = 'earum';
    $request->xApideckServiceId = 'facere';

    $requestSecurity = new PaymentsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->paymentsAdd($request, $requestSecurity);

    if ($response->createPaymentResponse !== null) {
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
    $request->cursor = 'numquam';
    $request->fields = 'doloribus';
    $request->limit = 381760;
    $request->passThrough = [
        'quidem' => 'saepe',
        'necessitatibus' => 'dolore',
        'sunt' => 'asperiores',
        'adipisci' => 'non',
    ];
    $request->raw = false;
    $request->xApideckAppId = 'amet';
    $request->xApideckConsumerId = 'beatae';
    $request->xApideckServiceId = 'dignissimos';

    $requestSecurity = new PaymentsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->paymentsAll($request, $requestSecurity);

    if ($response->getPaymentsResponse !== null) {
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
    $request->id = 'fe35b60e-b1ea-4426-955b-a3c28744ed53';
    $request->raw = false;
    $request->xApideckAppId = 'cum';
    $request->xApideckConsumerId = 'blanditiis';
    $request->xApideckServiceId = 'quas';

    $requestSecurity = new PaymentsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->paymentsDelete($request, $requestSecurity);

    if ($response->deletePaymentResponse !== null) {
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
    $request->fields = 'hic';
    $request->id = '3a8d8f5c-0b2f-42fb-bb19-4a276b26916f';
    $request->raw = false;
    $request->xApideckAppId = 'debitis';
    $request->xApideckConsumerId = 'illo';
    $request->xApideckServiceId = 'reiciendis';

    $requestSecurity = new PaymentsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->paymentsOne($request, $requestSecurity);

    if ($response->getPaymentResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\PaymentInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentAllocationsInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentAllocationsAllocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedCustomerInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentPaymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedSupplierInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentPaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsUpdateRequest();
    $request->paymentInput = new PaymentInput();
    $request->paymentInput->account = new LinkedLedgerAccountInput();
    $request->paymentInput->account->code = '453';
    $request->paymentInput->account->id = '123456';
    $request->paymentInput->account->nominalCode = 'N091';
    $request->paymentInput->accountsReceivableAccountId = '123456';
    $request->paymentInput->accountsReceivableAccountType = 'Account';
    $request->paymentInput->allocations = [
        new PaymentAllocationsInput(),
    ];
    $request->paymentInput->currency = CurrencyEnum::USD;
    $request->paymentInput->currencyRate = 0.69;
    $request->paymentInput->customer = new LinkedCustomerInput();
    $request->paymentInput->customer->displayName = 'Windsurf Shop';
    $request->paymentInput->customer->id = '12345';
    $request->paymentInput->customer->name = 'Windsurf Shop';
    $request->paymentInput->displayId = '123456';
    $request->paymentInput->note = 'Some notes about this payment';
    $request->paymentInput->paymentMethod = 'Credit Card';
    $request->paymentInput->paymentMethodId = '123456';
    $request->paymentInput->paymentMethodReference = '123456';
    $request->paymentInput->reconciled = true;
    $request->paymentInput->reference = '123456';
    $request->paymentInput->rowVersion = '1-12345';
    $request->paymentInput->status = PaymentPaymentStatusEnum::AUTHORISED;
    $request->paymentInput->supplier = new LinkedSupplierInput();
    $request->paymentInput->supplier->address = new Address();
    $request->paymentInput->supplier->address->city = 'San Francisco';
    $request->paymentInput->supplier->address->contactName = 'Elon Musk';
    $request->paymentInput->supplier->address->country = 'US';
    $request->paymentInput->supplier->address->county = 'Santa Clara';
    $request->paymentInput->supplier->address->email = 'elon@musk.com';
    $request->paymentInput->supplier->address->fax = '122-111-1111';
    $request->paymentInput->supplier->address->id = '123';
    $request->paymentInput->supplier->address->latitude = '40.759211';
    $request->paymentInput->supplier->address->line1 = 'Main street';
    $request->paymentInput->supplier->address->line2 = 'apt #';
    $request->paymentInput->supplier->address->line3 = 'Suite #';
    $request->paymentInput->supplier->address->line4 = 'delivery instructions';
    $request->paymentInput->supplier->address->longitude = '-73.984638';
    $request->paymentInput->supplier->address->name = 'HQ US';
    $request->paymentInput->supplier->address->phoneNumber = '111-111-1111';
    $request->paymentInput->supplier->address->postalCode = '94104';
    $request->paymentInput->supplier->address->rowVersion = '1-12345';
    $request->paymentInput->supplier->address->salutation = 'Mr';
    $request->paymentInput->supplier->address->state = 'CA';
    $request->paymentInput->supplier->address->streetNumber = '25';
    $request->paymentInput->supplier->address->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->paymentInput->supplier->address->type = AddressTypeEnum::PRIMARY;
    $request->paymentInput->supplier->address->website = 'https://elonmusk.com';
    $request->paymentInput->supplier->displayName = 'Windsurf Shop';
    $request->paymentInput->supplier->id = '12345';
    $request->paymentInput->totalAmount = 49.99;
    $request->paymentInput->transactionDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-01T12:00:00.000Z');
    $request->paymentInput->type = PaymentPaymentTypeEnum::ACCOUNTS_RECEIVABLE;
    $request->id = '8f4294e3-698f-4447-b603-e8b445e80ca5';
    $request->raw = false;
    $request->xApideckAppId = 'minima';
    $request->xApideckConsumerId = 'recusandae';
    $request->xApideckServiceId = 'reiciendis';

    $requestSecurity = new PaymentsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->payments->paymentsUpdate($request, $requestSecurity);

    if ($response->updatePaymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
