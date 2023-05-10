<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFirewallPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateFirewallPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFirewallPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateFirewallPolicyRequest();
    $request->associateFirewallPolicyRequest = new AssociateFirewallPolicyRequest();
    $request->associateFirewallPolicyRequest->firewallArn = 'corrupti';
    $request->associateFirewallPolicyRequest->firewallName = 'provident';
    $request->associateFirewallPolicyRequest->firewallPolicyArn = 'distinctio';
    $request->associateFirewallPolicyRequest->updateToken = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = AssociateFirewallPolicyXAmzTargetEnum::NETWORK_FIREWALL20201112_ASSOCIATE_FIREWALL_POLICY;

    $response = $sdk->associateFirewallPolicy($request);

    if ($response->associateFirewallPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->