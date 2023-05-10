# invoiceItems

## Overview

Invoice items are stored from invoice lines to be used later on when creating new invoices.

### Available Operations

* [invoiceItemsAdd](#invoiceitemsadd) - Create Invoice Item
* [invoiceItemsAll](#invoiceitemsall) - List Invoice Items
* [invoiceItemsDelete](#invoiceitemsdelete) - Delete Invoice Item
* [invoiceItemsOne](#invoiceitemsone) - Get Invoice Item
* [invoiceItemsUpdate](#invoiceitemsupdate) - Update Invoice Item

## invoiceItemsAdd

Create Invoice Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceItemsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItemPurchaseDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItemSalesDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceItemsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceItemsAddRequest();
    $request->invoiceItemInput = new InvoiceItemInput();
    $request->invoiceItemInput->active = true;
    $request->invoiceItemInput->assetAccount = new LinkedLedgerAccountInput();
    $request->invoiceItemInput->assetAccount->code = '453';
    $request->invoiceItemInput->assetAccount->id = '123456';
    $request->invoiceItemInput->assetAccount->nominalCode = 'N091';
    $request->invoiceItemInput->code = '120-C';
    $request->invoiceItemInput->description = 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.';
    $request->invoiceItemInput->expenseAccount = new LinkedLedgerAccountInput();
    $request->invoiceItemInput->expenseAccount->code = '453';
    $request->invoiceItemInput->expenseAccount->id = '123456';
    $request->invoiceItemInput->expenseAccount->nominalCode = 'N091';
    $request->invoiceItemInput->incomeAccount = new LinkedLedgerAccountInput();
    $request->invoiceItemInput->incomeAccount->code = '453';
    $request->invoiceItemInput->incomeAccount->id = '123456';
    $request->invoiceItemInput->incomeAccount->nominalCode = 'N091';
    $request->invoiceItemInput->inventoryDate = DateTime::createFromFormat('Y-m-d', '2020-10-30');
    $request->invoiceItemInput->name = 'Model Y';
    $request->invoiceItemInput->purchaseDetails = new InvoiceItemPurchaseDetailsInput();
    $request->invoiceItemInput->purchaseDetails->taxInclusive = true;
    $request->invoiceItemInput->purchaseDetails->taxRate = new LinkedTaxRateInput();
    $request->invoiceItemInput->purchaseDetails->taxRate->id = '123456';
    $request->invoiceItemInput->purchaseDetails->unitOfMeasure = 'pc.';
    $request->invoiceItemInput->purchaseDetails->unitPrice = 27500.5;
    $request->invoiceItemInput->purchased = true;
    $request->invoiceItemInput->quantity = 1;
    $request->invoiceItemInput->rowVersion = '1-12345';
    $request->invoiceItemInput->salesDetails = new InvoiceItemSalesDetailsInput();
    $request->invoiceItemInput->salesDetails->taxInclusive = true;
    $request->invoiceItemInput->salesDetails->taxRate = new LinkedTaxRateInput();
    $request->invoiceItemInput->salesDetails->taxRate->id = '123456';
    $request->invoiceItemInput->salesDetails->unitOfMeasure = 'pc.';
    $request->invoiceItemInput->salesDetails->unitPrice = 27500.5;
    $request->invoiceItemInput->sold = true;
    $request->invoiceItemInput->taxable = true;
    $request->invoiceItemInput->tracked = true;
    $request->invoiceItemInput->type = InvoiceItemTypeEnum::INVENTORY;
    $request->invoiceItemInput->unitPrice = 27500.5;
    $request->raw = false;
    $request->xApideckAppId = 'numquam';
    $request->xApideckConsumerId = 'veritatis';
    $request->xApideckServiceId = 'ipsa';

    $requestSecurity = new InvoiceItemsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->invoiceItems->invoiceItemsAdd($request, $requestSecurity);

    if ($response->createInvoiceItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceItemsAll

List Invoice Items

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceItemsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItemsFilter;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceItemsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceItemsAllRequest();
    $request->cursor = 'ipsa';
    $request->fields = 'iure';
    $request->filter = new InvoiceItemsFilter();
    $request->filter->name = 'Widgets Large';
    $request->limit = 487838;
    $request->passThrough = [
        'accusamus' => 'quidem',
        'voluptatibus' => 'voluptas',
    ];
    $request->raw = false;
    $request->xApideckAppId = 'natus';
    $request->xApideckConsumerId = 'eos';
    $request->xApideckServiceId = 'atque';

    $requestSecurity = new InvoiceItemsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->invoiceItems->invoiceItemsAll($request, $requestSecurity);

    if ($response->getInvoiceItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceItemsDelete

Delete Invoice Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceItemsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceItemsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceItemsDeleteRequest();
    $request->id = '0d1ba77a-89eb-4f73-bae4-203ce5e6a95d';
    $request->raw = false;
    $request->xApideckAppId = 'totam';
    $request->xApideckConsumerId = 'similique';
    $request->xApideckServiceId = 'alias';

    $requestSecurity = new InvoiceItemsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->invoiceItems->invoiceItemsDelete($request, $requestSecurity);

    if ($response->deleteTaxRateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceItemsOne

Get Invoice Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceItemsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceItemsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceItemsOneRequest();
    $request->fields = 'at';
    $request->id = '446ce2af-7a73-4cf3-be45-3f870b326b5a';
    $request->raw = false;
    $request->xApideckAppId = 'quam';
    $request->xApideckConsumerId = 'ipsum';
    $request->xApideckServiceId = 'incidunt';

    $requestSecurity = new InvoiceItemsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->invoiceItems->invoiceItemsOne($request, $requestSecurity);

    if ($response->getInvoiceItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceItemsUpdate

Update Invoice Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceItemsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItemInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedLedgerAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItemPurchaseDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\LinkedTaxRateInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItemSalesDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceItemsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceItemsUpdateRequest();
    $request->invoiceItemInput = new InvoiceItemInput();
    $request->invoiceItemInput->active = true;
    $request->invoiceItemInput->assetAccount = new LinkedLedgerAccountInput();
    $request->invoiceItemInput->assetAccount->code = '453';
    $request->invoiceItemInput->assetAccount->id = '123456';
    $request->invoiceItemInput->assetAccount->nominalCode = 'N091';
    $request->invoiceItemInput->code = '120-C';
    $request->invoiceItemInput->description = 'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.';
    $request->invoiceItemInput->expenseAccount = new LinkedLedgerAccountInput();
    $request->invoiceItemInput->expenseAccount->code = '453';
    $request->invoiceItemInput->expenseAccount->id = '123456';
    $request->invoiceItemInput->expenseAccount->nominalCode = 'N091';
    $request->invoiceItemInput->incomeAccount = new LinkedLedgerAccountInput();
    $request->invoiceItemInput->incomeAccount->code = '453';
    $request->invoiceItemInput->incomeAccount->id = '123456';
    $request->invoiceItemInput->incomeAccount->nominalCode = 'N091';
    $request->invoiceItemInput->inventoryDate = DateTime::createFromFormat('Y-m-d', '2020-10-30');
    $request->invoiceItemInput->name = 'Model Y';
    $request->invoiceItemInput->purchaseDetails = new InvoiceItemPurchaseDetailsInput();
    $request->invoiceItemInput->purchaseDetails->taxInclusive = true;
    $request->invoiceItemInput->purchaseDetails->taxRate = new LinkedTaxRateInput();
    $request->invoiceItemInput->purchaseDetails->taxRate->id = '123456';
    $request->invoiceItemInput->purchaseDetails->unitOfMeasure = 'pc.';
    $request->invoiceItemInput->purchaseDetails->unitPrice = 27500.5;
    $request->invoiceItemInput->purchased = true;
    $request->invoiceItemInput->quantity = 1;
    $request->invoiceItemInput->rowVersion = '1-12345';
    $request->invoiceItemInput->salesDetails = new InvoiceItemSalesDetailsInput();
    $request->invoiceItemInput->salesDetails->taxInclusive = true;
    $request->invoiceItemInput->salesDetails->taxRate = new LinkedTaxRateInput();
    $request->invoiceItemInput->salesDetails->taxRate->id = '123456';
    $request->invoiceItemInput->salesDetails->unitOfMeasure = 'pc.';
    $request->invoiceItemInput->salesDetails->unitPrice = 27500.5;
    $request->invoiceItemInput->sold = true;
    $request->invoiceItemInput->taxable = true;
    $request->invoiceItemInput->tracked = true;
    $request->invoiceItemInput->type = InvoiceItemTypeEnum::INVENTORY;
    $request->invoiceItemInput->unitPrice = 27500.5;
    $request->id = '29cdb1a8-422b-4b67-9d23-22715bf0cbb1';
    $request->raw = false;
    $request->xApideckAppId = 'saepe';
    $request->xApideckConsumerId = 'ipsum';
    $request->xApideckServiceId = 'veritatis';

    $requestSecurity = new InvoiceItemsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->invoiceItems->invoiceItemsUpdate($request, $requestSecurity);

    if ($response->updateInvoiceItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
