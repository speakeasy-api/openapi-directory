# client

### Available Operations

* [clientApiAll](#clientapiall) - Return all clients for the account
* [clientApiCanDelete](#clientapicandelete) - Check if the provided client can be deleted
* [clientApiDeleteForm](#clientapideleteform) - Delete an existing client
* [clientApiDeleteJson](#clientapideletejson) - Delete an existing client
* [clientApiDeleteRaw](#clientapideleteraw) - Delete an existing client
* [clientApiDetails](#clientapidetails) - Return client details. Activities and invoices included.
* [clientApiNewForm](#clientapinewform) - Create a client
* [clientApiNewJson](#clientapinewjson) - Create a client
* [clientApiNewRaw](#clientapinewraw) - Create a client
* [clientApiUpdateForm](#clientapiupdateform) - Update an existing client
* [clientApiUpdateJson](#clientapiupdatejson) - Update an existing client
* [clientApiUpdateRaw](#clientapiupdateraw) - Update an existing client

## clientApiAll

Return all clients for the account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiAllRequest();
    $request->xAuthKey = 'distinctio';
    $request->xAuthSecret = 'quibusdam';

    $response = $sdk->client->clientApiAll($request);

    if ($response->clientDetailsApiModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clientApiCanDelete

Check if the provided client can be deleted

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiCanDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiCanDeleteRequest();
    $request->id = 602763;
    $request->xAuthKey = 'nulla';
    $request->xAuthSecret = 'corrupti';

    $response = $sdk->client->clientApiCanDelete($request);

    if ($response->clientApiCanDelete200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clientApiDeleteForm

Delete an existing client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiDeleteFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiDeleteFormRequest();
    $request->clientDeleteApiModel = new ClientDeleteApiModel();
    $request->clientDeleteApiModel->id = 847252;
    $request->xAuthKey = 'vel';
    $request->xAuthSecret = 'error';

    $response = $sdk->client->clientApiDeleteForm($request);

    if ($response->clientApiDeleteForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clientApiDeleteJson

Delete an existing client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiDeleteJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiDeleteJsonRequest();
    $request->clientDeleteApiModel = new ClientDeleteApiModel();
    $request->clientDeleteApiModel->id = 645894;
    $request->xAuthKey = 'suscipit';
    $request->xAuthSecret = 'iure';

    $response = $sdk->client->clientApiDeleteJson($request);

    if ($response->clientApiDeleteJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clientApiDeleteRaw

Delete an existing client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiDeleteRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiDeleteRawRequest();
    $request->requestBody = 'magnam';
    $request->xAuthKey = 'debitis';
    $request->xAuthSecret = 'ipsa';

    $response = $sdk->client->clientApiDeleteRaw($request);

    if ($response->clientApiDeleteRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clientApiDetails

Return client details. Activities and invoices included.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiDetailsRequest();
    $request->id = 963663;
    $request->xAuthKey = 'tempora';
    $request->xAuthSecret = 'suscipit';

    $response = $sdk->client->clientApiDetails($request);

    if ($response->clientDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clientApiNewForm

Create a client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiNewFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientCreateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalClientEmailApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiNewFormRequest();
    $request->clientCreateApiModel = new ClientCreateApiModel();
    $request->clientCreateApiModel->additionalEmails = [
        new AdditionalClientEmailApiModel(),
        new AdditionalClientEmailApiModel(),
    ];
    $request->clientCreateApiModel->address = '854 Huel Via';
    $request->clientCreateApiModel->clientCountryId = 836079;
    $request->clientCreateApiModel->clientCurrencyId = 71036;
    $request->clientCreateApiModel->companyRegistrationNumber = 'quis';
    $request->clientCreateApiModel->defaultDueDateInDays = 87129;
    $request->clientCreateApiModel->email = 'Aiyana_Hills77@yahoo.com';
    $request->clientCreateApiModel->name = 'Teri Strosin';
    $request->clientCreateApiModel->phoneNumber = 'quod';
    $request->clientCreateApiModel->uiLanguageId = 800911;
    $request->clientCreateApiModel->vat = 'esse';
    $request->xAuthKey = 'totam';
    $request->xAuthSecret = 'porro';

    $response = $sdk->client->clientApiNewForm($request);

    if ($response->clientApiNewForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clientApiNewJson

Create a client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiNewJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientCreateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalClientEmailApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiNewJsonRequest();
    $request->clientCreateApiModel = new ClientCreateApiModel();
    $request->clientCreateApiModel->additionalEmails = [
        new AdditionalClientEmailApiModel(),
        new AdditionalClientEmailApiModel(),
        new AdditionalClientEmailApiModel(),
    ];
    $request->clientCreateApiModel->address = '76515 Rosenbaum Manors';
    $request->clientCreateApiModel->clientCountryId = 105907;
    $request->clientCreateApiModel->clientCurrencyId = 414662;
    $request->clientCreateApiModel->companyRegistrationNumber = 'molestiae';
    $request->clientCreateApiModel->defaultDueDateInDays = 264555;
    $request->clientCreateApiModel->email = 'Ona.Rippin@gmail.com';
    $request->clientCreateApiModel->name = 'Brandon Auer';
    $request->clientCreateApiModel->phoneNumber = 'sed';
    $request->clientCreateApiModel->uiLanguageId = 612096;
    $request->clientCreateApiModel->vat = 'dolor';
    $request->xAuthKey = 'natus';
    $request->xAuthSecret = 'laboriosam';

    $response = $sdk->client->clientApiNewJson($request);

    if ($response->clientApiNewJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clientApiNewRaw

Create a client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiNewRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiNewRawRequest();
    $request->requestBody = 'hic';
    $request->xAuthKey = 'saepe';
    $request->xAuthSecret = 'fuga';

    $response = $sdk->client->clientApiNewRaw($request);

    if ($response->clientApiNewRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clientApiUpdateForm

Update an existing client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiUpdateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientUpdateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalClientEmailApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiUpdateFormRequest();
    $request->clientUpdateApiModel = new ClientUpdateApiModel();
    $request->clientUpdateApiModel->additionalEmails = [
        new AdditionalClientEmailApiModel(),
        new AdditionalClientEmailApiModel(),
    ];
    $request->clientUpdateApiModel->address = '6496 Andy Walks';
    $request->clientUpdateApiModel->clientCountryId = 666767;
    $request->clientUpdateApiModel->clientCurrencyId = 653140;
    $request->clientUpdateApiModel->companyRegistrationNumber = 'laborum';
    $request->clientUpdateApiModel->defaultDueDateInDays = 170909;
    $request->clientUpdateApiModel->email = 'Florian.Champlin60@gmail.com';
    $request->clientUpdateApiModel->id = 363711;
    $request->clientUpdateApiModel->name = 'Velma Batz';
    $request->clientUpdateApiModel->phoneNumber = 'doloribus';
    $request->clientUpdateApiModel->uiLanguageId = 958950;
    $request->clientUpdateApiModel->vat = 'architecto';
    $request->xAuthKey = 'mollitia';
    $request->xAuthSecret = 'dolorem';

    $response = $sdk->client->clientApiUpdateForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clientApiUpdateJson

Update an existing client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiUpdateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientUpdateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalClientEmailApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiUpdateJsonRequest();
    $request->clientUpdateApiModel = new ClientUpdateApiModel();
    $request->clientUpdateApiModel->additionalEmails = [
        new AdditionalClientEmailApiModel(),
        new AdditionalClientEmailApiModel(),
        new AdditionalClientEmailApiModel(),
    ];
    $request->clientUpdateApiModel->address = '96524 Jarred Field';
    $request->clientUpdateApiModel->clientCountryId = 623510;
    $request->clientUpdateApiModel->clientCurrencyId = 158969;
    $request->clientUpdateApiModel->companyRegistrationNumber = 'quis';
    $request->clientUpdateApiModel->defaultDueDateInDays = 110375;
    $request->clientUpdateApiModel->email = 'Madison77@hotmail.com';
    $request->clientUpdateApiModel->id = 196582;
    $request->clientUpdateApiModel->name = 'Vernon Ondricka Sr.';
    $request->clientUpdateApiModel->phoneNumber = 'error';
    $request->clientUpdateApiModel->uiLanguageId = 837945;
    $request->clientUpdateApiModel->vat = 'laborum';
    $request->xAuthKey = 'quasi';
    $request->xAuthSecret = 'reiciendis';

    $response = $sdk->client->clientApiUpdateJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## clientApiUpdateRaw

Update an existing client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiUpdateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiUpdateRawRequest();
    $request->requestBody = 'voluptatibus';
    $request->xAuthKey = 'vero';
    $request->xAuthSecret = 'nihil';

    $response = $sdk->client->clientApiUpdateRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
