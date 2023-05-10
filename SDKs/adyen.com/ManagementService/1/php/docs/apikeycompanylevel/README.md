# apiKeyCompanyLevel

### Available Operations

* [postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey](#postcompaniescompanyidapicredentialsapicredentialidgenerateapikey) - Generate new API key

## postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey

Returns a new API key for the API credential. You can use the new API key a few minutes after generating it. The old API key stops working 24 hours after generating a new one.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—API credentials read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRequest();
    $request->apiCredentialId = 'modi';
    $request->companyId = 'qui';

    $requestSecurity = new PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeySecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->apiKeyCompanyLevel->postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey($request, $requestSecurity);

    if ($response->generateApiKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
