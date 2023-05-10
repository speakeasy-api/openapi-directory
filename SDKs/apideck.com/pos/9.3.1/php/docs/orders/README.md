# orders

### Available Operations

* [ordersAdd](#ordersadd) - Create Order
* [ordersAll](#ordersall) - List Orders
* [ordersDelete](#ordersdelete) - Delete Order
* [ordersOne](#ordersone) - Get Order
* [ordersPay](#orderspay) - Pay Order
* [ordersUpdate](#ordersupdate) - Update Order

## ordersAdd

Create Order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrdersAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderCustomers;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderDiscountsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderDiscountsScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderDiscountsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsCurbsidePickupDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsScheduleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsFulfillmentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemsAppliedDiscountsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemsAppliedTaxesInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemsModifiers;
use \OpenAPI\OpenAPI\Models\Shared\OrderPosPaymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderPaymentsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderRefundsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderRefundsStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTaxes;
use \OpenAPI\OpenAPI\Models\Shared\OrderTaxesScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTaxesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTendersInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardCardBrandEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardCardTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardPrepaidTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTendersCardEntryMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTendersCardStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTendersTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrdersAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrdersAddRequest();
    $request->orderInput = new OrderInput();
    $request->orderInput->closedDate = DateTime::createFromFormat('Y-m-d', '2022-08-13');
    $request->orderInput->currency = CurrencyEnum::USD;
    $request->orderInput->customerId = '12345';
    $request->orderInput->customers = [
        new OrderCustomers(),
        new OrderCustomers(),
    ];
    $request->orderInput->discounts = [
        new OrderDiscountsInput(),
        new OrderDiscountsInput(),
    ];
    $request->orderInput->employeeId = '12345';
    $request->orderInput->fulfillments = [
        new OrderFulfillmentsInput(),
    ];
    $request->orderInput->idempotencyKey = 'random_string';
    $request->orderInput->lineItems = [
        new OrderLineItemsInput(),
        new OrderLineItemsInput(),
        new OrderLineItemsInput(),
        new OrderLineItemsInput(),
    ];
    $request->orderInput->locationId = '12345';
    $request->orderInput->merchantId = '12345';
    $request->orderInput->note = 'consequuntur';
    $request->orderInput->orderDate = DateTime::createFromFormat('Y-m-d', '2022-08-12');
    $request->orderInput->orderNumber = '1F';
    $request->orderInput->orderTypeId = '12345';
    $request->orderInput->paymentStatus = OrderPosPaymentStatusEnum::OPEN;
    $request->orderInput->payments = [
        new OrderPaymentsInput(),
    ];
    $request->orderInput->referenceId = 'my-order-001';
    $request->orderInput->refunded = false;
    $request->orderInput->refunds = [
        new OrderRefundsInput(),
    ];
    $request->orderInput->seat = '23F';
    $request->orderInput->serviceCharges = [
        new ServiceChargeInput(),
        new ServiceChargeInput(),
        new ServiceChargeInput(),
        new ServiceChargeInput(),
    ];
    $request->orderInput->status = OrderStatusEnum::OPEN;
    $request->orderInput->table = '1F';
    $request->orderInput->taxes = [
        new OrderTaxes(),
        new OrderTaxes(),
        new OrderTaxes(),
    ];
    $request->orderInput->tenders = [
        new OrderTendersInput(),
        new OrderTendersInput(),
        new OrderTendersInput(),
    ];
    $request->orderInput->title = 'Mr.';
    $request->orderInput->totalAmount = 275;
    $request->orderInput->totalDiscount = 300;
    $request->orderInput->totalRefund = 456911;
    $request->orderInput->totalServiceCharge = 910545;
    $request->orderInput->totalTax = 275;
    $request->orderInput->totalTip = 700;
    $request->orderInput->version = '230320320320';
    $request->orderInput->voided = false;
    $request->raw = false;
    $request->xApideckAppId = 'accusamus';
    $request->xApideckConsumerId = 'veritatis';
    $request->xApideckServiceId = 'esse';

    $requestSecurity = new OrdersAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orders->ordersAdd($request, $requestSecurity);

    if ($response->createOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ordersAll

List Orders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrdersAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrdersAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrdersAllRequest();
    $request->cursor = 'quod';
    $request->fields = 'nam';
    $request->limit = 877131;
    $request->locationId = 'aliquid';
    $request->raw = false;
    $request->xApideckAppId = 'quasi';
    $request->xApideckConsumerId = 'saepe';
    $request->xApideckServiceId = 'vel';

    $requestSecurity = new OrdersAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orders->ordersAll($request, $requestSecurity);

    if ($response->getOrdersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ordersDelete

Delete Order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrdersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrdersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrdersDeleteRequest();
    $request->id = 'b7b95bc0-ab3c-420c-8f37-89fd871f99dd';
    $request->raw = false;
    $request->xApideckAppId = 'quia';
    $request->xApideckConsumerId = 'eveniet';
    $request->xApideckServiceId = 'asperiores';

    $requestSecurity = new OrdersDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orders->ordersDelete($request, $requestSecurity);

    if ($response->deleteOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ordersOne

Get Order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrdersOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrdersOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrdersOneRequest();
    $request->fields = 'facere';
    $request->id = '121aa6f1-e674-4bdb-84f1-5756082d68ea';
    $request->raw = false;
    $request->xApideckAppId = 'architecto';
    $request->xApideckConsumerId = 'omnis';
    $request->xApideckServiceId = 'tenetur';

    $requestSecurity = new OrdersOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orders->ordersOne($request, $requestSecurity);

    if ($response->getOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ordersPay

Pay Order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrdersPayRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderCustomers;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderDiscountsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderDiscountsScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderDiscountsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsCurbsidePickupDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsScheduleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsFulfillmentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemsAppliedDiscountsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemsAppliedTaxesInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemsModifiers;
use \OpenAPI\OpenAPI\Models\Shared\OrderPosPaymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderPaymentsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderRefundsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderRefundsStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTaxes;
use \OpenAPI\OpenAPI\Models\Shared\OrderTaxesScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTaxesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTendersInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardCardBrandEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardCardTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardPrepaidTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTendersCardEntryMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTendersCardStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTendersTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrdersPaySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrdersPayRequest();
    $request->orderInput = new OrderInput();
    $request->orderInput->closedDate = DateTime::createFromFormat('Y-m-d', '2022-08-13');
    $request->orderInput->currency = CurrencyEnum::USD;
    $request->orderInput->customerId = '12345';
    $request->orderInput->customers = [
        new OrderCustomers(),
    ];
    $request->orderInput->discounts = [
        new OrderDiscountsInput(),
        new OrderDiscountsInput(),
        new OrderDiscountsInput(),
        new OrderDiscountsInput(),
    ];
    $request->orderInput->employeeId = '12345';
    $request->orderInput->fulfillments = [
        new OrderFulfillmentsInput(),
    ];
    $request->orderInput->idempotencyKey = 'random_string';
    $request->orderInput->lineItems = [
        new OrderLineItemsInput(),
        new OrderLineItemsInput(),
    ];
    $request->orderInput->locationId = '12345';
    $request->orderInput->merchantId = '12345';
    $request->orderInput->note = 'ipsa';
    $request->orderInput->orderDate = DateTime::createFromFormat('Y-m-d', '2022-08-12');
    $request->orderInput->orderNumber = '1F';
    $request->orderInput->orderTypeId = '12345';
    $request->orderInput->paymentStatus = OrderPosPaymentStatusEnum::OPEN;
    $request->orderInput->payments = [
        new OrderPaymentsInput(),
        new OrderPaymentsInput(),
    ];
    $request->orderInput->referenceId = 'my-order-001';
    $request->orderInput->refunded = false;
    $request->orderInput->refunds = [
        new OrderRefundsInput(),
    ];
    $request->orderInput->seat = '23F';
    $request->orderInput->serviceCharges = [
        new ServiceChargeInput(),
    ];
    $request->orderInput->status = OrderStatusEnum::OPEN;
    $request->orderInput->table = '1F';
    $request->orderInput->taxes = [
        new OrderTaxes(),
    ];
    $request->orderInput->tenders = [
        new OrderTendersInput(),
        new OrderTendersInput(),
        new OrderTendersInput(),
    ];
    $request->orderInput->title = 'Dr.';
    $request->orderInput->totalAmount = 275;
    $request->orderInput->totalDiscount = 300;
    $request->orderInput->totalRefund = 33074;
    $request->orderInput->totalServiceCharge = 522371;
    $request->orderInput->totalTax = 275;
    $request->orderInput->totalTip = 700;
    $request->orderInput->version = '230320320320';
    $request->orderInput->voided = false;
    $request->fields = 'aut';
    $request->id = '86a18403-94c2-4607-9f93-f5f0642dac7a';
    $request->raw = false;
    $request->xApideckAppId = 'asperiores';
    $request->xApideckConsumerId = 'nemo';
    $request->xApideckServiceId = 'quae';

    $requestSecurity = new OrdersPaySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orders->ordersPay($request, $requestSecurity);

    if ($response->createOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ordersUpdate

Updates an open order by adding, replacing, or deleting fields. Square-only: Orders with a `completed` or `canceled` status cannot be updated. To pay for an order, use the [payments endpoint](#tag/Payments).


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OrdersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderCustomers;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderDiscountsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderDiscountsScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderDiscountsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsCurbsidePickupDetails;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsRecipient;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsPickupDetailsScheduleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsFulfillmentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderFulfillmentsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemsAppliedDiscountsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemsAppliedTaxesInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderLineItemsModifiers;
use \OpenAPI\OpenAPI\Models\Shared\OrderPosPaymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderPaymentsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderRefundsInput;
use \OpenAPI\OpenAPI\Models\Shared\OrderRefundsStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeInput;
use \OpenAPI\OpenAPI\Models\Shared\ServiceChargeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTaxes;
use \OpenAPI\OpenAPI\Models\Shared\OrderTaxesScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTaxesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTendersInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardInput;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardCardBrandEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardCardTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentCardPrepaidTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTendersCardEntryMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTendersCardStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderTendersTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\OrdersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrdersUpdateRequest();
    $request->orderInput = new OrderInput();
    $request->orderInput->closedDate = DateTime::createFromFormat('Y-m-d', '2022-08-13');
    $request->orderInput->currency = CurrencyEnum::USD;
    $request->orderInput->customerId = '12345';
    $request->orderInput->customers = [
        new OrderCustomers(),
        new OrderCustomers(),
    ];
    $request->orderInput->discounts = [
        new OrderDiscountsInput(),
        new OrderDiscountsInput(),
        new OrderDiscountsInput(),
        new OrderDiscountsInput(),
    ];
    $request->orderInput->employeeId = '12345';
    $request->orderInput->fulfillments = [
        new OrderFulfillmentsInput(),
        new OrderFulfillmentsInput(),
        new OrderFulfillmentsInput(),
        new OrderFulfillmentsInput(),
    ];
    $request->orderInput->idempotencyKey = 'random_string';
    $request->orderInput->lineItems = [
        new OrderLineItemsInput(),
        new OrderLineItemsInput(),
    ];
    $request->orderInput->locationId = '12345';
    $request->orderInput->merchantId = '12345';
    $request->orderInput->note = 'ab';
    $request->orderInput->orderDate = DateTime::createFromFormat('Y-m-d', '2022-08-12');
    $request->orderInput->orderNumber = '1F';
    $request->orderInput->orderTypeId = '12345';
    $request->orderInput->paymentStatus = OrderPosPaymentStatusEnum::OPEN;
    $request->orderInput->payments = [
        new OrderPaymentsInput(),
    ];
    $request->orderInput->referenceId = 'my-order-001';
    $request->orderInput->refunded = false;
    $request->orderInput->refunds = [
        new OrderRefundsInput(),
        new OrderRefundsInput(),
        new OrderRefundsInput(),
    ];
    $request->orderInput->seat = '23F';
    $request->orderInput->serviceCharges = [
        new ServiceChargeInput(),
        new ServiceChargeInput(),
        new ServiceChargeInput(),
    ];
    $request->orderInput->status = OrderStatusEnum::OPEN;
    $request->orderInput->table = '1F';
    $request->orderInput->taxes = [
        new OrderTaxes(),
        new OrderTaxes(),
    ];
    $request->orderInput->tenders = [
        new OrderTendersInput(),
    ];
    $request->orderInput->title = 'Miss';
    $request->orderInput->totalAmount = 275;
    $request->orderInput->totalDiscount = 300;
    $request->orderInput->totalRefund = 665859;
    $request->orderInput->totalServiceCharge = 926880;
    $request->orderInput->totalTax = 275;
    $request->orderInput->totalTip = 700;
    $request->orderInput->version = '230320320320';
    $request->orderInput->voided = false;
    $request->id = '8d67864d-bb67-45fd-9e60-b375ed4f6fbe';
    $request->raw = false;
    $request->xApideckAppId = 'necessitatibus';
    $request->xApideckConsumerId = 'dolore';
    $request->xApideckServiceId = 'sunt';

    $requestSecurity = new OrdersUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->orders->ordersUpdate($request, $requestSecurity);

    if ($response->updateOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
