# purchases

### Available Operations

* [purchasesDelete](#purchasesdelete) - Removes an existing Purchase.
* [purchasesGet](#purchasesget) - Returns a list of company's Purchases. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [purchasesPost](#purchasespost) - Creates a new Purchase.
* [purchasesProcessBatch](#purchasesprocessbatch) - Processes a batch of Purchases.
* [purchasesPut](#purchasesput) - Updates an existing Purchase.
* [getV1PurchasesId](#getv1purchasesid) - Returns information about a single Purchases.

## purchasesDelete

Removes an existing Purchase.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PurchasesDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PurchasesDeleteRequest();
    $request->id = 263322;
    $request->timestamp = 'aspernatur';

    $response = $sdk->purchases->purchasesDelete($request);

    if ($response->purchasesDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## purchasesGet

Returns a list of company's Purchases. Supports OData querying protocol.
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
    $response = $sdk->purchases->purchasesGet();

    if ($response->pageResultPurchaseQueryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## purchasesPost

Creates a new Purchase.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PurchaseDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\VatEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PurchaseDto();
    $request->acCode = 'perferendis';
    $request->acEntries = [
        new AcEntryDto(),
    ];
    $request->bookTranTypeId = 758379;
    $request->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->detailCollection = [
        'saepe',
        'suscipit',
    ];
    $request->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-28T12:41:02.358Z');
    $request->id = 324683;
    $request->isDiscrepancyAccepted = false;
    $request->netGoods = 8310.49;
    $request->netServices = 5197.11;
    $request->note = 'similique';
    $request->postponedAccounting = false;
    $request->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-16T11:34:48.736Z');
    $request->reference = 'quaerat';
    $request->supplierId = 273542;
    $request->timestamp = 'vel';
    $request->total = 7980.47;
    $request->totalNet = 8853.38;
    $request->totalVAT = 1856.36;
    $request->unallocated = 6798.8;
    $request->unpaid = 9527.92;
    $request->vatEntries = [
        new VatEntryDto(),
        new VatEntryDto(),
    ];
    $request->vatTypeId = 687488;

    $response = $sdk->purchases->purchasesPost($request);

    if ($response->purchasesPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## purchasesProcessBatch

Processes a batch of Purchases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemPurchaseDto;
use \OpenAPI\OpenAPI\Models\Shared\PurchaseDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\VatEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemPurchaseDtoOpCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new BatchItemPurchaseDto(),
        new BatchItemPurchaseDto(),
    ]

    $response = $sdk->purchases->purchasesProcessBatch($request);

    if ($response->purchasesProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## purchasesPut

Updates an existing Purchase.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PurchasesPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\PurchaseDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\VatEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PurchasesPutRequest();
    $request->purchaseDto = new PurchaseDto();
    $request->purchaseDto->acCode = 'ipsum';
    $request->purchaseDto->acEntries = [
        new AcEntryDto(),
        new AcEntryDto(),
        new AcEntryDto(),
        new AcEntryDto(),
    ];
    $request->purchaseDto->bookTranTypeId = 947371;
    $request->purchaseDto->customFields = [
        new AcudfValueDto(),
    ];
    $request->purchaseDto->detailCollection = [
        'accusamus',
        'numquam',
        'enim',
    ];
    $request->purchaseDto->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-16T12:43:49.763Z');
    $request->purchaseDto->id = 518201;
    $request->purchaseDto->isDiscrepancyAccepted = false;
    $request->purchaseDto->netGoods = 4717.52;
    $request->purchaseDto->netServices = 256.62;
    $request->purchaseDto->note = 'expedita';
    $request->purchaseDto->postponedAccounting = false;
    $request->purchaseDto->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-05T21:38:15.600Z');
    $request->purchaseDto->reference = 'vel';
    $request->purchaseDto->supplierId = 730442;
    $request->purchaseDto->timestamp = 'voluptas';
    $request->purchaseDto->total = 6462.65;
    $request->purchaseDto->totalNet = 4635.75;
    $request->purchaseDto->totalVAT = 2148.8;
    $request->purchaseDto->unallocated = 2776.28;
    $request->purchaseDto->unpaid = 1864.58;
    $request->purchaseDto->vatEntries = [
        new VatEntryDto(),
        new VatEntryDto(),
        new VatEntryDto(),
    ];
    $request->purchaseDto->vatTypeId = 807581;
    $request->id = 863856;

    $response = $sdk->purchases->purchasesPut($request);

    if ($response->purchasesPut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1PurchasesId

Returns information about a single Purchases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1PurchasesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1PurchasesIdRequest();
    $request->id = 747080;

    $response = $sdk->purchases->getV1PurchasesId($request);

    if ($response->purchaseDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
