# SDK

## Overview

<p>WorkMail is a secure, managed business email and calendaring service with support for existing desktop and mobile email clients. You can access your email, contacts, and calendars using Microsoft Outlook, your browser, or other native iOS and Android email applications. You can integrate WorkMail with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored.</p> <p>The WorkMail API is designed for the following scenarios:</p> <ul> <li> <p>Listing and describing organizations</p> </li> </ul> <ul> <li> <p>Managing users</p> </li> </ul> <ul> <li> <p>Managing groups</p> </li> </ul> <ul> <li> <p>Managing resources</p> </li> </ul> <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the WorkMail site, the IAM user gains full administrative visibility into the entire WorkMail organization (or as set in the IAM policy). This includes, but is not limited to, the ability to create, update, and delete users, groups, and resources. This allows developers to perform the scenarios listed above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/workmail/>
### Available Operations

* [AssociateDelegateToResource](#associatedelegatetoresource) - Adds a member (user or group) to the resource's set of delegates.
* [AssociateMemberToGroup](#associatemembertogroup) - Adds a member (user or group) to the group's set.
* [AssumeImpersonationRole](#assumeimpersonationrole) - Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.
* [CancelMailboxExportJob](#cancelmailboxexportjob) - <p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>
* [CreateAlias](#createalias) - Adds an alias to the set of a given member (user or group) of WorkMail.
* [CreateAvailabilityConfiguration](#createavailabilityconfiguration) - Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* [CreateGroup](#creategroup) - Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* [CreateImpersonationRole](#createimpersonationrole) - <p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>
* [CreateMobileDeviceAccessRule](#createmobiledeviceaccessrule) - Creates a new mobile device access rule for the specified WorkMail organization.
* [CreateOrganization](#createorganization) - <p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>
* [CreateResource](#createresource) - Creates a new WorkMail resource.
* [CreateUser](#createuser) - Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* [DeleteAccessControlRule](#deleteaccesscontrolrule) - <p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* [DeleteAlias](#deletealias) - Remove one or more specified aliases from a set of aliases for a given user.
* [DeleteAvailabilityConfiguration](#deleteavailabilityconfiguration) - Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* [DeleteEmailMonitoringConfiguration](#deleteemailmonitoringconfiguration) - Deletes the email monitoring configuration for a specified organization.
* [DeleteGroup](#deletegroup) - Deletes a group from WorkMail.
* [DeleteImpersonationRole](#deleteimpersonationrole) - Deletes an impersonation role for the given WorkMail organization.
* [DeleteMailboxPermissions](#deletemailboxpermissions) - Deletes permissions granted to a member (user or group).
* [DeleteMobileDeviceAccessOverride](#deletemobiledeviceaccessoverride) - <p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* [DeleteMobileDeviceAccessRule](#deletemobiledeviceaccessrule) - <p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* [DeleteOrganization](#deleteorganization) - Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.
* [DeleteResource](#deleteresource) - Deletes the specified resource.
* [DeleteRetentionPolicy](#deleteretentionpolicy) - Deletes the specified retention policy from the specified organization.
* [DeleteUser](#deleteuser) - <p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
* [DeregisterFromWorkMail](#deregisterfromworkmail) - Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
* [DeregisterMailDomain](#deregistermaildomain) - Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.
* [DescribeEmailMonitoringConfiguration](#describeemailmonitoringconfiguration) - Describes the current email monitoring configuration for a specified organization.
* [DescribeGroup](#describegroup) - Returns the data available for the group.
* [DescribeInboundDmarcSettings](#describeinbounddmarcsettings) - Lists the settings in a DMARC policy for a specified organization.
* [DescribeMailboxExportJob](#describemailboxexportjob) - Describes the current status of a mailbox export job.
* [DescribeOrganization](#describeorganization) - Provides more information regarding a given organization based on its identifier.
* [DescribeResource](#describeresource) - Returns the data available for the resource.
* [DescribeUser](#describeuser) - Provides information regarding the user.
* [DisassociateDelegateFromResource](#disassociatedelegatefromresource) - Removes a member from the resource's set of delegates.
* [DisassociateMemberFromGroup](#disassociatememberfromgroup) - Removes a member from a group.
* [GetAccessControlEffect](#getaccesscontroleffect) - Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.
* [GetDefaultRetentionPolicy](#getdefaultretentionpolicy) - Gets the default retention policy details for the specified organization.
* [GetImpersonationRole](#getimpersonationrole) - Gets the impersonation role details for the given WorkMail organization.
* [GetImpersonationRoleEffect](#getimpersonationroleeffect) - Tests whether the given impersonation role can impersonate a target user.
* [GetMailDomain](#getmaildomain) - Gets details for a mail domain, including domain records required to configure your domain with recommended security.
* [GetMailboxDetails](#getmailboxdetails) - Requests a user's mailbox details for a specified organization and user.
* [GetMobileDeviceAccessEffect](#getmobiledeviceaccesseffect) - Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.
* [GetMobileDeviceAccessOverride](#getmobiledeviceaccessoverride) - Gets the mobile device access override for the given WorkMail organization, user, and device.
* [ListAccessControlRules](#listaccesscontrolrules) - Lists the access control rules for the specified organization.
* [ListAliases](#listaliases) - Creates a paginated call to list the aliases associated with a given entity.
* [ListAvailabilityConfigurations](#listavailabilityconfigurations) - List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.
* [ListGroupMembers](#listgroupmembers) - Returns an overview of the members of a group. Users and groups can be members of a group.
* [ListGroups](#listgroups) - Returns summaries of the organization's groups.
* [ListImpersonationRoles](#listimpersonationroles) - Lists all the impersonation roles for the given WorkMail organization.
* [ListMailDomains](#listmaildomains) - Lists the mail domains in a given WorkMail organization.
* [ListMailboxExportJobs](#listmailboxexportjobs) - Lists the mailbox export jobs started for the specified organization within the last seven days.
* [ListMailboxPermissions](#listmailboxpermissions) - Lists the mailbox permissions associated with a user, group, or resource mailbox.
* [ListMobileDeviceAccessOverrides](#listmobiledeviceaccessoverrides) - Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.
* [ListMobileDeviceAccessRules](#listmobiledeviceaccessrules) - Lists the mobile device access rules for the specified WorkMail organization.
* [ListOrganizations](#listorganizations) - Returns summaries of the customer's organizations.
* [ListResourceDelegates](#listresourcedelegates) - Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
* [ListResources](#listresources) - Returns summaries of the organization's resources.
* [ListTagsForResource](#listtagsforresource) - Lists the tags applied to an WorkMail organization resource.
* [ListUsers](#listusers) - Returns summaries of the organization's users.
* [PutAccessControlRule](#putaccesscontrolrule) - Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
* [PutEmailMonitoringConfiguration](#putemailmonitoringconfiguration) - Creates or updates the email monitoring configuration for a specified organization.
* [PutInboundDmarcSettings](#putinbounddmarcsettings) - Enables or disables a DMARC policy for a given organization.
* [PutMailboxPermissions](#putmailboxpermissions) - Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
* [PutMobileDeviceAccessOverride](#putmobiledeviceaccessoverride) - Creates or updates a mobile device access override for the given WorkMail organization, user, and device.
* [PutRetentionPolicy](#putretentionpolicy) - Puts a retention policy to the specified organization.
* [RegisterMailDomain](#registermaildomain) - Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.
* [RegisterToWorkMail](#registertoworkmail) - <p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
* [ResetPassword](#resetpassword) - Allows the administrator to reset the password for a user.
* [StartMailboxExportJob](#startmailboxexportjob) - Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.
* [TagResource](#tagresource) - Applies the specified tags to the specified WorkMailorganization resource.
* [TestAvailabilityConfiguration](#testavailabilityconfiguration) - <p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>
* [UntagResource](#untagresource) - Untags the specified tags from the specified WorkMail organization resource.
* [UpdateAvailabilityConfiguration](#updateavailabilityconfiguration) - Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* [UpdateDefaultMailDomain](#updatedefaultmaildomain) - Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.
* [UpdateImpersonationRole](#updateimpersonationrole) - Updates an impersonation role for the given WorkMail organization.
* [UpdateMailboxQuota](#updatemailboxquota) - Updates a user's current mailbox quota for a specified organization and user.
* [UpdateMobileDeviceAccessRule](#updatemobiledeviceaccessrule) - Updates a mobile device access rule for the specified WorkMail organization.
* [UpdatePrimaryEmailAddress](#updateprimaryemailaddress) - Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
* [UpdateResource](#updateresource) - Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.

## AssociateDelegateToResource

Adds a member (user or group) to the resource's set of delegates.

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
    res, err := s.SDK.AssociateDelegateToResource(ctx, operations.AssociateDelegateToResourceRequest{
        AssociateDelegateToResourceRequest: shared.AssociateDelegateToResourceRequest{
            EntityID: "deserunt",
            OrganizationID: "suscipit",
            ResourceID: "iure",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.AssociateDelegateToResourceXAmzTargetEnumWorkMailServiceAssociateDelegateToResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDelegateToResourceResponse != nil {
        // handle response
    }
}
```

## AssociateMemberToGroup

Adds a member (user or group) to the group's set.

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
    res, err := s.SDK.AssociateMemberToGroup(ctx, operations.AssociateMemberToGroupRequest{
        AssociateMemberToGroupRequest: shared.AssociateMemberToGroupRequest{
            GroupID: "minus",
            MemberID: "placeat",
            OrganizationID: "voluptatum",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.AssociateMemberToGroupXAmzTargetEnumWorkMailServiceAssociateMemberToGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateMemberToGroupResponse != nil {
        // handle response
    }
}
```

## AssumeImpersonationRole

Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.

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
    res, err := s.SDK.AssumeImpersonationRole(ctx, operations.AssumeImpersonationRoleRequest{
        AssumeImpersonationRoleRequest: shared.AssumeImpersonationRoleRequest{
            ImpersonationRoleID: "veritatis",
            OrganizationID: "deserunt",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.AssumeImpersonationRoleXAmzTargetEnumWorkMailServiceAssumeImpersonationRole,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssumeImpersonationRoleResponse != nil {
        // handle response
    }
}
```

## CancelMailboxExportJob

<p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>

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
    res, err := s.SDK.CancelMailboxExportJob(ctx, operations.CancelMailboxExportJobRequest{
        CancelMailboxExportJobRequest: shared.CancelMailboxExportJobRequest{
            ClientToken: "at",
            JobID: "maiores",
            OrganizationID: "molestiae",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.CancelMailboxExportJobXAmzTargetEnumWorkMailServiceCancelMailboxExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelMailboxExportJobResponse != nil {
        // handle response
    }
}
```

## CreateAlias

Adds an alias to the set of a given member (user or group) of WorkMail.

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
    res, err := s.SDK.CreateAlias(ctx, operations.CreateAliasRequest{
        CreateAliasRequest: shared.CreateAliasRequest{
            Alias: "nam",
            EntityID: "officia",
            OrganizationID: "occaecati",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.CreateAliasXAmzTargetEnumWorkMailServiceCreateAlias,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAliasResponse != nil {
        // handle response
    }
}
```

## CreateAvailabilityConfiguration

Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.

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
    res, err := s.SDK.CreateAvailabilityConfiguration(ctx, operations.CreateAvailabilityConfigurationRequest{
        CreateAvailabilityConfigurationRequest: shared.CreateAvailabilityConfigurationRequest{
            ClientToken: sdk.String("molestiae"),
            DomainName: "modi",
            EwsProvider: &shared.EwsAvailabilityProvider{
                EwsEndpoint: "qui",
                EwsPassword: "impedit",
                EwsUsername: "cum",
            },
            LambdaProvider: &shared.LambdaAvailabilityProvider{
                LambdaArn: "esse",
            },
            OrganizationID: "ipsum",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.CreateAvailabilityConfigurationXAmzTargetEnumWorkMailServiceCreateAvailabilityConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAvailabilityConfigurationResponse != nil {
        // handle response
    }
}
```

## CreateGroup

Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.

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
    res, err := s.SDK.CreateGroup(ctx, operations.CreateGroupRequest{
        CreateGroupRequest: shared.CreateGroupRequest{
            Name: "Faye Howe",
            OrganizationID: "fuga",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.CreateGroupXAmzTargetEnumWorkMailServiceCreateGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupResponse != nil {
        // handle response
    }
}
```

## CreateImpersonationRole

<p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>

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
    res, err := s.SDK.CreateImpersonationRole(ctx, operations.CreateImpersonationRoleRequest{
        CreateImpersonationRoleRequest: shared.CreateImpersonationRoleRequest{
            ClientToken: sdk.String("ipsa"),
            Description: sdk.String("reiciendis"),
            Name: "Shaun Osinski",
            OrganizationID: "corporis",
            Rules: []shared.ImpersonationRule{
                shared.ImpersonationRule{
                    Description: sdk.String("nobis"),
                    Effect: shared.AccessEffectEnumAllow,
                    ImpersonationRuleID: "omnis",
                    Name: sdk.String("Ms. Cathy Marks"),
                    NotTargetUsers: []string{
                        "sapiente",
                        "architecto",
                        "mollitia",
                        "dolorem",
                    },
                    TargetUsers: []string{
                        "consequuntur",
                        "repellat",
                        "mollitia",
                    },
                },
            },
            Type: shared.ImpersonationRoleTypeEnumReadOnly,
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("velit"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("quia"),
        XAmzTarget: operations.CreateImpersonationRoleXAmzTargetEnumWorkMailServiceCreateImpersonationRole,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateImpersonationRoleResponse != nil {
        // handle response
    }
}
```

## CreateMobileDeviceAccessRule

Creates a new mobile device access rule for the specified WorkMail organization.

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
    res, err := s.SDK.CreateMobileDeviceAccessRule(ctx, operations.CreateMobileDeviceAccessRuleRequest{
        CreateMobileDeviceAccessRuleRequest: shared.CreateMobileDeviceAccessRuleRequest{
            ClientToken: sdk.String("quis"),
            Description: sdk.String("vitae"),
            DeviceModels: []string{
                "animi",
                "enim",
                "odit",
            },
            DeviceOperatingSystems: []string{
                "sequi",
                "tenetur",
                "ipsam",
                "id",
            },
            DeviceTypes: []string{
                "aut",
                "quasi",
                "error",
                "temporibus",
            },
            DeviceUserAgents: []string{
                "quasi",
                "reiciendis",
                "voluptatibus",
            },
            Effect: shared.MobileDeviceAccessRuleEffectEnumDeny,
            Name: "Miss Irma Wolff",
            NotDeviceModels: []string{
                "perferendis",
                "doloremque",
                "reprehenderit",
            },
            NotDeviceOperatingSystems: []string{
                "maiores",
                "dicta",
            },
            NotDeviceTypes: []string{
                "dolore",
                "iusto",
            },
            NotDeviceUserAgents: []string{
                "harum",
            },
            OrganizationID: "enim",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.CreateMobileDeviceAccessRuleXAmzTargetEnumWorkMailServiceCreateMobileDeviceAccessRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMobileDeviceAccessRuleResponse != nil {
        // handle response
    }
}
```

## CreateOrganization

<p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>

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
    res, err := s.SDK.CreateOrganization(ctx, operations.CreateOrganizationRequest{
        CreateOrganizationRequest: shared.CreateOrganizationRequest{
            Alias: "excepturi",
            ClientToken: sdk.String("pariatur"),
            DirectoryID: sdk.String("modi"),
            Domains: []shared.Domain{
                shared.Domain{
                    DomainName: sdk.String("rem"),
                    HostedZoneID: sdk.String("voluptates"),
                },
                shared.Domain{
                    DomainName: sdk.String("quasi"),
                    HostedZoneID: sdk.String("repudiandae"),
                },
                shared.Domain{
                    DomainName: sdk.String("sint"),
                    HostedZoneID: sdk.String("veritatis"),
                },
            },
            EnableInteroperability: sdk.Bool(false),
            KmsKeyArn: sdk.String("itaque"),
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.CreateOrganizationXAmzTargetEnumWorkMailServiceCreateOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationResponse != nil {
        // handle response
    }
}
```

## CreateResource

Creates a new WorkMail resource.

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
    res, err := s.SDK.CreateResource(ctx, operations.CreateResourceRequest{
        CreateResourceRequest: shared.CreateResourceRequest{
            Name: "Marty Green",
            OrganizationID: "aliquid",
            Type: shared.ResourceTypeEnumEquipment,
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.CreateResourceXAmzTargetEnumWorkMailServiceCreateResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateResourceResponse != nil {
        // handle response
    }
}
```

## CreateUser

Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.

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
    res, err := s.SDK.CreateUser(ctx, operations.CreateUserRequest{
        CreateUserRequest: shared.CreateUserRequest{
            DisplayName: "dolorum",
            Name: "Eddie Prosacco",
            OrganizationID: "delectus",
            Password: "eum",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.CreateUserXAmzTargetEnumWorkMailServiceCreateUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserResponse != nil {
        // handle response
    }
}
```

## DeleteAccessControlRule

<p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>

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
    res, err := s.SDK.DeleteAccessControlRule(ctx, operations.DeleteAccessControlRuleRequest{
        DeleteAccessControlRuleRequest: shared.DeleteAccessControlRuleRequest{
            Name: "Curtis Toy",
            OrganizationID: "in",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.DeleteAccessControlRuleXAmzTargetEnumWorkMailServiceDeleteAccessControlRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAccessControlRuleResponse != nil {
        // handle response
    }
}
```

## DeleteAlias

Remove one or more specified aliases from a set of aliases for a given user.

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
    res, err := s.SDK.DeleteAlias(ctx, operations.DeleteAliasRequest{
        DeleteAliasRequest: shared.DeleteAliasRequest{
            Alias: "facere",
            EntityID: "ea",
            OrganizationID: "aliquid",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.DeleteAliasXAmzTargetEnumWorkMailServiceDeleteAlias,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAliasResponse != nil {
        // handle response
    }
}
```

## DeleteAvailabilityConfiguration

Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.

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
    res, err := s.SDK.DeleteAvailabilityConfiguration(ctx, operations.DeleteAvailabilityConfigurationRequest{
        DeleteAvailabilityConfigurationRequest: shared.DeleteAvailabilityConfigurationRequest{
            DomainName: "quidem",
            OrganizationID: "provident",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DeleteAvailabilityConfigurationXAmzTargetEnumWorkMailServiceDeleteAvailabilityConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAvailabilityConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteEmailMonitoringConfiguration

Deletes the email monitoring configuration for a specified organization.

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
    res, err := s.SDK.DeleteEmailMonitoringConfiguration(ctx, operations.DeleteEmailMonitoringConfigurationRequest{
        DeleteEmailMonitoringConfigurationRequest: shared.DeleteEmailMonitoringConfigurationRequest{
            OrganizationID: "nisi",
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.DeleteEmailMonitoringConfigurationXAmzTargetEnumWorkMailServiceDeleteEmailMonitoringConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEmailMonitoringConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteGroup

Deletes a group from WorkMail.

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
    res, err := s.SDK.DeleteGroup(ctx, operations.DeleteGroupRequest{
        DeleteGroupRequest: shared.DeleteGroupRequest{
            GroupID: "distinctio",
            OrganizationID: "id",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.DeleteGroupXAmzTargetEnumWorkMailServiceDeleteGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGroupResponse != nil {
        // handle response
    }
}
```

## DeleteImpersonationRole

Deletes an impersonation role for the given WorkMail organization.

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
    res, err := s.SDK.DeleteImpersonationRole(ctx, operations.DeleteImpersonationRoleRequest{
        DeleteImpersonationRoleRequest: shared.DeleteImpersonationRoleRequest{
            ImpersonationRoleID: "aspernatur",
            OrganizationID: "architecto",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.DeleteImpersonationRoleXAmzTargetEnumWorkMailServiceDeleteImpersonationRole,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteImpersonationRoleResponse != nil {
        // handle response
    }
}
```

## DeleteMailboxPermissions

Deletes permissions granted to a member (user or group).

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
    res, err := s.SDK.DeleteMailboxPermissions(ctx, operations.DeleteMailboxPermissionsRequest{
        DeleteMailboxPermissionsRequest: shared.DeleteMailboxPermissionsRequest{
            EntityID: "accusantium",
            GranteeID: "mollitia",
            OrganizationID: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.DeleteMailboxPermissionsXAmzTargetEnumWorkMailServiceDeleteMailboxPermissions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMailboxPermissionsResponse != nil {
        // handle response
    }
}
```

## DeleteMobileDeviceAccessOverride

<p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>

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
    res, err := s.SDK.DeleteMobileDeviceAccessOverride(ctx, operations.DeleteMobileDeviceAccessOverrideRequest{
        DeleteMobileDeviceAccessOverrideRequest: shared.DeleteMobileDeviceAccessOverrideRequest{
            DeviceID: "quasi",
            OrganizationID: "iure",
            UserID: "doloribus",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.DeleteMobileDeviceAccessOverrideXAmzTargetEnumWorkMailServiceDeleteMobileDeviceAccessOverride,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMobileDeviceAccessOverrideResponse != nil {
        // handle response
    }
}
```

## DeleteMobileDeviceAccessRule

<p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>

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
    res, err := s.SDK.DeleteMobileDeviceAccessRule(ctx, operations.DeleteMobileDeviceAccessRuleRequest{
        DeleteMobileDeviceAccessRuleRequest: shared.DeleteMobileDeviceAccessRuleRequest{
            MobileDeviceAccessRuleID: "architecto",
            OrganizationID: "repudiandae",
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("expedita"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.DeleteMobileDeviceAccessRuleXAmzTargetEnumWorkMailServiceDeleteMobileDeviceAccessRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteMobileDeviceAccessRuleResponse != nil {
        // handle response
    }
}
```

## DeleteOrganization

Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.

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
    res, err := s.SDK.DeleteOrganization(ctx, operations.DeleteOrganizationRequest{
        DeleteOrganizationRequest: shared.DeleteOrganizationRequest{
            ClientToken: sdk.String("pariatur"),
            DeleteDirectory: false,
            OrganizationID: "accusantium",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.DeleteOrganizationXAmzTargetEnumWorkMailServiceDeleteOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteOrganizationResponse != nil {
        // handle response
    }
}
```

## DeleteResource

Deletes the specified resource.

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
    res, err := s.SDK.DeleteResource(ctx, operations.DeleteResourceRequest{
        DeleteResourceRequest: shared.DeleteResourceRequest{
            OrganizationID: "pariatur",
            ResourceID: "maxime",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DeleteResourceXAmzTargetEnumWorkMailServiceDeleteResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourceResponse != nil {
        // handle response
    }
}
```

## DeleteRetentionPolicy

Deletes the specified retention policy from the specified organization.

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
    res, err := s.SDK.DeleteRetentionPolicy(ctx, operations.DeleteRetentionPolicyRequest{
        DeleteRetentionPolicyRequest: shared.DeleteRetentionPolicyRequest{
            ID: "b576b0d5-f0d3-40c5-bbb2-587053202c73",
            OrganizationID: "vero",
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.DeleteRetentionPolicyXAmzTargetEnumWorkMailServiceDeleteRetentionPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRetentionPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteUser

<p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>

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
    res, err := s.SDK.DeleteUser(ctx, operations.DeleteUserRequest{
        DeleteUserRequest: shared.DeleteUserRequest{
            OrganizationID: "porro",
            UserID: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DeleteUserXAmzTargetEnumWorkMailServiceDeleteUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteUserResponse != nil {
        // handle response
    }
}
```

## DeregisterFromWorkMail

Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.

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
    res, err := s.SDK.DeregisterFromWorkMail(ctx, operations.DeregisterFromWorkMailRequest{
        DeregisterFromWorkMailRequest: shared.DeregisterFromWorkMailRequest{
            EntityID: "earum",
            OrganizationID: "modi",
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.DeregisterFromWorkMailXAmzTargetEnumWorkMailServiceDeregisterFromWorkMail,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterFromWorkMailResponse != nil {
        // handle response
    }
}
```

## DeregisterMailDomain

Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.

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
    res, err := s.SDK.DeregisterMailDomain(ctx, operations.DeregisterMailDomainRequest{
        DeregisterMailDomainRequest: shared.DeregisterMailDomainRequest{
            DomainName: "delectus",
            OrganizationID: "quaerat",
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DeregisterMailDomainXAmzTargetEnumWorkMailServiceDeregisterMailDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterMailDomainResponse != nil {
        // handle response
    }
}
```

## DescribeEmailMonitoringConfiguration

Describes the current email monitoring configuration for a specified organization.

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
    res, err := s.SDK.DescribeEmailMonitoringConfiguration(ctx, operations.DescribeEmailMonitoringConfigurationRequest{
        DescribeEmailMonitoringConfigurationRequest: shared.DescribeEmailMonitoringConfigurationRequest{
            OrganizationID: "hic",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DescribeEmailMonitoringConfigurationXAmzTargetEnumWorkMailServiceDescribeEmailMonitoringConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEmailMonitoringConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeGroup

Returns the data available for the group.

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
    res, err := s.SDK.DescribeGroup(ctx, operations.DescribeGroupRequest{
        DescribeGroupRequest: shared.DescribeGroupRequest{
            GroupID: "numquam",
            OrganizationID: "veritatis",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.DescribeGroupXAmzTargetEnumWorkMailServiceDescribeGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeGroupResponse != nil {
        // handle response
    }
}
```

## DescribeInboundDmarcSettings

Lists the settings in a DMARC policy for a specified organization.

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
    res, err := s.SDK.DescribeInboundDmarcSettings(ctx, operations.DescribeInboundDmarcSettingsRequest{
        DescribeInboundDmarcSettingsRequest: shared.DescribeInboundDmarcSettingsRequest{
            OrganizationID: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.DescribeInboundDmarcSettingsXAmzTargetEnumWorkMailServiceDescribeInboundDmarcSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInboundDmarcSettingsResponse != nil {
        // handle response
    }
}
```

## DescribeMailboxExportJob

Describes the current status of a mailbox export job.

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
    res, err := s.SDK.DescribeMailboxExportJob(ctx, operations.DescribeMailboxExportJobRequest{
        DescribeMailboxExportJobRequest: shared.DescribeMailboxExportJobRequest{
            JobID: "soluta",
            OrganizationID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DescribeMailboxExportJobXAmzTargetEnumWorkMailServiceDescribeMailboxExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMailboxExportJobResponse != nil {
        // handle response
    }
}
```

## DescribeOrganization

Provides more information regarding a given organization based on its identifier.

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
    res, err := s.SDK.DescribeOrganization(ctx, operations.DescribeOrganizationRequest{
        DescribeOrganizationRequest: shared.DescribeOrganizationRequest{
            OrganizationID: "asperiores",
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("id"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.DescribeOrganizationXAmzTargetEnumWorkMailServiceDescribeOrganization,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeOrganizationResponse != nil {
        // handle response
    }
}
```

## DescribeResource

Returns the data available for the resource.

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
    res, err := s.SDK.DescribeResource(ctx, operations.DescribeResourceRequest{
        DescribeResourceRequest: shared.DescribeResourceRequest{
            OrganizationID: "perferendis",
            ResourceID: "amet",
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DescribeResourceXAmzTargetEnumWorkMailServiceDescribeResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeResourceResponse != nil {
        // handle response
    }
}
```

## DescribeUser

Provides information regarding the user.

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
    res, err := s.SDK.DescribeUser(ctx, operations.DescribeUserRequest{
        DescribeUserRequest: shared.DescribeUserRequest{
            OrganizationID: "minima",
            UserID: "repellendus",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.DescribeUserXAmzTargetEnumWorkMailServiceDescribeUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUserResponse != nil {
        // handle response
    }
}
```

## DisassociateDelegateFromResource

Removes a member from the resource's set of delegates.

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
    res, err := s.SDK.DisassociateDelegateFromResource(ctx, operations.DisassociateDelegateFromResourceRequest{
        DisassociateDelegateFromResourceRequest: shared.DisassociateDelegateFromResourceRequest{
            EntityID: "quod",
            OrganizationID: "officiis",
            ResourceID: "qui",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.DisassociateDelegateFromResourceXAmzTargetEnumWorkMailServiceDisassociateDelegateFromResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateDelegateFromResourceResponse != nil {
        // handle response
    }
}
```

## DisassociateMemberFromGroup

Removes a member from a group.

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
    res, err := s.SDK.DisassociateMemberFromGroup(ctx, operations.DisassociateMemberFromGroupRequest{
        DisassociateMemberFromGroupRequest: shared.DisassociateMemberFromGroupRequest{
            GroupID: "tenetur",
            MemberID: "amet",
            OrganizationID: "tempore",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.DisassociateMemberFromGroupXAmzTargetEnumWorkMailServiceDisassociateMemberFromGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateMemberFromGroupResponse != nil {
        // handle response
    }
}
```

## GetAccessControlEffect

Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.

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
    res, err := s.SDK.GetAccessControlEffect(ctx, operations.GetAccessControlEffectRequest{
        GetAccessControlEffectRequest: shared.GetAccessControlEffectRequest{
            Action: "sit",
            ImpersonationRoleID: sdk.String("expedita"),
            IPAddress: "neque",
            OrganizationID: "sed",
            UserID: sdk.String("vel"),
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.GetAccessControlEffectXAmzTargetEnumWorkMailServiceGetAccessControlEffect,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccessControlEffectResponse != nil {
        // handle response
    }
}
```

## GetDefaultRetentionPolicy

Gets the default retention policy details for the specified organization.

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
    res, err := s.SDK.GetDefaultRetentionPolicy(ctx, operations.GetDefaultRetentionPolicyRequest{
        GetDefaultRetentionPolicyRequest: shared.GetDefaultRetentionPolicyRequest{
            OrganizationID: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.GetDefaultRetentionPolicyXAmzTargetEnumWorkMailServiceGetDefaultRetentionPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDefaultRetentionPolicyResponse != nil {
        // handle response
    }
}
```

## GetImpersonationRole

Gets the impersonation role details for the given WorkMail organization.

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
    res, err := s.SDK.GetImpersonationRole(ctx, operations.GetImpersonationRoleRequest{
        GetImpersonationRoleRequest: shared.GetImpersonationRoleRequest{
            ImpersonationRoleID: "aspernatur",
            OrganizationID: "dolores",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.GetImpersonationRoleXAmzTargetEnumWorkMailServiceGetImpersonationRole,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImpersonationRoleResponse != nil {
        // handle response
    }
}
```

## GetImpersonationRoleEffect

Tests whether the given impersonation role can impersonate a target user.

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
    res, err := s.SDK.GetImpersonationRoleEffect(ctx, operations.GetImpersonationRoleEffectRequest{
        GetImpersonationRoleEffectRequest: shared.GetImpersonationRoleEffectRequest{
            ImpersonationRoleID: "neque",
            OrganizationID: "fugit",
            TargetUser: "magni",
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.GetImpersonationRoleEffectXAmzTargetEnumWorkMailServiceGetImpersonationRoleEffect,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImpersonationRoleEffectResponse != nil {
        // handle response
    }
}
```

## GetMailDomain

Gets details for a mail domain, including domain records required to configure your domain with recommended security.

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
    res, err := s.SDK.GetMailDomain(ctx, operations.GetMailDomainRequest{
        GetMailDomainRequest: shared.GetMailDomainRequest{
            DomainName: "soluta",
            OrganizationID: "nobis",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.GetMailDomainXAmzTargetEnumWorkMailServiceGetMailDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMailDomainResponse != nil {
        // handle response
    }
}
```

## GetMailboxDetails

Requests a user's mailbox details for a specified organization and user.

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
    res, err := s.SDK.GetMailboxDetails(ctx, operations.GetMailboxDetailsRequest{
        GetMailboxDetailsRequest: shared.GetMailboxDetailsRequest{
            OrganizationID: "cupiditate",
            UserID: "aperiam",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.GetMailboxDetailsXAmzTargetEnumWorkMailServiceGetMailboxDetails,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMailboxDetailsResponse != nil {
        // handle response
    }
}
```

## GetMobileDeviceAccessEffect

Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.

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
    res, err := s.SDK.GetMobileDeviceAccessEffect(ctx, operations.GetMobileDeviceAccessEffectRequest{
        GetMobileDeviceAccessEffectRequest: shared.GetMobileDeviceAccessEffectRequest{
            DeviceModel: sdk.String("quae"),
            DeviceOperatingSystem: sdk.String("aut"),
            DeviceType: sdk.String("quas"),
            DeviceUserAgent: sdk.String("itaque"),
            OrganizationID: "consequatur",
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.GetMobileDeviceAccessEffectXAmzTargetEnumWorkMailServiceGetMobileDeviceAccessEffect,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMobileDeviceAccessEffectResponse != nil {
        // handle response
    }
}
```

## GetMobileDeviceAccessOverride

Gets the mobile device access override for the given WorkMail organization, user, and device.

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
    res, err := s.SDK.GetMobileDeviceAccessOverride(ctx, operations.GetMobileDeviceAccessOverrideRequest{
        GetMobileDeviceAccessOverrideRequest: shared.GetMobileDeviceAccessOverrideRequest{
            DeviceID: "qui",
            OrganizationID: "quae",
            UserID: "laudantium",
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.GetMobileDeviceAccessOverrideXAmzTargetEnumWorkMailServiceGetMobileDeviceAccessOverride,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMobileDeviceAccessOverrideResponse != nil {
        // handle response
    }
}
```

## ListAccessControlRules

Lists the access control rules for the specified organization.

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
    res, err := s.SDK.ListAccessControlRules(ctx, operations.ListAccessControlRulesRequest{
        ListAccessControlRulesRequest: shared.ListAccessControlRulesRequest{
            OrganizationID: "ipsum",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.ListAccessControlRulesXAmzTargetEnumWorkMailServiceListAccessControlRules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccessControlRulesResponse != nil {
        // handle response
    }
}
```

## ListAliases

Creates a paginated call to list the aliases associated with a given entity.

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
    res, err := s.SDK.ListAliases(ctx, operations.ListAliasesRequest{
        ListAliasesRequest: shared.ListAliasesRequest{
            EntityID: "distinctio",
            MaxResults: sdk.Int64(799203),
            NextToken: sdk.String("odio"),
            OrganizationID: "similique",
        },
        MaxResults: sdk.String("facilis"),
        NextToken: sdk.String("vero"),
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.ListAliasesXAmzTargetEnumWorkMailServiceListAliases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAliasesResponse != nil {
        // handle response
    }
}
```

## ListAvailabilityConfigurations

List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.

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
    res, err := s.SDK.ListAvailabilityConfigurations(ctx, operations.ListAvailabilityConfigurationsRequest{
        ListAvailabilityConfigurationsRequest: shared.ListAvailabilityConfigurationsRequest{
            MaxResults: sdk.Int64(13236),
            NextToken: sdk.String("voluptatibus"),
            OrganizationID: "exercitationem",
        },
        MaxResults: sdk.String("nulla"),
        NextToken: sdk.String("fugit"),
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("iusto"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("alias"),
        XAmzTarget: operations.ListAvailabilityConfigurationsXAmzTargetEnumWorkMailServiceListAvailabilityConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailabilityConfigurationsResponse != nil {
        // handle response
    }
}
```

## ListGroupMembers

Returns an overview of the members of a group. Users and groups can be members of a group.

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
    res, err := s.SDK.ListGroupMembers(ctx, operations.ListGroupMembersRequest{
        ListGroupMembersRequest: shared.ListGroupMembersRequest{
            GroupID: "officia",
            MaxResults: sdk.Int64(269479),
            NextToken: sdk.String("ipsam"),
            OrganizationID: "ea",
        },
        MaxResults: sdk.String("aspernatur"),
        NextToken: sdk.String("vel"),
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.ListGroupMembersXAmzTargetEnumWorkMailServiceListGroupMembers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupMembersResponse != nil {
        // handle response
    }
}
```

## ListGroups

Returns summaries of the organization's groups.

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
    res, err := s.SDK.ListGroups(ctx, operations.ListGroupsRequest{
        ListGroupsRequest: shared.ListGroupsRequest{
            MaxResults: sdk.Int64(980700),
            NextToken: sdk.String("quasi"),
            OrganizationID: "ex",
        },
        MaxResults: sdk.String("nulla"),
        NextToken: sdk.String("excepturi"),
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.ListGroupsXAmzTargetEnumWorkMailServiceListGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupsResponse != nil {
        // handle response
    }
}
```

## ListImpersonationRoles

Lists all the impersonation roles for the given WorkMail organization.

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
    res, err := s.SDK.ListImpersonationRoles(ctx, operations.ListImpersonationRolesRequest{
        ListImpersonationRolesRequest: shared.ListImpersonationRolesRequest{
            MaxResults: sdk.Int64(359271),
            NextToken: sdk.String("veniam"),
            OrganizationID: "aliquid",
        },
        MaxResults: sdk.String("inventore"),
        NextToken: sdk.String("magnam"),
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.ListImpersonationRolesXAmzTargetEnumWorkMailServiceListImpersonationRoles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImpersonationRolesResponse != nil {
        // handle response
    }
}
```

## ListMailDomains

Lists the mail domains in a given WorkMail organization.

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
    res, err := s.SDK.ListMailDomains(ctx, operations.ListMailDomainsRequest{
        ListMailDomainsRequest: shared.ListMailDomainsRequest{
            MaxResults: sdk.Int64(952871),
            NextToken: sdk.String("libero"),
            OrganizationID: "aut",
        },
        MaxResults: sdk.String("aut"),
        NextToken: sdk.String("deleniti"),
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.ListMailDomainsXAmzTargetEnumWorkMailServiceListMailDomains,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMailDomainsResponse != nil {
        // handle response
    }
}
```

## ListMailboxExportJobs

Lists the mailbox export jobs started for the specified organization within the last seven days.

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
    res, err := s.SDK.ListMailboxExportJobs(ctx, operations.ListMailboxExportJobsRequest{
        ListMailboxExportJobsRequest: shared.ListMailboxExportJobsRequest{
            MaxResults: sdk.Int64(677412),
            NextToken: sdk.String("laborum"),
            OrganizationID: "placeat",
        },
        MaxResults: sdk.String("velit"),
        NextToken: sdk.String("eum"),
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.ListMailboxExportJobsXAmzTargetEnumWorkMailServiceListMailboxExportJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMailboxExportJobsResponse != nil {
        // handle response
    }
}
```

## ListMailboxPermissions

Lists the mailbox permissions associated with a user, group, or resource mailbox.

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
    res, err := s.SDK.ListMailboxPermissions(ctx, operations.ListMailboxPermissionsRequest{
        ListMailboxPermissionsRequest: shared.ListMailboxPermissionsRequest{
            EntityID: "quasi",
            MaxResults: sdk.Int64(270328),
            NextToken: sdk.String("numquam"),
            OrganizationID: "explicabo",
        },
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("ipsa"),
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.ListMailboxPermissionsXAmzTargetEnumWorkMailServiceListMailboxPermissions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMailboxPermissionsResponse != nil {
        // handle response
    }
}
```

## ListMobileDeviceAccessOverrides

Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.

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
    res, err := s.SDK.ListMobileDeviceAccessOverrides(ctx, operations.ListMobileDeviceAccessOverridesRequest{
        ListMobileDeviceAccessOverridesRequest: shared.ListMobileDeviceAccessOverridesRequest{
            DeviceID: sdk.String("fuga"),
            MaxResults: sdk.Int64(442015),
            NextToken: sdk.String("quidem"),
            OrganizationID: "fugiat",
            UserID: sdk.String("ut"),
        },
        MaxResults: sdk.String("eum"),
        NextToken: sdk.String("suscipit"),
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.ListMobileDeviceAccessOverridesXAmzTargetEnumWorkMailServiceListMobileDeviceAccessOverrides,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMobileDeviceAccessOverridesResponse != nil {
        // handle response
    }
}
```

## ListMobileDeviceAccessRules

Lists the mobile device access rules for the specified WorkMail organization.

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
    res, err := s.SDK.ListMobileDeviceAccessRules(ctx, operations.ListMobileDeviceAccessRulesRequest{
        ListMobileDeviceAccessRulesRequest: shared.ListMobileDeviceAccessRulesRequest{
            OrganizationID: "quidem",
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.ListMobileDeviceAccessRulesXAmzTargetEnumWorkMailServiceListMobileDeviceAccessRules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMobileDeviceAccessRulesResponse != nil {
        // handle response
    }
}
```

## ListOrganizations

Returns summaries of the customer's organizations.

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
    res, err := s.SDK.ListOrganizations(ctx, operations.ListOrganizationsRequest{
        ListOrganizationsRequest: shared.ListOrganizationsRequest{
            MaxResults: sdk.Int64(373813),
            NextToken: sdk.String("ab"),
        },
        MaxResults: sdk.String("cupiditate"),
        NextToken: sdk.String("consequatur"),
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.ListOrganizationsXAmzTargetEnumWorkMailServiceListOrganizations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOrganizationsResponse != nil {
        // handle response
    }
}
```

## ListResourceDelegates

Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.

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
    res, err := s.SDK.ListResourceDelegates(ctx, operations.ListResourceDelegatesRequest{
        ListResourceDelegatesRequest: shared.ListResourceDelegatesRequest{
            MaxResults: sdk.Int64(925164),
            NextToken: sdk.String("aperiam"),
            OrganizationID: "distinctio",
            ResourceID: "quod",
        },
        MaxResults: sdk.String("dignissimos"),
        NextToken: sdk.String("inventore"),
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzTarget: operations.ListResourceDelegatesXAmzTargetEnumWorkMailServiceListResourceDelegates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourceDelegatesResponse != nil {
        // handle response
    }
}
```

## ListResources

Returns summaries of the organization's resources.

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
    res, err := s.SDK.ListResources(ctx, operations.ListResourcesRequest{
        ListResourcesRequest: shared.ListResourcesRequest{
            MaxResults: sdk.Int64(959434),
            NextToken: sdk.String("dolores"),
            OrganizationID: "deserunt",
        },
        MaxResults: sdk.String("molestiae"),
        NextToken: sdk.String("accusantium"),
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.ListResourcesXAmzTargetEnumWorkMailServiceListResources,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourcesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags applied to an WorkMail organization resource.

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
            ResourceARN: "fuga",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumWorkMailServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListUsers

Returns summaries of the organization's users.

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
    res, err := s.SDK.ListUsers(ctx, operations.ListUsersRequest{
        ListUsersRequest: shared.ListUsersRequest{
            MaxResults: sdk.Int64(956406),
            NextToken: sdk.String("consequuntur"),
            OrganizationID: "ratione",
        },
        MaxResults: sdk.String("explicabo"),
        NextToken: sdk.String("saepe"),
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.ListUsersXAmzTargetEnumWorkMailServiceListUsers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsersResponse != nil {
        // handle response
    }
}
```

## PutAccessControlRule

Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.

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
    res, err := s.SDK.PutAccessControlRule(ctx, operations.PutAccessControlRuleRequest{
        PutAccessControlRuleRequest: shared.PutAccessControlRuleRequest{
            Actions: []string{
                "quod",
                "nam",
            },
            Description: "vero",
            Effect: shared.AccessControlRuleEffectEnumAllow,
            ImpersonationRoleIds: []string{
                "saepe",
            },
            IPRanges: []string{
                "harum",
                "molestiae",
            },
            Name: "Tracy Harber",
            NotActions: []string{
                "culpa",
            },
            NotImpersonationRoleIds: []string{
                "adipisci",
                "cumque",
                "consequuntur",
            },
            NotIPRanges: []string{
                "minus",
            },
            NotUserIds: []string{
                "sapiente",
                "consectetur",
            },
            OrganizationID: "esse",
            UserIds: []string{
                "provident",
                "a",
                "nulla",
            },
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.PutAccessControlRuleXAmzTargetEnumWorkMailServicePutAccessControlRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAccessControlRuleResponse != nil {
        // handle response
    }
}
```

## PutEmailMonitoringConfiguration

Creates or updates the email monitoring configuration for a specified organization.

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
    res, err := s.SDK.PutEmailMonitoringConfiguration(ctx, operations.PutEmailMonitoringConfigurationRequest{
        PutEmailMonitoringConfigurationRequest: shared.PutEmailMonitoringConfigurationRequest{
            LogGroupArn: "possimus",
            OrganizationID: "quia",
            RoleArn: "eveniet",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.PutEmailMonitoringConfigurationXAmzTargetEnumWorkMailServicePutEmailMonitoringConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutEmailMonitoringConfigurationResponse != nil {
        // handle response
    }
}
```

## PutInboundDmarcSettings

Enables or disables a DMARC policy for a given organization.

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
    res, err := s.SDK.PutInboundDmarcSettings(ctx, operations.PutInboundDmarcSettingsRequest{
        PutInboundDmarcSettingsRequest: shared.PutInboundDmarcSettingsRequest{
            Enforced: false,
            OrganizationID: "aliquid",
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.PutInboundDmarcSettingsXAmzTargetEnumWorkMailServicePutInboundDmarcSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutInboundDmarcSettingsResponse != nil {
        // handle response
    }
}
```

## PutMailboxPermissions

Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.

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
    res, err := s.SDK.PutMailboxPermissions(ctx, operations.PutMailboxPermissionsRequest{
        PutMailboxPermissionsRequest: shared.PutMailboxPermissionsRequest{
            EntityID: "illum",
            GranteeID: "soluta",
            OrganizationID: "accusantium",
            PermissionValues: []shared.PermissionTypeEnum{
                shared.PermissionTypeEnumSendOnBehalf,
                shared.PermissionTypeEnumFullAccess,
            },
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.PutMailboxPermissionsXAmzTargetEnumWorkMailServicePutMailboxPermissions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutMailboxPermissionsResponse != nil {
        // handle response
    }
}
```

## PutMobileDeviceAccessOverride

Creates or updates a mobile device access override for the given WorkMail organization, user, and device.

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
    res, err := s.SDK.PutMobileDeviceAccessOverride(ctx, operations.PutMobileDeviceAccessOverrideRequest{
        PutMobileDeviceAccessOverrideRequest: shared.PutMobileDeviceAccessOverrideRequest{
            Description: sdk.String("quibusdam"),
            DeviceID: "ex",
            Effect: shared.MobileDeviceAccessRuleEffectEnumDeny,
            OrganizationID: "itaque",
            UserID: "dolorum",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.PutMobileDeviceAccessOverrideXAmzTargetEnumWorkMailServicePutMobileDeviceAccessOverride,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutMobileDeviceAccessOverrideResponse != nil {
        // handle response
    }
}
```

## PutRetentionPolicy

Puts a retention policy to the specified organization.

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
    res, err := s.SDK.PutRetentionPolicy(ctx, operations.PutRetentionPolicyRequest{
        PutRetentionPolicyRequest: shared.PutRetentionPolicyRequest{
            Description: sdk.String("ipsa"),
            FolderConfigurations: []shared.FolderConfiguration{
                shared.FolderConfiguration{
                    Action: shared.RetentionActionEnumNone,
                    Name: shared.FolderNameEnumDeletedItems,
                    Period: sdk.Int64(237173),
                },
                shared.FolderConfiguration{
                    Action: shared.RetentionActionEnumDelete,
                    Name: shared.FolderNameEnumJunkEmail,
                    Period: sdk.Int64(33074),
                },
            },
            ID: sdk.String("8086a184-0394-4c26-871f-93f5f0642dac"),
            Name: "Blanche Yundt II",
            OrganizationID: "porro",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.PutRetentionPolicyXAmzTargetEnumWorkMailServicePutRetentionPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutRetentionPolicyResponse != nil {
        // handle response
    }
}
```

## RegisterMailDomain

Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.

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
    res, err := s.SDK.RegisterMailDomain(ctx, operations.RegisterMailDomainRequest{
        RegisterMailDomainRequest: shared.RegisterMailDomainRequest{
            ClientToken: sdk.String("velit"),
            DomainName: "culpa",
            OrganizationID: "est",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.RegisterMailDomainXAmzTargetEnumWorkMailServiceRegisterMailDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterMailDomainResponse != nil {
        // handle response
    }
}
```

## RegisterToWorkMail

<p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>

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
    res, err := s.SDK.RegisterToWorkMail(ctx, operations.RegisterToWorkMailRequest{
        RegisterToWorkMailRequest: shared.RegisterToWorkMailRequest{
            Email: "Remington.Quigley44@gmail.com",
            EntityID: "corporis",
            OrganizationID: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.RegisterToWorkMailXAmzTargetEnumWorkMailServiceRegisterToWorkMail,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterToWorkMailResponse != nil {
        // handle response
    }
}
```

## ResetPassword

Allows the administrator to reset the password for a user.

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
    res, err := s.SDK.ResetPassword(ctx, operations.ResetPasswordRequest{
        ResetPasswordRequest: shared.ResetPasswordRequest{
            OrganizationID: "in",
            Password: "exercitationem",
            UserID: "earum",
        },
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.ResetPasswordXAmzTargetEnumWorkMailServiceResetPassword,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResetPasswordResponse != nil {
        // handle response
    }
}
```

## StartMailboxExportJob

Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.

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
    res, err := s.SDK.StartMailboxExportJob(ctx, operations.StartMailboxExportJobRequest{
        StartMailboxExportJobRequest: shared.StartMailboxExportJobRequest{
            ClientToken: "necessitatibus",
            Description: sdk.String("dolore"),
            EntityID: "sunt",
            KmsKeyArn: "asperiores",
            OrganizationID: "adipisci",
            RoleArn: "non",
            S3BucketName: "amet",
            S3Prefix: "beatae",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.StartMailboxExportJobXAmzTargetEnumWorkMailServiceStartMailboxExportJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartMailboxExportJobResponse != nil {
        // handle response
    }
}
```

## TagResource

Applies the specified tags to the specified WorkMailorganization resource.

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
            ResourceARN: "ipsa",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "libero",
                    Value: "vitae",
                },
                shared.Tag{
                    Key: "accusamus",
                    Value: "similique",
                },
                shared.Tag{
                    Key: "tempora",
                    Value: "aspernatur",
                },
                shared.Tag{
                    Key: "voluptas",
                    Value: "voluptas",
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumWorkMailServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## TestAvailabilityConfiguration

<p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>

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
    res, err := s.SDK.TestAvailabilityConfiguration(ctx, operations.TestAvailabilityConfigurationRequest{
        TestAvailabilityConfigurationRequest: shared.TestAvailabilityConfigurationRequest{
            DomainName: sdk.String("blanditiis"),
            EwsProvider: &shared.EwsAvailabilityProvider{
                EwsEndpoint: "in",
                EwsPassword: "dolore",
                EwsUsername: "aliquam",
            },
            LambdaProvider: &shared.LambdaAvailabilityProvider{
                LambdaArn: "officiis",
            },
            OrganizationID: "temporibus",
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
        XAmzTarget: operations.TestAvailabilityConfigurationXAmzTargetEnumWorkMailServiceTestAvailabilityConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestAvailabilityConfigurationResponse != nil {
        // handle response
    }
}
```

## UntagResource

Untags the specified tags from the specified WorkMail organization resource.

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
            ResourceARN: "culpa",
            TagKeys: []string{
                "pariatur",
                "totam",
                "hic",
            },
        },
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumWorkMailServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAvailabilityConfiguration

Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.

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
    res, err := s.SDK.UpdateAvailabilityConfiguration(ctx, operations.UpdateAvailabilityConfigurationRequest{
        UpdateAvailabilityConfigurationRequest: shared.UpdateAvailabilityConfigurationRequest{
            DomainName: "asperiores",
            EwsProvider: &shared.EwsAvailabilityProvider{
                EwsEndpoint: "facilis",
                EwsPassword: "voluptate",
                EwsUsername: "expedita",
            },
            LambdaProvider: &shared.LambdaAvailabilityProvider{
                LambdaArn: "ab",
            },
            OrganizationID: "iste",
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.UpdateAvailabilityConfigurationXAmzTargetEnumWorkMailServiceUpdateAvailabilityConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAvailabilityConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateDefaultMailDomain

Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.

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
    res, err := s.SDK.UpdateDefaultMailDomain(ctx, operations.UpdateDefaultMailDomainRequest{
        UpdateDefaultMailDomainRequest: shared.UpdateDefaultMailDomainRequest{
            DomainName: "voluptas",
            OrganizationID: "unde",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.UpdateDefaultMailDomainXAmzTargetEnumWorkMailServiceUpdateDefaultMailDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDefaultMailDomainResponse != nil {
        // handle response
    }
}
```

## UpdateImpersonationRole

Updates an impersonation role for the given WorkMail organization.

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
    res, err := s.SDK.UpdateImpersonationRole(ctx, operations.UpdateImpersonationRoleRequest{
        UpdateImpersonationRoleRequest: shared.UpdateImpersonationRoleRequest{
            Description: sdk.String("corrupti"),
            ImpersonationRoleID: "maiores",
            Name: "Tammy Medhurst",
            OrganizationID: "ipsum",
            Rules: []shared.ImpersonationRule{
                shared.ImpersonationRule{
                    Description: sdk.String("occaecati"),
                    Effect: shared.AccessEffectEnumDeny,
                    ImpersonationRuleID: "voluptatibus",
                    Name: sdk.String("Rhonda Klocko"),
                    NotTargetUsers: []string{
                        "non",
                    },
                    TargetUsers: []string{
                        "praesentium",
                        "facilis",
                        "quaerat",
                        "incidunt",
                    },
                },
                shared.ImpersonationRule{
                    Description: sdk.String("ipsam"),
                    Effect: shared.AccessEffectEnumDeny,
                    ImpersonationRuleID: "rem",
                    Name: sdk.String("Della Muller"),
                    NotTargetUsers: []string{
                        "reiciendis",
                        "nulla",
                        "magni",
                        "aperiam",
                    },
                    TargetUsers: []string{
                        "numquam",
                        "veniam",
                        "in",
                        "officiis",
                    },
                },
            },
            Type: shared.ImpersonationRoleTypeEnumFullAccess,
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("laboriosam"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.UpdateImpersonationRoleXAmzTargetEnumWorkMailServiceUpdateImpersonationRole,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateImpersonationRoleResponse != nil {
        // handle response
    }
}
```

## UpdateMailboxQuota

Updates a user's current mailbox quota for a specified organization and user.

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
    res, err := s.SDK.UpdateMailboxQuota(ctx, operations.UpdateMailboxQuotaRequest{
        UpdateMailboxQuotaRequest: shared.UpdateMailboxQuotaRequest{
            MailboxQuota: 622385,
            OrganizationID: "hic",
            UserID: "expedita",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        XAmzTarget: operations.UpdateMailboxQuotaXAmzTargetEnumWorkMailServiceUpdateMailboxQuota,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMailboxQuotaResponse != nil {
        // handle response
    }
}
```

## UpdateMobileDeviceAccessRule

Updates a mobile device access rule for the specified WorkMail organization.

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
    res, err := s.SDK.UpdateMobileDeviceAccessRule(ctx, operations.UpdateMobileDeviceAccessRuleRequest{
        UpdateMobileDeviceAccessRuleRequest: shared.UpdateMobileDeviceAccessRuleRequest{
            Description: sdk.String("accusamus"),
            DeviceModels: []string{
                "atque",
                "fugit",
            },
            DeviceOperatingSystems: []string{
                "fugiat",
                "voluptatem",
            },
            DeviceTypes: []string{
                "expedita",
                "magnam",
                "consequatur",
            },
            DeviceUserAgents: []string{
                "ipsam",
                "sit",
            },
            Effect: shared.MobileDeviceAccessRuleEffectEnumDeny,
            MobileDeviceAccessRuleID: "quas",
            Name: "Zachary Borer",
            NotDeviceModels: []string{
                "sit",
            },
            NotDeviceOperatingSystems: []string{
                "nostrum",
                "saepe",
            },
            NotDeviceTypes: []string{
                "consequatur",
                "incidunt",
                "reiciendis",
            },
            NotDeviceUserAgents: []string{
                "harum",
            },
            OrganizationID: "dicta",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.UpdateMobileDeviceAccessRuleXAmzTargetEnumWorkMailServiceUpdateMobileDeviceAccessRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMobileDeviceAccessRuleResponse != nil {
        // handle response
    }
}
```

## UpdatePrimaryEmailAddress

Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.

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
    res, err := s.SDK.UpdatePrimaryEmailAddress(ctx, operations.UpdatePrimaryEmailAddressRequest{
        UpdatePrimaryEmailAddressRequest: shared.UpdatePrimaryEmailAddressRequest{
            Email: "Giles64@hotmail.com",
            EntityID: "voluptate",
            OrganizationID: "unde",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.UpdatePrimaryEmailAddressXAmzTargetEnumWorkMailServiceUpdatePrimaryEmailAddress,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePrimaryEmailAddressResponse != nil {
        // handle response
    }
}
```

## UpdateResource

Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.

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
    res, err := s.SDK.UpdateResource(ctx, operations.UpdateResourceRequest{
        UpdateResourceRequest: shared.UpdateResourceRequest{
            BookingOptions: &shared.BookingOptions{
                AutoAcceptRequests: sdk.Bool(false),
                AutoDeclineConflictingRequests: sdk.Bool(false),
                AutoDeclineRecurringRequests: sdk.Bool(false),
            },
            Name: sdk.String("Ron Schulist"),
            OrganizationID: "mollitia",
            ResourceID: "veniam",
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.UpdateResourceXAmzTargetEnumWorkMailServiceUpdateResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResourceResponse != nil {
        // handle response
    }
}
```
