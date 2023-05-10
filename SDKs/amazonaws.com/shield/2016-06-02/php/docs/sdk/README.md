# SDK

## Overview

<fullname>Shield Advanced</fullname> <p>This is the <i>Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the Shield Advanced API actions, data types, and errors. For detailed information about WAF and Shield Advanced features and an overview of how to use the WAF and Shield Advanced APIs, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF and Shield Developer Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/shield/>
### Available Operations

* [associateDRTLogBucket](#associatedrtlogbucket) - <p>Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.</p> <p>To use the services of the SRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
* [associateDRTRole](#associatedrtrole) - <p>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <code>AWSShieldDRTAccessPolicy</code> managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a>. For more information see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Adding and removing IAM identity permissions</a>. The role must also trust the service principal <code>drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON policy elements: Principal</a>.</p> <p>The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user permissions to pass a role to an Amazon Web Services service</a>. </p> <p>To use the services of the SRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
* [associateHealthCheck](#associatehealthcheck) - <p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
* [associateProactiveEngagementDetails](#associateproactiveengagementdetails) - <p>Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list. </p> <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>. </p> <note> <p>This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.</p> <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call. </p> </note>
* [createProtection](#createprotection) - <p>Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.</p> <p>You can add protection to only a single resource with each <code>CreateProtection</code> request. You can add protection to multiple resources at once through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Adding Shield Advanced protection to Amazon Web Services resources</a>.</p>
* [createProtectionGroup](#createprotectiongroup) - Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
* [createSubscription](#createsubscription) - <p>Activates Shield Advanced for an account.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note> <p>When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>
* [deleteProtection](#deleteprotection) - Deletes an Shield Advanced <a>Protection</a>.
* [deleteProtectionGroup](#deleteprotectiongroup) - Removes the specified protection group.
* [~~deleteSubscription~~](#deletesubscription) - Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment.  :warning: **Deprecated**
* [describeAttack](#describeattack) - Describes the details of a DDoS attack. 
* [describeAttackStatistics](#describeattackstatistics) - <p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p> <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p> <p>The time range indicates the period covered by the attack statistics data items.</p>
* [describeDRTAccess](#describedrtaccess) - Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.
* [describeEmergencyContactSettings](#describeemergencycontactsettings) - A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
* [describeProtection](#describeprotection) - Lists the details of a <a>Protection</a> object.
* [describeProtectionGroup](#describeprotectiongroup) - Returns the specification for the specified protection group.
* [describeSubscription](#describesubscription) - Provides details about the Shield Advanced subscription for an account.
* [disableApplicationLayerAutomaticResponse](#disableapplicationlayerautomaticresponse) - Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource. 
* [disableProactiveEngagement](#disableproactiveengagement) - Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.
* [disassociateDRTLogBucket](#disassociatedrtlogbucket) - Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.
* [disassociateDRTRole](#disassociatedrtrole) - Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.
* [disassociateHealthCheck](#disassociatehealthcheck) - <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
* [enableApplicationLayerAutomaticResponse](#enableapplicationlayerautomaticresponse) - <p>Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. </p> <note> <p>This feature is available for Amazon CloudFront distributions and Application Load Balancers only.</p> </note> <p>This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated with the resource. For information about how automatic mitigation works and the requirements for using it, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-automatic-app-layer-response.html">Shield Advanced automatic application layer DDoS mitigation</a>.</p> <note> <p>Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use <a>UpdateApplicationLayerAutomaticResponse</a>.</p> </note> <p>To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a>. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF Developer Guide</a>.</p>
* [enableProactiveEngagement](#enableproactiveengagement) - Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
* [getSubscriptionState](#getsubscriptionstate) - Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.
* [listAttacks](#listattacks) - Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.
* [listProtectionGroups](#listprotectiongroups) - Retrieves <a>ProtectionGroup</a> objects for the account. You can retrieve all protection groups or you can provide filtering criteria and retrieve just the subset of protection groups that match the criteria. 
* [listProtections](#listprotections) - Retrieves <a>Protection</a> objects for the account. You can retrieve all protections or you can provide filtering criteria and retrieve just the subset of protections that match the criteria. 
* [listResourcesInProtectionGroup](#listresourcesinprotectiongroup) - Retrieves the resources that are included in the protection group. 
* [listTagsForResource](#listtagsforresource) - Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Shield.
* [tagResource](#tagresource) - Adds or updates tags for a resource in Shield.
* [untagResource](#untagresource) - Removes tags from a resource in Shield.
* [updateApplicationLayerAutomaticResponse](#updateapplicationlayerautomaticresponse) - Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.
* [updateEmergencyContactSettings](#updateemergencycontactsettings) - Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
* [updateProtectionGroup](#updateprotectiongroup) - Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
* [updateSubscription](#updatesubscription) - <p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note>

## associateDRTLogBucket

<p>Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.</p> <p>To use the services of the SRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDRTLogBucketRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateDRTLogBucketRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDRTLogBucketXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDRTLogBucketRequest();
    $request->associateDRTLogBucketRequest = new AssociateDRTLogBucketRequest();
    $request->associateDRTLogBucketRequest->logBucket = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = AssociateDRTLogBucketXAmzTargetEnum::AWS_SHIELD20160616_ASSOCIATE_DRT_LOG_BUCKET;

    $response = $sdk->sdk->associateDRTLogBucket($request);

    if ($response->associateDRTLogBucketResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateDRTRole

<p>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <code>AWSShieldDRTAccessPolicy</code> managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a>. For more information see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Adding and removing IAM identity permissions</a>. The role must also trust the service principal <code>drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON policy elements: Principal</a>.</p> <p>The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user permissions to pass a role to an Amazon Web Services service</a>. </p> <p>To use the services of the SRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDRTRoleRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateDRTRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDRTRoleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDRTRoleRequest();
    $request->associateDRTRoleRequest = new AssociateDRTRoleRequest();
    $request->associateDRTRoleRequest->roleArn = 'delectus';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = AssociateDRTRoleXAmzTargetEnum::AWS_SHIELD20160616_ASSOCIATE_DRT_ROLE;

    $response = $sdk->sdk->associateDRTRole($request);

    if ($response->associateDRTRoleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateHealthCheck

<p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateHealthCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateHealthCheckRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateHealthCheckXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateHealthCheckRequest();
    $request->associateHealthCheckRequest = new AssociateHealthCheckRequest();
    $request->associateHealthCheckRequest->healthCheckArn = 'excepturi';
    $request->associateHealthCheckRequest->protectionId = 'nisi';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = AssociateHealthCheckXAmzTargetEnum::AWS_SHIELD20160616_ASSOCIATE_HEALTH_CHECK;

    $response = $sdk->sdk->associateHealthCheck($request);

    if ($response->associateHealthCheckResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateProactiveEngagementDetails

<p>Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list. </p> <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>. </p> <note> <p>This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.</p> <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateProactiveEngagementDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateProactiveEngagementDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EmergencyContact;
use \OpenAPI\OpenAPI\Models\Operations\AssociateProactiveEngagementDetailsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateProactiveEngagementDetailsRequest();
    $request->associateProactiveEngagementDetailsRequest = new AssociateProactiveEngagementDetailsRequest();
    $request->associateProactiveEngagementDetailsRequest->emergencyContactList = [
        new EmergencyContact(),
        new EmergencyContact(),
    ];
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = AssociateProactiveEngagementDetailsXAmzTargetEnum::AWS_SHIELD20160616_ASSOCIATE_PROACTIVE_ENGAGEMENT_DETAILS;

    $response = $sdk->sdk->associateProactiveEngagementDetails($request);

    if ($response->associateProactiveEngagementDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProtection

<p>Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.</p> <p>You can add protection to only a single resource with each <code>CreateProtection</code> request. You can add protection to multiple resources at once through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Adding Shield Advanced protection to Amazon Web Services resources</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProtectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProtectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateProtectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProtectionRequest();
    $request->createProtectionRequest = new CreateProtectionRequest();
    $request->createProtectionRequest->name = 'Bernadette Schmidt';
    $request->createProtectionRequest->resourceArn = 'porro';
    $request->createProtectionRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = CreateProtectionXAmzTargetEnum::AWS_SHIELD20160616_CREATE_PROTECTION;

    $response = $sdk->sdk->createProtection($request);

    if ($response->createProtectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProtectionGroup

Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProtectionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProtectionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProtectionGroupAggregationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtectionGroupPatternEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtectedResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateProtectionGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProtectionGroupRequest();
    $request->createProtectionGroupRequest = new CreateProtectionGroupRequest();
    $request->createProtectionGroupRequest->aggregation = ProtectionGroupAggregationEnum::MAX;
    $request->createProtectionGroupRequest->members = [
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->createProtectionGroupRequest->pattern = ProtectionGroupPatternEnum::ALL;
    $request->createProtectionGroupRequest->protectionGroupId = 'qui';
    $request->createProtectionGroupRequest->resourceType = ProtectedResourceTypeEnum::APPLICATION_LOAD_BALANCER;
    $request->createProtectionGroupRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = CreateProtectionGroupXAmzTargetEnum::AWS_SHIELD20160616_CREATE_PROTECTION_GROUP;

    $response = $sdk->sdk->createProtectionGroup($request);

    if ($response->createProtectionGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubscription

<p>Activates Shield Advanced for an account.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note> <p>When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubscriptionRequest();
    $request->requestBody = [
        'iste' => 'dolor',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = CreateSubscriptionXAmzTargetEnum::AWS_SHIELD20160616_CREATE_SUBSCRIPTION;

    $response = $sdk->sdk->createSubscription($request);

    if ($response->createSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProtection

Deletes an Shield Advanced <a>Protection</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProtectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProtectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProtectionRequest();
    $request->deleteProtectionRequest = new DeleteProtectionRequest();
    $request->deleteProtectionRequest->protectionId = 'iste';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = DeleteProtectionXAmzTargetEnum::AWS_SHIELD20160616_DELETE_PROTECTION;

    $response = $sdk->sdk->deleteProtection($request);

    if ($response->deleteProtectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProtectionGroup

Removes the specified protection group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProtectionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProtectionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProtectionGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProtectionGroupRequest();
    $request->deleteProtectionGroupRequest = new DeleteProtectionGroupRequest();
    $request->deleteProtectionGroupRequest->protectionGroupId = 'mollitia';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DeleteProtectionGroupXAmzTargetEnum::AWS_SHIELD20160616_DELETE_PROTECTION_GROUP;

    $response = $sdk->sdk->deleteProtectionGroup($request);

    if ($response->deleteProtectionGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deleteSubscription~~

Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubscriptionRequest();
    $request->requestBody = [
        'nemo' => 'minima',
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = DeleteSubscriptionXAmzTargetEnum::AWS_SHIELD20160616_DELETE_SUBSCRIPTION;

    $response = $sdk->sdk->deleteSubscription($request);

    if ($response->deleteSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAttack

Describes the details of a DDoS attack. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAttackRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAttackRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAttackXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAttackRequest();
    $request->describeAttackRequest = new DescribeAttackRequest();
    $request->describeAttackRequest->attackId = 'repellat';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = DescribeAttackXAmzTargetEnum::AWS_SHIELD20160616_DESCRIBE_ATTACK;

    $response = $sdk->sdk->describeAttack($request);

    if ($response->describeAttackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAttackStatistics

<p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p> <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p> <p>The time range indicates the period covered by the attack statistics data items.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAttackStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAttackStatisticsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAttackStatisticsRequest();
    $request->requestBody = [
        'quia' => 'quis',
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = DescribeAttackStatisticsXAmzTargetEnum::AWS_SHIELD20160616_DESCRIBE_ATTACK_STATISTICS;

    $response = $sdk->sdk->describeAttackStatistics($request);

    if ($response->describeAttackStatisticsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDRTAccess

Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDRTAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDRTAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDRTAccessRequest();
    $request->requestBody = [
        'quasi' => 'error',
    ];
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = DescribeDRTAccessXAmzTargetEnum::AWS_SHIELD20160616_DESCRIBE_DRT_ACCESS;

    $response = $sdk->sdk->describeDRTAccess($request);

    if ($response->describeDRTAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEmergencyContactSettings

A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEmergencyContactSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEmergencyContactSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEmergencyContactSettingsRequest();
    $request->requestBody = [
        'voluptatibus' => 'ipsa',
        'omnis' => 'voluptate',
        'cum' => 'perferendis',
    ];
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = DescribeEmergencyContactSettingsXAmzTargetEnum::AWS_SHIELD20160616_DESCRIBE_EMERGENCY_CONTACT_SETTINGS;

    $response = $sdk->sdk->describeEmergencyContactSettings($request);

    if ($response->describeEmergencyContactSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProtection

Lists the details of a <a>Protection</a> object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProtectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProtectionRequest();
    $request->describeProtectionRequest = new DescribeProtectionRequest();
    $request->describeProtectionRequest->protectionId = 'iusto';
    $request->describeProtectionRequest->resourceArn = 'dicta';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = DescribeProtectionXAmzTargetEnum::AWS_SHIELD20160616_DESCRIBE_PROTECTION;

    $response = $sdk->sdk->describeProtection($request);

    if ($response->describeProtectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProtectionGroup

Returns the specification for the specified protection group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProtectionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProtectionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProtectionGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProtectionGroupRequest();
    $request->describeProtectionGroupRequest = new DescribeProtectionGroupRequest();
    $request->describeProtectionGroupRequest->protectionGroupId = 'quidem';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->xAmzTarget = DescribeProtectionGroupXAmzTargetEnum::AWS_SHIELD20160616_DESCRIBE_PROTECTION_GROUP;

    $response = $sdk->sdk->describeProtectionGroup($request);

    if ($response->describeProtectionGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSubscription

Provides details about the Shield Advanced subscription for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSubscriptionRequest();
    $request->requestBody = [
        'repudiandae' => 'sint',
    ];
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = DescribeSubscriptionXAmzTargetEnum::AWS_SHIELD20160616_DESCRIBE_SUBSCRIPTION;

    $response = $sdk->sdk->describeSubscription($request);

    if ($response->describeSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableApplicationLayerAutomaticResponse

Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableApplicationLayerAutomaticResponseRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisableApplicationLayerAutomaticResponseRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableApplicationLayerAutomaticResponseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableApplicationLayerAutomaticResponseRequest();
    $request->disableApplicationLayerAutomaticResponseRequest = new DisableApplicationLayerAutomaticResponseRequest();
    $request->disableApplicationLayerAutomaticResponseRequest->resourceArn = 'explicabo';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = DisableApplicationLayerAutomaticResponseXAmzTargetEnum::AWS_SHIELD20160616_DISABLE_APPLICATION_LAYER_AUTOMATIC_RESPONSE;

    $response = $sdk->sdk->disableApplicationLayerAutomaticResponse($request);

    if ($response->disableApplicationLayerAutomaticResponseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableProactiveEngagement

Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableProactiveEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableProactiveEngagementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableProactiveEngagementRequest();
    $request->requestBody = [
        'quos' => 'perferendis',
        'magni' => 'assumenda',
        'ipsam' => 'alias',
    ];
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = DisableProactiveEngagementXAmzTargetEnum::AWS_SHIELD20160616_DISABLE_PROACTIVE_ENGAGEMENT;

    $response = $sdk->sdk->disableProactiveEngagement($request);

    if ($response->disableProactiveEngagementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateDRTLogBucket

Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDRTLogBucketRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateDRTLogBucketRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDRTLogBucketXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateDRTLogBucketRequest();
    $request->disassociateDRTLogBucketRequest = new DisassociateDRTLogBucketRequest();
    $request->disassociateDRTLogBucketRequest->logBucket = 'delectus';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = DisassociateDRTLogBucketXAmzTargetEnum::AWS_SHIELD20160616_DISASSOCIATE_DRT_LOG_BUCKET;

    $response = $sdk->sdk->disassociateDRTLogBucket($request);

    if ($response->disassociateDRTLogBucketResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateDRTRole

Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDRTRoleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDRTRoleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateDRTRoleRequest();
    $request->requestBody = [
        'officia' => 'dolor',
        'debitis' => 'a',
        'dolorum' => 'in',
    ];
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = DisassociateDRTRoleXAmzTargetEnum::AWS_SHIELD20160616_DISASSOCIATE_DRT_ROLE;

    $response = $sdk->sdk->disassociateDRTRole($request);

    if ($response->disassociateDRTRoleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateHealthCheck

<p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateHealthCheckRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateHealthCheckRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateHealthCheckXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateHealthCheckRequest();
    $request->disassociateHealthCheckRequest = new DisassociateHealthCheckRequest();
    $request->disassociateHealthCheckRequest->healthCheckArn = 'facere';
    $request->disassociateHealthCheckRequest->protectionId = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DisassociateHealthCheckXAmzTargetEnum::AWS_SHIELD20160616_DISASSOCIATE_HEALTH_CHECK;

    $response = $sdk->sdk->disassociateHealthCheck($request);

    if ($response->disassociateHealthCheckResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableApplicationLayerAutomaticResponse

<p>Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. </p> <note> <p>This feature is available for Amazon CloudFront distributions and Application Load Balancers only.</p> </note> <p>This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated with the resource. For information about how automatic mitigation works and the requirements for using it, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-automatic-app-layer-response.html">Shield Advanced automatic application layer DDoS mitigation</a>.</p> <note> <p>Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use <a>UpdateApplicationLayerAutomaticResponse</a>.</p> </note> <p>To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a>. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF Developer Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableApplicationLayerAutomaticResponseRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnableApplicationLayerAutomaticResponseRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseAction;
use \OpenAPI\OpenAPI\Models\Operations\EnableApplicationLayerAutomaticResponseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableApplicationLayerAutomaticResponseRequest();
    $request->enableApplicationLayerAutomaticResponseRequest = new EnableApplicationLayerAutomaticResponseRequest();
    $request->enableApplicationLayerAutomaticResponseRequest->action = new ResponseAction();
    $request->enableApplicationLayerAutomaticResponseRequest->action->block = [
        'quidem' => 'provident',
        'nam' => 'id',
        'blanditiis' => 'deleniti',
        'sapiente' => 'amet',
    ];
    $request->enableApplicationLayerAutomaticResponseRequest->action->count = [
        'nisi' => 'vel',
        'natus' => 'omnis',
        'molestiae' => 'perferendis',
    ];
    $request->enableApplicationLayerAutomaticResponseRequest->resourceArn = 'nihil';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = EnableApplicationLayerAutomaticResponseXAmzTargetEnum::AWS_SHIELD20160616_ENABLE_APPLICATION_LAYER_AUTOMATIC_RESPONSE;

    $response = $sdk->sdk->enableApplicationLayerAutomaticResponse($request);

    if ($response->enableApplicationLayerAutomaticResponseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableProactiveEngagement

Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableProactiveEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableProactiveEngagementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableProactiveEngagementRequest();
    $request->requestBody = [
        'eum' => 'vero',
        'aspernatur' => 'architecto',
        'magnam' => 'et',
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = EnableProactiveEngagementXAmzTargetEnum::AWS_SHIELD20160616_ENABLE_PROACTIVE_ENGAGEMENT;

    $response = $sdk->sdk->enableProactiveEngagement($request);

    if ($response->enableProactiveEngagementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptionState

Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionStateRequest();
    $request->requestBody = [
        'mollitia' => 'ad',
        'eum' => 'dolor',
        'necessitatibus' => 'odit',
        'nemo' => 'quasi',
    ];
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = GetSubscriptionStateXAmzTargetEnum::AWS_SHIELD20160616_GET_SUBSCRIPTION_STATE;

    $response = $sdk->sdk->getSubscriptionState($request);

    if ($response->getSubscriptionStateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAttacks

Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAttacksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAttacksRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Operations\ListAttacksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAttacksRequest();
    $request->listAttacksRequest = new ListAttacksRequest();
    $request->listAttacksRequest->endTime = new TimeRange();
    $request->listAttacksRequest->endTime->fromInclusive = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T10:00:44.006Z');
    $request->listAttacksRequest->endTime->toExclusive = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-30T09:19:56.236Z');
    $request->listAttacksRequest->maxResults = 352312;
    $request->listAttacksRequest->nextToken = 'expedita';
    $request->listAttacksRequest->resourceArns = [
        'repellat',
        'quibusdam',
    ];
    $request->listAttacksRequest->startTime = new TimeRange();
    $request->listAttacksRequest->startTime->fromInclusive = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-04T19:17:08.641Z');
    $request->listAttacksRequest->startTime->toExclusive = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-20T20:56:20.791Z');
    $request->maxResults = 'consequuntur';
    $request->nextToken = 'praesentium';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = ListAttacksXAmzTargetEnum::AWS_SHIELD20160616_LIST_ATTACKS;

    $response = $sdk->sdk->listAttacks($request);

    if ($response->listAttacksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProtectionGroups

Retrieves <a>ProtectionGroup</a> objects for the account. You can retrieve all protection groups or you can provide filtering criteria and retrieve just the subset of protection groups that match the criteria. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProtectionGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProtectionGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\InclusionProtectionGroupFilters;
use \OpenAPI\OpenAPI\Models\Shared\ProtectionGroupAggregationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtectionGroupPatternEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtectedResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListProtectionGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProtectionGroupsRequest();
    $request->listProtectionGroupsRequest = new ListProtectionGroupsRequest();
    $request->listProtectionGroupsRequest->inclusionFilters = new InclusionProtectionGroupFilters();
    $request->listProtectionGroupsRequest->inclusionFilters->aggregations = [
        ProtectionGroupAggregationEnum::MEAN,
        ProtectionGroupAggregationEnum::SUM,
    ];
    $request->listProtectionGroupsRequest->inclusionFilters->patterns = [
        ProtectionGroupPatternEnum::ALL,
        ProtectionGroupPatternEnum::ALL,
    ];
    $request->listProtectionGroupsRequest->inclusionFilters->protectionGroupIds = [
        'quidem',
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->listProtectionGroupsRequest->inclusionFilters->resourceTypes = [
        ProtectedResourceTypeEnum::CLOUDFRONT_DISTRIBUTION,
        ProtectedResourceTypeEnum::GLOBAL_ACCELERATOR,
        ProtectedResourceTypeEnum::ELASTIC_IP_ALLOCATION,
    ];
    $request->listProtectionGroupsRequest->maxResults = 975522;
    $request->listProtectionGroupsRequest->nextToken = 'perferendis';
    $request->maxResults = 'fugiat';
    $request->nextToken = 'amet';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = ListProtectionGroupsXAmzTargetEnum::AWS_SHIELD20160616_LIST_PROTECTION_GROUPS;

    $response = $sdk->sdk->listProtectionGroups($request);

    if ($response->listProtectionGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProtections

Retrieves <a>Protection</a> objects for the account. You can retrieve all protections or you can provide filtering criteria and retrieve just the subset of protections that match the criteria. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProtectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProtectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\InclusionProtectionFilters;
use \OpenAPI\OpenAPI\Models\Shared\ProtectedResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListProtectionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProtectionsRequest();
    $request->listProtectionsRequest = new ListProtectionsRequest();
    $request->listProtectionsRequest->inclusionFilters = new InclusionProtectionFilters();
    $request->listProtectionsRequest->inclusionFilters->protectionNames = [
        'totam',
        'dignissimos',
    ];
    $request->listProtectionsRequest->inclusionFilters->resourceArns = [
        'quis',
    ];
    $request->listProtectionsRequest->inclusionFilters->resourceTypes = [
        ProtectedResourceTypeEnum::ROUTE53_HOSTED_ZONE,
    ];
    $request->listProtectionsRequest->maxResults = 18521;
    $request->listProtectionsRequest->nextToken = 'dolores';
    $request->maxResults = 'minus';
    $request->nextToken = 'quam';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = ListProtectionsXAmzTargetEnum::AWS_SHIELD20160616_LIST_PROTECTIONS;

    $response = $sdk->sdk->listProtections($request);

    if ($response->listProtectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourcesInProtectionGroup

Retrieves the resources that are included in the protection group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesInProtectionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourcesInProtectionGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesInProtectionGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourcesInProtectionGroupRequest();
    $request->listResourcesInProtectionGroupRequest = new ListResourcesInProtectionGroupRequest();
    $request->listResourcesInProtectionGroupRequest->maxResults = 596656;
    $request->listResourcesInProtectionGroupRequest->nextToken = 'voluptatem';
    $request->listResourcesInProtectionGroupRequest->protectionGroupId = 'porro';
    $request->maxResults = 'consequuntur';
    $request->nextToken = 'blanditiis';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';
    $request->xAmzTarget = ListResourcesInProtectionGroupXAmzTargetEnum::AWS_SHIELD20160616_LIST_RESOURCES_IN_PROTECTION_GROUP;

    $response = $sdk->sdk->listResourcesInProtectionGroup($request);

    if ($response->listResourcesInProtectionGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Shield.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceARN = 'modi';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_SHIELD20160616_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or updates tags for a resource in Shield.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'delectus';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_SHIELD20160616_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from a resource in Shield.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceARN = 'hic';
    $request->untagResourceRequest->tagKeys = [
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_SHIELD20160616_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplicationLayerAutomaticResponse

Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationLayerAutomaticResponseRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateApplicationLayerAutomaticResponseRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResponseAction;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationLayerAutomaticResponseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationLayerAutomaticResponseRequest();
    $request->updateApplicationLayerAutomaticResponseRequest = new UpdateApplicationLayerAutomaticResponseRequest();
    $request->updateApplicationLayerAutomaticResponseRequest->action = new ResponseAction();
    $request->updateApplicationLayerAutomaticResponseRequest->action->block = [
        'odio' => 'quaerat',
        'accusamus' => 'quidem',
    ];
    $request->updateApplicationLayerAutomaticResponseRequest->action->count = [
        'voluptas' => 'natus',
        'eos' => 'atque',
        'sit' => 'fugiat',
        'ab' => 'soluta',
    ];
    $request->updateApplicationLayerAutomaticResponseRequest->resourceArn = 'dolorum';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = UpdateApplicationLayerAutomaticResponseXAmzTargetEnum::AWS_SHIELD20160616_UPDATE_APPLICATION_LAYER_AUTOMATIC_RESPONSE;

    $response = $sdk->sdk->updateApplicationLayerAutomaticResponse($request);

    if ($response->updateApplicationLayerAutomaticResponseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEmergencyContactSettings

Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmergencyContactSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEmergencyContactSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EmergencyContact;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEmergencyContactSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEmergencyContactSettingsRequest();
    $request->updateEmergencyContactSettingsRequest = new UpdateEmergencyContactSettingsRequest();
    $request->updateEmergencyContactSettingsRequest->emergencyContactList = [
        new EmergencyContact(),
        new EmergencyContact(),
        new EmergencyContact(),
        new EmergencyContact(),
    ];
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = UpdateEmergencyContactSettingsXAmzTargetEnum::AWS_SHIELD20160616_UPDATE_EMERGENCY_CONTACT_SETTINGS;

    $response = $sdk->sdk->updateEmergencyContactSettings($request);

    if ($response->updateEmergencyContactSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProtectionGroup

Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProtectionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProtectionGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProtectionGroupAggregationEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtectionGroupPatternEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtectedResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProtectionGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProtectionGroupRequest();
    $request->updateProtectionGroupRequest = new UpdateProtectionGroupRequest();
    $request->updateProtectionGroupRequest->aggregation = ProtectionGroupAggregationEnum::SUM;
    $request->updateProtectionGroupRequest->members = [
        'optio',
    ];
    $request->updateProtectionGroupRequest->pattern = ProtectionGroupPatternEnum::BY_RESOURCE_TYPE;
    $request->updateProtectionGroupRequest->protectionGroupId = 'ad';
    $request->updateProtectionGroupRequest->resourceType = ProtectedResourceTypeEnum::GLOBAL_ACCELERATOR;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzTarget = UpdateProtectionGroupXAmzTargetEnum::AWS_SHIELD20160616_UPDATE_PROTECTION_GROUP;

    $response = $sdk->sdk->updateProtectionGroup($request);

    if ($response->updateProtectionGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscription

<p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutoRenewEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriptionRequest();
    $request->updateSubscriptionRequest = new UpdateSubscriptionRequest();
    $request->updateSubscriptionRequest->autoRenew = AutoRenewEnum::ENABLED;
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = UpdateSubscriptionXAmzTargetEnum::AWS_SHIELD20160616_UPDATE_SUBSCRIPTION;

    $response = $sdk->sdk->updateSubscription($request);

    if ($response->updateSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
