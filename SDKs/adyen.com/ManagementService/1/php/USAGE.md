<!-- Start SDK Example Usage -->
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
    $request->companyId = 'corrupti';
    $request->pageNumber = 592845;
    $request->pageSize = 715190;

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
<!-- End SDK Example Usage -->