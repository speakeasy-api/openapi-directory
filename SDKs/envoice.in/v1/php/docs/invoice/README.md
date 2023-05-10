# invoice

### Available Operations

* [invoiceApiAll](#invoiceapiall) - Return all invoices for the account
* [invoiceApiChangeStatusForm](#invoiceapichangestatusform) - Change invoice status
* [invoiceApiChangeStatusJson](#invoiceapichangestatusjson) - Change invoice status
* [invoiceApiChangeStatusRaw](#invoiceapichangestatusraw) - Change invoice status
* [invoiceApiDeleteForm](#invoiceapideleteform) - Delete an existing invoice
* [invoiceApiDeleteJson](#invoiceapideletejson) - Delete an existing invoice
* [invoiceApiDeleteRaw](#invoiceapideleteraw) - Delete an existing invoice
* [invoiceApiDetails](#invoiceapidetails) - Return invoice data
* [invoiceApiNewForm](#invoiceapinewform) - Create an invoice
* [invoiceApiNewJson](#invoiceapinewjson) - Create an invoice
* [invoiceApiNewRaw](#invoiceapinewraw) - Create an invoice
* [invoiceApiPdf](#invoiceapipdf) - Return the PDF for the invoice
* [invoiceApiSendToAccountantForm](#invoiceapisendtoaccountantform) - Send the provided invoice to the accountant
* [invoiceApiSendToAccountantJson](#invoiceapisendtoaccountantjson) - Send the provided invoice to the accountant
* [invoiceApiSendToAccountantRaw](#invoiceapisendtoaccountantraw) - Send the provided invoice to the accountant
* [invoiceApiSendToClientForm](#invoiceapisendtoclientform) - Send the provided invoice to the client
* [invoiceApiSendToClientJson](#invoiceapisendtoclientjson) - Send the provided invoice to the client
* [invoiceApiSendToClientRaw](#invoiceapisendtoclientraw) - Send the provided invoice to the client
* [invoiceApiStatus](#invoiceapistatus) - Retrieve the status of the invoice
* [invoiceApiUpdateForm](#invoiceapiupdateform) - Update an existing invoice
* [invoiceApiUpdateJson](#invoiceapiupdatejson) - Update an existing invoice
* [invoiceApiUpdateRaw](#invoiceapiupdateraw) - Update an existing invoice
* [invoiceApiUri](#invoiceapiuri) - Return the unique url to the client's invoice
* [getApiInvoiceAllcategories](#getapiinvoiceallcategories) - Return all invoice categories for the account
* [postApiInvoiceDeletecategoryForm](#postapiinvoicedeletecategoryform) - Delete an existing invoice category
* [postApiInvoiceDeletecategoryJson](#postapiinvoicedeletecategoryjson) - Delete an existing invoice category
* [postApiInvoiceDeletecategoryRaw](#postapiinvoicedeletecategoryraw) - Delete an existing invoice category
* [postApiInvoiceNewcategoryForm](#postapiinvoicenewcategoryform) - Create an invoice category
* [postApiInvoiceNewcategoryJson](#postapiinvoicenewcategoryjson) - Create an invoice category
* [postApiInvoiceNewcategoryRaw](#postapiinvoicenewcategoryraw) - Create an invoice category
* [postApiInvoiceUpdatecategoryForm](#postapiinvoiceupdatecategoryform) - Update an existing invoice category
* [postApiInvoiceUpdatecategoryJson](#postapiinvoiceupdatecategoryjson) - Update an existing invoice category
* [postApiInvoiceUpdatecategoryRaw](#postapiinvoiceupdatecategoryraw) - Update an existing invoice category

## invoiceApiAll

Return all invoices for the account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiAllRequest();
    $request->queryOptionsPage = 968962;
    $request->queryOptionsPageSize = 652103;
    $request->xAuthKey = 'ad';
    $request->xAuthSecret = 'eum';

    $response = $sdk->invoice->invoiceApiAll($request);

    if ($response->listResultInvoiceDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiChangeStatusForm

Change invoice status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiChangeStatusFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangeStatusApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ChangeStatusApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiChangeStatusFormRequest();
    $request->changeStatusApiModel = new ChangeStatusApiModel();
    $request->changeStatusApiModel->id = 221262;
    $request->changeStatusApiModel->status = ChangeStatusApiModelStatusEnum::VOID;
    $request->xAuthKey = 'odit';
    $request->xAuthSecret = 'nemo';

    $response = $sdk->invoice->invoiceApiChangeStatusForm($request);

    if ($response->invoiceApiChangeStatusForm200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiChangeStatusJson

Change invoice status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiChangeStatusJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangeStatusApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ChangeStatusApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiChangeStatusJsonRequest();
    $request->changeStatusApiModel = new ChangeStatusApiModel();
    $request->changeStatusApiModel->id = 97260;
    $request->changeStatusApiModel->status = ChangeStatusApiModelStatusEnum::UNPAID;
    $request->xAuthKey = 'doloribus';
    $request->xAuthSecret = 'debitis';

    $response = $sdk->invoice->invoiceApiChangeStatusJson($request);

    if ($response->invoiceApiChangeStatusJSON200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiChangeStatusRaw

Change invoice status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiChangeStatusRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiChangeStatusRawRequest();
    $request->requestBody = 'eius';
    $request->xAuthKey = 'maxime';
    $request->xAuthSecret = 'deleniti';

    $response = $sdk->invoice->invoiceApiChangeStatusRaw($request);

    if ($response->invoiceApiChangeStatusRaw200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiDeleteForm

Delete an existing invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiDeleteFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiDeleteFormRequest();
    $request->invoiceDeleteApiModel = new InvoiceDeleteApiModel();
    $request->invoiceDeleteApiModel->id = 703889;
    $request->xAuthKey = 'in';
    $request->xAuthSecret = 'architecto';

    $response = $sdk->invoice->invoiceApiDeleteForm($request);

    if ($response->invoiceApiDeleteForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiDeleteJson

Delete an existing invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiDeleteJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiDeleteJsonRequest();
    $request->invoiceDeleteApiModel = new InvoiceDeleteApiModel();
    $request->invoiceDeleteApiModel->id = 99569;
    $request->xAuthKey = 'repudiandae';
    $request->xAuthSecret = 'ullam';

    $response = $sdk->invoice->invoiceApiDeleteJson($request);

    if ($response->invoiceApiDeleteJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiDeleteRaw

Delete an existing invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiDeleteRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiDeleteRawRequest();
    $request->requestBody = 'expedita';
    $request->xAuthKey = 'nihil';
    $request->xAuthSecret = 'repellat';

    $response = $sdk->invoice->invoiceApiDeleteRaw($request);

    if ($response->invoiceApiDeleteRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiDetails

Return invoice data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiDetailsRequest();
    $request->id = 841140;
    $request->xAuthKey = 'sed';
    $request->xAuthSecret = 'saepe';

    $response = $sdk->invoice->invoiceApiDetails($request);

    if ($response->invoiceFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiNewForm

Create an invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiNewFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCreateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCreateAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCreateAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCreateItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceGatewayApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModelDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModelRecurrancePatternEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModelStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCreateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiNewFormRequest();
    $request->invoiceCreateApiModel = new InvoiceCreateApiModel();
    $request->invoiceCreateApiModel->attachments = [
        new InvoiceCreateAttachmentApiModel(),
        new InvoiceCreateAttachmentApiModel(),
        new InvoiceCreateAttachmentApiModel(),
        new InvoiceCreateAttachmentApiModel(),
    ];
    $request->invoiceCreateApiModel->clientId = 37559;
    $request->invoiceCreateApiModel->clonedFromId = 162493;
    $request->invoiceCreateApiModel->currencyId = 508315;
    $request->invoiceCreateApiModel->duedate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-01T04:49:52.515Z');
    $request->invoiceCreateApiModel->invoiceCategoryId = 123820;
    $request->invoiceCreateApiModel->issuedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-16T10:20:37.479Z');
    $request->invoiceCreateApiModel->items = [
        new InvoiceCreateItemApiModel(),
        new InvoiceCreateItemApiModel(),
        new InvoiceCreateItemApiModel(),
        new InvoiceCreateItemApiModel(),
    ];
    $request->invoiceCreateApiModel->notes = 'maxime';
    $request->invoiceCreateApiModel->number = 'ea';
    $request->invoiceCreateApiModel->paymentGateways = [
        new InvoiceGatewayApiModel(),
        new InvoiceGatewayApiModel(),
        new InvoiceGatewayApiModel(),
    ];
    $request->invoiceCreateApiModel->poNumber = 'odit';
    $request->invoiceCreateApiModel->recurringProfile = new InvoiceRecurringApiModel();
    $request->invoiceCreateApiModel->recurringProfile->dayOfMonth = 407183;
    $request->invoiceCreateApiModel->recurringProfile->dayOfWeek = InvoiceRecurringApiModelDayOfWeekEnum::SUNDAY;
    $request->invoiceCreateApiModel->recurringProfile->dueDateInDays = 69167;
    $request->invoiceCreateApiModel->recurringProfile->endOfRecurrance = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-28T07:34:18.392Z');
    $request->invoiceCreateApiModel->recurringProfile->month = 373291;
    $request->invoiceCreateApiModel->recurringProfile->recurrancePattern = InvoiceRecurringApiModelRecurrancePatternEnum::WEEKLY;
    $request->invoiceCreateApiModel->recurringProfile->recurranceValue = 420075;
    $request->invoiceCreateApiModel->recurringProfile->startOfRecurrance = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T01:41:45.601Z');
    $request->invoiceCreateApiModel->recurringProfile->status = InvoiceRecurringApiModelStatusEnum::FINISHED;
    $request->invoiceCreateApiModel->recurringProfile->title = 'Mrs.';
    $request->invoiceCreateApiModel->recurringProfileId = 975522;
    $request->invoiceCreateApiModel->shouldSendReminders = false;
    $request->invoiceCreateApiModel->status = InvoiceCreateApiModelStatusEnum::DRAFT;
    $request->invoiceCreateApiModel->terms = 'fugiat';
    $request->xAuthKey = 'amet';
    $request->xAuthSecret = 'aut';

    $response = $sdk->invoice->invoiceApiNewForm($request);

    if ($response->invoiceFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiNewJson

Create an invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiNewJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCreateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCreateAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCreateAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCreateItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceGatewayApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModelDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModelRecurrancePatternEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModelStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCreateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiNewJsonRequest();
    $request->invoiceCreateApiModel = new InvoiceCreateApiModel();
    $request->invoiceCreateApiModel->attachments = [
        new InvoiceCreateAttachmentApiModel(),
        new InvoiceCreateAttachmentApiModel(),
        new InvoiceCreateAttachmentApiModel(),
        new InvoiceCreateAttachmentApiModel(),
    ];
    $request->invoiceCreateApiModel->clientId = 359978;
    $request->invoiceCreateApiModel->clonedFromId = 944124;
    $request->invoiceCreateApiModel->currencyId = 729991;
    $request->invoiceCreateApiModel->duedate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-28T17:02:52.151Z');
    $request->invoiceCreateApiModel->invoiceCategoryId = 339404;
    $request->invoiceCreateApiModel->issuedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-08T15:06:08.615Z');
    $request->invoiceCreateApiModel->items = [
        new InvoiceCreateItemApiModel(),
    ];
    $request->invoiceCreateApiModel->notes = 'quis';
    $request->invoiceCreateApiModel->number = 'nesciunt';
    $request->invoiceCreateApiModel->paymentGateways = [
        new InvoiceGatewayApiModel(),
    ];
    $request->invoiceCreateApiModel->poNumber = 'perferendis';
    $request->invoiceCreateApiModel->recurringProfile = new InvoiceRecurringApiModel();
    $request->invoiceCreateApiModel->recurringProfile->dayOfMonth = 170986;
    $request->invoiceCreateApiModel->recurringProfile->dayOfWeek = InvoiceRecurringApiModelDayOfWeekEnum::FRIDAY;
    $request->invoiceCreateApiModel->recurringProfile->dueDateInDays = 463451;
    $request->invoiceCreateApiModel->recurringProfile->endOfRecurrance = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-15T18:44:26.943Z');
    $request->invoiceCreateApiModel->recurringProfile->month = 345352;
    $request->invoiceCreateApiModel->recurringProfile->recurrancePattern = InvoiceRecurringApiModelRecurrancePatternEnum::YEARLY;
    $request->invoiceCreateApiModel->recurringProfile->recurranceValue = 928082;
    $request->invoiceCreateApiModel->recurringProfile->startOfRecurrance = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-04T18:39:34.709Z');
    $request->invoiceCreateApiModel->recurringProfile->status = InvoiceRecurringApiModelStatusEnum::CANCELLED;
    $request->invoiceCreateApiModel->recurringProfile->title = 'Mr.';
    $request->invoiceCreateApiModel->recurringProfileId = 783645;
    $request->invoiceCreateApiModel->shouldSendReminders = false;
    $request->invoiceCreateApiModel->status = InvoiceCreateApiModelStatusEnum::DRAFT;
    $request->invoiceCreateApiModel->terms = 'blanditiis';
    $request->xAuthKey = 'error';
    $request->xAuthSecret = 'eaque';

    $response = $sdk->invoice->invoiceApiNewJson($request);

    if ($response->invoiceFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiNewRaw

Create an invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiNewRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiNewRawRequest();
    $request->requestBody = 'occaecati';
    $request->xAuthKey = 'rerum';
    $request->xAuthSecret = 'adipisci';

    $response = $sdk->invoice->invoiceApiNewRaw($request);

    if ($response->invoiceFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiPdf

Return the PDF for the invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiPdfRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiPdfRequest();
    $request->id = 992397;
    $request->signedVersion = false;
    $request->xAuthKey = 'earum';
    $request->xAuthSecret = 'modi';

    $response = $sdk->invoice->invoiceApiPdf($request);

    if ($response->invoiceUriApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiSendToAccountantForm

Send the provided invoice to the accountant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiSendToAccountantFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendInvoiceToAccountantApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiSendToAccountantFormRequest();
    $request->sendInvoiceToAccountantApiModel = new SendInvoiceToAccountantApiModel();
    $request->sendInvoiceToAccountantApiModel->id = 613966;
    $request->xAuthKey = 'dolorum';
    $request->xAuthSecret = 'deleniti';

    $response = $sdk->invoice->invoiceApiSendToAccountantForm($request);

    if ($response->invoiceApiSendToAccountantForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiSendToAccountantJson

Send the provided invoice to the accountant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiSendToAccountantJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendInvoiceToAccountantApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiSendToAccountantJsonRequest();
    $request->sendInvoiceToAccountantApiModel = new SendInvoiceToAccountantApiModel();
    $request->sendInvoiceToAccountantApiModel->id = 864282;
    $request->xAuthKey = 'provident';
    $request->xAuthSecret = 'nobis';

    $response = $sdk->invoice->invoiceApiSendToAccountantJson($request);

    if ($response->invoiceApiSendToAccountantJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiSendToAccountantRaw

Send the provided invoice to the accountant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiSendToAccountantRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiSendToAccountantRawRequest();
    $request->requestBody = 'libero';
    $request->xAuthKey = 'delectus';
    $request->xAuthSecret = 'quaerat';

    $response = $sdk->invoice->invoiceApiSendToAccountantRaw($request);

    if ($response->invoiceApiSendToAccountantRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiSendToClientForm

Send the provided invoice to the client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiSendToClientFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendInvoiceToClientApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiSendToClientFormRequest();
    $request->sendInvoiceToClientApiModel = new SendInvoiceToClientApiModel();
    $request->sendInvoiceToClientApiModel->attachPdf = false;
    $request->sendInvoiceToClientApiModel->id = 554242;
    $request->sendInvoiceToClientApiModel->invoiceId = 398221;
    $request->sendInvoiceToClientApiModel->message = 'dolorem';
    $request->sendInvoiceToClientApiModel->sendToSelf = false;
    $request->sendInvoiceToClientApiModel->subject = 'dolorem';
    $request->xAuthKey = 'dolor';
    $request->xAuthSecret = 'qui';

    $response = $sdk->invoice->invoiceApiSendToClientForm($request);

    if ($response->invoiceApiSendToClientForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiSendToClientJson

Send the provided invoice to the client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiSendToClientJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendInvoiceToClientApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiSendToClientJsonRequest();
    $request->sendInvoiceToClientApiModel = new SendInvoiceToClientApiModel();
    $request->sendInvoiceToClientApiModel->attachPdf = false;
    $request->sendInvoiceToClientApiModel->id = 218749;
    $request->sendInvoiceToClientApiModel->invoiceId = 944373;
    $request->sendInvoiceToClientApiModel->message = 'excepturi';
    $request->sendInvoiceToClientApiModel->sendToSelf = false;
    $request->sendInvoiceToClientApiModel->subject = 'cum';
    $request->xAuthKey = 'voluptate';
    $request->xAuthSecret = 'dignissimos';

    $response = $sdk->invoice->invoiceApiSendToClientJson($request);

    if ($response->invoiceApiSendToClientJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiSendToClientRaw

Send the provided invoice to the client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiSendToClientRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiSendToClientRawRequest();
    $request->requestBody = 'reiciendis';
    $request->xAuthKey = 'amet';
    $request->xAuthSecret = 'dolorum';

    $response = $sdk->invoice->invoiceApiSendToClientRaw($request);

    if ($response->invoiceApiSendToClientRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiStatus

Retrieve the status of the invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiStatusRequest();
    $request->id = 254356;
    $request->xAuthKey = 'veritatis';
    $request->xAuthSecret = 'ipsa';

    $response = $sdk->invoice->invoiceApiStatus($request);

    if ($response->invoiceApiStatus200ApplicationJSONStringEnum !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiUpdateForm

Update an existing invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiUpdateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceUpdateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceUpdateAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceUpdateAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceUpdateItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceGatewayApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModelDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModelRecurrancePatternEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModelStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceUpdateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiUpdateFormRequest();
    $request->invoiceUpdateApiModel = new InvoiceUpdateApiModel();
    $request->invoiceUpdateApiModel->attachments = [
        new InvoiceUpdateAttachmentApiModel(),
    ];
    $request->invoiceUpdateApiModel->clientId = 434417;
    $request->invoiceUpdateApiModel->clonedFromId = 487838;
    $request->invoiceUpdateApiModel->currencyId = 311796;
    $request->invoiceUpdateApiModel->duedate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-29T12:05:35.198Z');
    $request->invoiceUpdateApiModel->id = 976405;
    $request->invoiceUpdateApiModel->invoiceCategoryId = 377752;
    $request->invoiceUpdateApiModel->issuedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T21:20:36.034Z');
    $request->invoiceUpdateApiModel->items = [
        new InvoiceUpdateItemApiModel(),
        new InvoiceUpdateItemApiModel(),
        new InvoiceUpdateItemApiModel(),
    ];
    $request->invoiceUpdateApiModel->notes = 'sit';
    $request->invoiceUpdateApiModel->number = 'fugiat';
    $request->invoiceUpdateApiModel->paymentGateways = [
        new InvoiceGatewayApiModel(),
    ];
    $request->invoiceUpdateApiModel->poNumber = 'soluta';
    $request->invoiceUpdateApiModel->recurringProfile = new InvoiceRecurringApiModel();
    $request->invoiceUpdateApiModel->recurringProfile->dayOfMonth = 679393;
    $request->invoiceUpdateApiModel->recurringProfile->dayOfWeek = InvoiceRecurringApiModelDayOfWeekEnum::WEDNESDAY;
    $request->invoiceUpdateApiModel->recurringProfile->dueDateInDays = 453697;
    $request->invoiceUpdateApiModel->recurringProfile->endOfRecurrance = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-05T07:07:55.687Z');
    $request->invoiceUpdateApiModel->recurringProfile->month = 607045;
    $request->invoiceUpdateApiModel->recurringProfile->recurrancePattern = InvoiceRecurringApiModelRecurrancePatternEnum::YEARLY;
    $request->invoiceUpdateApiModel->recurringProfile->recurranceValue = 714697;
    $request->invoiceUpdateApiModel->recurringProfile->startOfRecurrance = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-04T21:36:49.552Z');
    $request->invoiceUpdateApiModel->recurringProfile->status = InvoiceRecurringApiModelStatusEnum::PENDING;
    $request->invoiceUpdateApiModel->recurringProfile->title = 'Ms.';
    $request->invoiceUpdateApiModel->recurringProfileId = 663078;
    $request->invoiceUpdateApiModel->shouldSendReminders = false;
    $request->invoiceUpdateApiModel->status = InvoiceUpdateApiModelStatusEnum::VOID;
    $request->invoiceUpdateApiModel->terms = 'eius';
    $request->xAuthKey = 'aspernatur';
    $request->xAuthSecret = 'perferendis';

    $response = $sdk->invoice->invoiceApiUpdateForm($request);

    if ($response->invoiceFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiUpdateJson

Update an existing invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiUpdateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceUpdateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceUpdateAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceUpdateAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceUpdateItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceGatewayApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModel;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModelDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModelRecurrancePatternEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceRecurringApiModelStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceUpdateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiUpdateJsonRequest();
    $request->invoiceUpdateApiModel = new InvoiceUpdateApiModel();
    $request->invoiceUpdateApiModel->attachments = [
        new InvoiceUpdateAttachmentApiModel(),
    ];
    $request->invoiceUpdateApiModel->clientId = 758379;
    $request->invoiceUpdateApiModel->clonedFromId = 881586;
    $request->invoiceUpdateApiModel->currencyId = 320017;
    $request->invoiceUpdateApiModel->duedate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-07T02:34:07.563Z');
    $request->invoiceUpdateApiModel->id = 645785;
    $request->invoiceUpdateApiModel->invoiceCategoryId = 588317;
    $request->invoiceUpdateApiModel->issuedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-03T16:00:55.670Z');
    $request->invoiceUpdateApiModel->items = [
        new InvoiceUpdateItemApiModel(),
        new InvoiceUpdateItemApiModel(),
        new InvoiceUpdateItemApiModel(),
    ];
    $request->invoiceUpdateApiModel->notes = 'similique';
    $request->invoiceUpdateApiModel->number = 'alias';
    $request->invoiceUpdateApiModel->paymentGateways = [
        new InvoiceGatewayApiModel(),
        new InvoiceGatewayApiModel(),
        new InvoiceGatewayApiModel(),
        new InvoiceGatewayApiModel(),
    ];
    $request->invoiceUpdateApiModel->poNumber = 'quaerat';
    $request->invoiceUpdateApiModel->recurringProfile = new InvoiceRecurringApiModel();
    $request->invoiceUpdateApiModel->recurringProfile->dayOfMonth = 273542;
    $request->invoiceUpdateApiModel->recurringProfile->dayOfWeek = InvoiceRecurringApiModelDayOfWeekEnum::TUESDAY;
    $request->invoiceUpdateApiModel->recurringProfile->dueDateInDays = 798047;
    $request->invoiceUpdateApiModel->recurringProfile->endOfRecurrance = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-11T17:29:13.872Z');
    $request->invoiceUpdateApiModel->recurringProfile->month = 679880;
    $request->invoiceUpdateApiModel->recurringProfile->recurrancePattern = InvoiceRecurringApiModelRecurrancePatternEnum::YEARLY;
    $request->invoiceUpdateApiModel->recurringProfile->recurranceValue = 456130;
    $request->invoiceUpdateApiModel->recurringProfile->startOfRecurrance = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-13T02:40:51.157Z');
    $request->invoiceUpdateApiModel->recurringProfile->status = InvoiceRecurringApiModelStatusEnum::PENDING;
    $request->invoiceUpdateApiModel->recurringProfile->title = 'Miss';
    $request->invoiceUpdateApiModel->recurringProfileId = 947371;
    $request->invoiceUpdateApiModel->shouldSendReminders = false;
    $request->invoiceUpdateApiModel->status = InvoiceUpdateApiModelStatusEnum::PAID;
    $request->invoiceUpdateApiModel->terms = 'tempore';
    $request->xAuthKey = 'accusamus';
    $request->xAuthSecret = 'numquam';

    $response = $sdk->invoice->invoiceApiUpdateJson($request);

    if ($response->invoiceFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiUpdateRaw

Update an existing invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiUpdateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiUpdateRawRequest();
    $request->requestBody = 'enim';
    $request->xAuthKey = 'dolorem';
    $request->xAuthSecret = 'sapiente';

    $response = $sdk->invoice->invoiceApiUpdateRaw($request);

    if ($response->invoiceFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invoiceApiUri

Return the unique url to the client's invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InvoiceApiUriRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvoiceApiUriRequest();
    $request->id = 518201;
    $request->xAuthKey = 'nihil';
    $request->xAuthSecret = 'sit';

    $response = $sdk->invoice->invoiceApiUri($request);

    if ($response->invoiceUriApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiInvoiceAllcategories

Return all invoice categories for the account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetApiInvoiceAllcategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiInvoiceAllcategoriesRequest();
    $request->query = 'expedita';
    $request->xAuthKey = 'neque';
    $request->xAuthSecret = 'sed';

    $response = $sdk->invoice->getApiInvoiceAllcategories($request);

    if ($response->listResultInvoiceCategoryApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiInvoiceDeletecategoryForm

Delete an existing invoice category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiInvoiceDeletecategoryFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCategoryDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiInvoiceDeletecategoryFormRequest();
    $request->invoiceCategoryDeleteApiModel = new InvoiceCategoryDeleteApiModel();
    $request->invoiceCategoryDeleteApiModel->id = 424685;
    $request->xAuthKey = 'libero';
    $request->xAuthSecret = 'voluptas';

    $response = $sdk->invoice->postApiInvoiceDeletecategoryForm($request);

    if ($response->postApiInvoiceDeletecategoryForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiInvoiceDeletecategoryJson

Delete an existing invoice category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiInvoiceDeletecategoryJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCategoryDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiInvoiceDeletecategoryJsonRequest();
    $request->invoiceCategoryDeleteApiModel = new InvoiceCategoryDeleteApiModel();
    $request->invoiceCategoryDeleteApiModel->id = 646265;
    $request->xAuthKey = 'quam';
    $request->xAuthSecret = 'ipsum';

    $response = $sdk->invoice->postApiInvoiceDeletecategoryJson($request);

    if ($response->postApiInvoiceDeletecategoryJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiInvoiceDeletecategoryRaw

Delete an existing invoice category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiInvoiceDeletecategoryRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiInvoiceDeletecategoryRawRequest();
    $request->requestBody = 'incidunt';
    $request->xAuthKey = 'qui';
    $request->xAuthSecret = 'cupiditate';

    $response = $sdk->invoice->postApiInvoiceDeletecategoryRaw($request);

    if ($response->postApiInvoiceDeletecategoryRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiInvoiceNewcategoryForm

Create an invoice category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiInvoiceNewcategoryFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCategoryCreateApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiInvoiceNewcategoryFormRequest();
    $request->invoiceCategoryCreateApiModel = new InvoiceCategoryCreateApiModel();
    $request->invoiceCategoryCreateApiModel->name = 'Miss Jody Rogahn';
    $request->xAuthKey = 'incidunt';
    $request->xAuthSecret = 'aspernatur';

    $response = $sdk->invoice->postApiInvoiceNewcategoryForm($request);

    if ($response->invoiceCategoryApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiInvoiceNewcategoryJson

Create an invoice category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiInvoiceNewcategoryJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCategoryCreateApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiInvoiceNewcategoryJsonRequest();
    $request->invoiceCategoryCreateApiModel = new InvoiceCategoryCreateApiModel();
    $request->invoiceCategoryCreateApiModel->name = 'Verna Purdy';
    $request->xAuthKey = 'molestias';
    $request->xAuthSecret = 'temporibus';

    $response = $sdk->invoice->postApiInvoiceNewcategoryJson($request);

    if ($response->invoiceCategoryApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiInvoiceNewcategoryRaw

Create an invoice category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiInvoiceNewcategoryRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiInvoiceNewcategoryRawRequest();
    $request->requestBody = 'qui';
    $request->xAuthKey = 'neque';
    $request->xAuthSecret = 'fugit';

    $response = $sdk->invoice->postApiInvoiceNewcategoryRaw($request);

    if ($response->invoiceCategoryApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiInvoiceUpdatecategoryForm

Update an existing invoice category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiInvoiceUpdatecategoryFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCategoryUpdateApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiInvoiceUpdatecategoryFormRequest();
    $request->invoiceCategoryUpdateApiModel = new InvoiceCategoryUpdateApiModel();
    $request->invoiceCategoryUpdateApiModel->id = 164959;
    $request->invoiceCategoryUpdateApiModel->name = 'Ashley Hermiston';
    $request->xAuthKey = 'voluptatem';
    $request->xAuthSecret = 'cumque';

    $response = $sdk->invoice->postApiInvoiceUpdatecategoryForm($request);

    if ($response->invoiceCategoryApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiInvoiceUpdatecategoryJson

Update an existing invoice category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiInvoiceUpdatecategoryJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceCategoryUpdateApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiInvoiceUpdatecategoryJsonRequest();
    $request->invoiceCategoryUpdateApiModel = new InvoiceCategoryUpdateApiModel();
    $request->invoiceCategoryUpdateApiModel->id = 746994;
    $request->invoiceCategoryUpdateApiModel->name = 'Carl Turner DDS';
    $request->xAuthKey = 'quos';
    $request->xAuthSecret = 'tempore';

    $response = $sdk->invoice->postApiInvoiceUpdatecategoryJson($request);

    if ($response->invoiceCategoryApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiInvoiceUpdatecategoryRaw

Update an existing invoice category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostApiInvoiceUpdatecategoryRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiInvoiceUpdatecategoryRawRequest();
    $request->requestBody = 'cupiditate';
    $request->xAuthKey = 'aperiam';
    $request->xAuthSecret = 'delectus';

    $response = $sdk->invoice->postApiInvoiceUpdatecategoryRaw($request);

    if ($response->invoiceCategoryApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
