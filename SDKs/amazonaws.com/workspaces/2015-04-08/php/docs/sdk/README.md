# SDK

## Overview

<fullname>Amazon WorkSpaces Service</fullname> <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows or Amazon Linux desktops for your users, known as <i>WorkSpaces</i>. WorkSpaces eliminates the need to procure and deploy hardware or install complex software. You can quickly add or remove users as your needs change. Users can access their virtual desktops from multiple devices or web browsers.</p> <p>This API Reference provides detailed information about the actions, data types, parameters, and errors of the WorkSpaces service. For more information about the supported Amazon Web Services Regions, endpoints, and service quotas of the Amazon WorkSpaces service, see <a href="https://docs.aws.amazon.com/general/latest/gr/wsp.html">WorkSpaces endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>You can also manage your WorkSpaces resources using the WorkSpaces console, Command Line Interface (CLI), and SDKs. For more information about administering WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/">Amazon WorkSpaces Administration Guide</a>. For more information about using the Amazon WorkSpaces client application or web browser to access provisioned WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/userguide/">Amazon WorkSpaces User Guide</a>. For more information about using the CLI to manage your WorkSpaces resources, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/workspaces/index.html">WorkSpaces section of the CLI Reference</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/workspaces/>
### Available Operations

* [associateConnectionAlias](#associateconnectionalias) - <p>Associates the specified connection alias with the specified directory to enable cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>
* [associateIpGroups](#associateipgroups) - Associates the specified IP access control group with the specified directory.
* [authorizeIpRules](#authorizeiprules) - <p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>
* [copyWorkspaceImage](#copyworkspaceimage) - <p>Copies the specified image from the specified Region to the current Region. For more information about copying images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html"> Copy a Custom WorkSpaces Image</a>.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <important> <p>Before copying a shared image, be sure to verify that it has been shared from the correct Amazon Web Services account. To determine if an image has been shared and to see the ID of the Amazon Web Services account that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p> </important>
* [createConnectClientAddIn](#createconnectclientaddin) - <p>Creates a client-add-in for Amazon Connect within a directory. You can create only one Amazon Connect client add-in within a directory.</p> <p>This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.</p>
* [createConnectionAlias](#createconnectionalias) - Creates the specified connection alias for use with cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
* [createIpGroup](#createipgroup) - <p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>
* [createStandbyWorkspaces](#createstandbyworkspaces) - Creates a standby WorkSpace in a secondary Region.
* [createTags](#createtags) - Creates the specified tags for the specified WorkSpaces resource.
* [createUpdatedWorkspaceImage](#createupdatedworkspaceimage) - <p>Creates a new updated WorkSpace image based on the specified source image. The new updated WorkSpace image has the latest drivers and other updates required by the Amazon WorkSpaces components.</p> <p>To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces requirements, use <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html"> DescribeWorkspaceImages</a>.</p> <note> <ul> <li> <p>Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images can be programmatically updated at this time.</p> </li> <li> <p>Microsoft Windows updates and other application updates are not included in the update process.</p> </li> <li> <p>The source WorkSpace image is not deleted. You can delete the source image after you've verified your new updated image and created a new bundle. </p> </li> </ul> </note>
* [createWorkspaceBundle](#createworkspacebundle) - Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html"> Create a Custom WorkSpaces Image and Bundle</a>.
* [createWorkspaceImage](#createworkspaceimage) - Creates a new WorkSpace image from an existing WorkSpace.
* [createWorkspaces](#createworkspaces) - <p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>
* [deleteClientBranding](#deleteclientbranding) - <p>Deletes customized client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you delete your customized client branding, your login portal reverts to the default client branding.</p>
* [deleteConnectClientAddIn](#deleteconnectclientaddin) - Deletes a client-add-in for Amazon Connect that is configured within a directory.
* [deleteConnectionAlias](#deleteconnectionalias) - <p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <important> <p> <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b> For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p> </important> <note> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </note>
* [deleteIpGroup](#deleteipgroup) - <p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>
* [deleteTags](#deletetags) - Deletes the specified tags from the specified WorkSpaces resource.
* [deleteWorkspaceBundle](#deleteworkspacebundle) - Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html"> Delete a Custom WorkSpaces Bundle or Image</a>.
* [deleteWorkspaceImage](#deleteworkspaceimage) - Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts. 
* [deregisterWorkspaceDirectory](#deregisterworkspacedirectory) - <p>Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>
* [describeAccount](#describeaccount) - Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.
* [describeAccountModifications](#describeaccountmodifications) - Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.
* [describeClientBranding](#describeclientbranding) - <p>Describes the specified client branding. Client branding allows you to customize the log in page of various device types for your users. You can add your company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <note> <p>Only device types that have branding information configured will be shown in the response.</p> </note>
* [describeClientProperties](#describeclientproperties) - Retrieves a list that describes one or more specified Amazon WorkSpaces clients.
* [describeConnectClientAddIns](#describeconnectclientaddins) - Retrieves a list of Amazon Connect client add-ins that have been created.
* [describeConnectionAliasPermissions](#describeconnectionaliaspermissions) - Describes the permissions that the owner of a connection alias has granted to another Amazon Web Services account for the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
* [describeConnectionAliases](#describeconnectionaliases) - Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
* [describeIpGroups](#describeipgroups) - Describes one or more of your IP access control groups.
* [describeTags](#describetags) - Describes the specified tags for the specified WorkSpaces resource.
* [describeWorkspaceBundles](#describeworkspacebundles) - <p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>
* [describeWorkspaceDirectories](#describeworkspacedirectories) - Describes the available directories that are registered with Amazon WorkSpaces.
* [describeWorkspaceImagePermissions](#describeworkspaceimagepermissions) - Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.
* [describeWorkspaceImages](#describeworkspaceimages) - Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described. 
* [describeWorkspaceSnapshots](#describeworkspacesnapshots) - Describes the snapshots for the specified WorkSpace.
* [describeWorkspaces](#describeworkspaces) - <p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>
* [describeWorkspacesConnectionStatus](#describeworkspacesconnectionstatus) - Describes the connection status of the specified WorkSpaces.
* [disassociateConnectionAlias](#disassociateconnectionalias) - <p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different Regions. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>
* [disassociateIpGroups](#disassociateipgroups) - Disassociates the specified IP access control group from the specified directory.
* [importClientBranding](#importclientbranding) - <p>Imports client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you import client branding, the default branding experience for the specified platform type is replaced with the imported experience</p> <note> <ul> <li> <p>You must specify at least one platform type when importing client branding.</p> </li> <li> <p>You can import up to 6 MB of data with each request. If your request exceeds this limit, you can import client branding for different platform types using separate requests.</p> </li> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify only one parameter for each platform type, but not both.</p> </li> <li> <p>Imported data can take up to a minute to appear in the WorkSpaces client.</p> </li> </ul> </note>
* [importWorkspaceImage](#importworkspaceimage) - Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows Desktop Licenses</a>.
* [listAvailableManagementCidrRanges](#listavailablemanagementcidrranges) - <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>This operation can be run only by Amazon Web Services accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
* [migrateWorkspace](#migrateworkspace) - <p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p> <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code> user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code> folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p> <p>For available migration scenarios, details about what happens during migration, and best practices, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>
* [modifyAccount](#modifyaccount) - Modifies the configuration of Bring Your Own License (BYOL) for the specified account.
* [modifyCertificateBasedAuthProperties](#modifycertificatebasedauthproperties) - Modifies the properties of the certificate-based authentication you want to use with your WorkSpaces.
* [modifyClientProperties](#modifyclientproperties) - Modifies the properties of the specified Amazon WorkSpaces clients.
* [modifySamlProperties](#modifysamlproperties) - Modifies multiple properties related to SAML 2.0 authentication, including the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.
* [modifySelfservicePermissions](#modifyselfservicepermissions) - Modifies the self-service WorkSpace management capabilities for your users. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
* [modifyWorkspaceAccessProperties](#modifyworkspaceaccessproperties) - Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access"> Control Device Access</a>.
* [modifyWorkspaceCreationProperties](#modifyworkspacecreationproperties) - Modify the default properties used to create WorkSpaces.
* [modifyWorkspaceProperties](#modifyworkspaceproperties) - <p>Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html"> Modify a WorkSpace</a>. </p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>
* [modifyWorkspaceState](#modifyworkspacestate) - <p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>
* [rebootWorkspaces](#rebootworkspaces) - <p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
* [rebuildWorkspaces](#rebuildworkspaces) - <p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>
* [registerWorkspaceDirectory](#registerworkspacedirectory) - Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role"> Creating the workspaces_DefaultRole Role</a>.
* [restoreWorkspace](#restoreworkspace) - <p>Restores the specified WorkSpace to its last known healthy state.</p> <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpace is completely restored.</p>
* [revokeIpRules](#revokeiprules) - Removes one or more rules from the specified IP access control group.
* [startWorkspaces](#startworkspaces) - <p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>
* [stopWorkspaces](#stopworkspaces) - <p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>
* [terminateWorkspaces](#terminateworkspaces) - <p>Terminates the specified WorkSpaces.</p> <important> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services Support before terminating the WorkSpace.</p> </important> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html"> DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>
* [updateConnectClientAddIn](#updateconnectclientaddin) - Updates a Amazon Connect client add-in. Use this action to update the name and endpoint URL of a Amazon Connect client add-in.
* [updateConnectionAliasPermission](#updateconnectionaliaspermission) - <p>Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <ul> <li> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </li> <li> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </li> </ul> </note>
* [updateRulesOfIpGroup](#updaterulesofipgroup) - Replaces the current rules of the specified IP access control group with the specified rules.
* [updateWorkspaceBundle](#updateworkspacebundle) - <p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html"> Update a Custom WorkSpaces Bundle</a>.</p> <important> <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.</p> </important>
* [updateWorkspaceImagePermission](#updateworkspaceimagepermission) - <p>Shares or unshares an image with one account in the same Amazon Web Services Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.</p> <p>After an image has been shared, the recipient account can copy the image to other Regions as needed.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <p>For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.</p> <note> <ul> <li> <p>To delete an image that has been shared, you must unshare the image before you delete it.</p> </li> <li> <p>Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.</p> </li> </ul> </note>

## associateConnectionAlias

<p>Associates the specified connection alias with the specified directory to enable cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateConnectionAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateConnectionAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateConnectionAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateConnectionAliasRequest();
    $request->associateConnectionAliasRequest = new AssociateConnectionAliasRequest();
    $request->associateConnectionAliasRequest->aliasId = 'error';
    $request->associateConnectionAliasRequest->resourceId = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AssociateConnectionAliasXAmzTargetEnum::WORKSPACES_SERVICE_ASSOCIATE_CONNECTION_ALIAS;

    $response = $sdk->sdk->associateConnectionAlias($request);

    if ($response->associateConnectionAliasResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateIpGroups

Associates the specified IP access control group with the specified directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateIpGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateIpGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateIpGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateIpGroupsRequest();
    $request->associateIpGroupsRequest = new AssociateIpGroupsRequest();
    $request->associateIpGroupsRequest->directoryId = 'suscipit';
    $request->associateIpGroupsRequest->groupIds = [
        'minus',
        'placeat',
    ];
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = AssociateIpGroupsXAmzTargetEnum::WORKSPACES_SERVICE_ASSOCIATE_IP_GROUPS;

    $response = $sdk->sdk->associateIpGroups($request);

    if ($response->associateIpGroupsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authorizeIpRules

<p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizeIpRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizeIpRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpRuleItem;
use \OpenAPI\OpenAPI\Models\Operations\AuthorizeIpRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthorizeIpRulesRequest();
    $request->authorizeIpRulesRequest = new AuthorizeIpRulesRequest();
    $request->authorizeIpRulesRequest->groupId = 'quis';
    $request->authorizeIpRulesRequest->userRules = [
        new IpRuleItem(),
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = AuthorizeIpRulesXAmzTargetEnum::WORKSPACES_SERVICE_AUTHORIZE_IP_RULES;

    $response = $sdk->sdk->authorizeIpRules($request);

    if ($response->authorizeIpRulesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## copyWorkspaceImage

<p>Copies the specified image from the specified Region to the current Region. For more information about copying images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html"> Copy a Custom WorkSpaces Image</a>.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <important> <p>Before copying a shared image, be sure to verify that it has been shared from the correct Amazon Web Services account. To determine if an image has been shared and to see the ID of the Amazon Web Services account that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopyWorkspaceImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\CopyWorkspaceImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CopyWorkspaceImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyWorkspaceImageRequest();
    $request->copyWorkspaceImageRequest = new CopyWorkspaceImageRequest();
    $request->copyWorkspaceImageRequest->description = 'at';
    $request->copyWorkspaceImageRequest->name = 'Emilio Krajcik';
    $request->copyWorkspaceImageRequest->sourceImageId = 'esse';
    $request->copyWorkspaceImageRequest->sourceRegion = 'totam';
    $request->copyWorkspaceImageRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = CopyWorkspaceImageXAmzTargetEnum::WORKSPACES_SERVICE_COPY_WORKSPACE_IMAGE;

    $response = $sdk->sdk->copyWorkspaceImage($request);

    if ($response->copyWorkspaceImageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConnectClientAddIn

<p>Creates a client-add-in for Amazon Connect within a directory. You can create only one Amazon Connect client add-in within a directory.</p> <p>This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectClientAddInRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectClientAddInRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectClientAddInXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectClientAddInRequest();
    $request->createConnectClientAddInRequest = new CreateConnectClientAddInRequest();
    $request->createConnectClientAddInRequest->name = 'Ms. Earnest Lebsack';
    $request->createConnectClientAddInRequest->resourceId = 'modi';
    $request->createConnectClientAddInRequest->url = 'qui';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = CreateConnectClientAddInXAmzTargetEnum::WORKSPACES_SERVICE_CREATE_CONNECT_CLIENT_ADD_IN;

    $response = $sdk->sdk->createConnectClientAddIn($request);

    if ($response->createConnectClientAddInResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConnectionAlias

Creates the specified connection alias for use with cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectionAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectionAliasRequest();
    $request->createConnectionAliasRequest = new CreateConnectionAliasRequest();
    $request->createConnectionAliasRequest->connectionString = 'ad';
    $request->createConnectionAliasRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = CreateConnectionAliasXAmzTargetEnum::WORKSPACES_SERVICE_CREATE_CONNECTION_ALIAS;

    $response = $sdk->sdk->createConnectionAlias($request);

    if ($response->createConnectionAliasResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIpGroup

<p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateIpGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateIpGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\IpRuleItem;
use \OpenAPI\OpenAPI\Models\Operations\CreateIpGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIpGroupRequest();
    $request->createIpGroupRequest = new CreateIpGroupRequest();
    $request->createIpGroupRequest->groupDesc = 'fuga';
    $request->createIpGroupRequest->groupName = 'in';
    $request->createIpGroupRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createIpGroupRequest->userRules = [
        new IpRuleItem(),
        new IpRuleItem(),
        new IpRuleItem(),
    ];
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';
    $request->xAmzTarget = CreateIpGroupXAmzTargetEnum::WORKSPACES_SERVICE_CREATE_IP_GROUP;

    $response = $sdk->sdk->createIpGroup($request);

    if ($response->createIpGroupResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStandbyWorkspaces

Creates a standby WorkSpace in a secondary Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStandbyWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateStandbyWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\StandbyWorkspace;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateStandbyWorkspacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStandbyWorkspacesRequest();
    $request->createStandbyWorkspacesRequest = new CreateStandbyWorkspacesRequest();
    $request->createStandbyWorkspacesRequest->primaryRegion = 'mollitia';
    $request->createStandbyWorkspacesRequest->standbyWorkspaces = [
        new StandbyWorkspace(),
        new StandbyWorkspace(),
        new StandbyWorkspace(),
    ];
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = CreateStandbyWorkspacesXAmzTargetEnum::WORKSPACES_SERVICE_CREATE_STANDBY_WORKSPACES;

    $response = $sdk->sdk->createStandbyWorkspaces($request);

    if ($response->createStandbyWorkspacesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTags

Creates the specified tags for the specified WorkSpaces resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTagsRequest();
    $request->createTagsRequest = new CreateTagsRequest();
    $request->createTagsRequest->resourceId = 'nemo';
    $request->createTagsRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = CreateTagsXAmzTargetEnum::WORKSPACES_SERVICE_CREATE_TAGS;

    $response = $sdk->sdk->createTags($request);

    if ($response->createTagsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUpdatedWorkspaceImage

<p>Creates a new updated WorkSpace image based on the specified source image. The new updated WorkSpace image has the latest drivers and other updates required by the Amazon WorkSpaces components.</p> <p>To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces requirements, use <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html"> DescribeWorkspaceImages</a>.</p> <note> <ul> <li> <p>Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images can be programmatically updated at this time.</p> </li> <li> <p>Microsoft Windows updates and other application updates are not included in the update process.</p> </li> <li> <p>The source WorkSpace image is not deleted. You can delete the source image after you've verified your new updated image and created a new bundle. </p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatedWorkspaceImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUpdatedWorkspaceImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateUpdatedWorkspaceImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUpdatedWorkspaceImageRequest();
    $request->createUpdatedWorkspaceImageRequest = new CreateUpdatedWorkspaceImageRequest();
    $request->createUpdatedWorkspaceImageRequest->description = 'mollitia';
    $request->createUpdatedWorkspaceImageRequest->name = 'Cecilia Crooks';
    $request->createUpdatedWorkspaceImageRequest->sourceImageId = 'occaecati';
    $request->createUpdatedWorkspaceImageRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = CreateUpdatedWorkspaceImageXAmzTargetEnum::WORKSPACES_SERVICE_CREATE_UPDATED_WORKSPACE_IMAGE;

    $response = $sdk->sdk->createUpdatedWorkspaceImage($request);

    if ($response->createUpdatedWorkspaceImageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkspaceBundle

Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html"> Create a Custom WorkSpaces Image and Bundle</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkspaceBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComputeType;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RootStorage;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\UserStorage;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceBundleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkspaceBundleRequest();
    $request->createWorkspaceBundleRequest = new CreateWorkspaceBundleRequest();
    $request->createWorkspaceBundleRequest->bundleDescription = 'vitae';
    $request->createWorkspaceBundleRequest->bundleName = 'laborum';
    $request->createWorkspaceBundleRequest->computeType = new ComputeType();
    $request->createWorkspaceBundleRequest->computeType->name = ComputeEnum::POWERPRO;
    $request->createWorkspaceBundleRequest->imageId = 'enim';
    $request->createWorkspaceBundleRequest->rootStorage = new RootStorage();
    $request->createWorkspaceBundleRequest->rootStorage->capacity = 'odit';
    $request->createWorkspaceBundleRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createWorkspaceBundleRequest->userStorage = new UserStorage();
    $request->createWorkspaceBundleRequest->userStorage->capacity = 'sequi';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = CreateWorkspaceBundleXAmzTargetEnum::WORKSPACES_SERVICE_CREATE_WORKSPACE_BUNDLE;

    $response = $sdk->sdk->createWorkspaceBundle($request);

    if ($response->createWorkspaceBundleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkspaceImage

Creates a new WorkSpace image from an existing WorkSpace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkspaceImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspaceImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkspaceImageRequest();
    $request->createWorkspaceImageRequest = new CreateWorkspaceImageRequest();
    $request->createWorkspaceImageRequest->description = 'temporibus';
    $request->createWorkspaceImageRequest->name = 'Ryan Witting';
    $request->createWorkspaceImageRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createWorkspaceImageRequest->workspaceId = 'praesentium';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = CreateWorkspaceImageXAmzTargetEnum::WORKSPACES_SERVICE_CREATE_WORKSPACE_IMAGE;

    $response = $sdk->sdk->createWorkspaceImage($request);

    if ($response->createWorkspaceImageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkspaces

<p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceProperties;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunningModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkspacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkspacesRequest();
    $request->createWorkspacesRequest = new CreateWorkspacesRequest();
    $request->createWorkspacesRequest->workspaces = [
        new WorkspaceRequest(),
        new WorkspaceRequest(),
    ];
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = CreateWorkspacesXAmzTargetEnum::WORKSPACES_SERVICE_CREATE_WORKSPACES;

    $response = $sdk->sdk->createWorkspaces($request);

    if ($response->createWorkspacesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteClientBranding

<p>Deletes customized client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you delete your customized client branding, your login portal reverts to the default client branding.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClientBrandingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteClientBrandingRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClientBrandingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClientBrandingRequest();
    $request->deleteClientBrandingRequest = new DeleteClientBrandingRequest();
    $request->deleteClientBrandingRequest->platforms = [
        ClientDeviceTypeEnum::DEVICE_TYPE_OSX,
        ClientDeviceTypeEnum::DEVICE_TYPE_WEB,
        ClientDeviceTypeEnum::DEVICE_TYPE_ANDROID,
    ];
    $request->deleteClientBrandingRequest->resourceId = 'repudiandae';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DeleteClientBrandingXAmzTargetEnum::WORKSPACES_SERVICE_DELETE_CLIENT_BRANDING;

    $response = $sdk->sdk->deleteClientBranding($request);

    if ($response->deleteClientBrandingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnectClientAddIn

Deletes a client-add-in for Amazon Connect that is configured within a directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectClientAddInRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConnectClientAddInRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectClientAddInXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectClientAddInRequest();
    $request->deleteConnectClientAddInRequest = new DeleteConnectClientAddInRequest();
    $request->deleteConnectClientAddInRequest->addInId = 'praesentium';
    $request->deleteConnectClientAddInRequest->resourceId = 'rem';
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = DeleteConnectClientAddInXAmzTargetEnum::WORKSPACES_SERVICE_DELETE_CONNECT_CLIENT_ADD_IN;

    $response = $sdk->sdk->deleteConnectClientAddIn($request);

    if ($response->deleteConnectClientAddInResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnectionAlias

<p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <important> <p> <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b> For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p> </important> <note> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConnectionAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectionAliasRequest();
    $request->deleteConnectionAliasRequest = new DeleteConnectionAliasRequest();
    $request->deleteConnectionAliasRequest->aliasId = 'enim';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = DeleteConnectionAliasXAmzTargetEnum::WORKSPACES_SERVICE_DELETE_CONNECTION_ALIAS;

    $response = $sdk->sdk->deleteConnectionAlias($request);

    if ($response->deleteConnectionAliasResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIpGroup

<p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIpGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteIpGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIpGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIpGroupRequest();
    $request->deleteIpGroupRequest = new DeleteIpGroupRequest();
    $request->deleteIpGroupRequest->groupId = 'labore';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = DeleteIpGroupXAmzTargetEnum::WORKSPACES_SERVICE_DELETE_IP_GROUP;

    $response = $sdk->sdk->deleteIpGroup($request);

    if ($response->deleteIpGroupResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTags

Deletes the specified tags from the specified WorkSpaces resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTagsRequest();
    $request->deleteTagsRequest = new DeleteTagsRequest();
    $request->deleteTagsRequest->resourceId = 'assumenda';
    $request->deleteTagsRequest->tagKeys = [
        'alias',
        'fugit',
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = DeleteTagsXAmzTargetEnum::WORKSPACES_SERVICE_DELETE_TAGS;

    $response = $sdk->sdk->deleteTags($request);

    if ($response->deleteTagsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkspaceBundle

Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html"> Delete a Custom WorkSpaces Bundle or Image</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWorkspaceBundleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceBundleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceBundleRequest();
    $request->deleteWorkspaceBundleRequest = new DeleteWorkspaceBundleRequest();
    $request->deleteWorkspaceBundleRequest->bundleId = 'eum';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = DeleteWorkspaceBundleXAmzTargetEnum::WORKSPACES_SERVICE_DELETE_WORKSPACE_BUNDLE;

    $response = $sdk->sdk->deleteWorkspaceBundle($request);

    if ($response->deleteWorkspaceBundleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkspaceImage

Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWorkspaceImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkspaceImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkspaceImageRequest();
    $request->deleteWorkspaceImageRequest = new DeleteWorkspaceImageRequest();
    $request->deleteWorkspaceImageRequest->imageId = 'officia';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DeleteWorkspaceImageXAmzTargetEnum::WORKSPACES_SERVICE_DELETE_WORKSPACE_IMAGE;

    $response = $sdk->sdk->deleteWorkspaceImage($request);

    if ($response->deleteWorkspaceImageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterWorkspaceDirectory

<p>Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterWorkspaceDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeregisterWorkspaceDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterWorkspaceDirectoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterWorkspaceDirectoryRequest();
    $request->deregisterWorkspaceDirectoryRequest = new DeregisterWorkspaceDirectoryRequest();
    $request->deregisterWorkspaceDirectoryRequest->directoryId = 'maiores';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = DeregisterWorkspaceDirectoryXAmzTargetEnum::WORKSPACES_SERVICE_DEREGISTER_WORKSPACE_DIRECTORY;

    $response = $sdk->sdk->deregisterWorkspaceDirectory($request);

    if ($response->deregisterWorkspaceDirectoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccount

Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccountRequest();
    $request->requestBody = [
        'accusamus' => 'non',
        'occaecati' => 'enim',
        'accusamus' => 'delectus',
    ];
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = DescribeAccountXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_ACCOUNT;

    $response = $sdk->sdk->describeAccount($request);

    if ($response->describeAccountResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccountModifications

Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountModificationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAccountModificationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccountModificationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccountModificationsRequest();
    $request->describeAccountModificationsRequest = new DescribeAccountModificationsRequest();
    $request->describeAccountModificationsRequest->nextToken = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DescribeAccountModificationsXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_ACCOUNT_MODIFICATIONS;

    $response = $sdk->sdk->describeAccountModifications($request);

    if ($response->describeAccountModificationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeClientBranding

<p>Describes the specified client branding. Client branding allows you to customize the log in page of various device types for your users. You can add your company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <note> <p>Only device types that have branding information configured will be shown in the response.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClientBrandingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeClientBrandingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClientBrandingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeClientBrandingRequest();
    $request->describeClientBrandingRequest = new DescribeClientBrandingRequest();
    $request->describeClientBrandingRequest->resourceId = 'nihil';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DescribeClientBrandingXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_CLIENT_BRANDING;

    $response = $sdk->sdk->describeClientBranding($request);

    if ($response->describeClientBrandingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeClientProperties

Retrieves a list that describes one or more specified Amazon WorkSpaces clients.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClientPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeClientPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeClientPropertiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeClientPropertiesRequest();
    $request->describeClientPropertiesRequest = new DescribeClientPropertiesRequest();
    $request->describeClientPropertiesRequest->resourceIds = [
        'eum',
        'vero',
        'aspernatur',
    ];
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = DescribeClientPropertiesXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_CLIENT_PROPERTIES;

    $response = $sdk->sdk->describeClientProperties($request);

    if ($response->describeClientPropertiesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConnectClientAddIns

Retrieves a list of Amazon Connect client add-ins that have been created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectClientAddInsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConnectClientAddInsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectClientAddInsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectClientAddInsRequest();
    $request->describeConnectClientAddInsRequest = new DescribeConnectClientAddInsRequest();
    $request->describeConnectClientAddInsRequest->maxResults = 574325;
    $request->describeConnectClientAddInsRequest->nextToken = 'accusantium';
    $request->describeConnectClientAddInsRequest->resourceId = 'mollitia';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = DescribeConnectClientAddInsXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_CONNECT_CLIENT_ADD_INS;

    $response = $sdk->sdk->describeConnectClientAddIns($request);

    if ($response->describeConnectClientAddInsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConnectionAliasPermissions

Describes the permissions that the owner of a connection alias has granted to another Amazon Web Services account for the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionAliasPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConnectionAliasPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionAliasPermissionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectionAliasPermissionsRequest();
    $request->describeConnectionAliasPermissionsRequest = new DescribeConnectionAliasPermissionsRequest();
    $request->describeConnectionAliasPermissionsRequest->aliasId = 'nemo';
    $request->describeConnectionAliasPermissionsRequest->maxResults = 97260;
    $request->describeConnectionAliasPermissionsRequest->nextToken = 'iure';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DescribeConnectionAliasPermissionsXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_CONNECTION_ALIAS_PERMISSIONS;

    $response = $sdk->sdk->describeConnectionAliasPermissions($request);

    if ($response->describeConnectionAliasPermissionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConnectionAliases

Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionAliasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConnectionAliasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionAliasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectionAliasesRequest();
    $request->describeConnectionAliasesRequest = new DescribeConnectionAliasesRequest();
    $request->describeConnectionAliasesRequest->aliasIds = [
        'architecto',
    ];
    $request->describeConnectionAliasesRequest->limit = 919483;
    $request->describeConnectionAliasesRequest->nextToken = 'ullam';
    $request->describeConnectionAliasesRequest->resourceId = 'expedita';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = DescribeConnectionAliasesXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_CONNECTION_ALIASES;

    $response = $sdk->sdk->describeConnectionAliases($request);

    if ($response->describeConnectionAliasesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIpGroups

Describes one or more of your IP access control groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIpGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeIpGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIpGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIpGroupsRequest();
    $request->describeIpGroupsRequest = new DescribeIpGroupsRequest();
    $request->describeIpGroupsRequest->groupIds = [
        'praesentium',
    ];
    $request->describeIpGroupsRequest->maxResults = 615560;
    $request->describeIpGroupsRequest->nextToken = 'magni';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DescribeIpGroupsXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_IP_GROUPS;

    $response = $sdk->sdk->describeIpGroups($request);

    if ($response->describeIpGroupsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTags

Describes the specified tags for the specified WorkSpaces resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTagsRequest();
    $request->describeTagsRequest = new DescribeTagsRequest();
    $request->describeTagsRequest->resourceId = 'odit';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DescribeTagsXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_TAGS;

    $response = $sdk->sdk->describeTags($request);

    if ($response->describeTagsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkspaceBundles

<p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceBundlesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWorkspaceBundlesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceBundlesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkspaceBundlesRequest();
    $request->describeWorkspaceBundlesRequest = new DescribeWorkspaceBundlesRequest();
    $request->describeWorkspaceBundlesRequest->bundleIds = [
        'nam',
        'eaque',
    ];
    $request->describeWorkspaceBundlesRequest->nextToken = 'pariatur';
    $request->describeWorkspaceBundlesRequest->owner = 'nemo';
    $request->nextToken = 'voluptatibus';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = DescribeWorkspaceBundlesXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_WORKSPACE_BUNDLES;

    $response = $sdk->sdk->describeWorkspaceBundles($request);

    if ($response->describeWorkspaceBundlesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkspaceDirectories

Describes the available directories that are registered with Amazon WorkSpaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceDirectoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWorkspaceDirectoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceDirectoriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkspaceDirectoriesRequest();
    $request->describeWorkspaceDirectoriesRequest = new DescribeWorkspaceDirectoriesRequest();
    $request->describeWorkspaceDirectoriesRequest->directoryIds = [
        'nobis',
        'dolores',
        'quis',
    ];
    $request->describeWorkspaceDirectoriesRequest->limit = 521037;
    $request->describeWorkspaceDirectoriesRequest->nextToken = 'dignissimos';
    $request->nextToken = 'eaque';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = DescribeWorkspaceDirectoriesXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_WORKSPACE_DIRECTORIES;

    $response = $sdk->sdk->describeWorkspaceDirectories($request);

    if ($response->describeWorkspaceDirectoriesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkspaceImagePermissions

Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceImagePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWorkspaceImagePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceImagePermissionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkspaceImagePermissionsRequest();
    $request->describeWorkspaceImagePermissionsRequest = new DescribeWorkspaceImagePermissionsRequest();
    $request->describeWorkspaceImagePermissionsRequest->imageId = 'dolor';
    $request->describeWorkspaceImagePermissionsRequest->maxResults = 874573;
    $request->describeWorkspaceImagePermissionsRequest->nextToken = 'nostrum';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = DescribeWorkspaceImagePermissionsXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_WORKSPACE_IMAGE_PERMISSIONS;

    $response = $sdk->sdk->describeWorkspaceImagePermissions($request);

    if ($response->describeWorkspaceImagePermissionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkspaceImages

Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWorkspaceImagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceImagesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkspaceImagesRequest();
    $request->describeWorkspaceImagesRequest = new DescribeWorkspaceImagesRequest();
    $request->describeWorkspaceImagesRequest->imageIds = [
        'blanditiis',
    ];
    $request->describeWorkspaceImagesRequest->imageType = ImageTypeEnum::SHARED;
    $request->describeWorkspaceImagesRequest->maxResults = 50370;
    $request->describeWorkspaceImagesRequest->nextToken = 'occaecati';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = DescribeWorkspaceImagesXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_WORKSPACE_IMAGES;

    $response = $sdk->sdk->describeWorkspaceImages($request);

    if ($response->describeWorkspaceImagesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkspaceSnapshots

Describes the snapshots for the specified WorkSpace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWorkspaceSnapshotsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspaceSnapshotsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkspaceSnapshotsRequest();
    $request->describeWorkspaceSnapshotsRequest = new DescribeWorkspaceSnapshotsRequest();
    $request->describeWorkspaceSnapshotsRequest->workspaceId = 'deleniti';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = DescribeWorkspaceSnapshotsXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_WORKSPACE_SNAPSHOTS;

    $response = $sdk->sdk->describeWorkspaceSnapshots($request);

    if ($response->describeWorkspaceSnapshotsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkspaces

<p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkspacesRequest();
    $request->describeWorkspacesRequest = new DescribeWorkspacesRequest();
    $request->describeWorkspacesRequest->bundleId = 'aliquid';
    $request->describeWorkspacesRequest->directoryId = 'dolorem';
    $request->describeWorkspacesRequest->limit = 209843;
    $request->describeWorkspacesRequest->nextToken = 'dolor';
    $request->describeWorkspacesRequest->userName = 'Christy_Erdman73';
    $request->describeWorkspacesRequest->workspaceIds = [
        'dignissimos',
        'reiciendis',
    ];
    $request->limit = 'amet';
    $request->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = DescribeWorkspacesXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_WORKSPACES;

    $response = $sdk->sdk->describeWorkspaces($request);

    if ($response->describeWorkspacesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkspacesConnectionStatus

Describes the connection status of the specified WorkSpaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspacesConnectionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWorkspacesConnectionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkspacesConnectionStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkspacesConnectionStatusRequest();
    $request->describeWorkspacesConnectionStatusRequest = new DescribeWorkspacesConnectionStatusRequest();
    $request->describeWorkspacesConnectionStatusRequest->nextToken = 'accusamus';
    $request->describeWorkspacesConnectionStatusRequest->workspaceIds = [
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = DescribeWorkspacesConnectionStatusXAmzTargetEnum::WORKSPACES_SERVICE_DESCRIBE_WORKSPACES_CONNECTION_STATUS;

    $response = $sdk->sdk->describeWorkspacesConnectionStatus($request);

    if ($response->describeWorkspacesConnectionStatusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateConnectionAlias

<p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different Regions. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateConnectionAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateConnectionAliasRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateConnectionAliasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateConnectionAliasRequest();
    $request->disassociateConnectionAliasRequest = new DisassociateConnectionAliasRequest();
    $request->disassociateConnectionAliasRequest->aliasId = 'iusto';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = DisassociateConnectionAliasXAmzTargetEnum::WORKSPACES_SERVICE_DISASSOCIATE_CONNECTION_ALIAS;

    $response = $sdk->sdk->disassociateConnectionAlias($request);

    if ($response->disassociateConnectionAliasResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateIpGroups

Disassociates the specified IP access control group from the specified directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateIpGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateIpGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateIpGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateIpGroupsRequest();
    $request->disassociateIpGroupsRequest = new DisassociateIpGroupsRequest();
    $request->disassociateIpGroupsRequest->directoryId = 'nihil';
    $request->disassociateIpGroupsRequest->groupIds = [
        'voluptate',
    ];
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'optio';
    $request->xAmzTarget = DisassociateIpGroupsXAmzTargetEnum::WORKSPACES_SERVICE_DISASSOCIATE_IP_GROUPS;

    $response = $sdk->sdk->disassociateIpGroups($request);

    if ($response->disassociateIpGroupsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importClientBranding

<p>Imports client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you import client branding, the default branding experience for the specified platform type is replaced with the imported experience</p> <note> <ul> <li> <p>You must specify at least one platform type when importing client branding.</p> </li> <li> <p>You can import up to 6 MB of data with each request. If your request exceeds this limit, you can import client branding for different platform types using separate requests.</p> </li> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify only one parameter for each platform type, but not both.</p> </li> <li> <p>Imported data can take up to a minute to appear in the WorkSpaces client.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportClientBrandingRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportClientBrandingRequest;
use \OpenAPI\OpenAPI\Models\Shared\DefaultImportClientBrandingAttributes;
use \OpenAPI\OpenAPI\Models\Shared\IosImportClientBrandingAttributes;
use \OpenAPI\OpenAPI\Models\Operations\ImportClientBrandingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportClientBrandingRequest();
    $request->importClientBrandingRequest = new ImportClientBrandingRequest();
    $request->importClientBrandingRequest->deviceTypeAndroid = new DefaultImportClientBrandingAttributes();
    $request->importClientBrandingRequest->deviceTypeAndroid->forgotPasswordLink = 'accusamus';
    $request->importClientBrandingRequest->deviceTypeAndroid->loginMessage = [
        'saepe' => 'suscipit',
        'deserunt' => 'provident',
    ];
    $request->importClientBrandingRequest->deviceTypeAndroid->logo = 'minima';
    $request->importClientBrandingRequest->deviceTypeAndroid->supportEmail = 'repellendus';
    $request->importClientBrandingRequest->deviceTypeAndroid->supportLink = 'totam';
    $request->importClientBrandingRequest->deviceTypeIos = new IosImportClientBrandingAttributes();
    $request->importClientBrandingRequest->deviceTypeIos->forgotPasswordLink = 'similique';
    $request->importClientBrandingRequest->deviceTypeIos->loginMessage = [
        'at' => 'quaerat',
    ];
    $request->importClientBrandingRequest->deviceTypeIos->logo = 'tempora';
    $request->importClientBrandingRequest->deviceTypeIos->logo2x = 'vel';
    $request->importClientBrandingRequest->deviceTypeIos->logo3x = 'quod';
    $request->importClientBrandingRequest->deviceTypeIos->supportEmail = 'officiis';
    $request->importClientBrandingRequest->deviceTypeIos->supportLink = 'qui';
    $request->importClientBrandingRequest->deviceTypeLinux = new DefaultImportClientBrandingAttributes();
    $request->importClientBrandingRequest->deviceTypeLinux->forgotPasswordLink = 'dolorum';
    $request->importClientBrandingRequest->deviceTypeLinux->loginMessage = [
        'esse' => 'harum',
        'iusto' => 'ipsum',
        'quisquam' => 'tenetur',
        'amet' => 'tempore',
    ];
    $request->importClientBrandingRequest->deviceTypeLinux->logo = 'accusamus';
    $request->importClientBrandingRequest->deviceTypeLinux->supportEmail = 'numquam';
    $request->importClientBrandingRequest->deviceTypeLinux->supportLink = 'enim';
    $request->importClientBrandingRequest->deviceTypeOsx = new DefaultImportClientBrandingAttributes();
    $request->importClientBrandingRequest->deviceTypeOsx->forgotPasswordLink = 'dolorem';
    $request->importClientBrandingRequest->deviceTypeOsx->loginMessage = [
        'totam' => 'nihil',
        'sit' => 'expedita',
        'neque' => 'sed',
        'vel' => 'libero',
    ];
    $request->importClientBrandingRequest->deviceTypeOsx->logo = 'voluptas';
    $request->importClientBrandingRequest->deviceTypeOsx->supportEmail = 'deserunt';
    $request->importClientBrandingRequest->deviceTypeOsx->supportLink = 'quam';
    $request->importClientBrandingRequest->deviceTypeWeb = new DefaultImportClientBrandingAttributes();
    $request->importClientBrandingRequest->deviceTypeWeb->forgotPasswordLink = 'ipsum';
    $request->importClientBrandingRequest->deviceTypeWeb->loginMessage = [
        'qui' => 'cupiditate',
        'maxime' => 'pariatur',
    ];
    $request->importClientBrandingRequest->deviceTypeWeb->logo = 'soluta';
    $request->importClientBrandingRequest->deviceTypeWeb->supportEmail = 'dicta';
    $request->importClientBrandingRequest->deviceTypeWeb->supportLink = 'laborum';
    $request->importClientBrandingRequest->deviceTypeWindows = new DefaultImportClientBrandingAttributes();
    $request->importClientBrandingRequest->deviceTypeWindows->forgotPasswordLink = 'totam';
    $request->importClientBrandingRequest->deviceTypeWindows->loginMessage = [
        'aspernatur' => 'dolores',
        'distinctio' => 'facilis',
    ];
    $request->importClientBrandingRequest->deviceTypeWindows->logo = 'aliquid';
    $request->importClientBrandingRequest->deviceTypeWindows->supportEmail = 'quam';
    $request->importClientBrandingRequest->deviceTypeWindows->supportLink = 'molestias';
    $request->importClientBrandingRequest->resourceId = 'temporibus';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = ImportClientBrandingXAmzTargetEnum::WORKSPACES_SERVICE_IMPORT_CLIENT_BRANDING;

    $response = $sdk->sdk->importClientBranding($request);

    if ($response->importClientBrandingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importWorkspaceImage

Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows Desktop Licenses</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportWorkspaceImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportWorkspaceImageRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceImageIngestionProcessEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\ImportWorkspaceImageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportWorkspaceImageRequest();
    $request->importWorkspaceImageRequest = new ImportWorkspaceImageRequest();
    $request->importWorkspaceImageRequest->applications = [
        ApplicationEnum::MICROSOFT_OFFICE2019,
        ApplicationEnum::MICROSOFT_OFFICE2016,
        ApplicationEnum::MICROSOFT_OFFICE2019,
    ];
    $request->importWorkspaceImageRequest->ec2ImageId = 'soluta';
    $request->importWorkspaceImageRequest->imageDescription = 'nobis';
    $request->importWorkspaceImageRequest->imageName = 'et';
    $request->importWorkspaceImageRequest->ingestionProcess = WorkspaceImageIngestionProcessEnum::BYOL_GRAPHICS_G4_DN_BYOP;
    $request->importWorkspaceImageRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = ImportWorkspaceImageXAmzTargetEnum::WORKSPACES_SERVICE_IMPORT_WORKSPACE_IMAGE;

    $response = $sdk->sdk->importWorkspaceImage($request);

    if ($response->importWorkspaceImageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAvailableManagementCidrRanges

<p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>This operation can be run only by Amazon Web Services accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailableManagementCidrRangesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAvailableManagementCidrRangesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailableManagementCidrRangesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailableManagementCidrRangesRequest();
    $request->listAvailableManagementCidrRangesRequest = new ListAvailableManagementCidrRangesRequest();
    $request->listAvailableManagementCidrRangesRequest->managementCidrRangeConstraint = 'dolorem';
    $request->listAvailableManagementCidrRangesRequest->maxResults = 292147;
    $request->listAvailableManagementCidrRangesRequest->nextToken = 'labore';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = ListAvailableManagementCidrRangesXAmzTargetEnum::WORKSPACES_SERVICE_LIST_AVAILABLE_MANAGEMENT_CIDR_RANGES;

    $response = $sdk->sdk->listAvailableManagementCidrRanges($request);

    if ($response->listAvailableManagementCidrRangesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## migrateWorkspace

<p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p> <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code> user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code> folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p> <p>For available migration scenarios, details about what happens during migration, and best practices, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MigrateWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\MigrateWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\MigrateWorkspaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrateWorkspaceRequest();
    $request->migrateWorkspaceRequest = new MigrateWorkspaceRequest();
    $request->migrateWorkspaceRequest->bundleId = 'consequatur';
    $request->migrateWorkspaceRequest->sourceWorkspaceId = 'est';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = MigrateWorkspaceXAmzTargetEnum::WORKSPACES_SERVICE_MIGRATE_WORKSPACE;

    $response = $sdk->sdk->migrateWorkspace($request);

    if ($response->migrateWorkspaceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyAccount

Modifies the configuration of Bring Your Own License (BYOL) for the specified account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\DedicatedTenancySupportEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifyAccountXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyAccountRequest();
    $request->modifyAccountRequest = new ModifyAccountRequest();
    $request->modifyAccountRequest->dedicatedTenancyManagementCidrRange = 'quae';
    $request->modifyAccountRequest->dedicatedTenancySupport = DedicatedTenancySupportEnumEnum::ENABLED;
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = ModifyAccountXAmzTargetEnum::WORKSPACES_SERVICE_MODIFY_ACCOUNT;

    $response = $sdk->sdk->modifyAccount($request);

    if ($response->modifyAccountResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyCertificateBasedAuthProperties

Modifies the properties of the certificate-based authentication you want to use with your WorkSpaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyCertificateBasedAuthPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyCertificateBasedAuthPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateBasedAuthProperties;
use \OpenAPI\OpenAPI\Models\Shared\CertificateBasedAuthStatusEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeletableCertificateBasedAuthPropertyEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifyCertificateBasedAuthPropertiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyCertificateBasedAuthPropertiesRequest();
    $request->modifyCertificateBasedAuthPropertiesRequest = new ModifyCertificateBasedAuthPropertiesRequest();
    $request->modifyCertificateBasedAuthPropertiesRequest->certificateBasedAuthProperties = new CertificateBasedAuthProperties();
    $request->modifyCertificateBasedAuthPropertiesRequest->certificateBasedAuthProperties->certificateAuthorityArn = 'quis';
    $request->modifyCertificateBasedAuthPropertiesRequest->certificateBasedAuthProperties->status = CertificateBasedAuthStatusEnumEnum::DISABLED;
    $request->modifyCertificateBasedAuthPropertiesRequest->propertiesToDelete = [
        DeletableCertificateBasedAuthPropertyEnum::CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN,
        DeletableCertificateBasedAuthPropertyEnum::CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN,
        DeletableCertificateBasedAuthPropertyEnum::CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN,
        DeletableCertificateBasedAuthPropertyEnum::CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN,
    ];
    $request->modifyCertificateBasedAuthPropertiesRequest->resourceId = 'voluptate';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = ModifyCertificateBasedAuthPropertiesXAmzTargetEnum::WORKSPACES_SERVICE_MODIFY_CERTIFICATE_BASED_AUTH_PROPERTIES;

    $response = $sdk->sdk->modifyCertificateBasedAuthProperties($request);

    if ($response->modifyCertificateBasedAuthPropertiesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyClientProperties

Modifies the properties of the specified Amazon WorkSpaces clients.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyClientPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyClientPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientProperties;
use \OpenAPI\OpenAPI\Models\Shared\LogUploadEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReconnectEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifyClientPropertiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyClientPropertiesRequest();
    $request->modifyClientPropertiesRequest = new ModifyClientPropertiesRequest();
    $request->modifyClientPropertiesRequest->clientProperties = new ClientProperties();
    $request->modifyClientPropertiesRequest->clientProperties->logUploadEnabled = LogUploadEnumEnum::ENABLED;
    $request->modifyClientPropertiesRequest->clientProperties->reconnectEnabled = ReconnectEnumEnum::DISABLED;
    $request->modifyClientPropertiesRequest->resourceId = 'facilis';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = ModifyClientPropertiesXAmzTargetEnum::WORKSPACES_SERVICE_MODIFY_CLIENT_PROPERTIES;

    $response = $sdk->sdk->modifyClientProperties($request);

    if ($response->modifyClientPropertiesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifySamlProperties

Modifies multiple properties related to SAML 2.0 authentication, including the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifySamlPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifySamlPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletableSamlPropertyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SamlProperties;
use \OpenAPI\OpenAPI\Models\Shared\SamlStatusEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifySamlPropertiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifySamlPropertiesRequest();
    $request->modifySamlPropertiesRequest = new ModifySamlPropertiesRequest();
    $request->modifySamlPropertiesRequest->propertiesToDelete = [
        DeletableSamlPropertyEnum::SAML_PROPERTIES_USER_ACCESS_URL,
        DeletableSamlPropertyEnum::SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME,
        DeletableSamlPropertyEnum::SAML_PROPERTIES_USER_ACCESS_URL,
        DeletableSamlPropertyEnum::SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME,
    ];
    $request->modifySamlPropertiesRequest->resourceId = 'fugit';
    $request->modifySamlPropertiesRequest->samlProperties = new SamlProperties();
    $request->modifySamlPropertiesRequest->samlProperties->relayStateParameterName = 'porro';
    $request->modifySamlPropertiesRequest->samlProperties->status = SamlStatusEnumEnum::ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK;
    $request->modifySamlPropertiesRequest->samlProperties->userAccessUrl = 'doloribus';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = ModifySamlPropertiesXAmzTargetEnum::WORKSPACES_SERVICE_MODIFY_SAML_PROPERTIES;

    $response = $sdk->sdk->modifySamlProperties($request);

    if ($response->modifySamlPropertiesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifySelfservicePermissions

Modifies the self-service WorkSpace management capabilities for your users. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifySelfservicePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifySelfservicePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SelfservicePermissions;
use \OpenAPI\OpenAPI\Models\Shared\ReconnectEnumEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifySelfservicePermissionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifySelfservicePermissionsRequest();
    $request->modifySelfservicePermissionsRequest = new ModifySelfservicePermissionsRequest();
    $request->modifySelfservicePermissionsRequest->resourceId = 'ea';
    $request->modifySelfservicePermissionsRequest->selfservicePermissions = new SelfservicePermissions();
    $request->modifySelfservicePermissionsRequest->selfservicePermissions->changeComputeType = ReconnectEnumEnum::ENABLED;
    $request->modifySelfservicePermissionsRequest->selfservicePermissions->increaseVolumeSize = ReconnectEnumEnum::ENABLED;
    $request->modifySelfservicePermissionsRequest->selfservicePermissions->rebuildWorkspace = ReconnectEnumEnum::DISABLED;
    $request->modifySelfservicePermissionsRequest->selfservicePermissions->restartWorkspace = ReconnectEnumEnum::ENABLED;
    $request->modifySelfservicePermissionsRequest->selfservicePermissions->switchRunningMode = ReconnectEnumEnum::ENABLED;
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = ModifySelfservicePermissionsXAmzTargetEnum::WORKSPACES_SERVICE_MODIFY_SELFSERVICE_PERMISSIONS;

    $response = $sdk->sdk->modifySelfservicePermissions($request);

    if ($response->modifySelfservicePermissionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyWorkspaceAccessProperties

Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access"> Control Device Access</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyWorkspaceAccessPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyWorkspaceAccessPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceAccessProperties;
use \OpenAPI\OpenAPI\Models\Shared\AccessPropertyValueEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifyWorkspaceAccessPropertiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyWorkspaceAccessPropertiesRequest();
    $request->modifyWorkspaceAccessPropertiesRequest = new ModifyWorkspaceAccessPropertiesRequest();
    $request->modifyWorkspaceAccessPropertiesRequest->resourceId = 'nulla';
    $request->modifyWorkspaceAccessPropertiesRequest->workspaceAccessProperties = new WorkspaceAccessProperties();
    $request->modifyWorkspaceAccessPropertiesRequest->workspaceAccessProperties->deviceTypeAndroid = AccessPropertyValueEnum::DENY;
    $request->modifyWorkspaceAccessPropertiesRequest->workspaceAccessProperties->deviceTypeChromeOs = AccessPropertyValueEnum::DENY;
    $request->modifyWorkspaceAccessPropertiesRequest->workspaceAccessProperties->deviceTypeIos = AccessPropertyValueEnum::ALLOW;
    $request->modifyWorkspaceAccessPropertiesRequest->workspaceAccessProperties->deviceTypeLinux = AccessPropertyValueEnum::DENY;
    $request->modifyWorkspaceAccessPropertiesRequest->workspaceAccessProperties->deviceTypeOsx = AccessPropertyValueEnum::DENY;
    $request->modifyWorkspaceAccessPropertiesRequest->workspaceAccessProperties->deviceTypeWeb = AccessPropertyValueEnum::DENY;
    $request->modifyWorkspaceAccessPropertiesRequest->workspaceAccessProperties->deviceTypeWindows = AccessPropertyValueEnum::ALLOW;
    $request->modifyWorkspaceAccessPropertiesRequest->workspaceAccessProperties->deviceTypeZeroClient = AccessPropertyValueEnum::DENY;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = ModifyWorkspaceAccessPropertiesXAmzTargetEnum::WORKSPACES_SERVICE_MODIFY_WORKSPACE_ACCESS_PROPERTIES;

    $response = $sdk->sdk->modifyWorkspaceAccessProperties($request);

    if ($response->modifyWorkspaceAccessPropertiesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyWorkspaceCreationProperties

Modify the default properties used to create WorkSpaces.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyWorkspaceCreationPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyWorkspaceCreationPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceCreationProperties;
use \OpenAPI\OpenAPI\Models\Operations\ModifyWorkspaceCreationPropertiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyWorkspaceCreationPropertiesRequest();
    $request->modifyWorkspaceCreationPropertiesRequest = new ModifyWorkspaceCreationPropertiesRequest();
    $request->modifyWorkspaceCreationPropertiesRequest->resourceId = 'consectetur';
    $request->modifyWorkspaceCreationPropertiesRequest->workspaceCreationProperties = new WorkspaceCreationProperties();
    $request->modifyWorkspaceCreationPropertiesRequest->workspaceCreationProperties->customSecurityGroupId = 'recusandae';
    $request->modifyWorkspaceCreationPropertiesRequest->workspaceCreationProperties->defaultOu = 'aspernatur';
    $request->modifyWorkspaceCreationPropertiesRequest->workspaceCreationProperties->enableInternetAccess = false;
    $request->modifyWorkspaceCreationPropertiesRequest->workspaceCreationProperties->enableMaintenanceMode = false;
    $request->modifyWorkspaceCreationPropertiesRequest->workspaceCreationProperties->enableWorkDocs = false;
    $request->modifyWorkspaceCreationPropertiesRequest->workspaceCreationProperties->userEnabledAsLocalAdministrator = false;
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = ModifyWorkspaceCreationPropertiesXAmzTargetEnum::WORKSPACES_SERVICE_MODIFY_WORKSPACE_CREATION_PROPERTIES;

    $response = $sdk->sdk->modifyWorkspaceCreationProperties($request);

    if ($response->modifyWorkspaceCreationPropertiesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyWorkspaceProperties

<p>Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html"> Modify a WorkSpace</a>. </p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyWorkspacePropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyWorkspacePropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceProperties;
use \OpenAPI\OpenAPI\Models\Shared\ComputeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunningModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifyWorkspacePropertiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyWorkspacePropertiesRequest();
    $request->modifyWorkspacePropertiesRequest = new ModifyWorkspacePropertiesRequest();
    $request->modifyWorkspacePropertiesRequest->workspaceId = 'impedit';
    $request->modifyWorkspacePropertiesRequest->workspaceProperties = new WorkspaceProperties();
    $request->modifyWorkspacePropertiesRequest->workspaceProperties->computeTypeName = ComputeEnum::PERFORMANCE;
    $request->modifyWorkspacePropertiesRequest->workspaceProperties->protocols = [
        ProtocolEnum::WSP,
    ];
    $request->modifyWorkspacePropertiesRequest->workspaceProperties->rootVolumeSizeGib = 79522;
    $request->modifyWorkspacePropertiesRequest->workspaceProperties->runningMode = RunningModeEnum::AUTO_STOP;
    $request->modifyWorkspacePropertiesRequest->workspaceProperties->runningModeAutoStopTimeoutInMinutes = 89603;
    $request->modifyWorkspacePropertiesRequest->workspaceProperties->userVolumeSizeGib = 677412;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = ModifyWorkspacePropertiesXAmzTargetEnum::WORKSPACES_SERVICE_MODIFY_WORKSPACE_PROPERTIES;

    $response = $sdk->sdk->modifyWorkspaceProperties($request);

    if ($response->modifyWorkspacePropertiesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## modifyWorkspaceState

<p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ModifyWorkspaceStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ModifyWorkspaceStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TargetWorkspaceStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ModifyWorkspaceStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ModifyWorkspaceStateRequest();
    $request->modifyWorkspaceStateRequest = new ModifyWorkspaceStateRequest();
    $request->modifyWorkspaceStateRequest->workspaceId = 'assumenda';
    $request->modifyWorkspaceStateRequest->workspaceState = TargetWorkspaceStateEnum::ADMIN_MAINTENANCE;
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = ModifyWorkspaceStateXAmzTargetEnum::WORKSPACES_SERVICE_MODIFY_WORKSPACE_STATE;

    $response = $sdk->sdk->modifyWorkspaceState($request);

    if ($response->modifyWorkspaceStateResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rebootWorkspaces

<p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RebootWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RebootWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RebootRequest;
use \OpenAPI\OpenAPI\Models\Operations\RebootWorkspacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RebootWorkspacesRequest();
    $request->rebootWorkspacesRequest = new RebootWorkspacesRequest();
    $request->rebootWorkspacesRequest->rebootWorkspaceRequests = [
        new RebootRequest(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = RebootWorkspacesXAmzTargetEnum::WORKSPACES_SERVICE_REBOOT_WORKSPACES;

    $response = $sdk->sdk->rebootWorkspaces($request);

    if ($response->rebootWorkspacesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rebuildWorkspaces

<p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RebuildWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RebuildWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RebuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\RebuildWorkspacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RebuildWorkspacesRequest();
    $request->rebuildWorkspacesRequest = new RebuildWorkspacesRequest();
    $request->rebuildWorkspacesRequest->rebuildWorkspaceRequests = [
        new RebuildRequest(),
        new RebuildRequest(),
        new RebuildRequest(),
    ];
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = RebuildWorkspacesXAmzTargetEnum::WORKSPACES_SERVICE_REBUILD_WORKSPACES;

    $response = $sdk->sdk->rebuildWorkspaces($request);

    if ($response->rebuildWorkspacesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerWorkspaceDirectory

Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role"> Creating the workspaces_DefaultRole Role</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterWorkspaceDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterWorkspaceDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TenancyEnum;
use \OpenAPI\OpenAPI\Models\Operations\RegisterWorkspaceDirectoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterWorkspaceDirectoryRequest();
    $request->registerWorkspaceDirectoryRequest = new RegisterWorkspaceDirectoryRequest();
    $request->registerWorkspaceDirectoryRequest->directoryId = 'eos';
    $request->registerWorkspaceDirectoryRequest->enableSelfService = false;
    $request->registerWorkspaceDirectoryRequest->enableWorkDocs = false;
    $request->registerWorkspaceDirectoryRequest->subnetIds = [
        'quisquam',
        'veritatis',
        'ipsa',
    ];
    $request->registerWorkspaceDirectoryRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->registerWorkspaceDirectoryRequest->tenancy = TenancyEnum::SHARED;
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = RegisterWorkspaceDirectoryXAmzTargetEnum::WORKSPACES_SERVICE_REGISTER_WORKSPACE_DIRECTORY;

    $response = $sdk->sdk->registerWorkspaceDirectory($request);

    if ($response->registerWorkspaceDirectoryResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## restoreWorkspace

<p>Restores the specified WorkSpace to its last known healthy state.</p> <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpace is completely restored.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\RestoreWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RestoreWorkspaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreWorkspaceRequest();
    $request->restoreWorkspaceRequest = new RestoreWorkspaceRequest();
    $request->restoreWorkspaceRequest->workspaceId = 'voluptas';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = RestoreWorkspaceXAmzTargetEnum::WORKSPACES_SERVICE_RESTORE_WORKSPACE;

    $response = $sdk->sdk->restoreWorkspace($request);

    if ($response->restoreWorkspaceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## revokeIpRules

Removes one or more rules from the specified IP access control group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RevokeIpRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RevokeIpRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\RevokeIpRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RevokeIpRulesRequest();
    $request->revokeIpRulesRequest = new RevokeIpRulesRequest();
    $request->revokeIpRulesRequest->groupId = 'sequi';
    $request->revokeIpRulesRequest->userRules = [
        'esse',
        'recusandae',
        'aperiam',
        'distinctio',
    ];
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = RevokeIpRulesXAmzTargetEnum::WORKSPACES_SERVICE_REVOKE_IP_RULES;

    $response = $sdk->sdk->revokeIpRules($request);

    if ($response->revokeIpRulesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startWorkspaces

<p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartWorkspacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartWorkspacesRequest();
    $request->startWorkspacesRequest = new StartWorkspacesRequest();
    $request->startWorkspacesRequest->startWorkspaceRequests = [
        new StartRequest(),
        new StartRequest(),
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = StartWorkspacesXAmzTargetEnum::WORKSPACES_SERVICE_START_WORKSPACES;

    $response = $sdk->sdk->startWorkspaces($request);

    if ($response->startWorkspacesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopWorkspaces

<p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopWorkspacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopWorkspacesRequest();
    $request->stopWorkspacesRequest = new StopWorkspacesRequest();
    $request->stopWorkspacesRequest->stopWorkspaceRequests = [
        new StopRequest(),
        new StopRequest(),
        new StopRequest(),
        new StopRequest(),
    ];
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = StopWorkspacesXAmzTargetEnum::WORKSPACES_SERVICE_STOP_WORKSPACES;

    $response = $sdk->sdk->stopWorkspaces($request);

    if ($response->stopWorkspacesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## terminateWorkspaces

<p>Terminates the specified WorkSpaces.</p> <important> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services Support before terminating the WorkSpace.</p> </important> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html"> DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TerminateWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminateWorkspacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TerminateWorkspacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TerminateWorkspacesRequest();
    $request->terminateWorkspacesRequest = new TerminateWorkspacesRequest();
    $request->terminateWorkspacesRequest->terminateWorkspaceRequests = [
        new TerminateRequest(),
        new TerminateRequest(),
        new TerminateRequest(),
    ];
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = TerminateWorkspacesXAmzTargetEnum::WORKSPACES_SERVICE_TERMINATE_WORKSPACES;

    $response = $sdk->sdk->terminateWorkspaces($request);

    if ($response->terminateWorkspacesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnectClientAddIn

Updates a Amazon Connect client add-in. Use this action to update the name and endpoint URL of a Amazon Connect client add-in.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectClientAddInRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConnectClientAddInRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectClientAddInXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectClientAddInRequest();
    $request->updateConnectClientAddInRequest = new UpdateConnectClientAddInRequest();
    $request->updateConnectClientAddInRequest->addInId = 'consequuntur';
    $request->updateConnectClientAddInRequest->name = 'Rose Turner';
    $request->updateConnectClientAddInRequest->resourceId = 'et';
    $request->updateConnectClientAddInRequest->url = 'esse';
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = UpdateConnectClientAddInXAmzTargetEnum::WORKSPACES_SERVICE_UPDATE_CONNECT_CLIENT_ADD_IN;

    $response = $sdk->sdk->updateConnectClientAddIn($request);

    if ($response->updateConnectClientAddInResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnectionAliasPermission

<p>Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <ul> <li> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </li> <li> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionAliasPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConnectionAliasPermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionAliasPermission;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionAliasPermissionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectionAliasPermissionRequest();
    $request->updateConnectionAliasPermissionRequest = new UpdateConnectionAliasPermissionRequest();
    $request->updateConnectionAliasPermissionRequest->aliasId = 'aliquid';
    $request->updateConnectionAliasPermissionRequest->connectionAliasPermission = new ConnectionAliasPermission();
    $request->updateConnectionAliasPermissionRequest->connectionAliasPermission->allowAssociation = false;
    $request->updateConnectionAliasPermissionRequest->connectionAliasPermission->sharedAccountId = 'quasi';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = UpdateConnectionAliasPermissionXAmzTargetEnum::WORKSPACES_SERVICE_UPDATE_CONNECTION_ALIAS_PERMISSION;

    $response = $sdk->sdk->updateConnectionAliasPermission($request);

    if ($response->updateConnectionAliasPermissionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRulesOfIpGroup

Replaces the current rules of the specified IP access control group with the specified rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRulesOfIpGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRulesOfIpGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpRuleItem;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRulesOfIpGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRulesOfIpGroupRequest();
    $request->updateRulesOfIpGroupRequest = new UpdateRulesOfIpGroupRequest();
    $request->updateRulesOfIpGroupRequest->groupId = 'distinctio';
    $request->updateRulesOfIpGroupRequest->userRules = [
        new IpRuleItem(),
        new IpRuleItem(),
        new IpRuleItem(),
        new IpRuleItem(),
    ];
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = UpdateRulesOfIpGroupXAmzTargetEnum::WORKSPACES_SERVICE_UPDATE_RULES_OF_IP_GROUP;

    $response = $sdk->sdk->updateRulesOfIpGroup($request);

    if ($response->updateRulesOfIpGroupResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspaceBundle

<p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html"> Update a Custom WorkSpaces Bundle</a>.</p> <important> <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceBundleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWorkspaceBundleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceBundleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkspaceBundleRequest();
    $request->updateWorkspaceBundleRequest = new UpdateWorkspaceBundleRequest();
    $request->updateWorkspaceBundleRequest->bundleId = 'minus';
    $request->updateWorkspaceBundleRequest->imageId = 'quaerat';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = UpdateWorkspaceBundleXAmzTargetEnum::WORKSPACES_SERVICE_UPDATE_WORKSPACE_BUNDLE;

    $response = $sdk->sdk->updateWorkspaceBundle($request);

    if ($response->updateWorkspaceBundleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspaceImagePermission

<p>Shares or unshares an image with one account in the same Amazon Web Services Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.</p> <p>After an image has been shared, the recipient account can copy the image to other Regions as needed.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <p>For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.</p> <note> <ul> <li> <p>To delete an image that has been shared, you must unshare the image before you delete it.</p> </li> <li> <p>Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceImagePermissionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWorkspaceImagePermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkspaceImagePermissionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkspaceImagePermissionRequest();
    $request->updateWorkspaceImagePermissionRequest = new UpdateWorkspaceImagePermissionRequest();
    $request->updateWorkspaceImagePermissionRequest->allowCopyImage = false;
    $request->updateWorkspaceImagePermissionRequest->imageId = 'quas';
    $request->updateWorkspaceImagePermissionRequest->sharedAccountId = 'esse';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'a';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'quia';
    $request->xAmzTarget = UpdateWorkspaceImagePermissionXAmzTargetEnum::WORKSPACES_SERVICE_UPDATE_WORKSPACE_IMAGE_PERMISSION;

    $response = $sdk->sdk->updateWorkspaceImagePermission($request);

    if ($response->updateWorkspaceImagePermissionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
