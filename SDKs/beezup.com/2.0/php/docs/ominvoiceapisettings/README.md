# omInvoiceAPISettings

### Available Operations

* [getOrderInvoiceDesignSettings](#getorderinvoicedesignsettings) - Get Order Invoice design settings
* [getOrderInvoiceDesignSettingsPreview](#getorderinvoicedesignsettingspreview) - View a preview an Order Invoice using custom design settings
* [getOrderInvoiceGeneralSettings](#getorderinvoicegeneralsettings) - Get Order Invoice general settings
* [saveOrderInvoiceDesignSettings](#saveorderinvoicedesignsettings) - Save Order Invoice design settings
* [saveOrderInvoiceGeneralSettings](#saveorderinvoicegeneralsettings) - Save Order Invoice general settings

## getOrderInvoiceDesignSettings

Get Order Invoice design settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->omInvoiceAPISettings->getOrderInvoiceDesignSettings();

    if ($response->orderInvoiceDesignSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrderInvoiceDesignSettingsPreview

View a preview an Order Invoice using custom design settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderInvoiceDesignSettingsPreviewRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderInvoiceDesignSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderInvoiceDesignSettingsPreviewRequest();
    $request->acceptEncoding = 'consequatur';
    $request->orderInvoiceDesignSettings = new OrderInvoiceDesignSettings();
    $request->orderInvoiceDesignSettings->footerContentHtml = 'incidunt';
    $request->orderInvoiceDesignSettings->headerContentHtml = 'reiciendis';

    $response = $sdk->omInvoiceAPISettings->getOrderInvoiceDesignSettingsPreview($request);

    if ($response->getOrderInvoiceDesignPreviewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrderInvoiceGeneralSettings

Get Order Invoice general settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->omInvoiceAPISettings->getOrderInvoiceGeneralSettings();

    if ($response->getOrderInvoiceGeneralSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveOrderInvoiceDesignSettings

Save Order Invoice design settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OrderInvoiceDesignSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderInvoiceDesignSettings();
    $request->footerContentHtml = 'dolorem';
    $request->headerContentHtml = 'harum';

    $response = $sdk->omInvoiceAPISettings->saveOrderInvoiceDesignSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## saveOrderInvoiceGeneralSettings

Save Order Invoice general settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\OrderInvoiceGeneralSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderInvoiceGeneralSettings();
    $request->cultureName = 'en';
    $request->invoicePrefix = 'TOTO';
    $request->invoiceStartingSequenceNumber = 879;
    $request->productVATPercent = 4.0;
    $request->shippingVATPercent = 8.0;

    $response = $sdk->omInvoiceAPISettings->saveOrderInvoiceGeneralSettings($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
