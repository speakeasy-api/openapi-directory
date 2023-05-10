# hostedOnboarding

### Available Operations

* [getThemes](#getthemes) - Get a list of hosted onboarding page themes
* [getThemesId](#getthemesid) - Get an onboarding link theme
* [postLegalEntitiesIdOnboardingLinks](#postlegalentitiesidonboardinglinks) - Get a link to an Adyen-hosted onboarding page

## getThemes

Returns a list of hosted onboarding page themes.

>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetThemesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetThemesSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->hostedOnboarding->getThemes($requestSecurity);

    if ($response->onboardingThemes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getThemesId

Returns the details of the theme identified in the path.>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetThemesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetThemesIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThemesIdRequest();
    $request->id = '16fe4c8b-711e-45b7-bd2e-d028921cddc6';

    $requestSecurity = new GetThemesIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->hostedOnboarding->getThemesId($request, $requestSecurity);

    if ($response->onboardingTheme !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postLegalEntitiesIdOnboardingLinks

Returns a link to an Adyen-hosted onboarding page where you need to redirect your user.

>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostLegalEntitiesIdOnboardingLinksRequest;
use \OpenAPI\OpenAPI\Models\Shared\OnboardingLinkInfo;
use \OpenAPI\OpenAPI\Models\Operations\PostLegalEntitiesIdOnboardingLinksSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostLegalEntitiesIdOnboardingLinksRequest();
    $request->onboardingLinkInfo = new OnboardingLinkInfo();
    $request->onboardingLinkInfo->locale = 'excepturi';
    $request->onboardingLinkInfo->redirectUrl = 'odit';
    $request->onboardingLinkInfo->settings = [
        'accusantium' => false,
        'ab' => false,
    ];
    $request->onboardingLinkInfo->themeId = 'maiores';
    $request->id = 'b576b0d5-f0d3-40c5-bbb2-587053202c73';

    $requestSecurity = new PostLegalEntitiesIdOnboardingLinksSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->hostedOnboarding->postLegalEntitiesIdOnboardingLinks($request, $requestSecurity);

    if ($response->onboardingLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
