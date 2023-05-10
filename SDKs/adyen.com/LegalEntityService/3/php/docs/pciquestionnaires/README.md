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
    $request->id = '2dac7af5-15cc-4413-aa63-aae8d67864db';

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
    $request->id = 'b675fd5e-60b3-475e-94f6-fbee41f33317';
    $request->pciid = 'a';

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
    $request->generatePciDescriptionRequest->language = 'debitis';
    $request->id = '35b60eb1-ea42-4655-9ba3-c28744ed53b8';

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
        'hic',
        'nesciunt',
        'culpa',
    ];
    $request->pciSigningRequest->signedBy = 'corrupti';
    $request->id = 'd8f5c0b2-f2fb-47b1-94a2-76b26916fe1f';

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
