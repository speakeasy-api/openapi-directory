<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeCacheSecurityGroupIngressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeCacheSecurityGroupIngressActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAuthorizeCacheSecurityGroupIngressVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAuthorizeCacheSecurityGroupIngressRequest();
    $request->action = GETAuthorizeCacheSecurityGroupIngressActionEnum::AUTHORIZE_CACHE_SECURITY_GROUP_INGRESS;
    $request->cacheSecurityGroupName = 'corrupti';
    $request->ec2SecurityGroupName = 'provident';
    $request->ec2SecurityGroupOwnerId = 'distinctio';
    $request->version = GETAuthorizeCacheSecurityGroupIngressVersionEnum::TWO_THOUSAND_AND_FIFTEEN0202;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'error';

    $response = $sdk->getAuthorizeCacheSecurityGroupIngress($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->