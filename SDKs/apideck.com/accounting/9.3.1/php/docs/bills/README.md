# bills

### Available Operations

* [billsAdd](#billsadd) - Create Bill
* [billsAll](#billsall) - List Bills
* [billsDelete](#billsdelete) - Delete Bill
* [billsOne](#billsone) - Get Bill
* [billsUpdate](#billsupdate) - Update Bill

## billsAdd

Create Bill

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BillsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\BillLineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedInvoiceItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\BillLineItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedSupplierInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillsAddRequest();
    $request->billInput = new BillInput();
    $request->billInput->balance = 27500;
    $request->billInput->billDate = DateTime::createFromFormat('Y-m-d', '2020-09-30');
    $request->billInput->billNumber = '10001';
    $request->billInput->currency = CurrencyEnum::USD;
    $request->billInput->currencyRate = 0.69;
    $request->billInput->deposit = 7917.25;
    $request->billInput->dueDate = DateTime::createFromFormat('Y-m-d', '2020-10-30');
    $request->billInput->ledgerAccount = new LinkedLedgerAccountInput();
    $request->billInput->ledgerAccount->code = '453';
    $request->billInput->ledgerAccount->id = '123456';
    $request->billInput->ledgerAccount->nominalCode = 'N091';
    $request->billInput->lineItems = [
        new BillLineItemInput(),
        new BillLineItemInput(),
        new BillLineItemInput(),
        new BillLineItemInput(),
    ];
    $request->billInput->notes = 'Some notes about this bill.';
    $request->billInput->paidDate = DateTime::createFromFormat('Y-m-d', '2020-10-30');
    $request->billInput->poNumber = '90000117';
    $request->billInput->reference = '123456';
    $request->billInput->rowVersion = '1-12345';
    $request->billInput->status = BillStatusEnum::DRAFT;
    $request->billInput->subTotal = 27500;
    $request->billInput->supplier = new LinkedSupplierInput();
    $request->billInput->supplier->address = new Address();
    $request->billInput->supplier->address->city = 'San Francisco';
    $request->billInput->supplier->address->contactName = 'Elon Musk';
    $request->billInput->supplier->address->country = 'US';
    $request->billInput->supplier->address->county = 'Santa Clara';
    $request->billInput->supplier->address->email = 'elon@musk.com';
    $request->billInput->supplier->address->fax = '122-111-1111';
    $request->billInput->supplier->address->id = '123';
    $request->billInput->supplier->address->latitude = '40.759211';
    $request->billInput->supplier->address->line1 = 'Main street';
    $request->billInput->supplier->address->line2 = 'apt #';
    $request->billInput->supplier->address->line3 = 'Suite #';
    $request->billInput->supplier->address->line4 = 'delivery instructions';
    $request->billInput->supplier->address->longitude = '-73.984638';
    $request->billInput->supplier->address->name = 'HQ US';
    $request->billInput->supplier->address->phoneNumber = '111-111-1111';
    $request->billInput->supplier->address->postalCode = '94104';
    $request->billInput->supplier->address->rowVersion = '1-12345';
    $request->billInput->supplier->address->salutation = 'Mr';
    $request->billInput->supplier->address->state = 'CA';
    $request->billInput->supplier->address->streetNumber = '25';
    $request->billInput->supplier->address->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->billInput->supplier->address->type = AddressTypeEnum::PRIMARY;
    $request->billInput->supplier->address->website = 'https://elonmusk.com';
    $request->billInput->supplier->displayName = 'Windsurf Shop';
    $request->billInput->supplier->id = '12345';
    $request->billInput->taxCode = '1234';
    $request->billInput->taxInclusive = true;
    $request->billInput->terms = 'Net 30 days';
    $request->billInput->total = 27500;
    $request->billInput->totalTax = 2500;
    $request->raw = false;
    $request->xApideckAppId = 'voluptatum';
    $request->xApideckConsumerId = 'iusto';
    $request->xApideckServiceId = 'excepturi';

    $requestSecurity = new BillsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->bills->billsAdd($request, $requestSecurity);

    if ($response->createBillResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## billsAll

List Bills

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BillsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillsSort;
use \OpenAPI\OpenAPI\Models\Shared\BillsSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillsAllRequest();
    $request->cursor = 'nisi';
    $request->fields = 'recusandae';
    $request->limit = 836079;
    $request->passThrough = [
        'quis' => 'veritatis',
    ];
    $request->raw = false;
    $request->sort = new BillsSort();
    $request->sort->by = BillsSortByEnum::UPDATED_AT;
    $request->sort->direction = SortDirectionEnum::DESC;
    $request->xApideckAppId = 'perferendis';
    $request->xApideckConsumerId = 'ipsam';
    $request->xApideckServiceId = 'repellendus';

    $requestSecurity = new BillsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->bills->billsAll($request, $requestSecurity);

    if ($response->getBillsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## billsDelete

Delete Bill

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BillsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\BillsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillsDeleteRequest();
    $request->id = 'fc2ddf7c-c78c-4a1b-a928-fc816742cb73';
    $request->raw = false;
    $request->xApideckAppId = 'excepturi';
    $request->xApideckConsumerId = 'aspernatur';
    $request->xApideckServiceId = 'perferendis';

    $requestSecurity = new BillsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->bills->billsDelete($request, $requestSecurity);

    if ($response->deleteBillResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## billsOne

Get Bill

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BillsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\BillsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillsOneRequest();
    $request->fields = 'ad';
    $request->id = '929396fe-a759-46eb-90fa-aa2352c59559';
    $request->raw = false;
    $request->xApideckAppId = 'accusantium';
    $request->xApideckConsumerId = 'iure';
    $request->xApideckServiceId = 'culpa';

    $requestSecurity = new BillsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->bills->billsOne($request, $requestSecurity);

    if ($response->getBillResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## billsUpdate

Update Bill

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BillsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\BillLineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedInvoiceItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\BillLineItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LinkedSupplierInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\BillsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillsUpdateRequest();
    $request->billInput = new BillInput();
    $request->billInput->balance = 27500;
    $request->billInput->billDate = DateTime::createFromFormat('Y-m-d', '2020-09-30');
    $request->billInput->billNumber = '10001';
    $request->billInput->currency = CurrencyEnum::USD;
    $request->billInput->currencyRate = 0.69;
    $request->billInput->deposit = 9883.74;
    $request->billInput->dueDate = DateTime::createFromFormat('Y-m-d', '2020-10-30');
    $request->billInput->ledgerAccount = new LinkedLedgerAccountInput();
    $request->billInput->ledgerAccount->code = '453';
    $request->billInput->ledgerAccount->id = '123456';
    $request->billInput->ledgerAccount->nominalCode = 'N091';
    $request->billInput->lineItems = [
        new BillLineItemInput(),
        new BillLineItemInput(),
        new BillLineItemInput(),
        new BillLineItemInput(),
    ];
    $request->billInput->notes = 'Some notes about this bill.';
    $request->billInput->paidDate = DateTime::createFromFormat('Y-m-d', '2020-10-30');
    $request->billInput->poNumber = '90000117';
    $request->billInput->reference = '123456';
    $request->billInput->rowVersion = '1-12345';
    $request->billInput->status = BillStatusEnum::DRAFT;
    $request->billInput->subTotal = 27500;
    $request->billInput->supplier = new LinkedSupplierInput();
    $request->billInput->supplier->address = new Address();
    $request->billInput->supplier->address->city = 'San Francisco';
    $request->billInput->supplier->address->contactName = 'Elon Musk';
    $request->billInput->supplier->address->country = 'US';
    $request->billInput->supplier->address->county = 'Santa Clara';
    $request->billInput->supplier->address->email = 'elon@musk.com';
    $request->billInput->supplier->address->fax = '122-111-1111';
    $request->billInput->supplier->address->id = '123';
    $request->billInput->supplier->address->latitude = '40.759211';
    $request->billInput->supplier->address->line1 = 'Main street';
    $request->billInput->supplier->address->line2 = 'apt #';
    $request->billInput->supplier->address->line3 = 'Suite #';
    $request->billInput->supplier->address->line4 = 'delivery instructions';
    $request->billInput->supplier->address->longitude = '-73.984638';
    $request->billInput->supplier->address->name = 'HQ US';
    $request->billInput->supplier->address->phoneNumber = '111-111-1111';
    $request->billInput->supplier->address->postalCode = '94104';
    $request->billInput->supplier->address->rowVersion = '1-12345';
    $request->billInput->supplier->address->salutation = 'Mr';
    $request->billInput->supplier->address->state = 'CA';
    $request->billInput->supplier->address->streetNumber = '25';
    $request->billInput->supplier->address->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->billInput->supplier->address->type = AddressTypeEnum::PRIMARY;
    $request->billInput->supplier->address->website = 'https://elonmusk.com';
    $request->billInput->supplier->displayName = 'Windsurf Shop';
    $request->billInput->supplier->id = '12345';
    $request->billInput->taxCode = '1234';
    $request->billInput->taxInclusive = true;
    $request->billInput->terms = 'Net 30 days';
    $request->billInput->total = 27500;
    $request->billInput->totalTax = 2500;
    $request->id = '1a3a2fa9-4677-4392-91aa-52c3f5ad019d';
    $request->raw = false;
    $request->xApideckAppId = 'laborum';
    $request->xApideckConsumerId = 'quasi';
    $request->xApideckServiceId = 'reiciendis';

    $requestSecurity = new BillsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->bills->billsUpdate($request, $requestSecurity);

    if ($response->updateBillResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
