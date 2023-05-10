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