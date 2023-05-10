<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDomainActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateDomainVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateDomainRequest();
    $request->action = GETCreateDomainActionEnum::CREATE_DOMAIN;
    $request->domainName = 'corrupti';
    $request->version = GETCreateDomainVersionEnum::TWO_THOUSAND_AND_ELEVEN0201;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->getCreateDomain($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->