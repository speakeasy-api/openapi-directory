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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptSharedDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptSharedDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptSharedDirectoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptSharedDirectoryRequest();
    $request->acceptSharedDirectoryRequest = new AcceptSharedDirectoryRequest();
    $request->acceptSharedDirectoryRequest->sharedDirectoryId = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = AcceptSharedDirectoryXAmzTargetEnum::DIRECTORY_SERVICE20150416_ACCEPT_SHARED_DIRECTORY;

    $response = $sdk->sdk->acceptSharedDirectory($request);

    if ($response->acceptSharedDirectoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addIpRoutes

<p>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddIpRoutesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddIpRoutesRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpRoute;
use \OpenAPI\OpenAPI\Models\Operations\AddIpRoutesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddIpRoutesRequest();
    $request->addIpRoutesRequest = new AddIpRoutesRequest();
    $request->addIpRoutesRequest->directoryId = 'delectus';
    $request->addIpRoutesRequest->ipRoutes = [
        new IpRoute(),
        new IpRoute(),
    ];
    $request->addIpRoutesRequest->updateSecurityGroupForDirectoryControllers = false;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = AddIpRoutesXAmzTargetEnum::DIRECTORY_SERVICE20150416_ADD_IP_ROUTES;

    $response = $sdk->sdk->addIpRoutes($request);

    if ($response->addIpRoutesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addRegion

Adds two domain controllers in the specified Region for the specified directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddRegionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddRegionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectoryVpcSettings;
use \OpenAPI\OpenAPI\Models\Operations\AddRegionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddRegionRequest();
    $request->addRegionRequest = new AddRegionRequest();
    $request->addRegionRequest->directoryId = 'nisi';
    $request->addRegionRequest->regionName = 'recusandae';
    $request->addRegionRequest->vpcSettings = new DirectoryVpcSettings();
    $request->addRegionRequest->vpcSettings->subnetIds = [
        'ab',
        'quis',
        'veritatis',
        'deserunt',
    ];
    $request->addRegionRequest->vpcSettings->vpcId = 'perferendis';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = AddRegionXAmzTargetEnum::DIRECTORY_SERVICE20150416_ADD_REGION;

    $response = $sdk->sdk->addRegion($request);

    if ($response->addRegionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addTagsToResource

Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddTagsToResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AddTagsToResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagsToResourceRequest();
    $request->addTagsToResourceRequest = new AddTagsToResourceRequest();
    $request->addTagsToResourceRequest->resourceId = 'maiores';
    $request->addTagsToResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = AddTagsToResourceXAmzTargetEnum::DIRECTORY_SERVICE20150416_ADD_TAGS_TO_RESOURCE;

    $response = $sdk->sdk->addTagsToResource($request);

    if ($response->addTagsToResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelSchemaExtension

Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelSchemaExtensionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelSchemaExtensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelSchemaExtensionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelSchemaExtensionRequest();
    $request->cancelSchemaExtensionRequest = new CancelSchemaExtensionRequest();
    $request->cancelSchemaExtensionRequest->directoryId = 'nam';
    $request->cancelSchemaExtensionRequest->schemaExtensionId = 'officia';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';
    $request->xAmzTarget = CancelSchemaExtensionXAmzTargetEnum::DIRECTORY_SERVICE20150416_CANCEL_SCHEMA_EXTENSION;

    $response = $sdk->sdk->cancelSchemaExtension($request);

    if ($response->cancelSchemaExtensionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectDirectory

<p>Creates an AD Connector to connect to a self-managed directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConnectDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConnectDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectoryConnectSettings;
use \OpenAPI\OpenAPI\Models\Shared\DirectorySizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\ConnectDirectoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectDirectoryRequest();
    $request->connectDirectoryRequest = new ConnectDirectoryRequest();
    $request->connectDirectoryRequest->connectSettings = new DirectoryConnectSettings();
    $request->connectDirectoryRequest->connectSettings->customerDnsIps = [
        'molestiae',
        'modi',
    ];
    $request->connectDirectoryRequest->connectSettings->customerUserName = 'qui';
    $request->connectDirectoryRequest->connectSettings->subnetIds = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->connectDirectoryRequest->connectSettings->vpcId = 'aspernatur';
    $request->connectDirectoryRequest->description = 'perferendis';
    $request->connectDirectoryRequest->name = 'Faye Cormier';
    $request->connectDirectoryRequest->password = 'natus';
    $request->connectDirectoryRequest->shortName = 'laboriosam';
    $request->connectDirectoryRequest->size = DirectorySizeEnum::LARGE;
    $request->connectDirectoryRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = ConnectDirectoryXAmzTargetEnum::DIRECTORY_SERVICE20150416_CONNECT_DIRECTORY;

    $response = $sdk->sdk->connectDirectory($request);

    if ($response->connectDirectoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAlias

<p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAliasRequest();
    $request->createAliasRequest = new CreateAliasRequest();
    $request->createAliasRequest->alias = 'architecto';
    $request->createAliasRequest->directoryId = 'ipsa';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = CreateAliasXAmzTargetEnum::DIRECTORY_SERVICE20150416_CREATE_ALIAS;

    $response = $sdk->sdk->createAlias($request);

    if ($response->createAliasResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createComputer

Creates an Active Directory computer object in the specified directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateComputerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateComputerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Attribute;
use \OpenAPI\OpenAPI\Models\Operations\CreateComputerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateComputerRequest();
    $request->createComputerRequest = new CreateComputerRequest();
    $request->createComputerRequest->computerAttributes = [
        new Attribute(),
    ];
    $request->createComputerRequest->computerName = 'nobis';
    $request->createComputerRequest->directoryId = 'enim';
    $request->createComputerRequest->organizationalUnitDistinguishedName = 'omnis';
    $request->createComputerRequest->password = 'nemo';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = CreateComputerXAmzTargetEnum::DIRECTORY_SERVICE20150416_CREATE_COMPUTER;

    $response = $sdk->sdk->createComputer($request);

    if ($response->createComputerResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConditionalForwarder

Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConditionalForwarderRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConditionalForwarderRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConditionalForwarderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConditionalForwarderRequest();
    $request->createConditionalForwarderRequest = new CreateConditionalForwarderRequest();
    $request->createConditionalForwarderRequest->directoryId = 'architecto';
    $request->createConditionalForwarderRequest->dnsIpAddrs = [
        'dolorem',
        'culpa',
        'consequuntur',
    ];
    $request->createConditionalForwarderRequest->remoteDomainName = 'repellat';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = CreateConditionalForwarderXAmzTargetEnum::DIRECTORY_SERVICE20150416_CREATE_CONDITIONAL_FORWARDER;

    $response = $sdk->sdk->createConditionalForwarder($request);

    if ($response->createConditionalForwarderResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDirectory

<p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectorySizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\DirectoryVpcSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateDirectoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDirectoryRequest();
    $request->createDirectoryRequest = new CreateDirectoryRequest();
    $request->createDirectoryRequest->description = 'error';
    $request->createDirectoryRequest->name = 'Beatrice Brown';
    $request->createDirectoryRequest->password = 'enim';
    $request->createDirectoryRequest->shortName = 'odit';
    $request->createDirectoryRequest->size = DirectorySizeEnum::LARGE;
    $request->createDirectoryRequest->tags = [
        new Tag(),
    ];
    $request->createDirectoryRequest->vpcSettings = new DirectoryVpcSettings();
    $request->createDirectoryRequest->vpcSettings->subnetIds = [
        'ipsam',
        'id',
        'possimus',
        'aut',
    ];
    $request->createDirectoryRequest->vpcSettings->vpcId = 'quasi';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = CreateDirectoryXAmzTargetEnum::DIRECTORY_SERVICE20150416_CREATE_DIRECTORY;

    $response = $sdk->sdk->createDirectory($request);

    if ($response->createDirectoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLogSubscription

Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLogSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLogSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLogSubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLogSubscriptionRequest();
    $request->createLogSubscriptionRequest = new CreateLogSubscriptionRequest();
    $request->createLogSubscriptionRequest->directoryId = 'nihil';
    $request->createLogSubscriptionRequest->logGroupName = 'praesentium';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = CreateLogSubscriptionXAmzTargetEnum::DIRECTORY_SERVICE20150416_CREATE_LOG_SUBSCRIPTION;

    $response = $sdk->sdk->createLogSubscription($request);

    if ($response->createLogSubscriptionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMicrosoftAD

<p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMicrosoftADRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMicrosoftADRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectoryEditionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\DirectoryVpcSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateMicrosoftADXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMicrosoftADRequest();
    $request->createMicrosoftADRequest = new CreateMicrosoftADRequest();
    $request->createMicrosoftADRequest->description = 'reprehenderit';
    $request->createMicrosoftADRequest->edition = DirectoryEditionEnum::ENTERPRISE;
    $request->createMicrosoftADRequest->name = 'Willie Hessel';
    $request->createMicrosoftADRequest->password = 'dicta';
    $request->createMicrosoftADRequest->shortName = 'harum';
    $request->createMicrosoftADRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createMicrosoftADRequest->vpcSettings = new DirectoryVpcSettings();
    $request->createMicrosoftADRequest->vpcSettings->subnetIds = [
        'commodi',
        'repudiandae',
        'quae',
        'ipsum',
    ];
    $request->createMicrosoftADRequest->vpcSettings->vpcId = 'quidem';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->xAmzTarget = CreateMicrosoftADXAmzTargetEnum::DIRECTORY_SERVICE20150416_CREATE_MICROSOFT_AD;

    $response = $sdk->sdk->createMicrosoftAD($request);

    if ($response->createMicrosoftADResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSnapshot

<p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSnapshotRequest();
    $request->createSnapshotRequest = new CreateSnapshotRequest();
    $request->createSnapshotRequest->directoryId = 'quasi';
    $request->createSnapshotRequest->name = 'Kirk Boehm';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = CreateSnapshotXAmzTargetEnum::DIRECTORY_SERVICE20150416_CREATE_SNAPSHOT;

    $response = $sdk->sdk->createSnapshot($request);

    if ($response->createSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrust

<p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\SelectiveAuthEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrustDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrustTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrustRequest();
    $request->createTrustRequest = new CreateTrustRequest();
    $request->createTrustRequest->conditionalForwarderIpAddrs = [
        'labore',
        'modi',
        'qui',
        'aliquid',
    ];
    $request->createTrustRequest->directoryId = 'cupiditate';
    $request->createTrustRequest->remoteDomainName = 'quos';
    $request->createTrustRequest->selectiveAuth = SelectiveAuthEnum::ENABLED;
    $request->createTrustRequest->trustDirection = TrustDirectionEnum::ONE_WAY_OUTGOING;
    $request->createTrustRequest->trustPassword = 'assumenda';
    $request->createTrustRequest->trustType = TrustTypeEnum::FOREST;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = CreateTrustXAmzTargetEnum::DIRECTORY_SERVICE20150416_CREATE_TRUST;

    $response = $sdk->sdk->createTrust($request);

    if ($response->createTrustResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConditionalForwarder

Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConditionalForwarderRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConditionalForwarderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConditionalForwarderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConditionalForwarderRequest();
    $request->deleteConditionalForwarderRequest = new DeleteConditionalForwarderRequest();
    $request->deleteConditionalForwarderRequest->directoryId = 'labore';
    $request->deleteConditionalForwarderRequest->remoteDomainName = 'delectus';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = DeleteConditionalForwarderXAmzTargetEnum::DIRECTORY_SERVICE20150416_DELETE_CONDITIONAL_FORWARDER;

    $response = $sdk->sdk->deleteConditionalForwarder($request);

    if ($response->deleteConditionalForwarderResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDirectory

<p>Deletes an Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDirectoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDirectoryRequest();
    $request->deleteDirectoryRequest = new DeleteDirectoryRequest();
    $request->deleteDirectoryRequest->directoryId = 'sint';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DeleteDirectoryXAmzTargetEnum::DIRECTORY_SERVICE20150416_DELETE_DIRECTORY;

    $response = $sdk->sdk->deleteDirectory($request);

    if ($response->deleteDirectoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLogSubscription

Deletes the specified log subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLogSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLogSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLogSubscriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLogSubscriptionRequest();
    $request->deleteLogSubscriptionRequest = new DeleteLogSubscriptionRequest();
    $request->deleteLogSubscriptionRequest->directoryId = 'illum';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = DeleteLogSubscriptionXAmzTargetEnum::DIRECTORY_SERVICE20150416_DELETE_LOG_SUBSCRIPTION;

    $response = $sdk->sdk->deleteLogSubscription($request);

    if ($response->deleteLogSubscriptionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSnapshot

Deletes a directory snapshot.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSnapshotRequest();
    $request->deleteSnapshotRequest = new DeleteSnapshotRequest();
    $request->deleteSnapshotRequest->snapshotId = 'aliquid';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = DeleteSnapshotXAmzTargetEnum::DIRECTORY_SERVICE20150416_DELETE_SNAPSHOT;

    $response = $sdk->sdk->deleteSnapshot($request);

    if ($response->deleteSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTrust

Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTrustRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrustXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrustRequest();
    $request->deleteTrustRequest = new DeleteTrustRequest();
    $request->deleteTrustRequest->deleteAssociatedConditionalForwarder = false;
    $request->deleteTrustRequest->trustId = 'quidem';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = DeleteTrustXAmzTargetEnum::DIRECTORY_SERVICE20150416_DELETE_TRUST;

    $response = $sdk->sdk->deleteTrust($request);

    if ($response->deleteTrustResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterCertificate

Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterCertificateRequest();
    $request->deregisterCertificateRequest = new DeregisterCertificateRequest();
    $request->deregisterCertificateRequest->certificateId = 'deserunt';
    $request->deregisterCertificateRequest->directoryId = 'nisi';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = DeregisterCertificateXAmzTargetEnum::DIRECTORY_SERVICE20150416_DEREGISTER_CERTIFICATE;

    $response = $sdk->sdk->deregisterCertificate($request);

    if ($response->deregisterCertificateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterEventTopic

Removes the specified directory as a publisher to the specified Amazon SNS topic.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterEventTopicRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterEventTopicRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterEventTopicXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterEventTopicRequest();
    $request->deregisterEventTopicRequest = new DeregisterEventTopicRequest();
    $request->deregisterEventTopicRequest->directoryId = 'distinctio';
    $request->deregisterEventTopicRequest->topicName = 'id';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DeregisterEventTopicXAmzTargetEnum::DIRECTORY_SERVICE20150416_DEREGISTER_EVENT_TOPIC;

    $response = $sdk->sdk->deregisterEventTopic($request);

    if ($response->deregisterEventTopicResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCertificate

Displays information about the certificate registered for secure LDAP or client certificate authentication.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCertificateRequest();
    $request->describeCertificateRequest = new DescribeCertificateRequest();
    $request->describeCertificateRequest->certificateId = 'aspernatur';
    $request->describeCertificateRequest->directoryId = 'architecto';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = DescribeCertificateXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_CERTIFICATE;

    $response = $sdk->sdk->describeCertificate($request);

    if ($response->describeCertificateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeClientAuthenticationSettings

Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClientAuthenticationSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeClientAuthenticationSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClientAuthenticationSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeClientAuthenticationSettingsRequest();
    $request->describeClientAuthenticationSettingsRequest = new DescribeClientAuthenticationSettingsRequest();
    $request->describeClientAuthenticationSettingsRequest->directoryId = 'accusantium';
    $request->describeClientAuthenticationSettingsRequest->limit = 653201;
    $request->describeClientAuthenticationSettingsRequest->nextToken = 'reiciendis';
    $request->describeClientAuthenticationSettingsRequest->type = ClientAuthenticationTypeEnum::SMART_CARD_OR_PASSWORD;
    $request->limit = 'ad';
    $request->nextToken = 'eum';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = DescribeClientAuthenticationSettingsXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_CLIENT_AUTHENTICATION_SETTINGS;

    $response = $sdk->sdk->describeClientAuthenticationSettings($request);

    if ($response->describeClientAuthenticationSettingsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConditionalForwarders

<p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConditionalForwardersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConditionalForwardersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConditionalForwardersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConditionalForwardersRequest();
    $request->describeConditionalForwardersRequest = new DescribeConditionalForwardersRequest();
    $request->describeConditionalForwardersRequest->directoryId = 'debitis';
    $request->describeConditionalForwardersRequest->remoteDomainNames = [
        'maxime',
        'deleniti',
    ];
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'expedita';
    $request->xAmzTarget = DescribeConditionalForwardersXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_CONDITIONAL_FORWARDERS;

    $response = $sdk->sdk->describeConditionalForwarders($request);

    if ($response->describeConditionalForwardersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDirectories

<p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDirectoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDirectoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDirectoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDirectoriesRequest();
    $request->describeDirectoriesRequest = new DescribeDirectoriesRequest();
    $request->describeDirectoriesRequest->directoryIds = [
        'repellat',
        'quibusdam',
    ];
    $request->describeDirectoriesRequest->limit = 149448;
    $request->describeDirectoriesRequest->nextToken = 'saepe';
    $request->limit = 'pariatur';
    $request->nextToken = 'accusantium';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DescribeDirectoriesXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_DIRECTORIES;

    $response = $sdk->sdk->describeDirectories($request);

    if ($response->describeDirectoriesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDomainControllers

Provides information about any domain controllers in your directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDomainControllersRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDomainControllersRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDomainControllersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDomainControllersRequest();
    $request->describeDomainControllersRequest = new DescribeDomainControllersRequest();
    $request->describeDomainControllersRequest->directoryId = 'pariatur';
    $request->describeDomainControllersRequest->domainControllerIds = [
        'ea',
        'excepturi',
        'odit',
        'ea',
    ];
    $request->describeDomainControllersRequest->limit = 33222;
    $request->describeDomainControllersRequest->nextToken = 'ab';
    $request->limit = 'maiores';
    $request->nextToken = 'quidem';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = DescribeDomainControllersXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_DOMAIN_CONTROLLERS;

    $response = $sdk->sdk->describeDomainControllers($request);

    if ($response->describeDomainControllersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEventTopics

<p>Obtains information about which Amazon SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventTopicsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEventTopicsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEventTopicsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEventTopicsRequest();
    $request->describeEventTopicsRequest = new DescribeEventTopicsRequest();
    $request->describeEventTopicsRequest->directoryId = 'voluptatibus';
    $request->describeEventTopicsRequest->topicNames = [
        'fugiat',
    ];
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = DescribeEventTopicsXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_EVENT_TOPICS;

    $response = $sdk->sdk->describeEventTopics($request);

    if ($response->describeEventTopicsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLDAPSSettings

Describes the status of LDAP security for the specified directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLDAPSSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLDAPSSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\LDAPSTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLDAPSSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLDAPSSettingsRequest();
    $request->describeLDAPSSettingsRequest = new DescribeLDAPSSettingsRequest();
    $request->describeLDAPSSettingsRequest->directoryId = 'dolores';
    $request->describeLDAPSSettingsRequest->limit = 339404;
    $request->describeLDAPSSettingsRequest->nextToken = 'totam';
    $request->describeLDAPSSettingsRequest->type = LDAPSTypeEnum::CLIENT;
    $request->limit = 'dignissimos';
    $request->nextToken = 'eaque';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = DescribeLDAPSSettingsXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_LDAPS_SETTINGS;

    $response = $sdk->sdk->describeLDAPSSettings($request);

    if ($response->describeLDAPSSettingsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRegions

Provides information about the Regions that are configured for multi-Region replication.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRegionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRegionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRegionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRegionsRequest();
    $request->describeRegionsRequest = new DescribeRegionsRequest();
    $request->describeRegionsRequest->directoryId = 'dolor';
    $request->describeRegionsRequest->nextToken = 'vero';
    $request->describeRegionsRequest->regionName = 'nostrum';
    $request->nextToken = 'hic';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = DescribeRegionsXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_REGIONS;

    $response = $sdk->sdk->describeRegions($request);

    if ($response->describeRegionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSettings

Retrieves information about the configurable settings for the specified directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DirectoryConfigurationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSettingsRequest();
    $request->describeSettingsRequest = new DescribeSettingsRequest();
    $request->describeSettingsRequest->directoryId = 'blanditiis';
    $request->describeSettingsRequest->nextToken = 'error';
    $request->describeSettingsRequest->status = DirectoryConfigurationStatusEnum::REQUESTED;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = DescribeSettingsXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_SETTINGS;

    $response = $sdk->sdk->describeSettings($request);

    if ($response->describeSettingsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSharedDirectories

Returns the shared directories in your account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSharedDirectoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSharedDirectoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSharedDirectoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSharedDirectoriesRequest();
    $request->describeSharedDirectoriesRequest = new DescribeSharedDirectoriesRequest();
    $request->describeSharedDirectoriesRequest->limit = 679091;
    $request->describeSharedDirectoriesRequest->nextToken = 'deleniti';
    $request->describeSharedDirectoriesRequest->ownerDirectoryId = 'pariatur';
    $request->describeSharedDirectoriesRequest->sharedDirectoryIds = [
        'nobis',
        'libero',
        'delectus',
    ];
    $request->limit = 'quaerat';
    $request->nextToken = 'quos';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = DescribeSharedDirectoriesXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_SHARED_DIRECTORIES;

    $response = $sdk->sdk->describeSharedDirectories($request);

    if ($response->describeSharedDirectoriesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSnapshots

<p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSnapshotsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSnapshotsRequest();
    $request->describeSnapshotsRequest = new DescribeSnapshotsRequest();
    $request->describeSnapshotsRequest->directoryId = 'excepturi';
    $request->describeSnapshotsRequest->limit = 739551;
    $request->describeSnapshotsRequest->nextToken = 'voluptate';
    $request->describeSnapshotsRequest->snapshotIds = [
        'reiciendis',
        'amet',
    ];
    $request->limit = 'dolorum';
    $request->nextToken = 'numquam';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DescribeSnapshotsXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_SNAPSHOTS;

    $response = $sdk->sdk->describeSnapshots($request);

    if ($response->describeSnapshotsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTrusts

<p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTrustsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTrustsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTrustsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTrustsRequest();
    $request->describeTrustsRequest = new DescribeTrustsRequest();
    $request->describeTrustsRequest->directoryId = 'quidem';
    $request->describeTrustsRequest->limit = 976405;
    $request->describeTrustsRequest->nextToken = 'voluptas';
    $request->describeTrustsRequest->trustIds = [
        'eos',
        'atque',
        'sit',
    ];
    $request->limit = 'fugiat';
    $request->nextToken = 'ab';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DescribeTrustsXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_TRUSTS;

    $response = $sdk->sdk->describeTrusts($request);

    if ($response->describeTrustsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUpdateDirectory

 Describes the updates of a directory for a particular update type. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUpdateDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUpdateDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUpdateDirectoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUpdateDirectoryRequest();
    $request->describeUpdateDirectoryRequest = new DescribeUpdateDirectoryRequest();
    $request->describeUpdateDirectoryRequest->directoryId = 'necessitatibus';
    $request->describeUpdateDirectoryRequest->nextToken = 'distinctio';
    $request->describeUpdateDirectoryRequest->regionName = 'asperiores';
    $request->describeUpdateDirectoryRequest->updateType = UpdateTypeEnum::OS;
    $request->nextToken = 'nihil';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DescribeUpdateDirectoryXAmzTargetEnum::DIRECTORY_SERVICE20150416_DESCRIBE_UPDATE_DIRECTORY;

    $response = $sdk->sdk->describeUpdateDirectory($request);

    if ($response->describeUpdateDirectoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableClientAuthentication

Disables alternative client authentication methods for the specified directory. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableClientAuthenticationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisableClientAuthenticationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisableClientAuthenticationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableClientAuthenticationRequest();
    $request->disableClientAuthenticationRequest = new DisableClientAuthenticationRequest();
    $request->disableClientAuthenticationRequest->directoryId = 'amet';
    $request->disableClientAuthenticationRequest->type = ClientAuthenticationTypeEnum::SMART_CARD_OR_PASSWORD;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = DisableClientAuthenticationXAmzTargetEnum::DIRECTORY_SERVICE20150416_DISABLE_CLIENT_AUTHENTICATION;

    $response = $sdk->sdk->disableClientAuthentication($request);

    if ($response->disableClientAuthenticationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableLDAPS

Deactivates LDAP secure calls for the specified directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableLDAPSRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisableLDAPSRequest;
use \OpenAPI\OpenAPI\Models\Shared\LDAPSTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisableLDAPSXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableLDAPSRequest();
    $request->disableLDAPSRequest = new DisableLDAPSRequest();
    $request->disableLDAPSRequest->directoryId = 'repellendus';
    $request->disableLDAPSRequest->type = LDAPSTypeEnum::CLIENT;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DisableLDAPSXAmzTargetEnum::DIRECTORY_SERVICE20150416_DISABLE_LDAPS;

    $response = $sdk->sdk->disableLDAPS($request);

    if ($response->disableLDAPSResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableRadius

Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableRadiusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisableRadiusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableRadiusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableRadiusRequest();
    $request->disableRadiusRequest = new DisableRadiusRequest();
    $request->disableRadiusRequest->directoryId = 'quod';
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = DisableRadiusXAmzTargetEnum::DIRECTORY_SERVICE20150416_DISABLE_RADIUS;

    $response = $sdk->sdk->disableRadius($request);

    if ($response->disableRadiusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableSso

Disables single-sign on for a directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableSsoRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisableSsoRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableSsoXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableSsoRequest();
    $request->disableSsoRequest = new DisableSsoRequest();
    $request->disableSsoRequest->directoryId = 'ipsum';
    $request->disableSsoRequest->password = 'quisquam';
    $request->disableSsoRequest->userName = 'Ulises_Fay25';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'expedita';
    $request->xAmzTarget = DisableSsoXAmzTargetEnum::DIRECTORY_SERVICE20150416_DISABLE_SSO;

    $response = $sdk->sdk->disableSso($request);

    if ($response->disableSsoResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableClientAuthentication

Enables alternative client authentication methods for the specified directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableClientAuthenticationRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnableClientAuthenticationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnableClientAuthenticationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableClientAuthenticationRequest();
    $request->enableClientAuthenticationRequest = new EnableClientAuthenticationRequest();
    $request->enableClientAuthenticationRequest->directoryId = 'neque';
    $request->enableClientAuthenticationRequest->type = ClientAuthenticationTypeEnum::SMART_CARD;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = EnableClientAuthenticationXAmzTargetEnum::DIRECTORY_SERVICE20150416_ENABLE_CLIENT_AUTHENTICATION;

    $response = $sdk->sdk->enableClientAuthentication($request);

    if ($response->enableClientAuthenticationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableLDAPS

Activates the switch for the specific directory to always use LDAP secure calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableLDAPSRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnableLDAPSRequest;
use \OpenAPI\OpenAPI\Models\Shared\LDAPSTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnableLDAPSXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableLDAPSRequest();
    $request->enableLDAPSRequest = new EnableLDAPSRequest();
    $request->enableLDAPSRequest->directoryId = 'qui';
    $request->enableLDAPSRequest->type = LDAPSTypeEnum::CLIENT;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = EnableLDAPSXAmzTargetEnum::DIRECTORY_SERVICE20150416_ENABLE_LDAPS;

    $response = $sdk->sdk->enableLDAPS($request);

    if ($response->enableLDAPSResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableRadius

Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableRadiusRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnableRadiusRequest;
use \OpenAPI\OpenAPI\Models\Shared\RadiusSettings;
use \OpenAPI\OpenAPI\Models\Shared\RadiusAuthenticationProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\EnableRadiusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableRadiusRequest();
    $request->enableRadiusRequest = new EnableRadiusRequest();
    $request->enableRadiusRequest->directoryId = 'incidunt';
    $request->enableRadiusRequest->radiusSettings = new RadiusSettings();
    $request->enableRadiusRequest->radiusSettings->authenticationProtocol = RadiusAuthenticationProtocolEnum::PAP;
    $request->enableRadiusRequest->radiusSettings->displayLabel = 'dolores';
    $request->enableRadiusRequest->radiusSettings->radiusPort = 716860;
    $request->enableRadiusRequest->radiusSettings->radiusRetries = 704474;
    $request->enableRadiusRequest->radiusSettings->radiusServers = [
        'quam',
        'molestias',
    ];
    $request->enableRadiusRequest->radiusSettings->radiusTimeout = 840429;
    $request->enableRadiusRequest->radiusSettings->sharedSecret = 'qui';
    $request->enableRadiusRequest->radiusSettings->useSameUsername = false;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = EnableRadiusXAmzTargetEnum::DIRECTORY_SERVICE20150416_ENABLE_RADIUS;

    $response = $sdk->sdk->enableRadius($request);

    if ($response->enableRadiusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableSso

Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableSsoRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnableSsoRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableSsoXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableSsoRequest();
    $request->enableSsoRequest = new EnableSsoRequest();
    $request->enableSsoRequest->directoryId = 'hic';
    $request->enableSsoRequest->password = 'voluptatem';
    $request->enableSsoRequest->userName = 'Nova.Rogahn90';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = EnableSsoXAmzTargetEnum::DIRECTORY_SERVICE20150416_ENABLE_SSO;

    $response = $sdk->sdk->enableSso($request);

    if ($response->enableSsoResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDirectoryLimits

Obtains directory limit information for the current Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectoryLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectoryLimitsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDirectoryLimitsRequest();
    $request->requestBody = [
        'dolorem' => 'dolore',
        'labore' => 'adipisci',
        'dolorum' => 'architecto',
        'quae' => 'aut',
    ];
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = GetDirectoryLimitsXAmzTargetEnum::DIRECTORY_SERVICE20150416_GET_DIRECTORY_LIMITS;

    $response = $sdk->sdk->getDirectoryLimits($request);

    if ($response->getDirectoryLimitsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSnapshotLimits

Obtains the manual snapshot limits for a directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSnapshotLimitsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSnapshotLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSnapshotLimitsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSnapshotLimitsRequest();
    $request->getSnapshotLimitsRequest = new GetSnapshotLimitsRequest();
    $request->getSnapshotLimitsRequest->directoryId = 'ut';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = GetSnapshotLimitsXAmzTargetEnum::DIRECTORY_SERVICE20150416_GET_SNAPSHOT_LIMITS;

    $response = $sdk->sdk->getSnapshotLimits($request);

    if ($response->getSnapshotLimitsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCertificates

For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCertificatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCertificatesRequest();
    $request->limit = 'voluptatibus';
    $request->listCertificatesRequest = new ListCertificatesRequest();
    $request->listCertificatesRequest->directoryId = 'quisquam';
    $request->listCertificatesRequest->limit = 876506;
    $request->listCertificatesRequest->nextToken = 'omnis';
    $request->nextToken = 'quis';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = ListCertificatesXAmzTargetEnum::DIRECTORY_SERVICE20150416_LIST_CERTIFICATES;

    $response = $sdk->sdk->listCertificates($request);

    if ($response->listCertificatesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIpRoutes

Lists the address blocks that you have added to a directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIpRoutesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListIpRoutesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIpRoutesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIpRoutesRequest();
    $request->limit = 'hic';
    $request->listIpRoutesRequest = new ListIpRoutesRequest();
    $request->listIpRoutesRequest->directoryId = 'distinctio';
    $request->listIpRoutesRequest->limit = 799203;
    $request->listIpRoutesRequest->nextToken = 'odio';
    $request->nextToken = 'similique';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = ListIpRoutesXAmzTargetEnum::DIRECTORY_SERVICE20150416_LIST_IP_ROUTES;

    $response = $sdk->sdk->listIpRoutes($request);

    if ($response->listIpRoutesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLogSubscriptions

Lists the active log subscriptions for the Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLogSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLogSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLogSubscriptionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLogSubscriptionsRequest();
    $request->limit = 'natus';
    $request->listLogSubscriptionsRequest = new ListLogSubscriptionsRequest();
    $request->listLogSubscriptionsRequest->directoryId = 'impedit';
    $request->listLogSubscriptionsRequest->limit = 13236;
    $request->listLogSubscriptionsRequest->nextToken = 'voluptatibus';
    $request->nextToken = 'exercitationem';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = ListLogSubscriptionsXAmzTargetEnum::DIRECTORY_SERVICE20150416_LIST_LOG_SUBSCRIPTIONS;

    $response = $sdk->sdk->listLogSubscriptions($request);

    if ($response->listLogSubscriptionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSchemaExtensions

Lists all schema extensions applied to a Microsoft AD Directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSchemaExtensionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSchemaExtensionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSchemaExtensionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSchemaExtensionsRequest();
    $request->limit = 'ducimus';
    $request->listSchemaExtensionsRequest = new ListSchemaExtensionsRequest();
    $request->listSchemaExtensionsRequest->directoryId = 'alias';
    $request->listSchemaExtensionsRequest->limit = 639473;
    $request->listSchemaExtensionsRequest->nextToken = 'tempora';
    $request->nextToken = 'ipsam';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = ListSchemaExtensionsXAmzTargetEnum::DIRECTORY_SERVICE20150416_LIST_SCHEMA_EXTENSIONS;

    $response = $sdk->sdk->listSchemaExtensions($request);

    if ($response->listSchemaExtensionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all tags on a directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->limit = 'laudantium';
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->limit = 120657;
    $request->listTagsForResourceRequest->nextToken = 'dolor';
    $request->listTagsForResourceRequest->resourceId = 'maiores';
    $request->nextToken = 'quasi';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::DIRECTORY_SERVICE20150416_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerCertificate

Registers a certificate for a secure LDAP or client certificate authentication.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientCertAuthSettings;
use \OpenAPI\OpenAPI\Models\Shared\CertificateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\RegisterCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterCertificateRequest();
    $request->registerCertificateRequest = new RegisterCertificateRequest();
    $request->registerCertificateRequest->certificateData = 'saepe';
    $request->registerCertificateRequest->clientCertAuthSettings = new ClientCertAuthSettings();
    $request->registerCertificateRequest->clientCertAuthSettings->ocspUrl = 'ea';
    $request->registerCertificateRequest->directoryId = 'impedit';
    $request->registerCertificateRequest->type = CertificateTypeEnum::CLIENT_CERT_AUTH;
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = RegisterCertificateXAmzTargetEnum::DIRECTORY_SERVICE20150416_REGISTER_CERTIFICATE;

    $response = $sdk->sdk->registerCertificate($request);

    if ($response->registerCertificateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerEventTopic

Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterEventTopicRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterEventTopicRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterEventTopicXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterEventTopicRequest();
    $request->registerEventTopicRequest = new RegisterEventTopicRequest();
    $request->registerEventTopicRequest->directoryId = 'recusandae';
    $request->registerEventTopicRequest->topicName = 'aspernatur';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = RegisterEventTopicXAmzTargetEnum::DIRECTORY_SERVICE20150416_REGISTER_EVENT_TOPIC;

    $response = $sdk->sdk->registerEventTopic($request);

    if ($response->registerEventTopicResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rejectSharedDirectory

Rejects a directory sharing request that was sent from the directory owner account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RejectSharedDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\RejectSharedDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\RejectSharedDirectoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RejectSharedDirectoryRequest();
    $request->rejectSharedDirectoryRequest = new RejectSharedDirectoryRequest();
    $request->rejectSharedDirectoryRequest->sharedDirectoryId = 'impedit';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = RejectSharedDirectoryXAmzTargetEnum::DIRECTORY_SERVICE20150416_REJECT_SHARED_DIRECTORY;

    $response = $sdk->sdk->rejectSharedDirectory($request);

    if ($response->rejectSharedDirectoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeIpRoutes

Removes IP address blocks from a directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveIpRoutesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveIpRoutesRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveIpRoutesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveIpRoutesRequest();
    $request->removeIpRoutesRequest = new RemoveIpRoutesRequest();
    $request->removeIpRoutesRequest->cidrIps = [
        'placeat',
        'velit',
        'eum',
    ];
    $request->removeIpRoutesRequest->directoryId = 'autem';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = RemoveIpRoutesXAmzTargetEnum::DIRECTORY_SERVICE20150416_REMOVE_IP_ROUTES;

    $response = $sdk->sdk->removeIpRoutes($request);

    if ($response->removeIpRoutesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeRegion

Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the <code>DeleteDirectory</code> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveRegionRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveRegionRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveRegionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveRegionRequest();
    $request->removeRegionRequest = new RemoveRegionRequest();
    $request->removeRegionRequest->directoryId = 'tempora';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = RemoveRegionXAmzTargetEnum::DIRECTORY_SERVICE20150416_REMOVE_REGION;

    $response = $sdk->sdk->removeRegion($request);

    if ($response->removeRegionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeTagsFromResource

Removes tags from a directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveTagsFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagsFromResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveTagsFromResourceRequest();
    $request->removeTagsFromResourceRequest = new RemoveTagsFromResourceRequest();
    $request->removeTagsFromResourceRequest->resourceId = 'eius';
    $request->removeTagsFromResourceRequest->tagKeys = [
        'esse',
        'rem',
    ];
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = RemoveTagsFromResourceXAmzTargetEnum::DIRECTORY_SERVICE20150416_REMOVE_TAGS_FROM_RESOURCE;

    $response = $sdk->sdk->removeTagsFromResource($request);

    if ($response->removeTagsFromResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetUserPassword

<p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>Amazon Web Services Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration Guide</i>.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResetUserPasswordRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResetUserPasswordRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResetUserPasswordXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetUserPasswordRequest();
    $request->resetUserPasswordRequest = new ResetUserPasswordRequest();
    $request->resetUserPasswordRequest->directoryId = 'assumenda';
    $request->resetUserPasswordRequest->newPassword = 'eos';
    $request->resetUserPasswordRequest->userName = 'Johathan5';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = ResetUserPasswordXAmzTargetEnum::DIRECTORY_SERVICE20150416_RESET_USER_PASSWORD;

    $response = $sdk->sdk->resetUserPassword($request);

    if ($response->resetUserPasswordResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreFromSnapshot

<p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreFromSnapshotRequest;
use \OpenAPI\OpenAPI\Models\Operations\RestoreFromSnapshotXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreFromSnapshotRequest();
    $request->restoreFromSnapshotRequest = new RestoreFromSnapshotRequest();
    $request->restoreFromSnapshotRequest->snapshotId = 'eius';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = RestoreFromSnapshotXAmzTargetEnum::DIRECTORY_SERVICE20150416_RESTORE_FROM_SNAPSHOT;

    $response = $sdk->sdk->restoreFromSnapshot($request);

    if ($response->restoreFromSnapshotResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## shareDirectory

<p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p> <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ShareDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShareDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ShareMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ShareTarget;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ShareDirectoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ShareDirectoryRequest();
    $request->shareDirectoryRequest = new ShareDirectoryRequest();
    $request->shareDirectoryRequest->directoryId = 'ipsam';
    $request->shareDirectoryRequest->shareMethod = ShareMethodEnum::ORGANIZATIONS;
    $request->shareDirectoryRequest->shareNotes = 'sequi';
    $request->shareDirectoryRequest->shareTarget = new ShareTarget();
    $request->shareDirectoryRequest->shareTarget->id = 'c7e0bc71-78e4-4796-b2a7-0c688282aa48';
    $request->shareDirectoryRequest->shareTarget->type = TargetTypeEnum::ACCOUNT;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'ratione';
    $request->xAmzTarget = ShareDirectoryXAmzTargetEnum::DIRECTORY_SERVICE20150416_SHARE_DIRECTORY;

    $response = $sdk->sdk->shareDirectory($request);

    if ($response->shareDirectoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSchemaExtension

Applies a schema extension to a Microsoft AD directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSchemaExtensionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartSchemaExtensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartSchemaExtensionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSchemaExtensionRequest();
    $request->startSchemaExtensionRequest = new StartSchemaExtensionRequest();
    $request->startSchemaExtensionRequest->createSnapshotBeforeSchemaExtension = false;
    $request->startSchemaExtensionRequest->description = 'explicabo';
    $request->startSchemaExtensionRequest->directoryId = 'saepe';
    $request->startSchemaExtensionRequest->ldifContent = 'occaecati';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'eveniet';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = StartSchemaExtensionXAmzTargetEnum::DIRECTORY_SERVICE20150416_START_SCHEMA_EXTENSION;

    $response = $sdk->sdk->startSchemaExtension($request);

    if ($response->startSchemaExtensionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unshareDirectory

Stops the directory sharing between the directory owner and consumer accounts. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnshareDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnshareDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnshareTarget;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UnshareDirectoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnshareDirectoryRequest();
    $request->unshareDirectoryRequest = new UnshareDirectoryRequest();
    $request->unshareDirectoryRequest->directoryId = 'quod';
    $request->unshareDirectoryRequest->unshareTarget = new UnshareTarget();
    $request->unshareDirectoryRequest->unshareTarget->id = 'be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87';
    $request->unshareDirectoryRequest->unshareTarget->type = TargetTypeEnum::ACCOUNT;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'quia';
    $request->xAmzTarget = UnshareDirectoryXAmzTargetEnum::DIRECTORY_SERVICE20150416_UNSHARE_DIRECTORY;

    $response = $sdk->sdk->unshareDirectory($request);

    if ($response->unshareDirectoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConditionalForwarder

Updates a conditional forwarder that has been set up for your Amazon Web Services directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConditionalForwarderRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConditionalForwarderRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConditionalForwarderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConditionalForwarderRequest();
    $request->updateConditionalForwarderRequest = new UpdateConditionalForwarderRequest();
    $request->updateConditionalForwarderRequest->directoryId = 'eveniet';
    $request->updateConditionalForwarderRequest->dnsIpAddrs = [
        'facere',
        'veritatis',
        'consequuntur',
        'quasi',
    ];
    $request->updateConditionalForwarderRequest->remoteDomainName = 'similique';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = UpdateConditionalForwarderXAmzTargetEnum::DIRECTORY_SERVICE20150416_UPDATE_CONDITIONAL_FORWARDER;

    $response = $sdk->sdk->updateConditionalForwarder($request);

    if ($response->updateConditionalForwarderResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDirectorySetup

 Updates the directory for a particular update type. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDirectorySetupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDirectorySetupRequest;
use \OpenAPI\OpenAPI\Models\Shared\OSUpdateSettings;
use \OpenAPI\OpenAPI\Models\Shared\OSVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDirectorySetupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDirectorySetupRequest();
    $request->updateDirectorySetupRequest = new UpdateDirectorySetupRequest();
    $request->updateDirectorySetupRequest->createSnapshotBeforeUpdate = false;
    $request->updateDirectorySetupRequest->directoryId = 'eius';
    $request->updateDirectorySetupRequest->osUpdateSettings = new OSUpdateSettings();
    $request->updateDirectorySetupRequest->osUpdateSettings->osVersion = OSVersionEnum::SERVER2019;
    $request->updateDirectorySetupRequest->updateType = UpdateTypeEnum::OS;
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = UpdateDirectorySetupXAmzTargetEnum::DIRECTORY_SERVICE20150416_UPDATE_DIRECTORY_SETUP;

    $response = $sdk->sdk->updateDirectorySetup($request);

    if ($response->updateDirectorySetupResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNumberOfDomainControllers

Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNumberOfDomainControllersRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNumberOfDomainControllersRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNumberOfDomainControllersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNumberOfDomainControllersRequest();
    $request->updateNumberOfDomainControllersRequest = new UpdateNumberOfDomainControllersRequest();
    $request->updateNumberOfDomainControllersRequest->desiredNumber = 443879;
    $request->updateNumberOfDomainControllersRequest->directoryId = 'ullam';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = UpdateNumberOfDomainControllersXAmzTargetEnum::DIRECTORY_SERVICE20150416_UPDATE_NUMBER_OF_DOMAIN_CONTROLLERS;

    $response = $sdk->sdk->updateNumberOfDomainControllers($request);

    if ($response->updateNumberOfDomainControllersResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRadius

Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRadiusRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRadiusRequest;
use \OpenAPI\OpenAPI\Models\Shared\RadiusSettings;
use \OpenAPI\OpenAPI\Models\Shared\RadiusAuthenticationProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRadiusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRadiusRequest();
    $request->updateRadiusRequest = new UpdateRadiusRequest();
    $request->updateRadiusRequest->directoryId = 'itaque';
    $request->updateRadiusRequest->radiusSettings = new RadiusSettings();
    $request->updateRadiusRequest->radiusSettings->authenticationProtocol = RadiusAuthenticationProtocolEnum::MSCHA_PV1;
    $request->updateRadiusRequest->radiusSettings->displayLabel = 'architecto';
    $request->updateRadiusRequest->radiusSettings->radiusPort = 609178;
    $request->updateRadiusRequest->radiusSettings->radiusRetries = 945302;
    $request->updateRadiusRequest->radiusSettings->radiusServers = [
        'at',
    ];
    $request->updateRadiusRequest->radiusSettings->radiusTimeout = 92027;
    $request->updateRadiusRequest->radiusSettings->sharedSecret = 'voluptate';
    $request->updateRadiusRequest->radiusSettings->useSameUsername = false;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = UpdateRadiusXAmzTargetEnum::DIRECTORY_SERVICE20150416_UPDATE_RADIUS;

    $response = $sdk->sdk->updateRadius($request);

    if ($response->updateRadiusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSettings

Updates the configurable settings for the specified directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Setting;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSettingsRequest();
    $request->updateSettingsRequest = new UpdateSettingsRequest();
    $request->updateSettingsRequest->directoryId = 'accusantium';
    $request->updateSettingsRequest->settings = [
        new Setting(),
        new Setting(),
        new Setting(),
    ];
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = UpdateSettingsXAmzTargetEnum::DIRECTORY_SERVICE20150416_UPDATE_SETTINGS;

    $response = $sdk->sdk->updateSettings($request);

    if ($response->updateSettingsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTrust

Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\SelectiveAuthEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrustXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTrustRequest();
    $request->updateTrustRequest = new UpdateTrustRequest();
    $request->updateTrustRequest->selectiveAuth = SelectiveAuthEnum::ENABLED;
    $request->updateTrustRequest->trustId = 'dolor';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = UpdateTrustXAmzTargetEnum::DIRECTORY_SERVICE20150416_UPDATE_TRUST;

    $response = $sdk->sdk->updateTrust($request);

    if ($response->updateTrustResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## verifyTrust

<p>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\VerifyTrustRequest;
use \OpenAPI\OpenAPI\Models\Shared\VerifyTrustRequest;
use \OpenAPI\OpenAPI\Models\Operations\VerifyTrustXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VerifyTrustRequest();
    $request->verifyTrustRequest = new VerifyTrustRequest();
    $request->verifyTrustRequest->trustId = 'dicta';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = VerifyTrustXAmzTargetEnum::DIRECTORY_SERVICE20150416_VERIFY_TRUST;

    $response = $sdk->sdk->verifyTrust($request);

    if ($response->verifyTrustResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
