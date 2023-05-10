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
    $request->id = '08f4294e-3698-4f44-bf60-3e8b445e80ca';

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
    $request->acceptTermsOfServiceRequest->acceptedBy = 'veniam';
    $request->acceptTermsOfServiceRequest->ipAddress = 'minima';
    $request->id = 'efd20e45-7e18-458b-aa89-fbe3a5aa8e48';
    $request->termsofservicedocumentid = 'fugit';

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
    $request->getTermsOfServiceDocumentRequest->language = 'ut';
    $request->getTermsOfServiceDocumentRequest->type = GetTermsOfServiceDocumentRequestTypeEnum::ADYEN_FRANCHISEE;
    $request->id = '0ab40750-88e5-4186-a065-e904f3b1194b';

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
