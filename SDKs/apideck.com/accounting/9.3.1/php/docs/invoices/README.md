# invoices

### Available Operations

* [invoicesAdd](#invoicesadd) - Create Invoice
* [invoicesAll](#invoicesall) - List Invoices
* [invoicesDelete](#invoicesdelete) - Delete Invoice
* [invoicesOne](#invoicesone) - Get Invoice
* [invoicesUpdate](#invoicesupdate) - Update Invoice

## invoicesAdd

Create Invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvoicesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedCustomerInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceLineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedInvoiceItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceLineItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceInvoiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\InvoicesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoicesAddRequest();
    $request->invoiceInput = new InvoiceInput();
    $request->invoiceInput->balance = 27500;
    $request->invoiceInput->billingAddress = new Address();
    $request->invoiceInput->billingAddress->city = 'San Francisco';
    $request->invoiceInput->billingAddress->contactName = 'Elon Musk';
    $request->invoiceInput->billingAddress->country = 'US';
    $request->invoiceInput->billingAddress->county = 'Santa Clara';
    $request->invoiceInput->billingAddress->email = 'elon@musk.com';
    $request->invoiceInput->billingAddress->fax = '122-111-1111';
    $request->invoiceInput->billingAddress->id = '123';
    $request->invoiceInput->billingAddress->latitude = '40.759211';
    $request->invoiceInput->billingAddress->line1 = 'Main street';
    $request->invoiceInput->billingAddress->line2 = 'apt #';
    $request->invoiceInput->billingAddress->line3 = 'Suite #';
    $request->invoiceInput->billingAddress->line4 = 'delivery instructions';
    $request->invoiceInput->billingAddress->longitude = '-73.984638';
    $request->invoiceInput->billingAddress->name = 'HQ US';
    $request->invoiceInput->billingAddress->phoneNumber = '111-111-1111';
    $request->invoiceInput->billingAddress->postalCode = '94104';
    $request->invoiceInput->billingAddress->rowVersion = '1-12345';
    $request->invoiceInput->billingAddress->salutation = 'Mr';
    $request->invoiceInput->billingAddress->state = 'CA';
    $request->invoiceInput->billingAddress->streetNumber = '25';
    $request->invoiceInput->billingAddress->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->invoiceInput->billingAddress->type = AddressTypeEnum::PRIMARY;
    $request->invoiceInput->billingAddress->website = 'https://elonmusk.com';
    $request->invoiceInput->currency = CurrencyEnum::USD;
    $request->invoiceInput->currencyRate = 0.69;
    $request->invoiceInput->customer = new LinkedCustomerInput();
    $request->invoiceInput->customer->displayName = 'Windsurf Shop';
    $request->invoiceInput->customer->id = '12345';
    $request->invoiceInput->customer->name = 'Windsurf Shop';
    $request->invoiceInput->customerMemo = 'Thank you for your business and have a great day!';
    $request->invoiceInput->deposit = 7492.55;
    $request->invoiceInput->discountAmount = 25;
    $request->invoiceInput->discountPercentage = 5.5;
    $request->invoiceInput->dueDate = DateTime::createFromFormat('Y-m-d', '2020-09-30');
    $request->invoiceInput->invoiceDate = DateTime::createFromFormat('Y-m-d', '2020-09-30');
    $request->invoiceInput->invoiceSent = true;
    $request->invoiceInput->lineItems = [
        new InvoiceLineItemInput(),
        new InvoiceLineItemInput(),
        new InvoiceLineItemInput(),
    ];
    $request->invoiceInput->number = 'OIT00546';
    $request->invoiceInput->poNumber = '90000117';
    $request->invoiceInput->reference = '123456';
    $request->invoiceInput->rowVersion = '1-12345';
    $request->invoiceInput->shippingAddress = new Address();
    $request->invoiceInput->shippingAddress->city = 'San Francisco';
    $request->invoiceInput->shippingAddress->contactName = 'Elon Musk';
    $request->invoiceInput->shippingAddress->country = 'US';
    $request->invoiceInput->shippingAddress->county = 'Santa Clara';
    $request->invoiceInput->shippingAddress->email = 'elon@musk.com';
    $request->invoiceInput->shippingAddress->fax = '122-111-1111';
    $request->invoiceInput->shippingAddress->id = '123';
    $request->invoiceInput->shippingAddress->latitude = '40.759211';
    $request->invoiceInput->shippingAddress->line1 = 'Main street';
    $request->invoiceInput->shippingAddress->line2 = 'apt #';
    $request->invoiceInput->shippingAddress->line3 = 'Suite #';
    $request->invoiceInput->shippingAddress->line4 = 'delivery instructions';
    $request->invoiceInput->shippingAddress->longitude = '-73.984638';
    $request->invoiceInput->shippingAddress->name = 'HQ US';
    $request->invoiceInput->shippingAddress->phoneNumber = '111-111-1111';
    $request->invoiceInput->shippingAddress->postalCode = '94104';
    $request->invoiceInput->shippingAddress->rowVersion = '1-12345';
    $request->invoiceInput->shippingAddress->salutation = 'Mr';
    $request->invoiceInput->shippingAddress->state = 'CA';
    $request->invoiceInput->shippingAddress->streetNumber = '25';
    $request->invoiceInput->shippingAddress->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->invoiceInput->shippingAddress->type = AddressTypeEnum::PRIMARY;
    $request->invoiceInput->shippingAddress->website = 'https://elonmusk.com';
    $request->invoiceInput->sourceDocumentUrl = 'https://www.invoicesolution.com/invoice/123456';
    $request->invoiceInput->status = InvoiceStatusEnum::DRAFT;
    $request->invoiceInput->subTotal = 27500;
    $request->invoiceInput->taxCode = '1234';
    $request->invoiceInput->taxInclusive = true;
    $request->invoiceInput->templateId = '123456';
    $request->invoiceInput->terms = 'Net 30 days';
    $request->invoiceInput->total = 27500;
    $request->invoiceInput->totalTax = 2500;
    $request->invoiceInput->type = InvoiceInvoiceTypeEnum::SERVICE;
    $request->raw = false;
    $request->xApideckAppId = 'tempore';
    $request->xApideckConsumerId = 'cupiditate';
    $request->xApideckServiceId = 'aperiam';

    $requestSecurity = new InvoicesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->invoices->invoicesAdd($request, $requestSecurity);

    if ($response->createInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoicesAll

List Invoices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvoicesAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoicesSort;
use \OpenAPI\OpenAPI\Models\Shared\InvoicesSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\InvoicesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoicesAllRequest();
    $request->cursor = 'delectus';
    $request->fields = 'dolorem';
    $request->limit = 292147;
    $request->passThrough = [
        'adipisci' => 'dolorum',
        'architecto' => 'quae',
    ];
    $request->raw = false;
    $request->sort = new InvoicesSort();
    $request->sort->by = InvoicesSortByEnum::UPDATED_AT;
    $request->sort->direction = SortDirectionEnum::ASC;
    $request->xApideckAppId = 'quas';
    $request->xApideckConsumerId = 'itaque';
    $request->xApideckServiceId = 'consequatur';

    $requestSecurity = new InvoicesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->invoices->invoicesAll($request, $requestSecurity);

    if ($response->getInvoicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoicesDelete

Delete Invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvoicesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\InvoicesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoicesDeleteRequest();
    $request->id = 'adcf4b92-1879-4fce-953f-73ef7fbc7abd';
    $request->raw = false;
    $request->xApideckAppId = 'ducimus';
    $request->xApideckConsumerId = 'dolore';
    $request->xApideckServiceId = 'quibusdam';

    $requestSecurity = new InvoicesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->invoices->invoicesDelete($request, $requestSecurity);

    if ($response->deleteInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoicesOne

Get Invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvoicesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\InvoicesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoicesOneRequest();
    $request->fields = 'illum';
    $request->id = '39c0f5d2-cff7-4c70-a456-26d436813f16';
    $request->raw = false;
    $request->xApideckAppId = 'nulla';
    $request->xApideckConsumerId = 'excepturi';
    $request->xApideckServiceId = 'voluptatibus';

    $requestSecurity = new InvoicesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->invoices->invoicesOne($request, $requestSecurity);

    if ($response->getInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoicesUpdate

Update Invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvoicesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedCustomerInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceLineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedInvoiceItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceLineItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceInvoiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\InvoicesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoicesUpdateRequest();
    $request->invoiceInput = new InvoiceInput();
    $request->invoiceInput->balance = 27500;
    $request->invoiceInput->billingAddress = new Address();
    $request->invoiceInput->billingAddress->city = 'San Francisco';
    $request->invoiceInput->billingAddress->contactName = 'Elon Musk';
    $request->invoiceInput->billingAddress->country = 'US';
    $request->invoiceInput->billingAddress->county = 'Santa Clara';
    $request->invoiceInput->billingAddress->email = 'elon@musk.com';
    $request->invoiceInput->billingAddress->fax = '122-111-1111';
    $request->invoiceInput->billingAddress->id = '123';
    $request->invoiceInput->billingAddress->latitude = '40.759211';
    $request->invoiceInput->billingAddress->line1 = 'Main street';
    $request->invoiceInput->billingAddress->line2 = 'apt #';
    $request->invoiceInput->billingAddress->line3 = 'Suite #';
    $request->invoiceInput->billingAddress->line4 = 'delivery instructions';
    $request->invoiceInput->billingAddress->longitude = '-73.984638';
    $request->invoiceInput->billingAddress->name = 'HQ US';
    $request->invoiceInput->billingAddress->phoneNumber = '111-111-1111';
    $request->invoiceInput->billingAddress->postalCode = '94104';
    $request->invoiceInput->billingAddress->rowVersion = '1-12345';
    $request->invoiceInput->billingAddress->salutation = 'Mr';
    $request->invoiceInput->billingAddress->state = 'CA';
    $request->invoiceInput->billingAddress->streetNumber = '25';
    $request->invoiceInput->billingAddress->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->invoiceInput->billingAddress->type = AddressTypeEnum::PRIMARY;
    $request->invoiceInput->billingAddress->website = 'https://elonmusk.com';
    $request->invoiceInput->currency = CurrencyEnum::USD;
    $request->invoiceInput->currencyRate = 0.69;
    $request->invoiceInput->customer = new LinkedCustomerInput();
    $request->invoiceInput->customer->displayName = 'Windsurf Shop';
    $request->invoiceInput->customer->id = '12345';
    $request->invoiceInput->customer->name = 'Windsurf Shop';
    $request->invoiceInput->customerMemo = 'Thank you for your business and have a great day!';
    $request->invoiceInput->deposit = 3436.05;
    $request->invoiceInput->discountAmount = 25;
    $request->invoiceInput->discountPercentage = 5.5;
    $request->invoiceInput->dueDate = DateTime::createFromFormat('Y-m-d', '2020-09-30');
    $request->invoiceInput->invoiceDate = DateTime::createFromFormat('Y-m-d', '2020-09-30');
    $request->invoiceInput->invoiceSent = true;
    $request->invoiceInput->lineItems = [
        new InvoiceLineItemInput(),
        new InvoiceLineItemInput(),
        new InvoiceLineItemInput(),
        new InvoiceLineItemInput(),
    ];
    $request->invoiceInput->number = 'OIT00546';
    $request->invoiceInput->poNumber = '90000117';
    $request->invoiceInput->reference = '123456';
    $request->invoiceInput->rowVersion = '1-12345';
    $request->invoiceInput->shippingAddress = new Address();
    $request->invoiceInput->shippingAddress->city = 'San Francisco';
    $request->invoiceInput->shippingAddress->contactName = 'Elon Musk';
    $request->invoiceInput->shippingAddress->country = 'US';
    $request->invoiceInput->shippingAddress->county = 'Santa Clara';
    $request->invoiceInput->shippingAddress->email = 'elon@musk.com';
    $request->invoiceInput->shippingAddress->fax = '122-111-1111';
    $request->invoiceInput->shippingAddress->id = '123';
    $request->invoiceInput->shippingAddress->latitude = '40.759211';
    $request->invoiceInput->shippingAddress->line1 = 'Main street';
    $request->invoiceInput->shippingAddress->line2 = 'apt #';
    $request->invoiceInput->shippingAddress->line3 = 'Suite #';
    $request->invoiceInput->shippingAddress->line4 = 'delivery instructions';
    $request->invoiceInput->shippingAddress->longitude = '-73.984638';
    $request->invoiceInput->shippingAddress->name = 'HQ US';
    $request->invoiceInput->shippingAddress->phoneNumber = '111-111-1111';
    $request->invoiceInput->shippingAddress->postalCode = '94104';
    $request->invoiceInput->shippingAddress->rowVersion = '1-12345';
    $request->invoiceInput->shippingAddress->salutation = 'Mr';
    $request->invoiceInput->shippingAddress->state = 'CA';
    $request->invoiceInput->shippingAddress->streetNumber = '25';
    $request->invoiceInput->shippingAddress->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->invoiceInput->shippingAddress->type = AddressTypeEnum::PRIMARY;
    $request->invoiceInput->shippingAddress->website = 'https://elonmusk.com';
    $request->invoiceInput->sourceDocumentUrl = 'https://www.invoicesolution.com/invoice/123456';
    $request->invoiceInput->status = InvoiceStatusEnum::DRAFT;
    $request->invoiceInput->subTotal = 27500;
    $request->invoiceInput->taxCode = '1234';
    $request->invoiceInput->taxInclusive = true;
    $request->invoiceInput->templateId = '123456';
    $request->invoiceInput->terms = 'Net 30 days';
    $request->invoiceInput->total = 27500;
    $request->invoiceInput->totalTax = 2500;
    $request->invoiceInput->type = InvoiceInvoiceTypeEnum::SERVICE;
    $request->id = 'ce6c5561-46c3-4e25-8fb0-08c42e141aac';
    $request->raw = false;
    $request->xApideckAppId = 'velit';
    $request->xApideckConsumerId = 'eum';
    $request->xApideckServiceId = 'autem';

    $requestSecurity = new InvoicesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->invoices->invoicesUpdate($request, $requestSecurity);

    if ($response->updateInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
