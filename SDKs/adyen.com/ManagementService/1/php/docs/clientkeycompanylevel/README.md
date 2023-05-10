# clientKeyCompanyLevel

### Available Operations

* [postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey](#postcompaniescompanyidapicredentialsapicredentialidgenerateclientkey) - Generate new client key

## postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey

Returns a new [client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works) for the API credential identified in the path. You can use the new client key a few minutes after generating it. The old client key stops working 24 hours after generating a new one.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRequest();
    $request->apiCredentialId = 'ad';
    $request->companyId = 'eum';

    $requestSecurity = new PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeySecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->clientKeyCompanyLevel->postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey($request, $requestSecurity);

    if ($response->generateClientKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
