# apiCredentialsCompanyLevel

### Available Operations

* [getCompaniesCompanyIdApiCredentials](#getcompaniescompanyidapicredentials) - Get a list of API credentials
* [getCompaniesCompanyIdApiCredentialsApiCredentialId](#getcompaniescompanyidapicredentialsapicredentialid) - Get an API credential
* [patchCompaniesCompanyIdApiCredentialsApiCredentialId](#patchcompaniescompanyidapicredentialsapicredentialid) - Update an API credential.
* [postCompaniesCompanyIdApiCredentials](#postcompaniescompanyidapicredentials) - Create an API credential.

## getCompaniesCompanyIdApiCredentials

Returns the list of [API credentials](https://docs.adyen.com/development-resources/api-credentials) for the company account. The list is grouped into pages as defined by the query parameters.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdApiCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdApiCredentialsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdApiCredentialsRequest();
    $request->companyId = 'quibusdam';
    $request->pageNumber = 602763;
    $request->pageSize = 857946;

    $requestSecurity = new GetCompaniesCompanyIdApiCredentialsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiCredentialsCompanyLevel->getCompaniesCompanyIdApiCredentials($request, $requestSecurity);

    if ($response->listCompanyApiCredentialsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdApiCredentialsApiCredentialId

Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdApiCredentialsApiCredentialIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdApiCredentialsApiCredentialIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdApiCredentialsApiCredentialIdRequest();
    $request->apiCredentialId = 'corrupti';
    $request->companyId = 'illum';

    $requestSecurity = new GetCompaniesCompanyIdApiCredentialsApiCredentialIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiCredentialsCompanyLevel->getCompaniesCompanyIdApiCredentialsApiCredentialId($request, $requestSecurity);

    if ($response->companyApiCredential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchCompaniesCompanyIdApiCredentialsApiCredentialId

Changes the API credential's roles, merchant account access, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request. 

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCompanyApiCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchCompaniesCompanyIdApiCredentialsApiCredentialIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest();
    $request->updateCompanyApiCredentialRequest = new UpdateCompanyApiCredentialRequest();
    $request->updateCompanyApiCredentialRequest->active = false;
    $request->updateCompanyApiCredentialRequest->allowedOrigins = [
        'error',
        'deserunt',
    ];
    $request->updateCompanyApiCredentialRequest->associatedMerchantAccounts = [
        'iure',
        'magnam',
    ];
    $request->updateCompanyApiCredentialRequest->description = 'debitis';
    $request->updateCompanyApiCredentialRequest->roles = [
        'delectus',
    ];
    $request->apiCredentialId = 'tempora';
    $request->companyId = 'suscipit';

    $requestSecurity = new PatchCompaniesCompanyIdApiCredentialsApiCredentialIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiCredentialsCompanyLevel->patchCompaniesCompanyIdApiCredentialsApiCredentialId($request, $requestSecurity);

    if ($response->companyApiCredential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompaniesCompanyIdApiCredentials

Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for the company account identified in the path. In the request, you can specify which merchant accounts the new API credential will have access to, as well as its roles and allowed origins.

The response includes several types of authentication details:
* [API key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication): used for API request authentication.
* [Client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works): public key used for client-side authentication.
* [Username and password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication): used for basic authentication.

> Make sure you store the API key securely in your system. You won't be able to retrieve it later.

If your API key is lost or compromised, you need to [generate a new API key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey).

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdApiCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCompanyApiCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdApiCredentialsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompaniesCompanyIdApiCredentialsRequest();
    $request->createCompanyApiCredentialRequest = new CreateCompanyApiCredentialRequest();
    $request->createCompanyApiCredentialRequest->allowedOrigins = [
        'minus',
        'placeat',
    ];
    $request->createCompanyApiCredentialRequest->associatedMerchantAccounts = [
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->createCompanyApiCredentialRequest->description = 'recusandae';
    $request->createCompanyApiCredentialRequest->roles = [
        'ab',
        'quis',
        'veritatis',
        'deserunt',
    ];
    $request->companyId = 'perferendis';

    $requestSecurity = new PostCompaniesCompanyIdApiCredentialsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiCredentialsCompanyLevel->postCompaniesCompanyIdApiCredentials($request, $requestSecurity);

    if ($response->createCompanyApiCredentialResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
