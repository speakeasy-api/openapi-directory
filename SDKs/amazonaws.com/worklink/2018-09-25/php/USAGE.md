<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDomainRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDomainRequest();
    $request->requestBody = new AssociateDomainRequestBody();
    $request->requestBody->acmCertificateArn = 'corrupti';
    $request->requestBody->displayName = 'provident';
    $request->requestBody->domainName = 'distinctio';
    $request->requestBody->fleetArn = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->associateDomain($request);

    if ($response->associateDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->