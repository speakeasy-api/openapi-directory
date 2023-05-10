<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateCustomDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateCustomDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateCustomDomainXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateCustomDomainRequest();
    $request->associateCustomDomainRequest = new AssociateCustomDomainRequest();
    $request->associateCustomDomainRequest->domainName = 'corrupti';
    $request->associateCustomDomainRequest->enableWWWSubdomain = false;
    $request->associateCustomDomainRequest->serviceArn = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AssociateCustomDomainXAmzTargetEnum::APP_RUNNER_ASSOCIATE_CUSTOM_DOMAIN;

    $response = $sdk->associateCustomDomain($request);

    if ($response->associateCustomDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->