# allowedOriginsCompanyLevel

### Available Operations

* [deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId](#deletecompaniescompanyidapicredentialsapicredentialidallowedoriginsoriginid) - Delete an allowed origin
* [getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins](#getcompaniescompanyidapicredentialsapicredentialidallowedorigins) - Get a list of allowed origins
* [getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId](#getcompaniescompanyidapicredentialsapicredentialidallowedoriginsoriginid) - Get an allowed origin
* [postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins](#postcompaniescompanyidapicredentialsapicredentialidallowedorigins) - Create an allowed origin

## deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId

Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest();
    $request->apiCredentialId = 'aliquid';
    $request->companyId = 'cupiditate';
    $request->originId = 'quos';

    $requestSecurity = new DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->allowedOriginsCompanyLevel->deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins

Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest();
    $request->apiCredentialId = 'perferendis';
    $request->companyId = 'magni';

    $requestSecurity = new GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->allowedOriginsCompanyLevel->getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins($request, $requestSecurity);

    if ($response->allowedOriginsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId

Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest();
    $request->apiCredentialId = 'assumenda';
    $request->companyId = 'ipsam';
    $request->originId = 'alias';

    $requestSecurity = new GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->allowedOriginsCompanyLevel->getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId($request, $requestSecurity);

    if ($response->allowedOrigin !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins

Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllowedOrigin;
use \OpenAPI\OpenAPI\Models\Shared\Links;
use \OpenAPI\OpenAPI\Models\Shared\LinksElement;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest();
    $request->allowedOrigin = new AllowedOrigin();
    $request->allowedOrigin->links = new Links();
    $request->allowedOrigin->links->self = new LinksElement();
    $request->allowedOrigin->links->self->href = 'fugit';
    $request->allowedOrigin->domain = 'dolorum';
    $request->allowedOrigin->id = '94bb4f63-c969-4e9a-befa-77dfb14cd66a';
    $request->apiCredentialId = 'accusamus';
    $request->companyId = 'non';

    $requestSecurity = new PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->allowedOriginsCompanyLevel->postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins($request, $requestSecurity);

    if ($response->allowedOriginsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
