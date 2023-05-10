# pciQuestionnaires

### Available Operations

* [getLegalEntitiesIdPciQuestionnaires](#getlegalentitiesidpciquestionnaires) - Get PCI questionnaire details
* [getLegalEntitiesIdPciQuestionnairesPciid](#getlegalentitiesidpciquestionnairespciid) - Get PCI questionnaire
* [postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates](#postlegalentitiesidpciquestionnairesgeneratepcitemplates) - Generate PCI questionnaire
* [postLegalEntitiesIdPciQuestionnairesSignPciTemplates](#postlegalentitiesidpciquestionnairessignpcitemplates) - Sign PCI questionnaire

## getLegalEntitiesIdPciQuestionnaires

Get a list of signed PCI questionnaires.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalEntitiesIdPciQuestionnairesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalEntitiesIdPciQuestionnairesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLegalEntitiesIdPciQuestionnairesRequest();
    $request->id = 'b3cdca42-5190-44e5-a3c7-e0bc7178e479';

    $requestSecurity = new GetLegalEntitiesIdPciQuestionnairesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->pciQuestionnaires->getLegalEntitiesIdPciQuestionnaires($request, $requestSecurity);

    if ($response->getPciQuestionnaireInfosResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLegalEntitiesIdPciQuestionnairesPciid

Returns the signed PCI questionnaire.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalEntitiesIdPciQuestionnairesPciidRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLegalEntitiesIdPciQuestionnairesPciidSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLegalEntitiesIdPciQuestionnairesPciidRequest();
    $request->id = '6f2a70c6-8828-42aa-8825-62f222e9817e';
    $request->pciid = 'accusamus';

    $requestSecurity = new GetLegalEntitiesIdPciQuestionnairesPciidSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->pciQuestionnaires->getLegalEntitiesIdPciQuestionnairesPciid($request, $requestSecurity);

    if ($response->getPciQuestionnaireResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates

Generates the required PCI questionnaire based on the user's [salesChannel](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__reqParam_salesChannels). If multiple questionnaires are required, this request creates a single consodilated document to be signed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GeneratePciDescriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRequest();
    $request->generatePciDescriptionRequest = new GeneratePciDescriptionRequest();
    $request->generatePciDescriptionRequest->language = 'veritatis';
    $request->id = '7cbe61e6-b7b9-45bc-8ab3-c20c4f3789fd';

    $requestSecurity = new PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->pciQuestionnaires->postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates($request, $requestSecurity);

    if ($response->generatePciDescriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLegalEntitiesIdPciQuestionnairesSignPciTemplates

Signs the required PCI questionnaire.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PciSigningRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesRequest();
    $request->pciSigningRequest = new PciSigningRequest();
    $request->pciSigningRequest->pciTemplateReferences = [
        'esse',
        'quasi',
        'a',
    ];
    $request->pciSigningRequest->signedBy = 'error';
    $request->id = '9dd2efd1-21aa-46f1-a674-bdb04f157560';

    $requestSecurity = new PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->pciQuestionnaires->postLegalEntitiesIdPciQuestionnairesSignPciTemplates($request, $requestSecurity);

    if ($response->pciSigningResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
