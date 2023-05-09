# SDK

## Overview

<p>This is the <i>Firewall Manager API Reference</i>. This guide is for developers who need detailed information about the Firewall Manager API actions, data types, and errors. For detailed information about Firewall Manager features, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">Firewall Manager Developer Guide</a>.</p> <p>Some API actions require explicit resource permissions. For information, see the developer guide topic <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/fms/>
### Available Operations

* [associateAdminAccount](#associateadminaccount) - <p>Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.</p> <p>For information about working with Firewall Manager administrator accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>
* [associateThirdPartyFirewall](#associatethirdpartyfirewall) - Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.
* [batchAssociateResource](#batchassociateresource) - Associate resources to a Firewall Manager resource set.
* [batchDisassociateResource](#batchdisassociateresource) - Disassociates resources from a Firewall Manager resource set.
* [deleteAppsList](#deleteappslist) - Permanently deletes an Firewall Manager applications list.
* [deleteNotificationChannel](#deletenotificationchannel) - Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
* [deletePolicy](#deletepolicy) - Permanently deletes an Firewall Manager policy. 
* [deleteProtocolsList](#deleteprotocolslist) - Permanently deletes an Firewall Manager protocols list.
* [deleteResourceSet](#deleteresourceset) - Deletes the specified <a>ResourceSet</a>.
* [disassociateAdminAccount](#disassociateadminaccount) - <p>Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a <a>PutAdminAccount</a> request. To set an account as a default administrator account, you must submit an <a>AssociateAdminAccount</a> request.</p> <p>Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.</p>
* [disassociateThirdPartyFirewall](#disassociatethirdpartyfirewall) - Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.
* [getAdminAccount](#getadminaccount) - Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager default administrator.
* [getAdminScope](#getadminscope) - Returns information about the specified account's administrative scope. The admistrative scope defines the resources that an Firewall Manager administrator can manage.
* [getAppsList](#getappslist) - Returns information about the specified Firewall Manager applications list.
* [getComplianceDetail](#getcompliancedetail) - <p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>
* [getNotificationChannel](#getnotificationchannel) - Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
* [getPolicy](#getpolicy) - Returns information about the specified Firewall Manager policy.
* [getProtectionStatus](#getprotectionstatus) - If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.
* [getProtocolsList](#getprotocolslist) - Returns information about the specified Firewall Manager protocols list.
* [getResourceSet](#getresourceset) - Gets information about a specific resource set.
* [getThirdPartyFirewallAssociationStatus](#getthirdpartyfirewallassociationstatus) - The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.
* [getViolationDetails](#getviolationdetails) - Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
* [listAdminAccountsForOrganization](#listadminaccountsfororganization) - <p>Returns a <code>AdminAccounts</code> object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by <a>AssociateAdminAccount</a>.</p> <p>This operation can be called only from the organization's management account.</p>
* [listAdminsManagingAccount](#listadminsmanagingaccount) - Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their <a>AdminScope</a>.
* [listAppsLists](#listappslists) - Returns an array of <code>AppsListDataSummary</code> objects.
* [listComplianceStatus](#listcompliancestatus) - Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. 
* [listDiscoveredResources](#listdiscoveredresources) - Returns an array of resources in the organization's accounts that are available to be associated with a resource set.
* [listMemberAccounts](#listmemberaccounts) - <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>Either an Firewall Manager administrator or the organization's management account can make this request.</p>
* [listPolicies](#listpolicies) - Returns an array of <code>PolicySummary</code> objects.
* [listProtocolsLists](#listprotocolslists) - Returns an array of <code>ProtocolsListDataSummary</code> objects.
* [listResourceSetResources](#listresourcesetresources) - Returns an array of resources that are currently associated to a resource set.
* [listResourceSets](#listresourcesets) - Returns an array of <code>ResourceSetSummary</code> objects.
* [listTagsForResource](#listtagsforresource) - Retrieves the list of tags for the specified Amazon Web Services resource. 
* [listThirdPartyFirewallFirewallPolicies](#listthirdpartyfirewallfirewallpolicies) - Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.
* [putAdminAccount](#putadminaccount) - Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.
* [putAppsList](#putappslist) - Creates an Firewall Manager applications list.
* [putNotificationChannel](#putnotificationchannel) - <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the <code>SnsRoleName</code> to publish SNS logs. If the <code>SnsRoleName</code> provided is a role other than the <code>AWSServiceRoleForFMS</code> service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal <code>fms.amazonaws.com</code> to assume this role. For information about configuring an SNS access policy, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a> in the <i>Firewall Manager Developer Guide</i>.</p>
* [putPolicy](#putpolicy) - <p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
* [putProtocolsList](#putprotocolslist) - Creates an Firewall Manager protocols list.
* [putResourceSet](#putresourceset) - <p>Creates the resource set.</p> <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>
* [tagResource](#tagresource) - Adds one or more tags to an Amazon Web Services resource.
* [untagResource](#untagresource) - Removes one or more tags from an Amazon Web Services resource.

## associateAdminAccount

<p>Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.</p> <p>For information about working with Firewall Manager administrator accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateAdminAccountRequest;
import org.openapis.openapi.models.operations.AssociateAdminAccountResponse;
import org.openapis.openapi.models.operations.AssociateAdminAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateAdminAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateAdminAccountRequest req = new AssociateAdminAccountRequest(                new AssociateAdminAccountRequest("deserunt");, AssociateAdminAccountXAmzTargetEnum.AWSFMS20180101_ASSOCIATE_ADMIN_ACCOUNT) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            AssociateAdminAccountResponse res = sdk.sdk.associateAdminAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateThirdPartyFirewall

Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateThirdPartyFirewallRequest;
import org.openapis.openapi.models.operations.AssociateThirdPartyFirewallResponse;
import org.openapis.openapi.models.operations.AssociateThirdPartyFirewallXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateThirdPartyFirewallRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThirdPartyFirewallEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateThirdPartyFirewallRequest req = new AssociateThirdPartyFirewallRequest(                new AssociateThirdPartyFirewallRequest(ThirdPartyFirewallEnum.PALO_ALTO_NETWORKS_CLOUD_NGFW);, AssociateThirdPartyFirewallXAmzTargetEnum.AWSFMS20180101_ASSOCIATE_THIRD_PARTY_FIREWALL) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            AssociateThirdPartyFirewallResponse res = sdk.sdk.associateThirdPartyFirewall(req);

            if (res.associateThirdPartyFirewallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchAssociateResource

Associate resources to a Firewall Manager resource set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchAssociateResourceRequest;
import org.openapis.openapi.models.operations.BatchAssociateResourceResponse;
import org.openapis.openapi.models.operations.BatchAssociateResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchAssociateResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchAssociateResourceRequest req = new BatchAssociateResourceRequest(                new BatchAssociateResourceRequest(                new String[]{{
                                                add("quis"),
                                            }}, "veritatis");, BatchAssociateResourceXAmzTargetEnum.AWSFMS20180101_BATCH_ASSOCIATE_RESOURCE) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            BatchAssociateResourceResponse res = sdk.sdk.batchAssociateResource(req);

            if (res.batchAssociateResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchDisassociateResource

Disassociates resources from a Firewall Manager resource set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDisassociateResourceRequest;
import org.openapis.openapi.models.operations.BatchDisassociateResourceResponse;
import org.openapis.openapi.models.operations.BatchDisassociateResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDisassociateResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDisassociateResourceRequest req = new BatchDisassociateResourceRequest(                new BatchDisassociateResourceRequest(                new String[]{{
                                                add("maiores"),
                                                add("molestiae"),
                                                add("quod"),
                                                add("quod"),
                                            }}, "esse");, BatchDisassociateResourceXAmzTargetEnum.AWSFMS20180101_BATCH_DISASSOCIATE_RESOURCE) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "porro";
                xAmzCredential = "dolorum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "nam";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "occaecati";
            }};            

            BatchDisassociateResourceResponse res = sdk.sdk.batchDisassociateResource(req);

            if (res.batchDisassociateResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAppsList

Permanently deletes an Firewall Manager applications list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppsListRequest;
import org.openapis.openapi.models.operations.DeleteAppsListResponse;
import org.openapis.openapi.models.operations.DeleteAppsListXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAppsListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppsListRequest req = new DeleteAppsListRequest(                new DeleteAppsListRequest("deleniti");, DeleteAppsListXAmzTargetEnum.AWSFMS20180101_DELETE_APPS_LIST) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "optio";
                xAmzCredential = "totam";
                xAmzDate = "beatae";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "modi";
            }};            

            DeleteAppsListResponse res = sdk.sdk.deleteAppsList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNotificationChannel

Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNotificationChannelRequest;
import org.openapis.openapi.models.operations.DeleteNotificationChannelResponse;
import org.openapis.openapi.models.operations.DeleteNotificationChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNotificationChannelRequest req = new DeleteNotificationChannelRequest(                new java.util.HashMap<String, Object>() {{
                                put("cum", "esse");
                                put("ipsum", "excepturi");
                                put("aspernatur", "perferendis");
                                put("ad", "natus");
                            }}, DeleteNotificationChannelXAmzTargetEnum.AWSFMS20180101_DELETE_NOTIFICATION_CHANNEL) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolor";
                xAmzDate = "natus";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "saepe";
            }};            

            DeleteNotificationChannelResponse res = sdk.sdk.deleteNotificationChannel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePolicy

Permanently deletes an Firewall Manager policy. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePolicyRequest;
import org.openapis.openapi.models.operations.DeletePolicyResponse;
import org.openapis.openapi.models.operations.DeletePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePolicyRequest req = new DeletePolicyRequest(                new DeletePolicyRequest("in") {{
                                deleteAllPolicyResources = false;
                            }};, DeletePolicyXAmzTargetEnum.AWSFMS20180101_DELETE_POLICY) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "iste";
                xAmzCredential = "iure";
                xAmzDate = "saepe";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "ipsa";
            }};            

            DeletePolicyResponse res = sdk.sdk.deletePolicy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProtocolsList

Permanently deletes an Firewall Manager protocols list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProtocolsListRequest;
import org.openapis.openapi.models.operations.DeleteProtocolsListResponse;
import org.openapis.openapi.models.operations.DeleteProtocolsListXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteProtocolsListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProtocolsListRequest req = new DeleteProtocolsListRequest(                new DeleteProtocolsListRequest("est");, DeleteProtocolsListXAmzTargetEnum.AWSFMS20180101_DELETE_PROTOCOLS_LIST) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "dolores";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "nobis";
            }};            

            DeleteProtocolsListResponse res = sdk.sdk.deleteProtocolsList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourceSet

Deletes the specified <a>ResourceSet</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourceSetRequest;
import org.openapis.openapi.models.operations.DeleteResourceSetResponse;
import org.openapis.openapi.models.operations.DeleteResourceSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourceSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourceSetRequest req = new DeleteResourceSetRequest(                new DeleteResourceSetRequest("omnis");, DeleteResourceSetXAmzTargetEnum.AWSFMS20180101_DELETE_RESOURCE_SET) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "minima";
                xAmzCredential = "excepturi";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "iure";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "doloribus";
            }};            

            DeleteResourceSetResponse res = sdk.sdk.deleteResourceSet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateAdminAccount

<p>Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a <a>PutAdminAccount</a> request. To set an account as a default administrator account, you must submit an <a>AssociateAdminAccount</a> request.</p> <p>Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateAdminAccountRequest;
import org.openapis.openapi.models.operations.DisassociateAdminAccountResponse;
import org.openapis.openapi.models.operations.DisassociateAdminAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateAdminAccountRequest req = new DisassociateAdminAccountRequest(                new java.util.HashMap<String, Object>() {{
                                put("mollitia", "dolorem");
                            }}, DisassociateAdminAccountXAmzTargetEnum.AWSFMS20180101_DISASSOCIATE_ADMIN_ACCOUNT) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
            }};            

            DisassociateAdminAccountResponse res = sdk.sdk.disassociateAdminAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateThirdPartyFirewall

Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateThirdPartyFirewallRequest;
import org.openapis.openapi.models.operations.DisassociateThirdPartyFirewallResponse;
import org.openapis.openapi.models.operations.DisassociateThirdPartyFirewallXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateThirdPartyFirewallRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThirdPartyFirewallEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateThirdPartyFirewallRequest req = new DisassociateThirdPartyFirewallRequest(                new DisassociateThirdPartyFirewallRequest(ThirdPartyFirewallEnum.PALO_ALTO_NETWORKS_CLOUD_NGFW);, DisassociateThirdPartyFirewallXAmzTargetEnum.AWSFMS20180101_DISASSOCIATE_THIRD_PARTY_FIREWALL) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "error";
                xAmzCredential = "quia";
                xAmzDate = "quis";
                xAmzSecurityToken = "vitae";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "animi";
            }};            

            DisassociateThirdPartyFirewallResponse res = sdk.sdk.disassociateThirdPartyFirewall(req);

            if (res.disassociateThirdPartyFirewallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAdminAccount

Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager default administrator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdminAccountRequest;
import org.openapis.openapi.models.operations.GetAdminAccountResponse;
import org.openapis.openapi.models.operations.GetAdminAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAdminAccountRequest req = new GetAdminAccountRequest(                new java.util.HashMap<String, Object>() {{
                                put("quo", "sequi");
                            }}, GetAdminAccountXAmzTargetEnum.AWSFMS20180101_GET_ADMIN_ACCOUNT) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
            }};            

            GetAdminAccountResponse res = sdk.sdk.getAdminAccount(req);

            if (res.getAdminAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAdminScope

Returns information about the specified account's administrative scope. The admistrative scope defines the resources that an Firewall Manager administrator can manage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdminScopeRequest;
import org.openapis.openapi.models.operations.GetAdminScopeResponse;
import org.openapis.openapi.models.operations.GetAdminScopeXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAdminScopeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAdminScopeRequest req = new GetAdminScopeRequest(                new GetAdminScopeRequest("laborum");, GetAdminScopeXAmzTargetEnum.AWSFMS20180101_GET_ADMIN_SCOPE) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "voluptatibus";
                xAmzDate = "vero";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            GetAdminScopeResponse res = sdk.sdk.getAdminScope(req);

            if (res.getAdminScopeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppsList

Returns information about the specified Firewall Manager applications list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsListRequest;
import org.openapis.openapi.models.operations.GetAppsListResponse;
import org.openapis.openapi.models.operations.GetAppsListXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAppsListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAppsListRequest req = new GetAppsListRequest(                new GetAppsListRequest("omnis") {{
                                defaultList = false;
                            }};, GetAppsListXAmzTargetEnum.AWSFMS20180101_GET_APPS_LIST) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "cum";
                xAmzCredential = "perferendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "maiores";
            }};            

            GetAppsListResponse res = sdk.sdk.getAppsList(req);

            if (res.getAppsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComplianceDetail

<p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComplianceDetailRequest;
import org.openapis.openapi.models.operations.GetComplianceDetailResponse;
import org.openapis.openapi.models.operations.GetComplianceDetailXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetComplianceDetailRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetComplianceDetailRequest req = new GetComplianceDetailRequest(                new GetComplianceDetailRequest("corporis", "dolore");, GetComplianceDetailXAmzTargetEnum.AWSFMS20180101_GET_COMPLIANCE_DETAIL) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "harum";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            GetComplianceDetailResponse res = sdk.sdk.getComplianceDetail(req);

            if (res.getComplianceDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNotificationChannel

Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNotificationChannelRequest;
import org.openapis.openapi.models.operations.GetNotificationChannelResponse;
import org.openapis.openapi.models.operations.GetNotificationChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNotificationChannelRequest req = new GetNotificationChannelRequest(                new java.util.HashMap<String, Object>() {{
                                put("quidem", "molestias");
                            }}, GetNotificationChannelXAmzTargetEnum.AWSFMS20180101_GET_NOTIFICATION_CHANNEL) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            GetNotificationChannelResponse res = sdk.sdk.getNotificationChannel(req);

            if (res.getNotificationChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPolicy

Returns information about the specified Firewall Manager policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPolicyRequest;
import org.openapis.openapi.models.operations.GetPolicyResponse;
import org.openapis.openapi.models.operations.GetPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPolicyRequest req = new GetPolicyRequest(                new GetPolicyRequest("sint");, GetPolicyXAmzTargetEnum.AWSFMS20180101_GET_POLICY) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "incidunt";
                xAmzDate = "enim";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "quibusdam";
            }};            

            GetPolicyResponse res = sdk.sdk.getPolicy(req);

            if (res.getPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProtectionStatus

If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProtectionStatusRequest;
import org.openapis.openapi.models.operations.GetProtectionStatusResponse;
import org.openapis.openapi.models.operations.GetProtectionStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetProtectionStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProtectionStatusRequest req = new GetProtectionStatusRequest(                new GetProtectionStatusRequest("deserunt") {{
                                endTime = OffsetDateTime.parse("2021-04-26T18:54:54.344Z");
                                maxResults = 289406L;
                                memberAccountId = "modi";
                                nextToken = "qui";
                                startTime = OffsetDateTime.parse("2022-05-31T22:08:47.731Z");
                            }};, GetProtectionStatusXAmzTargetEnum.AWSFMS20180101_GET_PROTECTION_STATUS) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "magni";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "fugit";
            }};            

            GetProtectionStatusResponse res = sdk.sdk.getProtectionStatus(req);

            if (res.getProtectionStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProtocolsList

Returns information about the specified Firewall Manager protocols list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProtocolsListRequest;
import org.openapis.openapi.models.operations.GetProtocolsListResponse;
import org.openapis.openapi.models.operations.GetProtocolsListXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetProtocolsListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProtocolsListRequest req = new GetProtocolsListRequest(                new GetProtocolsListRequest("excepturi") {{
                                defaultList = false;
                            }};, GetProtocolsListXAmzTargetEnum.AWSFMS20180101_GET_PROTOCOLS_LIST) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
            }};            

            GetProtocolsListResponse res = sdk.sdk.getProtocolsList(req);

            if (res.getProtocolsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceSet

Gets information about a specific resource set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceSetRequest;
import org.openapis.openapi.models.operations.GetResourceSetResponse;
import org.openapis.openapi.models.operations.GetResourceSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResourceSetRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceSetRequest req = new GetResourceSetRequest(                new GetResourceSetRequest("sint");, GetResourceSetXAmzTargetEnum.AWSFMS20180101_GET_RESOURCE_SET) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "provident";
                xAmzCredential = "necessitatibus";
                xAmzDate = "sint";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "debitis";
            }};            

            GetResourceSetResponse res = sdk.sdk.getResourceSet(req);

            if (res.getResourceSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getThirdPartyFirewallAssociationStatus

The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetThirdPartyFirewallAssociationStatusRequest;
import org.openapis.openapi.models.operations.GetThirdPartyFirewallAssociationStatusResponse;
import org.openapis.openapi.models.operations.GetThirdPartyFirewallAssociationStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetThirdPartyFirewallAssociationStatusRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThirdPartyFirewallEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetThirdPartyFirewallAssociationStatusRequest req = new GetThirdPartyFirewallAssociationStatusRequest(                new GetThirdPartyFirewallAssociationStatusRequest(ThirdPartyFirewallEnum.FORTIGATE_CLOUD_NATIVE_FIREWALL);, GetThirdPartyFirewallAssociationStatusXAmzTargetEnum.AWSFMS20180101_GET_THIRD_PARTY_FIREWALL_ASSOCIATION_STATUS) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "in";
                xAmzCredential = "illum";
                xAmzDate = "maiores";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "magnam";
            }};            

            GetThirdPartyFirewallAssociationStatusResponse res = sdk.sdk.getThirdPartyFirewallAssociationStatus(req);

            if (res.getThirdPartyFirewallAssociationStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getViolationDetails

Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetViolationDetailsRequest;
import org.openapis.openapi.models.operations.GetViolationDetailsResponse;
import org.openapis.openapi.models.operations.GetViolationDetailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetViolationDetailsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetViolationDetailsRequest req = new GetViolationDetailsRequest(                new GetViolationDetailsRequest("facere", "ea", "aliquid", "laborum");, GetViolationDetailsXAmzTargetEnum.AWSFMS20180101_GET_VIOLATION_DETAILS) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            GetViolationDetailsResponse res = sdk.sdk.getViolationDetails(req);

            if (res.getViolationDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAdminAccountsForOrganization

<p>Returns a <code>AdminAccounts</code> object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by <a>AssociateAdminAccount</a>.</p> <p>This operation can be called only from the organization's management account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAdminAccountsForOrganizationRequest;
import org.openapis.openapi.models.operations.ListAdminAccountsForOrganizationResponse;
import org.openapis.openapi.models.operations.ListAdminAccountsForOrganizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAdminAccountsForOrganizationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAdminAccountsForOrganizationRequest req = new ListAdminAccountsForOrganizationRequest(                new ListAdminAccountsForOrganizationRequest() {{
                                maxResults = 725255L;
                                nextToken = "id";
                            }};, ListAdminAccountsForOrganizationXAmzTargetEnum.AWSFMS20180101_LIST_ADMIN_ACCOUNTS_FOR_ORGANIZATION) {{
                maxResults = "blanditiis";
                nextToken = "deleniti";
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "nisi";
                xAmzSecurityToken = "vel";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "omnis";
            }};            

            ListAdminAccountsForOrganizationResponse res = sdk.sdk.listAdminAccountsForOrganization(req);

            if (res.listAdminAccountsForOrganizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAdminsManagingAccount

Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their <a>AdminScope</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAdminsManagingAccountRequest;
import org.openapis.openapi.models.operations.ListAdminsManagingAccountResponse;
import org.openapis.openapi.models.operations.ListAdminsManagingAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAdminsManagingAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAdminsManagingAccountRequest req = new ListAdminsManagingAccountRequest(                new ListAdminsManagingAccountRequest() {{
                                maxResults = 19193L;
                                nextToken = "nihil";
                            }};, ListAdminsManagingAccountXAmzTargetEnum.AWSFMS20180101_LIST_ADMINS_MANAGING_ACCOUNT) {{
                maxResults = "magnam";
                nextToken = "distinctio";
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "labore";
                xAmzCredential = "labore";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "natus";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "eum";
            }};            

            ListAdminsManagingAccountResponse res = sdk.sdk.listAdminsManagingAccount(req);

            if (res.listAdminsManagingAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAppsLists

Returns an array of <code>AppsListDataSummary</code> objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppsListsRequest;
import org.openapis.openapi.models.operations.ListAppsListsResponse;
import org.openapis.openapi.models.operations.ListAppsListsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAppsListsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppsListsRequest req = new ListAppsListsRequest(                new ListAppsListsRequest(135474L) {{
                                defaultLists = false;
                                nextToken = "architecto";
                            }};, ListAppsListsXAmzTargetEnum.AWSFMS20180101_LIST_APPS_LISTS) {{
                maxResults = "magnam";
                nextToken = "et";
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "provident";
                xAmzDate = "quos";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "mollitia";
            }};            

            ListAppsListsResponse res = sdk.sdk.listAppsLists(req);

            if (res.listAppsListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComplianceStatus

Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListComplianceStatusRequest;
import org.openapis.openapi.models.operations.ListComplianceStatusResponse;
import org.openapis.openapi.models.operations.ListComplianceStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListComplianceStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListComplianceStatusRequest req = new ListComplianceStatusRequest(                new ListComplianceStatusRequest("mollitia") {{
                                maxResults = 320997L;
                                nextToken = "eum";
                            }};, ListComplianceStatusXAmzTargetEnum.AWSFMS20180101_LIST_COMPLIANCE_STATUS) {{
                maxResults = "dolor";
                nextToken = "necessitatibus";
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "quasi";
                xAmzDate = "iure";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "eius";
            }};            

            ListComplianceStatusResponse res = sdk.sdk.listComplianceStatus(req);

            if (res.listComplianceStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDiscoveredResources

Returns an array of resources in the organization's accounts that are available to be associated with a resource set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDiscoveredResourcesRequest;
import org.openapis.openapi.models.operations.ListDiscoveredResourcesResponse;
import org.openapis.openapi.models.operations.ListDiscoveredResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDiscoveredResourcesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDiscoveredResourcesRequest req = new ListDiscoveredResourcesRequest(                new ListDiscoveredResourcesRequest(                new String[]{{
                                                add("facilis"),
                                                add("in"),
                                                add("architecto"),
                                            }}, "architecto") {{
                                maxResults = 919483L;
                                nextToken = "ullam";
                            }};, ListDiscoveredResourcesXAmzTargetEnum.AWSFMS20180101_LIST_DISCOVERED_RESOURCES) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "repellat";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "sed";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "pariatur";
            }};            

            ListDiscoveredResourcesResponse res = sdk.sdk.listDiscoveredResources(req);

            if (res.listDiscoveredResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMemberAccounts

<p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>Either an Firewall Manager administrator or the organization's management account can make this request.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMemberAccountsRequest;
import org.openapis.openapi.models.operations.ListMemberAccountsResponse;
import org.openapis.openapi.models.operations.ListMemberAccountsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMemberAccountsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMemberAccountsRequest req = new ListMemberAccountsRequest(                new ListMemberAccountsRequest() {{
                                maxResults = 162493L;
                                nextToken = "praesentium";
                            }};, ListMemberAccountsXAmzTargetEnum.AWSFMS20180101_LIST_MEMBER_ACCOUNTS) {{
                maxResults = "natus";
                nextToken = "magni";
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            ListMemberAccountsResponse res = sdk.sdk.listMemberAccounts(req);

            if (res.listMemberAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPolicies

Returns an array of <code>PolicySummary</code> objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPoliciesRequest;
import org.openapis.openapi.models.operations.ListPoliciesResponse;
import org.openapis.openapi.models.operations.ListPoliciesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPoliciesRequest req = new ListPoliciesRequest(                new ListPoliciesRequest() {{
                                maxResults = 407183L;
                                nextToken = "accusantium";
                            }};, ListPoliciesXAmzTargetEnum.AWSFMS20180101_LIST_POLICIES) {{
                maxResults = "ab";
                nextToken = "maiores";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "voluptate";
                xAmzDate = "autem";
                xAmzSecurityToken = "nam";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "pariatur";
            }};            

            ListPoliciesResponse res = sdk.sdk.listPolicies(req);

            if (res.listPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProtocolsLists

Returns an array of <code>ProtocolsListDataSummary</code> objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProtocolsListsRequest;
import org.openapis.openapi.models.operations.ListProtocolsListsResponse;
import org.openapis.openapi.models.operations.ListProtocolsListsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListProtocolsListsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProtocolsListsRequest req = new ListProtocolsListsRequest(                new ListProtocolsListsRequest(975522L) {{
                                defaultLists = false;
                                nextToken = "perferendis";
                            }};, ListProtocolsListsXAmzTargetEnum.AWSFMS20180101_LIST_PROTOCOLS_LISTS) {{
                maxResults = "fugiat";
                nextToken = "amet";
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "corporis";
                xAmzDate = "hic";
                xAmzSecurityToken = "libero";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "dolores";
            }};            

            ListProtocolsListsResponse res = sdk.sdk.listProtocolsLists(req);

            if (res.listProtocolsListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceSetResources

Returns an array of resources that are currently associated to a resource set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceSetResourcesRequest;
import org.openapis.openapi.models.operations.ListResourceSetResourcesResponse;
import org.openapis.openapi.models.operations.ListResourceSetResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResourceSetResourcesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceSetResourcesRequest req = new ListResourceSetResourcesRequest(                new ListResourceSetResourcesRequest("totam") {{
                                maxResults = 489549L;
                                nextToken = "eaque";
                            }};, ListResourceSetResourcesXAmzTargetEnum.AWSFMS20180101_LIST_RESOURCE_SET_RESOURCES) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "eos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quam";
            }};            

            ListResourceSetResourcesResponse res = sdk.sdk.listResourceSetResources(req);

            if (res.listResourceSetResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceSets

Returns an array of <code>ResourceSetSummary</code> objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceSetsRequest;
import org.openapis.openapi.models.operations.ListResourceSetsResponse;
import org.openapis.openapi.models.operations.ListResourceSetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResourceSetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceSetsRequest req = new ListResourceSetsRequest(                new ListResourceSetsRequest() {{
                                maxResults = 874573L;
                                nextToken = "nostrum";
                            }};, ListResourceSetsXAmzTargetEnum.AWSFMS20180101_LIST_RESOURCE_SETS) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "facilis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "porro";
            }};            

            ListResourceSetsResponse res = sdk.sdk.listResourceSets(req);

            if (res.listResourceSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Retrieves the list of tags for the specified Amazon Web Services resource. 

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
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("blanditiis");, ListTagsForResourceXAmzTargetEnum.AWSFMS20180101_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "occaecati";
                xAmzDate = "rerum";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "earum";
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

## listThirdPartyFirewallFirewallPolicies

Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListThirdPartyFirewallFirewallPoliciesRequest;
import org.openapis.openapi.models.operations.ListThirdPartyFirewallFirewallPoliciesResponse;
import org.openapis.openapi.models.operations.ListThirdPartyFirewallFirewallPoliciesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListThirdPartyFirewallFirewallPoliciesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThirdPartyFirewallEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListThirdPartyFirewallFirewallPoliciesRequest req = new ListThirdPartyFirewallFirewallPoliciesRequest(                new ListThirdPartyFirewallFirewallPoliciesRequest(613966L, ThirdPartyFirewallEnum.FORTIGATE_CLOUD_NATIVE_FIREWALL) {{
                                nextToken = "deleniti";
                            }};, ListThirdPartyFirewallFirewallPoliciesXAmzTargetEnum.AWSFMS20180101_LIST_THIRD_PARTY_FIREWALL_FIREWALL_POLICIES) {{
                maxResults = "pariatur";
                nextToken = "provident";
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "libero";
                xAmzCredential = "delectus";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "quos";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "dolorem";
            }};            

            ListThirdPartyFirewallFirewallPoliciesResponse res = sdk.sdk.listThirdPartyFirewallFirewallPolicies(req);

            if (res.listThirdPartyFirewallFirewallPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAdminAccount

Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAdminAccountRequest;
import org.openapis.openapi.models.operations.PutAdminAccountResponse;
import org.openapis.openapi.models.operations.PutAdminAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccountScope;
import org.openapis.openapi.models.shared.AdminScope;
import org.openapis.openapi.models.shared.OrganizationalUnitScope;
import org.openapis.openapi.models.shared.PolicyTypeScope;
import org.openapis.openapi.models.shared.PutAdminAccountRequest;
import org.openapis.openapi.models.shared.RegionScope;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityServiceTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAdminAccountRequest req = new PutAdminAccountRequest(                new PutAdminAccountRequest("dolor") {{
                                adminScope = new AdminScope() {{
                                    accountScope = new AccountScope() {{
                                        accounts = new String[]{{
                                            add("ipsum"),
                                        }};
                                        allAccountsEnabled = false;
                                        excludeSpecifiedAccounts = false;
                                    }};;
                                    organizationalUnitScope = new OrganizationalUnitScope() {{
                                        allOrganizationalUnitsEnabled = false;
                                        excludeSpecifiedOrganizationalUnits = false;
                                        organizationalUnits = new String[]{{
                                            add("excepturi"),
                                            add("cum"),
                                            add("voluptate"),
                                            add("dignissimos"),
                                        }};
                                    }};;
                                    policyTypeScope = new PolicyTypeScope() {{
                                        allPolicyTypesEnabled = false;
                                        policyTypes = new org.openapis.openapi.models.shared.SecurityServiceTypeEnum[]{{
                                            add(SecurityServiceTypeEnum.SHIELD_ADVANCED),
                                            add(SecurityServiceTypeEnum.NETWORK_FIREWALL),
                                            add(SecurityServiceTypeEnum.SHIELD_ADVANCED),
                                            add(SecurityServiceTypeEnum.WAF),
                                        }};
                                    }};;
                                    regionScope = new RegionScope() {{
                                        allRegionsEnabled = false;
                                        regions = new String[]{{
                                            add("ipsa"),
                                        }};
                                    }};;
                                }};;
                            }};, PutAdminAccountXAmzTargetEnum.AWSFMS20180101_PUT_ADMIN_ACCOUNT) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "odio";
                xAmzCredential = "quaerat";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
            }};            

            PutAdminAccountResponse res = sdk.sdk.putAdminAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAppsList

Creates an Firewall Manager applications list.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAppsListRequest;
import org.openapis.openapi.models.operations.PutAppsListResponse;
import org.openapis.openapi.models.operations.PutAppsListXAmzTargetEnum;
import org.openapis.openapi.models.shared.App;
import org.openapis.openapi.models.shared.AppsListData;
import org.openapis.openapi.models.shared.PutAppsListRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAppsListRequest req = new PutAppsListRequest(                new PutAppsListRequest(                new AppsListData(                new org.openapis.openapi.models.shared.App[]{{
                                                                add(new App("ab", 743835L, "dolorum") {{
                                                                    appName = "atque";
                                                                    port = 24678L;
                                                                    protocol = "fugiat";
                                                                }}),
                                                            }}, "iusto") {{
                                                createTime = OffsetDateTime.parse("2022-04-28T20:45:55.086Z");
                                                lastUpdateTime = OffsetDateTime.parse("2021-10-14T20:34:13.522Z");
                                                listId = "necessitatibus";
                                                listUpdateToken = "distinctio";
                                                previousAppsList = new java.util.HashMap<String, org.openapis.openapi.models.shared.App[]>() {{
                                                    put("nihil", new org.openapis.openapi.models.shared.App[]{{
                                                        add(new App("eius", 137220L, "perferendis") {{
                                                            appName = "voluptate";
                                                            port = 663078L;
                                                            protocol = "saepe";
                                                        }}),
                                                    }});
                                                    put("amet", new org.openapis.openapi.models.shared.App[]{{
                                                        add(new App("suscipit", 645785L, "provident") {{
                                                            appName = "accusamus";
                                                            port = 320017L;
                                                            protocol = "saepe";
                                                        }}),
                                                        add(new App("similique", 55L, "at") {{
                                                            appName = "minima";
                                                            port = 831049L;
                                                            protocol = "totam";
                                                        }}),
                                                        add(new App("quod", 885338L, "qui") {{
                                                            appName = "quaerat";
                                                            port = 273542L;
                                                            protocol = "vel";
                                                        }}),
                                                        add(new App("harum", 483409L, "ipsum") {{
                                                            appName = "dolorum";
                                                            port = 952792L;
                                                            protocol = "esse";
                                                        }}),
                                                    }});
                                                    put("quisquam", new org.openapis.openapi.models.shared.App[]{{
                                                        add(new App("numquam", 313692L, "dolorem") {{
                                                            appName = "amet";
                                                            port = 730856L;
                                                            protocol = "accusamus";
                                                        }}),
                                                        add(new App("sit", 711584L, "neque") {{
                                                            appName = "sapiente";
                                                            port = 518201L;
                                                            protocol = "nihil";
                                                        }}),
                                                        add(new App("voluptas", 646265L, "quam") {{
                                                            appName = "sed";
                                                            port = 424685L;
                                                            protocol = "libero";
                                                        }}),
                                                        add(new App("cupiditate", 807581L, "pariatur") {{
                                                            appName = "ipsum";
                                                            port = 277628L;
                                                            protocol = "qui";
                                                        }}),
                                                    }});
                                                    put("soluta", new org.openapis.openapi.models.shared.App[]{{
                                                        add(new App("aspernatur", 174909L, "distinctio") {{
                                                            appName = "laborum";
                                                            port = 517379L;
                                                            protocol = "incidunt";
                                                        }}),
                                                    }});
                                                }};
                                            }};) {{
                                tagList = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("molestias", "temporibus") {{
                                        key = "aliquid";
                                        value = "quam";
                                    }}),
                                    add(new Tag("fugit", "magni") {{
                                        key = "qui";
                                        value = "neque";
                                    }}),
                                    add(new Tag("ullam", "nam") {{
                                        key = "odio";
                                        value = "sunt";
                                    }}),
                                }};
                            }};, PutAppsListXAmzTargetEnum.AWSFMS20180101_PUT_APPS_LIST) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "cumque";
                xAmzDate = "soluta";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "et";
                xAmzSignedHeaders = "saepe";
            }};            

            PutAppsListResponse res = sdk.sdk.putAppsList(req);

            if (res.putAppsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putNotificationChannel

<p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the <code>SnsRoleName</code> to publish SNS logs. If the <code>SnsRoleName</code> provided is a role other than the <code>AWSServiceRoleForFMS</code> service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal <code>fms.amazonaws.com</code> to assume this role. For information about configuring an SNS access policy, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a> in the <i>Firewall Manager Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutNotificationChannelRequest;
import org.openapis.openapi.models.operations.PutNotificationChannelResponse;
import org.openapis.openapi.models.operations.PutNotificationChannelXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutNotificationChannelRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutNotificationChannelRequest req = new PutNotificationChannelRequest(                new PutNotificationChannelRequest("veritatis", "nobis");, PutNotificationChannelXAmzTargetEnum.AWSFMS20180101_PUT_NOTIFICATION_CHANNEL) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "cupiditate";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolore";
            }};            

            PutNotificationChannelResponse res = sdk.sdk.putNotificationChannel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPolicy

<p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPolicyRequest;
import org.openapis.openapi.models.operations.PutPolicyResponse;
import org.openapis.openapi.models.operations.PutPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.CustomerPolicyStatusEnum;
import org.openapis.openapi.models.shared.FirewallDeploymentModelEnum;
import org.openapis.openapi.models.shared.NetworkFirewallPolicy;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.PolicyOption;
import org.openapis.openapi.models.shared.PutPolicyRequest;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityServicePolicyData;
import org.openapis.openapi.models.shared.SecurityServiceTypeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.ThirdPartyFirewallPolicy;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutPolicyRequest req = new PutPolicyRequest(                new PutPolicyRequest(                new Policy(false, "adipisci", false, "dolorum",                 new SecurityServicePolicyData(SecurityServiceTypeEnum.WAFV2) {{
                                                                managedServiceData = "quae";
                                                                policyOption = new PolicyOption() {{
                                                                    networkFirewallPolicy = new NetworkFirewallPolicy() {{
                                                                        firewallDeploymentModel = FirewallDeploymentModelEnum.CENTRALIZED;
                                                                    }};;
                                                                    thirdPartyFirewallPolicy = new ThirdPartyFirewallPolicy() {{
                                                                        firewallDeploymentModel = FirewallDeploymentModelEnum.DISTRIBUTED;
                                                                    }};;
                                                                }};;
                                                            }};) {{
                                                deleteUnusedFMManagedResources = false;
                                                excludeMap = new java.util.HashMap<String, String[]>() {{
                                                    put("consequatur", new String[]{{
                                                        add("repellendus"),
                                                        add("porro"),
                                                        add("doloribus"),
                                                    }});
                                                    put("ut", new String[]{{
                                                        add("cupiditate"),
                                                        add("qui"),
                                                        add("quae"),
                                                    }});
                                                    put("laudantium", new String[]{{
                                                        add("occaecati"),
                                                        add("voluptatibus"),
                                                    }});
                                                    put("quisquam", new String[]{{
                                                        add("omnis"),
                                                        add("quis"),
                                                        add("ipsum"),
                                                        add("delectus"),
                                                    }});
                                                }};
                                                includeMap = new java.util.HashMap<String, String[]>() {{
                                                    put("consectetur", new String[]{{
                                                        add("tenetur"),
                                                        add("dignissimos"),
                                                        add("hic"),
                                                        add("distinctio"),
                                                    }});
                                                    put("quod", new String[]{{
                                                        add("similique"),
                                                        add("facilis"),
                                                    }});
                                                }};
                                                policyDescription = "vero";
                                                policyId = "ducimus";
                                                policyStatus = CustomerPolicyStatusEnum.ACTIVE;
                                                policyUpdateToken = "quibusdam";
                                                resourceSetIds = new String[]{{
                                                    add("sequi"),
                                                    add("natus"),
                                                    add("impedit"),
                                                    add("aut"),
                                                }};
                                                resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                                                    add(new ResourceTag("fugit") {{
                                                        key = "exercitationem";
                                                        value = "nulla";
                                                    }}),
                                                    add(new ResourceTag("doloribus") {{
                                                        key = "porro";
                                                        value = "maiores";
                                                    }}),
                                                    add(new ResourceTag("ducimus") {{
                                                        key = "iusto";
                                                        value = "eligendi";
                                                    }}),
                                                    add(new ResourceTag("tempora") {{
                                                        key = "alias";
                                                        value = "officia";
                                                    }}),
                                                }};
                                                resourceTypeList = new String[]{{
                                                    add("ea"),
                                                    add("aspernatur"),
                                                }};
                                            }};) {{
                                tagList = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ratione", "ex") {{
                                        key = "possimus";
                                        value = "magnam";
                                    }}),
                                    add(new Tag("dolor", "maiores") {{
                                        key = "laudantium";
                                        value = "dicta";
                                    }}),
                                }};
                            }};, PutPolicyXAmzTargetEnum.AWSFMS20180101_PUT_POLICY) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "ex";
                xAmzCredential = "nulla";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "sapiente";
            }};            

            PutPolicyResponse res = sdk.sdk.putPolicy(req);

            if (res.putPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProtocolsList

Creates an Firewall Manager protocols list.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProtocolsListRequest;
import org.openapis.openapi.models.operations.PutProtocolsListResponse;
import org.openapis.openapi.models.operations.PutProtocolsListXAmzTargetEnum;
import org.openapis.openapi.models.shared.ProtocolsListData;
import org.openapis.openapi.models.shared.PutProtocolsListRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutProtocolsListRequest req = new PutProtocolsListRequest(                new PutProtocolsListRequest(                new ProtocolsListData("saepe",                 new String[]{{
                                                                add("impedit"),
                                                                add("corporis"),
                                                            }}) {{
                                                createTime = OffsetDateTime.parse("2022-08-08T04:23:21.555Z");
                                                lastUpdateTime = OffsetDateTime.parse("2022-09-12T19:57:40.850Z");
                                                listId = "ea";
                                                listUpdateToken = "quo";
                                                previousProtocolsList = new java.util.HashMap<String, String[]>() {{
                                                    put("recusandae", new String[]{{
                                                        add("minima"),
                                                    }});
                                                }};
                                            }};) {{
                                tagList = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("aut", "aut") {{
                                        key = "a";
                                        value = "libero";
                                    }}),
                                }};
                            }};, PutProtocolsListXAmzTargetEnum.AWSFMS20180101_PUT_PROTOCOLS_LIST) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aliquam";
                xAmzDate = "fugit";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "non";
            }};            

            PutProtocolsListResponse res = sdk.sdk.putProtocolsList(req);

            if (res.putProtocolsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourceSet

<p>Creates the resource set.</p> <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourceSetRequest;
import org.openapis.openapi.models.operations.PutResourceSetResponse;
import org.openapis.openapi.models.operations.PutResourceSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutResourceSetRequest;
import org.openapis.openapi.models.shared.ResourceSet;
import org.openapis.openapi.models.shared.ResourceSetStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourceSetRequest req = new PutResourceSetRequest(                new PutResourceSetRequest(                new ResourceSet("dolorum",                 new String[]{{
                                                                add("placeat"),
                                                                add("velit"),
                                                                add("eum"),
                                                            }}) {{
                                                description = "autem";
                                                id = "c8dd6b14-4290-4747-8778-a7bd466d28c1";
                                                lastUpdateTime = OffsetDateTime.parse("2022-05-05T02:03:02.582Z");
                                                resourceSetStatus = ResourceSetStatusEnum.OUT_OF_ADMIN_SCOPE;
                                                updateToken = "neque";
                                            }};) {{
                                tagList = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("fuga", "eius") {{
                                        key = "illum";
                                        value = "quo";
                                    }}),
                                    add(new Tag("ab", "cupiditate") {{
                                        key = "eos";
                                        value = "voluptas";
                                    }}),
                                    add(new Tag("debitis", "ipsam") {{
                                        key = "consequatur";
                                        value = "tempora";
                                    }}),
                                    add(new Tag("quo", "esse") {{
                                        key = "aspernatur";
                                        value = "sequi";
                                    }}),
                                }};
                            }};, PutResourceSetXAmzTargetEnum.AWSFMS20180101_PUT_RESOURCE_SET) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "distinctio";
                xAmzDate = "quod";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "nihil";
            }};            

            PutResourceSetResponse res = sdk.sdk.putResourceSet(req);

            if (res.putResourceSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds one or more tags to an Amazon Web Services resource.

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
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("accusamus",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("commodi", "sapiente") {{
                                                    key = "odio";
                                                    value = "occaecati";
                                                }}),
                                                add(new Tag("molestiae", "accusantium") {{
                                                    key = "dolores";
                                                    value = "deserunt";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AWSFMS20180101_TAG_RESOURCE) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "eum";
                xAmzCredential = "quas";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "fugit";
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

Removes one or more tags from an Amazon Web Services resource.

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
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("mollitia",                 new String[]{{
                                                add("atque"),
                                                add("explicabo"),
                                            }});, UntagResourceXAmzTargetEnum.AWSFMS20180101_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "fugit";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "ratione";
                xAmzSignedHeaders = "explicabo";
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
