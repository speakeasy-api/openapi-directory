# product

### Available Operations

* [productApiAll](#productapiall) - Return all products for the account
* [productApiDeleteForm](#productapideleteform) - Delete an existing product
* [productApiDeleteJson](#productapideletejson) - Delete an existing product
* [productApiDeleteRaw](#productapideleteraw) - Delete an existing product
* [productApiDetails](#productapidetails) - Return product details
* [productApiNewForm](#productapinewform) - Create a product
* [productApiNewJson](#productapinewjson) - Create a product
* [productApiNewRaw](#productapinewraw) - Create a product
* [productApiUpdateForm](#productapiupdateform) - Update an existing product
* [productApiUpdateJson](#productapiupdatejson) - Update an existing product
* [productApiUpdateRaw](#productapiupdateraw) - Update an existing product

## productApiAll

Return all products for the account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductApiAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductApiAllRequest();
    $request->queryOptionsPage = 425402;
    $request->queryOptionsPageSize = 64435;
    $request->xAuthKey = 'quae';
    $request->xAuthSecret = 'modi';

    $response = $sdk->product->productApiAll($request);

    if ($response->listResultProductDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productApiDeleteForm

Delete an existing product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductApiDeleteFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductApiDeleteFormRequest();
    $request->productDeleteApiModel = new ProductDeleteApiModel();
    $request->productDeleteApiModel->id = 208253;
    $request->xAuthKey = 'exercitationem';
    $request->xAuthSecret = 'itaque';

    $response = $sdk->product->productApiDeleteForm($request);

    if ($response->productApiDeleteForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productApiDeleteJson

Delete an existing product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductApiDeleteJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductApiDeleteJsonRequest();
    $request->productDeleteApiModel = new ProductDeleteApiModel();
    $request->productDeleteApiModel->id = 88248;
    $request->xAuthKey = 'ipsum';
    $request->xAuthSecret = 'unde';

    $response = $sdk->product->productApiDeleteJson($request);

    if ($response->productApiDeleteJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productApiDeleteRaw

Delete an existing product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductApiDeleteRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductApiDeleteRawRequest();
    $request->requestBody = 'nulla';
    $request->xAuthKey = 'distinctio';
    $request->xAuthSecret = 'maxime';

    $response = $sdk->product->productApiDeleteRaw($request);

    if ($response->productApiDeleteRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productApiDetails

Return product details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductApiDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductApiDetailsRequest();
    $request->id = 157222;
    $request->xAuthKey = 'quia';
    $request->xAuthSecret = 'nostrum';

    $response = $sdk->product->productApiDetails($request);

    if ($response->productFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productApiNewForm

Create a product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductApiNewFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductCreateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductCouponApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductDiscountApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductGatewayApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductCreateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductApiNewFormRequest();
    $request->productCreateApiModel = new ProductCreateApiModel();
    $request->productCreateApiModel->afterPaymentDescription = 'omnis';
    $request->productCreateApiModel->attachments = [
        new ProductAttachmentApiModel(),
        new ProductAttachmentApiModel(),
        new ProductAttachmentApiModel(),
    ];
    $request->productCreateApiModel->buttonCallToAction = 'dicta';
    $request->productCreateApiModel->coupons = [
        new ProductCouponApiModel(),
        new ProductCouponApiModel(),
        new ProductCouponApiModel(),
    ];
    $request->productCreateApiModel->currencyId = 727888;
    $request->productCreateApiModel->description = 'fugiat';
    $request->productCreateApiModel->discounts = [
        new ProductDiscountApiModel(),
        new ProductDiscountApiModel(),
        new ProductDiscountApiModel(),
    ];
    $request->productCreateApiModel->isFeatured = false;
    $request->productCreateApiModel->items = [
        new ProductItemApiModel(),
        new ProductItemApiModel(),
        new ProductItemApiModel(),
    ];
    $request->productCreateApiModel->name = 'Dr. Paul Kris Jr.';
    $request->productCreateApiModel->paymentGateways = [
        new ProductGatewayApiModel(),
        new ProductGatewayApiModel(),
        new ProductGatewayApiModel(),
    ];
    $request->productCreateApiModel->shippingAmount = 2928.88;
    $request->productCreateApiModel->shippingDescription = 'eligendi';
    $request->productCreateApiModel->status = ProductCreateApiModelStatusEnum::INACTIVE;
    $request->productCreateApiModel->whatHappensNextDescription = 'voluptatem';
    $request->xAuthKey = 'autem';
    $request->xAuthSecret = 'esse';

    $response = $sdk->product->productApiNewForm($request);

    if ($response->productApiNewForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productApiNewJson

Create a product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductApiNewJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductCreateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductCouponApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductDiscountApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductGatewayApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductCreateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductApiNewJsonRequest();
    $request->productCreateApiModel = new ProductCreateApiModel();
    $request->productCreateApiModel->afterPaymentDescription = 'dolores';
    $request->productCreateApiModel->attachments = [
        new ProductAttachmentApiModel(),
        new ProductAttachmentApiModel(),
        new ProductAttachmentApiModel(),
        new ProductAttachmentApiModel(),
    ];
    $request->productCreateApiModel->buttonCallToAction = 'beatae';
    $request->productCreateApiModel->coupons = [
        new ProductCouponApiModel(),
        new ProductCouponApiModel(),
        new ProductCouponApiModel(),
    ];
    $request->productCreateApiModel->currencyId = 817339;
    $request->productCreateApiModel->description = 'corrupti';
    $request->productCreateApiModel->discounts = [
        new ProductDiscountApiModel(),
        new ProductDiscountApiModel(),
    ];
    $request->productCreateApiModel->isFeatured = false;
    $request->productCreateApiModel->items = [
        new ProductItemApiModel(),
        new ProductItemApiModel(),
        new ProductItemApiModel(),
    ];
    $request->productCreateApiModel->name = 'Terence Reynolds';
    $request->productCreateApiModel->paymentGateways = [
        new ProductGatewayApiModel(),
        new ProductGatewayApiModel(),
    ];
    $request->productCreateApiModel->shippingAmount = 3735.11;
    $request->productCreateApiModel->shippingDescription = 'rerum';
    $request->productCreateApiModel->status = ProductCreateApiModelStatusEnum::NOT_AVAILABLE;
    $request->productCreateApiModel->whatHappensNextDescription = 'corporis';
    $request->xAuthKey = 'officiis';
    $request->xAuthSecret = 'voluptatibus';

    $response = $sdk->product->productApiNewJson($request);

    if ($response->productApiNewJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productApiNewRaw

Create a product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductApiNewRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductApiNewRawRequest();
    $request->requestBody = 'cum';
    $request->xAuthKey = 'at';
    $request->xAuthSecret = 'alias';

    $response = $sdk->product->productApiNewRaw($request);

    if ($response->productApiNewRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productApiUpdateForm

Update an existing product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductApiUpdateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductUpdateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductCouponApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductDiscountApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductGatewayApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductUpdateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductApiUpdateFormRequest();
    $request->productUpdateApiModel = new ProductUpdateApiModel();
    $request->productUpdateApiModel->afterPaymentDescription = 'quia';
    $request->productUpdateApiModel->attachments = [
        new ProductAttachmentApiModel(),
        new ProductAttachmentApiModel(),
        new ProductAttachmentApiModel(),
    ];
    $request->productUpdateApiModel->buttonCallToAction = 'fuga';
    $request->productUpdateApiModel->coupons = [
        new ProductCouponApiModel(),
        new ProductCouponApiModel(),
        new ProductCouponApiModel(),
        new ProductCouponApiModel(),
    ];
    $request->productUpdateApiModel->currencyId = 34070;
    $request->productUpdateApiModel->description = 'expedita';
    $request->productUpdateApiModel->discounts = [
        new ProductDiscountApiModel(),
        new ProductDiscountApiModel(),
        new ProductDiscountApiModel(),
        new ProductDiscountApiModel(),
    ];
    $request->productUpdateApiModel->id = 177005;
    $request->productUpdateApiModel->isFeatured = false;
    $request->productUpdateApiModel->items = [
        new ProductItemApiModel(),
        new ProductItemApiModel(),
        new ProductItemApiModel(),
        new ProductItemApiModel(),
    ];
    $request->productUpdateApiModel->name = 'Mrs. Mabel Connelly';
    $request->productUpdateApiModel->paymentGateways = [
        new ProductGatewayApiModel(),
        new ProductGatewayApiModel(),
        new ProductGatewayApiModel(),
        new ProductGatewayApiModel(),
    ];
    $request->productUpdateApiModel->shippingAmount = 2393.37;
    $request->productUpdateApiModel->shippingDescription = 'recusandae';
    $request->productUpdateApiModel->status = ProductUpdateApiModelStatusEnum::NOT_AVAILABLE;
    $request->productUpdateApiModel->whatHappensNextDescription = 'ut';
    $request->xAuthKey = 'quidem';
    $request->xAuthSecret = 'quis';

    $response = $sdk->product->productApiUpdateForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productApiUpdateJson

Update an existing product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductApiUpdateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProductUpdateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductCouponApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductDiscountApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductGatewayApiModel;
use \OpenAPI\OpenAPI\Models\Shared\ProductUpdateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductApiUpdateJsonRequest();
    $request->productUpdateApiModel = new ProductUpdateApiModel();
    $request->productUpdateApiModel->afterPaymentDescription = 'beatae';
    $request->productUpdateApiModel->attachments = [
        new ProductAttachmentApiModel(),
        new ProductAttachmentApiModel(),
        new ProductAttachmentApiModel(),
    ];
    $request->productUpdateApiModel->buttonCallToAction = 'molestiae';
    $request->productUpdateApiModel->coupons = [
        new ProductCouponApiModel(),
        new ProductCouponApiModel(),
        new ProductCouponApiModel(),
        new ProductCouponApiModel(),
    ];
    $request->productUpdateApiModel->currencyId = 585593;
    $request->productUpdateApiModel->description = 'fugit';
    $request->productUpdateApiModel->discounts = [
        new ProductDiscountApiModel(),
        new ProductDiscountApiModel(),
    ];
    $request->productUpdateApiModel->id = 256916;
    $request->productUpdateApiModel->isFeatured = false;
    $request->productUpdateApiModel->items = [
        new ProductItemApiModel(),
    ];
    $request->productUpdateApiModel->name = 'Oliver Kulas';
    $request->productUpdateApiModel->paymentGateways = [
        new ProductGatewayApiModel(),
        new ProductGatewayApiModel(),
    ];
    $request->productUpdateApiModel->shippingAmount = 1855.18;
    $request->productUpdateApiModel->shippingDescription = 'expedita';
    $request->productUpdateApiModel->status = ProductUpdateApiModelStatusEnum::NOT_AVAILABLE;
    $request->productUpdateApiModel->whatHappensNextDescription = 'cupiditate';
    $request->xAuthKey = 'minima';
    $request->xAuthSecret = 'placeat';

    $response = $sdk->product->productApiUpdateJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## productApiUpdateRaw

Update an existing product

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProductApiUpdateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProductApiUpdateRawRequest();
    $request->requestBody = 'enim';
    $request->xAuthKey = 'neque';
    $request->xAuthSecret = 'in';

    $response = $sdk->product->productApiUpdateRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
