# paymentBatches

## Overview

The fire.com API allows businesses to automate payments between their accounts or to third parties across the UK and Europe.

For added security, the API can only set up the payments in batches. These batches must be approved by an authorised user via the firework mobile app.


The process is as follows:

**1.**Create a new batch

**2.**Add payments to the batch

**3.**Submit the batch for approval

Once the batch is submitted, the authorised users will receive notifications to their firework mobile apps. They can review the contents of the batch and then approve or reject it. If approved, the batch is then processed. You can avail of enhanced security by using Dual Authorisation to verify payments if you wish. Dual Authorisation can be enabled by you when setting up your API application in firework online.

**Batch Life Cycle Events**

A batch webhook can be specified to receive details of all the payments as they are processed. This webhook receives notifications for every event in the batch lifecycle.

The following events are triggered during a batch:

**batch.opened:** Contains the details of the batch opened. Checks that the callback URL exists - unless a HTTP 200 response is returned, the callback URL will not be configured.

**batch.item-added:** Details of the item added to the batch

**batch.item-removed:** Details of the item removed from the batch

**batch.cancelled:** Notifies that the batch was cancelled.

**batch.submitted:** Notifes that the batch was submitted

**batch.approved:** Notifies that the batch was approved.

**batch.rejected:** Notifies that the batch was rejected.

**batch.failed:** Notifies that the batch failed - includes the details of the failure (insufficient funds etc)

**batch.completed:** Notifies that the batch completed successfully. Includes a summary.

Push notifications are sent to the firework mobile app for many of these events too - these can be configured from within the app.


### Available Operations

