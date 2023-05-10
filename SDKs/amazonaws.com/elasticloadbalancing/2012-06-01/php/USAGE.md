<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETApplySecurityGroupsToLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETApplySecurityGroupsToLoadBalancerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETApplySecurityGroupsToLoadBalancerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETApplySecurityGroupsToLoadBalancerRequest();
    $request->action = GETApplySecurityGroupsToLoadBalancerActionEnum::APPLY_SECURITY_GROUPS_TO_LOAD_BALANCER;
    $request->loadBalancerName = 'corrupti';
    $request->securityGroups = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->version = GETApplySecurityGroupsToLoadBalancerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';

    $response = $sdk->getApplySecurityGroupsToLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->