# SDK

## Overview

<p>This is the <i>Firewall Manager API Reference</i>. This guide is for developers who need detailed information about the Firewall Manager API actions, data types, and errors. For detailed information about Firewall Manager features, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">Firewall Manager Developer Guide</a>.</p> <p>Some API actions require explicit resource permissions. For information, see the developer guide topic <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/fms/>
### Available Operations

* [AssociateAdminAccount](#associateadminaccount) - <p>Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.</p> <p>For information about working with Firewall Manager administrator accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>
* [AssociateThirdPartyFirewall](#associatethirdpartyfirewall) - Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.
* [BatchAssociateResource](#batchassociateresource) - Associate resources to a Firewall Manager resource set.
* [BatchDisassociateResource](#batchdisassociateresource) - Disassociates resources from a Firewall Manager resource set.
* [DeleteAppsList](#deleteappslist) - Permanently deletes an Firewall Manager applications list.
* [DeleteNotificationChannel](#deletenotificationchannel) - Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
* [DeletePolicy](#deletepolicy) - Permanently deletes an Firewall Manager policy. 
* [DeleteProtocolsList](#deleteprotocolslist) - Permanently deletes an Firewall Manager protocols list.
* [DeleteResourceSet](#deleteresourceset) - Deletes the specified <a>ResourceSet</a>.
* [DisassociateAdminAccount](#disassociateadminaccount) - <p>Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a <a>PutAdminAccount</a> request. To set an account as a default administrator account, you must submit an <a>AssociateAdminAccount</a> request.</p> <p>Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.</p>
* [DisassociateThirdPartyFirewall](#disassociatethirdpartyfirewall) - Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.
* [GetAdminAccount](#getadminaccount) - Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager default administrator.
* [GetAdminScope](#getadminscope) - Returns information about the specified account's administrative scope. The admistrative scope defines the resources that an Firewall Manager administrator can manage.
* [GetAppsList](#getappslist) - Returns information about the specified Firewall Manager applications list.
* [GetComplianceDetail](#getcompliancedetail) - <p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>
* [GetNotificationChannel](#getnotificationchannel) - Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
* [GetPolicy](#getpolicy) - Returns information about the specified Firewall Manager policy.
* [GetProtectionStatus](#getprotectionstatus) - If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.
* [GetProtocolsList](#getprotocolslist) - Returns information about the specified Firewall Manager protocols list.
* [GetResourceSet](#getresourceset) - Gets information about a specific resource set.
* [GetThirdPartyFirewallAssociationStatus](#getthirdpartyfirewallassociationstatus) - The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.
* [GetViolationDetails](#getviolationdetails) - Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
* [ListAdminAccountsForOrganization](#listadminaccountsfororganization) - <p>Returns a <code>AdminAccounts</code> object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by <a>AssociateAdminAccount</a>.</p> <p>This operation can be called only from the organization's management account.</p>
* [ListAdminsManagingAccount](#listadminsmanagingaccount) - Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their <a>AdminScope</a>.
* [ListAppsLists](#listappslists) - Returns an array of <code>AppsListDataSummary</code> objects.
* [ListComplianceStatus](#listcompliancestatus) - Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. 
* [ListDiscoveredResources](#listdiscoveredresources) - Returns an array of resources in the organization's accounts that are available to be associated with a resource set.
* [ListMemberAccounts](#listmemberaccounts) - <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>Either an Firewall Manager administrator or the organization's management account can make this request.</p>
* [ListPolicies](#listpolicies) - Returns an array of <code>PolicySummary</code> objects.
* [ListProtocolsLists](#listprotocolslists) - Returns an array of <code>ProtocolsListDataSummary</code> objects.
* [ListResourceSetResources](#listresourcesetresources) - Returns an array of resources that are currently associated to a resource set.
* [ListResourceSets](#listresourcesets) - Returns an array of <code>ResourceSetSummary</code> objects.
* [ListTagsForResource](#listtagsforresource) - Retrieves the list of tags for the specified Amazon Web Services resource. 
* [ListThirdPartyFirewallFirewallPolicies](#listthirdpartyfirewallfirewallpolicies) - Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.
* [PutAdminAccount](#putadminaccount) - Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.
* [PutAppsList](#putappslist) - Creates an Firewall Manager applications list.
* [PutNotificationChannel](#putnotificationchannel) - <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the <code>SnsRoleName</code> to publish SNS logs. If the <code>SnsRoleName</code> provided is a role other than the <code>AWSServiceRoleForFMS</code> service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal <code>fms.amazonaws.com</code> to assume this role. For information about configuring an SNS access policy, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a> in the <i>Firewall Manager Developer Guide</i>.</p>
* [PutPolicy](#putpolicy) - <p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
* [PutProtocolsList](#putprotocolslist) - Creates an Firewall Manager protocols list.
* [PutResourceSet](#putresourceset) - <p>Creates the resource set.</p> <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>
* [TagResource](#tagresource) - Adds one or more tags to an Amazon Web Services resource.
* [UntagResource](#untagresource) - Removes one or more tags from an Amazon Web Services resource.

## AssociateAdminAccount

<p>Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.</p> <p>For information about working with Firewall Manager administrator accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>

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
    res, err := s.SDK.AssociateAdminAccount(ctx, operations.AssociateAdminAccountRequest{
        AssociateAdminAccountRequest: shared.AssociateAdminAccountRequest{
            AdminAccount: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.AssociateAdminAccountXAmzTargetEnumAwsfms20180101AssociateAdminAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AssociateThirdPartyFirewall

Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.

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
    res, err := s.SDK.AssociateThirdPartyFirewall(ctx, operations.AssociateThirdPartyFirewallRequest{
        AssociateThirdPartyFirewallRequest: shared.AssociateThirdPartyFirewallRequest{
            ThirdPartyFirewall: shared.ThirdPartyFirewallEnumFortigateCloudNativeFirewall,
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.AssociateThirdPartyFirewallXAmzTargetEnumAwsfms20180101AssociateThirdPartyFirewall,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateThirdPartyFirewallResponse != nil {
        // handle response
    }
}
```

## BatchAssociateResource

Associate resources to a Firewall Manager resource set.

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
    res, err := s.SDK.BatchAssociateResource(ctx, operations.BatchAssociateResourceRequest{
        BatchAssociateResourceRequest: shared.BatchAssociateResourceRequest{
            Items: []string{
                "nisi",
                "recusandae",
                "temporibus",
            },
            ResourceSetIdentifier: "ab",
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.BatchAssociateResourceXAmzTargetEnumAwsfms20180101BatchAssociateResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAssociateResourceResponse != nil {
        // handle response
    }
}
```

## BatchDisassociateResource

Disassociates resources from a Firewall Manager resource set.

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
    res, err := s.SDK.BatchDisassociateResource(ctx, operations.BatchDisassociateResourceRequest{
        BatchDisassociateResourceRequest: shared.BatchDisassociateResourceRequest{
            Items: []string{
                "odit",
                "at",
                "at",
                "maiores",
            },
            ResourceSetIdentifier: "molestiae",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.BatchDisassociateResourceXAmzTargetEnumAwsfms20180101BatchDisassociateResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDisassociateResourceResponse != nil {
        // handle response
    }
}
```

## DeleteAppsList

Permanently deletes an Firewall Manager applications list.

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
    res, err := s.SDK.DeleteAppsList(ctx, operations.DeleteAppsListRequest{
        DeleteAppsListRequest: shared.DeleteAppsListRequest{
            ListID: "nam",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DeleteAppsListXAmzTargetEnumAwsfms20180101DeleteAppsList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNotificationChannel

Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.

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
    res, err := s.SDK.DeleteNotificationChannel(ctx, operations.DeleteNotificationChannelRequest{
        RequestBody: map[string]interface{}{
            "commodi": "molestiae",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.DeleteNotificationChannelXAmzTargetEnumAwsfms20180101DeleteNotificationChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePolicy

Permanently deletes an Firewall Manager policy. 

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
    res, err := s.SDK.DeletePolicy(ctx, operations.DeletePolicyRequest{
        DeletePolicyRequest: shared.DeletePolicyRequest{
            DeleteAllPolicyResources: sdk.Bool(false),
            PolicyID: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DeletePolicyXAmzTargetEnumAwsfms20180101DeletePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteProtocolsList

Permanently deletes an Firewall Manager protocols list.

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
    res, err := s.SDK.DeleteProtocolsList(ctx, operations.DeleteProtocolsListRequest{
        DeleteProtocolsListRequest: shared.DeleteProtocolsListRequest{
            ListID: "laboriosam",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.DeleteProtocolsListXAmzTargetEnumAwsfms20180101DeleteProtocolsList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteResourceSet

Deletes the specified <a>ResourceSet</a>.

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
    res, err := s.SDK.DeleteResourceSet(ctx, operations.DeleteResourceSetRequest{
        DeleteResourceSetRequest: shared.DeleteResourceSetRequest{
            Identifier: "saepe",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DeleteResourceSetXAmzTargetEnumAwsfms20180101DeleteResourceSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisassociateAdminAccount

<p>Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a <a>PutAdminAccount</a> request. To set an account as a default administrator account, you must submit an <a>AssociateAdminAccount</a> request.</p> <p>Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.</p>

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
    res, err := s.SDK.DisassociateAdminAccount(ctx, operations.DisassociateAdminAccountRequest{
        RequestBody: map[string]interface{}{
            "dolorem": "corporis",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.DisassociateAdminAccountXAmzTargetEnumAwsfms20180101DisassociateAdminAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisassociateThirdPartyFirewall

Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.

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
    res, err := s.SDK.DisassociateThirdPartyFirewall(ctx, operations.DisassociateThirdPartyFirewallRequest{
        DisassociateThirdPartyFirewallRequest: shared.DisassociateThirdPartyFirewallRequest{
            ThirdPartyFirewall: shared.ThirdPartyFirewallEnumPaloAltoNetworksCloudNgfw,
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DisassociateThirdPartyFirewallXAmzTargetEnumAwsfms20180101DisassociateThirdPartyFirewall,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateThirdPartyFirewallResponse != nil {
        // handle response
    }
}
```

## GetAdminAccount

Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager default administrator.

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
    res, err := s.SDK.GetAdminAccount(ctx, operations.GetAdminAccountRequest{
        RequestBody: map[string]interface{}{
            "consequuntur": "repellat",
            "mollitia": "occaecati",
            "numquam": "commodi",
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("vitae"),
        XAmzTarget: operations.GetAdminAccountXAmzTargetEnumAwsfms20180101GetAdminAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAdminAccountResponse != nil {
        // handle response
    }
}
```

## GetAdminScope

Returns information about the specified account's administrative scope. The admistrative scope defines the resources that an Firewall Manager administrator can manage.

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
    res, err := s.SDK.GetAdminScope(ctx, operations.GetAdminScopeRequest{
        GetAdminScopeRequest: shared.GetAdminScopeRequest{
            AdminAccount: "laborum",
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.GetAdminScopeXAmzTargetEnumAwsfms20180101GetAdminScope,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAdminScopeResponse != nil {
        // handle response
    }
}
```

## GetAppsList

Returns information about the specified Firewall Manager applications list.

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
    res, err := s.SDK.GetAppsList(ctx, operations.GetAppsListRequest{
        GetAppsListRequest: shared.GetAppsListRequest{
            DefaultList: sdk.Bool(false),
            ListID: "id",
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.GetAppsListXAmzTargetEnumAwsfms20180101GetAppsList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAppsListResponse != nil {
        // handle response
    }
}
```

## GetComplianceDetail

<p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>

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
    res, err := s.SDK.GetComplianceDetail(ctx, operations.GetComplianceDetailRequest{
        GetComplianceDetailRequest: shared.GetComplianceDetailRequest{
            MemberAccount: "reiciendis",
            PolicyID: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.GetComplianceDetailXAmzTargetEnumAwsfms20180101GetComplianceDetail,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComplianceDetailResponse != nil {
        // handle response
    }
}
```

## GetNotificationChannel

Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.

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
    res, err := s.SDK.GetNotificationChannel(ctx, operations.GetNotificationChannelRequest{
        RequestBody: map[string]interface{}{
            "perferendis": "doloremque",
            "reprehenderit": "ut",
            "maiores": "dicta",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.GetNotificationChannelXAmzTargetEnumAwsfms20180101GetNotificationChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNotificationChannelResponse != nil {
        // handle response
    }
}
```

## GetPolicy

Returns information about the specified Firewall Manager policy.

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
    res, err := s.SDK.GetPolicy(ctx, operations.GetPolicyRequest{
        GetPolicyRequest: shared.GetPolicyRequest{
            PolicyID: "commodi",
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.GetPolicyXAmzTargetEnumAwsfms20180101GetPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPolicyResponse != nil {
        // handle response
    }
}
```

## GetProtectionStatus

If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.

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
    res, err := s.SDK.GetProtectionStatus(ctx, operations.GetProtectionStatusRequest{
        GetProtectionStatusRequest: shared.GetProtectionStatusRequest{
            EndTime: types.MustTimeFromString("2022-06-29T05:25:54.356Z"),
            MaxResults: sdk.Int64(523248),
            MemberAccountID: sdk.String("voluptates"),
            NextToken: sdk.String("quasi"),
            PolicyID: "repudiandae",
            StartTime: types.MustTimeFromString("2022-11-01T07:52:08.326Z"),
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.GetProtectionStatusXAmzTargetEnumAwsfms20180101GetProtectionStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProtectionStatusResponse != nil {
        // handle response
    }
}
```

## GetProtocolsList

Returns information about the specified Firewall Manager protocols list.

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
    res, err := s.SDK.GetProtocolsList(ctx, operations.GetProtocolsListRequest{
        GetProtocolsListRequest: shared.GetProtocolsListRequest{
            DefaultList: sdk.Bool(false),
            ListID: "deserunt",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.GetProtocolsListXAmzTargetEnumAwsfms20180101GetProtocolsList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProtocolsListResponse != nil {
        // handle response
    }
}
```

## GetResourceSet

Gets information about a specific resource set.

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
    res, err := s.SDK.GetResourceSet(ctx, operations.GetResourceSetRequest{
        GetResourceSetRequest: shared.GetResourceSetRequest{
            Identifier: "quos",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.GetResourceSetXAmzTargetEnumAwsfms20180101GetResourceSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourceSetResponse != nil {
        // handle response
    }
}
```

## GetThirdPartyFirewallAssociationStatus

The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.

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
    res, err := s.SDK.GetThirdPartyFirewallAssociationStatus(ctx, operations.GetThirdPartyFirewallAssociationStatusRequest{
        GetThirdPartyFirewallAssociationStatusRequest: shared.GetThirdPartyFirewallAssociationStatusRequest{
            ThirdPartyFirewall: shared.ThirdPartyFirewallEnumFortigateCloudNativeFirewall,
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.GetThirdPartyFirewallAssociationStatusXAmzTargetEnumAwsfms20180101GetThirdPartyFirewallAssociationStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetThirdPartyFirewallAssociationStatusResponse != nil {
        // handle response
    }
}
```

## GetViolationDetails

Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.

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
    res, err := s.SDK.GetViolationDetails(ctx, operations.GetViolationDetailsRequest{
        GetViolationDetailsRequest: shared.GetViolationDetailsRequest{
            MemberAccount: "eligendi",
            PolicyID: "sint",
            ResourceID: "aliquid",
            ResourceType: "provident",
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.GetViolationDetailsXAmzTargetEnumAwsfms20180101GetViolationDetails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetViolationDetailsResponse != nil {
        // handle response
    }
}
```

## ListAdminAccountsForOrganization

<p>Returns a <code>AdminAccounts</code> object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by <a>AssociateAdminAccount</a>.</p> <p>This operation can be called only from the organization's management account.</p>

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
    res, err := s.SDK.ListAdminAccountsForOrganization(ctx, operations.ListAdminAccountsForOrganizationRequest{
        ListAdminAccountsForOrganizationRequest: shared.ListAdminAccountsForOrganizationRequest{
            MaxResults: sdk.Int64(447125),
            NextToken: sdk.String("in"),
        },
        MaxResults: sdk.String("illum"),
        NextToken: sdk.String("maiores"),
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.ListAdminAccountsForOrganizationXAmzTargetEnumAwsfms20180101ListAdminAccountsForOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdminAccountsForOrganizationResponse != nil {
        // handle response
    }
}
```

## ListAdminsManagingAccount

Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their <a>AdminScope</a>.

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
    res, err := s.SDK.ListAdminsManagingAccount(ctx, operations.ListAdminsManagingAccountRequest{
        ListAdminsManagingAccountRequest: shared.ListAdminsManagingAccountRequest{
            MaxResults: sdk.Int64(675439),
            NextToken: sdk.String("accusamus"),
        },
        MaxResults: sdk.String("non"),
        NextToken: sdk.String("occaecati"),
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.ListAdminsManagingAccountXAmzTargetEnumAwsfms20180101ListAdminsManagingAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdminsManagingAccountResponse != nil {
        // handle response
    }
}
```

## ListAppsLists

Returns an array of <code>AppsListDataSummary</code> objects.

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
    res, err := s.SDK.ListAppsLists(ctx, operations.ListAppsListsRequest{
        ListAppsListsRequest: shared.ListAppsListsRequest{
            DefaultLists: sdk.Bool(false),
            MaxResults: 501324,
            NextToken: sdk.String("deleniti"),
        },
        MaxResults: sdk.String("sapiente"),
        NextToken: sdk.String("amet"),
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.ListAppsListsXAmzTargetEnumAwsfms20180101ListAppsLists,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppsListsResponse != nil {
        // handle response
    }
}
```

## ListComplianceStatus

Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. 

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
    res, err := s.SDK.ListComplianceStatus(ctx, operations.ListComplianceStatusRequest{
        ListComplianceStatusRequest: shared.ListComplianceStatusRequest{
            MaxResults: sdk.Int64(470132),
            NextToken: sdk.String("magnam"),
            PolicyID: "distinctio",
        },
        MaxResults: sdk.String("id"),
        NextToken: sdk.String("labore"),
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.ListComplianceStatusXAmzTargetEnumAwsfms20180101ListComplianceStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComplianceStatusResponse != nil {
        // handle response
    }
}
```

## ListDiscoveredResources

Returns an array of resources in the organization's accounts that are available to be associated with a resource set.

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
    res, err := s.SDK.ListDiscoveredResources(ctx, operations.ListDiscoveredResourcesRequest{
        ListDiscoveredResourcesRequest: shared.ListDiscoveredResourcesRequest{
            MaxResults: sdk.Int64(102863),
            MemberAccountIds: []string{
                "et",
                "excepturi",
            },
            NextToken: sdk.String("ullam"),
            ResourceType: "provident",
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.ListDiscoveredResourcesXAmzTargetEnumAwsfms20180101ListDiscoveredResources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDiscoveredResourcesResponse != nil {
        // handle response
    }
}
```

## ListMemberAccounts

<p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>Either an Firewall Manager administrator or the organization's management account can make this request.</p>

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
    res, err := s.SDK.ListMemberAccounts(ctx, operations.ListMemberAccountsRequest{
        ListMemberAccountsRequest: shared.ListMemberAccountsRequest{
            MaxResults: sdk.Int64(431418),
            NextToken: sdk.String("dolor"),
        },
        MaxResults: sdk.String("necessitatibus"),
        NextToken: sdk.String("odit"),
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.ListMemberAccountsXAmzTargetEnumAwsfms20180101ListMemberAccounts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMemberAccountsResponse != nil {
        // handle response
    }
}
```

## ListPolicies

Returns an array of <code>PolicySummary</code> objects.

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
    res, err := s.SDK.ListPolicies(ctx, operations.ListPoliciesRequest{
        ListPoliciesRequest: shared.ListPoliciesRequest{
            MaxResults: sdk.Int64(537023),
            NextToken: sdk.String("facilis"),
        },
        MaxResults: sdk.String("in"),
        NextToken: sdk.String("architecto"),
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.ListPoliciesXAmzTargetEnumAwsfms20180101ListPolicies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPoliciesResponse != nil {
        // handle response
    }
}
```

## ListProtocolsLists

Returns an array of <code>ProtocolsListDataSummary</code> objects.

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
    res, err := s.SDK.ListProtocolsLists(ctx, operations.ListProtocolsListsRequest{
        ListProtocolsListsRequest: shared.ListProtocolsListsRequest{
            DefaultLists: sdk.Bool(false),
            MaxResults: 149448,
            NextToken: sdk.String("saepe"),
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
        XAmzTarget: operations.ListProtocolsListsXAmzTargetEnumAwsfms20180101ListProtocolsLists,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProtocolsListsResponse != nil {
        // handle response
    }
}
```

## ListResourceSetResources

Returns an array of resources that are currently associated to a resource set.

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
    res, err := s.SDK.ListResourceSetResources(ctx, operations.ListResourceSetResourcesRequest{
        ListResourceSetResourcesRequest: shared.ListResourceSetResourcesRequest{
            Identifier: "pariatur",
            MaxResults: sdk.Int64(807319),
            NextToken: sdk.String("ea"),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.ListResourceSetResourcesXAmzTargetEnumAwsfms20180101ListResourceSetResources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceSetResourcesResponse != nil {
        // handle response
    }
}
```

## ListResourceSets

Returns an array of <code>ResourceSetSummary</code> objects.

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
    res, err := s.SDK.ListResourceSets(ctx, operations.ListResourceSetsRequest{
        ListResourceSetsRequest: shared.ListResourceSetsRequest{
            MaxResults: sdk.Int64(373291),
            NextToken: sdk.String("voluptate"),
        },
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.ListResourceSetsXAmzTargetEnumAwsfms20180101ListResourceSets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceSetsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Retrieves the list of tags for the specified Amazon Web Services resource. 

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
            ResourceArn: "fugiat",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAwsfms20180101ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListThirdPartyFirewallFirewallPolicies

Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.

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
    res, err := s.SDK.ListThirdPartyFirewallFirewallPolicies(ctx, operations.ListThirdPartyFirewallFirewallPoliciesRequest{
        ListThirdPartyFirewallFirewallPoliciesRequest: shared.ListThirdPartyFirewallFirewallPoliciesRequest{
            MaxResults: 171629,
            NextToken: sdk.String("quis"),
            ThirdPartyFirewall: shared.ThirdPartyFirewallEnumFortigateCloudNativeFirewall,
        },
        MaxResults: sdk.String("dignissimos"),
        NextToken: sdk.String("eaque"),
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.ListThirdPartyFirewallFirewallPoliciesXAmzTargetEnumAwsfms20180101ListThirdPartyFirewallFirewallPolicies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListThirdPartyFirewallFirewallPoliciesResponse != nil {
        // handle response
    }
}
```

## PutAdminAccount

Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.

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
    res, err := s.SDK.PutAdminAccount(ctx, operations.PutAdminAccountRequest{
        PutAdminAccountRequest: shared.PutAdminAccountRequest{
            AdminAccount: "dolor",
            AdminScope: &shared.AdminScope{
                AccountScope: &shared.AccountScope{
                    Accounts: []string{
                        "nostrum",
                        "hic",
                        "recusandae",
                        "omnis",
                    },
                    AllAccountsEnabled: sdk.Bool(false),
                    ExcludeSpecifiedAccounts: sdk.Bool(false),
                },
                OrganizationalUnitScope: &shared.OrganizationalUnitScope{
                    AllOrganizationalUnitsEnabled: sdk.Bool(false),
                    ExcludeSpecifiedOrganizationalUnits: sdk.Bool(false),
                    OrganizationalUnits: []string{
                        "perspiciatis",
                        "voluptatem",
                        "porro",
                    },
                },
                PolicyTypeScope: &shared.PolicyTypeScope{
                    AllPolicyTypesEnabled: sdk.Bool(false),
                    PolicyTypes: []shared.SecurityServiceTypeEnum{
                        shared.SecurityServiceTypeEnumSecurityGroupsUsageAudit,
                    },
                },
                RegionScope: &shared.RegionScope{
                    AllRegionsEnabled: sdk.Bool(false),
                    Regions: []string{
                        "eaque",
                        "occaecati",
                        "rerum",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.PutAdminAccountXAmzTargetEnumAwsfms20180101PutAdminAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutAppsList

Creates an Firewall Manager applications list.

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
    res, err := s.SDK.PutAppsList(ctx, operations.PutAppsListRequest{
        PutAppsListRequest: shared.PutAppsListRequest{
            AppsList: shared.AppsListData{
                AppsList: []shared.App{
                    shared.App{
                        AppName: "provident",
                        Port: 750844,
                        Protocol: "libero",
                    },
                    shared.App{
                        AppName: "delectus",
                        Port: 311945,
                        Protocol: "quos",
                    },
                    shared.App{
                        AppName: "aliquid",
                        Port: 212390,
                        Protocol: "dolorem",
                    },
                    shared.App{
                        AppName: "dolor",
                        Port: 186193,
                        Protocol: "ipsum",
                    },
                },
                CreateTime: types.MustTimeFromString("2021-04-17T07:36:26.867Z"),
                LastUpdateTime: types.MustTimeFromString("2022-02-04T23:02:58.199Z"),
                ListID: sdk.String("dignissimos"),
                ListName: "reiciendis",
                ListUpdateToken: sdk.String("amet"),
                PreviousAppsList: map[string][]shared.App{
                    "numquam": []shared.App{
                        shared.App{
                            AppName: "ipsa",
                            Port: 56418,
                            Protocol: "iure",
                        },
                    },
                    "odio": []shared.App{
                        shared.App{
                            AppName: "accusamus",
                            Port: 696344,
                            Protocol: "voluptatibus",
                        },
                        shared.App{
                            AppName: "voluptas",
                            Port: 617658,
                            Protocol: "eos",
                        },
                    },
                    "atque": []shared.App{
                        shared.App{
                            AppName: "fugiat",
                            Port: 67249,
                            Protocol: "soluta",
                        },
                    },
                },
            },
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "iusto",
                    Value: "voluptate",
                },
                shared.Tag{
                    Key: "dolorum",
                    Value: "deleniti",
                },
                shared.Tag{
                    Key: "omnis",
                    Value: "necessitatibus",
                },
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.PutAppsListXAmzTargetEnumAwsfms20180101PutAppsList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAppsListResponse != nil {
        // handle response
    }
}
```

## PutNotificationChannel

<p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the <code>SnsRoleName</code> to publish SNS logs. If the <code>SnsRoleName</code> provided is a role other than the <code>AWSServiceRoleForFMS</code> service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal <code>fms.amazonaws.com</code> to assume this role. For information about configuring an SNS access policy, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a> in the <i>Firewall Manager Developer Guide</i>.</p>

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
    res, err := s.SDK.PutNotificationChannel(ctx, operations.PutNotificationChannelRequest{
        PutNotificationChannelRequest: shared.PutNotificationChannelRequest{
            SnsRoleName: "eius",
            SnsTopicArn: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.PutNotificationChannelXAmzTargetEnumAwsfms20180101PutNotificationChannel,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutPolicy

<p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>

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
    res, err := s.SDK.PutPolicy(ctx, operations.PutPolicyRequest{
        PutPolicyRequest: shared.PutPolicyRequest{
            Policy: shared.Policy{
                DeleteUnusedFMManagedResources: sdk.Bool(false),
                ExcludeMap: map[string][]string{
                    "provident": []string{
                        "repellendus",
                        "totam",
                    },
                    "similique": []string{
                        "at",
                    },
                    "quaerat": []string{
                        "vel",
                        "quod",
                    },
                },
                ExcludeResourceTags: false,
                IncludeMap: map[string][]string{
                    "qui": []string{
                        "a",
                        "esse",
                        "harum",
                    },
                    "iusto": []string{
                        "quisquam",
                    },
                    "tenetur": []string{
                        "tempore",
                    },
                    "accusamus": []string{
                        "enim",
                        "dolorem",
                    },
                },
                PolicyDescription: sdk.String("sapiente"),
                PolicyID: sdk.String("totam"),
                PolicyName: "nihil",
                PolicyStatus: shared.CustomerPolicyStatusEnumActive.ToPointer(),
                PolicyUpdateToken: sdk.String("expedita"),
                RemediationEnabled: false,
                ResourceSetIds: []string{
                    "sed",
                },
                ResourceTags: []shared.ResourceTag{
                    shared.ResourceTag{
                        Key: "libero",
                        Value: sdk.String("voluptas"),
                    },
                    shared.ResourceTag{
                        Key: "deserunt",
                        Value: sdk.String("quam"),
                    },
                },
                ResourceType: "ipsum",
                ResourceTypeList: []string{
                    "qui",
                    "cupiditate",
                },
                SecurityServicePolicyData: shared.SecurityServicePolicyData{
                    ManagedServiceData: sdk.String("maxime"),
                    PolicyOption: &shared.PolicyOption{
                        NetworkFirewallPolicy: &shared.NetworkFirewallPolicy{
                            FirewallDeploymentModel: shared.FirewallDeploymentModelEnumDistributed.ToPointer(),
                        },
                        ThirdPartyFirewallPolicy: &shared.ThirdPartyFirewallPolicy{
                            FirewallDeploymentModel: shared.FirewallDeploymentModelEnumDistributed.ToPointer(),
                        },
                    },
                    Type: shared.SecurityServiceTypeEnumWafv2,
                },
            },
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "totam",
                    Value: "incidunt",
                },
                shared.Tag{
                    Key: "aspernatur",
                    Value: "dolores",
                },
                shared.Tag{
                    Key: "distinctio",
                    Value: "facilis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.PutPolicyXAmzTargetEnumAwsfms20180101PutPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutPolicyResponse != nil {
        // handle response
    }
}
```

## PutProtocolsList

Creates an Firewall Manager protocols list.

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
    res, err := s.SDK.PutProtocolsList(ctx, operations.PutProtocolsListRequest{
        PutProtocolsListRequest: shared.PutProtocolsListRequest{
            ProtocolsList: shared.ProtocolsListData{
                CreateTime: types.MustTimeFromString("2022-07-06T20:37:36.497Z"),
                LastUpdateTime: types.MustTimeFromString("2022-08-24T04:49:56.144Z"),
                ListID: sdk.String("nam"),
                ListName: "hic",
                ListUpdateToken: sdk.String("voluptatem"),
                PreviousProtocolsList: map[string][]string{
                    "soluta": []string{
                        "et",
                        "saepe",
                        "ipsum",
                    },
                    "veritatis": []string{
                        "quos",
                        "tempore",
                        "cupiditate",
                    },
                    "aperiam": []string{
                        "dolorem",
                        "dolore",
                        "labore",
                        "adipisci",
                    },
                    "dolorum": []string{
                        "quae",
                    },
                },
                ProtocolsList: []string{
                    "quas",
                },
            },
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "consequatur",
                    Value: "est",
                },
                shared.Tag{
                    Key: "repellendus",
                    Value: "porro",
                },
                shared.Tag{
                    Key: "doloribus",
                    Value: "ut",
                },
                shared.Tag{
                    Key: "facilis",
                    Value: "cupiditate",
                },
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.PutProtocolsListXAmzTargetEnumAwsfms20180101PutProtocolsList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutProtocolsListResponse != nil {
        // handle response
    }
}
```

## PutResourceSet

<p>Creates the resource set.</p> <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>

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
    res, err := s.SDK.PutResourceSet(ctx, operations.PutResourceSetRequest{
        PutResourceSetRequest: shared.PutResourceSetRequest{
            ResourceSet: shared.ResourceSet{
                Description: sdk.String("vero"),
                ID: sdk.String("953f73ef-7fbc-47ab-974d-d39c0f5d2cff"),
                LastUpdateTime: types.MustTimeFromString("2022-03-31T22:43:48.703Z"),
                Name: "Linda Nikolaus",
                ResourceSetStatus: shared.ResourceSetStatusEnumActive.ToPointer(),
                ResourceTypeList: []string{
                    "vel",
                },
                UpdateToken: sdk.String("possimus"),
            },
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "ratione",
                    Value: "ex",
                },
                shared.Tag{
                    Key: "laudantium",
                    Value: "dicta",
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.PutResourceSetXAmzTargetEnumAwsfms20180101PutResourceSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourceSetResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds one or more tags to an Amazon Web Services resource.

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
            ResourceArn: "nostrum",
            TagList: []shared.Tag{
                shared.Tag{
                    Key: "quisquam",
                    Value: "saepe",
                },
                shared.Tag{
                    Key: "ea",
                    Value: "impedit",
                },
                shared.Tag{
                    Key: "corporis",
                    Value: "veniam",
                },
                shared.Tag{
                    Key: "aliquid",
                    Value: "inventore",
                },
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAwsfms20180101TagResource,
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

Removes one or more tags from an Amazon Web Services resource.

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
            ResourceArn: "eaque",
            TagKeys: []string{
                "libero",
                "aut",
                "aut",
                "deleniti",
            },
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAwsfms20180101UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```
