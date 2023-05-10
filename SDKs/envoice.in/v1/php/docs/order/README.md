# order

### Available Operations

* [orderApiAll](#orderapiall) - Return all orders for the account
* [orderApiChangeShippingDetailsForm](#orderapichangeshippingdetailsform) - Change order shipping details
* [orderApiChangeShippingDetailsJson](#orderapichangeshippingdetailsjson) - Change order shipping details
* [orderApiChangeShippingDetailsRaw](#orderapichangeshippingdetailsraw) - Change order shipping details
* [orderApiChangeStatusForm](#orderapichangestatusform) - Change order status
* [orderApiChangeStatusJson](#orderapichangestatusjson) - Change order status
* [orderApiChangeStatusRaw](#orderapichangestatusraw) - Change order status
* [orderApiDeleteForm](#orderapideleteform) - Delete an existing order
* [orderApiDeleteJson](#orderapideletejson) - Delete an existing order
* [orderApiDeleteRaw](#orderapideleteraw) - Delete an existing order
* [orderApiDetails](#orderapidetails) - Return order details
* [orderApiNewForm](#orderapinewform) - Create an order
* [orderApiNewJson](#orderapinewjson) - Create an order
* [orderApiNewRaw](#orderapinewraw) - Create an order

## orderApiAll

Return all orders for the account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiAllRequest();
    $request->queryOptionsPage = 209157;
    $request->queryOptionsPageSize = 292147;
    $request->xAuthKey = 'labore';
    $request->xAuthSecret = 'adipisci';

    $response = $sdk->order->orderApiAll($request);

    if ($response->listResultOrderDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiChangeShippingDetailsForm

Change order shipping details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiChangeShippingDetailsFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderShippingDetailsApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiChangeShippingDetailsFormRequest();
    $request->orderShippingDetailsApiModel = new OrderShippingDetailsApiModel();
    $request->orderShippingDetailsApiModel->address = '100 Ward Avenue';
    $request->orderShippingDetailsApiModel->countryId = 669917;
    $request->orderShippingDetailsApiModel->email = 'Ozella70@hotmail.com';
    $request->orderShippingDetailsApiModel->name = 'Alan Bergnaum';
    $request->orderShippingDetailsApiModel->phoneNumber = 'occaecati';
    $request->orderId = 977496;
    $request->xAuthKey = 'quisquam';
    $request->xAuthSecret = 'vero';

    $response = $sdk->order->orderApiChangeShippingDetailsForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiChangeShippingDetailsJson

Change order shipping details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiChangeShippingDetailsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderShippingDetailsApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiChangeShippingDetailsJsonRequest();
    $request->orderShippingDetailsApiModel = new OrderShippingDetailsApiModel();
    $request->orderShippingDetailsApiModel->address = '3294 Shana Villages';
    $request->orderShippingDetailsApiModel->countryId = 492268;
    $request->orderShippingDetailsApiModel->email = 'Michel_Schmidt@hotmail.com';
    $request->orderShippingDetailsApiModel->name = 'Hugo Kuphal';
    $request->orderShippingDetailsApiModel->phoneNumber = 'illum';
    $request->orderId = 194342;
    $request->xAuthKey = 'natus';
    $request->xAuthSecret = 'impedit';

    $response = $sdk->order->orderApiChangeShippingDetailsJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiChangeShippingDetailsRaw

Change order shipping details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiChangeShippingDetailsRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiChangeShippingDetailsRawRequest();
    $request->requestBody = 'aut';
    $request->orderId = 974259;
    $request->xAuthKey = 'exercitationem';
    $request->xAuthSecret = 'nulla';

    $response = $sdk->order->orderApiChangeShippingDetailsRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiChangeStatusForm

Change order status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiChangeStatusFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOrderStatusApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOrderStatusApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiChangeStatusFormRequest();
    $request->changeOrderStatusApiModel = new ChangeOrderStatusApiModel();
    $request->changeOrderStatusApiModel->id = 148141;
    $request->changeOrderStatusApiModel->reason = 'porro';
    $request->changeOrderStatusApiModel->status = ChangeOrderStatusApiModelStatusEnum::FAILED;
    $request->xAuthKey = 'doloribus';
    $request->xAuthSecret = 'iusto';

    $response = $sdk->order->orderApiChangeStatusForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiChangeStatusJson

Change order status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiChangeStatusJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOrderStatusApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ChangeOrderStatusApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiChangeStatusJsonRequest();
    $request->changeOrderStatusApiModel = new ChangeOrderStatusApiModel();
    $request->changeOrderStatusApiModel->id = 753570;
    $request->changeOrderStatusApiModel->reason = 'ducimus';
    $request->changeOrderStatusApiModel->status = ChangeOrderStatusApiModelStatusEnum::PENDING_PAYMENT;
    $request->xAuthKey = 'officia';
    $request->xAuthSecret = 'tempora';

    $response = $sdk->order->orderApiChangeStatusJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiChangeStatusRaw

Change order status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiChangeStatusRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiChangeStatusRawRequest();
    $request->requestBody = 'ipsam';
    $request->xAuthKey = 'ea';
    $request->xAuthSecret = 'aspernatur';

    $response = $sdk->order->orderApiChangeStatusRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiDeleteForm

Delete an existing order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiDeleteFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiDeleteFormRequest();
    $request->orderDeleteApiModel = new OrderDeleteApiModel();
    $request->orderDeleteApiModel->id = 428224;
    $request->xAuthKey = 'possimus';
    $request->xAuthSecret = 'magnam';

    $response = $sdk->order->orderApiDeleteForm($request);

    if ($response->orderApiDeleteForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiDeleteJson

Delete an existing order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiDeleteJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiDeleteJsonRequest();
    $request->orderDeleteApiModel = new OrderDeleteApiModel();
    $request->orderDeleteApiModel->id = 189848;
    $request->xAuthKey = 'ex';
    $request->xAuthSecret = 'laudantium';

    $response = $sdk->order->orderApiDeleteJson($request);

    if ($response->orderApiDeleteJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiDeleteRaw

Delete an existing order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiDeleteRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiDeleteRawRequest();
    $request->requestBody = 'dicta';
    $request->xAuthKey = 'dolor';
    $request->xAuthSecret = 'maiores';

    $response = $sdk->order->orderApiDeleteRaw($request);

    if ($response->orderApiDeleteRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiDetails

Return order details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiDetailsRequest();
    $request->id = 97844;
    $request->xAuthKey = 'ex';
    $request->xAuthSecret = 'nulla';

    $response = $sdk->order->orderApiDetails($request);

    if ($response->orderFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiNewForm

Create an order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiNewFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderCreateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\OrderAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\OrderAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\OrderBillingDetailsApiModel;
use \OpenAPI\OpenAPI\Models\Shared\OrderShippingDetailsApiModel;
use \OpenAPI\OpenAPI\Models\Shared\OrderCreateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiNewFormRequest();
    $request->orderCreateApiModel = new OrderCreateApiModel();
    $request->orderCreateApiModel->afterPaymentDescription = 'excepturi';
    $request->orderCreateApiModel->attachments = [
        new OrderAttachmentApiModel(),
        new OrderAttachmentApiModel(),
        new OrderAttachmentApiModel(),
        new OrderAttachmentApiModel(),
    ];
    $request->orderCreateApiModel->couponCode = 'nostrum';
    $request->orderCreateApiModel->currencyId = 960835;
    $request->orderCreateApiModel->description = 'quisquam';
    $request->orderCreateApiModel->discountAmount = 9065.56;
    $request->orderCreateApiModel->items = [
        new OrderItemApiModel(),
        new OrderItemApiModel(),
    ];
    $request->orderCreateApiModel->name = 'Lewis Hartmann II';
    $request->orderCreateApiModel->note = 'ea';
    $request->orderCreateApiModel->orderBillingDetails = new OrderBillingDetailsApiModel();
    $request->orderCreateApiModel->orderBillingDetails->address = '291 Amir Villages';
    $request->orderCreateApiModel->orderBillingDetails->countryId = 725595;
    $request->orderCreateApiModel->orderBillingDetails->email = 'Aditya.Lesch14@gmail.com';
    $request->orderCreateApiModel->orderBillingDetails->name = 'Miss Dennis Friesen';
    $request->orderCreateApiModel->orderBillingDetails->phoneNumber = 'placeat';
    $request->orderCreateApiModel->orderShippingDetails = new OrderShippingDetailsApiModel();
    $request->orderCreateApiModel->orderShippingDetails->address = '44758 Hoeger Ridge';
    $request->orderCreateApiModel->orderShippingDetails->countryId = 96549;
    $request->orderCreateApiModel->orderShippingDetails->email = 'Derrick.Cole@gmail.com';
    $request->orderCreateApiModel->orderShippingDetails->name = 'Megan Kuhlman';
    $request->orderCreateApiModel->orderShippingDetails->phoneNumber = 'esse';
    $request->orderCreateApiModel->productId = 524593;
    $request->orderCreateApiModel->referral = 'fuga';
    $request->orderCreateApiModel->shippingAmount = 4420.15;
    $request->orderCreateApiModel->shippingDescription = 'quidem';
    $request->orderCreateApiModel->status = OrderCreateApiModelStatusEnum::REFUNDED;
    $request->orderCreateApiModel->subTotalAmount = 2835.19;
    $request->orderCreateApiModel->taxAmount = 4334.39;
    $request->orderCreateApiModel->totalAmount = 3799.27;
    $request->orderCreateApiModel->whatHappensNextDescription = 'assumenda';
    $request->xAuthKey = 'eos';
    $request->xAuthSecret = 'praesentium';

    $response = $sdk->order->orderApiNewForm($request);

    if ($response->orderApiNewForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiNewJson

Create an order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiNewJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderCreateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\OrderAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\OrderAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OrderItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\OrderBillingDetailsApiModel;
use \OpenAPI\OpenAPI\Models\Shared\OrderShippingDetailsApiModel;
use \OpenAPI\OpenAPI\Models\Shared\OrderCreateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiNewJsonRequest();
    $request->orderCreateApiModel = new OrderCreateApiModel();
    $request->orderCreateApiModel->afterPaymentDescription = 'quisquam';
    $request->orderCreateApiModel->attachments = [
        new OrderAttachmentApiModel(),
    ];
    $request->orderCreateApiModel->couponCode = 'ipsa';
    $request->orderCreateApiModel->currencyId = 660040;
    $request->orderCreateApiModel->description = 'quidem';
    $request->orderCreateApiModel->discountAmount = 2065.94;
    $request->orderCreateApiModel->items = [
        new OrderItemApiModel(),
        new OrderItemApiModel(),
        new OrderItemApiModel(),
        new OrderItemApiModel(),
    ];
    $request->orderCreateApiModel->name = 'Salvatore Parker';
    $request->orderCreateApiModel->note = 'voluptas';
    $request->orderCreateApiModel->orderBillingDetails = new OrderBillingDetailsApiModel();
    $request->orderCreateApiModel->orderBillingDetails->address = '50283 Clifton Shoals';
    $request->orderCreateApiModel->orderBillingDetails->countryId = 459856;
    $request->orderCreateApiModel->orderBillingDetails->email = 'Alvena.Rau7@hotmail.com';
    $request->orderCreateApiModel->orderBillingDetails->name = 'Christy Tillman';
    $request->orderCreateApiModel->orderBillingDetails->phoneNumber = 'occaecati';
    $request->orderCreateApiModel->orderShippingDetails = new OrderShippingDetailsApiModel();
    $request->orderCreateApiModel->orderShippingDetails->address = '9164 Ottilie Key';
    $request->orderCreateApiModel->orderShippingDetails->countryId = 556429;
    $request->orderCreateApiModel->orderShippingDetails->email = 'Carol68@yahoo.com';
    $request->orderCreateApiModel->orderShippingDetails->name = 'Randall Lindgren';
    $request->orderCreateApiModel->orderShippingDetails->phoneNumber = 'nisi';
    $request->orderCreateApiModel->productId = 147014;
    $request->orderCreateApiModel->referral = 'sapiente';
    $request->orderCreateApiModel->shippingAmount = 1598.7;
    $request->orderCreateApiModel->shippingDescription = 'ratione';
    $request->orderCreateApiModel->status = OrderCreateApiModelStatusEnum::PROCESSING;
    $request->orderCreateApiModel->subTotalAmount = 9039.84;
    $request->orderCreateApiModel->taxAmount = 5789.22;
    $request->orderCreateApiModel->totalAmount = 5438.06;
    $request->orderCreateApiModel->whatHappensNextDescription = 'et';
    $request->xAuthKey = 'esse';
    $request->xAuthSecret = 'eveniet';

    $response = $sdk->order->orderApiNewJson($request);

    if ($response->orderApiNewJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## orderApiNewRaw

Create an order

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiNewRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiNewRawRequest();
    $request->requestBody = 'accusamus';
    $request->xAuthKey = 'veritatis';
    $request->xAuthSecret = 'esse';

    $response = $sdk->order->orderApiNewRaw($request);

    if ($response->orderApiNewRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
