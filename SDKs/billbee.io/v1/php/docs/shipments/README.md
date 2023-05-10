# shipments

### Available Operations

* [shipmentGetList](#shipmentgetlist) - Get a list of all shipments optionally filtered by date. All parameters are optional.
* [shipmentGetPing](#shipmentgetping)
* [shipmentGetShippingCarrier](#shipmentgetshippingcarrier) - Queries the currently available shipping carriers.
* [shipmentGetShippingproviders](#shipmentgetshippingproviders) - Query all defined shipping providers
* [shipmentPostShipmentForm](#shipmentpostshipmentform) - Creates a new shipment with the selected Shippingprovider
* [shipmentPostShipmentJson](#shipmentpostshipmentjson) - Creates a new shipment with the selected Shippingprovider
* [shipmentPostShipmentRaw](#shipmentpostshipmentraw) - Creates a new shipment with the selected Shippingprovider
* [shipmentShipWithLabelForm](#shipmentshipwithlabelform) - Creates a shipment for an order in billbee
* [shipmentShipWithLabelJson](#shipmentshipwithlabeljson) - Creates a shipment for an order in billbee
* [shipmentShipWithLabelRaw](#shipmentshipwithlabelraw) - Creates a shipment for an order in billbee

## shipmentGetList

Get a list of all shipments optionally filtered by date. All parameters are optional.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ShipmentGetListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShipmentGetListRequest();
    $request->createdAtMax = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-09T04:42:29.895Z');
    $request->createdAtMin = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-22T18:47:14.845Z');
    $request->minimumShipmentId = 339631;
    $request->orderId = 106255;
    $request->page = 600213;
    $request->pageSize = 476946;
    $request->shippingProviderId = 963198;

    $response = $sdk->shipments->shipmentGetList($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shipmentGetPing

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->shipments->shipmentGetPing();

    if ($response->shipmentGetPing200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shipmentGetShippingCarrier

Queries the currently available shipping carriers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->shipments->shipmentGetShippingCarrier();

    if ($response->shipmentGetShippingCarrier200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shipmentGetShippingproviders

Query all defined shipping providers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->shipments->shipmentGetShippingproviders();

    if ($response->shipmentGetShippingproviders200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shipmentPostShipmentForm

Creates a new shipment with the selected Shippingprovider

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesShippingShipmentDataDimensions;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput();
    $request->clientReference = 'cupiditate';
    $request->content = 'fugit';
    $request->customerNumber = 'numquam';
    $request->dimension = new BillbeeInterfacesShippingShipmentDataDimensions();
    $request->dimension->height = 2569.16;
    $request->dimension->length = 2010.1;
    $request->dimension->width = 8735.57;
    $request->orderCurrencyCode = 'officia';
    $request->orderSum = 4918.92;
    $request->printerIdForExportDocs = 760744;
    $request->printerName = 'necessitatibus';
    $request->productCode = 'corporis';
    $request->providerName = 'qui';
    $request->receiverAddress = new BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput();
    $request->receiverAddress->addressAddition = 'expedita';
    $request->receiverAddress->city = 'Laceyborough';
    $request->receiverAddress->company = 'Halvorson, Doyle and King';
    $request->receiverAddress->countryCode = 'SH';
    $request->receiverAddress->countryCodeIso3 = 'eum';
    $request->receiverAddress->email = 'Flo_Gusikowski73@gmail.com';
    $request->receiverAddress->firstName = 'Alvis';
    $request->receiverAddress->housenumber = 'libero';
    $request->receiverAddress->isExportCountry = false;
    $request->receiverAddress->lastName = 'Dickens';
    $request->receiverAddress->name2 = 'labore';
    $request->receiverAddress->state = 'totam';
    $request->receiverAddress->street = '3727 Heathcote Point';
    $request->receiverAddress->telephone = 'impedit';
    $request->receiverAddress->zip = 'delectus';
    $request->shipDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-30T14:55:17.083Z');
    $request->totalNet = 1415.06;
    $request->weightInGram = 9974.37;
    $request->shippingCarrier = BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnum::SIXTEEN;

    $response = $sdk->shipments->shipmentPostShipmentForm($request);

    if ($response->shipmentPostShipmentForm200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shipmentPostShipmentJson

Creates a new shipment with the selected Shippingprovider

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesShippingShipmentDataDimensions;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelInput();
    $request->clientReference = 'nemo';
    $request->content = 'reprehenderit';
    $request->customerNumber = 'aperiam';
    $request->dimension = new BillbeeInterfacesShippingShipmentDataDimensions();
    $request->dimension->height = 4864.1;
    $request->dimension->length = 3252.97;
    $request->dimension->width = 4483.69;
    $request->orderCurrencyCode = 'ducimus';
    $request->orderSum = 5678.46;
    $request->printerIdForExportDocs = 172195;
    $request->printerName = 'error';
    $request->productCode = 'veritatis';
    $request->providerName = 'ducimus';
    $request->receiverAddress = new BillbeeInterfacesBillbeeAPIModelShipmentAddressAPIModelInput();
    $request->receiverAddress->addressAddition = 'voluptate';
    $request->receiverAddress->city = 'Vancouver';
    $request->receiverAddress->company = 'Ruecker - Jacobs';
    $request->receiverAddress->countryCode = 'GD';
    $request->receiverAddress->countryCodeIso3 = 'commodi';
    $request->receiverAddress->email = 'Ramona.Predovic@hotmail.com';
    $request->receiverAddress->firstName = 'Cory';
    $request->receiverAddress->housenumber = 'modi';
    $request->receiverAddress->isExportCountry = false;
    $request->receiverAddress->lastName = 'Beier';
    $request->receiverAddress->name2 = 'sint';
    $request->receiverAddress->state = 'vero';
    $request->receiverAddress->street = '97193 Daniel Ridge';
    $request->receiverAddress->telephone = 'dicta';
    $request->receiverAddress->zip = 'consequuntur';
    $request->shipDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-03T16:40:26.532Z');
    $request->totalNet = 568.77;
    $request->weightInGram = 4973.57;
    $request->shippingCarrier = BillbeeInterfacesBillbeeAPIModelCreateShipmentAPIModelShippingCarrierEnum::EIGHTEEN;

    $response = $sdk->shipments->shipmentPostShipmentJson($request);

    if ($response->shipmentPostShipmentJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shipmentPostShipmentRaw

Creates a new shipment with the selected Shippingprovider

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'veritatis'

    $response = $sdk->shipments->shipmentPostShipmentRaw($request);

    if ($response->shipmentPostShipmentRaw200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shipmentShipWithLabelForm

Creates a shipment for an order in billbee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiShipmentWithLabel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesShippingShipmentDataDimensions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RechnungsdruckWebAppControllersApiShipmentWithLabel();
    $request->changeStateToSend = false;
    $request->clientReference = 'quasi';
    $request->dimension = new BillbeeInterfacesShippingShipmentDataDimensions();
    $request->dimension->height = 3864.47;
    $request->dimension->length = 8634.71;
    $request->dimension->width = 7294.48;
    $request->orderId = 566506;
    $request->printerName = 'occaecati';
    $request->productId = 367917;
    $request->providerId = 306382;
    $request->shipDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-05T02:33:31.473Z');
    $request->weightInGram = 757364;

    $response = $sdk->shipments->shipmentShipWithLabelForm($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shipmentShipWithLabelJson

Creates a shipment for an order in billbee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiShipmentWithLabel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesShippingShipmentDataDimensions;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RechnungsdruckWebAppControllersApiShipmentWithLabel();
    $request->changeStateToSend = false;
    $request->clientReference = 'sint';
    $request->dimension = new BillbeeInterfacesShippingShipmentDataDimensions();
    $request->dimension->height = 3145.73;
    $request->dimension->length = 9449.5;
    $request->dimension->width = 6573.19;
    $request->orderId = 559774;
    $request->printerName = 'totam';
    $request->productId = 564667;
    $request->providerId = 484966;
    $request->shipDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-06T01:49:09.565Z');
    $request->weightInGram = 104078;

    $response = $sdk->shipments->shipmentShipWithLabelJson($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shipmentShipWithLabelRaw

Creates a shipment for an order in billbee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'quos'

    $response = $sdk->shipments->shipmentShipWithLabelRaw($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
