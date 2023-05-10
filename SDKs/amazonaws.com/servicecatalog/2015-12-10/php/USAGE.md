<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptPortfolioShareRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptPortfolioShareInput;
use \OpenAPI\OpenAPI\Models\Shared\PortfolioShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AcceptPortfolioShareXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptPortfolioShareRequest();
    $request->acceptPortfolioShareInput = new AcceptPortfolioShareInput();
    $request->acceptPortfolioShareInput->acceptLanguage = 'corrupti';
    $request->acceptPortfolioShareInput->portfolioId = 'provident';
    $request->acceptPortfolioShareInput->portfolioShareType = PortfolioShareTypeEnum::AWS_ORGANIZATIONS;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = AcceptPortfolioShareXAmzTargetEnum::AWS242_SERVICE_CATALOG_SERVICE_ACCEPT_PORTFOLIO_SHARE;

    $response = $sdk->acceptPortfolioShare($request);

    if ($response->acceptPortfolioShareOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->