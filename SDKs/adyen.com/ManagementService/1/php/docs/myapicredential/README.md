# myAPICredential

### Available Operations

* [deleteMeAllowedOriginsOriginId](#deletemeallowedoriginsoriginid) - Remove allowed origin
* [getMe](#getme) - Get API credential details
* [getMeAllowedOrigins](#getmeallowedorigins) - Get allowed origins
* [getMeAllowedOriginsOriginId](#getmeallowedoriginsoriginid) - Get allowed origin details
* [postMeAllowedOrigins](#postmeallowedorigins) - Add allowed origin

## deleteMeAllowedOriginsOriginId

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) specified in the path.
The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).

You can make this request with any of the Management API roles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMeAllowedOriginsOriginIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMeAllowedOriginsOriginIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMeAllowedOriginsOriginIdRequest();
    $request->originId = 'odit';

    $requestSecurity = new DeleteMeAllowedOriginsOriginIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->myAPICredential->deleteMeAllowedOriginsOriginId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMe

Returns your [API credential](https://docs.adyen.com/development-resources/api-credentials) details based on the API Key you used in the request.

You can make this request with any of the Management API roles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetMeSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->myAPICredential->getMe($requestSecurity);

    if ($response->meApiCredential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeAllowedOrigins

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) of your [API credential](https://docs.adyen.com/development-resources/api-credentials) based on the API key you used in the request.

You can make this request with any of the Management API roles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeAllowedOriginsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetMeAllowedOriginsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->myAPICredential->getMeAllowedOrigins($requestSecurity);

    if ($response->allowedOriginsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMeAllowedOriginsOriginId

Returns the details of the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) specified in the path.
The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).

You can make this request with any of the Management API roles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMeAllowedOriginsOriginIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMeAllowedOriginsOriginIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMeAllowedOriginsOriginIdRequest();
    $request->originId = 'nemo';

    $requestSecurity = new GetMeAllowedOriginsOriginIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->myAPICredential->getMeAllowedOriginsOriginId($request, $requestSecurity);

    if ($response->allowedOrigin !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMeAllowedOrigins

Adds an allowed origin to the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) of your API credential.
The API key from the request is used to identify the [API credential](https://docs.adyen.com/development-resources/api-credentials).

You can make this request with any of the Management API roles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateAllowedOriginRequest;
use \OpenAPI\OpenAPI\Models\Shared\Links;
use \OpenAPI\OpenAPI\Models\Shared\LinksElement;
use \OpenAPI\OpenAPI\Models\Operations\PostMeAllowedOriginsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAllowedOriginRequest();
    $request->links = new Links();
    $request->links->self = new LinksElement();
    $request->links->self->href = 'quasi';
    $request->domain = 'iure';
    $request->id = 'fe4c8b71-1e5b-47fd-aed0-28921cddc692';

    $requestSecurity = new PostMeAllowedOriginsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->myAPICredential->postMeAllowedOrigins($request, $requestSecurity);

    if ($response->allowedOrigin !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
