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
    $request->id = '39d08086-a184-4039-8c26-071f93f5f064';

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
    $request->id = '2dac7af5-15cc-4413-aa63-aae8d67864db';
    $request->pciid = 'cum';

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
    $request->generatePciDescriptionRequest->language = 'commodi';
    $request->id = '75fd5e60-b375-4ed4-b6fb-ee41f33317fe';

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
        'corporis',
    ];
    $request->pciSigningRequest->signedBy = 'harum';
    $request->id = '60eb1ea4-2655-45ba-bc28-744ed53b88f3';

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
