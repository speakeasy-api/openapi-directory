# hostedOnboardingPage

### Available Operations

* [postGetOnboardingUrl](#postgetonboardingurl) - Get a link to a Adyen-hosted onboarding page

## postGetOnboardingUrl

Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/marketplaces-and-platforms/classic/collect-verification-details/hosted-onboarding-page). 

### Example Usage

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
    $request->accountHolderCode = 'nulla';
    $request->collectInformation = new CollectInformation();
    $request->collectInformation->bankDetails = false;
    $request->collectInformation->businessDetails = false;
    $request->collectInformation->individualDetails = false;
    $request->collectInformation->legalArrangementDetails = false;
    $request->collectInformation->pciQuestionnaire = false;
    $request->collectInformation->shareholderDetails = false;
    $request->editMode = false;
    $request->mobileOAuthCallbackUrl = 'corrupti';
    $request->platformName = 'illum';
    $request->returnUrl = 'vel';
    $request->shopperLocale = 'error';
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
