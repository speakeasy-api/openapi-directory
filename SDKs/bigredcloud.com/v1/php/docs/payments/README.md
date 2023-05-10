# payments

### Available Operations

* [paymentsDelete](#paymentsdelete) - Removes an existing Payment.
* [paymentsGet](#paymentsget) - Returns a list of company's Payments. Supports OData querying protocol.
Filtering is allowed by "entryDate" field.
Ordering is allowed by "id" field.
* [paymentsPost](#paymentspost) - Creates a new Payment.
* [paymentsProcessBatch](#paymentsprocessbatch) - Processes a batch of Payments.
* [paymentsPut](#paymentsput) - Updates an existing Payment.
* [getV1PaymentsId](#getv1paymentsid) - Returns information about a single Payments.

## paymentsDelete

Removes an existing Payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsDeleteRequest();
    $request->id = 199996;
    $request->timestamp = 'eos';

    $response = $sdk->payments->paymentsDelete($request);

    if ($response->paymentsDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsGet

Returns a list of company's Payments. Supports OData querying protocol.
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
    $response = $sdk->payments->paymentsGet();

    if ($response->pageResultPaymentQueryDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsPost

Creates a new Payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PaymentDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentDto();
    $request->acCode = 'perferendis';
    $request->acEntries = [
        new AcEntryDto(),
    ];
    $request->bankAccountCode = 'minus';
    $request->bankAccountId = 463451;
    $request->bookTranTypeId = 223924;
    $request->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->detailCollection = [
        'hic',
        'recusandae',
    ];
    $request->discount = 6082.53;
    $request->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-22T10:35:49.400Z');
    $request->id = 31838;
    $request->note = 'porro';
    $request->plaidTransactionId = 'consequuntur';
    $request->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-04T07:41:53.553Z');
    $request->reference = 'eaque';
    $request->supplierId = 577229;
    $request->timestamp = 'rerum';
    $request->total = 2378.93;
    $request->transferBankCode = 'asperiores';
    $request->transferBankId = 934214;
    $request->unallocated = 2672.62;

    $response = $sdk->payments->paymentsPost($request);

    if ($response->paymentsPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsProcessBatch

Processes a batch of Payments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemPaymentDto;
use \OpenAPI\OpenAPI\Models\Shared\PaymentDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemPaymentDtoOpCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new BatchItemPaymentDto(),
        new BatchItemPaymentDto(),
        new BatchItemPaymentDto(),
    ]

    $response = $sdk->payments->paymentsProcessBatch($request);

    if ($response->paymentsProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentsPut

Updates an existing Payment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentsPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentDto;
use \OpenAPI\OpenAPI\Models\Shared\AcEntryDto;
use \OpenAPI\OpenAPI\Models\Shared\AcudfValueDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentsPutRequest();
    $request->paymentDto = new PaymentDto();
    $request->paymentDto->acCode = 'dolorum';
    $request->paymentDto->acEntries = [
        new AcEntryDto(),
        new AcEntryDto(),
        new AcEntryDto(),
    ];
    $request->paymentDto->bankAccountCode = 'pariatur';
    $request->paymentDto->bankAccountId = 589910;
    $request->paymentDto->bookTranTypeId = 750844;
    $request->paymentDto->customFields = [
        new AcudfValueDto(),
        new AcudfValueDto(),
        new AcudfValueDto(),
    ];
    $request->paymentDto->detailCollection = [
        'quaerat',
        'quos',
        'aliquid',
        'dolorem',
    ];
    $request->paymentDto->discount = 2098.43;
    $request->paymentDto->entryDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-25T00:56:56.568Z');
    $request->paymentDto->id = 218749;
    $request->paymentDto->note = 'hic';
    $request->paymentDto->plaidTransactionId = 'excepturi';
    $request->paymentDto->procDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-04T23:02:58.199Z');
    $request->paymentDto->reference = 'dignissimos';
    $request->paymentDto->supplierId = 970237;
    $request->paymentDto->timestamp = 'amet';
    $request->paymentDto->total = 6805.45;
    $request->paymentDto->transferBankCode = 'numquam';
    $request->paymentDto->transferBankId = 85295;
    $request->paymentDto->unallocated = 580.29;
    $request->id = 56418;

    $response = $sdk->payments->paymentsPut($request);

    if ($response->paymentsPut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1PaymentsId

Returns information about a single Payments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1PaymentsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1PaymentsIdRequest();
    $request->id = 434417;

    $response = $sdk->payments->getV1PaymentsId($request);

    if ($response->paymentDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
