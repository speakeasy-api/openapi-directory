# cashPayments

### Available Operations

* [cashPaymentsDelete](#cashpaymentsdelete) - Removes an existing Cash Payment.
* [cashPaymentsGet](#cashpaymentsget) - Returns a list of company's Cash Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [cashPaymentsPost](#cashpaymentspost) - Creates a new Cash Payment.
* [cashPaymentsProcessBatch](#cashpaymentsprocessbatch) - Processes a batch of Cash Payments.
* [cashPaymentsPut](#cashpaymentsput) - Updates an existing Cash Payment.
* [getV1CashPaymentsId](#getv1cashpaymentsid) - Returns information about a single Cash Payment.

## cashPaymentsDelete

Removes an existing Cash Payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CashPaymentsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CashPaymentsDeleteRequest();
    $request->id = 520478;
    $request->timestamp = 'porro';

    $response = $sdk->cashPayments->cashPaymentsDelete($request);

    if ($response->cashPaymentsDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cashPaymentsGet

Returns a list of company's Cash Payments. Supports OData querying protocol.
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
    $response = $sdk->cashPayments->cashPaymentsGet();

    if ($response->pageResultCashPaymentQueryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cashPaymentsPost

Creates a new Cash Payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CashPaymentDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CashPaymentDto();
    $request->acCode = 'dolorum';
    $request->acEntries = [
        new AcEntryDto(),
    ];
    $request->bankAccountCode = 'nam';
    $request->bankAccountId = 639921;
    $request->bookTranTypeId = 582020;
    $request->customFields = [
        new AcudfValueDto(),
    ];
    $request->detailCollection = [
        'hic',
        'optio',
        'totam',
    ];
    $request->discount = 1059.07;
    $request->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-12T03:15:36.542Z');
    $request->id = 264555;
    $request->ledger = 1863.32;
    $request->lodgement = 7742.34;
    $request->note = 'cum';
    $request->plaidTransactionId = 'esse';
    $request->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-07T12:31:06.574Z');
    $request->supplierId = 135218;
    $request->timestamp = 'perferendis';
    $request->total = 3241.41;

    $response = $sdk->cashPayments->cashPaymentsPost($request);

    if ($response->cashPaymentsPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cashPaymentsProcessBatch

Processes a batch of Cash Payments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemCashPaymentDto;
use \OpenAPI\OpenAPI\Models\Shared\CashPaymentDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemCashPaymentDtoOpCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new BatchItemCashPaymentDto(),
        new BatchItemCashPaymentDto(),
        new BatchItemCashPaymentDto(),
    ]

    $response = $sdk->cashPayments->cashPaymentsProcessBatch($request);

    if ($response->cashPaymentsProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cashPaymentsPut

Updates an existing Cash Payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CashPaymentsPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\CashPaymentDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CashPaymentsPutRequest();
    $request->cashPaymentDto = new CashPaymentDto();
    $request->cashPaymentDto->acCode = 'sed';
    $request->cashPaymentDto->acEntries = [
        new AcEntryDto(),
        new AcEntryDto(),
        new AcEntryDto(),
    ];
    $request->cashPaymentDto->bankAccountCode = 'dolor';
    $request->cashPaymentDto->bankAccountId = 616934;
    $request->cashPaymentDto->bookTranTypeId = 386489;
    $request->cashPaymentDto->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->cashPaymentDto->detailCollection = [
        'fuga',
        'in',
        'corporis',
        'iste',
    ];
    $request->cashPaymentDto->discount = 4370.32;
    $request->cashPaymentDto->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-28T02:15:07.561Z');
    $request->cashPaymentDto->id = 99280;
    $request->cashPaymentDto->ledger = 602.25;
    $request->cashPaymentDto->lodgement = 9698.1;
    $request->cashPaymentDto->note = 'est';
    $request->cashPaymentDto->plaidTransactionId = 'mollitia';
    $request->cashPaymentDto->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-29T05:39:49.755Z');
    $request->cashPaymentDto->supplierId = 210382;
    $request->cashPaymentDto->timestamp = 'corporis';
    $request->cashPaymentDto->total = 1289.26;
    $request->id = 750686;

    $response = $sdk->cashPayments->cashPaymentsPut($request);

    if ($response->cashPaymentsPut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1CashPaymentsId

Returns information about a single Cash Payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1CashPaymentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1CashPaymentsIdRequest();
    $request->id = 315428;

    $response = $sdk->cashPayments->getV1CashPaymentsId($request);

    if ($response->cashPaymentDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
