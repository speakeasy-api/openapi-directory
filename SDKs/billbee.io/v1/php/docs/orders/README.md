# orders

### Available Operations

* [layoutApiGetList](#layoutapigetlist)
* [orderApiAddShipmentForm](#orderapiaddshipmentform) - Add a shipment to a given order
* [orderApiAddShipmentJson](#orderapiaddshipmentjson) - Add a shipment to a given order
* [orderApiAddShipmentRaw](#orderapiaddshipmentraw) - Add a shipment to a given order
* [orderApiCreateDeliveryNote](#orderapicreatedeliverynote) - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [orderApiCreateInvoice](#orderapicreateinvoice) - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [~~orderApiFind~~](#orderapifind) - Find a single order by its external id (order number) :warning: **Deprecated**
* [orderApiGet](#orderapiget) - Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute
* [orderApiGetByExtRef](#orderapigetbyextref) - Get a single order by its external order number
* [orderApiGetInvoiceList](#orderapigetinvoicelist) - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate
* [orderApiGetList](#orderapigetlist) - Get a list of all orders optionally filtered by date
* [orderApiGetPatchableFields](#orderapigetpatchablefields) - Returns a list of fields which can be updated with the orders/{id} patch call
* [orderApiParsePlaceholdersForm](#orderapiparseplaceholdersform) - Parses a text and replaces all placeholders
* [orderApiParsePlaceholdersJson](#orderapiparseplaceholdersjson) - Parses a text and replaces all placeholders
* [orderApiParsePlaceholdersRaw](#orderapiparseplaceholdersraw) - Parses a text and replaces all placeholders
* [orderApiPatchOrder](#orderapipatchorder) - Updates one or more fields of an order
* [orderApiPostNewOrderForm](#orderapipostneworderform) - Creates a new order in the Billbee account
* [orderApiPostNewOrderJson](#orderapipostneworderjson) - Creates a new order in the Billbee account
* [orderApiPostNewOrderRaw](#orderapipostneworderraw) - Creates a new order in the Billbee account
* [orderApiSendMessageForm](#orderapisendmessageform) - Sends a message to the buyer
* [orderApiSendMessageJson](#orderapisendmessagejson) - Sends a message to the buyer
* [orderApiSendMessageRaw](#orderapisendmessageraw) - Sends a message to the buyer
* [orderApiTagsCreateForm](#orderapitagscreateform) - Attach one or more tags to an order
* [orderApiTagsCreateJson](#orderapitagscreatejson) - Attach one or more tags to an order
* [orderApiTagsCreateRaw](#orderapitagscreateraw) - Attach one or more tags to an order
* [orderApiTagsUpdateForm](#orderapitagsupdateform) - Sets the tags attached to an order
* [orderApiTagsUpdateJson](#orderapitagsupdatejson) - Sets the tags attached to an order
* [orderApiTagsUpdateRaw](#orderapitagsupdateraw) - Sets the tags attached to an order
* [orderApiTriggerEventForm](#orderapitriggereventform) - Triggers a rule event
* [orderApiTriggerEventJson](#orderapitriggereventjson) - Triggers a rule event
* [orderApiTriggerEventRaw](#orderapitriggereventraw) - Triggers a rule event
* [orderApiUpdateStateForm](#orderapiupdatestateform) - Changes the main state of a single order
* [orderApiUpdateStateJson](#orderapiupdatestatejson) - Changes the main state of a single order
* [orderApiUpdateStateRaw](#orderapiupdatestateraw) - Changes the main state of a single order
* [searchSearchForm](#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchJson](#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchRaw](#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

## layoutApiGetList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->orders->layoutApiGetList();

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelsLayoutTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiAddShipmentForm

Add a shipment to a given order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiAddShipmentFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiAddShipmentFormRequest();
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel = new RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel();
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->carrierId = 301598;
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->comment = 'odio';
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->orderId = 'eius';
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->shipmentType = 458515;
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->shippingId = 'esse';
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->shippingProviderId = 524593;
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->shippingProviderProductId = 683282;
    $request->id = 442015;

    $response = $sdk->orders->orderApiAddShipmentForm($request);

    if ($response->orderApiAddShipmentForm200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiAddShipmentJson

Add a shipment to a given order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiAddShipmentJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiAddShipmentJsonRequest();
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel = new RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel();
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->carrierId = 695626;
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->comment = 'fugiat';
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->orderId = 'ut';
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->shipmentType = 433439;
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->shippingId = 'suscipit';
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->shippingProviderId = 826871;
    $request->rechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel->shippingProviderProductId = 181151;
    $request->id = 509342;

    $response = $sdk->orders->orderApiAddShipmentJson($request);

    if ($response->orderApiAddShipmentJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiAddShipmentRaw

Add a shipment to a given order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiAddShipmentRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiAddShipmentRawRequest();
    $request->requestBody = 'quisquam';
    $request->id = 86377;

    $response = $sdk->orders->orderApiAddShipmentRaw($request);

    if ($response->orderApiAddShipmentRaw200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiCreateDeliveryNote

Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiCreateDeliveryNoteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiCreateDeliveryNoteRequest();
    $request->id = 56848;
    $request->includePdf = false;
    $request->sendToCloudId = 660040;

    $response = $sdk->orders->orderApiCreateDeliveryNote($request);

    if ($response->orderApiCreateDeliveryNote200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->id = 696997;
    $request->includeInvoicePdf = false;
    $request->sendToCloudId = 206594;
    $request->templateId = 778696;

    $response = $sdk->orders->orderApiCreateInvoice($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~orderApiFind~~

Find a single order by its external id (order number)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiFindRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiFindRequest();
    $request->id = 'dca42519-04e5-423c-be0b-c7178e4796f2';
    $request->partner = 'deserunt';

    $response = $sdk->orders->orderApiFind($request);

    if ($response->orderApiFind200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiGet

Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiGetArticleTitleSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiGetRequest();
    $request->articleTitleSource = OrderApiGetArticleTitleSourceEnum::ONE;
    $request->id = 35362;

    $response = $sdk->orders->orderApiGet($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiGetByExtRef

Get a single order by its external order number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiGetByExtRefRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiGetByExtRefRequest();
    $request->extRef = 'porro';

    $response = $sdk->orders->orderApiGetByExtRef($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder !== null) {
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
    $request->maxInvoiceDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-11T21:40:41.165Z');
    $request->maxPayDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-06T07:07:42.754Z');
    $request->minInvoiceDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-18T00:06:33.286Z');
    $request->minPayDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-13T21:24:27.316Z');
    $request->orderStateId = [
        539224,
        128860,
    ];
    $request->page = 325685;
    $request->pageSize = 392676;
    $request->shopId = [
        956406,
    ];
    $request->tag = [
        'ratione',
    ];

    $response = $sdk->orders->orderApiGetInvoiceList($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelInvoiceAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiGetList

Get a list of all orders optionally filtered by date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiGetListRequest;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiGetListArticleTitleSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiGetListRequest();
    $request->articleTitleSource = OrderApiGetListArticleTitleSourceEnum::ZERO;
    $request->excludeTags = false;
    $request->maxOrderDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-07T01:55:10.347Z');
    $request->minOrderDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-25T15:36:05.649Z');
    $request->minimumBillBeeOrderId = 456911;
    $request->modifiedAtMax = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-10T03:57:05.694Z');
    $request->modifiedAtMin = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-17T14:37:45.086Z');
    $request->orderStateId = [
        724168,
        877131,
        399025,
        93459,
    ];
    $request->page = 904045;
    $request->pageSize = 426306;
    $request->shopId = [
        473221,
        699622,
        580197,
    ];
    $request->tag = [
        'distinctio',
        'eligendi',
    ];

    $response = $sdk->orders->orderApiGetList($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiGetPatchableFields

Returns a list of fields which can be updated with the orders/{id} patch call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->orders->orderApiGetPatchableFields();

    if ($response->orderApiGetPatchableFields200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiParsePlaceholdersForm

Parses a text and replaces all placeholders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiParsePlaceholdersFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiParsePlaceholdersFormRequest();
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer = new RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer();
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer->isHtml = false;
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer->language = 'sit';
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer->textToParse = 'culpa';
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer->trim = false;
    $request->id = 731398;

    $response = $sdk->orders->orderApiParsePlaceholdersForm($request);

    if ($response->orderApiParsePlaceholdersForm200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiParsePlaceholdersJson

Parses a text and replaces all placeholders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiParsePlaceholdersJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiParsePlaceholdersJsonRequest();
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer = new RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer();
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer->isHtml = false;
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer->language = 'adipisci';
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer->textToParse = 'cumque';
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer->trim = false;
    $request->id = 160538;

    $response = $sdk->orders->orderApiParsePlaceholdersJson($request);

    if ($response->orderApiParsePlaceholdersJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiParsePlaceholdersRaw

Parses a text and replaces all placeholders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiParsePlaceholdersRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiParsePlaceholdersRawRequest();
    $request->requestBody = 'consequatur';
    $request->id = 796392;

    $response = $sdk->orders->orderApiParsePlaceholdersRaw($request);

    if ($response->orderApiParsePlaceholdersRaw200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiPatchOrder

Updates one or more fields of an order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiPatchOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiPatchOrderRequest();
    $request->requestBody = [
        'sapiente' => 'consectetur',
        'esse' => 'blanditiis',
    ];
    $request->id = 590984;

    $response = $sdk->orders->orderApiPatchOrder($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiPostNewOrderForm

To create an order POST an JSON object to the orders endpoint with the shown properties.
Not all properties are required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiPostNewOrderFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderUserInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCommentAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesOrderHistoryEntry;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderItemInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderItemAttribute;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelSoldProductInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelProductImage;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelsOrderPayment;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelShipment;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderVatModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiPostNewOrderFormRequest();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput = new BillbeeInterfacesBillbeeAPIModelOrderInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->acceptLossOfReturnRight = false;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->adjustmentCost = 9537.22;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->adjustmentReason = 'nulla';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->apiAccountId = 557811;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->apiAccountName = 'esse';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-18T13:34:46.515Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->billBeeOrderId = 621679;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->billBeeParentOrderId = 575751;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer = new BillbeeInterfacesBillbeeAPIModelOrderUserInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->billbeeShopId = 863023;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->billbeeShopName = 'possimus';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->email = 'Sylvester.Zemlak15@gmail.com';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->firstName = 'Aurelie';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->id = 'aa6f1e67-4bdb-404f-9575-6082d68ea19f';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->lastName = 'Boyle';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->nick = 'at';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->platform = 'et';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->comments = [
        new BillbeeInterfacesBillbeeAPIModelCommentAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelCommentAPIModel(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->confirmedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-03T18:06:00.164Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T01:09:40.281Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->currency = 'adipisci';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customInvoiceNote = 'iste';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer = new BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T18:47:58.319Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultCommercialMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultCommercialMailAddress->id = 522371;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultCommercialMailAddress->subType = 'aut';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultCommercialMailAddress->typeId = 513075;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultCommercialMailAddress->value = 'eum';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultFax = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultFax->id = 649832;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultFax->subType = 'ab';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultFax->typeId = 544591;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultFax->value = 'non';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultMailAddress->id = 32465;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultMailAddress->subType = 'dolor';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultMailAddress->typeId = 580152;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultMailAddress->value = 'numquam';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone1 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone1->id = 771089;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone1->subType = 'explicabo';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone1->typeId = 376226;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone1->value = 'aut';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone2 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone2->id = 491025;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone2->subType = 'dicta';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone2->typeId = 981640;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone2->value = 'natus';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultStatusUpdatesMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultStatusUpdatesMailAddress->id = 244651;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultStatusUpdatesMailAddress->subType = 'voluptatibus';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultStatusUpdatesMailAddress->typeId = 374323;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultStatusUpdatesMailAddress->value = 'asperiores';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->email = 'Haleigh83@gmail.com';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->id = 638762;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->languageId = 807023;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->metaData = [
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->name = 'Mrs. Aubrey Hills';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->number = 801836;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->priceGroupId = 288398;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-04T21:10:21.697Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->tel1 = 'fuga';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->tel2 = 'id';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->type = 380729;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->vatId = 'velit';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customerNumber = 'culpa';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customerVatId = 'est';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->deliverySourceCountryCode = 'recusandae';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->distributionCenter = 'totam';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->history = [
        new BillbeeInterfacesOrderHistoryEntry(),
        new BillbeeInterfacesOrderHistoryEntry(),
        new BillbeeInterfacesOrderHistoryEntry(),
        new BillbeeInterfacesOrderHistoryEntry(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->id = '67864dbb-675f-4d5e-a0b3-75ed4f6fbee4';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress = new BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->billbeeId = 121059;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->city = 'Deltona';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->company = 'Farrell Inc';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->country = 'Lebanon';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->countryIso2 = 'a';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->email = 'Darrel.Herzog5@hotmail.com';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->firstName = 'Terence';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->houseNumber = 'libero';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->lastName = 'Bruen';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->line2 = 'accusamus';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->nameAddition = 'similique';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->phone = '333-437-6271 x542';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->state = 'aliquam';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->street = '832 Kuvalis Motorway';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->zip = 'hic';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-14T14:10:48.315Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceNumber = 548519;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceNumberPostfix = 'pariatur';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceNumberPrefix = 'totam';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->isCancelationFor = 'hic';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->isFromBillbeeApi = false;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->languageCode = 'exercitationem';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->lastModifiedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-05T00:59:14.180Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->merchantVatId = 'rerum';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->orderItems = [
        new BillbeeInterfacesBillbeeAPIModelOrderItemInput(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->orderNumber = 'reiciendis';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->paidAmount = 1318.52;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->payedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-16T19:55:44.497Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->paymentInstruction = 'voluptate';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->paymentMethod = BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnum::ONE_HUNDRED_AND_TWO;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->paymentReference = 'ab';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->paymentTransactionId = 'iste';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->payments = [
        new BillbeeInterfacesBillbeeAPIModelsOrderPayment(),
        new BillbeeInterfacesBillbeeAPIModelsOrderPayment(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-11T18:44:43.336Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller = new BillbeeInterfacesBillbeeAPIModelOrderUserInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->billbeeShopId = 447516;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->billbeeShopName = 'commodi';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->email = 'Brendan.Hodkiewicz@hotmail.com';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->firstName = 'Geovany';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->id = 'fe1f08f4-294e-4369-8f44-7f603e8b445e';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->lastName = 'Leffler';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->nick = 'sit';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->platform = 'nobis';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->sellerComment = 'error';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shipWeightKg = 3335.07;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-28T16:22:09.125Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress = new BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->billbeeId = 967122;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->city = 'Chattanooga';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->company = 'Turcotte and Sons';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->country = 'Gibraltar';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->countryIso2 = 'in';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->email = 'Bella_Langworth@hotmail.com';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->firstName = 'Nadia';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->houseNumber = 'laboriosam';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->lastName = 'Parisian';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->line2 = 'voluptatum';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->nameAddition = 'error';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->phone = '782.736.6582 x51280';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->state = 'culpa';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->street = '204 Alberto Meadows';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->zip = 'quas';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingCost = 9221.12;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingIds = [
        new BillbeeInterfacesBillbeeAPIModelShipment(),
        new BillbeeInterfacesBillbeeAPIModelShipment(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingProfileId = 'et';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingProfileName = 'blanditiis';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingProviderId = 405942;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingProviderName = 'sed';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingProviderProductId = 24313;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingProviderProductName = 'vel';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->state = BillbeeInterfacesBillbeeAPIModelOrderStateEnum::SIX;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->tags = [
        'error',
        'consequatur',
        'incidunt',
        'reiciendis',
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->taxRate1 = 2097.5;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->taxRate2 = 6908.94;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->totalCost = 1157.03;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->updatedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-04T08:15:04.756Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->vatId = 'labore';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->vatMode = BillbeeInterfacesBillbeeAPIModelOrderVatModeEnum::FOUR;
    $request->shopId = 539074;

    $response = $sdk->orders->orderApiPostNewOrderForm($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiPostNewOrderJson

To create an order POST an JSON object to the orders endpoint with the shown properties.
Not all properties are required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiPostNewOrderJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderUserInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCommentAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesOrderHistoryEntry;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderItemInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderItemAttribute;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelSoldProductInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelProductImage;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelsOrderPayment;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelShipment;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelOrderVatModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiPostNewOrderJsonRequest();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput = new BillbeeInterfacesBillbeeAPIModelOrderInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->acceptLossOfReturnRight = false;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->adjustmentCost = 6719.57;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->adjustmentReason = 'nam';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->apiAccountId = 948861;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->apiAccountName = 'laboriosam';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-10T02:44:39.117Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->billBeeOrderId = 647197;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->billBeeParentOrderId = 454860;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer = new BillbeeInterfacesBillbeeAPIModelOrderUserInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->billbeeShopId = 600392;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->billbeeShopName = 'reiciendis';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->email = 'Robbie.Windler66@yahoo.com';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->firstName = 'Maurine';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->id = '7da8a50c-e187-4f86-bc17-3d689eee9526';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->lastName = 'Wuckert';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->nick = 'corrupti';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->buyer->platform = 'at';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->comments = [
        new BillbeeInterfacesBillbeeAPIModelCommentAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelCommentAPIModel(),
        new BillbeeInterfacesBillbeeAPIModelCommentAPIModel(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->confirmedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-30T01:40:53.027Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-17T08:50:15.963Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->currency = 'atque';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customInvoiceNote = 'sunt';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer = new BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-16T15:16:35.557Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultCommercialMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultCommercialMailAddress->id = 829898;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultCommercialMailAddress->subType = 'labore';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultCommercialMailAddress->typeId = 968287;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultCommercialMailAddress->value = 'doloremque';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultFax = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultFax->id = 919783;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultFax->subType = 'dicta';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultFax->typeId = 36033;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultFax->value = 'beatae';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultMailAddress->id = 174772;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultMailAddress->subType = 'enim';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultMailAddress->typeId = 389135;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultMailAddress->value = 'velit';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone1 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone1->id = 952143;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone1->subType = 'molestias';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone1->typeId = 300029;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone1->value = 'saepe';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone2 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone2->id = 160467;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone2->subType = 'occaecati';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone2->typeId = 886305;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultPhone2->value = 'perspiciatis';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultStatusUpdatesMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultStatusUpdatesMailAddress->id = 446394;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultStatusUpdatesMailAddress->subType = 'adipisci';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultStatusUpdatesMailAddress->typeId = 907876;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->defaultStatusUpdatesMailAddress->value = 'occaecati';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->email = 'Buster.Olson@gmail.com';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->id = 625528;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->languageId = 76486;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->metaData = [
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->name = 'Conrad Franey III';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->number = 59944;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->priceGroupId = 517612;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T17:54:29.915Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->tel1 = 'eveniet';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->tel2 = 'qui';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->type = 739884;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customer->vatId = 'iure';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customerNumber = 'necessitatibus';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->customerVatId = 'ratione';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->deliverySourceCountryCode = 'laborum';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->distributionCenter = 'distinctio';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->history = [
        new BillbeeInterfacesOrderHistoryEntry(),
        new BillbeeInterfacesOrderHistoryEntry(),
        new BillbeeInterfacesOrderHistoryEntry(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->id = '845f0597-a60f-4f2a-94a3-1e94764a3e86';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress = new BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->billbeeId = 367927;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->city = 'Knoxville';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->company = 'Hauck - Kemmer';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->country = 'Vietnam';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->countryIso2 = 'provident';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->email = 'Filiberto.Boyer@gmail.com';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->firstName = 'Mackenzie';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->houseNumber = 'provident';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->lastName = 'Schuster';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->line2 = 'animi';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->nameAddition = 'ex';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->phone = '1-299-447-9668 x295';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->state = 'officiis';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->street = '716 Etha Circles';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceAddress->zip = 'fugit';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T09:55:31.770Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceNumber = 21688;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceNumberPostfix = 'velit';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->invoiceNumberPrefix = 'aspernatur';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->isCancelationFor = 'eum';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->isFromBillbeeApi = false;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->languageCode = 'eius';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->lastModifiedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-05T02:38:00.020Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->merchantVatId = 'impedit';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->orderItems = [
        new BillbeeInterfacesBillbeeAPIModelOrderItemInput(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->orderNumber = 'sapiente';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->paidAmount = 4332.79;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->payedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T07:58:00.870Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->paymentInstruction = 'beatae';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->paymentMethod = BillbeeInterfacesBillbeeAPIModelOrderPaymentMethodEnum::EIGHTY_SIX;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->paymentReference = 'provident';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->paymentTransactionId = 'earum';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->payments = [
        new BillbeeInterfacesBillbeeAPIModelsOrderPayment(),
        new BillbeeInterfacesBillbeeAPIModelsOrderPayment(),
        new BillbeeInterfacesBillbeeAPIModelsOrderPayment(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-16T06:36:28.349Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller = new BillbeeInterfacesBillbeeAPIModelOrderUserInput();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->billbeeShopId = 52508;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->billbeeShopName = 'earum';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->email = 'Wilmer_Toy@yahoo.com';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->firstName = 'Geo';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->id = '32ca3aed-0117-4996-b12f-de04771778ff';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->lastName = 'Kassulke';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->nick = 'architecto';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->seller->platform = 'fugiat';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->sellerComment = 'doloremque';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shipWeightKg = 1173.15;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-23T23:49:53.776Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress = new BillbeeInterfacesBillbeeAPIModelOrderAddressAPIModel();
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->billbeeId = 458259;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->city = 'Darrionview';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->company = 'Osinski Inc';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->country = 'Guadeloupe';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->countryIso2 = 'fugiat';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->email = 'Gregg.Nikolaus@hotmail.com';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->firstName = 'Alanis';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->houseNumber = 'eum';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->lastName = 'Hirthe';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->line2 = 'iste';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->nameAddition = 'id';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->phone = '(789) 767-3531';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->state = 'repellendus';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->street = '7423 Bartell Mount';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingAddress->zip = 'cum';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingCost = 3996.6;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingIds = [
        new BillbeeInterfacesBillbeeAPIModelShipment(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingProfileId = 'voluptatum';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingProfileName = 'omnis';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingProviderId = 85233;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingProviderName = 'rerum';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingProviderProductId = 665678;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->shippingProviderProductName = 'culpa';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->state = BillbeeInterfacesBillbeeAPIModelOrderStateEnum::ONE;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->tags = [
        'officiis',
        'architecto',
        'fuga',
        'pariatur',
    ];
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->taxRate1 = 8913.15;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->taxRate2 = 291.9;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->totalCost = 12.07;
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->updatedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-15T19:55:34.024Z');
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->vatId = 'ex';
    $request->billbeeInterfacesBillbeeAPIModelOrderInput->vatMode = BillbeeInterfacesBillbeeAPIModelOrderVatModeEnum::FIVE;
    $request->shopId = 524184;

    $response = $sdk->orders->orderApiPostNewOrderJson($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiPostNewOrderRaw

To create an order POST an JSON object to the orders endpoint with the shown properties.
Not all properties are required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiPostNewOrderRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiPostNewOrderRawRequest();
    $request->requestBody = 'minus';
    $request->shopId = 365100;

    $response = $sdk->orders->orderApiPostNewOrderRaw($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiSendMessageForm

Sends a message to the buyer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiSendMessageFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesOrderMultiLanguageString;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModelSendModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiSendMessageFormRequest();
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel = new RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel();
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel->alternativeMail = 'asperiores';
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel->body = [
        new BillbeeInterfacesOrderMultiLanguageString(),
    ];
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel->sendMode = RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModelSendModeEnum::ONE;
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel->subject = [
        new BillbeeInterfacesOrderMultiLanguageString(),
    ];
    $request->id = 848341;

    $response = $sdk->orders->orderApiSendMessageForm($request);

    if ($response->orderApiSendMessageForm200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiSendMessageJson

Sends a message to the buyer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiSendMessageJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesOrderMultiLanguageString;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModelSendModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiSendMessageJsonRequest();
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel = new RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel();
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel->alternativeMail = 'totam';
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel->body = [
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
    ];
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel->sendMode = RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModelSendModeEnum::FOUR;
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel->subject = [
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
        new BillbeeInterfacesOrderMultiLanguageString(),
    ];
    $request->id = 373216;

    $response = $sdk->orders->orderApiSendMessageJson($request);

    if ($response->orderApiSendMessageJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiSendMessageRaw

Sends a message to the buyer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiSendMessageRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiSendMessageRawRequest();
    $request->requestBody = 'culpa';
    $request->id = 222864;

    $response = $sdk->orders->orderApiSendMessageRaw($request);

    if ($response->orderApiSendMessageRaw200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiTagsCreateForm

When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiTagsCreateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderTagCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiTagsCreateFormRequest();
    $request->rechnungsdruckWebAppControllersApiOrderTagCreate = new RechnungsdruckWebAppControllersApiOrderTagCreate();
    $request->rechnungsdruckWebAppControllersApiOrderTagCreate->tags = [
        'inventore',
        'deleniti',
    ];
    $request->id = 85311;

    $response = $sdk->orders->orderApiTagsCreateForm($request);

    if ($response->orderApiTagsCreateForm200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiTagsCreateJson

When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiTagsCreateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderTagCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiTagsCreateJsonRequest();
    $request->rechnungsdruckWebAppControllersApiOrderTagCreate = new RechnungsdruckWebAppControllersApiOrderTagCreate();
    $request->rechnungsdruckWebAppControllersApiOrderTagCreate->tags = [
        'dolor',
        'consequatur',
    ];
    $request->id = 100014;

    $response = $sdk->orders->orderApiTagsCreateJson($request);

    if ($response->orderApiTagsCreateJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiTagsCreateRaw

When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiTagsCreateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiTagsCreateRawRequest();
    $request->requestBody = 'sit';
    $request->id = 265039;

    $response = $sdk->orders->orderApiTagsCreateRaw($request);

    if ($response->orderApiTagsCreateRaw200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiTagsUpdateForm

All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiTagsUpdateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderTagCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiTagsUpdateFormRequest();
    $request->rechnungsdruckWebAppControllersApiOrderTagCreate = new RechnungsdruckWebAppControllersApiOrderTagCreate();
    $request->rechnungsdruckWebAppControllersApiOrderTagCreate->tags = [
        'ab',
    ];
    $request->id = 513760;

    $response = $sdk->orders->orderApiTagsUpdateForm($request);

    if ($response->orderApiTagsUpdateForm200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiTagsUpdateJson

All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiTagsUpdateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderTagCreate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiTagsUpdateJsonRequest();
    $request->rechnungsdruckWebAppControllersApiOrderTagCreate = new RechnungsdruckWebAppControllersApiOrderTagCreate();
    $request->rechnungsdruckWebAppControllersApiOrderTagCreate->tags = [
        'dolor',
    ];
    $request->id = 856277;

    $response = $sdk->orders->orderApiTagsUpdateJson($request);

    if ($response->orderApiTagsUpdateJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiTagsUpdateRaw

All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiTagsUpdateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiTagsUpdateRawRequest();
    $request->requestBody = 'ipsam';
    $request->id = 162120;

    $response = $sdk->orders->orderApiTagsUpdateRaw($request);

    if ($response->orderApiTagsUpdateRaw200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiTriggerEventForm

Triggers a rule event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiTriggerEventFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiTriggerEventFormRequest();
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer = new RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer();
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer->delayInMinutes = 55107;
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer->name = 'Conrad Rutherford';
    $request->id = 897277;

    $response = $sdk->orders->orderApiTriggerEventForm($request);

    if ($response->orderApiTriggerEventForm200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiTriggerEventJson

Triggers a rule event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiTriggerEventJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiTriggerEventJsonRequest();
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer = new RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer();
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer->delayInMinutes = 153369;
    $request->rechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer->name = 'Robin Ratke';
    $request->id = 528234;

    $response = $sdk->orders->orderApiTriggerEventJson($request);

    if ($response->orderApiTriggerEventJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiTriggerEventRaw

Triggers a rule event

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiTriggerEventRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiTriggerEventRawRequest();
    $request->requestBody = 'magnam';
    $request->id = 349440;

    $response = $sdk->orders->orderApiTriggerEventRaw($request);

    if ($response->orderApiTriggerEventRaw200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiUpdateStateForm

### REMARKS ###
Use this call to change the state of an order to i.e. paid or sent.

The state is transfered to the external shop/marketplace if configured.
This is the list of known states:
- 1: ordered
- 2: confirmed
- 3: paid
- 4: shipped
- 5: reclamation
- 6: deleted
- 7: closed
- 8: canceled
- 9: archived
- 10: not used
- 11: demand note 1
- 12: demand note 2
- 13: packed
- 14: offered
- 15: payment reminder
- 16: fulfilling

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiUpdateStateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderStateUpdate;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderStateUpdateNewStateIdEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiUpdateStateFormRequest();
    $request->rechnungsdruckWebAppControllersApiOrderStateUpdate = new RechnungsdruckWebAppControllersApiOrderStateUpdate();
    $request->rechnungsdruckWebAppControllersApiOrderStateUpdate->newStateId = RechnungsdruckWebAppControllersApiOrderStateUpdateNewStateIdEnum::TWO;
    $request->id = 781480;

    $response = $sdk->orders->orderApiUpdateStateForm($request);

    if ($response->orderApiUpdateStateForm200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiUpdateStateJson

### REMARKS ###
Use this call to change the state of an order to i.e. paid or sent.

The state is transfered to the external shop/marketplace if configured.
This is the list of known states:
- 1: ordered
- 2: confirmed
- 3: paid
- 4: shipped
- 5: reclamation
- 6: deleted
- 7: closed
- 8: canceled
- 9: archived
- 10: not used
- 11: demand note 1
- 12: demand note 2
- 13: packed
- 14: offered
- 15: payment reminder
- 16: fulfilling

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiUpdateStateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderStateUpdate;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiOrderStateUpdateNewStateIdEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiUpdateStateJsonRequest();
    $request->rechnungsdruckWebAppControllersApiOrderStateUpdate = new RechnungsdruckWebAppControllersApiOrderStateUpdate();
    $request->rechnungsdruckWebAppControllersApiOrderStateUpdate->newStateId = RechnungsdruckWebAppControllersApiOrderStateUpdateNewStateIdEnum::SEVEN;
    $request->id = 751022;

    $response = $sdk->orders->orderApiUpdateStateJson($request);

    if ($response->orderApiUpdateStateJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiUpdateStateRaw

### REMARKS ###
Use this call to change the state of an order to i.e. paid or sent.

The state is transfered to the external shop/marketplace if configured.
This is the list of known states:
- 1: ordered
- 2: confirmed
- 3: paid
- 4: shipped
- 5: reclamation
- 6: deleted
- 7: closed
- 8: canceled
- 9: archived
- 10: not used
- 11: demand note 1
- 12: demand note 2
- 13: packed
- 14: offered
- 15: payment reminder
- 16: fulfilling

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiUpdateStateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiUpdateStateRawRequest();
    $request->requestBody = 'laboriosam';
    $request->id = 927212;

    $response = $sdk->orders->orderApiUpdateStateRaw($request);

    if ($response->orderApiUpdateStateRaw200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSearchForm

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RechnungsdruckWebAppControllersApiSearchControllerSearchModel();
    $request->searchMode = RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum::ZERO;
    $request->term = 'voluptatem';
    $request->type = [
        'necessitatibus',
        'quasi',
    ];

    $response = $sdk->orders->searchSearchForm($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSearchJson

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RechnungsdruckWebAppControllersApiSearchControllerSearchModel();
    $request->searchMode = RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum::ONE;
    $request->term = 'at';
    $request->type = [
        'est',
        'harum',
        'sequi',
        'doloribus',
    ];

    $response = $sdk->orders->searchSearchJson($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSearchRaw

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'repudiandae'

    $response = $sdk->orders->searchSearchRaw($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
