# allowedOriginsMerchantLevel

### Available Operations

* [deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId](#deletemerchantsmerchantidapicredentialsapicredentialidallowedoriginsoriginid) - Delete an allowed origin
* [getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins](#getmerchantsmerchantidapicredentialsapicredentialidallowedorigins) - Get a list of allowed origins
* [getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId](#getmerchantsmerchantidapicredentialsapicredentialidallowedoriginsoriginid) - Get an allowed origin
* [postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins](#postmerchantsmerchantidapicredentialsapicredentialidallowedorigins) - Create an allowed origin

## deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest();
    $request->apiCredentialId = 'occaecati';
    $request->merchantId = 'enim';
    $request->originId = 'accusamus';

    $requestSecurity = new DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->allowedOriginsMerchantLevel->deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest();
    $request->apiCredentialId = 'delectus';
    $request->merchantId = 'quidem';

    $requestSecurity = new GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->allowedOriginsMerchantLevel->getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins($request, $requestSecurity);

    if ($response->allowedOriginsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId

Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest();
    $request->apiCredentialId = 'provident';
    $request->merchantId = 'nam';
    $request->originId = 'id';

    $requestSecurity = new GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->allowedOriginsMerchantLevel->getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId($request, $requestSecurity);

    if ($response->allowedOrigin !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins

Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllowedOrigin;
use \OpenAPI\OpenAPI\Models\Shared\Links;
use \OpenAPI\OpenAPI\Models\Shared\LinksElement;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest();
    $request->allowedOrigin = new AllowedOrigin();
    $request->allowedOrigin->links = new Links();
    $request->allowedOrigin->links->self = new LinksElement();
    $request->allowedOrigin->links->self->href = 'blanditiis';
    $request->allowedOrigin->domain = 'deleniti';
    $request->allowedOrigin->id = 'f3a66997-074b-4a44-a9b6-e2141959890a';
    $request->apiCredentialId = 'reiciendis';
    $request->merchantId = 'mollitia';

    $requestSecurity = new PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->allowedOriginsMerchantLevel->postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins($request, $requestSecurity);

    if ($response->allowedOriginsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
