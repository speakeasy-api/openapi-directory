# apiCredentialsMerchantLevel

### Available Operations

* [getMerchantsMerchantIdApiCredentials](#getmerchantsmerchantidapicredentials) - Get a list of API credentials
* [getMerchantsMerchantIdApiCredentialsApiCredentialId](#getmerchantsmerchantidapicredentialsapicredentialid) - Get an API credential
* [patchMerchantsMerchantIdApiCredentialsApiCredentialId](#patchmerchantsmerchantidapicredentialsapicredentialid) - Update an API credential
* [postMerchantsMerchantIdApiCredentials](#postmerchantsmerchantidapicredentials) - Create an API credential

## getMerchantsMerchantIdApiCredentials

Returns the list of [API credentials](https://docs.adyen.com/development-resources/api-credentials) for the merchant account. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdApiCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdApiCredentialsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdApiCredentialsRequest();
    $request->merchantId = 'ipsam';
    $request->pageNumber = 832620;
    $request->pageSize = 957156;

    $requestSecurity = new GetMerchantsMerchantIdApiCredentialsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiCredentialsMerchantLevel->getMerchantsMerchantIdApiCredentials($request, $requestSecurity);

    if ($response->listMerchantApiCredentialsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdApiCredentialsApiCredentialId

Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdApiCredentialsApiCredentialIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest();
    $request->apiCredentialId = 'quo';
    $request->merchantId = 'odit';

    $requestSecurity = new GetMerchantsMerchantIdApiCredentialsApiCredentialIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiCredentialsMerchantLevel->getMerchantsMerchantIdApiCredentialsApiCredentialId($request, $requestSecurity);

    if ($response->apiCredential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMerchantsMerchantIdApiCredentialsApiCredentialId

Changes the API credential's roles, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdApiCredentialsApiCredentialIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMerchantApiCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdApiCredentialsApiCredentialIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMerchantsMerchantIdApiCredentialsApiCredentialIdRequest();
    $request->updateMerchantApiCredentialRequest = new UpdateMerchantApiCredentialRequest();
    $request->updateMerchantApiCredentialRequest->active = false;
    $request->updateMerchantApiCredentialRequest->allowedOrigins = [
        'at',
        'maiores',
        'molestiae',
        'quod',
    ];
    $request->updateMerchantApiCredentialRequest->description = 'quod';
    $request->updateMerchantApiCredentialRequest->roles = [
        'totam',
        'porro',
    ];
    $request->apiCredentialId = 'dolorum';
    $request->merchantId = 'dicta';

    $requestSecurity = new PatchMerchantsMerchantIdApiCredentialsApiCredentialIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiCredentialsMerchantLevel->patchMerchantsMerchantIdApiCredentialsApiCredentialId($request, $requestSecurity);

    if ($response->apiCredential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdApiCredentials

Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for the company account identified in the path. In the request, you can specify the roles and allowed origins for the new API credential.

The response includes the:
* [API key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication): used for API request authentication.
* [Client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works): public key used for client-side authentication.
* [Username and password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication): used for basic authentication.

> Make sure you store the API key securely in your system. You won't be able to retrieve it later.

If your API key is lost or compromised, you need to [generate a new API key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdApiCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMerchantApiCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdApiCredentialsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdApiCredentialsRequest();
    $request->createMerchantApiCredentialRequest = new CreateMerchantApiCredentialRequest();
    $request->createMerchantApiCredentialRequest->allowedOrigins = [
        'officia',
        'occaecati',
        'fugit',
    ];
    $request->createMerchantApiCredentialRequest->description = 'deleniti';
    $request->createMerchantApiCredentialRequest->roles = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->merchantId = 'molestiae';

    $requestSecurity = new PostMerchantsMerchantIdApiCredentialsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiCredentialsMerchantLevel->postMerchantsMerchantIdApiCredentials($request, $requestSecurity);

    if ($response->createApiCredentialResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
