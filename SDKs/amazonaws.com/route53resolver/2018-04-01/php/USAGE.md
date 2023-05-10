<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFirewallRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateFirewallRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\MutationProtectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFirewallRuleGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateFirewallRuleGroupRequest();
    $request->associateFirewallRuleGroupRequest = new AssociateFirewallRuleGroupRequest();
    $request->associateFirewallRuleGroupRequest->creatorRequestId = 'corrupti';
    $request->associateFirewallRuleGroupRequest->firewallRuleGroupId = 'provident';
    $request->associateFirewallRuleGroupRequest->mutationProtection = MutationProtectionStatusEnum::DISABLED;
    $request->associateFirewallRuleGroupRequest->name = 'Stuart Stiedemann';
    $request->associateFirewallRuleGroupRequest->priority = 423655;
    $request->associateFirewallRuleGroupRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->associateFirewallRuleGroupRequest->vpcId = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AssociateFirewallRuleGroupXAmzTargetEnum::ROUTE53_RESOLVER_ASSOCIATE_FIREWALL_RULE_GROUP;

    $response = $sdk->associateFirewallRuleGroup($request);

    if ($response->associateFirewallRuleGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->