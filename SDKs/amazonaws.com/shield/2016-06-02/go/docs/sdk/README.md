# SDK

## Overview

<fullname>Shield Advanced</fullname> <p>This is the <i>Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the Shield Advanced API actions, data types, and errors. For detailed information about WAF and Shield Advanced features and an overview of how to use the WAF and Shield Advanced APIs, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF and Shield Developer Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/shield/>
### Available Operations

* [AssociateDRTLogBucket](#associatedrtlogbucket) - <p>Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.</p> <p>To use the services of the SRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
* [AssociateDRTRole](#associatedrtrole) - <p>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <code>AWSShieldDRTAccessPolicy</code> managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a>. For more information see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Adding and removing IAM identity permissions</a>. The role must also trust the service principal <code>drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON policy elements: Principal</a>.</p> <p>The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user permissions to pass a role to an Amazon Web Services service</a>. </p> <p>To use the services of the SRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
* [AssociateHealthCheck](#associatehealthcheck) - <p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
* [AssociateProactiveEngagementDetails](#associateproactiveengagementdetails) - <p>Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list. </p> <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>. </p> <note> <p>This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.</p> <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call. </p> </note>
* [CreateProtection](#createprotection) - <p>Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.</p> <p>You can add protection to only a single resource with each <code>CreateProtection</code> request. You can add protection to multiple resources at once through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Adding Shield Advanced protection to Amazon Web Services resources</a>.</p>
* [CreateProtectionGroup](#createprotectiongroup) - Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
* [CreateSubscription](#createsubscription) - <p>Activates Shield Advanced for an account.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note> <p>When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>
* [DeleteProtection](#deleteprotection) - Deletes an Shield Advanced <a>Protection</a>.
* [DeleteProtectionGroup](#deleteprotectiongroup) - Removes the specified protection group.
* [~~DeleteSubscription~~](#deletesubscription) - Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment.  :warning: **Deprecated**
* [DescribeAttack](#describeattack) - Describes the details of a DDoS attack. 
* [DescribeAttackStatistics](#describeattackstatistics) - <p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p> <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p> <p>The time range indicates the period covered by the attack statistics data items.</p>
* [DescribeDRTAccess](#describedrtaccess) - Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.
* [DescribeEmergencyContactSettings](#describeemergencycontactsettings) - A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
* [DescribeProtection](#describeprotection) - Lists the details of a <a>Protection</a> object.
* [DescribeProtectionGroup](#describeprotectiongroup) - Returns the specification for the specified protection group.
* [DescribeSubscription](#describesubscription) - Provides details about the Shield Advanced subscription for an account.
* [DisableApplicationLayerAutomaticResponse](#disableapplicationlayerautomaticresponse) - Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource. 
* [DisableProactiveEngagement](#disableproactiveengagement) - Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.
* [DisassociateDRTLogBucket](#disassociatedrtlogbucket) - Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.
* [DisassociateDRTRole](#disassociatedrtrole) - Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.
* [DisassociateHealthCheck](#disassociatehealthcheck) - <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
* [EnableApplicationLayerAutomaticResponse](#enableapplicationlayerautomaticresponse) - <p>Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. </p> <note> <p>This feature is available for Amazon CloudFront distributions and Application Load Balancers only.</p> </note> <p>This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated with the resource. For information about how automatic mitigation works and the requirements for using it, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-automatic-app-layer-response.html">Shield Advanced automatic application layer DDoS mitigation</a>.</p> <note> <p>Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use <a>UpdateApplicationLayerAutomaticResponse</a>.</p> </note> <p>To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a>. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF Developer Guide</a>.</p>
* [EnableProactiveEngagement](#enableproactiveengagement) - Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
* [GetSubscriptionState](#getsubscriptionstate) - Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.
* [ListAttacks](#listattacks) - Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.
* [ListProtectionGroups](#listprotectiongroups) - Retrieves <a>ProtectionGroup</a> objects for the account. You can retrieve all protection groups or you can provide filtering criteria and retrieve just the subset of protection groups that match the criteria. 
* [ListProtections](#listprotections) - Retrieves <a>Protection</a> objects for the account. You can retrieve all protections or you can provide filtering criteria and retrieve just the subset of protections that match the criteria. 
* [ListResourcesInProtectionGroup](#listresourcesinprotectiongroup) - Retrieves the resources that are included in the protection group. 
* [ListTagsForResource](#listtagsforresource) - Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Shield.
* [TagResource](#tagresource) - Adds or updates tags for a resource in Shield.
* [UntagResource](#untagresource) - Removes tags from a resource in Shield.
* [UpdateApplicationLayerAutomaticResponse](#updateapplicationlayerautomaticresponse) - Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.
* [UpdateEmergencyContactSettings](#updateemergencycontactsettings) - Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
* [UpdateProtectionGroup](#updateprotectiongroup) - Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 
* [UpdateSubscription](#updatesubscription) - <p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note>

## AssociateDRTLogBucket

<p>Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.</p> <p>To use the services of the SRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateDRTLogBucket(ctx, operations.AssociateDRTLogBucketRequest{
        AssociateDRTLogBucketRequest: shared.AssociateDRTLogBucketRequest{
            LogBucket: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.AssociateDRTLogBucketXAmzTargetEnumAwsShield20160616AssociateDrtLogBucket,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDRTLogBucketResponse != nil {
        // handle response
    }
}
```

## AssociateDRTRole

<p>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <code>AWSShieldDRTAccessPolicy</code> managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a>. For more information see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Adding and removing IAM identity permissions</a>. The role must also trust the service principal <code>drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON policy elements: Principal</a>.</p> <p>The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user permissions to pass a role to an Amazon Web Services service</a>. </p> <p>To use the services of the SRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateDRTRole(ctx, operations.AssociateDRTRoleRequest{
        AssociateDRTRoleRequest: shared.AssociateDRTRoleRequest{
            RoleArn: "delectus",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.AssociateDRTRoleXAmzTargetEnumAwsShield20160616AssociateDrtRole,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDRTRoleResponse != nil {
        // handle response
    }
}
```

## AssociateHealthCheck

<p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateHealthCheck(ctx, operations.AssociateHealthCheckRequest{
        AssociateHealthCheckRequest: shared.AssociateHealthCheckRequest{
            HealthCheckArn: "excepturi",
            ProtectionID: "nisi",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.AssociateHealthCheckXAmzTargetEnumAwsShield20160616AssociateHealthCheck,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateHealthCheckResponse != nil {
        // handle response
    }
}
```

## AssociateProactiveEngagementDetails

<p>Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list. </p> <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>. </p> <note> <p>This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.</p> <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call. </p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateProactiveEngagementDetails(ctx, operations.AssociateProactiveEngagementDetailsRequest{
        AssociateProactiveEngagementDetailsRequest: shared.AssociateProactiveEngagementDetailsRequest{
            EmergencyContactList: []shared.EmergencyContact{
                shared.EmergencyContact{
                    ContactNotes: sdk.String("repellendus"),
                    EmailAddress: "sapiente",
                    PhoneNumber: sdk.String("quo"),
                },
                shared.EmergencyContact{
                    ContactNotes: sdk.String("odit"),
                    EmailAddress: "at",
                    PhoneNumber: sdk.String("at"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.AssociateProactiveEngagementDetailsXAmzTargetEnumAwsShield20160616AssociateProactiveEngagementDetails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateProactiveEngagementDetailsResponse != nil {
        // handle response
    }
}
```

## CreateProtection

<p>Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.</p> <p>You can add protection to only a single resource with each <code>CreateProtection</code> request. You can add protection to multiple resources at once through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Adding Shield Advanced protection to Amazon Web Services resources</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProtection(ctx, operations.CreateProtectionRequest{
        CreateProtectionRequest: shared.CreateProtectionRequest{
            Name: "Samuel Reichel",
            ResourceArn: "fugit",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("hic"),
                    Value: sdk.String("optio"),
                },
                shared.Tag{
                    Key: sdk.String("totam"),
                    Value: sdk.String("beatae"),
                },
                shared.Tag{
                    Key: sdk.String("commodi"),
                    Value: sdk.String("molestiae"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CreateProtectionXAmzTargetEnumAwsShield20160616CreateProtection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProtectionResponse != nil {
        // handle response
    }
}
```

## CreateProtectionGroup

Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateProtectionGroup(ctx, operations.CreateProtectionGroupRequest{
        CreateProtectionGroupRequest: shared.CreateProtectionGroupRequest{
            Aggregation: shared.ProtectionGroupAggregationEnumSum,
            Members: []string{
                "ad",
            },
            Pattern: shared.ProtectionGroupPatternEnumArbitrary,
            ProtectionGroupID: "sed",
            ResourceType: shared.ProtectedResourceTypeEnumClassicLoadBalancer.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("natus"),
                    Value: sdk.String("laboriosam"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.CreateProtectionGroupXAmzTargetEnumAwsShield20160616CreateProtectionGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProtectionGroupResponse != nil {
        // handle response
    }
}
```

## CreateSubscription

<p>Activates Shield Advanced for an account.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note> <p>When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateSubscription(ctx, operations.CreateSubscriptionRequest{
        RequestBody: map[string]interface{}{
            "quidem": "architecto",
            "ipsa": "reiciendis",
            "est": "mollitia",
            "laborum": "dolores",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.CreateSubscriptionXAmzTargetEnumAwsShield20160616CreateSubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSubscriptionResponse != nil {
        // handle response
    }
}
```

## DeleteProtection

Deletes an Shield Advanced <a>Protection</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProtection(ctx, operations.DeleteProtectionRequest{
        DeleteProtectionRequest: shared.DeleteProtectionRequest{
            ProtectionID: "minima",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.DeleteProtectionXAmzTargetEnumAwsShield20160616DeleteProtection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProtectionResponse != nil {
        // handle response
    }
}
```

## DeleteProtectionGroup

Removes the specified protection group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteProtectionGroup(ctx, operations.DeleteProtectionGroupRequest{
        DeleteProtectionGroupRequest: shared.DeleteProtectionGroupRequest{
            ProtectionGroupID: "mollitia",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.DeleteProtectionGroupXAmzTargetEnumAwsShield20160616DeleteProtectionGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProtectionGroupResponse != nil {
        // handle response
    }
}
```

## ~~DeleteSubscription~~

Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSubscription(ctx, operations.DeleteSubscriptionRequest{
        RequestBody: map[string]interface{}{
            "quam": "molestiae",
            "velit": "error",
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.DeleteSubscriptionXAmzTargetEnumAwsShield20160616DeleteSubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSubscriptionResponse != nil {
        // handle response
    }
}
```

## DescribeAttack

Describes the details of a DDoS attack. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAttack(ctx, operations.DescribeAttackRequest{
        DescribeAttackRequest: shared.DescribeAttackRequest{
            AttackID: "quo",
        },
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.DescribeAttackXAmzTargetEnumAwsShield20160616DescribeAttack,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAttackResponse != nil {
        // handle response
    }
}
```

## DescribeAttackStatistics

<p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p> <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p> <p>The time range indicates the period covered by the attack statistics data items.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAttackStatistics(ctx, operations.DescribeAttackStatisticsRequest{
        RequestBody: map[string]interface{}{
            "temporibus": "laborum",
            "quasi": "reiciendis",
            "voluptatibus": "vero",
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.DescribeAttackStatisticsXAmzTargetEnumAwsShield20160616DescribeAttackStatistics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAttackStatisticsResponse != nil {
        // handle response
    }
}
```

## DescribeDRTAccess

Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDRTAccess(ctx, operations.DescribeDRTAccessRequest{
        RequestBody: map[string]interface{}{
            "doloremque": "reprehenderit",
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DescribeDRTAccessXAmzTargetEnumAwsShield20160616DescribeDrtAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDRTAccessResponse != nil {
        // handle response
    }
}
```

## DescribeEmergencyContactSettings

A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeEmergencyContactSettings(ctx, operations.DescribeEmergencyContactSettingsRequest{
        RequestBody: map[string]interface{}{
            "enim": "accusamus",
            "commodi": "repudiandae",
            "quae": "ipsum",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.DescribeEmergencyContactSettingsXAmzTargetEnumAwsShield20160616DescribeEmergencyContactSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEmergencyContactSettingsResponse != nil {
        // handle response
    }
}
```

## DescribeProtection

Lists the details of a <a>Protection</a> object.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProtection(ctx, operations.DescribeProtectionRequest{
        DescribeProtectionRequest: shared.DescribeProtectionRequest{
            ProtectionID: sdk.String("voluptates"),
            ResourceArn: sdk.String("quasi"),
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.DescribeProtectionXAmzTargetEnumAwsShield20160616DescribeProtection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProtectionResponse != nil {
        // handle response
    }
}
```

## DescribeProtectionGroup

Returns the specification for the specified protection group.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeProtectionGroup(ctx, operations.DescribeProtectionGroupRequest{
        DescribeProtectionGroupRequest: shared.DescribeProtectionGroupRequest{
            ProtectionGroupID: "est",
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzTarget: operations.DescribeProtectionGroupXAmzTargetEnumAwsShield20160616DescribeProtectionGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProtectionGroupResponse != nil {
        // handle response
    }
}
```

## DescribeSubscription

Provides details about the Shield Advanced subscription for an account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSubscription(ctx, operations.DescribeSubscriptionRequest{
        RequestBody: map[string]interface{}{
            "aliquid": "cupiditate",
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.DescribeSubscriptionXAmzTargetEnumAwsShield20160616DescribeSubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSubscriptionResponse != nil {
        // handle response
    }
}
```

## DisableApplicationLayerAutomaticResponse

Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisableApplicationLayerAutomaticResponse(ctx, operations.DisableApplicationLayerAutomaticResponseRequest{
        DisableApplicationLayerAutomaticResponseRequest: shared.DisableApplicationLayerAutomaticResponseRequest{
            ResourceArn: "dolorum",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.DisableApplicationLayerAutomaticResponseXAmzTargetEnumAwsShield20160616DisableApplicationLayerAutomaticResponse,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableApplicationLayerAutomaticResponseResponse != nil {
        // handle response
    }
}
```

## DisableProactiveEngagement

Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisableProactiveEngagement(ctx, operations.DisableProactiveEngagementRequest{
        RequestBody: map[string]interface{}{
            "eligendi": "sint",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.DisableProactiveEngagementXAmzTargetEnumAwsShield20160616DisableProactiveEngagement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableProactiveEngagementResponse != nil {
        // handle response
    }
}
```

## DisassociateDRTLogBucket

Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateDRTLogBucket(ctx, operations.DisassociateDRTLogBucketRequest{
        DisassociateDRTLogBucketRequest: shared.DisassociateDRTLogBucketRequest{
            LogBucket: "a",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DisassociateDRTLogBucketXAmzTargetEnumAwsShield20160616DisassociateDrtLogBucket,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateDRTLogBucketResponse != nil {
        // handle response
    }
}
```

## DisassociateDRTRole

Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateDRTRole(ctx, operations.DisassociateDRTRoleRequest{
        RequestBody: map[string]interface{}{
            "cumque": "facere",
            "ea": "aliquid",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.DisassociateDRTRoleXAmzTargetEnumAwsShield20160616DisassociateDrtRole,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateDRTRoleResponse != nil {
        // handle response
    }
}
```

## DisassociateHealthCheck

<p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateHealthCheck(ctx, operations.DisassociateHealthCheckRequest{
        DisassociateHealthCheckRequest: shared.DisassociateHealthCheckRequest{
            HealthCheckArn: "quidem",
            ProtectionID: "provident",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DisassociateHealthCheckXAmzTargetEnumAwsShield20160616DisassociateHealthCheck,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateHealthCheckResponse != nil {
        // handle response
    }
}
```

## EnableApplicationLayerAutomaticResponse

<p>Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. </p> <note> <p>This feature is available for Amazon CloudFront distributions and Application Load Balancers only.</p> </note> <p>This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated with the resource. For information about how automatic mitigation works and the requirements for using it, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-automatic-app-layer-response.html">Shield Advanced automatic application layer DDoS mitigation</a>.</p> <note> <p>Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use <a>UpdateApplicationLayerAutomaticResponse</a>.</p> </note> <p>To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a>. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF Developer Guide</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.EnableApplicationLayerAutomaticResponse(ctx, operations.EnableApplicationLayerAutomaticResponseRequest{
        EnableApplicationLayerAutomaticResponseRequest: shared.EnableApplicationLayerAutomaticResponseRequest{
            Action: shared.ResponseAction{
                Block: map[string]interface{}{
                    "vel": "natus",
                    "omnis": "molestiae",
                },
                Count: map[string]interface{}{
                    "nihil": "magnam",
                },
            },
            ResourceArn: "distinctio",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.EnableApplicationLayerAutomaticResponseXAmzTargetEnumAwsShield20160616EnableApplicationLayerAutomaticResponse,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableApplicationLayerAutomaticResponseResponse != nil {
        // handle response
    }
}
```

## EnableProactiveEngagement

Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.EnableProactiveEngagement(ctx, operations.EnableProactiveEngagementRequest{
        RequestBody: map[string]interface{}{
            "aspernatur": "architecto",
            "magnam": "et",
            "excepturi": "ullam",
            "provident": "quos",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.EnableProactiveEngagementXAmzTargetEnumAwsShield20160616EnableProactiveEngagement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableProactiveEngagementResponse != nil {
        // handle response
    }
}
```

## GetSubscriptionState

Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSubscriptionState(ctx, operations.GetSubscriptionStateRequest{
        RequestBody: map[string]interface{}{
            "necessitatibus": "odit",
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.GetSubscriptionStateXAmzTargetEnumAwsShield20160616GetSubscriptionState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSubscriptionStateResponse != nil {
        // handle response
    }
}
```

## ListAttacks

Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAttacks(ctx, operations.ListAttacksRequest{
        ListAttacksRequest: shared.ListAttacksRequest{
            EndTime: &shared.TimeRange{
                FromInclusive: types.MustTimeFromString("2021-08-05T03:52:18.835Z"),
                ToExclusive: types.MustTimeFromString("2022-11-25T10:00:44.006Z"),
            },
            MaxResults: sdk.Int64(99569),
            NextToken: sdk.String("repudiandae"),
            ResourceArns: []string{
                "expedita",
                "nihil",
            },
            StartTime: &shared.TimeRange{
                FromInclusive: types.MustTimeFromString("2020-06-23T22:50:14.437Z"),
                ToExclusive: types.MustTimeFromString("2022-02-04T19:17:08.641Z"),
            },
        },
        MaxResults: sdk.String("pariatur"),
        NextToken: sdk.String("accusantium"),
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.ListAttacksXAmzTargetEnumAwsShield20160616ListAttacks,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAttacksResponse != nil {
        // handle response
    }
}
```

## ListProtectionGroups

Retrieves <a>ProtectionGroup</a> objects for the account. You can retrieve all protection groups or you can provide filtering criteria and retrieve just the subset of protection groups that match the criteria. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProtectionGroups(ctx, operations.ListProtectionGroupsRequest{
        ListProtectionGroupsRequest: shared.ListProtectionGroupsRequest{
            InclusionFilters: &shared.InclusionProtectionGroupFilters{
                Aggregations: []shared.ProtectionGroupAggregationEnum{
                    shared.ProtectionGroupAggregationEnumMax,
                    shared.ProtectionGroupAggregationEnumMean,
                    shared.ProtectionGroupAggregationEnumMean,
                    shared.ProtectionGroupAggregationEnumSum,
                },
                Patterns: []shared.ProtectionGroupPatternEnum{
                    shared.ProtectionGroupPatternEnumAll,
                    shared.ProtectionGroupPatternEnumAll,
                },
                ProtectionGroupIds: []string{
                    "quidem",
                    "ipsam",
                    "voluptate",
                    "autem",
                },
                ResourceTypes: []shared.ProtectedResourceTypeEnum{
                    shared.ProtectedResourceTypeEnumCloudfrontDistribution,
                    shared.ProtectedResourceTypeEnumGlobalAccelerator,
                    shared.ProtectedResourceTypeEnumElasticIPAllocation,
                },
            },
            MaxResults: sdk.Int64(975522),
            NextToken: sdk.String("perferendis"),
        },
        MaxResults: sdk.String("fugiat"),
        NextToken: sdk.String("amet"),
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.ListProtectionGroupsXAmzTargetEnumAwsShield20160616ListProtectionGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProtectionGroupsResponse != nil {
        // handle response
    }
}
```

## ListProtections

Retrieves <a>Protection</a> objects for the account. You can retrieve all protections or you can provide filtering criteria and retrieve just the subset of protections that match the criteria. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListProtections(ctx, operations.ListProtectionsRequest{
        ListProtectionsRequest: shared.ListProtectionsRequest{
            InclusionFilters: &shared.InclusionProtectionFilters{
                ProtectionNames: []string{
                    "totam",
                    "dignissimos",
                },
                ResourceArns: []string{
                    "quis",
                },
                ResourceTypes: []shared.ProtectedResourceTypeEnum{
                    shared.ProtectedResourceTypeEnumRoute53HostedZone,
                },
            },
            MaxResults: sdk.Int64(18521),
            NextToken: sdk.String("dolores"),
        },
        MaxResults: sdk.String("minus"),
        NextToken: sdk.String("quam"),
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nostrum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.ListProtectionsXAmzTargetEnumAwsShield20160616ListProtections,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProtectionsResponse != nil {
        // handle response
    }
}
```

## ListResourcesInProtectionGroup

Retrieves the resources that are included in the protection group. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListResourcesInProtectionGroup(ctx, operations.ListResourcesInProtectionGroupRequest{
        ListResourcesInProtectionGroupRequest: shared.ListResourcesInProtectionGroupRequest{
            MaxResults: sdk.Int64(596656),
            NextToken: sdk.String("voluptatem"),
            ProtectionGroupID: "porro",
        },
        MaxResults: sdk.String("consequuntur"),
        NextToken: sdk.String("blanditiis"),
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzTarget: operations.ListResourcesInProtectionGroupXAmzTargetEnumAwsShield20160616ListResourcesInProtectionGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourcesInProtectionGroupResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Shield.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceARN: "modi",
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsShield20160616ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds or updates tags for a resource in Shield.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceARN: "delectus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("quos"),
                    Value: sdk.String("aliquid"),
                },
                shared.Tag{
                    Key: sdk.String("dolorem"),
                    Value: sdk.String("dolorem"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsShield20160616TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes tags from a resource in Shield.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceARN: "dignissimos",
            TagKeys: []string{
                "amet",
                "dolorum",
                "numquam",
                "veritatis",
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsShield20160616UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateApplicationLayerAutomaticResponse

Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateApplicationLayerAutomaticResponse(ctx, operations.UpdateApplicationLayerAutomaticResponseRequest{
        UpdateApplicationLayerAutomaticResponseRequest: shared.UpdateApplicationLayerAutomaticResponseRequest{
            Action: shared.ResponseAction{
                Block: map[string]interface{}{
                    "voluptas": "natus",
                    "eos": "atque",
                    "sit": "fugiat",
                    "ab": "soluta",
                },
                Count: map[string]interface{}{
                    "iusto": "voluptate",
                    "dolorum": "deleniti",
                    "omnis": "necessitatibus",
                },
            },
            ResourceArn: "distinctio",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.UpdateApplicationLayerAutomaticResponseXAmzTargetEnumAwsShield20160616UpdateApplicationLayerAutomaticResponse,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateApplicationLayerAutomaticResponseResponse != nil {
        // handle response
    }
}
```

## UpdateEmergencyContactSettings

Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateEmergencyContactSettings(ctx, operations.UpdateEmergencyContactSettingsRequest{
        UpdateEmergencyContactSettingsRequest: shared.UpdateEmergencyContactSettingsRequest{
            EmergencyContactList: []shared.EmergencyContact{
                shared.EmergencyContact{
                    ContactNotes: sdk.String("perferendis"),
                    EmailAddress: "amet",
                    PhoneNumber: sdk.String("optio"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.UpdateEmergencyContactSettingsXAmzTargetEnumAwsShield20160616UpdateEmergencyContactSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEmergencyContactSettingsResponse != nil {
        // handle response
    }
}
```

## UpdateProtectionGroup

Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateProtectionGroup(ctx, operations.UpdateProtectionGroupRequest{
        UpdateProtectionGroupRequest: shared.UpdateProtectionGroupRequest{
            Aggregation: shared.ProtectionGroupAggregationEnumMax,
            Members: []string{
                "similique",
                "alias",
                "at",
            },
            Pattern: shared.ProtectionGroupPatternEnumAll,
            ProtectionGroupID: "tempora",
            ResourceType: shared.ProtectedResourceTypeEnumElasticIPAllocation.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.UpdateProtectionGroupXAmzTargetEnumAwsShield20160616UpdateProtectionGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProtectionGroupResponse != nil {
        // handle response
    }
}
```

## UpdateSubscription

<p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSubscription(ctx, operations.UpdateSubscriptionRequest{
        UpdateSubscriptionRequest: shared.UpdateSubscriptionRequest{
            AutoRenew: shared.AutoRenewEnumEnabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.UpdateSubscriptionXAmzTargetEnumAwsShield20160616UpdateSubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSubscriptionResponse != nil {
        // handle response
    }
}
```
