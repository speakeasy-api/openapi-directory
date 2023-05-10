# cashReceipts

### Available Operations

* [cashReceiptsDelete](#cashreceiptsdelete) - Removes an existing Cash Receipt.
* [cashReceiptsGet](#cashreceiptsget) - Returns a list of company's Cash Receipts. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [cashReceiptsPost](#cashreceiptspost) - Creates a new Cash Receipt.
* [cashReceiptsProcessBatch](#cashreceiptsprocessbatch) - Processes a batch of Cash Receipts.
* [cashReceiptsPut](#cashreceiptsput) - Updates an existing Cash Receipt.
* [getV1CashReceiptsId](#getv1cashreceiptsid) - Returns information about a single Cash Receipt.

## cashReceiptsDelete

Removes an existing Cash Receipt.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CashReceiptsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CashReceiptsDeleteRequest();
    $request->id = 607831;
    $request->timestamp = 'nemo';

    $response = $sdk->cashReceipts->cashReceiptsDelete($request);

    if ($response->cashReceiptsDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cashReceiptsGet

Returns a list of company's Cash Receipts. Supports OData querying protocol.
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
    $response = $sdk->cashReceipts->cashReceiptsGet();

    if ($response->pageResultCashReceiptQueryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cashReceiptsPost

Creates a new Cash Receipt.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CashReceiptDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\VatEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CashReceiptDto();
    $request->acCode = 'minima';
    $request->acEntries = [
        new AcEntryDto(),
        new AcEntryDto(),
        new AcEntryDto(),
    ];
    $request->bookTranTypeId = 38425;
    $request->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->customerId = 634274;
    $request->detailCollection = [
        'sapiente',
        'architecto',
        'mollitia',
        'dolorem',
    ];
    $request->discount = 6350.59;
    $request->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-02T17:10:32.894Z');
    $request->id = 653108;
    $request->ledger = 5818.5;
    $request->note = 'numquam';
    $request->plaidTransactionId = 'commodi';
    $request->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T17:38:58.953Z');
    $request->timestamp = 'velit';
    $request->total = 6235.1;
    $request->unallocated = 1589.69;
    $request->vatEntries = [
        new VatEntryDto(),
        new VatEntryDto(),
    ];
    $request->vatTypeId = 110375;

    $response = $sdk->cashReceipts->cashReceiptsPost($request);

    if ($response->cashReceiptsPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cashReceiptsProcessBatch

Processes a batch of Cash Receipts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemCashReceiptDto;
use \OpenAPI\OpenAPI\Models\Shared\CashReceiptDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\VatEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemCashReceiptDtoOpCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new BatchItemCashReceiptDto(),
        new BatchItemCashReceiptDto(),
        new BatchItemCashReceiptDto(),
    ]

    $response = $sdk->cashReceipts->cashReceiptsProcessBatch($request);

    if ($response->cashReceiptsProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cashReceiptsPut

Updates an existing Cash Receipt.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CashReceiptsPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\CashReceiptDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\VatEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CashReceiptsPutRequest();
    $request->cashReceiptDto = new CashReceiptDto();
    $request->cashReceiptDto->acCode = 'animi';
    $request->cashReceiptDto->acEntries = [
        new AcEntryDto(),
        new AcEntryDto(),
    ];
    $request->cashReceiptDto->bookTranTypeId = 138183;
    $request->cashReceiptDto->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->cashReceiptDto->customerId = 196582;
    $request->cashReceiptDto->detailCollection = [
        'ipsam',
        'id',
        'possimus',
        'aut',
    ];
    $request->cashReceiptDto->discount = 971.01;
    $request->cashReceiptDto->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-29T07:12:18.684Z');
    $request->cashReceiptDto->id = 673660;
    $request->cashReceiptDto->ledger = 960.98;
    $request->cashReceiptDto->note = 'reiciendis';
    $request->cashReceiptDto->plaidTransactionId = 'voluptatibus';
    $request->cashReceiptDto->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-05T19:50:46.898Z');
    $request->cashReceiptDto->timestamp = 'praesentium';
    $request->cashReceiptDto->total = 9767.62;
    $request->cashReceiptDto->unallocated = 557.14;
    $request->cashReceiptDto->vatEntries = [
        new VatEntryDto(),
        new VatEntryDto(),
        new VatEntryDto(),
    ];
    $request->cashReceiptDto->vatTypeId = 451159;
    $request->id = 739264;

    $response = $sdk->cashReceipts->cashReceiptsPut($request);

    if ($response->cashReceiptsPut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1CashReceiptsId

Returns information about a single Cash Receipt.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1CashReceiptsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1CashReceiptsIdRequest();
    $request->id = 19987;

    $response = $sdk->cashReceipts->getV1CashReceiptsId($request);

    if ($response->cashReceiptDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
