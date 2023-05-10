# creditNotes

### Available Operations

* [creditNotesAdd](#creditnotesadd) - Create Credit Note
* [creditNotesAll](#creditnotesall) - List Credit Notes
* [creditNotesDelete](#creditnotesdelete) - Delete Credit Note
* [creditNotesOne](#creditnotesone) - Get Credit Note
* [creditNotesUpdate](#creditnotesupdate) - Update Credit Note

## creditNotesAdd

Create Credit Note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreditNotesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreditNoteInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\CreditNoteAllocationsInput;
use \OpenAPI\OpenAPI\Models\Shared\CreditNoteAllocationsAllocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedCustomerInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceLineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedInvoiceItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceLineItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreditNoteCreditNoteStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreditNoteCreditNoteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreditNotesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditNotesAddRequest();
    $request->creditNoteInput = new CreditNoteInput();
    $request->creditNoteInput->account = new LinkedLedgerAccountInput();
    $request->creditNoteInput->account->code = '453';
    $request->creditNoteInput->account->id = '123456';
    $request->creditNoteInput->account->nominalCode = 'N091';
    $request->creditNoteInput->allocations = [
        new CreditNoteAllocationsInput(),
        new CreditNoteAllocationsInput(),
        new CreditNoteAllocationsInput(),
        new CreditNoteAllocationsInput(),
    ];
    $request->creditNoteInput->balance = 27500;
    $request->creditNoteInput->currency = CurrencyEnum::USD;
    $request->creditNoteInput->currencyRate = 0.69;
    $request->creditNoteInput->customer = new LinkedCustomerInput();
    $request->creditNoteInput->customer->displayName = 'Windsurf Shop';
    $request->creditNoteInput->customer->id = '12345';
    $request->creditNoteInput->customer->name = 'Windsurf Shop';
    $request->creditNoteInput->dateIssued = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-01T12:00:00.000Z');
    $request->creditNoteInput->datePaid = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-01T12:00:00.000Z');
    $request->creditNoteInput->lineItems = [
        new InvoiceLineItemInput(),
    ];
    $request->creditNoteInput->note = 'Some notes about this credit note';
    $request->creditNoteInput->number = 'OIT00546';
    $request->creditNoteInput->reference = '123456';
    $request->creditNoteInput->remainingCredit = 27500;
    $request->creditNoteInput->rowVersion = '1-12345';
    $request->creditNoteInput->status = CreditNoteCreditNoteStatusEnum::AUTHORISED;
    $request->creditNoteInput->subTotal = 27500;
    $request->creditNoteInput->taxCode = '1234';
    $request->creditNoteInput->taxInclusive = true;
    $request->creditNoteInput->terms = 'Some terms about this credit note';
    $request->creditNoteInput->totalAmount = 49.99;
    $request->creditNoteInput->totalTax = 2500;
    $request->creditNoteInput->type = CreditNoteCreditNoteTypeEnum::ACCOUNTS_RECEIVABLE_CREDIT;
    $request->raw = false;
    $request->xApideckAppId = 'omnis';
    $request->xApideckConsumerId = 'voluptate';
    $request->xApideckServiceId = 'cum';

    $requestSecurity = new CreditNotesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->creditNotes->creditNotesAdd($request, $requestSecurity);

    if ($response->createCreditNoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditNotesAll

List Credit Notes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreditNotesAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreditNotesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditNotesAllRequest();
    $request->cursor = 'perferendis';
    $request->fields = 'doloremque';
    $request->limit = 441711;
    $request->passThrough = [
        'maiores' => 'dicta',
        'corporis' => 'dolore',
    ];
    $request->raw = false;
    $request->xApideckAppId = 'iusto';
    $request->xApideckConsumerId = 'dicta';
    $request->xApideckServiceId = 'harum';

    $requestSecurity = new CreditNotesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->creditNotes->creditNotesAll($request, $requestSecurity);

    if ($response->getCreditNotesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditNotesDelete

Delete Credit Note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreditNotesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreditNotesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditNotesDeleteRequest();
    $request->id = '5e6e13b9-9d48-48e1-a91e-450ad2abd442';
    $request->raw = false;
    $request->xApideckAppId = 'aliquid';
    $request->xApideckConsumerId = 'cupiditate';
    $request->xApideckServiceId = 'quos';

    $requestSecurity = new CreditNotesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->creditNotes->creditNotesDelete($request, $requestSecurity);

    if ($response->deleteCreditNoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditNotesOne

Get Credit Note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreditNotesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreditNotesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditNotesOneRequest();
    $request->fields = 'perferendis';
    $request->id = '2d502a94-bb4f-463c-969e-9a3efa77dfb1';
    $request->raw = false;
    $request->xApideckAppId = 'magnam';
    $request->xApideckConsumerId = 'cumque';
    $request->xApideckServiceId = 'facere';

    $requestSecurity = new CreditNotesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->creditNotes->creditNotesOne($request, $requestSecurity);

    if ($response->getCreditNoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## creditNotesUpdate

Update Credit Note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreditNotesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreditNoteInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\CreditNoteAllocationsInput;
use \OpenAPI\OpenAPI\Models\Shared\CreditNoteAllocationsAllocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedCustomerInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceLineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedInvoiceItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceLineItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreditNoteCreditNoteStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreditNoteCreditNoteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreditNotesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreditNotesUpdateRequest();
    $request->creditNoteInput = new CreditNoteInput();
    $request->creditNoteInput->account = new LinkedLedgerAccountInput();
    $request->creditNoteInput->account->code = '453';
    $request->creditNoteInput->account->id = '123456';
    $request->creditNoteInput->account->nominalCode = 'N091';
    $request->creditNoteInput->allocations = [
        new CreditNoteAllocationsInput(),
        new CreditNoteAllocationsInput(),
    ];
    $request->creditNoteInput->balance = 27500;
    $request->creditNoteInput->currency = CurrencyEnum::USD;
    $request->creditNoteInput->currencyRate = 0.69;
    $request->creditNoteInput->customer = new LinkedCustomerInput();
    $request->creditNoteInput->customer->displayName = 'Windsurf Shop';
    $request->creditNoteInput->customer->id = '12345';
    $request->creditNoteInput->customer->name = 'Windsurf Shop';
    $request->creditNoteInput->dateIssued = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-01T12:00:00.000Z');
    $request->creditNoteInput->datePaid = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-01T12:00:00.000Z');
    $request->creditNoteInput->lineItems = [
        new InvoiceLineItemInput(),
        new InvoiceLineItemInput(),
    ];
    $request->creditNoteInput->note = 'Some notes about this credit note';
    $request->creditNoteInput->number = 'OIT00546';
    $request->creditNoteInput->reference = '123456';
    $request->creditNoteInput->remainingCredit = 27500;
    $request->creditNoteInput->rowVersion = '1-12345';
    $request->creditNoteInput->status = CreditNoteCreditNoteStatusEnum::AUTHORISED;
    $request->creditNoteInput->subTotal = 27500;
    $request->creditNoteInput->taxCode = '1234';
    $request->creditNoteInput->taxInclusive = true;
    $request->creditNoteInput->terms = 'Some terms about this credit note';
    $request->creditNoteInput->totalAmount = 49.99;
    $request->creditNoteInput->totalTax = 2500;
    $request->creditNoteInput->type = CreditNoteCreditNoteTypeEnum::ACCOUNTS_RECEIVABLE_CREDIT;
    $request->id = 'ae395efb-9ba8-48f3-a669-97074ba4469b';
    $request->raw = false;
    $request->xApideckAppId = 'eum';
    $request->xApideckConsumerId = 'vero';
    $request->xApideckServiceId = 'aspernatur';

    $requestSecurity = new CreditNotesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->creditNotes->creditNotesUpdate($request, $requestSecurity);

    if ($response->updateCreditNoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
