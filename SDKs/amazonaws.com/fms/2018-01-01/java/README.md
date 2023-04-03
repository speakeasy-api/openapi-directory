# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateAdminAccountXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateAdminAccountRequest;
import org.openapis.openapi.models.operations.AssociateAdminAccountResponse;
import org.openapis.openapi.models.shared.AssociateAdminAccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateAdminAccountRequest req = new AssociateAdminAccountRequest() {{
                associateAdminAccountRequest = new AssociateAdminAccountRequest() {{
                    adminAccount = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "AWSFMS_20180101.AssociateAdminAccount";
            }}            

            AssociateAdminAccountResponse res = sdk.associateAdminAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associateAdminAccount` - <p>Sets the Firewall Manager administrator account. The account must be a member of the organization in Organizations whose resources you want to protect. Firewall Manager sets the permissions that allow the account to administer your Firewall Manager policies.</p> <p>The account that you associate with Firewall Manager is called the Firewall Manager administrator account. </p>
* `associateThirdPartyFirewall` - Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.
* `batchAssociateResource` - Associate resources to a Firewall Manager resource set.
* `batchDisassociateResource` - Disassociates resources from a Firewall Manager resource set.
* `deleteAppsList` - Permanently deletes an Firewall Manager applications list.
* `deleteNotificationChannel` - Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
* `deletePolicy` - Permanently deletes an Firewall Manager policy. 
* `deleteProtocolsList` - Permanently deletes an Firewall Manager protocols list.
* `deleteResourceSet` - Deletes the specified <a>ResourceSet</a>.
* `disassociateAdminAccount` - Disassociates the account that has been set as the Firewall Manager administrator account. To set a different account as the administrator account, you must submit an <code>AssociateAdminAccount</code> request.
* `disassociateThirdPartyFirewall` - Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.
* `getAdminAccount` - Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager administrator.
* `getAppsList` - Returns information about the specified Firewall Manager applications list.
* `getComplianceDetail` - <p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>
* `getNotificationChannel` - Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
* `getPolicy` - Returns information about the specified Firewall Manager policy.
* `getProtectionStatus` - If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.
* `getProtocolsList` - Returns information about the specified Firewall Manager protocols list.
* `getResourceSet` - Gets information about a specific resource set.
* `getThirdPartyFirewallAssociationStatus` - The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.
* `getViolationDetails` - Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
* `listAppsLists` - Returns an array of <code>AppsListDataSummary</code> objects.
* `listComplianceStatus` - Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. 
* `listDiscoveredResources` - Returns an array of resources in the organization's accounts that are available to be associated with a resource set.
* `listMemberAccounts` - <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the Firewall Manager administrator.</p>
* `listPolicies` - Returns an array of <code>PolicySummary</code> objects.
* `listProtocolsLists` - Returns an array of <code>ProtocolsListDataSummary</code> objects.
* `listResourceSetResources` - Returns an array of resources that are currently associated to a resource set.
* `listResourceSets` - Returns an array of <code>ResourceSetSummary</code> objects.
* `listTagsForResource` - Retrieves the list of tags for the specified Amazon Web Services resource. 
* `listThirdPartyFirewallFirewallPolicies` - Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.
* `putAppsList` - Creates an Firewall Manager applications list.
* `putNotificationChannel` - <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must configure the SNS topic to allow the Firewall Manager role <code>AWSServiceRoleForFMS</code> to publish SNS logs. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a> in the <i>Firewall Manager Developer Guide</i>.</p>
* `putPolicy` - <p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
* `putProtocolsList` - Creates an Firewall Manager protocols list.
* `putResourceSet` - <p>Creates the resource set.</p> <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>
* `tagResource` - Adds one or more tags to an Amazon Web Services resource.
* `untagResource` - Removes one or more tags from an Amazon Web Services resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
