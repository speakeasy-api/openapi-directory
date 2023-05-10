# tax

### Available Operations

* [taxApiAll](#taxapiall) - Return all taxes for the account
* [taxApiDeleteForm](#taxapideleteform) - Delete an existing tax
* [taxApiDeleteJson](#taxapideletejson) - Delete an existing tax
* [taxApiDeleteRaw](#taxapideleteraw) - Delete an existing tax
* [taxApiNewForm](#taxapinewform) - Create a tax
* [taxApiNewJson](#taxapinewjson) - Create a tax
* [taxApiNewRaw](#taxapinewraw) - Create a tax
* [taxApiUpdateForm](#taxapiupdateform) - Update an existing tax
* [taxApiUpdateJson](#taxapiupdatejson) - Update an existing tax
* [taxApiUpdateRaw](#taxapiupdateraw) - Update an existing tax

## taxApiAll

Return all taxes for the account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaxApiAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxApiAllRequest();
    $request->xAuthKey = 'minus';
    $request->xAuthSecret = 'eum';

    $response = $sdk->tax->taxApiAll($request);

    if ($response->taxDetailsApiModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxApiDeleteForm

Delete an existing tax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaxApiDeleteFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxApiDeleteFormRequest();
    $request->taxDeleteApiModel = new TaxDeleteApiModel();
    $request->taxDeleteApiModel->id = 266408;
    $request->xAuthKey = 'corporis';
    $request->xAuthSecret = 'magnam';

    $response = $sdk->tax->taxApiDeleteForm($request);

    if ($response->taxApiDeleteForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxApiDeleteJson

Delete an existing tax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaxApiDeleteJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxApiDeleteJsonRequest();
    $request->taxDeleteApiModel = new TaxDeleteApiModel();
    $request->taxDeleteApiModel->id = 914971;
    $request->xAuthKey = 'maiores';
    $request->xAuthSecret = 'tempore';

    $response = $sdk->tax->taxApiDeleteJson($request);

    if ($response->taxApiDeleteJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxApiDeleteRaw

Delete an existing tax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaxApiDeleteRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxApiDeleteRawRequest();
    $request->requestBody = 'aperiam';
    $request->xAuthKey = 'libero';
    $request->xAuthSecret = 'ratione';

    $response = $sdk->tax->taxApiDeleteRaw($request);

    if ($response->taxApiDeleteRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxApiNewForm

Create a tax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaxApiNewFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxCreateApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxApiNewFormRequest();
    $request->taxCreateApiModel = new TaxCreateApiModel();
    $request->taxCreateApiModel->name = 'Deanna Mayert';
    $request->taxCreateApiModel->percentage = 2420.99;
    $request->xAuthKey = 'minus';
    $request->xAuthSecret = 'fuga';

    $response = $sdk->tax->taxApiNewForm($request);

    if ($response->taxApiNewForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxApiNewJson

Create a tax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaxApiNewJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxCreateApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxApiNewJsonRequest();
    $request->taxCreateApiModel = new TaxCreateApiModel();
    $request->taxCreateApiModel->name = 'Jodi Russel';
    $request->taxCreateApiModel->percentage = 8786.01;
    $request->xAuthKey = 'odit';
    $request->xAuthSecret = 'repellat';

    $response = $sdk->tax->taxApiNewJson($request);

    if ($response->taxApiNewJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxApiNewRaw

Create a tax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaxApiNewRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxApiNewRawRequest();
    $request->requestBody = 'pariatur';
    $request->xAuthKey = 'nemo';
    $request->xAuthSecret = 'reprehenderit';

    $response = $sdk->tax->taxApiNewRaw($request);

    if ($response->taxApiNewRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxApiUpdateForm

Update an existing tax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaxApiUpdateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxUpdateApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxApiUpdateFormRequest();
    $request->taxUpdateApiModel = new TaxUpdateApiModel();
    $request->taxUpdateApiModel->id = 45234;
    $request->taxUpdateApiModel->name = 'Cathy Kirlin';
    $request->taxUpdateApiModel->percentage = 1721.95;
    $request->xAuthKey = 'error';
    $request->xAuthSecret = 'veritatis';

    $response = $sdk->tax->taxApiUpdateForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxApiUpdateJson

Update an existing tax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaxApiUpdateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaxUpdateApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxApiUpdateJsonRequest();
    $request->taxUpdateApiModel = new TaxUpdateApiModel();
    $request->taxUpdateApiModel->id = 498180;
    $request->taxUpdateApiModel->name = 'Meredith Watsica';
    $request->taxUpdateApiModel->percentage = 4014.28;
    $request->xAuthKey = 'quaerat';
    $request->xAuthSecret = 'commodi';

    $response = $sdk->tax->taxApiUpdateJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taxApiUpdateRaw

Update an existing tax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaxApiUpdateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaxApiUpdateRawRequest();
    $request->requestBody = 'officiis';
    $request->xAuthKey = 'placeat';
    $request->xAuthSecret = 'quidem';

    $response = $sdk->tax->taxApiUpdateRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
