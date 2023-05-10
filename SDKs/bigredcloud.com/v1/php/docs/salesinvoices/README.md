# salesInvoices

### Available Operations

* [salesInvoicesDelete](#salesinvoicesdelete) - Removes an existing Sales Invoice.
* [salesInvoicesGet](#salesinvoicesget) - Returns a list of company's Sales Invoices. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [salesInvoicesPost](#salesinvoicespost) - Creates a new Sales Invoice.
* [salesInvoicesPostCreateSaleInvoiceWithGeneratingReference](#salesinvoicespostcreatesaleinvoicewithgeneratingreference) - Creates a new Sale Invoice with auto generating reference.
* [salesInvoicesProcessBatch](#salesinvoicesprocessbatch) - Processes a batch of Sales Invoices.
* [salesInvoicesPut](#salesinvoicesput) - Updates an existing Sales Invoice.
* [getV1SalesInvoicesId](#getv1salesinvoicesid) - Returns information about a single Sales Invoice.

## salesInvoicesDelete

Removes an existing Sales Invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SalesInvoicesDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SalesInvoicesDeleteRequest();
    $request->id = 690025;
    $request->timestamp = 'molestiae';

    $response = $sdk->salesInvoices->salesInvoicesDelete($request);

    if ($response->salesInvoicesDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesInvoicesGet

Returns a list of company's Sales Invoices. Supports OData querying protocol.
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
    $response = $sdk->salesInvoices->salesInvoicesGet();

    if ($response->pageResultSalesInvoiceQueryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesInvoicesPost

Creates a new Sales Invoice.

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
    $request->acCode = 'rerum';
    $request->bookTranTypeId = 580197;
    $request->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->customerId = 716244;
    $request->deliveryTo = [
        'sit',
        'culpa',
        'tempore',
        'adipisci',
    ];
    $request->details = 'cumque';
    $request->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-28T10:26:44.811Z');
    $request->id = 796392;
    $request->loType = 'quaerat';
    $request->netGoods = 9591.67;
    $request->netServices = 2328.65;
    $request->note = 'esse';
    $request->ourReference = 'blanditiis';
    $request->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-03T18:48:04.995Z');
    $request->productTrans = [
        new ProductTranDto(),
        new ProductTranDto(),
        new ProductTranDto(),
        new ProductTranDto(),
    ];
    $request->quoteId = 557811;
    $request->reference = 'esse';
    $request->saleRepCode = 'quasi';
    $request->saleRepId = 951875;
    $request->timestamp = 'error';
    $request->total = 5757.51;
    $request->totalNet = 8630.23;
    $request->totalVAT = 8207.67;
    $request->unpaid = 1576.32;
    $request->vatTypeId = 908844;
    $request->yourReference = 'asperiores';

    $response = $sdk->salesInvoices->salesInvoicesPost($request);

    if ($response->salesInvoicesPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesInvoicesPostCreateSaleInvoiceWithGeneratingReference

Creates a new Sale Invoice with auto generating reference.

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
    $request->acCode = 'facere';
    $request->bookTranTypeId = 85001;
    $request->customFields = [
        new AcudfValueDto(),
    ];
    $request->customerId = 94458;
    $request->deliveryTo = [
        'culpa',
        'aliquid',
        'tenetur',
    ];
    $request->details = 'quae';
    $request->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-23T16:25:56.144Z');
    $request->id = 447378;
    $request->loType = 'eius';
    $request->netGoods = 7276.97;
    $request->netServices = 8490.39;
    $request->note = 'soluta';
    $request->ourReference = 'accusantium';
    $request->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T23:18:40.855Z');
    $request->productTrans = [
        new ProductTranDto(),
    ];
    $request->quoteId = 355369;
    $request->reference = 'reprehenderit';
    $request->saleRepCode = 'ullam';
    $request->saleRepId = 391774;
    $request->timestamp = 'aut';
    $request->total = 5318.49;
    $request->totalNet = 1852.32;
    $request->totalVAT = 8453.58;
    $request->unpaid = 4012.59;
    $request->vatTypeId = 536275;
    $request->yourReference = 'itaque';

    $response = $sdk->salesInvoices->salesInvoicesPostCreateSaleInvoiceWithGeneratingReference($request);

    if ($response->salesInvoicesPostCreateSaleInvoiceWithGeneratingReference200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesInvoicesProcessBatch

Processes a batch of Sales Invoices.

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

    $response = $sdk->salesInvoices->salesInvoicesProcessBatch($request);

    if ($response->salesInvoicesProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesInvoicesPut

Updates an existing Sales Invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SalesInvoicesPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\SalesInvoiceCreditNoteDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\ProductTranDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SalesInvoicesPutRequest();
    $request->salesInvoiceCreditNoteDto = new SalesInvoiceCreditNoteDto();
    $request->salesInvoiceCreditNoteDto->acCode = 'architecto';
    $request->salesInvoiceCreditNoteDto->bookTranTypeId = 609178;
    $request->salesInvoiceCreditNoteDto->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->salesInvoiceCreditNoteDto->customerId = 98478;
    $request->salesInvoiceCreditNoteDto->deliveryTo = [
        'et',
        'voluptate',
        'ipsa',
        'minima',
    ];
    $request->salesInvoiceCreditNoteDto->details = 'veritatis';
    $request->salesInvoiceCreditNoteDto->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T10:21:42.350Z');
    $request->salesInvoiceCreditNoteDto->id = 614465;
    $request->salesInvoiceCreditNoteDto->loType = 'temporibus';
    $request->salesInvoiceCreditNoteDto->netGoods = 330.74;
    $request->salesInvoiceCreditNoteDto->netServices = 5223.71;
    $request->salesInvoiceCreditNoteDto->note = 'aut';
    $request->salesInvoiceCreditNoteDto->ourReference = 'laudantium';
    $request->salesInvoiceCreditNoteDto->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-08T19:28:18.512Z');
    $request->salesInvoiceCreditNoteDto->productTrans = [
        new ProductTranDto(),
    ];
    $request->salesInvoiceCreditNoteDto->quoteId = 544591;
    $request->salesInvoiceCreditNoteDto->reference = 'non';
    $request->salesInvoiceCreditNoteDto->saleRepCode = 'voluptatem';
    $request->salesInvoiceCreditNoteDto->saleRepId = 221161;
    $request->salesInvoiceCreditNoteDto->timestamp = 'occaecati';
    $request->salesInvoiceCreditNoteDto->total = 2531.91;
    $request->salesInvoiceCreditNoteDto->totalNet = 7710.89;
    $request->salesInvoiceCreditNoteDto->totalVAT = 1310.55;
    $request->salesInvoiceCreditNoteDto->unpaid = 3762.26;
    $request->salesInvoiceCreditNoteDto->vatTypeId = 12036;
    $request->salesInvoiceCreditNoteDto->yourReference = 'dignissimos';
    $request->id = 115484;

    $response = $sdk->salesInvoices->salesInvoicesPut($request);

    if ($response->salesInvoicesPut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1SalesInvoicesId

Returns information about a single Sales Invoice.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1SalesInvoicesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1SalesInvoicesIdRequest();
    $request->id = 981640;

    $response = $sdk->salesInvoices->getV1SalesInvoicesId($request);

    if ($response->salesInvoiceCreditNoteDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