* [addBankTransferBatchPayment](#addbanktransferbatchpayment) - Add a bank transfer payment to the batch.
* [addInternalTransferBatchPayment](#addinternaltransferbatchpayment) - Add an internal transfer payment to the batch
* [addInternationalTransferBatchPayment](#addinternationaltransferbatchpayment) - Add an international transfer payment to the batch.
* [cancelBatchPayment](#cancelbatchpayment) - Cancel a batch
* [createBatchPayment](#createbatchpayment) - Create a new batch of payments
* [deleteBankTransferBatchPayment](#deletebanktransferbatchpayment) - Remove a Payment from the Batch (Bank Transfers)
* [deleteInternalTransferBatchPayment](#deleteinternaltransferbatchpayment) - Remove a Payment from the Batch (Internal Transfer)
* [deleteInternationalTransferBatchPayment](#deleteinternationaltransferbatchpayment) - Remove a Payment from the Batch (International Transfers)
* [getBatches](#getbatches) - List batches
* [getDetailsSingleBatch](#getdetailssinglebatch) - Get details of a single Batch
* [getItemsBatchBankTransfer](#getitemsbatchbanktransfer) - List items in a Batch (Bank Transfers)
* [getItemsBatchInternalTrasnfer](#getitemsbatchinternaltrasnfer) - List items in a Batch (Internal Transfers)
* [getItemsBatchInternationalTransfer](#getitemsbatchinternationaltransfer) - List items in a Batch (International Transfers)
* [getListofApproversForBatch](#getlistofapproversforbatch) - List Approvers for a Batch
* [submitBatch](#submitbatch) - Submit a batch for approval

## addBankTransferBatchPayment

There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).

**Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.

**Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddBankTransferBatchPaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddBankTransferBatchPaymentRequest();
    $request->requestBody = new AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1();
    $request->requestBody->amount = 500;
    $request->requestBody->icanFrom = 2001;
    $request->requestBody->myRef = 'Payment to John Smith for Consultancy in device.';
    $request->requestBody->payeeId = 15002;
    $request->requestBody->payeeType = AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum::PAYEE_ID;
    $request->requestBody->yourRef = 'ACME LTD - INV 23434';
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->paymentBatches->addBankTransferBatchPayment($request);

    if ($response->newBatchItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addInternalTransferBatchPayment

Simply specify the source account, destination account, amount and a reference.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddInternalTransferBatchPaymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddInternalTransferBatchPaymentBatchItemInternalTransfer;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddInternalTransferBatchPaymentRequest();
    $request->requestBody = new AddInternalTransferBatchPaymentBatchItemInternalTransfer();
    $request->requestBody->amount = 10000;
    $request->requestBody->icanFrom = 2001;
    $request->requestBody->icanTo = 3221;
    $request->requestBody->ref = 'Moving funds to Operating Account';
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->paymentBatches->addInternalTransferBatchPayment($request);

    if ($response->newBatchItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addInternationalTransferBatchPayment

International transfers must be added to a batch using the Payee ID (**Mode 1**). Payees must be set up using the web application.

**Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddInternationalTransferBatchPaymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddInternationalTransferBatchPaymentBatchItemInternationalTransferMode1;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddInternationalTransferBatchPaymentRequest();
    $request->requestBody = new AddInternationalTransferBatchPaymentBatchItemInternationalTransferMode1();
    $request->requestBody->amount = 500;
    $request->requestBody->icanFrom = 2001;
    $request->requestBody->myRef = 'Payment to John Smith for Consultancy in device.';
    $request->requestBody->payeeId = 15002;
    $request->requestBody->paymentReason = 'Invoice Payment, Salary/Dividend Payment';
    $request->requestBody->yourRef = 'ACME LTD - INV 23434';
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->paymentBatches->addInternationalTransferBatchPayment($request);

    if ($response->newBatchItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelBatchPayment

Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelBatchPaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelBatchPaymentRequest();
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->paymentBatches->cancelBatchPayment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBatchPayment

The fire.com API allows businesses to automate payments between their accounts or to third parties across the UK and Europe.

For added security, the API can only set up the payments in batches. These batches must be approved by an authorised user via the firework mobile app.


The process is as follows:

**1.**Create a new batch

**2.**Add payments to the batch

**3.**Submit the batch for approval

Once the batch is submitted, the authorised users will receive notifications to their firework mobile apps. They can review the contents of the batch and then approve or reject it. If approved, the batch is then processed. You can avail of enhanced security by using Dual Authorisation to verify payments if you wish. Dual Authorisation can be enabled by you when setting up your API application in firework online.

**Batch Life Cycle Events**

A batch webhook can be specified to receive details of all the payments as they are processed. This webhook receives notifications for every event in the batch lifecycle.

The following events are triggered during a batch:

**batch.opened:** Contains the details of the batch opened. Checks that the callback URL exists - unless a HTTP 200 response is returned, the callback URL will not be configured.

**batch.item-added:** Details of the item added to the batch

**batch.item-removed:** Details of the item removed from the batch

**batch.cancelled:** Notifies that the batch was cancelled.

**batch.submitted:** Notifes that the batch was submitted

**batch.approved:** Notifies that the batch was approved.

**batch.rejected:** Notifies that the batch was rejected.

**batch.failed:** Notifies that the batch failed - includes the details of the failure (insufficient funds etc)

**batch.completed:** Notifies that the batch completed successfully. Includes a summary.

Push notifications are sent to the firework mobile app for many of these events too - these can be configured from within the app.

This is the first step in creating a batch payment.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchPaymentNewBatch;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchPaymentNewBatchTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBatchPaymentNewBatch();
    $request->batchName = 'January 2018 Payroll';
    $request->callbackUrl = 'https://my.webserver.com/cb/payroll';
    $request->currency = 'EUR';
    $request->jobNumber = '2022-01-PR';
    $request->type = CreateBatchPaymentNewBatchTypeEnum::INTERNATIONAL_TRANSFER;

    $response = $sdk->paymentBatches->createBatchPayment($request);

    if ($response->newBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBankTransferBatchPayment

Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBankTransferBatchPaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBankTransferBatchPaymentRequest();
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';
    $request->itemUuid = 'voluptatum';

    $response = $sdk->paymentBatches->deleteBankTransferBatchPayment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInternalTransferBatchPayment

Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInternalTransferBatchPaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInternalTransferBatchPaymentRequest();
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';
    $request->itemUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->paymentBatches->deleteInternalTransferBatchPayment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInternationalTransferBatchPayment

Removes a Payment from the Batch (International Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInternationalTransferBatchPaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInternationalTransferBatchPaymentRequest();
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';
    $request->itemUuid = 'iusto';

    $response = $sdk->paymentBatches->deleteInternationalTransferBatchPayment($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatches

Returns the list of batch with the specified types and statuses.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchesBatchStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchesBatchTypesEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchesOrderByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBatchesRequest();
    $request->batchStatus = GetBatchesBatchStatusEnum::SUBMITTED;
    $request->batchTypes = GetBatchesBatchTypesEnum::INTERNAL_TRANSFER;
    $request->order = GetBatchesOrderEnum::DESC;
    $request->orderBy = GetBatchesOrderByEnum::DATE;

    $response = $sdk->paymentBatches->getBatches($request);

    if ($response->batchItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetailsSingleBatch

Returns the details of the batch specified in the API endpoint - {batchUuid}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDetailsSingleBatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDetailsSingleBatchRequest();
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->paymentBatches->getDetailsSingleBatch($request);

    if ($response->batch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemsBatchBankTransfer

Returns a paginated list of items in the specified batch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetItemsBatchBankTransferRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemsBatchBankTransferRequest();
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';
    $request->limit = 10;
    $request->offset = 0;

    $response = $sdk->paymentBatches->getItemsBatchBankTransfer($request);

    if ($response->batchItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemsBatchInternalTrasnfer

Returns a paginated list of items in the specified batch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetItemsBatchInternalTrasnferRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemsBatchInternalTrasnferRequest();
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';
    $request->limit = 10;
    $request->offset = 0;

    $response = $sdk->paymentBatches->getItemsBatchInternalTrasnfer($request);

    if ($response->batchItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemsBatchInternationalTransfer

Returns a paginated list of items in the specified batch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetItemsBatchInternationalTransferRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemsBatchInternationalTransferRequest();
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';
    $request->limit = 10;
    $request->offset = 0;

    $response = $sdk->paymentBatches->getItemsBatchInternationalTransfer($request);

    if ($response->batchItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListofApproversForBatch

Returns a list of approvers for this batch.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetListofApproversForBatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListofApproversForBatchRequest();
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->paymentBatches->getListofApproversForBatch($request);

    if ($response->batchApprovers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitBatch

Submits the Batch (for approval in the case of a **BANK_TRANSFER** or **INTERNATIONAL_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** or **INTERNATIONAL_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.

You can only submit a batch while it is in the OPEN state.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitBatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitBatchRequest();
    $request->batchUuid = '4ADFB67A-0F5B-4A9A-9D74-34437250045C';

    $response = $sdk->paymentBatches->submitBatch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
