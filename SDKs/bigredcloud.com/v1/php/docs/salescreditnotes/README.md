# salesCreditNotes

### Available Operations

* [salesCreditNotesDelete](#salescreditnotesdelete) - Removes an existing Sales Credit Note.
* [salesCreditNotesGet](#salescreditnotesget) - Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [salesCreditNotesPost](#salescreditnotespost) - Creates a new Sales Credit Note.
* [salesCreditNotesProcessBatch](#salescreditnotesprocessbatch) - Processes a batch of Sales Credit Notes.
* [salesCreditNotesPut](#salescreditnotesput) - Updates an existing Sales Credit Note.
* [getV1SalesCreditNotesId](#getv1salescreditnotesid) - Returns information about a single Sales Credit Note.

## salesCreditNotesDelete

Removes an existing Sales Credit Note.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SalesCreditNotesDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SalesCreditNotesDeleteRequest();
    $request->id = 13948;
    $request->timestamp = 'aut';

    $response = $sdk->salesCreditNotes->salesCreditNotesDelete($request);

    if ($response->salesCreditNotesDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesCreditNotesGet

Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->salesCreditNotes->salesCreditNotesGet();

    if ($response->pageResultSalesCreditNoteQueryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesCreditNotesPost

Creates a new Sales Credit Note.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SalesInvoiceCreditNoteDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\ProductTranDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SalesInvoiceCreditNoteDto();
    $request->acCode = 'deleniti';
    $request->bookTranTypeId = 770581;
    $request->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->customerId = 146946;
    $request->deliveryTo = [
        'inventore',
        'non',
        'et',
        'dolorum',
    ];
    $request->details = 'laborum';
    $request->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-07T07:44:57.988Z');
    $request->id = 432148;
    $request->loType = 'autem';
    $request->netGoods = 7521.35;
    $request->netServices = 5573.69;
    $request->note = 'assumenda';
    $request->ourReference = 'nulla';
    $request->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-10T15:05:31.822Z');
    $request->productTrans = [
        new ProductTranDto(),
    ];
    $request->quoteId = 270328;
    $request->reference = 'numquam';
    $request->saleRepCode = 'explicabo';
    $request->saleRepId = 591935;
    $request->timestamp = 'ipsa';
    $request->total = 4764.77;
    $request->totalNet = 3015.98;
    $request->totalVAT = 4879.35;
    $request->unpaid = 2621.18;
    $request->vatTypeId = 458515;
    $request->yourReference = 'esse';

    $response = $sdk->salesCreditNotes->salesCreditNotesPost($request);

    if ($response->salesCreditNotesPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesCreditNotesProcessBatch

Processes a batch of Sales Credit Notes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemSalesInvoiceCreditNoteDto;
use \OpenAPI\OpenAPI\Models\Shared\SalesInvoiceCreditNoteDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\ProductTranDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemSalesInvoiceCreditNoteDtoOpCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new BatchItemSalesInvoiceCreditNoteDto(),
        new BatchItemSalesInvoiceCreditNoteDto(),
        new BatchItemSalesInvoiceCreditNoteDto(),
    ]

    $response = $sdk->salesCreditNotes->salesCreditNotesProcessBatch($request);

    if ($response->salesCreditNotesProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesCreditNotesPut

Updates an existing Sales Credit Note.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SalesCreditNotesPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\SalesInvoiceCreditNoteDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\ProductTranDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SalesCreditNotesPutRequest();
    $request->salesInvoiceCreditNoteDto = new SalesInvoiceCreditNoteDto();
    $request->salesInvoiceCreditNoteDto->acCode = 'fuga';
    $request->salesInvoiceCreditNoteDto->bookTranTypeId = 442015;
    $request->salesInvoiceCreditNoteDto->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->salesInvoiceCreditNoteDto->customerId = 852635;
    $request->salesInvoiceCreditNoteDto->deliveryTo = [
        'eum',
        'suscipit',
    ];
    $request->salesInvoiceCreditNoteDto->details = 'assumenda';
    $request->salesInvoiceCreditNoteDto->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-29T02:09:48.123Z');
    $request->salesInvoiceCreditNoteDto->id = 788546;
    $request->salesInvoiceCreditNoteDto->loType = 'veritatis';
    $request->salesInvoiceCreditNoteDto->netGoods = 568.48;
    $request->salesInvoiceCreditNoteDto->netServices = 6600.4;
    $request->salesInvoiceCreditNoteDto->note = 'quidem';
    $request->salesInvoiceCreditNoteDto->ourReference = 'neque';
    $request->salesInvoiceCreditNoteDto->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-17T05:36:16.683Z');
    $request->salesInvoiceCreditNoteDto->productTrans = [
        new ProductTranDto(),
        new ProductTranDto(),
        new ProductTranDto(),
        new ProductTranDto(),
    ];
    $request->salesInvoiceCreditNoteDto->quoteId = 681359;
    $request->salesInvoiceCreditNoteDto->reference = 'eius';
    $request->salesInvoiceCreditNoteDto->saleRepCode = 'eos';
    $request->salesInvoiceCreditNoteDto->saleRepId = 373813;
    $request->salesInvoiceCreditNoteDto->timestamp = 'ab';
    $request->salesInvoiceCreditNoteDto->total = 5876;
    $request->salesInvoiceCreditNoteDto->totalNet = 96.88;
    $request->salesInvoiceCreditNoteDto->totalVAT = 2728.22;
    $request->salesInvoiceCreditNoteDto->unpaid = 8920.5;
    $request->salesInvoiceCreditNoteDto->vatTypeId = 370853;
    $request->salesInvoiceCreditNoteDto->yourReference = 'aspernatur';
    $request->id = 197054;

    $response = $sdk->salesCreditNotes->salesCreditNotesPut($request);

    if ($response->salesCreditNotesPut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1SalesCreditNotesId

Returns information about a single Sales Credit Note.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1SalesCreditNotesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1SalesCreditNotesIdRequest();
    $request->id = 779192;

    $response = $sdk->salesCreditNotes->getV1SalesCreditNotesId($request);

    if ($response->salesInvoiceCreditNoteDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
