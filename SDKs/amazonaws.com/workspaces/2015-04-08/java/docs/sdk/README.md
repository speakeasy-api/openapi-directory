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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateConnectionAliasRequest;
import org.openapis.openapi.models.operations.AssociateConnectionAliasResponse;
import org.openapis.openapi.models.operations.AssociateConnectionAliasXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateConnectionAliasRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateConnectionAliasRequest req = new AssociateConnectionAliasRequest(                new AssociateConnectionAliasRequest("suscipit", "iure");, AssociateConnectionAliasXAmzTargetEnum.WORKSPACES_SERVICE_ASSOCIATE_CONNECTION_ALIAS) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateConnectionAliasResponse res = sdk.sdk.associateConnectionAlias(req);

            if (res.associateConnectionAliasResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateIpGroups

Associates the specified IP access control group with the specified directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateIpGroupsRequest;
import org.openapis.openapi.models.operations.AssociateIpGroupsResponse;
import org.openapis.openapi.models.operations.AssociateIpGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateIpGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateIpGroupsRequest req = new AssociateIpGroupsRequest(                new AssociateIpGroupsRequest("placeat",                 new String[]{{
                                                add("iusto"),
                                                add("excepturi"),
                                                add("nisi"),
                                            }});, AssociateIpGroupsXAmzTargetEnum.WORKSPACES_SERVICE_ASSOCIATE_IP_GROUPS) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ab";
                xAmzDate = "quis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "perferendis";
            }};            

            AssociateIpGroupsResponse res = sdk.sdk.associateIpGroups(req);

            if (res.associateIpGroupsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizeIpRules

<p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizeIpRulesRequest;
import org.openapis.openapi.models.operations.AuthorizeIpRulesResponse;
import org.openapis.openapi.models.operations.AuthorizeIpRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthorizeIpRulesRequest;
import org.openapis.openapi.models.shared.IpRuleItem;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AuthorizeIpRulesRequest req = new AuthorizeIpRulesRequest(                new AuthorizeIpRulesRequest("repellendus",                 new org.openapis.openapi.models.shared.IpRuleItem[]{{
                                                add(new IpRuleItem() {{
                                                    ipRule = "quo";
                                                    ruleDesc = "odit";
                                                }}),
                                                add(new IpRuleItem() {{
                                                    ipRule = "at";
                                                    ruleDesc = "at";
                                                }}),
                                                add(new IpRuleItem() {{
                                                    ipRule = "maiores";
                                                    ruleDesc = "molestiae";
                                                }}),
                                                add(new IpRuleItem() {{
                                                    ipRule = "quod";
                                                    ruleDesc = "quod";
                                                }}),
                                            }});, AuthorizeIpRulesXAmzTargetEnum.WORKSPACES_SERVICE_AUTHORIZE_IP_RULES) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "totam";
                xAmzCredential = "porro";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "officia";
            }};            

            AuthorizeIpRulesResponse res = sdk.sdk.authorizeIpRules(req);

            if (res.authorizeIpRulesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## copyWorkspaceImage

<p>Copies the specified image from the specified Region to the current Region. For more information about copying images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html"> Copy a Custom WorkSpaces Image</a>.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <important> <p>Before copying a shared image, be sure to verify that it has been shared from the correct Amazon Web Services account. To determine if an image has been shared and to see the ID of the Amazon Web Services account that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyWorkspaceImageRequest;
import org.openapis.openapi.models.operations.CopyWorkspaceImageResponse;
import org.openapis.openapi.models.operations.CopyWorkspaceImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.CopyWorkspaceImageRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopyWorkspaceImageRequest req = new CopyWorkspaceImageRequest(                new CopyWorkspaceImageRequest("fugit", "deleniti", "hic") {{
                                description = "optio";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("molestiae") {{
                                        key = "beatae";
                                        value = "commodi";
                                    }}),
                                    add(new Tag("impedit") {{
                                        key = "modi";
                                        value = "qui";
                                    }}),
                                    add(new Tag("ipsum") {{
                                        key = "cum";
                                        value = "esse";
                                    }}),
                                }};
                            }};, CopyWorkspaceImageXAmzTargetEnum.WORKSPACES_SERVICE_COPY_WORKSPACE_IMAGE) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "ad";
                xAmzSecurityToken = "natus";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "iste";
            }};            

            CopyWorkspaceImageResponse res = sdk.sdk.copyWorkspaceImage(req);

            if (res.copyWorkspaceImageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConnectClientAddIn

<p>Creates a client-add-in for Amazon Connect within a directory. You can create only one Amazon Connect client add-in within a directory.</p> <p>This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectClientAddInRequest;
import org.openapis.openapi.models.operations.CreateConnectClientAddInResponse;
import org.openapis.openapi.models.operations.CreateConnectClientAddInXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateConnectClientAddInRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectClientAddInRequest req = new CreateConnectClientAddInRequest(                new CreateConnectClientAddInRequest("natus", "laboriosam", "hic");, CreateConnectClientAddInXAmzTargetEnum.WORKSPACES_SERVICE_CREATE_CONNECT_CLIENT_ADD_IN) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
            }};            

            CreateConnectClientAddInResponse res = sdk.sdk.createConnectClientAddIn(req);

            if (res.createConnectClientAddInResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConnectionAlias

Creates the specified connection alias for use with cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectionAliasRequest;
import org.openapis.openapi.models.operations.CreateConnectionAliasResponse;
import org.openapis.openapi.models.operations.CreateConnectionAliasXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateConnectionAliasRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectionAliasRequest req = new CreateConnectionAliasRequest(                new CreateConnectionAliasRequest("architecto") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("mollitia") {{
                                        key = "reiciendis";
                                        value = "est";
                                    }}),
                                }};
                            }};, CreateConnectionAliasXAmzTargetEnum.WORKSPACES_SERVICE_CREATE_CONNECTION_ALIAS) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "dolorem";
                xAmzDate = "corporis";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "enim";
            }};            

            CreateConnectionAliasResponse res = sdk.sdk.createConnectionAlias(req);

            if (res.createConnectionAliasResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIpGroup

<p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIpGroupRequest;
import org.openapis.openapi.models.operations.CreateIpGroupResponse;
import org.openapis.openapi.models.operations.CreateIpGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateIpGroupRequest;
import org.openapis.openapi.models.shared.IpRuleItem;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIpGroupRequest req = new CreateIpGroupRequest(                new CreateIpGroupRequest("nemo") {{
                                groupDesc = "minima";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("culpa") {{
                                        key = "accusantium";
                                        value = "iure";
                                    }}),
                                    add(new Tag("architecto") {{
                                        key = "doloribus";
                                        value = "sapiente";
                                    }}),
                                    add(new Tag("culpa") {{
                                        key = "mollitia";
                                        value = "dolorem";
                                    }}),
                                }};
                                userRules = new org.openapis.openapi.models.shared.IpRuleItem[]{{
                                    add(new IpRuleItem() {{
                                        ipRule = "repellat";
                                        ruleDesc = "mollitia";
                                    }}),
                                }};
                            }};, CreateIpGroupXAmzTargetEnum.WORKSPACES_SERVICE_CREATE_IP_GROUP) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            CreateIpGroupResponse res = sdk.sdk.createIpGroup(req);

            if (res.createIpGroupResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStandbyWorkspaces

Creates a standby WorkSpace in a secondary Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStandbyWorkspacesRequest;
import org.openapis.openapi.models.operations.CreateStandbyWorkspacesResponse;
import org.openapis.openapi.models.operations.CreateStandbyWorkspacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateStandbyWorkspacesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StandbyWorkspace;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStandbyWorkspacesRequest req = new CreateStandbyWorkspacesRequest(                new CreateStandbyWorkspacesRequest("quis",                 new org.openapis.openapi.models.shared.StandbyWorkspace[]{{
                                                add(new StandbyWorkspace("aut", "quasi") {{
                                                    directoryId = "laborum";
                                                    primaryWorkspaceId = "animi";
                                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                        add(new Tag("sequi") {{
                                                            key = "odit";
                                                            value = "quo";
                                                        }}),
                                                        add(new Tag("id") {{
                                                            key = "tenetur";
                                                            value = "ipsam";
                                                        }}),
                                                    }};
                                                    volumeEncryptionKey = "possimus";
                                                }}),
                                            }});, CreateStandbyWorkspacesXAmzTargetEnum.WORKSPACES_SERVICE_CREATE_STANDBY_WORKSPACES) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "laborum";
                xAmzDate = "quasi";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "vero";
            }};            

            CreateStandbyWorkspacesResponse res = sdk.sdk.createStandbyWorkspaces(req);

            if (res.createStandbyWorkspacesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTags

Creates the specified tags for the specified WorkSpaces resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTagsRequest;
import org.openapis.openapi.models.operations.CreateTagsResponse;
import org.openapis.openapi.models.operations.CreateTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateTagsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTagsRequest req = new CreateTagsRequest(                new CreateTagsRequest("praesentium",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("voluptate") {{
                                                    key = "ipsa";
                                                    value = "omnis";
                                                }}),
                                                add(new Tag("doloremque") {{
                                                    key = "cum";
                                                    value = "perferendis";
                                                }}),
                                                add(new Tag("maiores") {{
                                                    key = "reprehenderit";
                                                    value = "ut";
                                                }}),
                                                add(new Tag("dolore") {{
                                                    key = "dicta";
                                                    value = "corporis";
                                                }}),
                                            }});, CreateTagsXAmzTargetEnum.WORKSPACES_SERVICE_CREATE_TAGS) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "harum";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            CreateTagsResponse res = sdk.sdk.createTags(req);

            if (res.createTagsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUpdatedWorkspaceImage

<p>Creates a new updated WorkSpace image based on the specified source image. The new updated WorkSpace image has the latest drivers and other updates required by the Amazon WorkSpaces components.</p> <p>To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces requirements, use <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html"> DescribeWorkspaceImages</a>.</p> <note> <ul> <li> <p>Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images can be programmatically updated at this time.</p> </li> <li> <p>Microsoft Windows updates and other application updates are not included in the update process.</p> </li> <li> <p>The source WorkSpace image is not deleted. You can delete the source image after you've verified your new updated image and created a new bundle. </p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUpdatedWorkspaceImageRequest;
import org.openapis.openapi.models.operations.CreateUpdatedWorkspaceImageResponse;
import org.openapis.openapi.models.operations.CreateUpdatedWorkspaceImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateUpdatedWorkspaceImageRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUpdatedWorkspaceImageRequest req = new CreateUpdatedWorkspaceImageRequest(                new CreateUpdatedWorkspaceImageRequest("ipsum", "quidem", "molestias") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("praesentium") {{
                                        key = "pariatur";
                                        value = "modi";
                                    }}),
                                    add(new Tag("quasi") {{
                                        key = "rem";
                                        value = "voluptates";
                                    }}),
                                    add(new Tag("veritatis") {{
                                        key = "repudiandae";
                                        value = "sint";
                                    }}),
                                }};
                            }};, CreateUpdatedWorkspaceImageXAmzTargetEnum.WORKSPACES_SERVICE_CREATE_UPDATED_WORKSPACE_IMAGE) {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
            }};            

            CreateUpdatedWorkspaceImageResponse res = sdk.sdk.createUpdatedWorkspaceImage(req);

            if (res.createUpdatedWorkspaceImageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkspaceBundle

Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html"> Create a Custom WorkSpaces Image and Bundle</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkspaceBundleRequest;
import org.openapis.openapi.models.operations.CreateWorkspaceBundleResponse;
import org.openapis.openapi.models.operations.CreateWorkspaceBundleXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComputeEnum;
import org.openapis.openapi.models.shared.ComputeType;
import org.openapis.openapi.models.shared.CreateWorkspaceBundleRequest;
import org.openapis.openapi.models.shared.RootStorage;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UserStorage;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkspaceBundleRequest req = new CreateWorkspaceBundleRequest(                new CreateWorkspaceBundleRequest("distinctio", "quibusdam",                 new ComputeType() {{
                                                name = ComputeEnum.PERFORMANCE;
                                            }};, "modi",                 new UserStorage() {{
                                                capacity = "qui";
                                            }};) {{
                                rootStorage = new RootStorage() {{
                                    capacity = "aliquid";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("magni") {{
                                        key = "quos";
                                        value = "perferendis";
                                    }}),
                                    add(new Tag("alias") {{
                                        key = "assumenda";
                                        value = "ipsam";
                                    }}),
                                    add(new Tag("excepturi") {{
                                        key = "fugit";
                                        value = "dolorum";
                                    }}),
                                }};
                            }};, CreateWorkspaceBundleXAmzTargetEnum.WORKSPACES_SERVICE_CREATE_WORKSPACE_BUNDLE) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
            }};            

            CreateWorkspaceBundleResponse res = sdk.sdk.createWorkspaceBundle(req);

            if (res.createWorkspaceBundleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkspaceImage

Creates a new WorkSpace image from an existing WorkSpace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkspaceImageRequest;
import org.openapis.openapi.models.operations.CreateWorkspaceImageResponse;
import org.openapis.openapi.models.operations.CreateWorkspaceImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateWorkspaceImageRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkspaceImageRequest req = new CreateWorkspaceImageRequest(                new CreateWorkspaceImageRequest("sint", "aliquid", "provident") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dolor") {{
                                        key = "sint";
                                        value = "officia";
                                    }}),
                                    add(new Tag("dolorum") {{
                                        key = "debitis";
                                        value = "a";
                                    }}),
                                    add(new Tag("illum") {{
                                        key = "in";
                                        value = "in";
                                    }}),
                                    add(new Tag("dicta") {{
                                        key = "maiores";
                                        value = "rerum";
                                    }}),
                                }};
                            }};, CreateWorkspaceImageXAmzTargetEnum.WORKSPACES_SERVICE_CREATE_WORKSPACE_IMAGE) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "facere";
                xAmzDate = "ea";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "accusamus";
            }};            

            CreateWorkspaceImageResponse res = sdk.sdk.createWorkspaceImage(req);

            if (res.createWorkspaceImageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkspaces

<p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkspacesRequest;
import org.openapis.openapi.models.operations.CreateWorkspacesResponse;
import org.openapis.openapi.models.operations.CreateWorkspacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComputeEnum;
import org.openapis.openapi.models.shared.CreateWorkspacesRequest;
import org.openapis.openapi.models.shared.ProtocolEnum;
import org.openapis.openapi.models.shared.RunningModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.WorkspaceProperties;
import org.openapis.openapi.models.shared.WorkspaceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkspacesRequest req = new CreateWorkspacesRequest(                new CreateWorkspacesRequest(                new org.openapis.openapi.models.shared.WorkspaceRequest[]{{
                                                add(new WorkspaceRequest("aspernatur", "architecto", "magnam") {{
                                                    bundleId = "enim";
                                                    directoryId = "accusamus";
                                                    rootVolumeEncryptionEnabled = false;
                                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                        add(new Tag("nam") {{
                                                            key = "quidem";
                                                            value = "provident";
                                                        }}),
                                                        add(new Tag("deleniti") {{
                                                            key = "id";
                                                            value = "blanditiis";
                                                        }}),
                                                        add(new Tag("deserunt") {{
                                                            key = "sapiente";
                                                            value = "amet";
                                                        }}),
                                                        add(new Tag("natus") {{
                                                            key = "nisi";
                                                            value = "vel";
                                                        }}),
                                                    }};
                                                    userName = "Lenna47";
                                                    userVolumeEncryptionEnabled = false;
                                                    volumeEncryptionKey = "magnam";
                                                    workspaceProperties = new WorkspaceProperties() {{
                                                        computeTypeName = ComputeEnum.GRAPHICSPRO;
                                                        protocols = new org.openapis.openapi.models.shared.ProtocolEnum[]{{
                                                            add(ProtocolEnum.PCOIP),
                                                            add(ProtocolEnum.PCOIP),
                                                            add(ProtocolEnum.PCOIP),
                                                        }};
                                                        rootVolumeSizeGib = 618016L;
                                                        runningMode = RunningModeEnum.MANUAL;
                                                        runningModeAutoStopTimeoutInMinutes = 428769L;
                                                        userVolumeSizeGib = 878453L;
                                                    }};
                                                }}),
                                                add(new WorkspaceRequest("deleniti", "facilis", "in") {{
                                                    bundleId = "et";
                                                    directoryId = "excepturi";
                                                    rootVolumeEncryptionEnabled = false;
                                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                        add(new Tag("sint") {{
                                                            key = "provident";
                                                            value = "quos";
                                                        }}),
                                                        add(new Tag("reiciendis") {{
                                                            key = "accusantium";
                                                            value = "mollitia";
                                                        }}),
                                                    }};
                                                    userName = "Mack.Hammes";
                                                    userVolumeEncryptionEnabled = false;
                                                    volumeEncryptionKey = "necessitatibus";
                                                    workspaceProperties = new WorkspaceProperties() {{
                                                        computeTypeName = ComputeEnum.STANDARD;
                                                        protocols = new org.openapis.openapi.models.shared.ProtocolEnum[]{{
                                                            add(ProtocolEnum.PCOIP),
                                                            add(ProtocolEnum.PCOIP),
                                                        }};
                                                        rootVolumeSizeGib = 984043L;
                                                        runningMode = RunningModeEnum.MANUAL;
                                                        runningModeAutoStopTimeoutInMinutes = 260341L;
                                                        userVolumeSizeGib = 806194L;
                                                    }};
                                                }}),
                                                add(new WorkspaceRequest("voluptate", "autem", "nam") {{
                                                    bundleId = "architecto";
                                                    directoryId = "architecto";
                                                    rootVolumeEncryptionEnabled = false;
                                                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                        add(new Tag("nihil") {{
                                                            key = "ullam";
                                                            value = "expedita";
                                                        }}),
                                                        add(new Tag("sed") {{
                                                            key = "repellat";
                                                            value = "quibusdam";
                                                        }}),
                                                        add(new Tag("accusantium") {{
                                                            key = "saepe";
                                                            value = "pariatur";
                                                        }}),
                                                        add(new Tag("natus") {{
                                                            key = "consequuntur";
                                                            value = "praesentium";
                                                        }}),
                                                    }};
                                                    userName = "Catalina_Casper86";
                                                    userVolumeEncryptionEnabled = false;
                                                    volumeEncryptionKey = "maxime";
                                                    workspaceProperties = new WorkspaceProperties() {{
                                                        computeTypeName = ComputeEnum.POWER;
                                                        protocols = new org.openapis.openapi.models.shared.ProtocolEnum[]{{
                                                            add(ProtocolEnum.PCOIP),
                                                            add(ProtocolEnum.PCOIP),
                                                            add(ProtocolEnum.PCOIP),
                                                        }};
                                                        rootVolumeSizeGib = 69167L;
                                                        runningMode = RunningModeEnum.MANUAL;
                                                        runningModeAutoStopTimeoutInMinutes = 697429L;
                                                        userVolumeSizeGib = 373291L;
                                                    }};
                                                }}),
                                            }});, CreateWorkspacesXAmzTargetEnum.WORKSPACES_SERVICE_CREATE_WORKSPACES) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "nemo";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "amet";
            }};            

            CreateWorkspacesResponse res = sdk.sdk.createWorkspaces(req);

            if (res.createWorkspacesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteClientBranding

<p>Deletes customized client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you delete your customized client branding, your login portal reverts to the default client branding.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClientBrandingRequest;
import org.openapis.openapi.models.operations.DeleteClientBrandingResponse;
import org.openapis.openapi.models.operations.DeleteClientBrandingXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClientDeviceTypeEnum;
import org.openapis.openapi.models.shared.DeleteClientBrandingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteClientBrandingRequest req = new DeleteClientBrandingRequest(                new DeleteClientBrandingRequest(                new org.openapis.openapi.models.shared.ClientDeviceTypeEnum[]{{
                                                add(ClientDeviceTypeEnum.DEVICE_TYPE_ANDROID),
                                                add(ClientDeviceTypeEnum.DEVICE_TYPE_WEB),
                                                add(ClientDeviceTypeEnum.DEVICE_TYPE_LINUX),
                                                add(ClientDeviceTypeEnum.DEVICE_TYPE_LINUX),
                                            }}, "dolores");, DeleteClientBrandingXAmzTargetEnum.WORKSPACES_SERVICE_DELETE_CLIENT_BRANDING) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "totam";
                xAmzCredential = "dignissimos";
                xAmzDate = "eaque";
                xAmzSecurityToken = "quis";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "eos";
            }};            

            DeleteClientBrandingResponse res = sdk.sdk.deleteClientBranding(req);

            if (res.deleteClientBrandingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnectClientAddIn

Deletes a client-add-in for Amazon Connect that is configured within a directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectClientAddInRequest;
import org.openapis.openapi.models.operations.DeleteConnectClientAddInResponse;
import org.openapis.openapi.models.operations.DeleteConnectClientAddInXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConnectClientAddInRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConnectClientAddInRequest req = new DeleteConnectClientAddInRequest(                new DeleteConnectClientAddInRequest("dolores", "minus");, DeleteConnectClientAddInXAmzTargetEnum.WORKSPACES_SERVICE_DELETE_CONNECT_CLIENT_ADD_IN) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "vero";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteConnectClientAddInResponse res = sdk.sdk.deleteConnectClientAddIn(req);

            if (res.deleteConnectClientAddInResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnectionAlias

<p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <important> <p> <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b> For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p> </important> <note> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectionAliasRequest;
import org.openapis.openapi.models.operations.DeleteConnectionAliasResponse;
import org.openapis.openapi.models.operations.DeleteConnectionAliasXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConnectionAliasRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConnectionAliasRequest req = new DeleteConnectionAliasRequest(                new DeleteConnectionAliasRequest("perspiciatis");, DeleteConnectionAliasXAmzTargetEnum.WORKSPACES_SERVICE_DELETE_CONNECTION_ALIAS) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            DeleteConnectionAliasResponse res = sdk.sdk.deleteConnectionAlias(req);

            if (res.deleteConnectionAliasResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIpGroup

<p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIpGroupRequest;
import org.openapis.openapi.models.operations.DeleteIpGroupResponse;
import org.openapis.openapi.models.operations.DeleteIpGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteIpGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteIpGroupRequest req = new DeleteIpGroupRequest(                new DeleteIpGroupRequest("adipisci");, DeleteIpGroupXAmzTargetEnum.WORKSPACES_SERVICE_DELETE_IP_GROUP) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "earum";
                xAmzCredential = "modi";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "pariatur";
            }};            

            DeleteIpGroupResponse res = sdk.sdk.deleteIpGroup(req);

            if (res.deleteIpGroupResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTags

Deletes the specified tags from the specified WorkSpaces resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTagsRequest;
import org.openapis.openapi.models.operations.DeleteTagsResponse;
import org.openapis.openapi.models.operations.DeleteTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTagsRequest req = new DeleteTagsRequest(                new DeleteTagsRequest("nobis",                 new String[]{{
                                                add("delectus"),
                                                add("quaerat"),
                                                add("quos"),
                                            }});, DeleteTagsXAmzTargetEnum.WORKSPACES_SERVICE_DELETE_TAGS) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolorem";
                xAmzDate = "dolor";
                xAmzSecurityToken = "qui";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteTagsResponse res = sdk.sdk.deleteTags(req);

            if (res.deleteTagsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkspaceBundle

Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html"> Delete a Custom WorkSpaces Bundle or Image</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceBundleRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceBundleResponse;
import org.openapis.openapi.models.operations.DeleteWorkspaceBundleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWorkspaceBundleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkspaceBundleRequest req = new DeleteWorkspaceBundleRequest(                new DeleteWorkspaceBundleRequest() {{
                                bundleId = "cum";
                            }};, DeleteWorkspaceBundleXAmzTargetEnum.WORKSPACES_SERVICE_DELETE_WORKSPACE_BUNDLE) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "reiciendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "veritatis";
            }};            

            DeleteWorkspaceBundleResponse res = sdk.sdk.deleteWorkspaceBundle(req);

            if (res.deleteWorkspaceBundleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkspaceImage

Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkspaceImageRequest;
import org.openapis.openapi.models.operations.DeleteWorkspaceImageResponse;
import org.openapis.openapi.models.operations.DeleteWorkspaceImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWorkspaceImageRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkspaceImageRequest req = new DeleteWorkspaceImageRequest(                new DeleteWorkspaceImageRequest("ipsa");, DeleteWorkspaceImageXAmzTargetEnum.WORKSPACES_SERVICE_DELETE_WORKSPACE_IMAGE) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "odio";
                xAmzCredential = "quaerat";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "voluptas";
            }};            

            DeleteWorkspaceImageResponse res = sdk.sdk.deleteWorkspaceImage(req);

            if (res.deleteWorkspaceImageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterWorkspaceDirectory

<p>Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterWorkspaceDirectoryRequest;
import org.openapis.openapi.models.operations.DeregisterWorkspaceDirectoryResponse;
import org.openapis.openapi.models.operations.DeregisterWorkspaceDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeregisterWorkspaceDirectoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeregisterWorkspaceDirectoryRequest req = new DeregisterWorkspaceDirectoryRequest(                new DeregisterWorkspaceDirectoryRequest("eos");, DeregisterWorkspaceDirectoryXAmzTargetEnum.WORKSPACES_SERVICE_DEREGISTER_WORKSPACE_DIRECTORY) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sit";
                xAmzCredential = "fugiat";
                xAmzDate = "ab";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "iusto";
            }};            

            DeregisterWorkspaceDirectoryResponse res = sdk.sdk.deregisterWorkspaceDirectory(req);

            if (res.deregisterWorkspaceDirectoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccount

Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccountRequest;
import org.openapis.openapi.models.operations.DescribeAccountResponse;
import org.openapis.openapi.models.operations.DescribeAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccountRequest req = new DescribeAccountRequest(                new java.util.HashMap<String, Object>() {{
                                put("deleniti", "omnis");
                                put("necessitatibus", "distinctio");
                                put("asperiores", "nihil");
                            }}, DescribeAccountXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_ACCOUNT) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "id";
                xAmzDate = "saepe";
                xAmzSecurityToken = "eius";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            DescribeAccountResponse res = sdk.sdk.describeAccount(req);

            if (res.describeAccountResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccountModifications

Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccountModificationsRequest;
import org.openapis.openapi.models.operations.DescribeAccountModificationsResponse;
import org.openapis.openapi.models.operations.DescribeAccountModificationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAccountModificationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccountModificationsRequest req = new DescribeAccountModificationsRequest(                new DescribeAccountModificationsRequest() {{
                                nextToken = "optio";
                            }};, DescribeAccountModificationsXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_ACCOUNT_MODIFICATIONS) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "ad";
                xAmzCredential = "saepe";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "minima";
            }};            

            DescribeAccountModificationsResponse res = sdk.sdk.describeAccountModifications(req);

            if (res.describeAccountModificationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeClientBranding

<p>Describes the specified client branding. Client branding allows you to customize the log in page of various device types for your users. You can add your company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <note> <p>Only device types that have branding information configured will be shown in the response.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeClientBrandingRequest;
import org.openapis.openapi.models.operations.DescribeClientBrandingResponse;
import org.openapis.openapi.models.operations.DescribeClientBrandingXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeClientBrandingRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeClientBrandingRequest req = new DescribeClientBrandingRequest(                new DescribeClientBrandingRequest("totam");, DescribeClientBrandingXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_CLIENT_BRANDING) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "alias";
                xAmzCredential = "at";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "quod";
            }};            

            DescribeClientBrandingResponse res = sdk.sdk.describeClientBranding(req);

            if (res.describeClientBrandingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeClientProperties

Retrieves a list that describes one or more specified Amazon WorkSpaces clients.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeClientPropertiesRequest;
import org.openapis.openapi.models.operations.DescribeClientPropertiesResponse;
import org.openapis.openapi.models.operations.DescribeClientPropertiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeClientPropertiesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeClientPropertiesRequest req = new DescribeClientPropertiesRequest(                new DescribeClientPropertiesRequest(                new String[]{{
                                                add("dolorum"),
                                            }});, DescribeClientPropertiesXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_CLIENT_PROPERTIES) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "esse";
                xAmzCredential = "harum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "tenetur";
            }};            

            DescribeClientPropertiesResponse res = sdk.sdk.describeClientProperties(req);

            if (res.describeClientPropertiesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConnectClientAddIns

Retrieves a list of Amazon Connect client add-ins that have been created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectClientAddInsRequest;
import org.openapis.openapi.models.operations.DescribeConnectClientAddInsResponse;
import org.openapis.openapi.models.operations.DescribeConnectClientAddInsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConnectClientAddInsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectClientAddInsRequest req = new DescribeConnectClientAddInsRequest(                new DescribeConnectClientAddInsRequest("tempore") {{
                                maxResults = 880298L;
                                nextToken = "numquam";
                            }};, DescribeConnectClientAddInsXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_CONNECT_CLIENT_ADD_INS) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "sapiente";
                xAmzDate = "totam";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "expedita";
            }};            

            DescribeConnectClientAddInsResponse res = sdk.sdk.describeConnectClientAddIns(req);

            if (res.describeConnectClientAddInsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConnectionAliasPermissions

Describes the permissions that the owner of a connection alias has granted to another Amazon Web Services account for the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectionAliasPermissionsRequest;
import org.openapis.openapi.models.operations.DescribeConnectionAliasPermissionsResponse;
import org.openapis.openapi.models.operations.DescribeConnectionAliasPermissionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConnectionAliasPermissionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectionAliasPermissionsRequest req = new DescribeConnectionAliasPermissionsRequest(                new DescribeConnectionAliasPermissionsRequest("sed") {{
                                maxResults = 424685L;
                                nextToken = "libero";
                            }};, DescribeConnectionAliasPermissionsXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_CONNECTION_ALIAS_PERMISSIONS) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "quam";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "cupiditate";
            }};            

            DescribeConnectionAliasPermissionsResponse res = sdk.sdk.describeConnectionAliasPermissions(req);

            if (res.describeConnectionAliasPermissionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConnectionAliases

Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectionAliasesRequest;
import org.openapis.openapi.models.operations.DescribeConnectionAliasesResponse;
import org.openapis.openapi.models.operations.DescribeConnectionAliasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConnectionAliasesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectionAliasesRequest req = new DescribeConnectionAliasesRequest(                new DescribeConnectionAliasesRequest() {{
                                aliasIds = new String[]{{
                                    add("soluta"),
                                    add("dicta"),
                                    add("laborum"),
                                    add("totam"),
                                }};
                                limit = 276894L;
                                nextToken = "aspernatur";
                                resourceId = "dolores";
                            }};, DescribeConnectionAliasesXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_CONNECTION_ALIASES) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "aliquid";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "qui";
            }};            

            DescribeConnectionAliasesResponse res = sdk.sdk.describeConnectionAliases(req);

            if (res.describeConnectionAliasesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeIpGroups

Describes one or more of your IP access control groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeIpGroupsRequest;
import org.openapis.openapi.models.operations.DescribeIpGroupsResponse;
import org.openapis.openapi.models.operations.DescribeIpGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeIpGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeIpGroupsRequest req = new DescribeIpGroupsRequest(                new DescribeIpGroupsRequest() {{
                                groupIds = new String[]{{
                                    add("magni"),
                                }};
                                maxResults = 488056L;
                                nextToken = "sunt";
                            }};, DescribeIpGroupsXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_IP_GROUPS) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "hic";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "nobis";
            }};            

            DescribeIpGroupsResponse res = sdk.sdk.describeIpGroups(req);

            if (res.describeIpGroupsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTags

Describes the specified tags for the specified WorkSpaces resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTagsRequest;
import org.openapis.openapi.models.operations.DescribeTagsResponse;
import org.openapis.openapi.models.operations.DescribeTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTagsRequest req = new DescribeTagsRequest(                new DescribeTagsRequest("saepe");, DescribeTagsXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_TAGS) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "nobis";
                xAmzDate = "quos";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "aperiam";
            }};            

            DescribeTagsResponse res = sdk.sdk.describeTags(req);

            if (res.describeTagsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkspaceBundles

<p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkspaceBundlesRequest;
import org.openapis.openapi.models.operations.DescribeWorkspaceBundlesResponse;
import org.openapis.openapi.models.operations.DescribeWorkspaceBundlesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWorkspaceBundlesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkspaceBundlesRequest req = new DescribeWorkspaceBundlesRequest(                new DescribeWorkspaceBundlesRequest() {{
                                bundleIds = new String[]{{
                                    add("dolore"),
                                }};
                                nextToken = "labore";
                                owner = "adipisci";
                            }};, DescribeWorkspaceBundlesXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_WORKSPACE_BUNDLES) {{
                nextToken = "dolorum";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "quae";
                xAmzCredential = "aut";
                xAmzDate = "quas";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "est";
            }};            

            DescribeWorkspaceBundlesResponse res = sdk.sdk.describeWorkspaceBundles(req);

            if (res.describeWorkspaceBundlesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkspaceDirectories

Describes the available directories that are registered with Amazon WorkSpaces.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkspaceDirectoriesRequest;
import org.openapis.openapi.models.operations.DescribeWorkspaceDirectoriesResponse;
import org.openapis.openapi.models.operations.DescribeWorkspaceDirectoriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWorkspaceDirectoriesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkspaceDirectoriesRequest req = new DescribeWorkspaceDirectoriesRequest(                new DescribeWorkspaceDirectoriesRequest() {{
                                directoryIds = new String[]{{
                                    add("doloribus"),
                                    add("ut"),
                                    add("facilis"),
                                    add("cupiditate"),
                                }};
                                limit = 181631L;
                                nextToken = "quae";
                            }};, DescribeWorkspaceDirectoriesXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_WORKSPACE_DIRECTORIES) {{
                nextToken = "laudantium";
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "voluptatibus";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "quis";
            }};            

            DescribeWorkspaceDirectoriesResponse res = sdk.sdk.describeWorkspaceDirectories(req);

            if (res.describeWorkspaceDirectoriesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkspaceImagePermissions

Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkspaceImagePermissionsRequest;
import org.openapis.openapi.models.operations.DescribeWorkspaceImagePermissionsResponse;
import org.openapis.openapi.models.operations.DescribeWorkspaceImagePermissionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWorkspaceImagePermissionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkspaceImagePermissionsRequest req = new DescribeWorkspaceImagePermissionsRequest(                new DescribeWorkspaceImagePermissionsRequest("delectus") {{
                                maxResults = 455169L;
                                nextToken = "consectetur";
                            }};, DescribeWorkspaceImagePermissionsXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_WORKSPACE_IMAGE_PERMISSIONS) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "dignissimos";
                xAmzDate = "hic";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "odio";
            }};            

            DescribeWorkspaceImagePermissionsResponse res = sdk.sdk.describeWorkspaceImagePermissions(req);

            if (res.describeWorkspaceImagePermissionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkspaceImages

Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkspaceImagesRequest;
import org.openapis.openapi.models.operations.DescribeWorkspaceImagesResponse;
import org.openapis.openapi.models.operations.DescribeWorkspaceImagesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWorkspaceImagesRequest;
import org.openapis.openapi.models.shared.ImageTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkspaceImagesRequest req = new DescribeWorkspaceImagesRequest(                new DescribeWorkspaceImagesRequest() {{
                                imageIds = new String[]{{
                                    add("vero"),
                                    add("ducimus"),
                                    add("dolore"),
                                }};
                                imageType = ImageTypeEnum.SHARED;
                                maxResults = 848944L;
                                nextToken = "sequi";
                            }};, DescribeWorkspaceImagesXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_WORKSPACE_IMAGES) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aut";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "exercitationem";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "fugit";
            }};            

            DescribeWorkspaceImagesResponse res = sdk.sdk.describeWorkspaceImages(req);

            if (res.describeWorkspaceImagesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkspaceSnapshots

Describes the snapshots for the specified WorkSpace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkspaceSnapshotsRequest;
import org.openapis.openapi.models.operations.DescribeWorkspaceSnapshotsResponse;
import org.openapis.openapi.models.operations.DescribeWorkspaceSnapshotsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWorkspaceSnapshotsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkspaceSnapshotsRequest req = new DescribeWorkspaceSnapshotsRequest(                new DescribeWorkspaceSnapshotsRequest("maiores");, DescribeWorkspaceSnapshotsXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_WORKSPACE_SNAPSHOTS) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "eligendi";
                xAmzDate = "ducimus";
                xAmzSecurityToken = "alias";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "tempora";
            }};            

            DescribeWorkspaceSnapshotsResponse res = sdk.sdk.describeWorkspaceSnapshots(req);

            if (res.describeWorkspaceSnapshotsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkspaces

<p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkspacesRequest;
import org.openapis.openapi.models.operations.DescribeWorkspacesResponse;
import org.openapis.openapi.models.operations.DescribeWorkspacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWorkspacesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkspacesRequest req = new DescribeWorkspacesRequest(                new DescribeWorkspacesRequest() {{
                                bundleId = "ea";
                                directoryId = "aspernatur";
                                limit = 428224L;
                                nextToken = "possimus";
                                userName = "Elian_Dickens";
                                workspaceIds = new String[]{{
                                    add("dolor"),
                                }};
                            }};, DescribeWorkspacesXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_WORKSPACES) {{
                limit = "maiores";
                nextToken = "quasi";
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "excepturi";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quisquam";
            }};            

            DescribeWorkspacesResponse res = sdk.sdk.describeWorkspaces(req);

            if (res.describeWorkspacesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkspacesConnectionStatus

Describes the connection status of the specified WorkSpaces.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkspacesConnectionStatusRequest;
import org.openapis.openapi.models.operations.DescribeWorkspacesConnectionStatusResponse;
import org.openapis.openapi.models.operations.DescribeWorkspacesConnectionStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWorkspacesConnectionStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkspacesConnectionStatusRequest req = new DescribeWorkspacesConnectionStatusRequest(                new DescribeWorkspacesConnectionStatusRequest() {{
                                nextToken = "ea";
                                workspaceIds = new String[]{{
                                    add("corporis"),
                                    add("veniam"),
                                    add("aliquid"),
                                    add("inventore"),
                                }};
                            }};, DescribeWorkspacesConnectionStatusXAmzTargetEnum.WORKSPACES_SERVICE_DESCRIBE_WORKSPACES_CONNECTION_STATUS) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "quo";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "minima";
            }};            

            DescribeWorkspacesConnectionStatusResponse res = sdk.sdk.describeWorkspacesConnectionStatus(req);

            if (res.describeWorkspacesConnectionStatusResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateConnectionAlias

<p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different Regions. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateConnectionAliasRequest;
import org.openapis.openapi.models.operations.DisassociateConnectionAliasResponse;
import org.openapis.openapi.models.operations.DisassociateConnectionAliasXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateConnectionAliasRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateConnectionAliasRequest req = new DisassociateConnectionAliasRequest(                new DisassociateConnectionAliasRequest("a");, DisassociateConnectionAliasXAmzTargetEnum.WORKSPACES_SERVICE_DISASSOCIATE_CONNECTION_ALIAS) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "aut";
                xAmzCredential = "aut";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "fugit";
            }};            

            DisassociateConnectionAliasResponse res = sdk.sdk.disassociateConnectionAlias(req);

            if (res.disassociateConnectionAliasResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateIpGroups

Disassociates the specified IP access control group from the specified directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateIpGroupsRequest;
import org.openapis.openapi.models.operations.DisassociateIpGroupsResponse;
import org.openapis.openapi.models.operations.DisassociateIpGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateIpGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateIpGroupsRequest req = new DisassociateIpGroupsRequest(                new DisassociateIpGroupsRequest("inventore",                 new String[]{{
                                                add("et"),
                                                add("dolorum"),
                                            }});, DisassociateIpGroupsXAmzTargetEnum.WORKSPACES_SERVICE_DISASSOCIATE_IP_GROUPS) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "velit";
                xAmzDate = "eum";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quas";
            }};            

            DisassociateIpGroupsResponse res = sdk.sdk.disassociateIpGroups(req);

            if (res.disassociateIpGroupsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importClientBranding

<p>Imports client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you import client branding, the default branding experience for the specified platform type is replaced with the imported experience</p> <note> <ul> <li> <p>You must specify at least one platform type when importing client branding.</p> </li> <li> <p>You can import up to 6 MB of data with each request. If your request exceeds this limit, you can import client branding for different platform types using separate requests.</p> </li> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify only one parameter for each platform type, but not both.</p> </li> <li> <p>Imported data can take up to a minute to appear in the WorkSpaces client.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportClientBrandingRequest;
import org.openapis.openapi.models.operations.ImportClientBrandingResponse;
import org.openapis.openapi.models.operations.ImportClientBrandingXAmzTargetEnum;
import org.openapis.openapi.models.shared.DefaultImportClientBrandingAttributes;
import org.openapis.openapi.models.shared.ImportClientBrandingRequest;
import org.openapis.openapi.models.shared.IosImportClientBrandingAttributes;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportClientBrandingRequest req = new ImportClientBrandingRequest(                new ImportClientBrandingRequest("nulla") {{
                                deviceTypeAndroid = new DefaultImportClientBrandingAttributes() {{
                                    forgotPasswordLink = "voluptas";
                                    loginMessage = new java.util.HashMap<String, String>() {{
                                        put("quasi", "tempora");
                                        put("numquam", "explicabo");
                                        put("provident", "ipsa");
                                    }};
                                    logo = "molestiae";
                                    supportEmail = "magnam";
                                    supportLink = "odio";
                                }};;
                                deviceTypeIos = new IosImportClientBrandingAttributes() {{
                                    forgotPasswordLink = "eius";
                                    loginMessage = new java.util.HashMap<String, String>() {{
                                        put("esse", "rem");
                                        put("fuga", "reprehenderit");
                                    }};
                                    logo = "quidem";
                                    logo2x = "fugiat";
                                    logo3x = "ut";
                                    supportEmail = "eum";
                                    supportLink = "suscipit";
                                }};;
                                deviceTypeLinux = new DefaultImportClientBrandingAttributes() {{
                                    forgotPasswordLink = "assumenda";
                                    loginMessage = new java.util.HashMap<String, String>() {{
                                        put("praesentium", "quisquam");
                                    }};
                                    logo = "veritatis";
                                    supportEmail = "ipsa";
                                    supportLink = "id";
                                }};;
                                deviceTypeOsx = new DefaultImportClientBrandingAttributes() {{
                                    forgotPasswordLink = "quidem";
                                    loginMessage = new java.util.HashMap<String, String>() {{
                                        put("quo", "illum");
                                    }};
                                    logo = "quo";
                                    supportEmail = "fuga";
                                    supportLink = "eius";
                                }};;
                                deviceTypeWeb = new DefaultImportClientBrandingAttributes() {{
                                    forgotPasswordLink = "eos";
                                    loginMessage = new java.util.HashMap<String, String>() {{
                                        put("ab", "cupiditate");
                                        put("consequatur", "tempora");
                                    }};
                                    logo = "debitis";
                                    supportEmail = "ipsam";
                                    supportLink = "aspernatur";
                                }};;
                                deviceTypeWindows = new DefaultImportClientBrandingAttributes() {{
                                    forgotPasswordLink = "sequi";
                                    loginMessage = new java.util.HashMap<String, String>() {{
                                        put("esse", "recusandae");
                                        put("aperiam", "distinctio");
                                        put("quod", "dignissimos");
                                        put("inventore", "nihil");
                                    }};
                                    logo = "totam";
                                    supportEmail = "accusamus";
                                    supportLink = "aliquam";
                                }};;
                            }};, ImportClientBrandingXAmzTargetEnum.WORKSPACES_SERVICE_IMPORT_CLIENT_BRANDING) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "commodi";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "molestiae";
            }};            

            ImportClientBrandingResponse res = sdk.sdk.importClientBranding(req);

            if (res.importClientBrandingResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importWorkspaceImage

Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows Desktop Licenses</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportWorkspaceImageRequest;
import org.openapis.openapi.models.operations.ImportWorkspaceImageResponse;
import org.openapis.openapi.models.operations.ImportWorkspaceImageXAmzTargetEnum;
import org.openapis.openapi.models.shared.ApplicationEnum;
import org.openapis.openapi.models.shared.ImportWorkspaceImageRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.WorkspaceImageIngestionProcessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportWorkspaceImageRequest req = new ImportWorkspaceImageRequest(                new ImportWorkspaceImageRequest("porro", "eum", "quas", WorkspaceImageIngestionProcessEnum.BYOL_GRAPHICS_G4_DN) {{
                                applications = new org.openapis.openapi.models.shared.ApplicationEnum[]{{
                                    add(ApplicationEnum.MICROSOFT_OFFICE2019),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("incidunt") {{
                                        key = "fuga";
                                        value = "mollitia";
                                    }}),
                                }};
                            }};, ImportWorkspaceImageXAmzTargetEnum.WORKSPACES_SERVICE_IMPORT_WORKSPACE_IMAGE) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
            }};            

            ImportWorkspaceImageResponse res = sdk.sdk.importWorkspaceImage(req);

            if (res.importWorkspaceImageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailableManagementCidrRanges

<p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>This operation can be run only by Amazon Web Services accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailableManagementCidrRangesRequest;
import org.openapis.openapi.models.operations.ListAvailableManagementCidrRangesResponse;
import org.openapis.openapi.models.operations.ListAvailableManagementCidrRangesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAvailableManagementCidrRangesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAvailableManagementCidrRangesRequest req = new ListAvailableManagementCidrRangesRequest(                new ListAvailableManagementCidrRangesRequest("explicabo") {{
                                maxResults = 903984L;
                                nextToken = "occaecati";
                            }};, ListAvailableManagementCidrRangesXAmzTargetEnum.WORKSPACES_SERVICE_LIST_AVAILABLE_MANAGEMENT_CIDR_RANGES) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "et";
                xAmzCredential = "esse";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "esse";
            }};            

            ListAvailableManagementCidrRangesResponse res = sdk.sdk.listAvailableManagementCidrRanges(req);

            if (res.listAvailableManagementCidrRangesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrateWorkspace

<p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p> <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code> user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code> folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p> <p>For available migration scenarios, details about what happens during migration, and best practices, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrateWorkspaceRequest;
import org.openapis.openapi.models.operations.MigrateWorkspaceResponse;
import org.openapis.openapi.models.operations.MigrateWorkspaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.MigrateWorkspaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            MigrateWorkspaceRequest req = new MigrateWorkspaceRequest(                new MigrateWorkspaceRequest("nam", "vero");, MigrateWorkspaceXAmzTargetEnum.WORKSPACES_SERVICE_MIGRATE_WORKSPACE) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "saepe";
                xAmzDate = "vel";
                xAmzSecurityToken = "harum";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "rerum";
            }};            

            MigrateWorkspaceResponse res = sdk.sdk.migrateWorkspace(req);

            if (res.migrateWorkspaceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyAccount

Modifies the configuration of Bring Your Own License (BYOL) for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyAccountRequest;
import org.openapis.openapi.models.operations.ModifyAccountResponse;
import org.openapis.openapi.models.operations.ModifyAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.DedicatedTenancySupportEnumEnum;
import org.openapis.openapi.models.shared.ModifyAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyAccountRequest req = new ModifyAccountRequest(                new ModifyAccountRequest() {{
                                dedicatedTenancyManagementCidrRange = "minima";
                                dedicatedTenancySupport = DedicatedTenancySupportEnumEnum.ENABLED;
                            }};, ModifyAccountXAmzTargetEnum.WORKSPACES_SERVICE_MODIFY_ACCOUNT) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "sit";
                xAmzDate = "culpa";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "cumque";
            }};            

            ModifyAccountResponse res = sdk.sdk.modifyAccount(req);

            if (res.modifyAccountResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyCertificateBasedAuthProperties

Modifies the properties of the certificate-based authentication you want to use with your WorkSpaces.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyCertificateBasedAuthPropertiesRequest;
import org.openapis.openapi.models.operations.ModifyCertificateBasedAuthPropertiesResponse;
import org.openapis.openapi.models.operations.ModifyCertificateBasedAuthPropertiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.CertificateBasedAuthProperties;
import org.openapis.openapi.models.shared.CertificateBasedAuthStatusEnumEnum;
import org.openapis.openapi.models.shared.DeletableCertificateBasedAuthPropertyEnum;
import org.openapis.openapi.models.shared.ModifyCertificateBasedAuthPropertiesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyCertificateBasedAuthPropertiesRequest req = new ModifyCertificateBasedAuthPropertiesRequest(                new ModifyCertificateBasedAuthPropertiesRequest("consequatur") {{
                                certificateBasedAuthProperties = new CertificateBasedAuthProperties() {{
                                    certificateAuthorityArn = "minus";
                                    status = CertificateBasedAuthStatusEnumEnum.DISABLED;
                                }};;
                                propertiesToDelete = new org.openapis.openapi.models.shared.DeletableCertificateBasedAuthPropertyEnum[]{{
                                    add(DeletableCertificateBasedAuthPropertyEnum.CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN),
                                    add(DeletableCertificateBasedAuthPropertyEnum.CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN),
                                    add(DeletableCertificateBasedAuthPropertyEnum.CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN),
                                    add(DeletableCertificateBasedAuthPropertyEnum.CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN),
                                }};
                            }};, ModifyCertificateBasedAuthPropertiesXAmzTargetEnum.WORKSPACES_SERVICE_MODIFY_CERTIFICATE_BASED_AUTH_PROPERTIES) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "esse";
                xAmzCredential = "blanditiis";
                xAmzDate = "provident";
                xAmzSecurityToken = "a";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "quas";
            }};            

            ModifyCertificateBasedAuthPropertiesResponse res = sdk.sdk.modifyCertificateBasedAuthProperties(req);

            if (res.modifyCertificateBasedAuthPropertiesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyClientProperties

Modifies the properties of the specified Amazon WorkSpaces clients.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyClientPropertiesRequest;
import org.openapis.openapi.models.operations.ModifyClientPropertiesResponse;
import org.openapis.openapi.models.operations.ModifyClientPropertiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClientProperties;
import org.openapis.openapi.models.shared.LogUploadEnumEnum;
import org.openapis.openapi.models.shared.ModifyClientPropertiesRequest;
import org.openapis.openapi.models.shared.ReconnectEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyClientPropertiesRequest req = new ModifyClientPropertiesRequest(                new ModifyClientPropertiesRequest(                new ClientProperties() {{
                                                logUploadEnabled = LogUploadEnumEnum.ENABLED;
                                                reconnectEnabled = ReconnectEnumEnum.DISABLED;
                                            }};, "error");, ModifyClientPropertiesXAmzTargetEnum.WORKSPACES_SERVICE_MODIFY_CLIENT_PROPERTIES) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "possimus";
                xAmzDate = "quia";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "facere";
            }};            

            ModifyClientPropertiesResponse res = sdk.sdk.modifyClientProperties(req);

            if (res.modifyClientPropertiesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifySamlProperties

Modifies multiple properties related to SAML 2.0 authentication, including the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifySamlPropertiesRequest;
import org.openapis.openapi.models.operations.ModifySamlPropertiesResponse;
import org.openapis.openapi.models.operations.ModifySamlPropertiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletableSamlPropertyEnum;
import org.openapis.openapi.models.shared.ModifySamlPropertiesRequest;
import org.openapis.openapi.models.shared.SamlProperties;
import org.openapis.openapi.models.shared.SamlStatusEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifySamlPropertiesRequest req = new ModifySamlPropertiesRequest(                new ModifySamlPropertiesRequest("consequuntur") {{
                                propertiesToDelete = new org.openapis.openapi.models.shared.DeletableSamlPropertyEnum[]{{
                                    add(DeletableSamlPropertyEnum.SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME),
                                }};
                                samlProperties = new SamlProperties() {{
                                    relayStateParameterName = "culpa";
                                    status = SamlStatusEnumEnum.ENABLED;
                                    userAccessUrl = "tenetur";
                                }};;
                            }};, ModifySamlPropertiesXAmzTargetEnum.WORKSPACES_SERVICE_MODIFY_SAML_PROPERTIES) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "earum";
                xAmzCredential = "vel";
                xAmzDate = "in";
                xAmzSecurityToken = "eius";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "illum";
            }};            

            ModifySamlPropertiesResponse res = sdk.sdk.modifySamlProperties(req);

            if (res.modifySamlPropertiesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifySelfservicePermissions

Modifies the self-service WorkSpace management capabilities for your users. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifySelfservicePermissionsRequest;
import org.openapis.openapi.models.operations.ModifySelfservicePermissionsResponse;
import org.openapis.openapi.models.operations.ModifySelfservicePermissionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ModifySelfservicePermissionsRequest;
import org.openapis.openapi.models.shared.ReconnectEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SelfservicePermissions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifySelfservicePermissionsRequest req = new ModifySelfservicePermissionsRequest(                new ModifySelfservicePermissionsRequest("accusantium",                 new SelfservicePermissions() {{
                                                changeComputeType = ReconnectEnumEnum.ENABLED;
                                                increaseVolumeSize = ReconnectEnumEnum.DISABLED;
                                                rebuildWorkspace = ReconnectEnumEnum.ENABLED;
                                                restartWorkspace = ReconnectEnumEnum.ENABLED;
                                                switchRunningMode = ReconnectEnumEnum.ENABLED;
                                            }};);, ModifySelfservicePermissionsXAmzTargetEnum.WORKSPACES_SERVICE_MODIFY_SELFSERVICE_PERMISSIONS) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "aut";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "ex";
            }};            

            ModifySelfservicePermissionsResponse res = sdk.sdk.modifySelfservicePermissions(req);

            if (res.modifySelfservicePermissionsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyWorkspaceAccessProperties

Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access"> Control Device Access</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyWorkspaceAccessPropertiesRequest;
import org.openapis.openapi.models.operations.ModifyWorkspaceAccessPropertiesResponse;
import org.openapis.openapi.models.operations.ModifyWorkspaceAccessPropertiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessPropertyValueEnum;
import org.openapis.openapi.models.shared.ModifyWorkspaceAccessPropertiesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkspaceAccessProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyWorkspaceAccessPropertiesRequest req = new ModifyWorkspaceAccessPropertiesRequest(                new ModifyWorkspaceAccessPropertiesRequest("itaque",                 new WorkspaceAccessProperties() {{
                                                deviceTypeAndroid = AccessPropertyValueEnum.DENY;
                                                deviceTypeChromeOs = AccessPropertyValueEnum.ALLOW;
                                                deviceTypeIos = AccessPropertyValueEnum.DENY;
                                                deviceTypeLinux = AccessPropertyValueEnum.DENY;
                                                deviceTypeOsx = AccessPropertyValueEnum.ALLOW;
                                                deviceTypeWeb = AccessPropertyValueEnum.DENY;
                                                deviceTypeWindows = AccessPropertyValueEnum.ALLOW;
                                                deviceTypeZeroClient = AccessPropertyValueEnum.ALLOW;
                                            }};);, ModifyWorkspaceAccessPropertiesXAmzTargetEnum.WORKSPACES_SERVICE_MODIFY_WORKSPACE_ACCESS_PROPERTIES) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "minima";
                xAmzCredential = "veritatis";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "temporibus";
            }};            

            ModifyWorkspaceAccessPropertiesResponse res = sdk.sdk.modifyWorkspaceAccessProperties(req);

            if (res.modifyWorkspaceAccessPropertiesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyWorkspaceCreationProperties

Modify the default properties used to create WorkSpaces.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyWorkspaceCreationPropertiesRequest;
import org.openapis.openapi.models.operations.ModifyWorkspaceCreationPropertiesResponse;
import org.openapis.openapi.models.operations.ModifyWorkspaceCreationPropertiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ModifyWorkspaceCreationPropertiesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkspaceCreationProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyWorkspaceCreationPropertiesRequest req = new ModifyWorkspaceCreationPropertiesRequest(                new ModifyWorkspaceCreationPropertiesRequest("rem",                 new WorkspaceCreationProperties() {{
                                                customSecurityGroupId = "aut";
                                                defaultOu = "laudantium";
                                                enableInternetAccess = false;
                                                enableMaintenanceMode = false;
                                                enableWorkDocs = false;
                                                userEnabledAsLocalAdministrator = false;
                                            }};);, ModifyWorkspaceCreationPropertiesXAmzTargetEnum.WORKSPACES_SERVICE_MODIFY_WORKSPACE_CREATION_PROPERTIES) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "ab";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "non";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "dolor";
            }};            

            ModifyWorkspaceCreationPropertiesResponse res = sdk.sdk.modifyWorkspaceCreationProperties(req);

            if (res.modifyWorkspaceCreationPropertiesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyWorkspaceProperties

<p>Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html"> Modify a WorkSpace</a>. </p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyWorkspacePropertiesRequest;
import org.openapis.openapi.models.operations.ModifyWorkspacePropertiesResponse;
import org.openapis.openapi.models.operations.ModifyWorkspacePropertiesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ComputeEnum;
import org.openapis.openapi.models.shared.ModifyWorkspacePropertiesRequest;
import org.openapis.openapi.models.shared.ProtocolEnum;
import org.openapis.openapi.models.shared.RunningModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WorkspaceProperties;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyWorkspacePropertiesRequest req = new ModifyWorkspacePropertiesRequest(                new ModifyWorkspacePropertiesRequest("numquam",                 new WorkspaceProperties() {{
                                                computeTypeName = ComputeEnum.GRAPHICSPRO;
                                                protocols = new org.openapis.openapi.models.shared.ProtocolEnum[]{{
                                                    add(ProtocolEnum.PCOIP),
                                                }};
                                                rootVolumeSizeGib = 12036L;
                                                runningMode = RunningModeEnum.ALWAYS_ON;
                                                runningModeAutoStopTimeoutInMinutes = 115484L;
                                                userVolumeSizeGib = 981640L;
                                            }};);, ModifyWorkspacePropertiesXAmzTargetEnum.WORKSPACES_SERVICE_MODIFY_WORKSPACE_PROPERTIES) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "velit";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "ea";
            }};            

            ModifyWorkspacePropertiesResponse res = sdk.sdk.modifyWorkspaceProperties(req);

            if (res.modifyWorkspacePropertiesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifyWorkspaceState

<p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifyWorkspaceStateRequest;
import org.openapis.openapi.models.operations.ModifyWorkspaceStateResponse;
import org.openapis.openapi.models.operations.ModifyWorkspaceStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.ModifyWorkspaceStateRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetWorkspaceStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ModifyWorkspaceStateRequest req = new ModifyWorkspaceStateRequest(                new ModifyWorkspaceStateRequest("consequuntur", TargetWorkspaceStateEnum.ADMIN_MAINTENANCE);, ModifyWorkspaceStateXAmzTargetEnum.WORKSPACES_SERVICE_MODIFY_WORKSPACE_STATE) {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "dignissimos";
                xAmzDate = "officia";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quae";
            }};            

            ModifyWorkspaceStateResponse res = sdk.sdk.modifyWorkspaceState(req);

            if (res.modifyWorkspaceStateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rebootWorkspaces

<p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RebootWorkspacesRequest;
import org.openapis.openapi.models.operations.RebootWorkspacesResponse;
import org.openapis.openapi.models.operations.RebootWorkspacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.RebootRequest;
import org.openapis.openapi.models.shared.RebootWorkspacesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RebootWorkspacesRequest req = new RebootWorkspacesRequest(                new RebootWorkspacesRequest(                new org.openapis.openapi.models.shared.RebootRequest[]{{
                                                add(new RebootRequest("labore") {{
                                                    workspaceId = "quod";
                                                }}),
                                                add(new RebootRequest("adipisci") {{
                                                    workspaceId = "ab";
                                                }}),
                                                add(new RebootRequest("id") {{
                                                    workspaceId = "fuga";
                                                }}),
                                                add(new RebootRequest("velit") {{
                                                    workspaceId = "suscipit";
                                                }}),
                                            }});, RebootWorkspacesXAmzTargetEnum.WORKSPACES_SERVICE_REBOOT_WORKSPACES) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "est";
                xAmzCredential = "recusandae";
                xAmzDate = "totam";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "ducimus";
            }};            

            RebootWorkspacesResponse res = sdk.sdk.rebootWorkspaces(req);

            if (res.rebootWorkspacesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rebuildWorkspaces

<p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RebuildWorkspacesRequest;
import org.openapis.openapi.models.operations.RebuildWorkspacesResponse;
import org.openapis.openapi.models.operations.RebuildWorkspacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.RebuildRequest;
import org.openapis.openapi.models.shared.RebuildWorkspacesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RebuildWorkspacesRequest req = new RebuildWorkspacesRequest(                new RebuildWorkspacesRequest(                new org.openapis.openapi.models.shared.RebuildRequest[]{{
                                                add(new RebuildRequest("possimus") {{
                                                    workspaceId = "labore";
                                                }}),
                                                add(new RebuildRequest("cum") {{
                                                    workspaceId = "facilis";
                                                }}),
                                            }});, RebuildWorkspacesXAmzTargetEnum.WORKSPACES_SERVICE_REBUILD_WORKSPACES) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "in";
                xAmzCredential = "corporis";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "recusandae";
            }};            

            RebuildWorkspacesResponse res = sdk.sdk.rebuildWorkspaces(req);

            if (res.rebuildWorkspacesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerWorkspaceDirectory

Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role"> Creating the workspaces_DefaultRole Role</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterWorkspaceDirectoryRequest;
import org.openapis.openapi.models.operations.RegisterWorkspaceDirectoryResponse;
import org.openapis.openapi.models.operations.RegisterWorkspaceDirectoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.RegisterWorkspaceDirectoryRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TenancyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RegisterWorkspaceDirectoryRequest req = new RegisterWorkspaceDirectoryRequest(                new RegisterWorkspaceDirectoryRequest("aperiam", false) {{
                                enableSelfService = false;
                                subnetIds = new String[]{{
                                    add("consectetur"),
                                    add("in"),
                                    add("exercitationem"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("doloribus") {{
                                        key = "facere";
                                        value = "numquam";
                                    }}),
                                    add(new Tag("quidem") {{
                                        key = "suscipit";
                                        value = "reiciendis";
                                    }}),
                                    add(new Tag("dolore") {{
                                        key = "saepe";
                                        value = "necessitatibus";
                                    }}),
                                    add(new Tag("adipisci") {{
                                        key = "sunt";
                                        value = "asperiores";
                                    }}),
                                }};
                                tenancy = TenancyEnum.DEDICATED;
                            }};, RegisterWorkspaceDirectoryXAmzTargetEnum.WORKSPACES_SERVICE_REGISTER_WORKSPACE_DIRECTORY) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "dignissimos";
                xAmzDate = "a";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "corporis";
            }};            

            RegisterWorkspaceDirectoryResponse res = sdk.sdk.registerWorkspaceDirectory(req);

            if (res.registerWorkspaceDirectoryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreWorkspace

<p>Restores the specified WorkSpace to its last known healthy state.</p> <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpace is completely restored.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreWorkspaceRequest;
import org.openapis.openapi.models.operations.RestoreWorkspaceResponse;
import org.openapis.openapi.models.operations.RestoreWorkspaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.RestoreWorkspaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreWorkspaceRequest req = new RestoreWorkspaceRequest(                new RestoreWorkspaceRequest("laboriosam");, RestoreWorkspaceXAmzTargetEnum.WORKSPACES_SERVICE_RESTORE_WORKSPACE) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "libero";
                xAmzDate = "vitae";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "tempora";
            }};            

            RestoreWorkspaceResponse res = sdk.sdk.restoreWorkspace(req);

            if (res.restoreWorkspaceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## revokeIpRules

Removes one or more rules from the specified IP access control group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevokeIpRulesRequest;
import org.openapis.openapi.models.operations.RevokeIpRulesResponse;
import org.openapis.openapi.models.operations.RevokeIpRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.RevokeIpRulesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RevokeIpRulesRequest req = new RevokeIpRulesRequest(                new RevokeIpRulesRequest("voluptas",                 new String[]{{
                                                add("voluptas"),
                                                add("minima"),
                                            }});, RevokeIpRulesXAmzTargetEnum.WORKSPACES_SERVICE_REVOKE_IP_RULES) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "adipisci";
                xAmzDate = "minus";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "in";
            }};            

            RevokeIpRulesResponse res = sdk.sdk.revokeIpRules(req);

            if (res.revokeIpRulesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startWorkspaces

<p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartWorkspacesRequest;
import org.openapis.openapi.models.operations.StartWorkspacesResponse;
import org.openapis.openapi.models.operations.StartWorkspacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartRequest;
import org.openapis.openapi.models.shared.StartWorkspacesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartWorkspacesRequest req = new StartWorkspacesRequest(                new StartWorkspacesRequest(                new org.openapis.openapi.models.shared.StartRequest[]{{
                                                add(new StartRequest() {{
                                                    workspaceId = "officiis";
                                                }}),
                                                add(new StartRequest() {{
                                                    workspaceId = "temporibus";
                                                }}),
                                            }});, StartWorkspacesXAmzTargetEnum.WORKSPACES_SERVICE_START_WORKSPACES) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "cum";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "quas";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "nesciunt";
            }};            

            StartWorkspacesResponse res = sdk.sdk.startWorkspaces(req);

            if (res.startWorkspacesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopWorkspaces

<p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopWorkspacesRequest;
import org.openapis.openapi.models.operations.StopWorkspacesResponse;
import org.openapis.openapi.models.operations.StopWorkspacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopRequest;
import org.openapis.openapi.models.shared.StopWorkspacesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopWorkspacesRequest req = new StopWorkspacesRequest(                new StopWorkspacesRequest(                new org.openapis.openapi.models.shared.StopRequest[]{{
                                                add(new StopRequest() {{
                                                    workspaceId = "pariatur";
                                                }}),
                                                add(new StopRequest() {{
                                                    workspaceId = "totam";
                                                }}),
                                                add(new StopRequest() {{
                                                    workspaceId = "hic";
                                                }}),
                                            }});, StopWorkspacesXAmzTargetEnum.WORKSPACES_SERVICE_STOP_WORKSPACES) {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "sit";
                xAmzDate = "rerum";
                xAmzSecurityToken = "sed";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "explicabo";
            }};            

            StopWorkspacesResponse res = sdk.sdk.stopWorkspaces(req);

            if (res.stopWorkspacesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## terminateWorkspaces

<p>Terminates the specified WorkSpaces.</p> <important> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services Support before terminating the WorkSpace.</p> </important> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html"> DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TerminateWorkspacesRequest;
import org.openapis.openapi.models.operations.TerminateWorkspacesResponse;
import org.openapis.openapi.models.operations.TerminateWorkspacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TerminateRequest;
import org.openapis.openapi.models.shared.TerminateWorkspacesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TerminateWorkspacesRequest req = new TerminateWorkspacesRequest(                new TerminateWorkspacesRequest(                new org.openapis.openapi.models.shared.TerminateRequest[]{{
                                                add(new TerminateRequest("expedita") {{
                                                    workspaceId = "voluptate";
                                                }}),
                                                add(new TerminateRequest("iste") {{
                                                    workspaceId = "ab";
                                                }}),
                                                add(new TerminateRequest("laborum") {{
                                                    workspaceId = "dolore";
                                                }}),
                                            }});, TerminateWorkspacesXAmzTargetEnum.WORKSPACES_SERVICE_TERMINATE_WORKSPACES) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "in";
                xAmzCredential = "commodi";
                xAmzDate = "quidem";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "unde";
            }};            

            TerminateWorkspacesResponse res = sdk.sdk.terminateWorkspaces(req);

            if (res.terminateWorkspacesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnectClientAddIn

Updates a Amazon Connect client add-in. Use this action to update the name and endpoint URL of a Amazon Connect client add-in.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectClientAddInRequest;
import org.openapis.openapi.models.operations.UpdateConnectClientAddInResponse;
import org.openapis.openapi.models.operations.UpdateConnectClientAddInXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConnectClientAddInRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConnectClientAddInRequest req = new UpdateConnectClientAddInRequest(                new UpdateConnectClientAddInRequest("suscipit", "sapiente") {{
                                name = "Ms. Gregory Wisoky";
                                url = "incidunt";
                            }};, UpdateConnectClientAddInXAmzTargetEnum.WORKSPACES_SERVICE_UPDATE_CONNECT_CLIENT_ADD_IN) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "provident";
                xAmzCredential = "eius";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "occaecati";
            }};            

            UpdateConnectClientAddInResponse res = sdk.sdk.updateConnectClientAddIn(req);

            if (res.updateConnectClientAddInResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnectionAliasPermission

<p>Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <ul> <li> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </li> <li> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectionAliasPermissionRequest;
import org.openapis.openapi.models.operations.UpdateConnectionAliasPermissionResponse;
import org.openapis.openapi.models.operations.UpdateConnectionAliasPermissionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConnectionAliasPermission;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConnectionAliasPermissionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConnectionAliasPermissionRequest req = new UpdateConnectionAliasPermissionRequest(                new UpdateConnectionAliasPermissionRequest("voluptatibus",                 new ConnectionAliasPermission(false, "tempora"););, UpdateConnectionAliasPermissionXAmzTargetEnum.WORKSPACES_SERVICE_UPDATE_CONNECTION_ALIAS_PERMISSION) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "reiciendis";
                xAmzDate = "ex";
                xAmzSecurityToken = "sit";
                xAmzSignature = "non";
                xAmzSignedHeaders = "officiis";
            }};            

            UpdateConnectionAliasPermissionResponse res = sdk.sdk.updateConnectionAliasPermission(req);

            if (res.updateConnectionAliasPermissionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRulesOfIpGroup

Replaces the current rules of the specified IP access control group with the specified rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRulesOfIpGroupRequest;
import org.openapis.openapi.models.operations.UpdateRulesOfIpGroupResponse;
import org.openapis.openapi.models.operations.UpdateRulesOfIpGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.IpRuleItem;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRulesOfIpGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRulesOfIpGroupRequest req = new UpdateRulesOfIpGroupRequest(                new UpdateRulesOfIpGroupRequest("facilis",                 new org.openapis.openapi.models.shared.IpRuleItem[]{{
                                                add(new IpRuleItem() {{
                                                    ipRule = "incidunt";
                                                    ruleDesc = "ipsam";
                                                }}),
                                                add(new IpRuleItem() {{
                                                    ipRule = "debitis";
                                                    ruleDesc = "rem";
                                                }}),
                                            }});, UpdateRulesOfIpGroupXAmzTargetEnum.WORKSPACES_SERVICE_UPDATE_RULES_OF_IP_GROUP) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "error";
                xAmzDate = "veniam";
                xAmzSecurityToken = "minima";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "reiciendis";
            }};            

            UpdateRulesOfIpGroupResponse res = sdk.sdk.updateRulesOfIpGroup(req);

            if (res.updateRulesOfIpGroupResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkspaceBundle

<p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html"> Update a Custom WorkSpaces Bundle</a>.</p> <important> <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkspaceBundleRequest;
import org.openapis.openapi.models.operations.UpdateWorkspaceBundleResponse;
import org.openapis.openapi.models.operations.UpdateWorkspaceBundleXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateWorkspaceBundleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkspaceBundleRequest req = new UpdateWorkspaceBundleRequest(                new UpdateWorkspaceBundleRequest() {{
                                bundleId = "magni";
                                imageId = "aperiam";
                            }};, UpdateWorkspaceBundleXAmzTargetEnum.WORKSPACES_SERVICE_UPDATE_WORKSPACE_BUNDLE) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veniam";
                xAmzDate = "in";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "laudantium";
            }};            

            UpdateWorkspaceBundleResponse res = sdk.sdk.updateWorkspaceBundle(req);

            if (res.updateWorkspaceBundleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkspaceImagePermission

<p>Shares or unshares an image with one account in the same Amazon Web Services Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.</p> <p>After an image has been shared, the recipient account can copy the image to other Regions as needed.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <p>For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.</p> <note> <ul> <li> <p>To delete an image that has been shared, you must unshare the image before you delete it.</p> </li> <li> <p>Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkspaceImagePermissionRequest;
import org.openapis.openapi.models.operations.UpdateWorkspaceImagePermissionResponse;
import org.openapis.openapi.models.operations.UpdateWorkspaceImagePermissionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateWorkspaceImagePermissionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkspaceImagePermissionRequest req = new UpdateWorkspaceImagePermissionRequest(                new UpdateWorkspaceImagePermissionRequest(false, "praesentium", "cum");, UpdateWorkspaceImagePermissionXAmzTargetEnum.WORKSPACES_SERVICE_UPDATE_WORKSPACE_IMAGE_PERMISSION) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "voluptatum";
                xAmzDate = "error";
                xAmzSecurityToken = "hic";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "debitis";
            }};            

            UpdateWorkspaceImagePermissionResponse res = sdk.sdk.updateWorkspaceImagePermission(req);

            if (res.updateWorkspaceImagePermissionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
