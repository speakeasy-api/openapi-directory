# SDK

## Overview

<p>WorkMail is a secure, managed business email and calendaring service with support for existing desktop and mobile email clients. You can access your email, contacts, and calendars using Microsoft Outlook, your browser, or other native iOS and Android email applications. You can integrate WorkMail with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored.</p> <p>The WorkMail API is designed for the following scenarios:</p> <ul> <li> <p>Listing and describing organizations</p> </li> </ul> <ul> <li> <p>Managing users</p> </li> </ul> <ul> <li> <p>Managing groups</p> </li> </ul> <ul> <li> <p>Managing resources</p> </li> </ul> <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the WorkMail site, the IAM user gains full administrative visibility into the entire WorkMail organization (or as set in the IAM policy). This includes, but is not limited to, the ability to create, update, and delete users, groups, and resources. This allows developers to perform the scenarios listed above, as well as give users the ability to grant access on a selective basis using the IAM model.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/workmail/>
### Available Operations

* [associateDelegateToResource](#associatedelegatetoresource) - Adds a member (user or group) to the resource's set of delegates.
* [associateMemberToGroup](#associatemembertogroup) - Adds a member (user or group) to the group's set.
* [assumeImpersonationRole](#assumeimpersonationrole) - Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.
* [cancelMailboxExportJob](#cancelmailboxexportjob) - <p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>
* [createAlias](#createalias) - Adds an alias to the set of a given member (user or group) of WorkMail.
* [createAvailabilityConfiguration](#createavailabilityconfiguration) - Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* [createGroup](#creategroup) - Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* [createImpersonationRole](#createimpersonationrole) - <p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>
* [createMobileDeviceAccessRule](#createmobiledeviceaccessrule) - Creates a new mobile device access rule for the specified WorkMail organization.
* [createOrganization](#createorganization) - <p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>
* [createResource](#createresource) - Creates a new WorkMail resource.
* [createUser](#createuser) - Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.
* [deleteAccessControlRule](#deleteaccesscontrolrule) - <p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* [deleteAlias](#deletealias) - Remove one or more specified aliases from a set of aliases for a given user.
* [deleteAvailabilityConfiguration](#deleteavailabilityconfiguration) - Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* [deleteEmailMonitoringConfiguration](#deleteemailmonitoringconfiguration) - Deletes the email monitoring configuration for a specified organization.
* [deleteGroup](#deletegroup) - Deletes a group from WorkMail.
* [deleteImpersonationRole](#deleteimpersonationrole) - Deletes an impersonation role for the given WorkMail organization.
* [deleteMailboxPermissions](#deletemailboxpermissions) - Deletes permissions granted to a member (user or group).
* [deleteMobileDeviceAccessOverride](#deletemobiledeviceaccessoverride) - <p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* [deleteMobileDeviceAccessRule](#deletemobiledeviceaccessrule) - <p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>
* [deleteOrganization](#deleteorganization) - Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.
* [deleteResource](#deleteresource) - Deletes the specified resource.
* [deleteRetentionPolicy](#deleteretentionpolicy) - Deletes the specified retention policy from the specified organization.
* [deleteUser](#deleteuser) - <p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
* [deregisterFromWorkMail](#deregisterfromworkmail) - Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
* [deregisterMailDomain](#deregistermaildomain) - Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.
* [describeEmailMonitoringConfiguration](#describeemailmonitoringconfiguration) - Describes the current email monitoring configuration for a specified organization.
* [describeGroup](#describegroup) - Returns the data available for the group.
* [describeInboundDmarcSettings](#describeinbounddmarcsettings) - Lists the settings in a DMARC policy for a specified organization.
* [describeMailboxExportJob](#describemailboxexportjob) - Describes the current status of a mailbox export job.
* [describeOrganization](#describeorganization) - Provides more information regarding a given organization based on its identifier.
* [describeResource](#describeresource) - Returns the data available for the resource.
* [describeUser](#describeuser) - Provides information regarding the user.
* [disassociateDelegateFromResource](#disassociatedelegatefromresource) - Removes a member from the resource's set of delegates.
* [disassociateMemberFromGroup](#disassociatememberfromgroup) - Removes a member from a group.
* [getAccessControlEffect](#getaccesscontroleffect) - Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.
* [getDefaultRetentionPolicy](#getdefaultretentionpolicy) - Gets the default retention policy details for the specified organization.
* [getImpersonationRole](#getimpersonationrole) - Gets the impersonation role details for the given WorkMail organization.
* [getImpersonationRoleEffect](#getimpersonationroleeffect) - Tests whether the given impersonation role can impersonate a target user.
* [getMailDomain](#getmaildomain) - Gets details for a mail domain, including domain records required to configure your domain with recommended security.
* [getMailboxDetails](#getmailboxdetails) - Requests a user's mailbox details for a specified organization and user.
* [getMobileDeviceAccessEffect](#getmobiledeviceaccesseffect) - Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.
* [getMobileDeviceAccessOverride](#getmobiledeviceaccessoverride) - Gets the mobile device access override for the given WorkMail organization, user, and device.
* [listAccessControlRules](#listaccesscontrolrules) - Lists the access control rules for the specified organization.
* [listAliases](#listaliases) - Creates a paginated call to list the aliases associated with a given entity.
* [listAvailabilityConfigurations](#listavailabilityconfigurations) - List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.
* [listGroupMembers](#listgroupmembers) - Returns an overview of the members of a group. Users and groups can be members of a group.
* [listGroups](#listgroups) - Returns summaries of the organization's groups.
* [listImpersonationRoles](#listimpersonationroles) - Lists all the impersonation roles for the given WorkMail organization.
* [listMailDomains](#listmaildomains) - Lists the mail domains in a given WorkMail organization.
* [listMailboxExportJobs](#listmailboxexportjobs) - Lists the mailbox export jobs started for the specified organization within the last seven days.
* [listMailboxPermissions](#listmailboxpermissions) - Lists the mailbox permissions associated with a user, group, or resource mailbox.
* [listMobileDeviceAccessOverrides](#listmobiledeviceaccessoverrides) - Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.
* [listMobileDeviceAccessRules](#listmobiledeviceaccessrules) - Lists the mobile device access rules for the specified WorkMail organization.
* [listOrganizations](#listorganizations) - Returns summaries of the customer's organizations.
* [listResourceDelegates](#listresourcedelegates) - Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
* [listResources](#listresources) - Returns summaries of the organization's resources.
* [listTagsForResource](#listtagsforresource) - Lists the tags applied to an WorkMail organization resource.
* [listUsers](#listusers) - Returns summaries of the organization's users.
* [putAccessControlRule](#putaccesscontrolrule) - Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
* [putEmailMonitoringConfiguration](#putemailmonitoringconfiguration) - Creates or updates the email monitoring configuration for a specified organization.
* [putInboundDmarcSettings](#putinbounddmarcsettings) - Enables or disables a DMARC policy for a given organization.
* [putMailboxPermissions](#putmailboxpermissions) - Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
* [putMobileDeviceAccessOverride](#putmobiledeviceaccessoverride) - Creates or updates a mobile device access override for the given WorkMail organization, user, and device.
* [putRetentionPolicy](#putretentionpolicy) - Puts a retention policy to the specified organization.
* [registerMailDomain](#registermaildomain) - Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.
* [registerToWorkMail](#registertoworkmail) - <p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
* [resetPassword](#resetpassword) - Allows the administrator to reset the password for a user.
* [startMailboxExportJob](#startmailboxexportjob) - Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.
* [tagResource](#tagresource) - Applies the specified tags to the specified WorkMailorganization resource.
* [testAvailabilityConfiguration](#testavailabilityconfiguration) - <p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>
* [untagResource](#untagresource) - Untags the specified tags from the specified WorkMail organization resource.
* [updateAvailabilityConfiguration](#updateavailabilityconfiguration) - Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.
* [updateDefaultMailDomain](#updatedefaultmaildomain) - Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.
* [updateImpersonationRole](#updateimpersonationrole) - Updates an impersonation role for the given WorkMail organization.
* [updateMailboxQuota](#updatemailboxquota) - Updates a user's current mailbox quota for a specified organization and user.
* [updateMobileDeviceAccessRule](#updatemobiledeviceaccessrule) - Updates a mobile device access rule for the specified WorkMail organization.
* [updatePrimaryEmailAddress](#updateprimaryemailaddress) - Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
* [updateResource](#updateresource) - Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.

## associateDelegateToResource

Adds a member (user or group) to the resource's set of delegates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceRequest;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceResponse;
import org.openapis.openapi.models.operations.AssociateDelegateToResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateDelegateToResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateDelegateToResourceRequest req = new AssociateDelegateToResourceRequest(                new AssociateDelegateToResourceRequest("iure", "magnam", "debitis");, AssociateDelegateToResourceXAmzTargetEnum.WORK_MAIL_SERVICE_ASSOCIATE_DELEGATE_TO_RESOURCE) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            AssociateDelegateToResourceResponse res = sdk.sdk.associateDelegateToResource(req);

            if (res.associateDelegateToResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateMemberToGroup

Adds a member (user or group) to the group's set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateMemberToGroupRequest;
import org.openapis.openapi.models.operations.AssociateMemberToGroupResponse;
import org.openapis.openapi.models.operations.AssociateMemberToGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateMemberToGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateMemberToGroupRequest req = new AssociateMemberToGroupRequest(                new AssociateMemberToGroupRequest("iusto", "excepturi", "nisi");, AssociateMemberToGroupXAmzTargetEnum.WORK_MAIL_SERVICE_ASSOCIATE_MEMBER_TO_GROUP) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ab";
                xAmzDate = "quis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "perferendis";
            }};            

            AssociateMemberToGroupResponse res = sdk.sdk.associateMemberToGroup(req);

            if (res.associateMemberToGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## assumeImpersonationRole

Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssumeImpersonationRoleRequest;
import org.openapis.openapi.models.operations.AssumeImpersonationRoleResponse;
import org.openapis.openapi.models.operations.AssumeImpersonationRoleXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssumeImpersonationRoleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssumeImpersonationRoleRequest req = new AssumeImpersonationRoleRequest(                new AssumeImpersonationRoleRequest("repellendus", "sapiente");, AssumeImpersonationRoleXAmzTargetEnum.WORK_MAIL_SERVICE_ASSUME_IMPERSONATION_ROLE) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            AssumeImpersonationRoleResponse res = sdk.sdk.assumeImpersonationRole(req);

            if (res.assumeImpersonationRoleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelMailboxExportJob

<p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelMailboxExportJobRequest;
import org.openapis.openapi.models.operations.CancelMailboxExportJobResponse;
import org.openapis.openapi.models.operations.CancelMailboxExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelMailboxExportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelMailboxExportJobRequest req = new CancelMailboxExportJobRequest(                new CancelMailboxExportJobRequest("esse", "totam", "porro");, CancelMailboxExportJobXAmzTargetEnum.WORK_MAIL_SERVICE_CANCEL_MAILBOX_EXPORT_JOB) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "nam";
                xAmzDate = "officia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "deleniti";
            }};            

            CancelMailboxExportJobResponse res = sdk.sdk.cancelMailboxExportJob(req);

            if (res.cancelMailboxExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAlias

Adds an alias to the set of a given member (user or group) of WorkMail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAliasRequest;
import org.openapis.openapi.models.operations.CreateAliasResponse;
import org.openapis.openapi.models.operations.CreateAliasXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAliasRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAliasRequest req = new CreateAliasRequest(                new CreateAliasRequest("optio", "totam", "beatae");, CreateAliasXAmzTargetEnum.WORK_MAIL_SERVICE_CREATE_ALIAS) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "esse";
            }};            

            CreateAliasResponse res = sdk.sdk.createAlias(req);

            if (res.createAliasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAvailabilityConfiguration

Creates an <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAvailabilityConfigurationRequest;
import org.openapis.openapi.models.operations.CreateAvailabilityConfigurationResponse;
import org.openapis.openapi.models.operations.CreateAvailabilityConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAvailabilityConfigurationRequest;
import org.openapis.openapi.models.shared.EwsAvailabilityProvider;
import org.openapis.openapi.models.shared.LambdaAvailabilityProvider;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAvailabilityConfigurationRequest req = new CreateAvailabilityConfigurationRequest(                new CreateAvailabilityConfigurationRequest("excepturi", "aspernatur") {{
                                clientToken = "perferendis";
                                ewsProvider = new EwsAvailabilityProvider("ad", "natus", "sed");;
                                lambdaProvider = new LambdaAvailabilityProvider("iste");;
                            }};, CreateAvailabilityConfigurationXAmzTargetEnum.WORK_MAIL_SERVICE_CREATE_AVAILABILITY_CONFIGURATION) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            CreateAvailabilityConfigurationResponse res = sdk.sdk.createAvailabilityConfiguration(req);

            if (res.createAvailabilityConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createGroup

Creates a group that can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupRequest;
import org.openapis.openapi.models.operations.CreateGroupResponse;
import org.openapis.openapi.models.operations.CreateGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGroupRequest req = new CreateGroupRequest(                new CreateGroupRequest("iste", "iure");, CreateGroupXAmzTargetEnum.WORK_MAIL_SERVICE_CREATE_GROUP) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "architecto";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "est";
                xAmzSignedHeaders = "mollitia";
            }};            

            CreateGroupResponse res = sdk.sdk.createGroup(req);

            if (res.createGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createImpersonationRole

<p>Creates an impersonation role for the given WorkMail organization.</p> <p> <i>Idempotency</i> ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateImpersonationRoleRequest;
import org.openapis.openapi.models.operations.CreateImpersonationRoleResponse;
import org.openapis.openapi.models.operations.CreateImpersonationRoleXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessEffectEnum;
import org.openapis.openapi.models.shared.CreateImpersonationRoleRequest;
import org.openapis.openapi.models.shared.ImpersonationRoleTypeEnum;
import org.openapis.openapi.models.shared.ImpersonationRule;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateImpersonationRoleRequest req = new CreateImpersonationRoleRequest(                new CreateImpersonationRoleRequest("dolores", "dolorem",                 new org.openapis.openapi.models.shared.ImpersonationRule[]{{
                                                add(new ImpersonationRule(AccessEffectEnum.DENY, "mollitia") {{
                                                    description = "explicabo";
                                                    effect = AccessEffectEnum.DENY;
                                                    impersonationRuleId = "enim";
                                                    name = "Corey Hane III";
                                                    notTargetUsers = new String[]{{
                                                        add("doloribus"),
                                                        add("sapiente"),
                                                        add("architecto"),
                                                    }};
                                                    targetUsers = new String[]{{
                                                        add("dolorem"),
                                                        add("culpa"),
                                                        add("consequuntur"),
                                                    }};
                                                }}),
                                                add(new ImpersonationRule(AccessEffectEnum.ALLOW, "tenetur") {{
                                                    description = "occaecati";
                                                    effect = AccessEffectEnum.ALLOW;
                                                    impersonationRuleId = "commodi";
                                                    name = "Nellie Frami";
                                                    notTargetUsers = new String[]{{
                                                        add("vitae"),
                                                        add("laborum"),
                                                    }};
                                                    targetUsers = new String[]{{
                                                        add("enim"),
                                                        add("odit"),
                                                        add("quo"),
                                                    }};
                                                }}),
                                            }}, ImpersonationRoleTypeEnum.FULL_ACCESS) {{
                                clientToken = "id";
                                description = "possimus";
                            }};, CreateImpersonationRoleXAmzTargetEnum.WORK_MAIL_SERVICE_CREATE_IMPERSONATION_ROLE) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "error";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "reiciendis";
            }};            

            CreateImpersonationRoleResponse res = sdk.sdk.createImpersonationRole(req);

            if (res.createImpersonationRoleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMobileDeviceAccessRule

Creates a new mobile device access rule for the specified WorkMail organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMobileDeviceAccessRuleRequest;
import org.openapis.openapi.models.operations.CreateMobileDeviceAccessRuleResponse;
import org.openapis.openapi.models.operations.CreateMobileDeviceAccessRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateMobileDeviceAccessRuleRequest;
import org.openapis.openapi.models.shared.MobileDeviceAccessRuleEffectEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMobileDeviceAccessRuleRequest req = new CreateMobileDeviceAccessRuleRequest(                new CreateMobileDeviceAccessRuleRequest(MobileDeviceAccessRuleEffectEnum.DENY, "nihil", "praesentium") {{
                                clientToken = "voluptatibus";
                                description = "ipsa";
                                deviceModels = new String[]{{
                                    add("voluptate"),
                                    add("cum"),
                                    add("perferendis"),
                                }};
                                deviceOperatingSystems = new String[]{{
                                    add("reprehenderit"),
                                }};
                                deviceTypes = new String[]{{
                                    add("maiores"),
                                    add("dicta"),
                                }};
                                deviceUserAgents = new String[]{{
                                    add("dolore"),
                                    add("iusto"),
                                }};
                                notDeviceModels = new String[]{{
                                    add("harum"),
                                }};
                                notDeviceOperatingSystems = new String[]{{
                                    add("accusamus"),
                                    add("commodi"),
                                }};
                                notDeviceTypes = new String[]{{
                                    add("quae"),
                                    add("ipsum"),
                                    add("quidem"),
                                    add("molestias"),
                                }};
                                notDeviceUserAgents = new String[]{{
                                    add("pariatur"),
                                    add("modi"),
                                    add("praesentium"),
                                }};
                            }};, CreateMobileDeviceAccessRuleXAmzTargetEnum.WORK_MAIL_SERVICE_CREATE_MOBILE_DEVICE_ACCESS_RULE) {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "quasi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "sint";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "itaque";
            }};            

            CreateMobileDeviceAccessRuleResponse res = sdk.sdk.createMobileDeviceAccessRule(req);

            if (res.createMobileDeviceAccessRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganization

<p>Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationRequest;
import org.openapis.openapi.models.operations.CreateOrganizationResponse;
import org.openapis.openapi.models.operations.CreateOrganizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateOrganizationRequest;
import org.openapis.openapi.models.shared.Domain;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationRequest req = new CreateOrganizationRequest(                new CreateOrganizationRequest("enim") {{
                                clientToken = "consequatur";
                                directoryId = "est";
                                domains = new org.openapis.openapi.models.shared.Domain[]{{
                                    add(new Domain() {{
                                        domainName = "explicabo";
                                        hostedZoneId = "deserunt";
                                    }}),
                                    add(new Domain() {{
                                        domainName = "distinctio";
                                        hostedZoneId = "quibusdam";
                                    }}),
                                    add(new Domain() {{
                                        domainName = "labore";
                                        hostedZoneId = "modi";
                                    }}),
                                    add(new Domain() {{
                                        domainName = "qui";
                                        hostedZoneId = "aliquid";
                                    }}),
                                }};
                                enableInteroperability = false;
                                kmsKeyArn = "cupiditate";
                            }};, CreateOrganizationXAmzTargetEnum.WORK_MAIL_SERVICE_CREATE_ORGANIZATION) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "magni";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "fugit";
            }};            

            CreateOrganizationResponse res = sdk.sdk.createOrganization(req);

            if (res.createOrganizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResource

Creates a new WorkMail resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResourceRequest;
import org.openapis.openapi.models.operations.CreateResourceResponse;
import org.openapis.openapi.models.operations.CreateResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateResourceRequest;
import org.openapis.openapi.models.shared.ResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResourceRequest req = new CreateResourceRequest(                new CreateResourceRequest("excepturi", "tempora", ResourceTypeEnum.EQUIPMENT);, CreateResourceXAmzTargetEnum.WORK_MAIL_SERVICE_CREATE_RESOURCE) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "delectus";
                xAmzDate = "eum";
                xAmzSecurityToken = "non";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "sint";
            }};            

            CreateResourceResponse res = sdk.sdk.createResource(req);

            if (res.createResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUser

Creates a user who can be used in WorkMail by calling the <a>RegisterToWorkMail</a> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserRequest;
import org.openapis.openapi.models.operations.CreateUserResponse;
import org.openapis.openapi.models.operations.CreateUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserRequest req = new CreateUserRequest(                new CreateUserRequest("provident", "necessitatibus", "sint", "officia");, CreateUserXAmzTargetEnum.WORK_MAIL_SERVICE_CREATE_USER) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
            }};            

            CreateUserResponse res = sdk.sdk.createUser(req);

            if (res.createUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccessControlRule

<p>Deletes an access control rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccessControlRuleRequest;
import org.openapis.openapi.models.operations.DeleteAccessControlRuleResponse;
import org.openapis.openapi.models.operations.DeleteAccessControlRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAccessControlRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccessControlRuleRequest req = new DeleteAccessControlRuleRequest(                new DeleteAccessControlRuleRequest("rerum", "dicta");, DeleteAccessControlRuleXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_ACCESS_CONTROL_RULE) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "accusamus";
            }};            

            DeleteAccessControlRuleResponse res = sdk.sdk.deleteAccessControlRule(req);

            if (res.deleteAccessControlRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAlias

Remove one or more specified aliases from a set of aliases for a given user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAliasRequest;
import org.openapis.openapi.models.operations.DeleteAliasResponse;
import org.openapis.openapi.models.operations.DeleteAliasXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAliasRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAliasRequest req = new DeleteAliasRequest(                new DeleteAliasRequest("occaecati", "enim", "accusamus");, DeleteAliasXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_ALIAS) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "provident";
                xAmzDate = "nam";
                xAmzSecurityToken = "id";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "deleniti";
            }};            

            DeleteAliasResponse res = sdk.sdk.deleteAlias(req);

            if (res.deleteAliasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAvailabilityConfiguration

Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAvailabilityConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteAvailabilityConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteAvailabilityConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAvailabilityConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAvailabilityConfigurationRequest req = new DeleteAvailabilityConfigurationRequest(                new DeleteAvailabilityConfigurationRequest("amet", "deserunt");, DeleteAvailabilityConfigurationXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_AVAILABILITY_CONFIGURATION) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "vel";
                xAmzCredential = "natus";
                xAmzDate = "omnis";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "nihil";
            }};            

            DeleteAvailabilityConfigurationResponse res = sdk.sdk.deleteAvailabilityConfiguration(req);

            if (res.deleteAvailabilityConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEmailMonitoringConfiguration

Deletes the email monitoring configuration for a specified organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEmailMonitoringConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteEmailMonitoringConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteEmailMonitoringConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEmailMonitoringConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEmailMonitoringConfigurationRequest req = new DeleteEmailMonitoringConfigurationRequest(                new DeleteEmailMonitoringConfigurationRequest("distinctio");, DeleteEmailMonitoringConfigurationXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_EMAIL_MONITORING_CONFIGURATION) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "labore";
                xAmzCredential = "labore";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "natus";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "eum";
            }};            

            DeleteEmailMonitoringConfigurationResponse res = sdk.sdk.deleteEmailMonitoringConfiguration(req);

            if (res.deleteEmailMonitoringConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGroup

Deletes a group from WorkMail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupRequest;
import org.openapis.openapi.models.operations.DeleteGroupResponse;
import org.openapis.openapi.models.operations.DeleteGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteGroupRequest req = new DeleteGroupRequest(                new DeleteGroupRequest("aspernatur", "architecto");, DeleteGroupXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_GROUP) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "et";
                xAmzCredential = "excepturi";
                xAmzDate = "ullam";
                xAmzSecurityToken = "provident";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "sint";
            }};            

            DeleteGroupResponse res = sdk.sdk.deleteGroup(req);

            if (res.deleteGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteImpersonationRole

Deletes an impersonation role for the given WorkMail organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteImpersonationRoleRequest;
import org.openapis.openapi.models.operations.DeleteImpersonationRoleResponse;
import org.openapis.openapi.models.operations.DeleteImpersonationRoleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteImpersonationRoleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteImpersonationRoleRequest req = new DeleteImpersonationRoleRequest(                new DeleteImpersonationRoleRequest("mollitia", "reiciendis");, DeleteImpersonationRoleXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_IMPERSONATION_ROLE) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ad";
                xAmzCredential = "eum";
                xAmzDate = "dolor";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "nemo";
            }};            

            DeleteImpersonationRoleResponse res = sdk.sdk.deleteImpersonationRole(req);

            if (res.deleteImpersonationRoleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMailboxPermissions

Deletes permissions granted to a member (user or group).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMailboxPermissionsRequest;
import org.openapis.openapi.models.operations.DeleteMailboxPermissionsResponse;
import org.openapis.openapi.models.operations.DeleteMailboxPermissionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMailboxPermissionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMailboxPermissionsRequest req = new DeleteMailboxPermissionsRequest(                new DeleteMailboxPermissionsRequest("iure", "doloribus", "debitis");, DeleteMailboxPermissionsXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_MAILBOX_PERMISSIONS) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "deleniti";
                xAmzDate = "facilis";
                xAmzSecurityToken = "in";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "architecto";
            }};            

            DeleteMailboxPermissionsResponse res = sdk.sdk.deleteMailboxPermissions(req);

            if (res.deleteMailboxPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMobileDeviceAccessOverride

<p>Deletes the mobile device access override for the given WorkMail organization, user, and device.</p> <note> <p>Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMobileDeviceAccessOverrideRequest;
import org.openapis.openapi.models.operations.DeleteMobileDeviceAccessOverrideResponse;
import org.openapis.openapi.models.operations.DeleteMobileDeviceAccessOverrideXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMobileDeviceAccessOverrideRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMobileDeviceAccessOverrideRequest req = new DeleteMobileDeviceAccessOverrideRequest(                new DeleteMobileDeviceAccessOverrideRequest("ullam", "expedita", "nihil");, DeleteMobileDeviceAccessOverrideXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_MOBILE_DEVICE_ACCESS_OVERRIDE) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            DeleteMobileDeviceAccessOverrideResponse res = sdk.sdk.deleteMobileDeviceAccessOverride(req);

            if (res.deleteMobileDeviceAccessOverrideResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMobileDeviceAccessRule

<p>Deletes a mobile device access rule for the specified WorkMail organization.</p> <note> <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMobileDeviceAccessRuleRequest;
import org.openapis.openapi.models.operations.DeleteMobileDeviceAccessRuleResponse;
import org.openapis.openapi.models.operations.DeleteMobileDeviceAccessRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteMobileDeviceAccessRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMobileDeviceAccessRuleRequest req = new DeleteMobileDeviceAccessRuleRequest(                new DeleteMobileDeviceAccessRuleRequest("natus", "magni");, DeleteMobileDeviceAccessRuleXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_MOBILE_DEVICE_ACCESS_RULE) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "quo";
                xAmzCredential = "illum";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "excepturi";
            }};            

            DeleteMobileDeviceAccessRuleResponse res = sdk.sdk.deleteMobileDeviceAccessRule(req);

            if (res.deleteMobileDeviceAccessRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganization

Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>WorkMail Administrator Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationResponse;
import org.openapis.openapi.models.operations.DeleteOrganizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteOrganizationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationRequest req = new DeleteOrganizationRequest(                new DeleteOrganizationRequest(false, "ea") {{
                                clientToken = "accusantium";
                            }};, DeleteOrganizationXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_ORGANIZATION) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
            }};            

            DeleteOrganizationResponse res = sdk.sdk.deleteOrganization(req);

            if (res.deleteOrganizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResource

Deletes the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourceRequest;
import org.openapis.openapi.models.operations.DeleteResourceResponse;
import org.openapis.openapi.models.operations.DeleteResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourceRequest req = new DeleteResourceRequest(                new DeleteResourceRequest("pariatur", "nemo");, DeleteResourceXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_RESOURCE) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "fugiat";
                xAmzDate = "amet";
                xAmzSecurityToken = "aut";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "corporis";
            }};            

            DeleteResourceResponse res = sdk.sdk.deleteResource(req);

            if (res.deleteResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRetentionPolicy

Deletes the specified retention policy from the specified organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRetentionPolicyRequest;
import org.openapis.openapi.models.operations.DeleteRetentionPolicyResponse;
import org.openapis.openapi.models.operations.DeleteRetentionPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRetentionPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRetentionPolicyRequest req = new DeleteRetentionPolicyRequest(                new DeleteRetentionPolicyRequest("libero", "nobis");, DeleteRetentionPolicyXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_RETENTION_POLICY) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "quis";
                xAmzCredential = "totam";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "nesciunt";
            }};            

            DeleteRetentionPolicyResponse res = sdk.sdk.deleteRetentionPolicy(req);

            if (res.deleteRetentionPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUser

<p>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequest;
import org.openapis.openapi.models.operations.DeleteUserResponse;
import org.openapis.openapi.models.operations.DeleteUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserRequest req = new DeleteUserRequest(                new DeleteUserRequest("perferendis", "dolores");, DeleteUserXAmzTargetEnum.WORK_MAIL_SERVICE_DELETE_USER) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "quam";
                xAmzCredential = "dolor";
                xAmzDate = "vero";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "recusandae";
            }};            

            DeleteUserResponse res = sdk.sdk.deleteUser(req);

            if (res.deleteUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterFromWorkMail

Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterFromWorkMailRequest;
import org.openapis.openapi.models.operations.DeregisterFromWorkMailResponse;
import org.openapis.openapi.models.operations.DeregisterFromWorkMailXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterFromWorkMailRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterFromWorkMailRequest req = new DeregisterFromWorkMailRequest(                new DeregisterFromWorkMailRequest("facilis", "perspiciatis");, DeregisterFromWorkMailXAmzTargetEnum.WORK_MAIL_SERVICE_DEREGISTER_FROM_WORK_MAIL) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            DeregisterFromWorkMailResponse res = sdk.sdk.deregisterFromWorkMail(req);

            if (res.deregisterFromWorkMailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterMailDomain

Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterMailDomainRequest;
import org.openapis.openapi.models.operations.DeregisterMailDomainResponse;
import org.openapis.openapi.models.operations.DeregisterMailDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterMailDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterMailDomainRequest req = new DeregisterMailDomainRequest(                new DeregisterMailDomainRequest("adipisci", "asperiores");, DeregisterMailDomainXAmzTargetEnum.WORK_MAIL_SERVICE_DEREGISTER_MAIL_DOMAIN) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "modi";
                xAmzCredential = "iste";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "provident";
            }};            

            DeregisterMailDomainResponse res = sdk.sdk.deregisterMailDomain(req);

            if (res.deregisterMailDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEmailMonitoringConfiguration

Describes the current email monitoring configuration for a specified organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEmailMonitoringConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeEmailMonitoringConfigurationResponse;
import org.openapis.openapi.models.operations.DescribeEmailMonitoringConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEmailMonitoringConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEmailMonitoringConfigurationRequest req = new DescribeEmailMonitoringConfigurationRequest(                new DescribeEmailMonitoringConfigurationRequest("libero");, DescribeEmailMonitoringConfigurationXAmzTargetEnum.WORK_MAIL_SERVICE_DESCRIBE_EMAIL_MONITORING_CONFIGURATION) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "quos";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolor";
            }};            

            DescribeEmailMonitoringConfigurationResponse res = sdk.sdk.describeEmailMonitoringConfiguration(req);

            if (res.describeEmailMonitoringConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeGroup

Returns the data available for the group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeGroupRequest;
import org.openapis.openapi.models.operations.DescribeGroupResponse;
import org.openapis.openapi.models.operations.DescribeGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeGroupRequest req = new DescribeGroupRequest(                new DescribeGroupRequest("ipsum", "hic");, DescribeGroupXAmzTargetEnum.WORK_MAIL_SERVICE_DESCRIBE_GROUP) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
            }};            

            DescribeGroupResponse res = sdk.sdk.describeGroup(req);

            if (res.describeGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeInboundDmarcSettings

Lists the settings in a DMARC policy for a specified organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInboundDmarcSettingsRequest;
import org.openapis.openapi.models.operations.DescribeInboundDmarcSettingsResponse;
import org.openapis.openapi.models.operations.DescribeInboundDmarcSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInboundDmarcSettingsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInboundDmarcSettingsRequest req = new DescribeInboundDmarcSettingsRequest(                new DescribeInboundDmarcSettingsRequest("veritatis");, DescribeInboundDmarcSettingsXAmzTargetEnum.WORK_MAIL_SERVICE_DESCRIBE_INBOUND_DMARC_SETTINGS) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quidem";
            }};            

            DescribeInboundDmarcSettingsResponse res = sdk.sdk.describeInboundDmarcSettings(req);

            if (res.describeInboundDmarcSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMailboxExportJob

Describes the current status of a mailbox export job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMailboxExportJobRequest;
import org.openapis.openapi.models.operations.DescribeMailboxExportJobResponse;
import org.openapis.openapi.models.operations.DescribeMailboxExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeMailboxExportJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMailboxExportJobRequest req = new DescribeMailboxExportJobRequest(                new DescribeMailboxExportJobRequest("voluptas", "natus");, DescribeMailboxExportJobXAmzTargetEnum.WORK_MAIL_SERVICE_DESCRIBE_MAILBOX_EXPORT_JOB) {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "atque";
                xAmzCredential = "sit";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ab";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dolorum";
            }};            

            DescribeMailboxExportJobResponse res = sdk.sdk.describeMailboxExportJob(req);

            if (res.describeMailboxExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOrganization

Provides more information regarding a given organization based on its identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOrganizationRequest;
import org.openapis.openapi.models.operations.DescribeOrganizationResponse;
import org.openapis.openapi.models.operations.DescribeOrganizationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeOrganizationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOrganizationRequest req = new DescribeOrganizationRequest(                new DescribeOrganizationRequest("voluptate");, DescribeOrganizationXAmzTargetEnum.WORK_MAIL_SERVICE_DESCRIBE_ORGANIZATION) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "omnis";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "nihil";
            }};            

            DescribeOrganizationResponse res = sdk.sdk.describeOrganization(req);

            if (res.describeOrganizationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeResource

Returns the data available for the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeResourceRequest;
import org.openapis.openapi.models.operations.DescribeResourceResponse;
import org.openapis.openapi.models.operations.DescribeResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeResourceRequest req = new DescribeResourceRequest(                new DescribeResourceRequest("voluptate", "id");, DescribeResourceXAmzTargetEnum.WORK_MAIL_SERVICE_DESCRIBE_RESOURCE) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "eius";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "amet";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "accusamus";
            }};            

            DescribeResourceResponse res = sdk.sdk.describeResource(req);

            if (res.describeResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUser

Provides information regarding the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUserRequest;
import org.openapis.openapi.models.operations.DescribeUserResponse;
import org.openapis.openapi.models.operations.DescribeUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUserRequest req = new DescribeUserRequest(                new DescribeUserRequest("saepe", "suscipit");, DescribeUserXAmzTargetEnum.WORK_MAIL_SERVICE_DESCRIBE_USER) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "provident";
                xAmzCredential = "minima";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "totam";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "alias";
            }};            

            DescribeUserResponse res = sdk.sdk.describeUser(req);

            if (res.describeUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateDelegateFromResource

Removes a member from the resource's set of delegates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateDelegateFromResourceRequest;
import org.openapis.openapi.models.operations.DisassociateDelegateFromResourceResponse;
import org.openapis.openapi.models.operations.DisassociateDelegateFromResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateDelegateFromResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateDelegateFromResourceRequest req = new DisassociateDelegateFromResourceRequest(                new DisassociateDelegateFromResourceRequest("quaerat", "tempora", "vel");, DisassociateDelegateFromResourceXAmzTargetEnum.WORK_MAIL_SERVICE_DISASSOCIATE_DELEGATE_FROM_RESOURCE) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "qui";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "a";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "harum";
            }};            

            DisassociateDelegateFromResourceResponse res = sdk.sdk.disassociateDelegateFromResource(req);

            if (res.disassociateDelegateFromResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateMemberFromGroup

Removes a member from a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateMemberFromGroupRequest;
import org.openapis.openapi.models.operations.DisassociateMemberFromGroupResponse;
import org.openapis.openapi.models.operations.DisassociateMemberFromGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateMemberFromGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateMemberFromGroupRequest req = new DisassociateMemberFromGroupRequest(                new DisassociateMemberFromGroupRequest("ipsum", "quisquam", "tenetur");, DisassociateMemberFromGroupXAmzTargetEnum.WORK_MAIL_SERVICE_DISASSOCIATE_MEMBER_FROM_GROUP) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "accusamus";
                xAmzDate = "numquam";
                xAmzSecurityToken = "enim";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "sapiente";
            }};            

            DisassociateMemberFromGroupResponse res = sdk.sdk.disassociateMemberFromGroup(req);

            if (res.disassociateMemberFromGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccessControlEffect

Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccessControlEffectRequest;
import org.openapis.openapi.models.operations.GetAccessControlEffectResponse;
import org.openapis.openapi.models.operations.GetAccessControlEffectXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAccessControlEffectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccessControlEffectRequest req = new GetAccessControlEffectRequest(                new GetAccessControlEffectRequest("nihil", "sit", "expedita") {{
                                impersonationRoleId = "neque";
                                userId = "sed";
                            }};, GetAccessControlEffectXAmzTargetEnum.WORK_MAIL_SERVICE_GET_ACCESS_CONTROL_EFFECT) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "libero";
                xAmzCredential = "voluptas";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "quam";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "incidunt";
            }};            

            GetAccessControlEffectResponse res = sdk.sdk.getAccessControlEffect(req);

            if (res.getAccessControlEffectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDefaultRetentionPolicy

Gets the default retention policy details for the specified organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDefaultRetentionPolicyRequest;
import org.openapis.openapi.models.operations.GetDefaultRetentionPolicyResponse;
import org.openapis.openapi.models.operations.GetDefaultRetentionPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDefaultRetentionPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDefaultRetentionPolicyRequest req = new GetDefaultRetentionPolicyRequest(                new GetDefaultRetentionPolicyRequest("cupiditate");, GetDefaultRetentionPolicyXAmzTargetEnum.WORK_MAIL_SERVICE_GET_DEFAULT_RETENTION_POLICY) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "soluta";
                xAmzDate = "dicta";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "incidunt";
            }};            

            GetDefaultRetentionPolicyResponse res = sdk.sdk.getDefaultRetentionPolicy(req);

            if (res.getDefaultRetentionPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImpersonationRole

Gets the impersonation role details for the given WorkMail organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImpersonationRoleRequest;
import org.openapis.openapi.models.operations.GetImpersonationRoleResponse;
import org.openapis.openapi.models.operations.GetImpersonationRoleXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetImpersonationRoleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImpersonationRoleRequest req = new GetImpersonationRoleRequest(                new GetImpersonationRoleRequest("dolores", "distinctio");, GetImpersonationRoleXAmzTargetEnum.WORK_MAIL_SERVICE_GET_IMPERSONATION_ROLE) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quam";
                xAmzDate = "molestias";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "neque";
            }};            

            GetImpersonationRoleResponse res = sdk.sdk.getImpersonationRole(req);

            if (res.getImpersonationRoleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getImpersonationRoleEffect

Tests whether the given impersonation role can impersonate a target user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetImpersonationRoleEffectRequest;
import org.openapis.openapi.models.operations.GetImpersonationRoleEffectResponse;
import org.openapis.openapi.models.operations.GetImpersonationRoleEffectXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetImpersonationRoleEffectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetImpersonationRoleEffectRequest req = new GetImpersonationRoleEffectRequest(                new GetImpersonationRoleEffectRequest("magni", "odio", "sunt");, GetImpersonationRoleEffectXAmzTargetEnum.WORK_MAIL_SERVICE_GET_IMPERSONATION_ROLE_EFFECT) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "hic";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "nobis";
            }};            

            GetImpersonationRoleEffectResponse res = sdk.sdk.getImpersonationRoleEffect(req);

            if (res.getImpersonationRoleEffectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMailDomain

Gets details for a mail domain, including domain records required to configure your domain with recommended security.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMailDomainRequest;
import org.openapis.openapi.models.operations.GetMailDomainResponse;
import org.openapis.openapi.models.operations.GetMailDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMailDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMailDomainRequest req = new GetMailDomainRequest(                new GetMailDomainRequest("saepe", "ipsum");, GetMailDomainXAmzTargetEnum.WORK_MAIL_SERVICE_GET_MAIL_DOMAIN) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quos";
                xAmzDate = "tempore";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "delectus";
            }};            

            GetMailDomainResponse res = sdk.sdk.getMailDomain(req);

            if (res.getMailDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMailboxDetails

Requests a user's mailbox details for a specified organization and user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMailboxDetailsRequest;
import org.openapis.openapi.models.operations.GetMailboxDetailsResponse;
import org.openapis.openapi.models.operations.GetMailboxDetailsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMailboxDetailsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMailboxDetailsRequest req = new GetMailboxDetailsRequest(                new GetMailboxDetailsRequest("dolore", "labore");, GetMailboxDetailsXAmzTargetEnum.WORK_MAIL_SERVICE_GET_MAILBOX_DETAILS) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "architecto";
                xAmzDate = "quae";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quas";
                xAmzSignedHeaders = "itaque";
            }};            

            GetMailboxDetailsResponse res = sdk.sdk.getMailboxDetails(req);

            if (res.getMailboxDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMobileDeviceAccessEffect

Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMobileDeviceAccessEffectRequest;
import org.openapis.openapi.models.operations.GetMobileDeviceAccessEffectResponse;
import org.openapis.openapi.models.operations.GetMobileDeviceAccessEffectXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMobileDeviceAccessEffectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMobileDeviceAccessEffectRequest req = new GetMobileDeviceAccessEffectRequest(                new GetMobileDeviceAccessEffectRequest("est") {{
                                deviceModel = "repellendus";
                                deviceOperatingSystem = "porro";
                                deviceType = "doloribus";
                                deviceUserAgent = "ut";
                            }};, GetMobileDeviceAccessEffectXAmzTargetEnum.WORK_MAIL_SERVICE_GET_MOBILE_DEVICE_ACCESS_EFFECT) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "qui";
                xAmzDate = "quae";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
            }};            

            GetMobileDeviceAccessEffectResponse res = sdk.sdk.getMobileDeviceAccessEffect(req);

            if (res.getMobileDeviceAccessEffectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMobileDeviceAccessOverride

Gets the mobile device access override for the given WorkMail organization, user, and device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMobileDeviceAccessOverrideRequest;
import org.openapis.openapi.models.operations.GetMobileDeviceAccessOverrideResponse;
import org.openapis.openapi.models.operations.GetMobileDeviceAccessOverrideXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetMobileDeviceAccessOverrideRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMobileDeviceAccessOverrideRequest req = new GetMobileDeviceAccessOverrideRequest(                new GetMobileDeviceAccessOverrideRequest("quisquam", "vero", "omnis");, GetMobileDeviceAccessOverrideXAmzTargetEnum.WORK_MAIL_SERVICE_GET_MOBILE_DEVICE_ACCESS_OVERRIDE) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "delectus";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "tenetur";
            }};            

            GetMobileDeviceAccessOverrideResponse res = sdk.sdk.getMobileDeviceAccessOverride(req);

            if (res.getMobileDeviceAccessOverrideResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccessControlRules

Lists the access control rules for the specified organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccessControlRulesRequest;
import org.openapis.openapi.models.operations.ListAccessControlRulesResponse;
import org.openapis.openapi.models.operations.ListAccessControlRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAccessControlRulesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccessControlRulesRequest req = new ListAccessControlRulesRequest(                new ListAccessControlRulesRequest("hic");, ListAccessControlRulesXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_ACCESS_CONTROL_RULES) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quod";
                xAmzCredential = "odio";
                xAmzDate = "similique";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "ducimus";
            }};            

            ListAccessControlRulesResponse res = sdk.sdk.listAccessControlRules(req);

            if (res.listAccessControlRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAliases

Creates a paginated call to list the aliases associated with a given entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAliasesRequest;
import org.openapis.openapi.models.operations.ListAliasesResponse;
import org.openapis.openapi.models.operations.ListAliasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAliasesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAliasesRequest req = new ListAliasesRequest(                new ListAliasesRequest("quibusdam", "illum") {{
                                maxResults = 194342L;
                                nextToken = "natus";
                            }};, ListAliasesXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_ALIASES) {{
                maxResults = "impedit";
                nextToken = "aut";
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nulla";
                xAmzDate = "fugit";
                xAmzSecurityToken = "porro";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "doloribus";
            }};            

            ListAliasesResponse res = sdk.sdk.listAliases(req);

            if (res.listAliasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailabilityConfigurations

List all the <code>AvailabilityConfiguration</code>'s for the given WorkMail organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailabilityConfigurationsRequest;
import org.openapis.openapi.models.operations.ListAvailabilityConfigurationsResponse;
import org.openapis.openapi.models.operations.ListAvailabilityConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAvailabilityConfigurationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAvailabilityConfigurationsRequest req = new ListAvailabilityConfigurationsRequest(                new ListAvailabilityConfigurationsRequest("eligendi") {{
                                maxResults = 497391L;
                                nextToken = "alias";
                            }};, ListAvailabilityConfigurationsXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_AVAILABILITY_CONFIGURATIONS) {{
                maxResults = "officia";
                nextToken = "tempora";
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aspernatur";
                xAmzDate = "vel";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "ratione";
            }};            

            ListAvailabilityConfigurationsResponse res = sdk.sdk.listAvailabilityConfigurations(req);

            if (res.listAvailabilityConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGroupMembers

Returns an overview of the members of a group. Users and groups can be members of a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroupMembersRequest;
import org.openapis.openapi.models.operations.ListGroupMembersResponse;
import org.openapis.openapi.models.operations.ListGroupMembersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListGroupMembersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGroupMembersRequest req = new ListGroupMembersRequest(                new ListGroupMembersRequest("laudantium", "dicta") {{
                                maxResults = 224317L;
                                nextToken = "maiores";
                            }};, ListGroupMembersXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_GROUP_MEMBERS) {{
                maxResults = "quasi";
                nextToken = "ex";
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "saepe";
            }};            

            ListGroupMembersResponse res = sdk.sdk.listGroupMembers(req);

            if (res.listGroupMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGroups

Returns summaries of the organization's groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroupsRequest;
import org.openapis.openapi.models.operations.ListGroupsResponse;
import org.openapis.openapi.models.operations.ListGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListGroupsRequest req = new ListGroupsRequest(                new ListGroupsRequest("impedit") {{
                                maxResults = 359271L;
                                nextToken = "veniam";
                            }};, ListGroupsXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_GROUPS) {{
                maxResults = "aliquid";
                nextToken = "inventore";
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "quo";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "minima";
            }};            

            ListGroupsResponse res = sdk.sdk.listGroups(req);

            if (res.listGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listImpersonationRoles

Lists all the impersonation roles for the given WorkMail organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListImpersonationRolesRequest;
import org.openapis.openapi.models.operations.ListImpersonationRolesResponse;
import org.openapis.openapi.models.operations.ListImpersonationRolesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListImpersonationRolesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListImpersonationRolesRequest req = new ListImpersonationRolesRequest(                new ListImpersonationRolesRequest("a") {{
                                maxResults = 725595L;
                                nextToken = "aut";
                            }};, ListImpersonationRolesXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_IMPERSONATION_ROLES) {{
                maxResults = "aut";
                nextToken = "deleniti";
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "fugit";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "non";
                xAmzSignedHeaders = "et";
            }};            

            ListImpersonationRolesResponse res = sdk.sdk.listImpersonationRoles(req);

            if (res.listImpersonationRolesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMailDomains

Lists the mail domains in a given WorkMail organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMailDomainsRequest;
import org.openapis.openapi.models.operations.ListMailDomainsResponse;
import org.openapis.openapi.models.operations.ListMailDomainsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMailDomainsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMailDomainsRequest req = new ListMailDomainsRequest(                new ListMailDomainsRequest("laborum") {{
                                maxResults = 810424L;
                                nextToken = "velit";
                            }};, ListMailDomainsXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_MAIL_DOMAINS) {{
                maxResults = "eum";
                nextToken = "autem";
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quas";
                xAmzCredential = "assumenda";
                xAmzDate = "nulla";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "quasi";
            }};            

            ListMailDomainsResponse res = sdk.sdk.listMailDomains(req);

            if (res.listMailDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMailboxExportJobs

Lists the mailbox export jobs started for the specified organization within the last seven days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMailboxExportJobsRequest;
import org.openapis.openapi.models.operations.ListMailboxExportJobsResponse;
import org.openapis.openapi.models.operations.ListMailboxExportJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMailboxExportJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMailboxExportJobsRequest req = new ListMailboxExportJobsRequest(                new ListMailboxExportJobsRequest("numquam") {{
                                maxResults = 131482L;
                                nextToken = "provident";
                            }};, ListMailboxExportJobsXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_MAILBOX_EXPORT_JOBS) {{
                maxResults = "ipsa";
                nextToken = "molestiae";
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "eius";
                xAmzDate = "esse";
                xAmzSecurityToken = "esse";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "fuga";
            }};            

            ListMailboxExportJobsResponse res = sdk.sdk.listMailboxExportJobs(req);

            if (res.listMailboxExportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMailboxPermissions

Lists the mailbox permissions associated with a user, group, or resource mailbox.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMailboxPermissionsRequest;
import org.openapis.openapi.models.operations.ListMailboxPermissionsResponse;
import org.openapis.openapi.models.operations.ListMailboxPermissionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMailboxPermissionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMailboxPermissionsRequest req = new ListMailboxPermissionsRequest(                new ListMailboxPermissionsRequest("quidem", "fugiat") {{
                                maxResults = 283519L;
                                nextToken = "eum";
                            }};, ListMailboxPermissionsXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_MAILBOX_PERMISSIONS) {{
                maxResults = "suscipit";
                nextToken = "assumenda";
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "quisquam";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "id";
                xAmzSignedHeaders = "quidem";
            }};            

            ListMailboxPermissionsResponse res = sdk.sdk.listMailboxPermissions(req);

            if (res.listMailboxPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMobileDeviceAccessOverrides

Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMobileDeviceAccessOverridesRequest;
import org.openapis.openapi.models.operations.ListMobileDeviceAccessOverridesResponse;
import org.openapis.openapi.models.operations.ListMobileDeviceAccessOverridesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMobileDeviceAccessOverridesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMobileDeviceAccessOverridesRequest req = new ListMobileDeviceAccessOverridesRequest(                new ListMobileDeviceAccessOverridesRequest("quo") {{
                                deviceId = "illum";
                                maxResults = 777408L;
                                nextToken = "fuga";
                                userId = "eius";
                            }};, ListMobileDeviceAccessOverridesXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_MOBILE_DEVICE_ACCESS_OVERRIDES) {{
                maxResults = "eos";
                nextToken = "voluptas";
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "consequatur";
                xAmzDate = "tempora";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "aspernatur";
            }};            

            ListMobileDeviceAccessOverridesResponse res = sdk.sdk.listMobileDeviceAccessOverrides(req);

            if (res.listMobileDeviceAccessOverridesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMobileDeviceAccessRules

Lists the mobile device access rules for the specified WorkMail organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMobileDeviceAccessRulesRequest;
import org.openapis.openapi.models.operations.ListMobileDeviceAccessRulesResponse;
import org.openapis.openapi.models.operations.ListMobileDeviceAccessRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListMobileDeviceAccessRulesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMobileDeviceAccessRulesRequest req = new ListMobileDeviceAccessRulesRequest(                new ListMobileDeviceAccessRulesRequest("quo");, ListMobileDeviceAccessRulesXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_MOBILE_DEVICE_ACCESS_RULES) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aperiam";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quod";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "inventore";
            }};            

            ListMobileDeviceAccessRulesResponse res = sdk.sdk.listMobileDeviceAccessRules(req);

            if (res.listMobileDeviceAccessRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOrganizations

Returns summaries of the customer's organizations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOrganizationsRequest;
import org.openapis.openapi.models.operations.ListOrganizationsResponse;
import org.openapis.openapi.models.operations.ListOrganizationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListOrganizationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOrganizationsRequest req = new ListOrganizationsRequest(                new ListOrganizationsRequest() {{
                                maxResults = 518835L;
                                nextToken = "accusamus";
                            }};, ListOrganizationsXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_ORGANIZATIONS) {{
                maxResults = "aliquam";
                nextToken = "odio";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "sapiente";
                xAmzDate = "dolores";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "accusantium";
            }};            

            ListOrganizationsResponse res = sdk.sdk.listOrganizations(req);

            if (res.listOrganizationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceDelegates

Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceDelegatesRequest;
import org.openapis.openapi.models.operations.ListResourceDelegatesResponse;
import org.openapis.openapi.models.operations.ListResourceDelegatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResourceDelegatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceDelegatesRequest req = new ListResourceDelegatesRequest(                new ListResourceDelegatesRequest("eum", "quas") {{
                                maxResults = 510017L;
                                nextToken = "consequuntur";
                            }};, ListResourceDelegatesXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_RESOURCE_DELEGATES) {{
                maxResults = "deleniti";
                nextToken = "fugit";
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "incidunt";
                xAmzDate = "atque";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "nisi";
            }};            

            ListResourceDelegatesResponse res = sdk.sdk.listResourceDelegates(req);

            if (res.listResourceDelegatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResources

Returns summaries of the organization's resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourcesRequest;
import org.openapis.openapi.models.operations.ListResourcesResponse;
import org.openapis.openapi.models.operations.ListResourcesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResourcesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourcesRequest req = new ListResourcesRequest(                new ListResourcesRequest("sapiente") {{
                                maxResults = 159870L;
                                nextToken = "ratione";
                            }};, ListResourcesXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_RESOURCES) {{
                maxResults = "explicabo";
                nextToken = "saepe";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "atque";
                xAmzCredential = "et";
                xAmzDate = "esse";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "veritatis";
            }};            

            ListResourcesResponse res = sdk.sdk.listResources(req);

            if (res.listResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags applied to an WorkMail organization resource.

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
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("quod");, ListTagsForResourceXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aliquid";
                xAmzDate = "quasi";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "harum";
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

## listUsers

Returns summaries of the organization's users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsersRequest;
import org.openapis.openapi.models.operations.ListUsersResponse;
import org.openapis.openapi.models.operations.ListUsersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListUsersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUsersRequest req = new ListUsersRequest(                new ListUsersRequest("rerum") {{
                                maxResults = 580197L;
                                nextToken = "minima";
                            }};, ListUsersXAmzTargetEnum.WORK_MAIL_SERVICE_LIST_USERS) {{
                maxResults = "distinctio";
                nextToken = "eligendi";
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "tempore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "consequatur";
            }};            

            ListUsersResponse res = sdk.sdk.listUsers(req);

            if (res.listUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAccessControlRule

Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAccessControlRuleRequest;
import org.openapis.openapi.models.operations.PutAccessControlRuleResponse;
import org.openapis.openapi.models.operations.PutAccessControlRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessControlRuleEffectEnum;
import org.openapis.openapi.models.shared.PutAccessControlRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccessControlRuleRequest req = new PutAccessControlRuleRequest(                new PutAccessControlRuleRequest("quaerat", AccessControlRuleEffectEnum.DENY, "consectetur", "esse") {{
                                actions = new String[]{{
                                    add("provident"),
                                    add("a"),
                                    add("nulla"),
                                }};
                                impersonationRoleIds = new String[]{{
                                    add("esse"),
                                    add("quasi"),
                                    add("a"),
                                }};
                                ipRanges = new String[]{{
                                    add("sint"),
                                    add("pariatur"),
                                    add("possimus"),
                                }};
                                notActions = new String[]{{
                                    add("eveniet"),
                                }};
                                notImpersonationRoleIds = new String[]{{
                                    add("facere"),
                                    add("veritatis"),
                                    add("consequuntur"),
                                    add("quasi"),
                                }};
                                notIpRanges = new String[]{{
                                    add("culpa"),
                                    add("aliquid"),
                                    add("tenetur"),
                                }};
                                notUserIds = new String[]{{
                                    add("earum"),
                                }};
                                userIds = new String[]{{
                                    add("in"),
                                    add("eius"),
                                }};
                            }};, PutAccessControlRuleXAmzTargetEnum.WORK_MAIL_SERVICE_PUT_ACCESS_CONTROL_RULE) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "illum";
                xAmzCredential = "soluta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dicta";
            }};            

            PutAccessControlRuleResponse res = sdk.sdk.putAccessControlRule(req);

            if (res.putAccessControlRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEmailMonitoringConfiguration

Creates or updates the email monitoring configuration for a specified organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEmailMonitoringConfigurationRequest;
import org.openapis.openapi.models.operations.PutEmailMonitoringConfigurationResponse;
import org.openapis.openapi.models.operations.PutEmailMonitoringConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutEmailMonitoringConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutEmailMonitoringConfigurationRequest req = new PutEmailMonitoringConfigurationRequest(                new PutEmailMonitoringConfigurationRequest("reprehenderit", "ullam", "nisi");, PutEmailMonitoringConfigurationXAmzTargetEnum.WORK_MAIL_SERVICE_PUT_EMAIL_MONITORING_CONFIGURATION) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "qui";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "ex";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "itaque";
            }};            

            PutEmailMonitoringConfigurationResponse res = sdk.sdk.putEmailMonitoringConfiguration(req);

            if (res.putEmailMonitoringConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putInboundDmarcSettings

Enables or disables a DMARC policy for a given organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutInboundDmarcSettingsRequest;
import org.openapis.openapi.models.operations.PutInboundDmarcSettingsResponse;
import org.openapis.openapi.models.operations.PutInboundDmarcSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutInboundDmarcSettingsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutInboundDmarcSettingsRequest req = new PutInboundDmarcSettingsRequest(                new PutInboundDmarcSettingsRequest(false, "architecto");, PutInboundDmarcSettingsXAmzTargetEnum.WORK_MAIL_SERVICE_PUT_INBOUND_DMARC_SETTINGS) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "quasi";
                xAmzDate = "at";
                xAmzSecurityToken = "et";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "ipsa";
            }};            

            PutInboundDmarcSettingsResponse res = sdk.sdk.putInboundDmarcSettings(req);

            if (res.putInboundDmarcSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putMailboxPermissions

Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutMailboxPermissionsRequest;
import org.openapis.openapi.models.operations.PutMailboxPermissionsResponse;
import org.openapis.openapi.models.operations.PutMailboxPermissionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.PermissionTypeEnum;
import org.openapis.openapi.models.shared.PutMailboxPermissionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutMailboxPermissionsRequest req = new PutMailboxPermissionsRequest(                new PutMailboxPermissionsRequest("veritatis", "consectetur", "adipisci",                 new org.openapis.openapi.models.shared.PermissionTypeEnum[]{{
                                                add(PermissionTypeEnum.SEND_ON_BEHALF),
                                                add(PermissionTypeEnum.FULL_ACCESS),
                                                add(PermissionTypeEnum.SEND_AS),
                                            }});, PutMailboxPermissionsXAmzTargetEnum.WORK_MAIL_SERVICE_PUT_MAILBOX_PERMISSIONS) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "eum";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ab";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "non";
            }};            

            PutMailboxPermissionsResponse res = sdk.sdk.putMailboxPermissions(req);

            if (res.putMailboxPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putMobileDeviceAccessOverride

Creates or updates a mobile device access override for the given WorkMail organization, user, and device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutMobileDeviceAccessOverrideRequest;
import org.openapis.openapi.models.operations.PutMobileDeviceAccessOverrideResponse;
import org.openapis.openapi.models.operations.PutMobileDeviceAccessOverrideXAmzTargetEnum;
import org.openapis.openapi.models.shared.MobileDeviceAccessRuleEffectEnum;
import org.openapis.openapi.models.shared.PutMobileDeviceAccessOverrideRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutMobileDeviceAccessOverrideRequest req = new PutMobileDeviceAccessOverrideRequest(                new PutMobileDeviceAccessOverrideRequest("dolor", MobileDeviceAccessRuleEffectEnum.DENY, "numquam", "impedit") {{
                                description = "explicabo";
                            }};, PutMobileDeviceAccessOverrideXAmzTargetEnum.WORK_MAIL_SERVICE_PUT_MOBILE_DEVICE_ACCESS_OVERRIDE) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "aut";
                xAmzCredential = "dignissimos";
                xAmzDate = "dicta";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "velit";
            }};            

            PutMobileDeviceAccessOverrideResponse res = sdk.sdk.putMobileDeviceAccessOverride(req);

            if (res.putMobileDeviceAccessOverrideResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRetentionPolicy

Puts a retention policy to the specified organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRetentionPolicyRequest;
import org.openapis.openapi.models.operations.PutRetentionPolicyResponse;
import org.openapis.openapi.models.operations.PutRetentionPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.FolderConfiguration;
import org.openapis.openapi.models.shared.FolderNameEnum;
import org.openapis.openapi.models.shared.PutRetentionPolicyRequest;
import org.openapis.openapi.models.shared.RetentionActionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRetentionPolicyRequest req = new PutRetentionPolicyRequest(                new PutRetentionPolicyRequest(                new org.openapis.openapi.models.shared.FolderConfiguration[]{{
                                                add(new FolderConfiguration(RetentionActionEnum.NONE, FolderNameEnum.INBOX) {{
                                                    action = RetentionActionEnum.PERMANENTLY_DELETE;
                                                    name = FolderNameEnum.INBOX;
                                                    period = 409054L;
                                                }}),
                                                add(new FolderConfiguration(RetentionActionEnum.DELETE, FolderNameEnum.DRAFTS) {{
                                                    action = RetentionActionEnum.PERMANENTLY_DELETE;
                                                    name = FolderNameEnum.DRAFTS;
                                                    period = 807023L;
                                                }}),
                                            }}, "asperiores", "nemo") {{
                                description = "quae";
                                id = "5cc413aa-63aa-4e8d-a786-4dbb675fd5e6";
                            }};, PutRetentionPolicyXAmzTargetEnum.WORK_MAIL_SERVICE_PUT_RETENTION_POLICY) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "cum";
                xAmzCredential = "consectetur";
                xAmzDate = "in";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "facere";
            }};            

            PutRetentionPolicyResponse res = sdk.sdk.putRetentionPolicy(req);

            if (res.putRetentionPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerMailDomain

Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterMailDomainRequest;
import org.openapis.openapi.models.operations.RegisterMailDomainResponse;
import org.openapis.openapi.models.operations.RegisterMailDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterMailDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterMailDomainRequest req = new RegisterMailDomainRequest(                new RegisterMailDomainRequest("doloribus", "suscipit") {{
                                clientToken = "reiciendis";
                            }};, RegisterMailDomainXAmzTargetEnum.WORK_MAIL_SERVICE_REGISTER_MAIL_DOMAIN) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "necessitatibus";
                xAmzDate = "dolore";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "adipisci";
            }};            

            RegisterMailDomainResponse res = sdk.sdk.registerMailDomain(req);

            if (res.registerMailDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerToWorkMail

<p>Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>.</p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterToWorkMailRequest;
import org.openapis.openapi.models.operations.RegisterToWorkMailResponse;
import org.openapis.openapi.models.operations.RegisterToWorkMailXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterToWorkMailRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterToWorkMailRequest req = new RegisterToWorkMailRequest(                new RegisterToWorkMailRequest("amet", "beatae", "dignissimos");, RegisterToWorkMailXAmzTargetEnum.WORK_MAIL_SERVICE_REGISTER_TO_WORK_MAIL) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "consectetur";
                xAmzDate = "corporis";
                xAmzSecurityToken = "harum";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "ipsa";
            }};            

            RegisterToWorkMailResponse res = sdk.sdk.registerToWorkMail(req);

            if (res.registerToWorkMailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetPassword

Allows the administrator to reset the password for a user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetPasswordRequest;
import org.openapis.openapi.models.operations.ResetPasswordResponse;
import org.openapis.openapi.models.operations.ResetPasswordXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResetPasswordRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResetPasswordRequest req = new ResetPasswordRequest(                new ResetPasswordRequest("libero", "vitae", "accusamus");, ResetPasswordXAmzTargetEnum.WORK_MAIL_SERVICE_RESET_PASSWORD) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "aspernatur";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "minima";
            }};            

            ResetPasswordResponse res = sdk.sdk.resetPassword(req);

            if (res.resetPasswordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startMailboxExportJob

Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>WorkMail Administrator Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartMailboxExportJobRequest;
import org.openapis.openapi.models.operations.StartMailboxExportJobResponse;
import org.openapis.openapi.models.operations.StartMailboxExportJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartMailboxExportJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartMailboxExportJobRequest req = new StartMailboxExportJobRequest(                new StartMailboxExportJobRequest("dolorum", "adipisci", "minus", "dolores", "blanditiis", "in", "dolore") {{
                                description = "aliquam";
                            }};, StartMailboxExportJobXAmzTargetEnum.WORK_MAIL_SERVICE_START_MAILBOX_EXPORT_JOB) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ullam";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "cum";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "quas";
            }};            

            StartMailboxExportJobResponse res = sdk.sdk.startMailboxExportJob(req);

            if (res.startMailboxExportJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Applies the specified tags to the specified WorkMailorganization resource.

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
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("nesciunt",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("totam", "hic") {{
                                                    key = "corrupti";
                                                    value = "pariatur";
                                                }}),
                                                add(new Tag("sit", "rerum") {{
                                                    key = "exercitationem";
                                                    value = "nobis";
                                                }}),
                                                add(new Tag("explicabo", "asperiores") {{
                                                    key = "sed";
                                                    value = "reiciendis";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.WORK_MAIL_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "expedita";
                xAmzDate = "ab";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "laborum";
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

## testAvailabilityConfiguration

<p>Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a <code>SourceArn</code> or <code>SourceAccount</code> header.</p> <note> <p>The request must contain either one provider definition (<code>EwsProvider</code> or <code>LambdaProvider</code>) or the <code>DomainName</code> parameter. If the <code>DomainName</code> parameter is provided, the configuration stored under the <code>DomainName</code> will be tested.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestAvailabilityConfigurationRequest;
import org.openapis.openapi.models.operations.TestAvailabilityConfigurationResponse;
import org.openapis.openapi.models.operations.TestAvailabilityConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.EwsAvailabilityProvider;
import org.openapis.openapi.models.shared.LambdaAvailabilityProvider;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestAvailabilityConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestAvailabilityConfigurationRequest req = new TestAvailabilityConfigurationRequest(                new TestAvailabilityConfigurationRequest("in") {{
                                domainName = "commodi";
                                ewsProvider = new EwsAvailabilityProvider("quidem", "explicabo", "voluptas");;
                                lambdaProvider = new LambdaAvailabilityProvider("unde");;
                            }};, TestAvailabilityConfigurationXAmzTargetEnum.WORK_MAIL_SERVICE_TEST_AVAILABILITY_CONFIGURATION) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "sapiente";
                xAmzDate = "debitis";
                xAmzSecurityToken = "illo";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "perferendis";
            }};            

            TestAvailabilityConfigurationResponse res = sdk.sdk.testAvailabilityConfiguration(req);

            if (res.testAvailabilityConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Untags the specified tags from the specified WorkMail organization resource.

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
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("maiores",                 new String[]{{
                                                add("sed"),
                                                add("provident"),
                                            }});, UntagResourceXAmzTargetEnum.WORK_MAIL_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "ipsum";
                xAmzDate = "ea";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "voluptatibus";
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

## updateAvailabilityConfiguration

Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAvailabilityConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateAvailabilityConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateAvailabilityConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.EwsAvailabilityProvider;
import org.openapis.openapi.models.shared.LambdaAvailabilityProvider;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAvailabilityConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAvailabilityConfigurationRequest req = new UpdateAvailabilityConfigurationRequest(                new UpdateAvailabilityConfigurationRequest("tempora", "voluptate") {{
                                ewsProvider = new EwsAvailabilityProvider("reiciendis", "ex", "sit");;
                                lambdaProvider = new LambdaAvailabilityProvider("non");;
                            }};, UpdateAvailabilityConfigurationXAmzTargetEnum.WORK_MAIL_SERVICE_UPDATE_AVAILABILITY_CONFIGURATION) {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "facilis";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "debitis";
            }};            

            UpdateAvailabilityConfigurationResponse res = sdk.sdk.updateAvailabilityConfiguration(req);

            if (res.updateAvailabilityConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDefaultMailDomain

Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDefaultMailDomainRequest;
import org.openapis.openapi.models.operations.UpdateDefaultMailDomainResponse;
import org.openapis.openapi.models.operations.UpdateDefaultMailDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDefaultMailDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDefaultMailDomainRequest req = new UpdateDefaultMailDomainRequest(                new UpdateDefaultMailDomainRequest("sit", "nobis");, UpdateDefaultMailDomainXAmzTargetEnum.WORK_MAIL_SERVICE_UPDATE_DEFAULT_MAIL_DOMAIN) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "minima";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "magni";
            }};            

            UpdateDefaultMailDomainResponse res = sdk.sdk.updateDefaultMailDomain(req);

            if (res.updateDefaultMailDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateImpersonationRole

Updates an impersonation role for the given WorkMail organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateImpersonationRoleRequest;
import org.openapis.openapi.models.operations.UpdateImpersonationRoleResponse;
import org.openapis.openapi.models.operations.UpdateImpersonationRoleXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessEffectEnum;
import org.openapis.openapi.models.shared.ImpersonationRoleTypeEnum;
import org.openapis.openapi.models.shared.ImpersonationRule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateImpersonationRoleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateImpersonationRoleRequest req = new UpdateImpersonationRoleRequest(                new UpdateImpersonationRoleRequest("saepe", "numquam", "veniam",                 new org.openapis.openapi.models.shared.ImpersonationRule[]{{
                                                add(new ImpersonationRule(AccessEffectEnum.DENY, "corrupti") {{
                                                    description = "officiis";
                                                    effect = AccessEffectEnum.ALLOW;
                                                    impersonationRuleId = "laudantium";
                                                    name = "Mabel Robel";
                                                    notTargetUsers = new String[]{{
                                                        add("error"),
                                                        add("hic"),
                                                        add("expedita"),
                                                    }};
                                                    targetUsers = new String[]{{
                                                        add("neque"),
                                                        add("dolorum"),
                                                        add("nostrum"),
                                                        add("officia"),
                                                    }};
                                                }}),
                                                add(new ImpersonationRule(AccessEffectEnum.DENY, "repudiandae") {{
                                                    description = "accusamus";
                                                    effect = AccessEffectEnum.ALLOW;
                                                    impersonationRuleId = "atque";
                                                    name = "Miss April Stiedemann";
                                                    notTargetUsers = new String[]{{
                                                        add("consequatur"),
                                                        add("esse"),
                                                    }};
                                                    targetUsers = new String[]{{
                                                        add("sit"),
                                                        add("voluptatum"),
                                                    }};
                                                }}),
                                            }}, ImpersonationRoleTypeEnum.FULL_ACCESS) {{
                                description = "et";
                            }};, UpdateImpersonationRoleXAmzTargetEnum.WORK_MAIL_SERVICE_UPDATE_IMPERSONATION_ROLE) {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "ex";
                xAmzCredential = "sed";
                xAmzDate = "sit";
                xAmzSecurityToken = "vel";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateImpersonationRoleResponse res = sdk.sdk.updateImpersonationRole(req);

            if (res.updateImpersonationRoleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMailboxQuota

Updates a user's current mailbox quota for a specified organization and user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMailboxQuotaRequest;
import org.openapis.openapi.models.operations.UpdateMailboxQuotaResponse;
import org.openapis.openapi.models.operations.UpdateMailboxQuotaXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateMailboxQuotaRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMailboxQuotaRequest req = new UpdateMailboxQuotaRequest(                new UpdateMailboxQuotaRequest(8511L, "incidunt", "reiciendis");, UpdateMailboxQuotaXAmzTargetEnum.WORK_MAIL_SERVICE_UPDATE_MAILBOX_QUOTA) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "harum";
                xAmzCredential = "dicta";
                xAmzDate = "architecto";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "quidem";
            }};            

            UpdateMailboxQuotaResponse res = sdk.sdk.updateMailboxQuota(req);

            if (res.updateMailboxQuotaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMobileDeviceAccessRule

Updates a mobile device access rule for the specified WorkMail organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMobileDeviceAccessRuleRequest;
import org.openapis.openapi.models.operations.UpdateMobileDeviceAccessRuleResponse;
import org.openapis.openapi.models.operations.UpdateMobileDeviceAccessRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.MobileDeviceAccessRuleEffectEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateMobileDeviceAccessRuleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMobileDeviceAccessRuleRequest req = new UpdateMobileDeviceAccessRuleRequest(                new UpdateMobileDeviceAccessRuleRequest(MobileDeviceAccessRuleEffectEnum.DENY, "nam", "tenetur", "laboriosam") {{
                                description = "alias";
                                deviceModels = new String[]{{
                                    add("deserunt"),
                                }};
                                deviceOperatingSystems = new String[]{{
                                    add("unde"),
                                    add("reiciendis"),
                                }};
                                deviceTypes = new String[]{{
                                    add("repellendus"),
                                    add("delectus"),
                                    add("voluptates"),
                                }};
                                deviceUserAgents = new String[]{{
                                    add("est"),
                                }};
                                notDeviceModels = new String[]{{
                                    add("reprehenderit"),
                                    add("facere"),
                                    add("fuga"),
                                }};
                                notDeviceOperatingSystems = new String[]{{
                                    add("mollitia"),
                                    add("veniam"),
                                    add("voluptatem"),
                                }};
                                notDeviceTypes = new String[]{{
                                    add("repudiandae"),
                                    add("quasi"),
                                    add("atque"),
                                    add("reprehenderit"),
                                }};
                                notDeviceUserAgents = new String[]{{
                                    add("totam"),
                                    add("suscipit"),
                                    add("quidem"),
                                    add("maxime"),
                                }};
                            }};, UpdateMobileDeviceAccessRuleXAmzTargetEnum.WORK_MAIL_SERVICE_UPDATE_MOBILE_DEVICE_ACCESS_RULE) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "esse";
                xAmzCredential = "amet";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ea";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "error";
            }};            

            UpdateMobileDeviceAccessRuleResponse res = sdk.sdk.updateMobileDeviceAccessRule(req);

            if (res.updateMobileDeviceAccessRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePrimaryEmailAddress

Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePrimaryEmailAddressRequest;
import org.openapis.openapi.models.operations.UpdatePrimaryEmailAddressResponse;
import org.openapis.openapi.models.operations.UpdatePrimaryEmailAddressXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePrimaryEmailAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePrimaryEmailAddressRequest req = new UpdatePrimaryEmailAddressRequest(                new UpdatePrimaryEmailAddressRequest("officiis", "accusamus", "natus");, UpdatePrimaryEmailAddressXAmzTargetEnum.WORK_MAIL_SERVICE_UPDATE_PRIMARY_EMAIL_ADDRESS) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "ex";
                xAmzDate = "maiores";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "at";
                xAmzSignedHeaders = "error";
            }};            

            UpdatePrimaryEmailAddressResponse res = sdk.sdk.updatePrimaryEmailAddress(req);

            if (res.updatePrimaryEmailAddressResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResource

Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResourceRequest;
import org.openapis.openapi.models.operations.UpdateResourceResponse;
import org.openapis.openapi.models.operations.UpdateResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.BookingOptions;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResourceRequest req = new UpdateResourceRequest(                new UpdateResourceRequest("suscipit", "repudiandae") {{
                                bookingOptions = new BookingOptions() {{
                                    autoAcceptRequests = false;
                                    autoDeclineConflictingRequests = false;
                                    autoDeclineRecurringRequests = false;
                                }};;
                                name = "Dave Cartwright";
                            }};, UpdateResourceXAmzTargetEnum.WORK_MAIL_SERVICE_UPDATE_RESOURCE) {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "labore";
                xAmzCredential = "reiciendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "accusantium";
            }};            

            UpdateResourceResponse res = sdk.sdk.updateResource(req);

            if (res.updateResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
