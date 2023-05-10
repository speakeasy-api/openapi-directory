# termsOfService

### Available Operations

* [getLegalEntitiesIdTermsOfServiceAcceptanceInfos](#getlegalentitiesidtermsofserviceacceptanceinfos) - Get Terms of Service information for a legal entity
* [patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid](#patchlegalentitiesidtermsofservicetermsofservicedocumentid) - Accept Terms of Service
* [postLegalEntitiesIdTermsOfService](#postlegalentitiesidtermsofservice) - Get Terms of Service document

## getLegalEntitiesIdTermsOfServiceAcceptanceInfos

Returns Terms of Service information for a legal entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalEntitiesIdTermsOfServiceAcceptanceInfosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLegalEntitiesIdTermsOfServiceAcceptanceInfosRequest();
    $request->id = 'a8d8f5c0-b2f2-4fb7-b194-a276b26916fe';

    $requestSecurity = new GetLegalEntitiesIdTermsOfServiceAcceptanceInfosSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->termsOfService->getLegalEntitiesIdTermsOfServiceAcceptanceInfos($request, $requestSecurity);

    if ($response->getTermsOfServiceAcceptanceInfosResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid

Accepts Terms of Service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptTermsOfServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRequest();
    $request->acceptTermsOfServiceRequest = new AcceptTermsOfServiceRequest();
    $request->acceptTermsOfServiceRequest->acceptedBy = 'illo';
    $request->acceptTermsOfServiceRequest->ipAddress = 'reiciendis';
    $request->id = '08f4294e-3698-4f44-bf60-3e8b445e80ca';
    $request->termsofservicedocumentid = 'veniam';

    $requestSecurity = new PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->termsOfService->patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid($request, $requestSecurity);

    if ($response->acceptTermsOfServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLegalEntitiesIdTermsOfService

Returns the Terms of Service document for a legal entity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLegalEntitiesIdTermsOfServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTermsOfServiceDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTermsOfServiceDocumentRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostLegalEntitiesIdTermsOfServiceSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLegalEntitiesIdTermsOfServiceRequest();
    $request->getTermsOfServiceDocumentRequest = new GetTermsOfServiceDocumentRequest();
    $request->getTermsOfServiceDocumentRequest->language = 'minima';
    $request->getTermsOfServiceDocumentRequest->type = GetTermsOfServiceDocumentRequestTypeEnum::ADYEN_ISSUING;
    $request->id = 'fd20e457-e185-48b6-a89f-be3a5aa8e482';

    $requestSecurity = new PostLegalEntitiesIdTermsOfServiceSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->termsOfService->postLegalEntitiesIdTermsOfService($request, $requestSecurity);

    if ($response->getTermsOfServiceDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
