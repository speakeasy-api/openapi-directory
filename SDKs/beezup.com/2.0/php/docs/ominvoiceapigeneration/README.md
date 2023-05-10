# omInvoiceAPIGeneration

### Available Operations

* [generateBatchOrderInvoice](#generatebatchorderinvoice) - Generate an Order Invoice batch
* [generateOrderInvoice](#generateorderinvoice) - Generate an Order Invoice
* [getOrderInvoicePdf](#getorderinvoicepdf) - Returns the PDF version of the invoice
* [getOrderInvoicePreview](#getorderinvoicepreview) - View a preview an Order Invoice

## generateBatchOrderInvoice

Generate an Order Invoice batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenerateBatchOrderInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GenerateBatchOrderInvoiceRequestItem;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateBatchOrderInvoiceRequest();
    $request->requestBody = [
        new GenerateBatchOrderInvoiceRequestItem(),
        new GenerateBatchOrderInvoiceRequestItem(),
    ];
    $request->userName = 'Gage_Bailey';

    $response = $sdk->omInvoiceAPIGeneration->generateBatchOrderInvoice($request);

    if ($response->generateBatchOrderInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateOrderInvoice

Generate an Order Invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GenerateOrderInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GenerateOrderInvoiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateOrderInvoiceRequest();
    $request->accountId = 'repudiandae';
    $request->beezUPOrderUUID = 'corporis';
    $request->generateOrderInvoiceRequest = new GenerateOrderInvoiceRequest();
    $request->generateOrderInvoiceRequest->invoiceSequenceNumber = 879;
    $request->marketplaceTechnicalCode = 'et';
    $request->userName = 'Jo2';

    $response = $sdk->omInvoiceAPIGeneration->generateOrderInvoice($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrderInvoicePdf

Returns the PDF version of the invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GetOrderInvoicePdfFromHtmlInvoiceUrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderInvoicePdfFromHtmlInvoiceUrlRequest();
    $request->orderInvoiceUri = 'http://www.mydomain.com';

    $response = $sdk->omInvoiceAPIGeneration->getOrderInvoicePdf($request);

    if ($response->getOrderInvoicePdf200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrderInvoicePreview

View a preview an Order Invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderInvoicePreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\PreviewOrderInvoiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderInvoicePreviewRequest();
    $request->acceptEncoding = 'vel';
    $request->accountId = 'nostrum';
    $request->beezUPOrderUUID = 'saepe';
    $request->marketplaceTechnicalCode = 'error';
    $request->previewOrderInvoiceRequest = new PreviewOrderInvoiceRequest();
    $request->previewOrderInvoiceRequest->invoiceSequenceNumber = 879;

    $response = $sdk->omInvoiceAPIGeneration->getOrderInvoicePreview($request);

    if ($response->previewOrderInvoiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
