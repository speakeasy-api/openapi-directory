# salesEntries

### Available Operations

* [salesEntriesDelete](#salesentriesdelete) - Removes an existing Sales Entry.
* [salesEntriesGet](#salesentriesget) - Returns a list of company's Sales Entries. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [salesEntriesPost](#salesentriespost) - Creates a new Sales Entry.
* [salesEntriesProcessBatch](#salesentriesprocessbatch) - Processes a batch of Sales Entries.
* [salesEntriesPut](#salesentriesput) - Updates an existing Sales Entry.
* [getV1SalesEntriesId](#getv1salesentriesid) - Returns information about a single Sales Entry.

## salesEntriesDelete

Removes an existing Sales Entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SalesEntriesDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SalesEntriesDeleteRequest();
    $request->id = 459856;
    $request->timestamp = 'recusandae';

    $response = $sdk->salesEntries->salesEntriesDelete($request);

    if ($response->salesEntriesDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesEntriesGet

Returns a list of company's Sales Entries. Supports OData querying protocol.
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
    $response = $sdk->salesEntries->salesEntriesGet();

    if ($response->pageResultSalesEntryQueryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesEntriesPost

Creates a new Sales Entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SalesEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\VatEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SalesEntryDto();
    $request->acCode = 'aperiam';
    $request->acEntries = [
        new AcEntryDto(),
        new AcEntryDto(),
        new AcEntryDto(),
    ];
    $request->bookTranTypeId = 799796;
    $request->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->customerId = 76956;
    $request->detailCollection = [
        'totam',
        'accusamus',
    ];
    $request->details = 'aliquam';
    $request->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-04T04:43:25.138Z');
    $request->id = 414567;
    $request->netGoods = 9594.34;
    $request->netServices = 1741.12;
    $request->note = 'deserunt';
    $request->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-19T02:13:29.248Z');
    $request->reference = 'porro';
    $request->timestamp = 'eum';
    $request->total = 5564.29;
    $request->totalNet = 5100.17;
    $request->totalVAT = 1598.67;
    $request->unpaid = 5361.78;
    $request->vatEntries = [
        new VatEntryDto(),
    ];
    $request->vatTypeId = 681393;

    $response = $sdk->salesEntries->salesEntriesPost($request);

    if ($response->salesEntriesPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesEntriesProcessBatch

Processes a batch of Sales Entries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemSalesEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\SalesEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\VatEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemSalesEntryDtoOpCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new BatchItemSalesEntryDto(),
        new BatchItemSalesEntryDto(),
        new BatchItemSalesEntryDto(),
    ]

    $response = $sdk->salesEntries->salesEntriesProcessBatch($request);

    if ($response->salesEntriesProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesEntriesPut

Updates an existing Sales Entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SalesEntriesPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\SalesEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\VatEntryDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SalesEntriesPutRequest();
    $request->salesEntryDto = new SalesEntryDto();
    $request->salesEntryDto->acCode = 'incidunt';
    $request->salesEntryDto->acEntries = [
        new AcEntryDto(),
        new AcEntryDto(),
        new AcEntryDto(),
    ];
    $request->salesEntryDto->bookTranTypeId = 128860;
    $request->salesEntryDto->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->salesEntryDto->customerId = 392676;
    $request->salesEntryDto->detailCollection = [
        'sapiente',
    ];
    $request->salesEntryDto->details = 'consequuntur';
    $request->salesEntryDto->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-14T18:20:51.649Z');
    $request->salesEntryDto->id = 903984;
    $request->salesEntryDto->netGoods = 5789.22;
    $request->salesEntryDto->netServices = 5438.06;
    $request->salesEntryDto->note = 'et';
    $request->salesEntryDto->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-02T15:37:41.657Z');
    $request->salesEntryDto->reference = 'accusamus';
    $request->salesEntryDto->timestamp = 'veritatis';
    $request->salesEntryDto->total = 4586.04;
    $request->salesEntryDto->totalNet = 8003.79;
    $request->salesEntryDto->totalVAT = 7241.68;
    $request->salesEntryDto->unpaid = 8771.31;
    $request->salesEntryDto->vatEntries = [
        new VatEntryDto(),
        new VatEntryDto(),
    ];
    $request->salesEntryDto->vatTypeId = 93459;
    $request->id = 904045;

    $response = $sdk->salesEntries->salesEntriesPut($request);

    if ($response->salesEntriesPut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1SalesEntriesId

Returns information about a single Sales Entry.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1SalesEntriesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1SalesEntriesIdRequest();
    $request->id = 426306;

    $response = $sdk->salesEntries->getV1SalesEntriesId($request);

    if ($response->salesEntryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
