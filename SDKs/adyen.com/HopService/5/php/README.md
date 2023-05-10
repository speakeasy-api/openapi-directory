# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GetOnboardingUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectInformation;
use \OpenAPI\OpenAPI\Models\Shared\ShowPages;
use \OpenAPI\OpenAPI\Models\Operations\PostGetOnboardingUrlSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOnboardingUrlRequest();
    $request->accountHolderCode = 'corrupti';
    $request->collectInformation = new CollectInformation();
    $request->collectInformation->bankDetails = false;
    $request->collectInformation->businessDetails = false;
    $request->collectInformation->individualDetails = false;
    $request->collectInformation->legalArrangementDetails = false;
    $request->collectInformation->pciQuestionnaire = false;
    $request->collectInformation->shareholderDetails = false;
    $request->editMode = false;
    $request->mobileOAuthCallbackUrl = 'provident';
    $request->platformName = 'distinctio';
    $request->returnUrl = 'quibusdam';
    $request->shopperLocale = 'unde';
    $request->showPages = new ShowPages();
    $request->showPages->bankDetailsSummaryPage = false;
    $request->showPages->bankVerificationPage = false;
    $request->showPages->businessDetailsSummaryPage = false;
    $request->showPages->checksOverviewPage = false;
    $request->showPages->individualDetailsSummaryPage = false;
    $request->showPages->legalArrangementsDetailsSummaryPage = false;
    $request->showPages->manualBankAccountPage = false;
    $request->showPages->shareholderDetailsSummaryPage = false;
    $request->showPages->welcomePage = false;

    $requestSecurity = new PostGetOnboardingUrlSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->hostedOnboardingPage->postGetOnboardingUrl($request, $requestSecurity);

    if ($response->getOnboardingUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [hostedOnboardingPage](docs/hostedonboardingpage/README.md)

* [postGetOnboardingUrl](docs/hostedonboardingpage/README.md#postgetonboardingurl) - Get a link to a Adyen-hosted onboarding page

### [pciComplianceQuestionnairePage](docs/pcicompliancequestionnairepage/README.md)

* [postGetPciQuestionnaireUrl](docs/pcicompliancequestionnairepage/README.md#postgetpciquestionnaireurl) - Get a link to a PCI compliance questionnaire
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
