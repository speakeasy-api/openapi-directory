# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/ds/2015-04-16/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.AcceptSharedDirectory(ctx, operations.AcceptSharedDirectoryRequest{
        AcceptSharedDirectoryRequest: shared.AcceptSharedDirectoryRequest{
            SharedDirectoryID: "corrupti",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.AcceptSharedDirectoryXAmzTargetEnumDirectoryService20150416AcceptSharedDirectory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptSharedDirectoryResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AcceptSharedDirectory](docs/sdk/README.md#acceptshareddirectory) - Accepts a directory sharing request that was sent from the directory owner account.
* [AddIPRoutes](docs/sdk/README.md#addiproutes) - <p>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [AddRegion](docs/sdk/README.md#addregion) - Adds two domain controllers in the specified Region for the specified directory.
* [AddTagsToResource](docs/sdk/README.md#addtagstoresource) - Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.
* [CancelSchemaExtension](docs/sdk/README.md#cancelschemaextension) - Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.
* [ConnectDirectory](docs/sdk/README.md#connectdirectory) - <p>Creates an AD Connector to connect to a self-managed directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [CreateAlias](docs/sdk/README.md#createalias) - <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>
* [CreateComputer](docs/sdk/README.md#createcomputer) - Creates an Active Directory computer object in the specified directory.
* [CreateConditionalForwarder](docs/sdk/README.md#createconditionalforwarder) - Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.
* [CreateDirectory](docs/sdk/README.md#createdirectory) - <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [CreateLogSubscription](docs/sdk/README.md#createlogsubscription) - Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.
* [CreateMicrosoftAD](docs/sdk/README.md#createmicrosoftad) - <p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [CreateSnapshot](docs/sdk/README.md#createsnapshot) - <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>
* [CreateTrust](docs/sdk/README.md#createtrust) - <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
* [DeleteConditionalForwarder](docs/sdk/README.md#deleteconditionalforwarder) - Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.
* [DeleteDirectory](docs/sdk/README.md#deletedirectory) - <p>Deletes an Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [DeleteLogSubscription](docs/sdk/README.md#deletelogsubscription) - Deletes the specified log subscription.
* [DeleteSnapshot](docs/sdk/README.md#deletesnapshot) - Deletes a directory snapshot.
* [DeleteTrust](docs/sdk/README.md#deletetrust) - Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.
* [DeregisterCertificate](docs/sdk/README.md#deregistercertificate) - Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.
* [DeregisterEventTopic](docs/sdk/README.md#deregistereventtopic) - Removes the specified directory as a publisher to the specified Amazon SNS topic.
* [DescribeCertificate](docs/sdk/README.md#describecertificate) - Displays information about the certificate registered for secure LDAP or client certificate authentication.
* [DescribeClientAuthenticationSettings](docs/sdk/README.md#describeclientauthenticationsettings) - Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported. 
* [DescribeConditionalForwarders](docs/sdk/README.md#describeconditionalforwarders) - <p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
* [DescribeDirectories](docs/sdk/README.md#describedirectories) - <p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>
* [DescribeDomainControllers](docs/sdk/README.md#describedomaincontrollers) - Provides information about any domain controllers in your directory.
* [DescribeEventTopics](docs/sdk/README.md#describeeventtopics) - <p>Obtains information about which Amazon SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
* [DescribeLDAPSSettings](docs/sdk/README.md#describeldapssettings) - Describes the status of LDAP security for the specified directory.
* [DescribeRegions](docs/sdk/README.md#describeregions) - Provides information about the Regions that are configured for multi-Region replication.
* [DescribeSettings](docs/sdk/README.md#describesettings) - Retrieves information about the configurable settings for the specified directory.
* [DescribeSharedDirectories](docs/sdk/README.md#describeshareddirectories) - Returns the shared directories in your account. 
* [DescribeSnapshots](docs/sdk/README.md#describesnapshots) - <p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>
* [DescribeTrusts](docs/sdk/README.md#describetrusts) - <p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
* [DescribeUpdateDirectory](docs/sdk/README.md#describeupdatedirectory) -  Describes the updates of a directory for a particular update type. 
* [DisableClientAuthentication](docs/sdk/README.md#disableclientauthentication) - Disables alternative client authentication methods for the specified directory. 
* [DisableLDAPS](docs/sdk/README.md#disableldaps) - Deactivates LDAP secure calls for the specified directory.
* [DisableRadius](docs/sdk/README.md#disableradius) - Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
* [DisableSso](docs/sdk/README.md#disablesso) - Disables single-sign on for a directory.
* [EnableClientAuthentication](docs/sdk/README.md#enableclientauthentication) - Enables alternative client authentication methods for the specified directory.
* [EnableLDAPS](docs/sdk/README.md#enableldaps) - Activates the switch for the specific directory to always use LDAP secure calls.
* [EnableRadius](docs/sdk/README.md#enableradius) - Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
* [EnableSso](docs/sdk/README.md#enablesso) - Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.
* [GetDirectoryLimits](docs/sdk/README.md#getdirectorylimits) - Obtains directory limit information for the current Region.
* [GetSnapshotLimits](docs/sdk/README.md#getsnapshotlimits) - Obtains the manual snapshot limits for a directory.
* [ListCertificates](docs/sdk/README.md#listcertificates) - For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.
* [ListIPRoutes](docs/sdk/README.md#listiproutes) - Lists the address blocks that you have added to a directory.
* [ListLogSubscriptions](docs/sdk/README.md#listlogsubscriptions) - Lists the active log subscriptions for the Amazon Web Services account.
* [ListSchemaExtensions](docs/sdk/README.md#listschemaextensions) - Lists all schema extensions applied to a Microsoft AD Directory.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags on a directory.
* [RegisterCertificate](docs/sdk/README.md#registercertificate) - Registers a certificate for a secure LDAP or client certificate authentication.
* [RegisterEventTopic](docs/sdk/README.md#registereventtopic) - Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.
* [RejectSharedDirectory](docs/sdk/README.md#rejectshareddirectory) - Rejects a directory sharing request that was sent from the directory owner account.
* [RemoveIPRoutes](docs/sdk/README.md#removeiproutes) - Removes IP address blocks from a directory.
* [RemoveRegion](docs/sdk/README.md#removeregion) - Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the <code>DeleteDirectory</code> API.
* [RemoveTagsFromResource](docs/sdk/README.md#removetagsfromresource) - Removes tags from a directory.
* [ResetUserPassword](docs/sdk/README.md#resetuserpassword) - <p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>Amazon Web Services Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration Guide</i>.</p> </li> </ul>
* [RestoreFromSnapshot](docs/sdk/README.md#restorefromsnapshot) - <p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>
* [ShareDirectory](docs/sdk/README.md#sharedirectory) - <p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p> <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>
* [StartSchemaExtension](docs/sdk/README.md#startschemaextension) - Applies a schema extension to a Microsoft AD directory.
* [UnshareDirectory](docs/sdk/README.md#unsharedirectory) - Stops the directory sharing between the directory owner and consumer accounts. 
* [UpdateConditionalForwarder](docs/sdk/README.md#updateconditionalforwarder) - Updates a conditional forwarder that has been set up for your Amazon Web Services directory.
* [UpdateDirectorySetup](docs/sdk/README.md#updatedirectorysetup) -  Updates the directory for a particular update type. 
* [UpdateNumberOfDomainControllers](docs/sdk/README.md#updatenumberofdomaincontrollers) - Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
* [UpdateRadius](docs/sdk/README.md#updateradius) - Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.
* [UpdateSettings](docs/sdk/README.md#updatesettings) - Updates the configurable settings for the specified directory.
* [UpdateTrust](docs/sdk/README.md#updatetrust) - Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.
* [VerifyTrust](docs/sdk/README.md#verifytrust) - <p>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
