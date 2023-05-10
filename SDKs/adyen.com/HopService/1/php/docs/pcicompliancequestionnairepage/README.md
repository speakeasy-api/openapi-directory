# pciComplianceQuestionnairePage

### Available Operations

* [postGetPciQuestionnaireUrl](#postgetpciquestionnaireurl) - Get a link to a PCI compliance questionnaire

## postGetPciQuestionnaireUrl

Returns a link to a PCI compliance questionnaire that you can send to your account holder.
 > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\GetPciUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostGetPciQuestionnaireUrlSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPciUrlRequest();
    $request->accountHolderCode = 'deserunt';
    $request->returnUrl = 'suscipit';

    $requestSecurity = new PostGetPciQuestionnaireUrlSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->pciComplianceQuestionnairePage->postGetPciQuestionnaireUrl($request, $requestSecurity);

    if ($response->getPciUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
