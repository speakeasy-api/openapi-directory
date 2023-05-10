# document

## Overview

Document object represents your invoice.

### Available Operations

* [cancelDocument](#canceldocument) - Cancel a document
* [createDocument](#createdocument) - Create a document
* [createDocumentFromProforma](#createdocumentfromproforma) - Create a document from proforma.
* [deletePayment](#deletepayment) - Delete all payment history on document
* [downloadDocument](#downloaddocument) - Download a document in PDF format.
* [getDocument](#getdocument) - Retrieve a document
* [getOnlineSzamlaStatus](#getonlineszamlastatus) - Retrieve a document Online Számla status
* [getPayment](#getpayment) - Retrieve a payment histroy
* [getPublicUrl](#getpublicurl) - Retrieve a document download public url.
* [listDocument](#listdocument) - List all documents
* [sendDocument](#senddocument) - Send invoice to given email adresses.
* [updatePayment](#updatepayment) - Update payment history

## cancelDocument

Cancel a document. Returns a cancellation document object if the cancellation is succeded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelDocumentRequest();
    $request->id = 778157;

    $response = $sdk->document->cancelDocument($request);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDocument

Create a new document. Returns a document object if the create is succeded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DocumentInsert;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentLanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentSettings;
use \OpenAPI\OpenAPI\Models\Shared\OnlinePaymentEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoundEnum;
use \OpenAPI\OpenAPI\Models\Shared\DocumentInsertTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DocumentInsert();
    $request->bankAccountId = 140350;
    $request->blockId = 870013;
    $request->comment = 'at';
    $request->conversionRate = 9786.19;
    $request->currency = CurrencyEnum::JPY;
    $request->dueDate = DateTime::createFromFormat('Y-m-d', '2020-08-07');
    $request->electronic = false;
    $request->fulfillmentDate = DateTime::createFromFormat('Y-m-d', '2022-06-25');
    $request->items = [
        new DocumentProductData(),
        new DocumentItemData(),
        new DocumentProductData(),
        new DocumentProductData(),
    ];
    $request->language = DocumentLanguageEnum::HU;
    $request->paid = false;
    $request->partnerId = 143353;
    $request->paymentMethod = PaymentMethodEnum::PAYPAL;
    $request->settings = new DocumentSettings();
    $request->settings->mediatedService = false;
    $request->settings->onlinePayment = OnlinePaymentEnum::NO;
    $request->settings->placeId = 758616;
    $request->settings->round = RoundEnum::ONE;
    $request->settings->withoutFinancialFulfillment = false;
    $request->type = DocumentInsertTypeEnum::ADVANCE;
    $request->vendorId = 'commodi';

    $response = $sdk->document->createDocument($request);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDocumentFromProforma

Create a new document from proforma. Returns a document object if the create is succeded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDocumentFromProformaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDocumentFromProformaRequest();
    $request->id = 473600;

    $response = $sdk->document->createDocumentFromProforma($request);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePayment

Delete all exist payment history on document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePaymentRequest();
    $request->id = 264555;

    $response = $sdk->document->deletePayment($request);

    if ($response->paymentHistories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadDocument

Download a document. Returns a document in PDF format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadDocumentRequest();
    $request->id = 186332;

    $response = $sdk->document->downloadDocument($request);

    if ($response->downloadDocument200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDocument

Retrieves the details of an existing document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDocumentRequest();
    $request->id = 774234;

    $response = $sdk->document->getDocument($request);

    if ($response->document !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOnlineSzamlaStatus

Retrieves the details of an existing document status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOnlineSzamlaStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOnlineSzamlaStatusRequest();
    $request->id = 736918;

    $response = $sdk->document->getOnlineSzamlaStatus($request);

    if ($response->onlineSzamlaStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayment

Retrieves the details of payment history an existing document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPaymentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPaymentRequest();
    $request->id = 456150;

    $response = $sdk->document->getPayment($request);

    if ($response->paymentHistories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicUrl

Retrieves public url to download an existing document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicUrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicUrlRequest();
    $request->id = 216550;

    $response = $sdk->document->getPublicUrl($request);

    if ($response->documentPublicUrl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDocument

Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDocumentRequest();
    $request->blockId = 568434;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-25');
    $request->endNumber = 324141;
    $request->endYear = 617636;
    $request->page = 149675;
    $request->partnerId = 612096;
    $request->paymentMethod = PaymentMethodEnum::CASH_ON_DELIVERY;
    $request->paymentStatus = PaymentStatusEnum::PAID;
    $request->perPage = 386489;
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2020-04-17');
    $request->startNumber = 681820;
    $request->startYear = 449950;

    $response = $sdk->document->listDocument($request);

    if ($response->documentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendDocument

Returns a list of emails, where the invoice is sent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendDocument;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendDocumentRequest();
    $request->sendDocument = new SendDocument();
    $request->sendDocument->emails = [
        'iste',
        'iure',
    ];
    $request->id = 902349;

    $response = $sdk->document->sendDocument($request);

    if ($response->sendDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePayment

Update payment history an existing document. Returns a payment history object if the update is succeded.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentHistory;
use \OpenAPI\OpenAPI\Models\Shared\PaymentMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePaymentRequest();
    $request->requestBody = [
        new PaymentHistory(),
        new PaymentHistory(),
        new PaymentHistory(),
    ];
    $request->id = 99280;

    $response = $sdk->document->updatePayment($request);

    if ($response->paymentHistories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
