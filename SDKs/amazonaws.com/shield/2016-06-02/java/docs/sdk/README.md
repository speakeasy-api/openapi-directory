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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketRequest;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketResponse;
import org.openapis.openapi.models.operations.AssociateDRTLogBucketXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateDRTLogBucketRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDRTLogBucketRequest req = new AssociateDRTLogBucketRequest(                new AssociateDRTLogBucketRequest("deserunt");, AssociateDRTLogBucketXAmzTargetEnum.AWS_SHIELD20160616_ASSOCIATE_DRT_LOG_BUCKET) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            AssociateDRTLogBucketResponse res = sdk.sdk.associateDRTLogBucket(req);

            if (res.associateDRTLogBucketResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateDRTRole

<p>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <code>AWSShieldDRTAccessPolicy</code> managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a>. For more information see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Adding and removing IAM identity permissions</a>. The role must also trust the service principal <code>drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON policy elements: Principal</a>.</p> <p>The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user permissions to pass a role to an Amazon Web Services service</a>. </p> <p>To use the services of the SRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateDRTRoleRequest;
import org.openapis.openapi.models.operations.AssociateDRTRoleResponse;
import org.openapis.openapi.models.operations.AssociateDRTRoleXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateDRTRoleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDRTRoleRequest req = new AssociateDRTRoleRequest(                new AssociateDRTRoleRequest("molestiae");, AssociateDRTRoleXAmzTargetEnum.AWS_SHIELD20160616_ASSOCIATE_DRT_ROLE) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            AssociateDRTRoleResponse res = sdk.sdk.associateDRTRole(req);

            if (res.associateDRTRoleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateHealthCheck

<p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateHealthCheckRequest;
import org.openapis.openapi.models.operations.AssociateHealthCheckResponse;
import org.openapis.openapi.models.operations.AssociateHealthCheckXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateHealthCheckRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateHealthCheckRequest req = new AssociateHealthCheckRequest(                new AssociateHealthCheckRequest("ab", "quis");, AssociateHealthCheckXAmzTargetEnum.AWS_SHIELD20160616_ASSOCIATE_HEALTH_CHECK) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "perferendis";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quo";
            }};            

            AssociateHealthCheckResponse res = sdk.sdk.associateHealthCheck(req);

            if (res.associateHealthCheckResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateProactiveEngagementDetails

<p>Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list. </p> <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>. </p> <note> <p>This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.</p> <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateProactiveEngagementDetailsRequest;
import org.openapis.openapi.models.operations.AssociateProactiveEngagementDetailsResponse;
import org.openapis.openapi.models.operations.AssociateProactiveEngagementDetailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateProactiveEngagementDetailsRequest;
import org.openapis.openapi.models.shared.EmergencyContact;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateProactiveEngagementDetailsRequest req = new AssociateProactiveEngagementDetailsRequest(                new AssociateProactiveEngagementDetailsRequest(                new org.openapis.openapi.models.shared.EmergencyContact[]{{
                                                add(new EmergencyContact("quod") {{
                                                    contactNotes = "at";
                                                    emailAddress = "maiores";
                                                    phoneNumber = "molestiae";
                                                }}),
                                                add(new EmergencyContact("porro") {{
                                                    contactNotes = "quod";
                                                    emailAddress = "esse";
                                                    phoneNumber = "totam";
                                                }}),
                                                add(new EmergencyContact("officia") {{
                                                    contactNotes = "dolorum";
                                                    emailAddress = "dicta";
                                                    phoneNumber = "nam";
                                                }}),
                                                add(new EmergencyContact("hic") {{
                                                    contactNotes = "occaecati";
                                                    emailAddress = "fugit";
                                                    phoneNumber = "deleniti";
                                                }}),
                                            }});, AssociateProactiveEngagementDetailsXAmzTargetEnum.AWS_SHIELD20160616_ASSOCIATE_PROACTIVE_ENGAGEMENT_DETAILS) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            AssociateProactiveEngagementDetailsResponse res = sdk.sdk.associateProactiveEngagementDetails(req);

            if (res.associateProactiveEngagementDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProtection

<p>Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.</p> <p>You can add protection to only a single resource with each <code>CreateProtection</code> request. You can add protection to multiple resources at once through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Adding Shield Advanced protection to Amazon Web Services resources</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProtectionRequest;
import org.openapis.openapi.models.operations.CreateProtectionResponse;
import org.openapis.openapi.models.operations.CreateProtectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateProtectionRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProtectionRequest req = new CreateProtectionRequest(                new CreateProtectionRequest("cum", "esse") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "excepturi";
                                        value = "aspernatur";
                                    }}),
                                }};
                            }};, CreateProtectionXAmzTargetEnum.AWS_SHIELD20160616_CREATE_PROTECTION) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ad";
                xAmzCredential = "natus";
                xAmzDate = "sed";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "natus";
            }};            

            CreateProtectionResponse res = sdk.sdk.createProtection(req);

            if (res.createProtectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProtectionGroup

Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProtectionGroupRequest;
import org.openapis.openapi.models.operations.CreateProtectionGroupResponse;
import org.openapis.openapi.models.operations.CreateProtectionGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateProtectionGroupRequest;
import org.openapis.openapi.models.shared.ProtectedResourceTypeEnum;
import org.openapis.openapi.models.shared.ProtectionGroupAggregationEnum;
import org.openapis.openapi.models.shared.ProtectionGroupPatternEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProtectionGroupRequest req = new CreateProtectionGroupRequest(                new CreateProtectionGroupRequest(ProtectionGroupAggregationEnum.MAX, ProtectionGroupPatternEnum.BY_RESOURCE_TYPE, "fuga") {{
                                members = new String[]{{
                                    add("corporis"),
                                    add("iste"),
                                }};
                                resourceType = ProtectedResourceTypeEnum.ELASTIC_IP_ALLOCATION;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "quidem";
                                        value = "architecto";
                                    }}),
                                    add(new Tag() {{
                                        key = "ipsa";
                                        value = "reiciendis";
                                    }}),
                                    add(new Tag() {{
                                        key = "est";
                                        value = "mollitia";
                                    }}),
                                    add(new Tag() {{
                                        key = "laborum";
                                        value = "dolores";
                                    }}),
                                }};
                            }};, CreateProtectionGroupXAmzTargetEnum.AWS_SHIELD20160616_CREATE_PROTECTION_GROUP) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "explicabo";
                xAmzDate = "nobis";
                xAmzSecurityToken = "enim";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "nemo";
            }};            

            CreateProtectionGroupResponse res = sdk.sdk.createProtectionGroup(req);

            if (res.createProtectionGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSubscription

<p>Activates Shield Advanced for an account.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note> <p>When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSubscriptionRequest;
import org.openapis.openapi.models.operations.CreateSubscriptionResponse;
import org.openapis.openapi.models.operations.CreateSubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSubscriptionRequest req = new CreateSubscriptionRequest(                new java.util.HashMap<String, Object>() {{
                                put("accusantium", "iure");
                                put("culpa", "doloribus");
                                put("sapiente", "architecto");
                            }}, CreateSubscriptionXAmzTargetEnum.AWS_SHIELD20160616_CREATE_SUBSCRIPTION) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "culpa";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "occaecati";
            }};            

            CreateSubscriptionResponse res = sdk.sdk.createSubscription(req);

            if (res.createSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProtection

Deletes an Shield Advanced <a>Protection</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProtectionRequest;
import org.openapis.openapi.models.operations.DeleteProtectionResponse;
import org.openapis.openapi.models.operations.DeleteProtectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteProtectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProtectionRequest req = new DeleteProtectionRequest(                new DeleteProtectionRequest("commodi");, DeleteProtectionXAmzTargetEnum.AWS_SHIELD20160616_DELETE_PROTECTION) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            DeleteProtectionResponse res = sdk.sdk.deleteProtection(req);

            if (res.deleteProtectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProtectionGroup

Removes the specified protection group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProtectionGroupRequest;
import org.openapis.openapi.models.operations.DeleteProtectionGroupResponse;
import org.openapis.openapi.models.operations.DeleteProtectionGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteProtectionGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProtectionGroupRequest req = new DeleteProtectionGroupRequest(                new DeleteProtectionGroupRequest("animi");, DeleteProtectionGroupXAmzTargetEnum.AWS_SHIELD20160616_DELETE_PROTECTION_GROUP) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "odit";
                xAmzCredential = "quo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "id";
            }};            

            DeleteProtectionGroupResponse res = sdk.sdk.deleteProtectionGroup(req);

            if (res.deleteProtectionGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~deleteSubscription~~

Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteSubscriptionResponse;
import org.openapis.openapi.models.operations.DeleteSubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSubscriptionRequest req = new DeleteSubscriptionRequest(                new java.util.HashMap<String, Object>() {{
                                put("quasi", "error");
                            }}, DeleteSubscriptionXAmzTargetEnum.AWS_SHIELD20160616_DELETE_SUBSCRIPTION) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "quasi";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nihil";
            }};            

            DeleteSubscriptionResponse res = sdk.sdk.deleteSubscription(req);

            if (res.deleteSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAttack

Describes the details of a DDoS attack. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAttackRequest;
import org.openapis.openapi.models.operations.DescribeAttackResponse;
import org.openapis.openapi.models.operations.DescribeAttackXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAttackRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAttackRequest req = new DescribeAttackRequest(                new DescribeAttackRequest("voluptatibus");, DescribeAttackXAmzTargetEnum.AWS_SHIELD20160616_DESCRIBE_ATTACK) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            DescribeAttackResponse res = sdk.sdk.describeAttack(req);

            if (res.describeAttackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAttackStatistics

<p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p> <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p> <p>The time range indicates the period covered by the attack statistics data items.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAttackStatisticsRequest;
import org.openapis.openapi.models.operations.DescribeAttackStatisticsResponse;
import org.openapis.openapi.models.operations.DescribeAttackStatisticsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAttackStatisticsRequest req = new DescribeAttackStatisticsRequest(                new java.util.HashMap<String, Object>() {{
                                put("dicta", "corporis");
                                put("dolore", "iusto");
                                put("dicta", "harum");
                                put("enim", "accusamus");
                            }}, DescribeAttackStatisticsXAmzTargetEnum.AWS_SHIELD20160616_DESCRIBE_ATTACK_STATISTICS) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "quae";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "excepturi";
            }};            

            DescribeAttackStatisticsResponse res = sdk.sdk.describeAttackStatistics(req);

            if (res.describeAttackStatisticsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDRTAccess

Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDRTAccessRequest;
import org.openapis.openapi.models.operations.DescribeDRTAccessResponse;
import org.openapis.openapi.models.operations.DescribeDRTAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDRTAccessRequest req = new DescribeDRTAccessRequest(                new java.util.HashMap<String, Object>() {{
                                put("praesentium", "rem");
                                put("voluptates", "quasi");
                            }}, DescribeDRTAccessXAmzTargetEnum.AWS_SHIELD20160616_DESCRIBE_DRT_ACCESS) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "sint";
                xAmzCredential = "veritatis";
                xAmzDate = "itaque";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "consequatur";
            }};            

            DescribeDRTAccessResponse res = sdk.sdk.describeDRTAccess(req);

            if (res.describeDRTAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEmergencyContactSettings

A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEmergencyContactSettingsRequest;
import org.openapis.openapi.models.operations.DescribeEmergencyContactSettingsResponse;
import org.openapis.openapi.models.operations.DescribeEmergencyContactSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEmergencyContactSettingsRequest req = new DescribeEmergencyContactSettingsRequest(                new java.util.HashMap<String, Object>() {{
                                put("explicabo", "deserunt");
                                put("distinctio", "quibusdam");
                                put("labore", "modi");
                                put("qui", "aliquid");
                            }}, DescribeEmergencyContactSettingsXAmzTargetEnum.AWS_SHIELD20160616_DESCRIBE_EMERGENCY_CONTACT_SETTINGS) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            DescribeEmergencyContactSettingsResponse res = sdk.sdk.describeEmergencyContactSettings(req);

            if (res.describeEmergencyContactSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProtection

Lists the details of a <a>Protection</a> object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProtectionRequest;
import org.openapis.openapi.models.operations.DescribeProtectionResponse;
import org.openapis.openapi.models.operations.DescribeProtectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProtectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProtectionRequest req = new DescribeProtectionRequest(                new DescribeProtectionRequest() {{
                                protectionId = "dolorum";
                                resourceArn = "excepturi";
                            }};, DescribeProtectionXAmzTargetEnum.AWS_SHIELD20160616_DESCRIBE_PROTECTION) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
            }};            

            DescribeProtectionResponse res = sdk.sdk.describeProtection(req);

            if (res.describeProtectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProtectionGroup

Returns the specification for the specified protection group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProtectionGroupRequest;
import org.openapis.openapi.models.operations.DescribeProtectionGroupResponse;
import org.openapis.openapi.models.operations.DescribeProtectionGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProtectionGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProtectionGroupRequest req = new DescribeProtectionGroupRequest(                new DescribeProtectionGroupRequest("sint");, DescribeProtectionGroupXAmzTargetEnum.AWS_SHIELD20160616_DESCRIBE_PROTECTION_GROUP) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "provident";
                xAmzCredential = "necessitatibus";
                xAmzDate = "sint";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "debitis";
            }};            

            DescribeProtectionGroupResponse res = sdk.sdk.describeProtectionGroup(req);

            if (res.describeProtectionGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSubscription

Provides details about the Shield Advanced subscription for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSubscriptionRequest;
import org.openapis.openapi.models.operations.DescribeSubscriptionResponse;
import org.openapis.openapi.models.operations.DescribeSubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSubscriptionRequest req = new DescribeSubscriptionRequest(                new java.util.HashMap<String, Object>() {{
                                put("in", "in");
                                put("illum", "maiores");
                                put("rerum", "dicta");
                            }}, DescribeSubscriptionXAmzTargetEnum.AWS_SHIELD20160616_DESCRIBE_SUBSCRIPTION) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "accusamus";
            }};            

            DescribeSubscriptionResponse res = sdk.sdk.describeSubscription(req);

            if (res.describeSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableApplicationLayerAutomaticResponse

Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableApplicationLayerAutomaticResponseRequest;
import org.openapis.openapi.models.operations.DisableApplicationLayerAutomaticResponseResponse;
import org.openapis.openapi.models.operations.DisableApplicationLayerAutomaticResponseXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisableApplicationLayerAutomaticResponseRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableApplicationLayerAutomaticResponseRequest req = new DisableApplicationLayerAutomaticResponseRequest(                new DisableApplicationLayerAutomaticResponseRequest("occaecati");, DisableApplicationLayerAutomaticResponseXAmzTargetEnum.AWS_SHIELD20160616_DISABLE_APPLICATION_LAYER_AUTOMATIC_RESPONSE) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "delectus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "id";
            }};            

            DisableApplicationLayerAutomaticResponseResponse res = sdk.sdk.disableApplicationLayerAutomaticResponse(req);

            if (res.disableApplicationLayerAutomaticResponseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableProactiveEngagement

Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableProactiveEngagementRequest;
import org.openapis.openapi.models.operations.DisableProactiveEngagementResponse;
import org.openapis.openapi.models.operations.DisableProactiveEngagementXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableProactiveEngagementRequest req = new DisableProactiveEngagementRequest(                new java.util.HashMap<String, Object>() {{
                                put("sapiente", "amet");
                                put("deserunt", "nisi");
                                put("vel", "natus");
                            }}, DisableProactiveEngagementXAmzTargetEnum.AWS_SHIELD20160616_DISABLE_PROACTIVE_ENGAGEMENT) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
            }};            

            DisableProactiveEngagementResponse res = sdk.sdk.disableProactiveEngagement(req);

            if (res.disableProactiveEngagementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateDRTLogBucket

Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateDRTLogBucketRequest;
import org.openapis.openapi.models.operations.DisassociateDRTLogBucketResponse;
import org.openapis.openapi.models.operations.DisassociateDRTLogBucketXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateDRTLogBucketRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateDRTLogBucketRequest req = new DisassociateDRTLogBucketRequest(                new DisassociateDRTLogBucketRequest("labore");, DisassociateDRTLogBucketXAmzTargetEnum.AWS_SHIELD20160616_DISASSOCIATE_DRT_LOG_BUCKET) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "natus";
                xAmzCredential = "nobis";
                xAmzDate = "eum";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "architecto";
            }};            

            DisassociateDRTLogBucketResponse res = sdk.sdk.disassociateDRTLogBucket(req);

            if (res.disassociateDRTLogBucketResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateDRTRole

Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateDRTRoleRequest;
import org.openapis.openapi.models.operations.DisassociateDRTRoleResponse;
import org.openapis.openapi.models.operations.DisassociateDRTRoleXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateDRTRoleRequest req = new DisassociateDRTRoleRequest(                new java.util.HashMap<String, Object>() {{
                                put("excepturi", "ullam");
                            }}, DisassociateDRTRoleXAmzTargetEnum.AWS_SHIELD20160616_DISASSOCIATE_DRT_ROLE) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "quos";
                xAmzCredential = "sint";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "mollitia";
            }};            

            DisassociateDRTRoleResponse res = sdk.sdk.disassociateDRTRole(req);

            if (res.disassociateDRTRoleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateHealthCheck

<p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateHealthCheckRequest;
import org.openapis.openapi.models.operations.DisassociateHealthCheckResponse;
import org.openapis.openapi.models.operations.DisassociateHealthCheckXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateHealthCheckRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateHealthCheckRequest req = new DisassociateHealthCheckRequest(                new DisassociateHealthCheckRequest("eum", "dolor");, DisassociateHealthCheckXAmzTargetEnum.AWS_SHIELD20160616_DISASSOCIATE_HEALTH_CHECK) {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "odit";
                xAmzCredential = "nemo";
                xAmzDate = "quasi";
                xAmzSecurityToken = "iure";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "debitis";
            }};            

            DisassociateHealthCheckResponse res = sdk.sdk.disassociateHealthCheck(req);

            if (res.disassociateHealthCheckResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableApplicationLayerAutomaticResponse

<p>Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. </p> <note> <p>This feature is available for Amazon CloudFront distributions and Application Load Balancers only.</p> </note> <p>This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated with the resource. For information about how automatic mitigation works and the requirements for using it, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-automatic-app-layer-response.html">Shield Advanced automatic application layer DDoS mitigation</a>.</p> <note> <p>Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use <a>UpdateApplicationLayerAutomaticResponse</a>.</p> </note> <p>To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a>. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF Developer Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableApplicationLayerAutomaticResponseRequest;
import org.openapis.openapi.models.operations.EnableApplicationLayerAutomaticResponseResponse;
import org.openapis.openapi.models.operations.EnableApplicationLayerAutomaticResponseXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnableApplicationLayerAutomaticResponseRequest;
import org.openapis.openapi.models.shared.ResponseAction;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableApplicationLayerAutomaticResponseRequest req = new EnableApplicationLayerAutomaticResponseRequest(                new EnableApplicationLayerAutomaticResponseRequest(                new ResponseAction() {{
                                                block = new java.util.HashMap<String, Object>() {{
                                                    put("deleniti", "facilis");
                                                    put("in", "architecto");
                                                    put("architecto", "repudiandae");
                                                    put("ullam", "expedita");
                                                }};
                                                count = new java.util.HashMap<String, Object>() {{
                                                    put("repellat", "quibusdam");
                                                    put("sed", "saepe");
                                                }};
                                            }};, "pariatur");, EnableApplicationLayerAutomaticResponseXAmzTargetEnum.AWS_SHIELD20160616_ENABLE_APPLICATION_LAYER_AUTOMATIC_RESPONSE) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "praesentium";
                xAmzDate = "natus";
                xAmzSecurityToken = "magni";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "quo";
            }};            

            EnableApplicationLayerAutomaticResponseResponse res = sdk.sdk.enableApplicationLayerAutomaticResponse(req);

            if (res.enableApplicationLayerAutomaticResponseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableProactiveEngagement

Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableProactiveEngagementRequest;
import org.openapis.openapi.models.operations.EnableProactiveEngagementResponse;
import org.openapis.openapi.models.operations.EnableProactiveEngagementXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableProactiveEngagementRequest req = new EnableProactiveEngagementRequest(                new java.util.HashMap<String, Object>() {{
                                put("maxime", "ea");
                                put("excepturi", "odit");
                                put("ea", "accusantium");
                                put("ab", "maiores");
                            }}, EnableProactiveEngagementXAmzTargetEnum.AWS_SHIELD20160616_ENABLE_PROACTIVE_ENGAGEMENT) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "voluptate";
                xAmzDate = "autem";
                xAmzSecurityToken = "nam";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "pariatur";
            }};            

            EnableProactiveEngagementResponse res = sdk.sdk.enableProactiveEngagement(req);

            if (res.enableProactiveEngagementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSubscriptionState

Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionStateRequest;
import org.openapis.openapi.models.operations.GetSubscriptionStateResponse;
import org.openapis.openapi.models.operations.GetSubscriptionStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSubscriptionStateRequest req = new GetSubscriptionStateRequest(                new java.util.HashMap<String, Object>() {{
                                put("perferendis", "fugiat");
                                put("amet", "aut");
                                put("cumque", "corporis");
                                put("hic", "libero");
                            }}, GetSubscriptionStateXAmzTargetEnum.AWS_SHIELD20160616_GET_SUBSCRIPTION_STATE) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "quis";
                xAmzDate = "totam";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "quis";
            }};            

            GetSubscriptionStateResponse res = sdk.sdk.getSubscriptionState(req);

            if (res.getSubscriptionStateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAttacks

Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAttacksRequest;
import org.openapis.openapi.models.operations.ListAttacksResponse;
import org.openapis.openapi.models.operations.ListAttacksXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAttacksRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAttacksRequest req = new ListAttacksRequest(                new ListAttacksRequest() {{
                                endTime = new TimeRange() {{
                                    fromInclusive = OffsetDateTime.parse("2022-12-25T05:44:55.720Z");
                                    toExclusive = OffsetDateTime.parse("2022-03-17T07:12:29.048Z");
                                }};;
                                maxResults = 463451L;
                                nextToken = "dolor";
                                resourceArns = new String[]{{
                                    add("nostrum"),
                                    add("hic"),
                                    add("recusandae"),
                                    add("omnis"),
                                }};
                                startTime = new TimeRange() {{
                                    fromInclusive = OffsetDateTime.parse("2021-10-22T10:35:49.400Z");
                                    toExclusive = OffsetDateTime.parse("2022-03-20T23:16:34.777Z");
                                }};;
                            }};, ListAttacksXAmzTargetEnum.AWS_SHIELD20160616_LIST_ATTACKS) {{
                maxResults = "consequuntur";
                nextToken = "blanditiis";
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "occaecati";
                xAmzDate = "rerum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "earum";
            }};            

            ListAttacksResponse res = sdk.sdk.listAttacks(req);

            if (res.listAttacksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProtectionGroups

Retrieves <a>ProtectionGroup</a> objects for the account. You can retrieve all protection groups or you can provide filtering criteria and retrieve just the subset of protection groups that match the criteria. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProtectionGroupsRequest;
import org.openapis.openapi.models.operations.ListProtectionGroupsResponse;
import org.openapis.openapi.models.operations.ListProtectionGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.InclusionProtectionGroupFilters;
import org.openapis.openapi.models.shared.ListProtectionGroupsRequest;
import org.openapis.openapi.models.shared.ProtectedResourceTypeEnum;
import org.openapis.openapi.models.shared.ProtectionGroupAggregationEnum;
import org.openapis.openapi.models.shared.ProtectionGroupPatternEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProtectionGroupsRequest req = new ListProtectionGroupsRequest(                new ListProtectionGroupsRequest() {{
                                inclusionFilters = new InclusionProtectionGroupFilters() {{
                                    aggregations = new org.openapis.openapi.models.shared.ProtectionGroupAggregationEnum[]{{
                                        add(ProtectionGroupAggregationEnum.MAX),
                                        add(ProtectionGroupAggregationEnum.MEAN),
                                        add(ProtectionGroupAggregationEnum.MAX),
                                    }};
                                    patterns = new org.openapis.openapi.models.shared.ProtectionGroupPatternEnum[]{{
                                        add(ProtectionGroupPatternEnum.BY_RESOURCE_TYPE),
                                        add(ProtectionGroupPatternEnum.BY_RESOURCE_TYPE),
                                        add(ProtectionGroupPatternEnum.BY_RESOURCE_TYPE),
                                    }};
                                    protectionGroupIds = new String[]{{
                                        add("quos"),
                                        add("aliquid"),
                                    }};
                                    resourceTypes = new org.openapis.openapi.models.shared.ProtectedResourceTypeEnum[]{{
                                        add(ProtectedResourceTypeEnum.ROUTE53_HOSTED_ZONE),
                                    }};
                                }};;
                                maxResults = 222443L;
                                nextToken = "qui";
                            }};, ListProtectionGroupsXAmzTargetEnum.AWS_SHIELD20160616_LIST_PROTECTION_GROUPS) {{
                maxResults = "ipsum";
                nextToken = "hic";
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
            }};            

            ListProtectionGroupsResponse res = sdk.sdk.listProtectionGroups(req);

            if (res.listProtectionGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProtections

Retrieves <a>Protection</a> objects for the account. You can retrieve all protections or you can provide filtering criteria and retrieve just the subset of protections that match the criteria. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProtectionsRequest;
import org.openapis.openapi.models.operations.ListProtectionsResponse;
import org.openapis.openapi.models.operations.ListProtectionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.InclusionProtectionFilters;
import org.openapis.openapi.models.shared.ListProtectionsRequest;
import org.openapis.openapi.models.shared.ProtectedResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProtectionsRequest req = new ListProtectionsRequest(                new ListProtectionsRequest() {{
                                inclusionFilters = new InclusionProtectionFilters() {{
                                    protectionNames = new String[]{{
                                        add("ipsa"),
                                    }};
                                    resourceArns = new String[]{{
                                        add("iure"),
                                    }};
                                    resourceTypes = new org.openapis.openapi.models.shared.ProtectedResourceTypeEnum[]{{
                                        add(ProtectedResourceTypeEnum.ROUTE53_HOSTED_ZONE),
                                        add(ProtectedResourceTypeEnum.GLOBAL_ACCELERATOR),
                                    }};
                                }};;
                                maxResults = 696344L;
                                nextToken = "voluptatibus";
                            }};, ListProtectionsXAmzTargetEnum.AWS_SHIELD20160616_LIST_PROTECTIONS) {{
                maxResults = "voluptas";
                nextToken = "natus";
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "atque";
                xAmzCredential = "sit";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ab";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dolorum";
            }};            

            ListProtectionsResponse res = sdk.sdk.listProtections(req);

            if (res.listProtectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourcesInProtectionGroup

Retrieves the resources that are included in the protection group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourcesInProtectionGroupRequest;
import org.openapis.openapi.models.operations.ListResourcesInProtectionGroupResponse;
import org.openapis.openapi.models.operations.ListResourcesInProtectionGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResourcesInProtectionGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourcesInProtectionGroupRequest req = new ListResourcesInProtectionGroupRequest(                new ListResourcesInProtectionGroupRequest("voluptate") {{
                                maxResults = 677082L;
                                nextToken = "deleniti";
                            }};, ListResourcesInProtectionGroupXAmzTargetEnum.AWS_SHIELD20160616_LIST_RESOURCES_IN_PROTECTION_GROUP) {{
                maxResults = "omnis";
                nextToken = "necessitatibus";
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nihil";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "id";
                xAmzSignedHeaders = "saepe";
            }};            

            ListResourcesInProtectionGroupResponse res = sdk.sdk.listResourcesInProtectionGroup(req);

            if (res.listResourcesInProtectionGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Shield.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("aspernatur");, ListTagsForResourceXAmzTargetEnum.AWS_SHIELD20160616_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "amet";
                xAmzCredential = "optio";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "ad";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "suscipit";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds or updates tags for a resource in Shield.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("provident",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "repellendus";
                                                    value = "totam";
                                                }}),
                                                add(new Tag() {{
                                                    key = "similique";
                                                    value = "alias";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWS_SHIELD20160616_TAG_RESOURCE) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "tempora";
                xAmzDate = "vel";
                xAmzSecurityToken = "quod";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "qui";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from a resource in Shield.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("a",                 new String[]{{
                                                add("harum"),
                                                add("iusto"),
                                            }});, UntagResourceXAmzTargetEnum.AWS_SHIELD20160616_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "tenetur";
                xAmzDate = "amet";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "numquam";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApplicationLayerAutomaticResponse

Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationLayerAutomaticResponseRequest;
import org.openapis.openapi.models.operations.UpdateApplicationLayerAutomaticResponseResponse;
import org.openapis.openapi.models.operations.UpdateApplicationLayerAutomaticResponseXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResponseAction;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateApplicationLayerAutomaticResponseRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateApplicationLayerAutomaticResponseRequest req = new UpdateApplicationLayerAutomaticResponseRequest(                new UpdateApplicationLayerAutomaticResponseRequest(                new ResponseAction() {{
                                                block = new java.util.HashMap<String, Object>() {{
                                                    put("sapiente", "totam");
                                                }};
                                                count = new java.util.HashMap<String, Object>() {{
                                                    put("sit", "expedita");
                                                    put("neque", "sed");
                                                }};
                                            }};, "vel");, UpdateApplicationLayerAutomaticResponseXAmzTargetEnum.AWS_SHIELD20160616_UPDATE_APPLICATION_LAYER_AUTOMATIC_RESPONSE) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
            }};            

            UpdateApplicationLayerAutomaticResponseResponse res = sdk.sdk.updateApplicationLayerAutomaticResponse(req);

            if (res.updateApplicationLayerAutomaticResponseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEmergencyContactSettings

Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEmergencyContactSettingsRequest;
import org.openapis.openapi.models.operations.UpdateEmergencyContactSettingsResponse;
import org.openapis.openapi.models.operations.UpdateEmergencyContactSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.EmergencyContact;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEmergencyContactSettingsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEmergencyContactSettingsRequest req = new UpdateEmergencyContactSettingsRequest(                new UpdateEmergencyContactSettingsRequest() {{
                                emergencyContactList = new org.openapis.openapi.models.shared.EmergencyContact[]{{
                                    add(new EmergencyContact("laborum") {{
                                        contactNotes = "pariatur";
                                        emailAddress = "soluta";
                                        phoneNumber = "dicta";
                                    }}),
                                    add(new EmergencyContact("dolores") {{
                                        contactNotes = "totam";
                                        emailAddress = "incidunt";
                                        phoneNumber = "aspernatur";
                                    }}),
                                    add(new EmergencyContact("quam") {{
                                        contactNotes = "distinctio";
                                        emailAddress = "facilis";
                                        phoneNumber = "aliquid";
                                    }}),
                                    add(new EmergencyContact("neque") {{
                                        contactNotes = "molestias";
                                        emailAddress = "temporibus";
                                        phoneNumber = "qui";
                                    }}),
                                }};
                            }};, UpdateEmergencyContactSettingsXAmzTargetEnum.AWS_SHIELD20160616_UPDATE_EMERGENCY_CONTACT_SETTINGS) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "odio";
                xAmzDate = "sunt";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "hic";
            }};            

            UpdateEmergencyContactSettingsResponse res = sdk.sdk.updateEmergencyContactSettings(req);

            if (res.updateEmergencyContactSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProtectionGroup

Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProtectionGroupRequest;
import org.openapis.openapi.models.operations.UpdateProtectionGroupResponse;
import org.openapis.openapi.models.operations.UpdateProtectionGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ProtectedResourceTypeEnum;
import org.openapis.openapi.models.shared.ProtectionGroupAggregationEnum;
import org.openapis.openapi.models.shared.ProtectionGroupPatternEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateProtectionGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProtectionGroupRequest req = new UpdateProtectionGroupRequest(                new UpdateProtectionGroupRequest(ProtectionGroupAggregationEnum.MAX, ProtectionGroupPatternEnum.BY_RESOURCE_TYPE, "nobis") {{
                                members = new String[]{{
                                    add("saepe"),
                                }};
                                resourceType = ProtectedResourceTypeEnum.ROUTE53_HOSTED_ZONE;
                            }};, UpdateProtectionGroupXAmzTargetEnum.AWS_SHIELD20160616_UPDATE_PROTECTION_GROUP) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quos";
                xAmzDate = "tempore";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "delectus";
            }};            

            UpdateProtectionGroupResponse res = sdk.sdk.updateProtectionGroup(req);

            if (res.updateProtectionGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscription

<p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriptionRequest;
import org.openapis.openapi.models.operations.UpdateSubscriptionResponse;
import org.openapis.openapi.models.operations.UpdateSubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoRenewEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateSubscriptionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSubscriptionRequest req = new UpdateSubscriptionRequest(                new UpdateSubscriptionRequest() {{
                                autoRenew = AutoRenewEnum.ENABLED;
                            }};, UpdateSubscriptionXAmzTargetEnum.AWS_SHIELD20160616_UPDATE_SUBSCRIPTION) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "dolorum";
                xAmzDate = "architecto";
                xAmzSecurityToken = "quae";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quas";
            }};            

            UpdateSubscriptionResponse res = sdk.sdk.updateSubscription(req);

            if (res.updateSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
