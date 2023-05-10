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
    $request->id = '82d68ea1-9f1d-4170-9133-9d08086a1840';

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
    $request->acceptTermsOfServiceRequest->acceptedBy = 'dolor';
    $request->acceptTermsOfServiceRequest->ipAddress = 'occaecati';
    $request->id = '4c26071f-93f5-4f06-82da-c7af515cc413';
    $request->termsofservicedocumentid = 'fuga';

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
    $request->getTermsOfServiceDocumentRequest->language = 'id';
    $request->getTermsOfServiceDocumentRequest->type = GetTermsOfServiceDocumentRequestTypeEnum::ADYEN_CARD;
    $request->id = '3aae8d67-864d-4bb6-b5fd-5e60b375ed4f';

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
