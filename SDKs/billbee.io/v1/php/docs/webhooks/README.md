# webhooks

### Available Operations

* [webHookManagementDelete](#webhookmanagementdelete) - Deletes an existing WebHook registration.
* [webHookManagementDeleteAll](#webhookmanagementdeleteall) - Deletes all existing WebHook registrations.
* [webHookManagementGet](#webhookmanagementget) - Gets all registered WebHooks for a given user.
* [webHookManagementGetFilters](#webhookmanagementgetfilters) - Returns a list of all known filters you can use to register webhooks
* [webHookManagementLookup](#webhookmanagementlookup) - Looks up a registered WebHook with the given {id} for a given user.
* [webHookManagementPost](#webhookmanagementpost) - Registers a new WebHook for a given user.
* [webHookManagementPut](#webhookmanagementput) - Updates an existing WebHook registration.

## webHookManagementDelete

Deletes an existing WebHook registration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebHookManagementDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebHookManagementDeleteRequest();
    $request->id = '9dbb30fc-b33e-4a05-9b19-7cd44e2f52d8';

    $response = $sdk->webhooks->webHookManagementDelete($request);

    if ($response->webHookManagementDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webHookManagementDeleteAll

Deletes all existing WebHook registrations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->webhooks->webHookManagementDeleteAll();

    if ($response->webHookManagementDeleteAll200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webHookManagementGet

Gets all registered WebHooks for a given user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->webhooks->webHookManagementGet();

    if ($response->rechnungsdruckWebAppControllersApiWebHookApiModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webHookManagementGetFilters

Returns a list of all known filters you can use to register webhooks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->webhooks->webHookManagementGetFilters();

    if ($response->webHookManagementGetFilters200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webHookManagementLookup

Looks up a registered WebHook with the given {id} for a given user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebHookManagementLookupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebHookManagementLookupRequest();
    $request->id = '2d3513bb-6f48-4b65-abcd-b35ff2e4b275';

    $response = $sdk->webhooks->webHookManagementLookup($request);

    if ($response->rechnungsdruckWebAppControllersApiWebHookApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webHookManagementPost

Registers a new WebHook for a given user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiWebHookApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RechnungsdruckWebAppControllersApiWebHookApiModel();
    $request->description = 'neque';
    $request->filters = [
        'est',
        'rem',
    ];
    $request->headers = [
        'fugiat' => 'unde',
        'officiis' => 'ducimus',
        'dolor' => 'dicta',
        'error' => 'porro',
    ];
    $request->id = '177d525f-77b1-414e-ab52-ff785fc37814';
    $request->isPaused = false;
    $request->properties = [
        'aliquam' => [
            'provident' => 'laudantium',
            'repudiandae' => 'consequatur',
            'maxime' => 'aspernatur',
            'nam' => 'expedita',
        ],
        'quas' => [
            'repudiandae' => 'rerum',
            'dignissimos' => 'corporis',
            'vero' => 'similique',
        ],
        'repellendus' => [
            'dolorem' => 'commodi',
            'impedit' => 'commodi',
        ],
        'aut' => [
            'ad' => 'quae',
        ],
    ];
    $request->secret = 'amet';
    $request->webHookUri = 'illum';

    $response = $sdk->webhooks->webHookManagementPost($request);

    if ($response->rechnungsdruckWebAppControllersApiWebHookApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## webHookManagementPut

Updates an existing WebHook registration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebHookManagementPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiWebHookApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebHookManagementPutRequest();
    $request->rechnungsdruckWebAppControllersApiWebHookApiModel = new RechnungsdruckWebAppControllersApiWebHookApiModel();
    $request->rechnungsdruckWebAppControllersApiWebHookApiModel->description = 'praesentium';
    $request->rechnungsdruckWebAppControllersApiWebHookApiModel->filters = [
        'cum',
        'amet',
        'quasi',
    ];
    $request->rechnungsdruckWebAppControllersApiWebHookApiModel->headers = [
        'laudantium' => 'doloremque',
    ];
    $request->rechnungsdruckWebAppControllersApiWebHookApiModel->id = 'f739ae9e-057e-4b80-9e28-10331f3981d4';
    $request->rechnungsdruckWebAppControllersApiWebHookApiModel->isPaused = false;
    $request->rechnungsdruckWebAppControllersApiWebHookApiModel->properties = [
        'esse' => [
            'perferendis' => 'rerum',
        ],
        'ea' => [
            'dignissimos' => 'repellat',
        ],
        'velit' => [
            'provident' => 'consectetur',
            'eligendi' => 'dignissimos',
            'consectetur' => 'soluta',
            'natus' => 'temporibus',
        ],
        'officia' => [
            'tenetur' => 'aspernatur',
        ],
    ];
    $request->rechnungsdruckWebAppControllersApiWebHookApiModel->secret = 'quo';
    $request->rechnungsdruckWebAppControllersApiWebHookApiModel->webHookUri = 'itaque';
    $request->id = 'da7e23f2-2574-411f-af4b-7544e472e802';

    $response = $sdk->webhooks->webHookManagementPut($request);

    if ($response->rechnungsdruckWebAppControllersApiWebHookApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
