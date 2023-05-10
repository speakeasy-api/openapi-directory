# quote

### Available Operations

* [quoteClose](#quoteclose) - Close a Quote.
* [quoteDelete](#quotedelete) - Removes an existing Quote.
* [quoteGet](#quoteget) - Returns a list of company's Quotes.
Filtering is forbidden.
Ordering is allowed by "id".
* [quotePost](#quotepost) - Creates a new Quote.
* [quotePostCreateQuoteWithGeneratingReference](#quotepostcreatequotewithgeneratingreference) - Creates a new Quote with auto generating reference.
* [quotePostGenerateSaleInvoice](#quotepostgeneratesaleinvoice) - Generate a sale invoice from a Quote.
When sale invoice is empty, new sale invoice will be generated from Quote.
* [quoteProcessBatch](#quoteprocessbatch) - Processes a batch of Quote.
* [quotePut](#quoteput) - Updates an existing Quote.
* [quoteReopen](#quotereopen) - Reopen a Quote.
* [getV1QuotesId](#getv1quotesid) - Returns information about a single Quote.

## quoteClose

Close a Quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuoteCloseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuoteCloseRequest();
    $request->id = 117531;

    $response = $sdk->quote->quoteClose($request);

    if ($response->quoteClose200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quoteDelete

Removes an existing Quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuoteDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuoteDeleteRequest();
    $request->id = 674848;
    $request->timestamp = 'totam';

    $response = $sdk->quote->quoteDelete($request);

    if ($response->quoteDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quoteGet

Returns a list of company's Quotes.
Filtering is forbidden.
Ordering is allowed by "id".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->quote->quoteGet();

    if ($response->pageResultQuoteDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quotePost

Creates a new Quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\QuoteDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\QuoteProductTransDto;
use \OpenAPI\OpenAPI\Models\Shared\QuoteAcEntriesDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuoteDto();
    $request->acCode = 'incidunt';
    $request->closedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-29T03:47:52.981Z');
    $request->comments = 'distinctio';
    $request->companyId = 704474;
    $request->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->customerOwnerId = 463150;
    $request->customerOwnerName = 'molestias';
    $request->ddNumber = 'temporibus';
    $request->deliveryList = 'qui';
    $request->deliveryTo = [
        'fugit',
    ];
    $request->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-06T20:37:36.497Z');
    $request->id = 124833;
    $request->layoutType = 355613;
    $request->note = 'nam';
    $request->poNumber = 'hic';
    $request->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T15:45:02.604Z');
    $request->productTrans = [
        new QuoteProductTransDto(),
        new QuoteProductTransDto(),
        new QuoteProductTransDto(),
    ];
    $request->reference = 'nobis';
    $request->saleInvoiceId = 92596;
    $request->saleRepCode = 'saepe';
    $request->saleRepId = 217450;
    $request->timeStamp = 'veritatis';
    $request->total = 7492.55;
    $request->totalNet = 5521.93;
    $request->totalVat = 7316.94;
    $request->vatTypeId = 584476;

    $response = $sdk->quote->quotePost($request);

    if ($response->quotePost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quotePostCreateQuoteWithGeneratingReference

Creates a new Quote with auto generating reference.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\QuoteDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\QuoteProductTransDto;
use \OpenAPI\OpenAPI\Models\Shared\QuoteAcEntriesDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuoteDto();
    $request->acCode = 'aperiam';
    $request->closedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-16T23:21:11.104Z');
    $request->comments = 'dolore';
    $request->companyId = 286915;
    $request->customFields = [
        new AcudfValueDto(),
    ];
    $request->customerOwnerId = 677263;
    $request->customerOwnerName = 'architecto';
    $request->ddNumber = 'quae';
    $request->deliveryList = 'aut';
    $request->deliveryTo = [
        'itaque',
        'consequatur',
        'est',
    ];
    $request->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-24T06:10:53.249Z');
    $request->id = 984330;
    $request->layoutType = 281730;
    $request->note = 'facilis';
    $request->poNumber = 'cupiditate';
    $request->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-08T15:45:05.802Z');
    $request->productTrans = [
        new QuoteProductTransDto(),
        new QuoteProductTransDto(),
        new QuoteProductTransDto(),
    ];
    $request->reference = 'odio';
    $request->saleInvoiceId = 580447;
    $request->saleRepCode = 'voluptatibus';
    $request->saleRepId = 787542;
    $request->timeStamp = 'vero';
    $request->total = 6064.76;
    $request->totalNet = 3381.59;
    $request->totalVat = 2184.03;
    $request->vatTypeId = 961571;

    $response = $sdk->quote->quotePostCreateQuoteWithGeneratingReference($request);

    if ($response->quotePostCreateQuoteWithGeneratingReference200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quotePostGenerateSaleInvoice

Generate a sale invoice from a Quote.
When sale invoice is empty, new sale invoice will be generated from Quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\QuoteGeneratingInvoiceDto;
use \OpenAPI\OpenAPI\Models\Shared\SalesInvoiceCreditNoteDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\ProductTranDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuoteGeneratingInvoiceDto();
    $request->quoteId = 455169;
    $request->saleInvoice = new SalesInvoiceCreditNoteDto();
    $request->saleInvoice->acCode = 'consectetur';
    $request->saleInvoice->bookTranTypeId = 878870;
    $request->saleInvoice->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->saleInvoice->customerId = 492268;
    $request->saleInvoice->deliveryTo = [
        'distinctio',
        'quod',
        'odio',
        'similique',
    ];
    $request->saleInvoice->details = 'facilis';
    $request->saleInvoice->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-04T12:52:28.765Z');
    $request->saleInvoice->id = 293020;
    $request->saleInvoice->loType = 'quibusdam';
    $request->saleInvoice->netGoods = 8489.44;
    $request->saleInvoice->netServices = 1943.42;
    $request->saleInvoice->note = 'natus';
    $request->saleInvoice->ourReference = 'impedit';
    $request->saleInvoice->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-10T09:29:38.619Z');
    $request->saleInvoice->productTrans = [
        new ProductTranDto(),
        new ProductTranDto(),
    ];
    $request->saleInvoice->quoteId = 862310;
    $request->saleInvoice->reference = 'fugit';
    $request->saleInvoice->saleRepCode = 'porro';
    $request->saleInvoice->saleRepId = 981830;
    $request->saleInvoice->timestamp = 'doloribus';
    $request->saleInvoice->total = 4783.7;
    $request->saleInvoice->totalNet = 7535.7;
    $request->saleInvoice->totalVAT = 4973.91;
    $request->saleInvoice->unpaid = 40.48;
    $request->saleInvoice->vatTypeId = 639473;
    $request->saleInvoice->yourReference = 'tempora';

    $response = $sdk->quote->quotePostGenerateSaleInvoice($request);

    if ($response->quotePostGenerateSaleInvoice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quoteProcessBatch

Processes a batch of Quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemQuoteDto;
use \OpenAPI\OpenAPI\Models\Shared\QuoteDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\QuoteProductTransDto;
use \OpenAPI\OpenAPI\Models\Shared\QuoteAcEntriesDto;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemQuoteDtoOpCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new BatchItemQuoteDto(),
        new BatchItemQuoteDto(),
    ]

    $response = $sdk->quote->quoteProcessBatch($request);

    if ($response->quoteProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quotePut

Updates an existing Quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuotePutRequest;
use \OpenAPI\OpenAPI\Models\Shared\QuoteDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\QuoteProductTransDto;
use \OpenAPI\OpenAPI\Models\Shared\QuoteAcEntriesDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuotePutRequest();
    $request->quoteDto = new QuoteDto();
    $request->quoteDto->acCode = 'ea';
    $request->quoteDto->closedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-28T16:45:32.822Z');
    $request->quoteDto->comments = 'possimus';
    $request->quoteDto->companyId = 297842;
    $request->quoteDto->customFields = [
        new AcudfValueDto(),
    ];
    $request->quoteDto->customerOwnerId = 401132;
    $request->quoteDto->customerOwnerName = 'laudantium';
    $request->quoteDto->ddNumber = 'dicta';
    $request->quoteDto->deliveryList = 'dolor';
    $request->quoteDto->deliveryTo = [
        'quasi',
        'ex',
        'nulla',
        'excepturi',
    ];
    $request->quoteDto->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-20T18:02:50.249Z');
    $request->quoteDto->id = 960835;
    $request->quoteDto->layoutType = 788873;
    $request->quoteDto->note = 'saepe';
    $request->quoteDto->poNumber = 'ea';
    $request->quoteDto->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-03T14:20:49.127Z');
    $request->quoteDto->productTrans = [
        new QuoteProductTransDto(),
        new QuoteProductTransDto(),
    ];
    $request->quoteDto->reference = 'aliquid';
    $request->quoteDto->saleInvoiceId = 81101;
    $request->quoteDto->saleRepCode = 'magnam';
    $request->quoteDto->saleRepId = 407241;
    $request->quoteDto->timeStamp = 'quo';
    $request->quoteDto->total = 2322.34;
    $request->quoteDto->totalNet = 9262.13;
    $request->quoteDto->totalVat = 1324.87;
    $request->quoteDto->vatTypeId = 325310;
    $request->id = 53427;

    $response = $sdk->quote->quotePut($request);

    if ($response->quotePut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## quoteReopen

Reopen a Quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\QuoteReopenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuoteReopenRequest();
    $request->id = 952871;

    $response = $sdk->quote->quoteReopen($request);

    if ($response->quoteReopen200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1QuotesId

Returns information about a single Quote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1QuotesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1QuotesIdRequest();
    $request->id = 725595;

    $response = $sdk->quote->getV1QuotesId($request);

    if ($response->quoteDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
