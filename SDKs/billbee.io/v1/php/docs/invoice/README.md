# invoice

### Available Operations

* [orderApiCreateInvoice](#orderapicreateinvoice) - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [orderApiGetInvoiceList](#orderapigetinvoicelist) - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate

## orderApiCreateInvoice

Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiCreateInvoiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiCreateInvoiceRequest();
    $request->id = 89603;
    $request->includeInvoicePdf = false;
    $request->sendToCloudId = 677412;
    $request->templateId = 672048;

    $response = $sdk->invoice->orderApiCreateInvoice($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiGetInvoiceList

Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiGetInvoiceListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiGetInvoiceListRequest();
    $request->excludeTags = false;
    $request->includePositions = false;
    $request->maxInvoiceDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-07T07:44:57.988Z');
    $request->maxPayDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-31T12:04:26.954Z');
    $request->minInvoiceDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-30T16:20:53.400Z');
    $request->minPayDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-02T16:42:54.630Z');
    $request->orderStateId = [
        727044,
        96549,
    ];
    $request->page = 270328;
    $request->pageSize = 256139;
    $request->shopId = [
        591935,
    ];
    $request->tag = [
        'molestiae',
    ];

    $response = $sdk->invoice->orderApiGetInvoiceList($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelInvoiceAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
