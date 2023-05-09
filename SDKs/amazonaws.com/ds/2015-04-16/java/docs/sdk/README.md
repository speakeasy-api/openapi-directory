# SDK

## Overview

<fullname>Directory Service</fullname> <p>Directory Service is a web service that makes it easy for you to setup and run directories in the Amazon Web Services cloud, or connect your Amazon Web Services resources with an existing self-managed Microsoft Active Directory. This guide provides detailed information about Directory Service operations, data types, parameters, and errors. For information about Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">Directory Service Administration Guide</a>.</p> <note> <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to Directory Service and other Amazon Web Services services. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ds/>
### Available Operations

* [acceptSharedDirectory](#acceptshareddirectory) - Accepts a directory sharing request that was sent from the directory owner account.
* [addIpRoutes](#addiproutes) - <p>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [addRegion](#addregion) - Adds two domain controllers in the specified Region for the specified directory.
* [addTagsToResource](#addtagstoresource) - Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.
* [cancelSchemaExtension](#cancelschemaextension) - Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.
* [connectDirectory](#connectdirectory) - <p>Creates an AD Connector to connect to a self-managed directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [createAlias](#createalias) - <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>
* [createComputer](#createcomputer) - Creates an Active Directory computer object in the specified directory.
* [createConditionalForwarder](#createconditionalforwarder) - Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.
* [createDirectory](#createdirectory) - <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [createLogSubscription](#createlogsubscription) - Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.
* [createMicrosoftAD](#createmicrosoftad) - <p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [createSnapshot](#createsnapshot) - <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>
* [createTrust](#createtrust) - <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
* [deleteConditionalForwarder](#deleteconditionalforwarder) - Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.
* [deleteDirectory](#deletedirectory) - <p>Deletes an Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
* [deleteLogSubscription](#deletelogsubscription) - Deletes the specified log subscription.
* [deleteSnapshot](#deletesnapshot) - Deletes a directory snapshot.
* [deleteTrust](#deletetrust) - Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.
* [deregisterCertificate](#deregistercertificate) - Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.
* [deregisterEventTopic](#deregistereventtopic) - Removes the specified directory as a publisher to the specified Amazon SNS topic.
* [describeCertificate](#describecertificate) - Displays information about the certificate registered for secure LDAP or client certificate authentication.
* [describeClientAuthenticationSettings](#describeclientauthenticationsettings) - Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported. 
* [describeConditionalForwarders](#describeconditionalforwarders) - <p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
* [describeDirectories](#describedirectories) - <p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>
* [describeDomainControllers](#describedomaincontrollers) - Provides information about any domain controllers in your directory.
* [describeEventTopics](#describeeventtopics) - <p>Obtains information about which Amazon SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
* [describeLDAPSSettings](#describeldapssettings) - Describes the status of LDAP security for the specified directory.
* [describeRegions](#describeregions) - Provides information about the Regions that are configured for multi-Region replication.
* [describeSettings](#describesettings) - Retrieves information about the configurable settings for the specified directory.
* [describeSharedDirectories](#describeshareddirectories) - Returns the shared directories in your account. 
* [describeSnapshots](#describesnapshots) - <p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>
* [describeTrusts](#describetrusts) - <p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
* [describeUpdateDirectory](#describeupdatedirectory) -  Describes the updates of a directory for a particular update type. 
* [disableClientAuthentication](#disableclientauthentication) - Disables alternative client authentication methods for the specified directory. 
* [disableLDAPS](#disableldaps) - Deactivates LDAP secure calls for the specified directory.
* [disableRadius](#disableradius) - Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
* [disableSso](#disablesso) - Disables single-sign on for a directory.
* [enableClientAuthentication](#enableclientauthentication) - Enables alternative client authentication methods for the specified directory.
* [enableLDAPS](#enableldaps) - Activates the switch for the specific directory to always use LDAP secure calls.
* [enableRadius](#enableradius) - Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
* [enableSso](#enablesso) - Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.
* [getDirectoryLimits](#getdirectorylimits) - Obtains directory limit information for the current Region.
* [getSnapshotLimits](#getsnapshotlimits) - Obtains the manual snapshot limits for a directory.
* [listCertificates](#listcertificates) - For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.
* [listIpRoutes](#listiproutes) - Lists the address blocks that you have added to a directory.
* [listLogSubscriptions](#listlogsubscriptions) - Lists the active log subscriptions for the Amazon Web Services account.
* [listSchemaExtensions](#listschemaextensions) - Lists all schema extensions applied to a Microsoft AD Directory.
* [listTagsForResource](#listtagsforresource) - Lists all tags on a directory.
* [registerCertificate](#registercertificate) - Registers a certificate for a secure LDAP or client certificate authentication.
* [registerEventTopic](#registereventtopic) - Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.
* [rejectSharedDirectory](#rejectshareddirectory) - Rejects a directory sharing request that was sent from the directory owner account.
* [removeIpRoutes](#removeiproutes) - Removes IP address blocks from a directory.
* [removeRegion](#removeregion) - Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the <code>DeleteDirectory</code> API.
* [removeTagsFromResource](#removetagsfromresource) - Removes tags from a directory.
* [resetUserPassword](#resetuserpassword) - <p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>Amazon Web Services Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration Guide</i>.</p> </li> </ul>
* [restoreFromSnapshot](#restorefromsnapshot) - <p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>
* [shareDirectory](#sharedirectory) - <p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p> <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>
* [startSchemaExtension](#startschemaextension) - Applies a schema extension to a Microsoft AD directory.
* [unshareDirectory](#unsharedirectory) - Stops the directory sharing between the directory owner and consumer accounts. 
* [updateConditionalForwarder](#updateconditionalforwarder) - Updates a conditional forwarder that has been set up for your Amazon Web Services directory.
* [updateDirectorySetup](#updatedirectorysetup) -  Updates the directory for a particular update type. 
* [updateNumberOfDomainControllers](#updatenumberofdomaincontrollers) - Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
* [updateRadius](#updateradius) - Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.
* [updateSettings](#updatesettings) - Updates the configurable settings for the specified directory.
* [updateTrust](#updatetrust) - Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.
* [verifyTrust](#verifytrust) - <p>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</p>

## acceptSharedDirectory

Accepts a directory sharing request that was sent from the directory owner account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryRequest;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryResponse;
import org.openapis.openapi.models.operations.AcceptSharedDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptSharedDirectoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptSharedDirectoryRequest req = new AcceptSharedDirectoryRequest(                new AcceptSharedDirectoryRequest("deserunt");, AcceptSharedDirectoryXAmzTargetEnum.DIRECTORY_SERVICE20150416_ACCEPT_SHARED_DIRECTORY) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            AcceptSharedDirectoryResponse res = sdk.sdk.acceptSharedDirectory(req);

            if (res.acceptSharedDirectoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addIpRoutes

<p>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddIpRoutesRequest;
import org.openapis.openapi.models.operations.AddIpRoutesResponse;
import org.openapis.openapi.models.operations.AddIpRoutesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddIpRoutesRequest;
import org.openapis.openapi.models.shared.IpRoute;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddIpRoutesRequest req = new AddIpRoutesRequest(                new AddIpRoutesRequest("molestiae",                 new org.openapis.openapi.models.shared.IpRoute[]{{
                                                add(new IpRoute() {{
                                                    cidrIp = "placeat";
                                                    description = "voluptatum";
                                                }}),
                                                add(new IpRoute() {{
                                                    cidrIp = "iusto";
                                                    description = "excepturi";
                                                }}),
                                                add(new IpRoute() {{
                                                    cidrIp = "nisi";
                                                    description = "recusandae";
                                                }}),
                                                add(new IpRoute() {{
                                                    cidrIp = "temporibus";
                                                    description = "ab";
                                                }}),
                                            }}) {{
                                updateSecurityGroupForDirectoryControllers = false;
                            }};, AddIpRoutesXAmzTargetEnum.DIRECTORY_SERVICE20150416_ADD_IP_ROUTES) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            AddIpRoutesResponse res = sdk.sdk.addIpRoutes(req);

            if (res.addIpRoutesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addRegion

Adds two domain controllers in the specified Region for the specified directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddRegionRequest;
import org.openapis.openapi.models.operations.AddRegionResponse;
import org.openapis.openapi.models.operations.AddRegionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddRegionRequest;
import org.openapis.openapi.models.shared.DirectoryVpcSettings;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddRegionRequest req = new AddRegionRequest(                new AddRegionRequest("odit", "at",                 new DirectoryVpcSettings(                new String[]{{
                                                                add("maiores"),
                                                                add("molestiae"),
                                                                add("quod"),
                                                                add("quod"),
                                                            }}, "esse"););, AddRegionXAmzTargetEnum.DIRECTORY_SERVICE20150416_ADD_REGION) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "porro";
                xAmzCredential = "dolorum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "nam";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "occaecati";
            }};            

            AddRegionResponse res = sdk.sdk.addRegion(req);

            if (res.addRegionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addTagsToResource

Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTagsToResourceRequest;
import org.openapis.openapi.models.operations.AddTagsToResourceResponse;
import org.openapis.openapi.models.operations.AddTagsToResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddTagsToResourceRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTagsToResourceRequest req = new AddTagsToResourceRequest(                new AddTagsToResourceRequest("deleniti",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("beatae", "commodi") {{
                                                    key = "optio";
                                                    value = "totam";
                                                }}),
                                                add(new Tag("qui", "impedit") {{
                                                    key = "molestiae";
                                                    value = "modi";
                                                }}),
                                                add(new Tag("ipsum", "excepturi") {{
                                                    key = "cum";
                                                    value = "esse";
                                                }}),
                                                add(new Tag("ad", "natus") {{
                                                    key = "aspernatur";
                                                    value = "perferendis";
                                                }}),
                                            }});, AddTagsToResourceXAmzTargetEnum.DIRECTORY_SERVICE20150416_ADD_TAGS_TO_RESOURCE) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolor";
                xAmzDate = "natus";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "saepe";
            }};            

            AddTagsToResourceResponse res = sdk.sdk.addTagsToResource(req);

            if (res.addTagsToResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelSchemaExtension

Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelSchemaExtensionRequest;
import org.openapis.openapi.models.operations.CancelSchemaExtensionResponse;
import org.openapis.openapi.models.operations.CancelSchemaExtensionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CancelSchemaExtensionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelSchemaExtensionRequest req = new CancelSchemaExtensionRequest(                new CancelSchemaExtensionRequest("in", "corporis");, CancelSchemaExtensionXAmzTargetEnum.DIRECTORY_SERVICE20150416_CANCEL_SCHEMA_EXTENSION) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "iure";
                xAmzCredential = "saepe";
                xAmzDate = "quidem";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "reiciendis";
            }};            

            CancelSchemaExtensionResponse res = sdk.sdk.cancelSchemaExtension(req);

            if (res.cancelSchemaExtensionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectDirectory

<p>Creates an AD Connector to connect to a self-managed directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectDirectoryRequest;
import org.openapis.openapi.models.operations.ConnectDirectoryResponse;
import org.openapis.openapi.models.operations.ConnectDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConnectDirectoryRequest;
import org.openapis.openapi.models.shared.DirectoryConnectSettings;
import org.openapis.openapi.models.shared.DirectorySizeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConnectDirectoryRequest req = new ConnectDirectoryRequest(                new ConnectDirectoryRequest(                new DirectoryConnectSettings(                new String[]{{
                                                                add("laborum"),
                                                                add("dolores"),
                                                                add("dolorem"),
                                                            }}, "corporis",                 new String[]{{
                                                                add("nobis"),
                                                            }}, "enim");, "omnis", "nemo", DirectorySizeEnum.SMALL) {{
                                description = "excepturi";
                                shortName = "accusantium";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("sapiente", "architecto") {{
                                        key = "culpa";
                                        value = "doloribus";
                                    }}),
                                    add(new Tag("culpa", "consequuntur") {{
                                        key = "mollitia";
                                        value = "dolorem";
                                    }}),
                                }};
                            }};, ConnectDirectoryXAmzTargetEnum.DIRECTORY_SERVICE20150416_CONNECT_DIRECTORY) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "occaecati";
                xAmzDate = "numquam";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "molestiae";
            }};            

            ConnectDirectoryResponse res = sdk.sdk.connectDirectory(req);

            if (res.connectDirectoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAlias

<p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>

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
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAliasRequest req = new CreateAliasRequest(                new CreateAliasRequest("error", "quia");, CreateAliasXAmzTargetEnum.DIRECTORY_SERVICE20150416_CREATE_ALIAS) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "vitae";
                xAmzCredential = "laborum";
                xAmzDate = "animi";
                xAmzSecurityToken = "enim";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "quo";
            }};            

            CreateAliasResponse res = sdk.sdk.createAlias(req);

            if (res.createAliasResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createComputer

Creates an Active Directory computer object in the specified directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateComputerRequest;
import org.openapis.openapi.models.operations.CreateComputerResponse;
import org.openapis.openapi.models.operations.CreateComputerXAmzTargetEnum;
import org.openapis.openapi.models.shared.Attribute;
import org.openapis.openapi.models.shared.CreateComputerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateComputerRequest req = new CreateComputerRequest(                new CreateComputerRequest("tenetur", "ipsam", "id") {{
                                computerAttributes = new org.openapis.openapi.models.shared.Attribute[]{{
                                    add(new Attribute() {{
                                        name = "Joyce Mueller";
                                        value = "quasi";
                                    }}),
                                    add(new Attribute() {{
                                        name = "Jan Thiel";
                                        value = "voluptatibus";
                                    }}),
                                    add(new Attribute() {{
                                        name = "Geneva Klein Jr.";
                                        value = "reprehenderit";
                                    }}),
                                    add(new Attribute() {{
                                        name = "Shawna Carter";
                                        value = "iusto";
                                    }}),
                                }};
                                organizationalUnitDistinguishedName = "dicta";
                            }};, CreateComputerXAmzTargetEnum.DIRECTORY_SERVICE20150416_CREATE_COMPUTER) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
            }};            

            CreateComputerResponse res = sdk.sdk.createComputer(req);

            if (res.createComputerResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConditionalForwarder

Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConditionalForwarderRequest;
import org.openapis.openapi.models.operations.CreateConditionalForwarderResponse;
import org.openapis.openapi.models.operations.CreateConditionalForwarderXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateConditionalForwarderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConditionalForwarderRequest req = new CreateConditionalForwarderRequest(                new CreateConditionalForwarderRequest("molestias",                 new String[]{{
                                                add("pariatur"),
                                                add("modi"),
                                                add("praesentium"),
                                            }}, "rem");, CreateConditionalForwarderXAmzTargetEnum.DIRECTORY_SERVICE20150416_CREATE_CONDITIONAL_FORWARDER) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "repudiandae";
                xAmzDate = "sint";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "incidunt";
            }};            

            CreateConditionalForwarderResponse res = sdk.sdk.createConditionalForwarder(req);

            if (res.createConditionalForwarderResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDirectory

<p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDirectoryRequest;
import org.openapis.openapi.models.operations.CreateDirectoryResponse;
import org.openapis.openapi.models.operations.CreateDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDirectoryRequest;
import org.openapis.openapi.models.shared.DirectorySizeEnum;
import org.openapis.openapi.models.shared.DirectoryVpcSettings;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDirectoryRequest req = new CreateDirectoryRequest(                new CreateDirectoryRequest("consequatur", "est", DirectorySizeEnum.LARGE) {{
                                description = "explicabo";
                                shortName = "deserunt";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("modi", "qui") {{
                                        key = "quibusdam";
                                        value = "labore";
                                    }}),
                                    add(new Tag("quos", "perferendis") {{
                                        key = "aliquid";
                                        value = "cupiditate";
                                    }}),
                                    add(new Tag("ipsam", "alias") {{
                                        key = "magni";
                                        value = "assumenda";
                                    }}),
                                }};
                                vpcSettings = new DirectoryVpcSettings(                new String[]{{
                                                    add("dolorum"),
                                                }}, "excepturi");;
                            }};, CreateDirectoryXAmzTargetEnum.DIRECTORY_SERVICE20150416_CREATE_DIRECTORY) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
            }};            

            CreateDirectoryResponse res = sdk.sdk.createDirectory(req);

            if (res.createDirectoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLogSubscription

Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLogSubscriptionRequest;
import org.openapis.openapi.models.operations.CreateLogSubscriptionResponse;
import org.openapis.openapi.models.operations.CreateLogSubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLogSubscriptionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLogSubscriptionRequest req = new CreateLogSubscriptionRequest(                new CreateLogSubscriptionRequest("sint", "aliquid");, CreateLogSubscriptionXAmzTargetEnum.DIRECTORY_SERVICE20150416_CREATE_LOG_SUBSCRIPTION) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sint";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "a";
            }};            

            CreateLogSubscriptionResponse res = sdk.sdk.createLogSubscription(req);

            if (res.createLogSubscriptionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMicrosoftAD

<p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMicrosoftADRequest;
import org.openapis.openapi.models.operations.CreateMicrosoftADResponse;
import org.openapis.openapi.models.operations.CreateMicrosoftADXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateMicrosoftADRequest;
import org.openapis.openapi.models.shared.DirectoryEditionEnum;
import org.openapis.openapi.models.shared.DirectoryVpcSettings;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMicrosoftADRequest req = new CreateMicrosoftADRequest(                new CreateMicrosoftADRequest("in", "in",                 new DirectoryVpcSettings(                new String[]{{
                                                                add("maiores"),
                                                                add("rerum"),
                                                                add("dicta"),
                                                                add("magnam"),
                                                            }}, "cumque");) {{
                                description = "facere";
                                edition = DirectoryEditionEnum.ENTERPRISE;
                                shortName = "aliquid";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("occaecati", "enim") {{
                                        key = "accusamus";
                                        value = "non";
                                    }}),
                                    add(new Tag("quidem", "provident") {{
                                        key = "accusamus";
                                        value = "delectus";
                                    }}),
                                    add(new Tag("blanditiis", "deleniti") {{
                                        key = "nam";
                                        value = "id";
                                    }}),
                                }};
                            }};, CreateMicrosoftADXAmzTargetEnum.DIRECTORY_SERVICE20150416_CREATE_MICROSOFT_AD) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "amet";
                xAmzCredential = "deserunt";
                xAmzDate = "nisi";
                xAmzSecurityToken = "vel";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "omnis";
            }};            

            CreateMicrosoftADResponse res = sdk.sdk.createMicrosoftAD(req);

            if (res.createMicrosoftADResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSnapshot

<p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSnapshotRequest;
import org.openapis.openapi.models.operations.CreateSnapshotResponse;
import org.openapis.openapi.models.operations.CreateSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSnapshotRequest req = new CreateSnapshotRequest(                new CreateSnapshotRequest("perferendis") {{
                                name = "Megan Rau";
                            }};, CreateSnapshotXAmzTargetEnum.DIRECTORY_SERVICE20150416_CREATE_SNAPSHOT) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "natus";
                xAmzDate = "nobis";
                xAmzSecurityToken = "eum";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "aspernatur";
            }};            

            CreateSnapshotResponse res = sdk.sdk.createSnapshot(req);

            if (res.createSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTrust

<p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTrustRequest;
import org.openapis.openapi.models.operations.CreateTrustResponse;
import org.openapis.openapi.models.operations.CreateTrustXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateTrustRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelectiveAuthEnum;
import org.openapis.openapi.models.shared.TrustDirectionEnum;
import org.openapis.openapi.models.shared.TrustTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTrustRequest req = new CreateTrustRequest(                new CreateTrustRequest("magnam", "et", TrustDirectionEnum.ONE_WAY_INCOMING, "ullam") {{
                                conditionalForwarderIpAddrs = new String[]{{
                                    add("quos"),
                                    add("sint"),
                                    add("accusantium"),
                                }};
                                selectiveAuth = SelectiveAuthEnum.DISABLED;
                                trustType = TrustTypeEnum.EXTERNAL;
                            }};, CreateTrustXAmzTargetEnum.DIRECTORY_SERVICE20150416_CREATE_TRUST) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ad";
                xAmzCredential = "eum";
                xAmzDate = "dolor";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "nemo";
            }};            

            CreateTrustResponse res = sdk.sdk.createTrust(req);

            if (res.createTrustResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConditionalForwarder

Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConditionalForwarderRequest;
import org.openapis.openapi.models.operations.DeleteConditionalForwarderResponse;
import org.openapis.openapi.models.operations.DeleteConditionalForwarderXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConditionalForwarderRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConditionalForwarderRequest req = new DeleteConditionalForwarderRequest(                new DeleteConditionalForwarderRequest("iure", "doloribus");, DeleteConditionalForwarderXAmzTargetEnum.DIRECTORY_SERVICE20150416_DELETE_CONDITIONAL_FORWARDER) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            DeleteConditionalForwarderResponse res = sdk.sdk.deleteConditionalForwarder(req);

            if (res.deleteConditionalForwarderResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDirectory

<p>Deletes an Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDirectoryRequest;
import org.openapis.openapi.models.operations.DeleteDirectoryResponse;
import org.openapis.openapi.models.operations.DeleteDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDirectoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDirectoryRequest req = new DeleteDirectoryRequest(                new DeleteDirectoryRequest("repudiandae");, DeleteDirectoryXAmzTargetEnum.DIRECTORY_SERVICE20150416_DELETE_DIRECTORY) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "nihil";
                xAmzDate = "repellat";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "saepe";
            }};            

            DeleteDirectoryResponse res = sdk.sdk.deleteDirectory(req);

            if (res.deleteDirectoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLogSubscription

Deletes the specified log subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLogSubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteLogSubscriptionResponse;
import org.openapis.openapi.models.operations.DeleteLogSubscriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLogSubscriptionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLogSubscriptionRequest req = new DeleteLogSubscriptionRequest(                new DeleteLogSubscriptionRequest("accusantium");, DeleteLogSubscriptionXAmzTargetEnum.DIRECTORY_SERVICE20150416_DELETE_LOG_SUBSCRIPTION) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "natus";
                xAmzDate = "magni";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            DeleteLogSubscriptionResponse res = sdk.sdk.deleteLogSubscription(req);

            if (res.deleteLogSubscriptionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSnapshot

Deletes a directory snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteSnapshotResponse;
import org.openapis.openapi.models.operations.DeleteSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSnapshotRequest req = new DeleteSnapshotRequest(                new DeleteSnapshotRequest("maxime");, DeleteSnapshotXAmzTargetEnum.DIRECTORY_SERVICE20150416_DELETE_SNAPSHOT) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "odit";
                xAmzDate = "ea";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "maiores";
            }};            

            DeleteSnapshotResponse res = sdk.sdk.deleteSnapshot(req);

            if (res.deleteSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTrust

Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTrustRequest;
import org.openapis.openapi.models.operations.DeleteTrustResponse;
import org.openapis.openapi.models.operations.DeleteTrustXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTrustRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTrustRequest req = new DeleteTrustRequest(                new DeleteTrustRequest("ipsam") {{
                                deleteAssociatedConditionalForwarder = false;
                            }};, DeleteTrustXAmzTargetEnum.DIRECTORY_SERVICE20150416_DELETE_TRUST) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "autem";
                xAmzCredential = "nam";
                xAmzDate = "eaque";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DeleteTrustResponse res = sdk.sdk.deleteTrust(req);

            if (res.deleteTrustResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterCertificate

Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterCertificateRequest;
import org.openapis.openapi.models.operations.DeregisterCertificateResponse;
import org.openapis.openapi.models.operations.DeregisterCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterCertificateRequest req = new DeregisterCertificateRequest(                new DeregisterCertificateRequest("fugiat", "amet");, DeregisterCertificateXAmzTargetEnum.DIRECTORY_SERVICE20150416_DEREGISTER_CERTIFICATE) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "corporis";
                xAmzDate = "hic";
                xAmzSecurityToken = "libero";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "dolores";
            }};            

            DeregisterCertificateResponse res = sdk.sdk.deregisterCertificate(req);

            if (res.deregisterCertificateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterEventTopic

Removes the specified directory as a publisher to the specified Amazon SNS topic.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterEventTopicRequest;
import org.openapis.openapi.models.operations.DeregisterEventTopicResponse;
import org.openapis.openapi.models.operations.DeregisterEventTopicXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterEventTopicRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterEventTopicRequest req = new DeregisterEventTopicRequest(                new DeregisterEventTopicRequest("totam", "dignissimos");, DeregisterEventTopicXAmzTargetEnum.DIRECTORY_SERVICE20150416_DEREGISTER_EVENT_TOPIC) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "quis";
                xAmzCredential = "nesciunt";
                xAmzDate = "eos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "minus";
            }};            

            DeregisterEventTopicResponse res = sdk.sdk.deregisterEventTopic(req);

            if (res.deregisterEventTopicResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCertificate

Displays information about the certificate registered for secure LDAP or client certificate authentication.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCertificateRequest;
import org.openapis.openapi.models.operations.DescribeCertificateResponse;
import org.openapis.openapi.models.operations.DescribeCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCertificateRequest req = new DescribeCertificateRequest(                new DescribeCertificateRequest("dolor", "vero");, DescribeCertificateXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_CERTIFICATE) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "hic";
                xAmzCredential = "recusandae";
                xAmzDate = "omnis";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "voluptatem";
            }};            

            DescribeCertificateResponse res = sdk.sdk.describeCertificate(req);

            if (res.describeCertificateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeClientAuthenticationSettings

Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeClientAuthenticationSettingsRequest;
import org.openapis.openapi.models.operations.DescribeClientAuthenticationSettingsResponse;
import org.openapis.openapi.models.operations.DescribeClientAuthenticationSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClientAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.DescribeClientAuthenticationSettingsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeClientAuthenticationSettingsRequest req = new DescribeClientAuthenticationSettingsRequest(                new DescribeClientAuthenticationSettingsRequest("consequuntur") {{
                                limit = 500026L;
                                nextToken = "error";
                                type = ClientAuthenticationTypeEnum.SMART_CARD;
                            }};, DescribeClientAuthenticationSettingsXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_CLIENT_AUTHENTICATION_SETTINGS) {{
                limit = "occaecati";
                nextToken = "rerum";
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "earum";
                xAmzDate = "modi";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            DescribeClientAuthenticationSettingsResponse res = sdk.sdk.describeClientAuthenticationSettings(req);

            if (res.describeClientAuthenticationSettingsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConditionalForwarders

<p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConditionalForwardersRequest;
import org.openapis.openapi.models.operations.DescribeConditionalForwardersResponse;
import org.openapis.openapi.models.operations.DescribeConditionalForwardersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConditionalForwardersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConditionalForwardersRequest req = new DescribeConditionalForwardersRequest(                new DescribeConditionalForwardersRequest("provident") {{
                                remoteDomainNames = new String[]{{
                                    add("libero"),
                                    add("delectus"),
                                    add("quaerat"),
                                    add("quos"),
                                }};
                            }};, DescribeConditionalForwardersXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_CONDITIONAL_FORWARDERS) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolorem";
                xAmzDate = "dolor";
                xAmzSecurityToken = "qui";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "hic";
            }};            

            DescribeConditionalForwardersResponse res = sdk.sdk.describeConditionalForwarders(req);

            if (res.describeConditionalForwardersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDirectories

<p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDirectoriesRequest;
import org.openapis.openapi.models.operations.DescribeDirectoriesResponse;
import org.openapis.openapi.models.operations.DescribeDirectoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDirectoriesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDirectoriesRequest req = new DescribeDirectoriesRequest(                new DescribeDirectoriesRequest() {{
                                directoryIds = new String[]{{
                                    add("voluptate"),
                                    add("dignissimos"),
                                    add("reiciendis"),
                                }};
                                limit = 227414L;
                                nextToken = "dolorum";
                            }};, DescribeDirectoriesXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_DIRECTORIES) {{
                limit = "numquam";
                nextToken = "veritatis";
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quidem";
            }};            

            DescribeDirectoriesResponse res = sdk.sdk.describeDirectories(req);

            if (res.describeDirectoriesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDomainControllers

Provides information about any domain controllers in your directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDomainControllersRequest;
import org.openapis.openapi.models.operations.DescribeDomainControllersResponse;
import org.openapis.openapi.models.operations.DescribeDomainControllersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDomainControllersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDomainControllersRequest req = new DescribeDomainControllersRequest(                new DescribeDomainControllersRequest("voluptas") {{
                                domainControllerIds = new String[]{{
                                    add("eos"),
                                    add("atque"),
                                    add("sit"),
                                }};
                                limit = 854614L;
                                nextToken = "ab";
                            }};, DescribeDomainControllersXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_DOMAIN_CONTROLLERS) {{
                limit = "soluta";
                nextToken = "dolorum";
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "distinctio";
            }};            

            DescribeDomainControllersResponse res = sdk.sdk.describeDomainControllers(req);

            if (res.describeDomainControllersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEventTopics

<p>Obtains information about which Amazon SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEventTopicsRequest;
import org.openapis.openapi.models.operations.DescribeEventTopicsResponse;
import org.openapis.openapi.models.operations.DescribeEventTopicsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEventTopicsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEventTopicsRequest req = new DescribeEventTopicsRequest(                new DescribeEventTopicsRequest() {{
                                directoryId = "nihil";
                                topicNames = new String[]{{
                                    add("voluptate"),
                                }};
                            }};, DescribeEventTopicsXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_EVENT_TOPICS) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "eius";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "optio";
            }};            

            DescribeEventTopicsResponse res = sdk.sdk.describeEventTopics(req);

            if (res.describeEventTopicsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLDAPSSettings

Describes the status of LDAP security for the specified directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLDAPSSettingsRequest;
import org.openapis.openapi.models.operations.DescribeLDAPSSettingsResponse;
import org.openapis.openapi.models.operations.DescribeLDAPSSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLDAPSSettingsRequest;
import org.openapis.openapi.models.shared.LDAPSTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLDAPSSettingsRequest req = new DescribeLDAPSSettingsRequest(                new DescribeLDAPSSettingsRequest("ad") {{
                                limit = 904425L;
                                nextToken = "suscipit";
                                type = LDAPSTypeEnum.CLIENT;
                            }};, DescribeLDAPSSettingsXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_LDAPS_SETTINGS) {{
                limit = "deserunt";
                nextToken = "provident";
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "totam";
                xAmzDate = "similique";
                xAmzSecurityToken = "alias";
                xAmzSignature = "at";
                xAmzSignedHeaders = "quaerat";
            }};            

            DescribeLDAPSSettingsResponse res = sdk.sdk.describeLDAPSSettings(req);

            if (res.describeLDAPSSettingsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRegions

Provides information about the Regions that are configured for multi-Region replication.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRegionsRequest;
import org.openapis.openapi.models.operations.DescribeRegionsResponse;
import org.openapis.openapi.models.operations.DescribeRegionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRegionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRegionsRequest req = new DescribeRegionsRequest(                new DescribeRegionsRequest("vel") {{
                                nextToken = "quod";
                                regionName = "officiis";
                            }};, DescribeRegionsXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_REGIONS) {{
                nextToken = "qui";
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "a";
                xAmzCredential = "esse";
                xAmzDate = "harum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quisquam";
            }};            

            DescribeRegionsResponse res = sdk.sdk.describeRegions(req);

            if (res.describeRegionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSettings

Retrieves information about the configurable settings for the specified directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSettingsRequest;
import org.openapis.openapi.models.operations.DescribeSettingsResponse;
import org.openapis.openapi.models.operations.DescribeSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSettingsRequest;
import org.openapis.openapi.models.shared.DirectoryConfigurationStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSettingsRequest req = new DescribeSettingsRequest(                new DescribeSettingsRequest("amet") {{
                                nextToken = "tempore";
                                status = DirectoryConfigurationStatusEnum.DEFAULT_;
                            }};, DescribeSettingsXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_SETTINGS) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "enim";
                xAmzCredential = "dolorem";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "totam";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "sit";
            }};            

            DescribeSettingsResponse res = sdk.sdk.describeSettings(req);

            if (res.describeSettingsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSharedDirectories

Returns the shared directories in your account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSharedDirectoriesRequest;
import org.openapis.openapi.models.operations.DescribeSharedDirectoriesResponse;
import org.openapis.openapi.models.operations.DescribeSharedDirectoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSharedDirectoriesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSharedDirectoriesRequest req = new DescribeSharedDirectoriesRequest(                new DescribeSharedDirectoriesRequest("neque") {{
                                limit = 153694L;
                                nextToken = "vel";
                                sharedDirectoryIds = new String[]{{
                                    add("voluptas"),
                                    add("deserunt"),
                                    add("quam"),
                                }};
                            }};, DescribeSharedDirectoriesXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_SHARED_DIRECTORIES) {{
                limit = "ipsum";
                nextToken = "incidunt";
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "maxime";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "laborum";
            }};            

            DescribeSharedDirectoriesResponse res = sdk.sdk.describeSharedDirectories(req);

            if (res.describeSharedDirectoriesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSnapshots

<p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSnapshotsRequest;
import org.openapis.openapi.models.operations.DescribeSnapshotsResponse;
import org.openapis.openapi.models.operations.DescribeSnapshotsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSnapshotsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSnapshotsRequest req = new DescribeSnapshotsRequest(                new DescribeSnapshotsRequest() {{
                                directoryId = "incidunt";
                                limit = 132068L;
                                nextToken = "dolores";
                                snapshotIds = new String[]{{
                                    add("facilis"),
                                    add("aliquid"),
                                    add("quam"),
                                }};
                            }};, DescribeSnapshotsXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_SNAPSHOTS) {{
                limit = "molestias";
                nextToken = "temporibus";
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "neque";
                xAmzCredential = "fugit";
                xAmzDate = "magni";
                xAmzSecurityToken = "odio";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "ullam";
            }};            

            DescribeSnapshotsResponse res = sdk.sdk.describeSnapshots(req);

            if (res.describeSnapshotsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTrusts

<p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTrustsRequest;
import org.openapis.openapi.models.operations.DescribeTrustsResponse;
import org.openapis.openapi.models.operations.DescribeTrustsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTrustsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTrustsRequest req = new DescribeTrustsRequest(                new DescribeTrustsRequest() {{
                                directoryId = "hic";
                                limit = 30452L;
                                nextToken = "cumque";
                                trustIds = new String[]{{
                                    add("nobis"),
                                    add("et"),
                                    add("saepe"),
                                }};
                            }};, DescribeTrustsXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_TRUSTS) {{
                limit = "ipsum";
                nextToken = "veritatis";
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quos";
                xAmzCredential = "tempore";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "dolorem";
            }};            

            DescribeTrustsResponse res = sdk.sdk.describeTrusts(req);

            if (res.describeTrustsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUpdateDirectory

 Describes the updates of a directory for a particular update type. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUpdateDirectoryRequest;
import org.openapis.openapi.models.operations.DescribeUpdateDirectoryResponse;
import org.openapis.openapi.models.operations.DescribeUpdateDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeUpdateDirectoryRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUpdateDirectoryRequest req = new DescribeUpdateDirectoryRequest(                new DescribeUpdateDirectoryRequest("labore", UpdateTypeEnum.OS) {{
                                nextToken = "adipisci";
                                regionName = "dolorum";
                            }};, DescribeUpdateDirectoryXAmzTargetEnum.DIRECTORY_SERVICE20150416_DESCRIBE_UPDATE_DIRECTORY) {{
                nextToken = "architecto";
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quas";
                xAmzDate = "itaque";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "repellendus";
            }};            

            DescribeUpdateDirectoryResponse res = sdk.sdk.describeUpdateDirectory(req);

            if (res.describeUpdateDirectoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableClientAuthentication

Disables alternative client authentication methods for the specified directory. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableClientAuthenticationRequest;
import org.openapis.openapi.models.operations.DisableClientAuthenticationResponse;
import org.openapis.openapi.models.operations.DisableClientAuthenticationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClientAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.DisableClientAuthenticationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableClientAuthenticationRequest req = new DisableClientAuthenticationRequest(                new DisableClientAuthenticationRequest("doloribus", ClientAuthenticationTypeEnum.SMART_CARD);, DisableClientAuthenticationXAmzTargetEnum.DIRECTORY_SERVICE20150416_DISABLE_CLIENT_AUTHENTICATION) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "qui";
                xAmzDate = "quae";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "occaecati";
            }};            

            DisableClientAuthenticationResponse res = sdk.sdk.disableClientAuthentication(req);

            if (res.disableClientAuthenticationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableLDAPS

Deactivates LDAP secure calls for the specified directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableLDAPSRequest;
import org.openapis.openapi.models.operations.DisableLDAPSResponse;
import org.openapis.openapi.models.operations.DisableLDAPSXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisableLDAPSRequest;
import org.openapis.openapi.models.shared.LDAPSTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableLDAPSRequest req = new DisableLDAPSRequest(                new DisableLDAPSRequest("quisquam", LDAPSTypeEnum.CLIENT);, DisableLDAPSXAmzTargetEnum.DIRECTORY_SERVICE20150416_DISABLE_LDAPS) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "quis";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "consectetur";
            }};            

            DisableLDAPSResponse res = sdk.sdk.disableLDAPS(req);

            if (res.disableLDAPSResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableRadius

Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableRadiusRequest;
import org.openapis.openapi.models.operations.DisableRadiusResponse;
import org.openapis.openapi.models.operations.DisableRadiusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisableRadiusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableRadiusRequest req = new DisableRadiusRequest(                new DisableRadiusRequest("tenetur");, DisableRadiusXAmzTargetEnum.DIRECTORY_SERVICE20150416_DISABLE_RADIUS) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "hic";
                xAmzCredential = "distinctio";
                xAmzDate = "quod";
                xAmzSecurityToken = "odio";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "facilis";
            }};            

            DisableRadiusResponse res = sdk.sdk.disableRadius(req);

            if (res.disableRadiusResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableSso

Disables single-sign on for a directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableSsoRequest;
import org.openapis.openapi.models.operations.DisableSsoResponse;
import org.openapis.openapi.models.operations.DisableSsoXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisableSsoRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableSsoRequest req = new DisableSsoRequest(                new DisableSsoRequest("ducimus") {{
                                password = "dolore";
                                userName = "Rosalinda61";
                            }};, DisableSsoXAmzTargetEnum.DIRECTORY_SERVICE20150416_DISABLE_SSO) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatibus";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "porro";
            }};            

            DisableSsoResponse res = sdk.sdk.disableSso(req);

            if (res.disableSsoResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableClientAuthentication

Enables alternative client authentication methods for the specified directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableClientAuthenticationRequest;
import org.openapis.openapi.models.operations.EnableClientAuthenticationResponse;
import org.openapis.openapi.models.operations.EnableClientAuthenticationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClientAuthenticationTypeEnum;
import org.openapis.openapi.models.shared.EnableClientAuthenticationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableClientAuthenticationRequest req = new EnableClientAuthenticationRequest(                new EnableClientAuthenticationRequest("doloribus", ClientAuthenticationTypeEnum.SMART_CARD);, EnableClientAuthenticationXAmzTargetEnum.DIRECTORY_SERVICE20150416_ENABLE_CLIENT_AUTHENTICATION) {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "alias";
                xAmzDate = "officia";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "ea";
            }};            

            EnableClientAuthenticationResponse res = sdk.sdk.enableClientAuthentication(req);

            if (res.enableClientAuthenticationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableLDAPS

Activates the switch for the specific directory to always use LDAP secure calls.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableLDAPSRequest;
import org.openapis.openapi.models.operations.EnableLDAPSResponse;
import org.openapis.openapi.models.operations.EnableLDAPSXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnableLDAPSRequest;
import org.openapis.openapi.models.shared.LDAPSTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableLDAPSRequest req = new EnableLDAPSRequest(                new EnableLDAPSRequest("vel", LDAPSTypeEnum.CLIENT);, EnableLDAPSXAmzTargetEnum.DIRECTORY_SERVICE20150416_ENABLE_LDAPS) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "ratione";
                xAmzDate = "ex";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "dolor";
            }};            

            EnableLDAPSResponse res = sdk.sdk.enableLDAPS(req);

            if (res.enableLDAPSResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableRadius

Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableRadiusRequest;
import org.openapis.openapi.models.operations.EnableRadiusResponse;
import org.openapis.openapi.models.operations.EnableRadiusXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnableRadiusRequest;
import org.openapis.openapi.models.shared.RadiusAuthenticationProtocolEnum;
import org.openapis.openapi.models.shared.RadiusSettings;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableRadiusRequest req = new EnableRadiusRequest(                new EnableRadiusRequest("quasi",                 new RadiusSettings() {{
                                                authenticationProtocol = RadiusAuthenticationProtocolEnum.CHAP;
                                                displayLabel = "nulla";
                                                radiusPort = 569211L;
                                                radiusRetries = 972920L;
                                                radiusServers = new String[]{{
                                                    add("sapiente"),
                                                    add("quisquam"),
                                                }};
                                                radiusTimeout = 906556L;
                                                sharedSecret = "ea";
                                                useSameUsername = false;
                                            }};);, EnableRadiusXAmzTargetEnum.DIRECTORY_SERVICE20150416_ENABLE_RADIUS) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "veniam";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "ea";
            }};            

            EnableRadiusResponse res = sdk.sdk.enableRadius(req);

            if (res.enableRadiusResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableSso

Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableSsoRequest;
import org.openapis.openapi.models.operations.EnableSsoResponse;
import org.openapis.openapi.models.operations.EnableSsoXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnableSsoRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableSsoRequest req = new EnableSsoRequest(                new EnableSsoRequest("consectetur") {{
                                password = "recusandae";
                                userName = "Brennan95";
                            }};, EnableSsoXAmzTargetEnum.DIRECTORY_SERVICE20150416_ENABLE_SSO) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "aut";
                xAmzCredential = "aut";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "fugit";
            }};            

            EnableSsoResponse res = sdk.sdk.enableSso(req);

            if (res.enableSsoResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDirectoryLimits

Obtains directory limit information for the current Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDirectoryLimitsRequest;
import org.openapis.openapi.models.operations.GetDirectoryLimitsResponse;
import org.openapis.openapi.models.operations.GetDirectoryLimitsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDirectoryLimitsRequest req = new GetDirectoryLimitsRequest(                new java.util.HashMap<String, Object>() {{
                                put("non", "et");
                            }}, GetDirectoryLimitsXAmzTargetEnum.DIRECTORY_SERVICE20150416_GET_DIRECTORY_LIMITS) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "placeat";
                xAmzDate = "velit";
                xAmzSecurityToken = "eum";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nobis";
            }};            

            GetDirectoryLimitsResponse res = sdk.sdk.getDirectoryLimits(req);

            if (res.getDirectoryLimitsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSnapshotLimits

Obtains the manual snapshot limits for a directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSnapshotLimitsRequest;
import org.openapis.openapi.models.operations.GetSnapshotLimitsResponse;
import org.openapis.openapi.models.operations.GetSnapshotLimitsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSnapshotLimitsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSnapshotLimitsRequest req = new GetSnapshotLimitsRequest(                new GetSnapshotLimitsRequest("assumenda");, GetSnapshotLimitsXAmzTargetEnum.DIRECTORY_SERVICE20150416_GET_SNAPSHOT_LIMITS) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "libero";
                xAmzDate = "quasi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "explicabo";
            }};            

            GetSnapshotLimitsResponse res = sdk.sdk.getSnapshotLimits(req);

            if (res.getSnapshotLimitsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCertificates

For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCertificatesRequest;
import org.openapis.openapi.models.operations.ListCertificatesResponse;
import org.openapis.openapi.models.operations.ListCertificatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCertificatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCertificatesRequest req = new ListCertificatesRequest(                new ListCertificatesRequest("ipsa") {{
                                limit = 476477L;
                                nextToken = "magnam";
                            }};, ListCertificatesXAmzTargetEnum.DIRECTORY_SERVICE20150416_LIST_CERTIFICATES) {{
                limit = "odio";
                nextToken = "eius";
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "esse";
                xAmzCredential = "rem";
                xAmzDate = "fuga";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "fugiat";
            }};            

            ListCertificatesResponse res = sdk.sdk.listCertificates(req);

            if (res.listCertificatesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIpRoutes

Lists the address blocks that you have added to a directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIpRoutesRequest;
import org.openapis.openapi.models.operations.ListIpRoutesResponse;
import org.openapis.openapi.models.operations.ListIpRoutesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListIpRoutesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIpRoutesRequest req = new ListIpRoutesRequest(                new ListIpRoutesRequest("eum") {{
                                limit = 379927L;
                                nextToken = "assumenda";
                            }};, ListIpRoutesXAmzTargetEnum.DIRECTORY_SERVICE20150416_LIST_IP_ROUTES) {{
                limit = "eos";
                nextToken = "praesentium";
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "id";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "quo";
            }};            

            ListIpRoutesResponse res = sdk.sdk.listIpRoutes(req);

            if (res.listIpRoutesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLogSubscriptions

Lists the active log subscriptions for the Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLogSubscriptionsRequest;
import org.openapis.openapi.models.operations.ListLogSubscriptionsResponse;
import org.openapis.openapi.models.operations.ListLogSubscriptionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListLogSubscriptionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListLogSubscriptionsRequest req = new ListLogSubscriptionsRequest(                new ListLogSubscriptionsRequest() {{
                                directoryId = "quo";
                                limit = 681359L;
                                nextToken = "eius";
                            }};, ListLogSubscriptionsXAmzTargetEnum.DIRECTORY_SERVICE20150416_LIST_LOG_SUBSCRIPTIONS) {{
                limit = "eos";
                nextToken = "voluptas";
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "consequatur";
                xAmzDate = "tempora";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "aspernatur";
            }};            

            ListLogSubscriptionsResponse res = sdk.sdk.listLogSubscriptions(req);

            if (res.listLogSubscriptionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSchemaExtensions

Lists all schema extensions applied to a Microsoft AD Directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSchemaExtensionsRequest;
import org.openapis.openapi.models.operations.ListSchemaExtensionsResponse;
import org.openapis.openapi.models.operations.ListSchemaExtensionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSchemaExtensionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSchemaExtensionsRequest req = new ListSchemaExtensionsRequest(                new ListSchemaExtensionsRequest("quo") {{
                                limit = 459856L;
                                nextToken = "recusandae";
                            }};, ListSchemaExtensionsXAmzTargetEnum.DIRECTORY_SERVICE20150416_LIST_SCHEMA_EXTENSIONS) {{
                limit = "aperiam";
                nextToken = "distinctio";
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "inventore";
                xAmzDate = "nihil";
                xAmzSecurityToken = "totam";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "aliquam";
            }};            

            ListSchemaExtensionsResponse res = sdk.sdk.listSchemaExtensions(req);

            if (res.listSchemaExtensionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all tags on a directory.

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
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("occaecati") {{
                                limit = 414567L;
                                nextToken = "sapiente";
                            }};, ListTagsForResourceXAmzTargetEnum.DIRECTORY_SERVICE20150416_LIST_TAGS_FOR_RESOURCE) {{
                limit = "dolores";
                nextToken = "deserunt";
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "porro";
                xAmzDate = "eum";
                xAmzSecurityToken = "quas";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerCertificate

Registers a certificate for a secure LDAP or client certificate authentication.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterCertificateRequest;
import org.openapis.openapi.models.operations.RegisterCertificateResponse;
import org.openapis.openapi.models.operations.RegisterCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.CertificateTypeEnum;
import org.openapis.openapi.models.shared.ClientCertAuthSettings;
import org.openapis.openapi.models.shared.RegisterCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterCertificateRequest req = new RegisterCertificateRequest(                new RegisterCertificateRequest("fugit", "fuga") {{
                                clientCertAuthSettings = new ClientCertAuthSettings() {{
                                    ocspUrl = "mollitia";
                                }};;
                                type = CertificateTypeEnum.CLIENT_CERT_AUTH;
                            }};, RegisterCertificateXAmzTargetEnum.DIRECTORY_SERVICE20150416_REGISTER_CERTIFICATE) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
            }};            

            RegisterCertificateResponse res = sdk.sdk.registerCertificate(req);

            if (res.registerCertificateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerEventTopic

Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterEventTopicRequest;
import org.openapis.openapi.models.operations.RegisterEventTopicResponse;
import org.openapis.openapi.models.operations.RegisterEventTopicXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterEventTopicRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterEventTopicRequest req = new RegisterEventTopicRequest(                new RegisterEventTopicRequest("explicabo", "saepe");, RegisterEventTopicXAmzTargetEnum.DIRECTORY_SERVICE20150416_REGISTER_EVENT_TOPIC) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "atque";
                xAmzCredential = "et";
                xAmzDate = "esse";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "veritatis";
            }};            

            RegisterEventTopicResponse res = sdk.sdk.registerEventTopic(req);

            if (res.registerEventTopicResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rejectSharedDirectory

Rejects a directory sharing request that was sent from the directory owner account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RejectSharedDirectoryRequest;
import org.openapis.openapi.models.operations.RejectSharedDirectoryResponse;
import org.openapis.openapi.models.operations.RejectSharedDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.RejectSharedDirectoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RejectSharedDirectoryRequest req = new RejectSharedDirectoryRequest(                new RejectSharedDirectoryRequest("quod");, RejectSharedDirectoryXAmzTargetEnum.DIRECTORY_SERVICE20150416_REJECT_SHARED_DIRECTORY) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "vero";
                xAmzCredential = "aliquid";
                xAmzDate = "quasi";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "harum";
            }};            

            RejectSharedDirectoryResponse res = sdk.sdk.rejectSharedDirectory(req);

            if (res.rejectSharedDirectoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeIpRoutes

Removes IP address blocks from a directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveIpRoutesRequest;
import org.openapis.openapi.models.operations.RemoveIpRoutesResponse;
import org.openapis.openapi.models.operations.RemoveIpRoutesXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveIpRoutesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveIpRoutesRequest req = new RemoveIpRoutesRequest(                new RemoveIpRoutesRequest(                new String[]{{
                                                add("occaecati"),
                                                add("minima"),
                                                add("distinctio"),
                                            }}, "eligendi");, RemoveIpRoutesXAmzTargetEnum.DIRECTORY_SERVICE20150416_REMOVE_IP_ROUTES) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "tempore";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "consequatur";
            }};            

            RemoveIpRoutesResponse res = sdk.sdk.removeIpRoutes(req);

            if (res.removeIpRoutesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeRegion

Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the <code>DeleteDirectory</code> API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveRegionRequest;
import org.openapis.openapi.models.operations.RemoveRegionResponse;
import org.openapis.openapi.models.operations.RemoveRegionXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveRegionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveRegionRequest req = new RemoveRegionRequest(                new RemoveRegionRequest("quaerat");, RemoveRegionXAmzTargetEnum.DIRECTORY_SERVICE20150416_REMOVE_REGION) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "esse";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "provident";
                xAmzSignature = "a";
                xAmzSignedHeaders = "nulla";
            }};            

            RemoveRegionResponse res = sdk.sdk.removeRegion(req);

            if (res.removeRegionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeTagsFromResource

Removes tags from a directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveTagsFromResourceRequest;
import org.openapis.openapi.models.operations.RemoveTagsFromResourceResponse;
import org.openapis.openapi.models.operations.RemoveTagsFromResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveTagsFromResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveTagsFromResourceRequest req = new RemoveTagsFromResourceRequest(                new RemoveTagsFromResourceRequest("esse",                 new String[]{{
                                                add("a"),
                                            }});, RemoveTagsFromResourceXAmzTargetEnum.DIRECTORY_SERVICE20150416_REMOVE_TAGS_FROM_RESOURCE) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "sint";
                xAmzCredential = "pariatur";
                xAmzDate = "possimus";
                xAmzSecurityToken = "quia";
                xAmzSignature = "eveniet";
                xAmzSignedHeaders = "asperiores";
            }};            

            RemoveTagsFromResourceResponse res = sdk.sdk.removeTagsFromResource(req);

            if (res.removeTagsFromResourceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetUserPassword

<p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>Amazon Web Services Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration Guide</i>.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetUserPasswordRequest;
import org.openapis.openapi.models.operations.ResetUserPasswordResponse;
import org.openapis.openapi.models.operations.ResetUserPasswordXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResetUserPasswordRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResetUserPasswordRequest req = new ResetUserPasswordRequest(                new ResetUserPasswordRequest("veritatis", "consequuntur", "quasi");, ResetUserPasswordXAmzTargetEnum.DIRECTORY_SERVICE20150416_RESET_USER_PASSWORD) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "aliquid";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "quae";
                xAmzSignature = "earum";
                xAmzSignedHeaders = "vel";
            }};            

            ResetUserPasswordResponse res = sdk.sdk.resetUserPassword(req);

            if (res.resetUserPasswordResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreFromSnapshot

<p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreFromSnapshotRequest;
import org.openapis.openapi.models.operations.RestoreFromSnapshotResponse;
import org.openapis.openapi.models.operations.RestoreFromSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.RestoreFromSnapshotRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreFromSnapshotRequest req = new RestoreFromSnapshotRequest(                new RestoreFromSnapshotRequest("eius");, RestoreFromSnapshotXAmzTargetEnum.DIRECTORY_SERVICE20150416_RESTORE_FROM_SNAPSHOT) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "illum";
                xAmzCredential = "soluta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dicta";
            }};            

            RestoreFromSnapshotResponse res = sdk.sdk.restoreFromSnapshot(req);

            if (res.restoreFromSnapshotResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## shareDirectory

<p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p> <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShareDirectoryRequest;
import org.openapis.openapi.models.operations.ShareDirectoryResponse;
import org.openapis.openapi.models.operations.ShareDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShareDirectoryRequest;
import org.openapis.openapi.models.shared.ShareMethodEnum;
import org.openapis.openapi.models.shared.ShareTarget;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ShareDirectoryRequest req = new ShareDirectoryRequest(                new ShareDirectoryRequest("reprehenderit", ShareMethodEnum.ORGANIZATIONS,                 new ShareTarget("nisi", TargetTypeEnum.ACCOUNT);) {{
                                shareNotes = "aut";
                            }};, ShareDirectoryXAmzTargetEnum.DIRECTORY_SERVICE20150416_SHARE_DIRECTORY) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "qui";
                xAmzCredential = "quibusdam";
                xAmzDate = "ex";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "dolorum";
            }};            

            ShareDirectoryResponse res = sdk.sdk.shareDirectory(req);

            if (res.shareDirectoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startSchemaExtension

Applies a schema extension to a Microsoft AD directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSchemaExtensionRequest;
import org.openapis.openapi.models.operations.StartSchemaExtensionResponse;
import org.openapis.openapi.models.operations.StartSchemaExtensionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartSchemaExtensionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSchemaExtensionRequest req = new StartSchemaExtensionRequest(                new StartSchemaExtensionRequest(false, "omnis", "tenetur", "quasi");, StartSchemaExtensionXAmzTargetEnum.DIRECTORY_SERVICE20150416_START_SCHEMA_EXTENSION) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "et";
                xAmzCredential = "voluptate";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "minima";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "consectetur";
            }};            

            StartSchemaExtensionResponse res = sdk.sdk.startSchemaExtension(req);

            if (res.startSchemaExtensionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unshareDirectory

Stops the directory sharing between the directory owner and consumer accounts. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnshareDirectoryRequest;
import org.openapis.openapi.models.operations.UnshareDirectoryResponse;
import org.openapis.openapi.models.operations.UnshareDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetTypeEnum;
import org.openapis.openapi.models.shared.UnshareDirectoryRequest;
import org.openapis.openapi.models.shared.UnshareTarget;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnshareDirectoryRequest req = new UnshareDirectoryRequest(                new UnshareDirectoryRequest("iste",                 new UnshareTarget("temporibus", TargetTypeEnum.ACCOUNT););, UnshareDirectoryXAmzTargetEnum.DIRECTORY_SERVICE20150416_UNSHARE_DIRECTORY) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "rem";
                xAmzCredential = "aut";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "eum";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "ab";
            }};            

            UnshareDirectoryResponse res = sdk.sdk.unshareDirectory(req);

            if (res.unshareDirectoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConditionalForwarder

Updates a conditional forwarder that has been set up for your Amazon Web Services directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConditionalForwarderRequest;
import org.openapis.openapi.models.operations.UpdateConditionalForwarderResponse;
import org.openapis.openapi.models.operations.UpdateConditionalForwarderXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConditionalForwarderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConditionalForwarderRequest req = new UpdateConditionalForwarderRequest(                new UpdateConditionalForwarderRequest("non",                 new String[]{{
                                                add("dolor"),
                                            }}, "occaecati");, UpdateConditionalForwarderXAmzTargetEnum.DIRECTORY_SERVICE20150416_UPDATE_CONDITIONAL_FORWARDER) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "explicabo";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "aut";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "dicta";
            }};            

            UpdateConditionalForwarderResponse res = sdk.sdk.updateConditionalForwarder(req);

            if (res.updateConditionalForwarderResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDirectorySetup

 Updates the directory for a particular update type. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDirectorySetupRequest;
import org.openapis.openapi.models.operations.UpdateDirectorySetupResponse;
import org.openapis.openapi.models.operations.UpdateDirectorySetupXAmzTargetEnum;
import org.openapis.openapi.models.shared.OSUpdateSettings;
import org.openapis.openapi.models.shared.OSVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDirectorySetupRequest;
import org.openapis.openapi.models.shared.UpdateTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDirectorySetupRequest req = new UpdateDirectorySetupRequest(                new UpdateDirectorySetupRequest("natus", UpdateTypeEnum.OS) {{
                                createSnapshotBeforeUpdate = false;
                                osUpdateSettings = new OSUpdateSettings() {{
                                    osVersion = OSVersionEnum.SERVER2012;
                                }};;
                            }};, UpdateDirectorySetupXAmzTargetEnum.DIRECTORY_SERVICE20150416_UPDATE_DIRECTORY_SETUP) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "asperiores";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "consequuntur";
            }};            

            UpdateDirectorySetupResponse res = sdk.sdk.updateDirectorySetup(req);

            if (res.updateDirectorySetupResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNumberOfDomainControllers

Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNumberOfDomainControllersRequest;
import org.openapis.openapi.models.operations.UpdateNumberOfDomainControllersResponse;
import org.openapis.openapi.models.operations.UpdateNumberOfDomainControllersXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateNumberOfDomainControllersRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNumberOfDomainControllersRequest req = new UpdateNumberOfDomainControllersRequest(                new UpdateNumberOfDomainControllersRequest(638762L, "maxime");, UpdateNumberOfDomainControllersXAmzTargetEnum.DIRECTORY_SERVICE20150416_UPDATE_NUMBER_OF_DOMAIN_CONTROLLERS) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "officia";
                xAmzCredential = "asperiores";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quae";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "porro";
            }};            

            UpdateNumberOfDomainControllersResponse res = sdk.sdk.updateNumberOfDomainControllers(req);

            if (res.updateNumberOfDomainControllersResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRadius

Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRadiusRequest;
import org.openapis.openapi.models.operations.UpdateRadiusResponse;
import org.openapis.openapi.models.operations.UpdateRadiusXAmzTargetEnum;
import org.openapis.openapi.models.shared.RadiusAuthenticationProtocolEnum;
import org.openapis.openapi.models.shared.RadiusSettings;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRadiusRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRadiusRequest req = new UpdateRadiusRequest(                new UpdateRadiusRequest("labore",                 new RadiusSettings() {{
                                                authenticationProtocol = RadiusAuthenticationProtocolEnum.PAP;
                                                displayLabel = "adipisci";
                                                radiusPort = 683573L;
                                                radiusRetries = 662505L;
                                                radiusServers = new String[]{{
                                                    add("velit"),
                                                    add("culpa"),
                                                }};
                                                radiusTimeout = 665859L;
                                                sharedSecret = "recusandae";
                                                useSameUsername = false;
                                            }};);, UpdateRadiusXAmzTargetEnum.DIRECTORY_SERVICE20150416_UPDATE_RADIUS) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "vel";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "quos";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "labore";
            }};            

            UpdateRadiusResponse res = sdk.sdk.updateRadius(req);

            if (res.updateRadiusResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSettings

Updates the configurable settings for the specified directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSettingsRequest;
import org.openapis.openapi.models.operations.UpdateSettingsResponse;
import org.openapis.openapi.models.operations.UpdateSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Setting;
import org.openapis.openapi.models.shared.UpdateSettingsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSettingsRequest req = new UpdateSettingsRequest(                new UpdateSettingsRequest("facilis",                 new org.openapis.openapi.models.shared.Setting[]{{
                                                add(new Setting("recusandae", "aliquid") {{
                                                    name = "Pearl Hessel";
                                                    value = "nemo";
                                                }}),
                                                add(new Setting("facere", "numquam") {{
                                                    name = "Karla Feest";
                                                    value = "earum";
                                                }}),
                                                add(new Setting("dolore", "sunt") {{
                                                    name = "Ricardo Wisozk";
                                                    value = "necessitatibus";
                                                }}),
                                            }});, UpdateSettingsXAmzTargetEnum.DIRECTORY_SERVICE20150416_UPDATE_SETTINGS) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "non";
                xAmzDate = "amet";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "a";
            }};            

            UpdateSettingsResponse res = sdk.sdk.updateSettings(req);

            if (res.updateSettingsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTrust

Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTrustRequest;
import org.openapis.openapi.models.operations.UpdateTrustResponse;
import org.openapis.openapi.models.operations.UpdateTrustXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelectiveAuthEnum;
import org.openapis.openapi.models.shared.UpdateTrustRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTrustRequest req = new UpdateTrustRequest(                new UpdateTrustRequest("consectetur") {{
                                selectiveAuth = SelectiveAuthEnum.ENABLED;
                            }};, UpdateTrustXAmzTargetEnum.DIRECTORY_SERVICE20150416_UPDATE_TRUST) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "ipsa";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "libero";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "accusamus";
            }};            

            UpdateTrustResponse res = sdk.sdk.updateTrust(req);

            if (res.updateTrustResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## verifyTrust

<p>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VerifyTrustRequest;
import org.openapis.openapi.models.operations.VerifyTrustResponse;
import org.openapis.openapi.models.operations.VerifyTrustXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VerifyTrustRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            VerifyTrustRequest req = new VerifyTrustRequest(                new VerifyTrustRequest("tempora");, VerifyTrustXAmzTargetEnum.DIRECTORY_SERVICE20150416_VERIFY_TRUST) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "voluptas";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "minima";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "dolorum";
            }};            

            VerifyTrustResponse res = sdk.sdk.verifyTrust(req);

            if (res.verifyTrustResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
