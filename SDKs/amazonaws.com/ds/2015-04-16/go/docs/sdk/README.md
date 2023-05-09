# SDK

## Overview

<fullname>Directory Service</fullname> <p>Directory Service is a web service that makes it easy for you to setup and run directories in the Amazon Web Services cloud, or connect your Amazon Web Services resources with an existing self-managed Microsoft Active Directory. This guide provides detailed information about Directory Service operations, data types, parameters, and errors. For information about Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">Directory Service Administration Guide</a>.</p> <note> <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to Directory Service and other Amazon Web Services services. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ds/>
### Available Operations

* [AcceptSharedDirectory](#acceptshareddirectory) - Accepts a directory sharing request that was sent from the directory owner account.
* [AddIPRoutes](#addiproutes) - <p>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [AddRegion](#addregion) - Adds two domain controllers in the specified Region for the specified directory.
* [AddTagsToResource](#addtagstoresource) - Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.
* [CancelSchemaExtension](#cancelschemaextension) - Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.
* [ConnectDirectory](#connectdirectory) - <p>Creates an AD Connector to connect to a self-managed directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [CreateAlias](#createalias) - <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>
* [CreateComputer](#createcomputer) - Creates an Active Directory computer object in the specified directory.
* [CreateConditionalForwarder](#createconditionalforwarder) - Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.
* [CreateDirectory](#createdirectory) - <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [CreateLogSubscription](#createlogsubscription) - Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.
* [CreateMicrosoftAD](#createmicrosoftad) - <p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [CreateSnapshot](#createsnapshot) - <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>
* [CreateTrust](#createtrust) - <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
* [DeleteConditionalForwarder](#deleteconditionalforwarder) - Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.
* [DeleteDirectory](#deletedirectory) - <p>Deletes an Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [DeleteLogSubscription](#deletelogsubscription) - Deletes the specified log subscription.
* [DeleteSnapshot](#deletesnapshot) - Deletes a directory snapshot.
* [DeleteTrust](#deletetrust) - Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.
* [DeregisterCertificate](#deregistercertificate) - Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.
* [DeregisterEventTopic](#deregistereventtopic) - Removes the specified directory as a publisher to the specified Amazon SNS topic.
* [DescribeCertificate](#describecertificate) - Displays information about the certificate registered for secure LDAP or client certificate authentication.
* [DescribeClientAuthenticationSettings](#describeclientauthenticationsettings) - Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported. 
* [DescribeConditionalForwarders](#describeconditionalforwarders) - <p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
* [DescribeDirectories](#describedirectories) - <p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>
* [DescribeDomainControllers](#describedomaincontrollers) - Provides information about any domain controllers in your directory.
* [DescribeEventTopics](#describeeventtopics) - <p>Obtains information about which Amazon SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
* [DescribeLDAPSSettings](#describeldapssettings) - Describes the status of LDAP security for the specified directory.
* [DescribeRegions](#describeregions) - Provides information about the Regions that are configured for multi-Region replication.
* [DescribeSettings](#describesettings) - Retrieves information about the configurable settings for the specified directory.
* [DescribeSharedDirectories](#describeshareddirectories) - Returns the shared directories in your account. 
* [DescribeSnapshots](#describesnapshots) - <p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>
* [DescribeTrusts](#describetrusts) - <p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
* [DescribeUpdateDirectory](#describeupdatedirectory) -  Describes the updates of a directory for a particular update type. 
* [DisableClientAuthentication](#disableclientauthentication) - Disables alternative client authentication methods for the specified directory. 
* [DisableLDAPS](#disableldaps) - Deactivates LDAP secure calls for the specified directory.
* [DisableRadius](#disableradius) - Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
* [DisableSso](#disablesso) - Disables single-sign on for a directory.
* [EnableClientAuthentication](#enableclientauthentication) - Enables alternative client authentication methods for the specified directory.
* [EnableLDAPS](#enableldaps) - Activates the switch for the specific directory to always use LDAP secure calls.
* [EnableRadius](#enableradius) - Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
* [EnableSso](#enablesso) - Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.
* [GetDirectoryLimits](#getdirectorylimits) - Obtains directory limit information for the current Region.
* [GetSnapshotLimits](#getsnapshotlimits) - Obtains the manual snapshot limits for a directory.
* [ListCertificates](#listcertificates) - For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.
* [ListIPRoutes](#listiproutes) - Lists the address blocks that you have added to a directory.
* [ListLogSubscriptions](#listlogsubscriptions) - Lists the active log subscriptions for the Amazon Web Services account.
* [ListSchemaExtensions](#listschemaextensions) - Lists all schema extensions applied to a Microsoft AD Directory.
* [ListTagsForResource](#listtagsforresource) - Lists all tags on a directory.
* [RegisterCertificate](#registercertificate) - Registers a certificate for a secure LDAP or client certificate authentication.
* [RegisterEventTopic](#registereventtopic) - Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.
* [RejectSharedDirectory](#rejectshareddirectory) - Rejects a directory sharing request that was sent from the directory owner account.
* [RemoveIPRoutes](#removeiproutes) - Removes IP address blocks from a directory.
* [RemoveRegion](#removeregion) - Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the <code>DeleteDirectory</code> API.
* [RemoveTagsFromResource](#removetagsfromresource) - Removes tags from a directory.
* [ResetUserPassword](#resetuserpassword) - <p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>Amazon Web Services Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration Guide</i>.</p> </li> </ul>
* [RestoreFromSnapshot](#restorefromsnapshot) - <p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>
* [ShareDirectory](#sharedirectory) - <p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p> <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>
* [StartSchemaExtension](#startschemaextension) - Applies a schema extension to a Microsoft AD directory.
* [UnshareDirectory](#unsharedirectory) - Stops the directory sharing between the directory owner and consumer accounts. 
* [UpdateConditionalForwarder](#updateconditionalforwarder) - Updates a conditional forwarder that has been set up for your Amazon Web Services directory.
* [UpdateDirectorySetup](#updatedirectorysetup) -  Updates the directory for a particular update type. 
* [UpdateNumberOfDomainControllers](#updatenumberofdomaincontrollers) - Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
* [UpdateRadius](#updateradius) - Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.
* [UpdateSettings](#updatesettings) - Updates the configurable settings for the specified directory.
* [UpdateTrust](#updatetrust) - Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.
* [VerifyTrust](#verifytrust) - <p>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</p>

## AcceptSharedDirectory

Accepts a directory sharing request that was sent from the directory owner account.

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
    res, err := s.SDK.AcceptSharedDirectory(ctx, operations.AcceptSharedDirectoryRequest{
        AcceptSharedDirectoryRequest: shared.AcceptSharedDirectoryRequest{
            SharedDirectoryID: "vel",
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
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

## AddIPRoutes

<p>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

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
    res, err := s.SDK.AddIPRoutes(ctx, operations.AddIPRoutesRequest{
        AddIPRoutesRequest: shared.AddIPRoutesRequest{
            DirectoryID: "delectus",
            IPRoutes: []shared.IPRoute{
                shared.IPRoute{
                    CidrIP: sdk.String("suscipit"),
                    Description: sdk.String("molestiae"),
                },
                shared.IPRoute{
                    CidrIP: sdk.String("minus"),
                    Description: sdk.String("placeat"),
                },
            },
            UpdateSecurityGroupForDirectoryControllers: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.AddIPRoutesXAmzTargetEnumDirectoryService20150416AddIPRoutes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddIPRoutesResult != nil {
        // handle response
    }
}
```

## AddRegion

Adds two domain controllers in the specified Region for the specified directory.

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
    res, err := s.SDK.AddRegion(ctx, operations.AddRegionRequest{
        AddRegionRequest: shared.AddRegionRequest{
            DirectoryID: "quis",
            RegionName: "veritatis",
            VPCSettings: shared.DirectoryVpcSettings{
                SubnetIds: []string{
                    "perferendis",
                    "ipsam",
                    "repellendus",
                },
                VpcID: "sapiente",
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.AddRegionXAmzTargetEnumDirectoryService20150416AddRegion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddRegionResult != nil {
        // handle response
    }
}
```

## AddTagsToResource

Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.

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
    res, err := s.SDK.AddTagsToResource(ctx, operations.AddTagsToResourceRequest{
        AddTagsToResourceRequest: shared.AddTagsToResourceRequest{
            ResourceID: "quod",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "totam",
                    Value: "porro",
                },
                shared.Tag{
                    Key: "dolorum",
                    Value: "dicta",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.AddTagsToResourceXAmzTargetEnumDirectoryService20150416AddTagsToResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddTagsToResourceResult != nil {
        // handle response
    }
}
```

## CancelSchemaExtension

Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.

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
    res, err := s.SDK.CancelSchemaExtension(ctx, operations.CancelSchemaExtensionRequest{
        CancelSchemaExtensionRequest: shared.CancelSchemaExtensionRequest{
            DirectoryID: "totam",
            SchemaExtensionID: "beatae",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.CancelSchemaExtensionXAmzTargetEnumDirectoryService20150416CancelSchemaExtension,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelSchemaExtensionResult != nil {
        // handle response
    }
}
```

## ConnectDirectory

<p>Creates an AD Connector to connect to a self-managed directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

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
    res, err := s.SDK.ConnectDirectory(ctx, operations.ConnectDirectoryRequest{
        ConnectDirectoryRequest: shared.ConnectDirectoryRequest{
            ConnectSettings: shared.DirectoryConnectSettings{
                CustomerDNSIps: []string{
                    "excepturi",
                },
                CustomerUserName: "aspernatur",
                SubnetIds: []string{
                    "ad",
                },
                VpcID: "natus",
            },
            Description: sdk.String("sed"),
            Name: "Curtis Morissette",
            Password: "saepe",
            ShortName: sdk.String("fuga"),
            Size: shared.DirectorySizeEnumSmall,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iste",
                    Value: "iure",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "quidem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.ConnectDirectoryXAmzTargetEnumDirectoryService20150416ConnectDirectory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectDirectoryResult != nil {
        // handle response
    }
}
```

## CreateAlias

<p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>

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
            Alias: "dolorem",
            DirectoryID: "corporis",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CreateAliasXAmzTargetEnumDirectoryService20150416CreateAlias,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAliasResult != nil {
        // handle response
    }
}
```

## CreateComputer

Creates an Active Directory computer object in the specified directory.

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
    res, err := s.SDK.CreateComputer(ctx, operations.CreateComputerRequest{
        CreateComputerRequest: shared.CreateComputerRequest{
            ComputerAttributes: []shared.Attribute{
                shared.Attribute{
                    Name: sdk.String("Cecilia Yundt MD"),
                    Value: sdk.String("dolorem"),
                },
            },
            ComputerName: "culpa",
            DirectoryID: "consequuntur",
            OrganizationalUnitDistinguishedName: sdk.String("repellat"),
            Password: "mollitia",
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.CreateComputerXAmzTargetEnumDirectoryService20150416CreateComputer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateComputerResult != nil {
        // handle response
    }
}
```

## CreateConditionalForwarder

Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.

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
    res, err := s.SDK.CreateConditionalForwarder(ctx, operations.CreateConditionalForwarderRequest{
        CreateConditionalForwarderRequest: shared.CreateConditionalForwarderRequest{
            DirectoryID: "quia",
            DNSIPAddrs: []string{
                "vitae",
                "laborum",
            },
            RemoteDomainName: "animi",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("tenetur"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.CreateConditionalForwarderXAmzTargetEnumDirectoryService20150416CreateConditionalForwarder,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConditionalForwarderResult != nil {
        // handle response
    }
}
```

## CreateDirectory

<p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

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
    res, err := s.SDK.CreateDirectory(ctx, operations.CreateDirectoryRequest{
        CreateDirectoryRequest: shared.CreateDirectoryRequest{
            Description: sdk.String("possimus"),
            Name: "Joyce Mueller",
            Password: "quasi",
            ShortName: sdk.String("reiciendis"),
            Size: shared.DirectorySizeEnumLarge,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nihil",
                    Value: "praesentium",
                },
                shared.Tag{
                    Key: "voluptatibus",
                    Value: "ipsa",
                },
                shared.Tag{
                    Key: "omnis",
                    Value: "voluptate",
                },
                shared.Tag{
                    Key: "cum",
                    Value: "perferendis",
                },
            },
            VpcSettings: &shared.DirectoryVpcSettings{
                SubnetIds: []string{
                    "reprehenderit",
                },
                VpcID: "ut",
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.CreateDirectoryXAmzTargetEnumDirectoryService20150416CreateDirectory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDirectoryResult != nil {
        // handle response
    }
}
```

## CreateLogSubscription

Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.

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
    res, err := s.SDK.CreateLogSubscription(ctx, operations.CreateLogSubscriptionRequest{
        CreateLogSubscriptionRequest: shared.CreateLogSubscriptionRequest{
            DirectoryID: "enim",
            LogGroupName: "accusamus",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CreateLogSubscriptionXAmzTargetEnumDirectoryService20150416CreateLogSubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLogSubscriptionResult != nil {
        // handle response
    }
}
```

## CreateMicrosoftAD

<p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

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
    res, err := s.SDK.CreateMicrosoftAD(ctx, operations.CreateMicrosoftADRequest{
        CreateMicrosoftADRequest: shared.CreateMicrosoftADRequest{
            Description: sdk.String("pariatur"),
            Edition: shared.DirectoryEditionEnumEnterprise.ToPointer(),
            Name: "Dr. Jordan Von",
            Password: "veritatis",
            ShortName: sdk.String("itaque"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "enim",
                    Value: "consequatur",
                },
                shared.Tag{
                    Key: "est",
                    Value: "quibusdam",
                },
            },
            VpcSettings: shared.DirectoryVpcSettings{
                SubnetIds: []string{
                    "deserunt",
                },
                VpcID: "distinctio",
            },
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzTarget: operations.CreateMicrosoftADXAmzTargetEnumDirectoryService20150416CreateMicrosoftAd,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMicrosoftADResult != nil {
        // handle response
    }
}
```

## CreateSnapshot

<p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>

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
    res, err := s.SDK.CreateSnapshot(ctx, operations.CreateSnapshotRequest{
        CreateSnapshotRequest: shared.CreateSnapshotRequest{
            DirectoryID: "perferendis",
            Name: sdk.String("Mr. Nadine Hills"),
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.CreateSnapshotXAmzTargetEnumDirectoryService20150416CreateSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSnapshotResult != nil {
        // handle response
    }
}
```

## CreateTrust

<p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>

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
    res, err := s.SDK.CreateTrust(ctx, operations.CreateTrustRequest{
        CreateTrustRequest: shared.CreateTrustRequest{
            ConditionalForwarderIPAddrs: []string{
                "eligendi",
            },
            DirectoryID: "sint",
            RemoteDomainName: "aliquid",
            SelectiveAuth: shared.SelectiveAuthEnumDisabled.ToPointer(),
            TrustDirection: shared.TrustDirectionEnumTwoWay,
            TrustPassword: "sint",
            TrustType: shared.TrustTypeEnumExternal.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.CreateTrustXAmzTargetEnumDirectoryService20150416CreateTrust,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTrustResult != nil {
        // handle response
    }
}
```

## DeleteConditionalForwarder

Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.

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
    res, err := s.SDK.DeleteConditionalForwarder(ctx, operations.DeleteConditionalForwarderRequest{
        DeleteConditionalForwarderRequest: shared.DeleteConditionalForwarderRequest{
            DirectoryID: "maiores",
            RemoteDomainName: "rerum",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.DeleteConditionalForwarderXAmzTargetEnumDirectoryService20150416DeleteConditionalForwarder,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConditionalForwarderResult != nil {
        // handle response
    }
}
```

## DeleteDirectory

<p>Deletes an Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

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
    res, err := s.SDK.DeleteDirectory(ctx, operations.DeleteDirectoryRequest{
        DeleteDirectoryRequest: shared.DeleteDirectoryRequest{
            DirectoryID: "accusamus",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.DeleteDirectoryXAmzTargetEnumDirectoryService20150416DeleteDirectory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDirectoryResult != nil {
        // handle response
    }
}
```

## DeleteLogSubscription

Deletes the specified log subscription.

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
    res, err := s.SDK.DeleteLogSubscription(ctx, operations.DeleteLogSubscriptionRequest{
        DeleteLogSubscriptionRequest: shared.DeleteLogSubscriptionRequest{
            DirectoryID: "nam",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.DeleteLogSubscriptionXAmzTargetEnumDirectoryService20150416DeleteLogSubscription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteLogSubscriptionResult != nil {
        // handle response
    }
}
```

## DeleteSnapshot

Deletes a directory snapshot.

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
    res, err := s.SDK.DeleteSnapshot(ctx, operations.DeleteSnapshotRequest{
        DeleteSnapshotRequest: shared.DeleteSnapshotRequest{
            SnapshotID: "vel",
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.DeleteSnapshotXAmzTargetEnumDirectoryService20150416DeleteSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSnapshotResult != nil {
        // handle response
    }
}
```

## DeleteTrust

Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.

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
    res, err := s.SDK.DeleteTrust(ctx, operations.DeleteTrustRequest{
        DeleteTrustRequest: shared.DeleteTrustRequest{
            DeleteAssociatedConditionalForwarder: sdk.Bool(false),
            TrustID: "id",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.DeleteTrustXAmzTargetEnumDirectoryService20150416DeleteTrust,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTrustResult != nil {
        // handle response
    }
}
```

## DeregisterCertificate

Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.

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
    res, err := s.SDK.DeregisterCertificate(ctx, operations.DeregisterCertificateRequest{
        DeregisterCertificateRequest: shared.DeregisterCertificateRequest{
            CertificateID: "aspernatur",
            DirectoryID: "architecto",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.DeregisterCertificateXAmzTargetEnumDirectoryService20150416DeregisterCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterCertificateResult != nil {
        // handle response
    }
}
```

## DeregisterEventTopic

Removes the specified directory as a publisher to the specified Amazon SNS topic.

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
    res, err := s.SDK.DeregisterEventTopic(ctx, operations.DeregisterEventTopicRequest{
        DeregisterEventTopicRequest: shared.DeregisterEventTopicRequest{
            DirectoryID: "accusantium",
            TopicName: "mollitia",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.DeregisterEventTopicXAmzTargetEnumDirectoryService20150416DeregisterEventTopic,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterEventTopicResult != nil {
        // handle response
    }
}
```

## DescribeCertificate

Displays information about the certificate registered for secure LDAP or client certificate authentication.

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
    res, err := s.SDK.DescribeCertificate(ctx, operations.DescribeCertificateRequest{
        DescribeCertificateRequest: shared.DescribeCertificateRequest{
            CertificateID: "nemo",
            DirectoryID: "quasi",
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DescribeCertificateXAmzTargetEnumDirectoryService20150416DescribeCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCertificateResult != nil {
        // handle response
    }
}
```

## DescribeClientAuthenticationSettings

Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported. 

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
    res, err := s.SDK.DescribeClientAuthenticationSettings(ctx, operations.DescribeClientAuthenticationSettingsRequest{
        DescribeClientAuthenticationSettingsRequest: shared.DescribeClientAuthenticationSettingsRequest{
            DirectoryID: "in",
            Limit: sdk.Int64(100226),
            NextToken: sdk.String("architecto"),
            Type: shared.ClientAuthenticationTypeEnumSmartCardOrPassword.ToPointer(),
        },
        Limit: sdk.String("ullam"),
        NextToken: sdk.String("expedita"),
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.DescribeClientAuthenticationSettingsXAmzTargetEnumDirectoryService20150416DescribeClientAuthenticationSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeClientAuthenticationSettingsResult != nil {
        // handle response
    }
}
```

## DescribeConditionalForwarders

<p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>

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
    res, err := s.SDK.DescribeConditionalForwarders(ctx, operations.DescribeConditionalForwardersRequest{
        DescribeConditionalForwardersRequest: shared.DescribeConditionalForwardersRequest{
            DirectoryID: "consequuntur",
            RemoteDomainNames: []string{
                "natus",
                "magni",
                "sunt",
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.DescribeConditionalForwardersXAmzTargetEnumDirectoryService20150416DescribeConditionalForwarders,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConditionalForwardersResult != nil {
        // handle response
    }
}
```

## DescribeDirectories

<p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>

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
    res, err := s.SDK.DescribeDirectories(ctx, operations.DescribeDirectoriesRequest{
        DescribeDirectoriesRequest: shared.DescribeDirectoriesRequest{
            DirectoryIds: []string{
                "accusantium",
                "ab",
            },
            Limit: sdk.Int64(982575),
            NextToken: sdk.String("quidem"),
        },
        Limit: sdk.String("ipsam"),
        NextToken: sdk.String("voluptate"),
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.DescribeDirectoriesXAmzTargetEnumDirectoryService20150416DescribeDirectories,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDirectoriesResult != nil {
        // handle response
    }
}
```

## DescribeDomainControllers

Provides information about any domain controllers in your directory.

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
    res, err := s.SDK.DescribeDomainControllers(ctx, operations.DescribeDomainControllersRequest{
        DescribeDomainControllersRequest: shared.DescribeDomainControllersRequest{
            DirectoryID: "fugiat",
            DomainControllerIds: []string{
                "aut",
            },
            Limit: sdk.Int64(764912),
            NextToken: sdk.String("corporis"),
        },
        Limit: sdk.String("hic"),
        NextToken: sdk.String("libero"),
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.DescribeDomainControllersXAmzTargetEnumDirectoryService20150416DescribeDomainControllers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDomainControllersResult != nil {
        // handle response
    }
}
```

## DescribeEventTopics

<p>Obtains information about which Amazon SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>

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
    res, err := s.SDK.DescribeEventTopics(ctx, operations.DescribeEventTopicsRequest{
        DescribeEventTopicsRequest: shared.DescribeEventTopicsRequest{
            DirectoryID: sdk.String("nesciunt"),
            TopicNames: []string{
                "perferendis",
            },
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.DescribeEventTopicsXAmzTargetEnumDirectoryService20150416DescribeEventTopics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEventTopicsResult != nil {
        // handle response
    }
}
```

## DescribeLDAPSSettings

Describes the status of LDAP security for the specified directory.

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
    res, err := s.SDK.DescribeLDAPSSettings(ctx, operations.DescribeLDAPSSettingsRequest{
        DescribeLDAPSSettingsRequest: shared.DescribeLDAPSSettingsRequest{
            DirectoryID: "recusandae",
            Limit: sdk.Int64(608253),
            NextToken: sdk.String("facilis"),
            Type: shared.LDAPSTypeEnumClient.ToPointer(),
        },
        Limit: sdk.String("perspiciatis"),
        NextToken: sdk.String("voluptatem"),
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.DescribeLDAPSSettingsXAmzTargetEnumDirectoryService20150416DescribeLdapsSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLDAPSSettingsResult != nil {
        // handle response
    }
}
```

## DescribeRegions

Provides information about the Regions that are configured for multi-Region replication.

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
    res, err := s.SDK.DescribeRegions(ctx, operations.DescribeRegionsRequest{
        DescribeRegionsRequest: shared.DescribeRegionsRequest{
            DirectoryID: "adipisci",
            NextToken: sdk.String("asperiores"),
            RegionName: sdk.String("earum"),
        },
        NextToken: sdk.String("modi"),
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.DescribeRegionsXAmzTargetEnumDirectoryService20150416DescribeRegions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRegionsResult != nil {
        // handle response
    }
}
```

## DescribeSettings

Retrieves information about the configurable settings for the specified directory.

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
    res, err := s.SDK.DescribeSettings(ctx, operations.DescribeSettingsRequest{
        DescribeSettingsRequest: shared.DescribeSettingsRequest{
            DirectoryID: "delectus",
            NextToken: sdk.String("quaerat"),
            Status: shared.DirectoryConfigurationStatusEnumUpdated.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.DescribeSettingsXAmzTargetEnumDirectoryService20150416DescribeSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSettingsResult != nil {
        // handle response
    }
}
```

## DescribeSharedDirectories

Returns the shared directories in your account. 

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
    res, err := s.SDK.DescribeSharedDirectories(ctx, operations.DescribeSharedDirectoriesRequest{
        DescribeSharedDirectoriesRequest: shared.DescribeSharedDirectoriesRequest{
            Limit: sdk.Int64(569574),
            NextToken: sdk.String("cum"),
            OwnerDirectoryID: "voluptate",
            SharedDirectoryIds: []string{
                "reiciendis",
                "amet",
            },
        },
        Limit: sdk.String("dolorum"),
        NextToken: sdk.String("numquam"),
        XAmzAlgorithm: sdk.String("veritatis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.DescribeSharedDirectoriesXAmzTargetEnumDirectoryService20150416DescribeSharedDirectories,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSharedDirectoriesResult != nil {
        // handle response
    }
}
```

## DescribeSnapshots

<p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>

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
    res, err := s.SDK.DescribeSnapshots(ctx, operations.DescribeSnapshotsRequest{
        DescribeSnapshotsRequest: shared.DescribeSnapshotsRequest{
            DirectoryID: sdk.String("quidem"),
            Limit: sdk.Int64(976405),
            NextToken: sdk.String("voluptas"),
            SnapshotIds: []string{
                "eos",
                "atque",
                "sit",
            },
        },
        Limit: sdk.String("fugiat"),
        NextToken: sdk.String("ab"),
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.DescribeSnapshotsXAmzTargetEnumDirectoryService20150416DescribeSnapshots,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSnapshotsResult != nil {
        // handle response
    }
}
```

## DescribeTrusts

<p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>

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
    res, err := s.SDK.DescribeTrusts(ctx, operations.DescribeTrustsRequest{
        DescribeTrustsRequest: shared.DescribeTrustsRequest{
            DirectoryID: sdk.String("necessitatibus"),
            Limit: sdk.Int64(714697),
            NextToken: sdk.String("asperiores"),
            TrustIds: []string{
                "ipsum",
                "voluptate",
            },
        },
        Limit: sdk.String("id"),
        NextToken: sdk.String("saepe"),
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.DescribeTrustsXAmzTargetEnumDirectoryService20150416DescribeTrusts,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTrustsResult != nil {
        // handle response
    }
}
```

## DescribeUpdateDirectory

 Describes the updates of a directory for a particular update type. 

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
    res, err := s.SDK.DescribeUpdateDirectory(ctx, operations.DescribeUpdateDirectoryRequest{
        DescribeUpdateDirectoryRequest: shared.DescribeUpdateDirectoryRequest{
            DirectoryID: "saepe",
            NextToken: sdk.String("suscipit"),
            RegionName: sdk.String("deserunt"),
            UpdateType: shared.UpdateTypeEnumOs,
        },
        NextToken: sdk.String("provident"),
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.DescribeUpdateDirectoryXAmzTargetEnumDirectoryService20150416DescribeUpdateDirectory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUpdateDirectoryResult != nil {
        // handle response
    }
}
```

## DisableClientAuthentication

Disables alternative client authentication methods for the specified directory. 

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
    res, err := s.SDK.DisableClientAuthentication(ctx, operations.DisableClientAuthenticationRequest{
        DisableClientAuthenticationRequest: shared.DisableClientAuthenticationRequest{
            DirectoryID: "tempora",
            Type: shared.ClientAuthenticationTypeEnumSmartCard,
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.DisableClientAuthenticationXAmzTargetEnumDirectoryService20150416DisableClientAuthentication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableClientAuthenticationResult != nil {
        // handle response
    }
}
```

## DisableLDAPS

Deactivates LDAP secure calls for the specified directory.

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
    res, err := s.SDK.DisableLDAPS(ctx, operations.DisableLDAPSRequest{
        DisableLDAPSRequest: shared.DisableLDAPSRequest{
            DirectoryID: "iusto",
            Type: shared.LDAPSTypeEnumClient,
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.DisableLDAPSXAmzTargetEnumDirectoryService20150416DisableLdaps,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableLDAPSResult != nil {
        // handle response
    }
}
```

## DisableRadius

Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.

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
    res, err := s.SDK.DisableRadius(ctx, operations.DisableRadiusRequest{
        DisableRadiusRequest: shared.DisableRadiusRequest{
            DirectoryID: "enim",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.DisableRadiusXAmzTargetEnumDirectoryService20150416DisableRadius,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableRadiusResult != nil {
        // handle response
    }
}
```

## DisableSso

Disables single-sign on for a directory.

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
    res, err := s.SDK.DisableSso(ctx, operations.DisableSsoRequest{
        DisableSsoRequest: shared.DisableSsoRequest{
            DirectoryID: "sed",
            Password: sdk.String("vel"),
            UserName: sdk.String("Moriah.Hintz"),
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.DisableSsoXAmzTargetEnumDirectoryService20150416DisableSso,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableSsoResult != nil {
        // handle response
    }
}
```

## EnableClientAuthentication

Enables alternative client authentication methods for the specified directory.

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
    res, err := s.SDK.EnableClientAuthentication(ctx, operations.EnableClientAuthenticationRequest{
        EnableClientAuthenticationRequest: shared.EnableClientAuthenticationRequest{
            DirectoryID: "dicta",
            Type: shared.ClientAuthenticationTypeEnumSmartCardOrPassword,
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.EnableClientAuthenticationXAmzTargetEnumDirectoryService20150416EnableClientAuthentication,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableClientAuthenticationResult != nil {
        // handle response
    }
}
```

## EnableLDAPS

Activates the switch for the specific directory to always use LDAP secure calls.

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
    res, err := s.SDK.EnableLDAPS(ctx, operations.EnableLDAPSRequest{
        EnableLDAPSRequest: shared.EnableLDAPSRequest{
            DirectoryID: "quam",
            Type: shared.LDAPSTypeEnumClient,
        },
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.EnableLDAPSXAmzTargetEnumDirectoryService20150416EnableLdaps,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableLDAPSResult != nil {
        // handle response
    }
}
```

## EnableRadius

Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.

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
    res, err := s.SDK.EnableRadius(ctx, operations.EnableRadiusRequest{
        EnableRadiusRequest: shared.EnableRadiusRequest{
            DirectoryID: "sunt",
            RadiusSettings: shared.RadiusSettings{
                AuthenticationProtocol: shared.RadiusAuthenticationProtocolEnumChap.ToPointer(),
                DisplayLabel: sdk.String("nam"),
                RadiusPort: sdk.Int64(940432),
                RadiusRetries: sdk.Int64(30452),
                RadiusServers: []string{
                    "soluta",
                    "nobis",
                    "et",
                    "saepe",
                },
                RadiusTimeout: sdk.Int64(217450),
                SharedSecret: sdk.String("veritatis"),
                UseSameUsername: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("cupiditate"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.EnableRadiusXAmzTargetEnumDirectoryService20150416EnableRadius,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableRadiusResult != nil {
        // handle response
    }
}
```

## EnableSso

Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.

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
    res, err := s.SDK.EnableSso(ctx, operations.EnableSsoRequest{
        EnableSsoRequest: shared.EnableSsoRequest{
            DirectoryID: "dolore",
            Password: sdk.String("labore"),
            UserName: sdk.String("Dayna6"),
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.EnableSsoXAmzTargetEnumDirectoryService20150416EnableSso,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableSsoResult != nil {
        // handle response
    }
}
```

## GetDirectoryLimits

Obtains directory limit information for the current Region.

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
    res, err := s.SDK.GetDirectoryLimits(ctx, operations.GetDirectoryLimitsRequest{
        RequestBody: map[string]interface{}{
            "ut": "facilis",
            "cupiditate": "qui",
            "quae": "laudantium",
            "odio": "occaecati",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.GetDirectoryLimitsXAmzTargetEnumDirectoryService20150416GetDirectoryLimits,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDirectoryLimitsResult != nil {
        // handle response
    }
}
```

## GetSnapshotLimits

Obtains the manual snapshot limits for a directory.

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
    res, err := s.SDK.GetSnapshotLimits(ctx, operations.GetSnapshotLimitsRequest{
        GetSnapshotLimitsRequest: shared.GetSnapshotLimitsRequest{
            DirectoryID: "voluptate",
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.GetSnapshotLimitsXAmzTargetEnumDirectoryService20150416GetSnapshotLimits,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSnapshotLimitsResult != nil {
        // handle response
    }
}
```

## ListCertificates

For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.

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
    res, err := s.SDK.ListCertificates(ctx, operations.ListCertificatesRequest{
        Limit: sdk.String("odio"),
        ListCertificatesRequest: shared.ListCertificatesRequest{
            DirectoryID: "similique",
            Limit: sdk.Int64(708548),
            NextToken: sdk.String("vero"),
        },
        NextToken: sdk.String("ducimus"),
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.ListCertificatesXAmzTargetEnumDirectoryService20150416ListCertificates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCertificatesResult != nil {
        // handle response
    }
}
```

## ListIPRoutes

Lists the address blocks that you have added to a directory.

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
    res, err := s.SDK.ListIPRoutes(ctx, operations.ListIPRoutesRequest{
        Limit: sdk.String("voluptatibus"),
        ListIPRoutesRequest: shared.ListIPRoutesRequest{
            DirectoryID: "exercitationem",
            Limit: sdk.Int64(862310),
            NextToken: sdk.String("fugit"),
        },
        NextToken: sdk.String("porro"),
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("ducimus"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.ListIPRoutesXAmzTargetEnumDirectoryService20150416ListIPRoutes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIPRoutesResult != nil {
        // handle response
    }
}
```

## ListLogSubscriptions

Lists the active log subscriptions for the Amazon Web Services account.

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
    res, err := s.SDK.ListLogSubscriptions(ctx, operations.ListLogSubscriptionsRequest{
        Limit: sdk.String("tempora"),
        ListLogSubscriptionsRequest: shared.ListLogSubscriptionsRequest{
            DirectoryID: sdk.String("ipsam"),
            Limit: sdk.Int64(410492),
            NextToken: sdk.String("aspernatur"),
        },
        NextToken: sdk.String("vel"),
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ratione"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.ListLogSubscriptionsXAmzTargetEnumDirectoryService20150416ListLogSubscriptions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLogSubscriptionsResult != nil {
        // handle response
    }
}
```

## ListSchemaExtensions

Lists all schema extensions applied to a Microsoft AD Directory.

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
    res, err := s.SDK.ListSchemaExtensions(ctx, operations.ListSchemaExtensionsRequest{
        Limit: sdk.String("maiores"),
        ListSchemaExtensionsRequest: shared.ListSchemaExtensionsRequest{
            DirectoryID: "quasi",
            Limit: sdk.Int64(406120),
            NextToken: sdk.String("nulla"),
        },
        NextToken: sdk.String("excepturi"),
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.ListSchemaExtensionsXAmzTargetEnumDirectoryService20150416ListSchemaExtensions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSchemaExtensionsResult != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all tags on a directory.

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
        Limit: sdk.String("corporis"),
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            Limit: sdk.Int64(333145),
            NextToken: sdk.String("aliquid"),
            ResourceID: "inventore",
        },
        NextToken: sdk.String("magnam"),
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("eaque"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumDirectoryService20150416ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResult != nil {
        // handle response
    }
}
```

## RegisterCertificate

Registers a certificate for a secure LDAP or client certificate authentication.

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
    res, err := s.SDK.RegisterCertificate(ctx, operations.RegisterCertificateRequest{
        RegisterCertificateRequest: shared.RegisterCertificateRequest{
            CertificateData: "a",
            ClientCertAuthSettings: &shared.ClientCertAuthSettings{
                OCSPURL: sdk.String("libero"),
            },
            DirectoryID: "aut",
            Type: shared.CertificateTypeEnumClientCertAuth.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.RegisterCertificateXAmzTargetEnumDirectoryService20150416RegisterCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterCertificateResult != nil {
        // handle response
    }
}
```

## RegisterEventTopic

Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.

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
    res, err := s.SDK.RegisterEventTopic(ctx, operations.RegisterEventTopicRequest{
        RegisterEventTopicRequest: shared.RegisterEventTopicRequest{
            DirectoryID: "et",
            TopicName: "dolorum",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.RegisterEventTopicXAmzTargetEnumDirectoryService20150416RegisterEventTopic,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterEventTopicResult != nil {
        // handle response
    }
}
```

## RejectSharedDirectory

Rejects a directory sharing request that was sent from the directory owner account.

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
    res, err := s.SDK.RejectSharedDirectory(ctx, operations.RejectSharedDirectoryRequest{
        RejectSharedDirectoryRequest: shared.RejectSharedDirectoryRequest{
            SharedDirectoryID: "assumenda",
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.RejectSharedDirectoryXAmzTargetEnumDirectoryService20150416RejectSharedDirectory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RejectSharedDirectoryResult != nil {
        // handle response
    }
}
```

## RemoveIPRoutes

Removes IP address blocks from a directory.

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
    res, err := s.SDK.RemoveIPRoutes(ctx, operations.RemoveIPRoutesRequest{
        RemoveIPRoutesRequest: shared.RemoveIPRoutesRequest{
            CidrIps: []string{
                "ipsa",
                "molestiae",
                "magnam",
            },
            DirectoryID: "odio",
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.RemoveIPRoutesXAmzTargetEnumDirectoryService20150416RemoveIPRoutes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveIPRoutesResult != nil {
        // handle response
    }
}
```

## RemoveRegion

Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the <code>DeleteDirectory</code> API.

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
    res, err := s.SDK.RemoveRegion(ctx, operations.RemoveRegionRequest{
        RemoveRegionRequest: shared.RemoveRegionRequest{
            DirectoryID: "fugiat",
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("assumenda"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.RemoveRegionXAmzTargetEnumDirectoryService20150416RemoveRegion,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveRegionResult != nil {
        // handle response
    }
}
```

## RemoveTagsFromResource

Removes tags from a directory.

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
    res, err := s.SDK.RemoveTagsFromResource(ctx, operations.RemoveTagsFromResourceRequest{
        RemoveTagsFromResourceRequest: shared.RemoveTagsFromResourceRequest{
            ResourceID: "veritatis",
            TagKeys: []string{
                "id",
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.RemoveTagsFromResourceXAmzTargetEnumDirectoryService20150416RemoveTagsFromResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveTagsFromResourceResult != nil {
        // handle response
    }
}
```

## ResetUserPassword

<p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>Amazon Web Services Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration Guide</i>.</p> </li> </ul>

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
    res, err := s.SDK.ResetUserPassword(ctx, operations.ResetUserPasswordRequest{
        ResetUserPasswordRequest: shared.ResetUserPasswordRequest{
            DirectoryID: "eos",
            NewPassword: "voluptas",
            UserName: "Ansley27",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.ResetUserPasswordXAmzTargetEnumDirectoryService20150416ResetUserPassword,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResetUserPasswordResult != nil {
        // handle response
    }
}
```

## RestoreFromSnapshot

<p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>

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
    res, err := s.SDK.RestoreFromSnapshot(ctx, operations.RestoreFromSnapshotRequest{
        RestoreFromSnapshotRequest: shared.RestoreFromSnapshotRequest{
            SnapshotID: "aperiam",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.RestoreFromSnapshotXAmzTargetEnumDirectoryService20150416RestoreFromSnapshot,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreFromSnapshotResult != nil {
        // handle response
    }
}
```

## ShareDirectory

<p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p> <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>

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
    res, err := s.SDK.ShareDirectory(ctx, operations.ShareDirectoryRequest{
        ShareDirectoryRequest: shared.ShareDirectoryRequest{
            DirectoryID: "aliquam",
            ShareMethod: shared.ShareMethodEnumOrganizations,
            ShareNotes: sdk.String("occaecati"),
            ShareTarget: shared.ShareTarget{
                ID: "6f2a70c6-8828-42aa-8825-62f222e9817e",
                Type: shared.TargetTypeEnumAccount,
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.ShareDirectoryXAmzTargetEnumDirectoryService20150416ShareDirectory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShareDirectoryResult != nil {
        // handle response
    }
}
```

## StartSchemaExtension

Applies a schema extension to a Microsoft AD directory.

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
    res, err := s.SDK.StartSchemaExtension(ctx, operations.StartSchemaExtensionRequest{
        StartSchemaExtensionRequest: shared.StartSchemaExtensionRequest{
            CreateSnapshotBeforeSchemaExtension: false,
            Description: "quasi",
            DirectoryID: "saepe",
            LdifContent: "vel",
        },
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.StartSchemaExtensionXAmzTargetEnumDirectoryService20150416StartSchemaExtension,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartSchemaExtensionResult != nil {
        // handle response
    }
}
```

## UnshareDirectory

Stops the directory sharing between the directory owner and consumer accounts. 

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
    res, err := s.SDK.UnshareDirectory(ctx, operations.UnshareDirectoryRequest{
        UnshareDirectoryRequest: shared.UnshareDirectoryRequest{
            DirectoryID: "sit",
            UnshareTarget: shared.UnshareTarget{
                ID: "ab3c20c4-f378-49fd-871f-99dd2efd121a",
                Type: shared.TargetTypeEnumAccount,
            },
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.UnshareDirectoryXAmzTargetEnumDirectoryService20150416UnshareDirectory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnshareDirectoryResult != nil {
        // handle response
    }
}
```

## UpdateConditionalForwarder

Updates a conditional forwarder that has been set up for your Amazon Web Services directory.

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
    res, err := s.SDK.UpdateConditionalForwarder(ctx, operations.UpdateConditionalForwarderRequest{
        UpdateConditionalForwarderRequest: shared.UpdateConditionalForwarderRequest{
            DirectoryID: "eius",
            DNSIPAddrs: []string{
                "illum",
                "soluta",
                "accusantium",
            },
            RemoteDomainName: "aliquam",
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("reprehenderit"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.UpdateConditionalForwarderXAmzTargetEnumDirectoryService20150416UpdateConditionalForwarder,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConditionalForwarderResult != nil {
        // handle response
    }
}
```

## UpdateDirectorySetup

 Updates the directory for a particular update type. 

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
    res, err := s.SDK.UpdateDirectorySetup(ctx, operations.UpdateDirectorySetupRequest{
        UpdateDirectorySetupRequest: shared.UpdateDirectorySetupRequest{
            CreateSnapshotBeforeUpdate: sdk.Bool(false),
            DirectoryID: "voluptatum",
            OSUpdateSettings: &shared.OSUpdateSettings{
                OSVersion: shared.OSVersionEnumServer2012.ToPointer(),
            },
            UpdateType: shared.UpdateTypeEnumOs,
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.UpdateDirectorySetupXAmzTargetEnumDirectoryService20150416UpdateDirectorySetup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDirectorySetupResult != nil {
        // handle response
    }
}
```

## UpdateNumberOfDomainControllers

Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.

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
    res, err := s.SDK.UpdateNumberOfDomainControllers(ctx, operations.UpdateNumberOfDomainControllersRequest{
        UpdateNumberOfDomainControllersRequest: shared.UpdateNumberOfDomainControllersRequest{
            DesiredNumber: 945302,
            DirectoryID: "quasi",
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.UpdateNumberOfDomainControllersXAmzTargetEnumDirectoryService20150416UpdateNumberOfDomainControllers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNumberOfDomainControllersResult != nil {
        // handle response
    }
}
```

## UpdateRadius

Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.

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
    res, err := s.SDK.UpdateRadius(ctx, operations.UpdateRadiusRequest{
        UpdateRadiusRequest: shared.UpdateRadiusRequest{
            DirectoryID: "adipisci",
            RadiusSettings: shared.RadiusSettings{
                AuthenticationProtocol: shared.RadiusAuthenticationProtocolEnumMsChaPv1.ToPointer(),
                DisplayLabel: sdk.String("temporibus"),
                RadiusPort: sdk.Int64(33074),
                RadiusRetries: sdk.Int64(522371),
                RadiusServers: []string{
                    "laudantium",
                },
                RadiusTimeout: sdk.Int64(428796),
                SharedSecret: sdk.String("mollitia"),
                UseSameUsername: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.UpdateRadiusXAmzTargetEnumDirectoryService20150416UpdateRadius,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRadiusResult != nil {
        // handle response
    }
}
```

## UpdateSettings

Updates the configurable settings for the specified directory.

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
    res, err := s.SDK.UpdateSettings(ctx, operations.UpdateSettingsRequest{
        UpdateSettingsRequest: shared.UpdateSettingsRequest{
            DirectoryID: "impedit",
            Settings: []shared.Setting{
                shared.Setting{
                    Name: "Dr. Maria Kulas",
                    Value: "velit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.UpdateSettingsXAmzTargetEnumDirectoryService20150416UpdateSettings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSettingsResult != nil {
        // handle response
    }
}
```

## UpdateTrust

Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.

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
    res, err := s.SDK.UpdateTrust(ctx, operations.UpdateTrustRequest{
        UpdateTrustRequest: shared.UpdateTrustRequest{
            SelectiveAuth: shared.SelectiveAuthEnumDisabled.ToPointer(),
            TrustID: "officia",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.UpdateTrustXAmzTargetEnumDirectoryService20150416UpdateTrust,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTrustResult != nil {
        // handle response
    }
}
```

## VerifyTrust

<p>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</p>

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
    res, err := s.SDK.VerifyTrust(ctx, operations.VerifyTrustRequest{
        VerifyTrustRequest: shared.VerifyTrustRequest{
            TrustID: "porro",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("adipisci"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.VerifyTrustXAmzTargetEnumDirectoryService20150416VerifyTrust,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyTrustResult != nil {
        // handle response
    }
}
```
