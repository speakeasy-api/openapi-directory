# SDK

## Overview

<fullname>Amazon WorkSpaces Service</fullname> <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows or Amazon Linux desktops for your users, known as <i>WorkSpaces</i>. WorkSpaces eliminates the need to procure and deploy hardware or install complex software. You can quickly add or remove users as your needs change. Users can access their virtual desktops from multiple devices or web browsers.</p> <p>This API Reference provides detailed information about the actions, data types, parameters, and errors of the WorkSpaces service. For more information about the supported Amazon Web Services Regions, endpoints, and service quotas of the Amazon WorkSpaces service, see <a href="https://docs.aws.amazon.com/general/latest/gr/wsp.html">WorkSpaces endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>You can also manage your WorkSpaces resources using the WorkSpaces console, Command Line Interface (CLI), and SDKs. For more information about administering WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/">Amazon WorkSpaces Administration Guide</a>. For more information about using the Amazon WorkSpaces client application or web browser to access provisioned WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/userguide/">Amazon WorkSpaces User Guide</a>. For more information about using the CLI to manage your WorkSpaces resources, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/workspaces/index.html">WorkSpaces section of the CLI Reference</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/workspaces/>
### Available Operations

* [AssociateConnectionAlias](#associateconnectionalias) - <p>Associates the specified connection alias with the specified directory to enable cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>
* [AssociateIPGroups](#associateipgroups) - Associates the specified IP access control group with the specified directory.
* [AuthorizeIPRules](#authorizeiprules) - <p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>
* [CopyWorkspaceImage](#copyworkspaceimage) - <p>Copies the specified image from the specified Region to the current Region. For more information about copying images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html"> Copy a Custom WorkSpaces Image</a>.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <important> <p>Before copying a shared image, be sure to verify that it has been shared from the correct Amazon Web Services account. To determine if an image has been shared and to see the ID of the Amazon Web Services account that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p> </important>
* [CreateConnectClientAddIn](#createconnectclientaddin) - <p>Creates a client-add-in for Amazon Connect within a directory. You can create only one Amazon Connect client add-in within a directory.</p> <p>This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.</p>
* [CreateConnectionAlias](#createconnectionalias) - Creates the specified connection alias for use with cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
* [CreateIPGroup](#createipgroup) - <p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>
* [CreateStandbyWorkspaces](#createstandbyworkspaces) - Creates a standby WorkSpace in a secondary Region.
* [CreateTags](#createtags) - Creates the specified tags for the specified WorkSpaces resource.
* [CreateUpdatedWorkspaceImage](#createupdatedworkspaceimage) - <p>Creates a new updated WorkSpace image based on the specified source image. The new updated WorkSpace image has the latest drivers and other updates required by the Amazon WorkSpaces components.</p> <p>To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces requirements, use <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html"> DescribeWorkspaceImages</a>.</p> <note> <ul> <li> <p>Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images can be programmatically updated at this time.</p> </li> <li> <p>Microsoft Windows updates and other application updates are not included in the update process.</p> </li> <li> <p>The source WorkSpace image is not deleted. You can delete the source image after you've verified your new updated image and created a new bundle. </p> </li> </ul> </note>
* [CreateWorkspaceBundle](#createworkspacebundle) - Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html"> Create a Custom WorkSpaces Image and Bundle</a>.
* [CreateWorkspaceImage](#createworkspaceimage) - Creates a new WorkSpace image from an existing WorkSpace.
* [CreateWorkspaces](#createworkspaces) - <p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>
* [DeleteClientBranding](#deleteclientbranding) - <p>Deletes customized client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you delete your customized client branding, your login portal reverts to the default client branding.</p>
* [DeleteConnectClientAddIn](#deleteconnectclientaddin) - Deletes a client-add-in for Amazon Connect that is configured within a directory.
* [DeleteConnectionAlias](#deleteconnectionalias) - <p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <important> <p> <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b> For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p> </important> <note> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </note>
* [DeleteIPGroup](#deleteipgroup) - <p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>
* [DeleteTags](#deletetags) - Deletes the specified tags from the specified WorkSpaces resource.
* [DeleteWorkspaceBundle](#deleteworkspacebundle) - Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html"> Delete a Custom WorkSpaces Bundle or Image</a>.
* [DeleteWorkspaceImage](#deleteworkspaceimage) - Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts. 
* [DeregisterWorkspaceDirectory](#deregisterworkspacedirectory) - <p>Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>
* [DescribeAccount](#describeaccount) - Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.
* [DescribeAccountModifications](#describeaccountmodifications) - Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.
* [DescribeClientBranding](#describeclientbranding) - <p>Describes the specified client branding. Client branding allows you to customize the log in page of various device types for your users. You can add your company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <note> <p>Only device types that have branding information configured will be shown in the response.</p> </note>
* [DescribeClientProperties](#describeclientproperties) - Retrieves a list that describes one or more specified Amazon WorkSpaces clients.
* [DescribeConnectClientAddIns](#describeconnectclientaddins) - Retrieves a list of Amazon Connect client add-ins that have been created.
* [DescribeConnectionAliasPermissions](#describeconnectionaliaspermissions) - Describes the permissions that the owner of a connection alias has granted to another Amazon Web Services account for the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
* [DescribeConnectionAliases](#describeconnectionaliases) - Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
* [DescribeIPGroups](#describeipgroups) - Describes one or more of your IP access control groups.
* [DescribeTags](#describetags) - Describes the specified tags for the specified WorkSpaces resource.
* [DescribeWorkspaceBundles](#describeworkspacebundles) - <p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>
* [DescribeWorkspaceDirectories](#describeworkspacedirectories) - Describes the available directories that are registered with Amazon WorkSpaces.
* [DescribeWorkspaceImagePermissions](#describeworkspaceimagepermissions) - Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.
* [DescribeWorkspaceImages](#describeworkspaceimages) - Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described. 
* [DescribeWorkspaceSnapshots](#describeworkspacesnapshots) - Describes the snapshots for the specified WorkSpace.
* [DescribeWorkspaces](#describeworkspaces) - <p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>
* [DescribeWorkspacesConnectionStatus](#describeworkspacesconnectionstatus) - Describes the connection status of the specified WorkSpaces.
* [DisassociateConnectionAlias](#disassociateconnectionalias) - <p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different Regions. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>
* [DisassociateIPGroups](#disassociateipgroups) - Disassociates the specified IP access control group from the specified directory.
* [ImportClientBranding](#importclientbranding) - <p>Imports client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you import client branding, the default branding experience for the specified platform type is replaced with the imported experience</p> <note> <ul> <li> <p>You must specify at least one platform type when importing client branding.</p> </li> <li> <p>You can import up to 6 MB of data with each request. If your request exceeds this limit, you can import client branding for different platform types using separate requests.</p> </li> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify only one parameter for each platform type, but not both.</p> </li> <li> <p>Imported data can take up to a minute to appear in the WorkSpaces client.</p> </li> </ul> </note>
* [ImportWorkspaceImage](#importworkspaceimage) - Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows Desktop Licenses</a>.
* [ListAvailableManagementCidrRanges](#listavailablemanagementcidrranges) - <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>This operation can be run only by Amazon Web Services accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
* [MigrateWorkspace](#migrateworkspace) - <p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p> <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code> user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code> folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p> <p>For available migration scenarios, details about what happens during migration, and best practices, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>
* [ModifyAccount](#modifyaccount) - Modifies the configuration of Bring Your Own License (BYOL) for the specified account.
* [ModifyCertificateBasedAuthProperties](#modifycertificatebasedauthproperties) - Modifies the properties of the certificate-based authentication you want to use with your WorkSpaces.
* [ModifyClientProperties](#modifyclientproperties) - Modifies the properties of the specified Amazon WorkSpaces clients.
* [ModifySamlProperties](#modifysamlproperties) - Modifies multiple properties related to SAML 2.0 authentication, including the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.
* [ModifySelfservicePermissions](#modifyselfservicepermissions) - Modifies the self-service WorkSpace management capabilities for your users. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
* [ModifyWorkspaceAccessProperties](#modifyworkspaceaccessproperties) - Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access"> Control Device Access</a>.
* [ModifyWorkspaceCreationProperties](#modifyworkspacecreationproperties) - Modify the default properties used to create WorkSpaces.
* [ModifyWorkspaceProperties](#modifyworkspaceproperties) - <p>Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html"> Modify a WorkSpace</a>. </p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>
* [ModifyWorkspaceState](#modifyworkspacestate) - <p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>
* [RebootWorkspaces](#rebootworkspaces) - <p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
* [RebuildWorkspaces](#rebuildworkspaces) - <p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>
* [RegisterWorkspaceDirectory](#registerworkspacedirectory) - Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role"> Creating the workspaces_DefaultRole Role</a>.
* [RestoreWorkspace](#restoreworkspace) - <p>Restores the specified WorkSpace to its last known healthy state.</p> <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpace is completely restored.</p>
* [RevokeIPRules](#revokeiprules) - Removes one or more rules from the specified IP access control group.
* [StartWorkspaces](#startworkspaces) - <p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>
* [StopWorkspaces](#stopworkspaces) - <p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>
* [TerminateWorkspaces](#terminateworkspaces) - <p>Terminates the specified WorkSpaces.</p> <important> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services Support before terminating the WorkSpace.</p> </important> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html"> DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>
* [UpdateConnectClientAddIn](#updateconnectclientaddin) - Updates a Amazon Connect client add-in. Use this action to update the name and endpoint URL of a Amazon Connect client add-in.
* [UpdateConnectionAliasPermission](#updateconnectionaliaspermission) - <p>Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <ul> <li> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </li> <li> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </li> </ul> </note>
* [UpdateRulesOfIPGroup](#updaterulesofipgroup) - Replaces the current rules of the specified IP access control group with the specified rules.
* [UpdateWorkspaceBundle](#updateworkspacebundle) - <p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html"> Update a Custom WorkSpaces Bundle</a>.</p> <important> <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.</p> </important>
* [UpdateWorkspaceImagePermission](#updateworkspaceimagepermission) - <p>Shares or unshares an image with one account in the same Amazon Web Services Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.</p> <p>After an image has been shared, the recipient account can copy the image to other Regions as needed.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <p>For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.</p> <note> <ul> <li> <p>To delete an image that has been shared, you must unshare the image before you delete it.</p> </li> <li> <p>Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.</p> </li> </ul> </note>

## AssociateConnectionAlias

<p>Associates the specified connection alias with the specified directory to enable cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>

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
    res, err := s.SDK.AssociateConnectionAlias(ctx, operations.AssociateConnectionAliasRequest{
        AssociateConnectionAliasRequest: shared.AssociateConnectionAliasRequest{
            AliasID: "error",
            ResourceID: "deserunt",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.AssociateConnectionAliasXAmzTargetEnumWorkspacesServiceAssociateConnectionAlias,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateConnectionAliasResult != nil {
        // handle response
    }
}
```

## AssociateIPGroups

Associates the specified IP access control group with the specified directory.

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
    res, err := s.SDK.AssociateIPGroups(ctx, operations.AssociateIPGroupsRequest{
        AssociateIPGroupsRequest: shared.AssociateIPGroupsRequest{
            DirectoryID: "suscipit",
            GroupIds: []string{
                "minus",
                "placeat",
            },
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.AssociateIPGroupsXAmzTargetEnumWorkspacesServiceAssociateIPGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateIPGroupsResult != nil {
        // handle response
    }
}
```

## AuthorizeIPRules

<p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>

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
    res, err := s.SDK.AuthorizeIPRules(ctx, operations.AuthorizeIPRulesRequest{
        AuthorizeIPRulesRequest: shared.AuthorizeIPRulesRequest{
            GroupID: "quis",
            UserRules: []shared.IPRuleItem{
                shared.IPRuleItem{
                    IPRule: sdk.String("deserunt"),
                    RuleDesc: sdk.String("perferendis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.AuthorizeIPRulesXAmzTargetEnumWorkspacesServiceAuthorizeIPRules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizeIPRulesResult != nil {
        // handle response
    }
}
```

## CopyWorkspaceImage

<p>Copies the specified image from the specified Region to the current Region. For more information about copying images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html"> Copy a Custom WorkSpaces Image</a>.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <important> <p>Before copying a shared image, be sure to verify that it has been shared from the correct Amazon Web Services account. To determine if an image has been shared and to see the ID of the Amazon Web Services account that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p> </important>

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
    res, err := s.SDK.CopyWorkspaceImage(ctx, operations.CopyWorkspaceImageRequest{
        CopyWorkspaceImageRequest: shared.CopyWorkspaceImageRequest{
            Description: sdk.String("maiores"),
            Name: "Bernadette Schmidt",
            SourceImageID: "porro",
            SourceRegion: "dolorum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nam",
                    Value: sdk.String("officia"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("beatae"),
        XAmzTarget: operations.CopyWorkspaceImageXAmzTargetEnumWorkspacesServiceCopyWorkspaceImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CopyWorkspaceImageResult != nil {
        // handle response
    }
}
```

## CreateConnectClientAddIn

<p>Creates a client-add-in for Amazon Connect within a directory. You can create only one Amazon Connect client add-in within a directory.</p> <p>This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.</p>

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
    res, err := s.SDK.CreateConnectClientAddIn(ctx, operations.CreateConnectClientAddInRequest{
        CreateConnectClientAddInRequest: shared.CreateConnectClientAddInRequest{
            Name: "Tanya Gleason",
            ResourceID: "cum",
            URL: "esse",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.CreateConnectClientAddInXAmzTargetEnumWorkspacesServiceCreateConnectClientAddIn,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectClientAddInResult != nil {
        // handle response
    }
}
```

## CreateConnectionAlias

Creates the specified connection alias for use with cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

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
    res, err := s.SDK.CreateConnectionAlias(ctx, operations.CreateConnectionAliasRequest{
        CreateConnectionAliasRequest: shared.CreateConnectionAliasRequest{
            ConnectionString: "iste",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "natus",
                    Value: sdk.String("laboriosam"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.CreateConnectionAliasXAmzTargetEnumWorkspacesServiceCreateConnectionAlias,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectionAliasResult != nil {
        // handle response
    }
}
```

## CreateIPGroup

<p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>

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
    res, err := s.SDK.CreateIPGroup(ctx, operations.CreateIPGroupRequest{
        CreateIPGroupRequest: shared.CreateIPGroupRequest{
            GroupDesc: sdk.String("saepe"),
            GroupName: "quidem",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ipsa",
                    Value: sdk.String("reiciendis"),
                },
            },
            UserRules: []shared.IPRuleItem{
                shared.IPRuleItem{
                    IPRule: sdk.String("mollitia"),
                    RuleDesc: sdk.String("laborum"),
                },
                shared.IPRuleItem{
                    IPRule: sdk.String("dolores"),
                    RuleDesc: sdk.String("dolorem"),
                },
                shared.IPRuleItem{
                    IPRule: sdk.String("corporis"),
                    RuleDesc: sdk.String("explicabo"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.CreateIPGroupXAmzTargetEnumWorkspacesServiceCreateIPGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateIPGroupResult != nil {
        // handle response
    }
}
```

## CreateStandbyWorkspaces

Creates a standby WorkSpace in a secondary Region.

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
    res, err := s.SDK.CreateStandbyWorkspaces(ctx, operations.CreateStandbyWorkspacesRequest{
        CreateStandbyWorkspacesRequest: shared.CreateStandbyWorkspacesRequest{
            PrimaryRegion: "iure",
            StandbyWorkspaces: []shared.StandbyWorkspace{
                shared.StandbyWorkspace{
                    DirectoryID: "doloribus",
                    PrimaryWorkspaceID: "sapiente",
                    Tags: []shared.Tag{
                        shared.Tag{
                            Key: "mollitia",
                            Value: sdk.String("dolorem"),
                        },
                    },
                    VolumeEncryptionKey: sdk.String("culpa"),
                },
                shared.StandbyWorkspace{
                    DirectoryID: "consequuntur",
                    PrimaryWorkspaceID: "repellat",
                    Tags: []shared.Tag{
                        shared.Tag{
                            Key: "occaecati",
                            Value: sdk.String("numquam"),
                        },
                        shared.Tag{
                            Key: "commodi",
                            Value: sdk.String("quam"),
                        },
                        shared.Tag{
                            Key: "molestiae",
                            Value: sdk.String("velit"),
                        },
                    },
                    VolumeEncryptionKey: sdk.String("error"),
                },
                shared.StandbyWorkspace{
                    DirectoryID: "quia",
                    PrimaryWorkspaceID: "quis",
                    Tags: []shared.Tag{
                        shared.Tag{
                            Key: "laborum",
                            Value: sdk.String("animi"),
                        },
                    },
                    VolumeEncryptionKey: sdk.String("enim"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("possimus"),
        XAmzTarget: operations.CreateStandbyWorkspacesXAmzTargetEnumWorkspacesServiceCreateStandbyWorkspaces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStandbyWorkspacesResult != nil {
        // handle response
    }
}
```

## CreateTags

Creates the specified tags for the specified WorkSpaces resource.

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
    res, err := s.SDK.CreateTags(ctx, operations.CreateTagsRequest{
        CreateTagsRequest: shared.CreateTagsRequest{
            ResourceID: "aut",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "error",
                    Value: sdk.String("temporibus"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.CreateTagsXAmzTargetEnumWorkspacesServiceCreateTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTagsResult != nil {
        // handle response
    }
}
```

## CreateUpdatedWorkspaceImage

<p>Creates a new updated WorkSpace image based on the specified source image. The new updated WorkSpace image has the latest drivers and other updates required by the Amazon WorkSpaces components.</p> <p>To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces requirements, use <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html"> DescribeWorkspaceImages</a>.</p> <note> <ul> <li> <p>Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images can be programmatically updated at this time.</p> </li> <li> <p>Microsoft Windows updates and other application updates are not included in the update process.</p> </li> <li> <p>The source WorkSpace image is not deleted. You can delete the source image after you've verified your new updated image and created a new bundle. </p> </li> </ul> </note>

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
    res, err := s.SDK.CreateUpdatedWorkspaceImage(ctx, operations.CreateUpdatedWorkspaceImageRequest{
        CreateUpdatedWorkspaceImageRequest: shared.CreateUpdatedWorkspaceImageRequest{
            Description: "voluptatibus",
            Name: "Geneva Klein Jr.",
            SourceImageID: "reprehenderit",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "maiores",
                    Value: sdk.String("dicta"),
                },
                shared.Tag{
                    Key: "corporis",
                    Value: sdk.String("dolore"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.CreateUpdatedWorkspaceImageXAmzTargetEnumWorkspacesServiceCreateUpdatedWorkspaceImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUpdatedWorkspaceImageResult != nil {
        // handle response
    }
}
```

## CreateWorkspaceBundle

Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html"> Create a Custom WorkSpaces Image and Bundle</a>.

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
    res, err := s.SDK.CreateWorkspaceBundle(ctx, operations.CreateWorkspaceBundleRequest{
        CreateWorkspaceBundleRequest: shared.CreateWorkspaceBundleRequest{
            BundleDescription: "quae",
            BundleName: "ipsum",
            ComputeType: shared.ComputeType{
                Name: shared.ComputeEnumGraphicspro.ToPointer(),
            },
            ImageID: "molestias",
            RootStorage: &shared.RootStorage{
                Capacity: sdk.String("excepturi"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "modi",
                    Value: sdk.String("praesentium"),
                },
                shared.Tag{
                    Key: "rem",
                    Value: sdk.String("voluptates"),
                },
                shared.Tag{
                    Key: "quasi",
                    Value: sdk.String("repudiandae"),
                },
                shared.Tag{
                    Key: "sint",
                    Value: sdk.String("veritatis"),
                },
            },
            UserStorage: shared.UserStorage{
                Capacity: sdk.String("itaque"),
            },
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.CreateWorkspaceBundleXAmzTargetEnumWorkspacesServiceCreateWorkspaceBundle,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkspaceBundleResult != nil {
        // handle response
    }
}
```

## CreateWorkspaceImage

Creates a new WorkSpace image from an existing WorkSpace.

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
    res, err := s.SDK.CreateWorkspaceImage(ctx, operations.CreateWorkspaceImageRequest{
        CreateWorkspaceImageRequest: shared.CreateWorkspaceImageRequest{
            Description: "distinctio",
            Name: "Francisco Gleason",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quos",
                    Value: sdk.String("perferendis"),
                },
                shared.Tag{
                    Key: "magni",
                    Value: sdk.String("assumenda"),
                },
                shared.Tag{
                    Key: "ipsam",
                    Value: sdk.String("alias"),
                },
            },
            WorkspaceID: "fugit",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.CreateWorkspaceImageXAmzTargetEnumWorkspacesServiceCreateWorkspaceImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkspaceImageResult != nil {
        // handle response
    }
}
```

## CreateWorkspaces

<p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>

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
    res, err := s.SDK.CreateWorkspaces(ctx, operations.CreateWorkspacesRequest{
        CreateWorkspacesRequest: shared.CreateWorkspacesRequest{
            Workspaces: []shared.WorkspaceRequest{
                shared.WorkspaceRequest{
                    BundleID: "non",
                    DirectoryID: "eligendi",
                    RootVolumeEncryptionEnabled: sdk.Bool(false),
                    Tags: []shared.Tag{
                        shared.Tag{
                            Key: "aliquid",
                            Value: sdk.String("provident"),
                        },
                        shared.Tag{
                            Key: "necessitatibus",
                            Value: sdk.String("sint"),
                        },
                        shared.Tag{
                            Key: "officia",
                            Value: sdk.String("dolor"),
                        },
                    },
                    UserName: "Sim.Wilderman44",
                    UserVolumeEncryptionEnabled: sdk.Bool(false),
                    VolumeEncryptionKey: sdk.String("illum"),
                    WorkspaceProperties: &shared.WorkspaceProperties{
                        ComputeTypeName: shared.ComputeEnumGraphicsproG4Dn.ToPointer(),
                        Protocols: []shared.ProtocolEnum{
                            shared.ProtocolEnumPcoip,
                            shared.ProtocolEnumPcoip,
                            shared.ProtocolEnumWsp,
                        },
                        RootVolumeSizeGib: sdk.Int64(813798),
                        RunningMode: shared.RunningModeEnumAlwaysOn.ToPointer(),
                        RunningModeAutoStopTimeoutInMinutes: sdk.Int64(396506),
                        UserVolumeSizeGib: sdk.Int64(675439),
                    },
                },
                shared.WorkspaceRequest{
                    BundleID: "accusamus",
                    DirectoryID: "non",
                    RootVolumeEncryptionEnabled: sdk.Bool(false),
                    Tags: []shared.Tag{
                        shared.Tag{
                            Key: "enim",
                            Value: sdk.String("accusamus"),
                        },
                        shared.Tag{
                            Key: "delectus",
                            Value: sdk.String("quidem"),
                        },
                        shared.Tag{
                            Key: "provident",
                            Value: sdk.String("nam"),
                        },
                    },
                    UserName: "Magdalena_Kuvalis",
                    UserVolumeEncryptionEnabled: sdk.Bool(false),
                    VolumeEncryptionKey: sdk.String("amet"),
                    WorkspaceProperties: &shared.WorkspaceProperties{
                        ComputeTypeName: shared.ComputeEnumPowerpro.ToPointer(),
                        Protocols: []shared.ProtocolEnum{
                            shared.ProtocolEnumPcoip,
                            shared.ProtocolEnumWsp,
                        },
                        RootVolumeSizeGib: sdk.Int64(606393),
                        RunningMode: shared.RunningModeEnumAlwaysOn.ToPointer(),
                        RunningModeAutoStopTimeoutInMinutes: sdk.Int64(19193),
                        UserVolumeSizeGib: sdk.Int64(470132),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.CreateWorkspacesXAmzTargetEnumWorkspacesServiceCreateWorkspaces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkspacesResult != nil {
        // handle response
    }
}
```

## DeleteClientBranding

<p>Deletes customized client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you delete your customized client branding, your login portal reverts to the default client branding.</p>

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
    res, err := s.SDK.DeleteClientBranding(ctx, operations.DeleteClientBrandingRequest{
        DeleteClientBrandingRequest: shared.DeleteClientBrandingRequest{
            Platforms: []shared.ClientDeviceTypeEnum{
                shared.ClientDeviceTypeEnumDeviceTypeAndroid,
                shared.ClientDeviceTypeEnumDeviceTypeWeb,
                shared.ClientDeviceTypeEnumDeviceTypeWindows,
            },
            ResourceID: "architecto",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.DeleteClientBrandingXAmzTargetEnumWorkspacesServiceDeleteClientBranding,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteClientBrandingResult != nil {
        // handle response
    }
}
```

## DeleteConnectClientAddIn

Deletes a client-add-in for Amazon Connect that is configured within a directory.

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
    res, err := s.SDK.DeleteConnectClientAddIn(ctx, operations.DeleteConnectClientAddInRequest{
        DeleteConnectClientAddInRequest: shared.DeleteConnectClientAddInRequest{
            AddInID: "accusantium",
            ResourceID: "mollitia",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.DeleteConnectClientAddInXAmzTargetEnumWorkspacesServiceDeleteConnectClientAddIn,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConnectClientAddInResult != nil {
        // handle response
    }
}
```

## DeleteConnectionAlias

<p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <important> <p> <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b> For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p> </important> <note> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </note>

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
    res, err := s.SDK.DeleteConnectionAlias(ctx, operations.DeleteConnectionAliasRequest{
        DeleteConnectionAliasRequest: shared.DeleteConnectionAliasRequest{
            AliasID: "nemo",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DeleteConnectionAliasXAmzTargetEnumWorkspacesServiceDeleteConnectionAlias,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteConnectionAliasResult != nil {
        // handle response
    }
}
```

## DeleteIPGroup

<p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>

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
    res, err := s.SDK.DeleteIPGroup(ctx, operations.DeleteIPGroupRequest{
        DeleteIPGroupRequest: shared.DeleteIPGroupRequest{
            GroupID: "facilis",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.DeleteIPGroupXAmzTargetEnumWorkspacesServiceDeleteIPGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteIPGroupResult != nil {
        // handle response
    }
}
```

## DeleteTags

Deletes the specified tags from the specified WorkSpaces resource.

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
    res, err := s.SDK.DeleteTags(ctx, operations.DeleteTagsRequest{
        DeleteTagsRequest: shared.DeleteTagsRequest{
            ResourceID: "repellat",
            TagKeys: []string{
                "sed",
                "saepe",
                "pariatur",
                "accusantium",
            },
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.DeleteTagsXAmzTargetEnumWorkspacesServiceDeleteTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTagsResult != nil {
        // handle response
    }
}
```

## DeleteWorkspaceBundle

Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html"> Delete a Custom WorkSpaces Bundle or Image</a>.

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
    res, err := s.SDK.DeleteWorkspaceBundle(ctx, operations.DeleteWorkspaceBundleRequest{
        DeleteWorkspaceBundleRequest: shared.DeleteWorkspaceBundleRequest{
            BundleID: sdk.String("pariatur"),
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.DeleteWorkspaceBundleXAmzTargetEnumWorkspacesServiceDeleteWorkspaceBundle,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkspaceBundleResult != nil {
        // handle response
    }
}
```

## DeleteWorkspaceImage

Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts. 

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
    res, err := s.SDK.DeleteWorkspaceImage(ctx, operations.DeleteWorkspaceImageRequest{
        DeleteWorkspaceImageRequest: shared.DeleteWorkspaceImageRequest{
            ImageID: "maiores",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.DeleteWorkspaceImageXAmzTargetEnumWorkspacesServiceDeleteWorkspaceImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkspaceImageResult != nil {
        // handle response
    }
}
```

## DeregisterWorkspaceDirectory

<p>Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>

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
    res, err := s.SDK.DeregisterWorkspaceDirectory(ctx, operations.DeregisterWorkspaceDirectoryRequest{
        DeregisterWorkspaceDirectoryRequest: shared.DeregisterWorkspaceDirectoryRequest{
            DirectoryID: "nemo",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.DeregisterWorkspaceDirectoryXAmzTargetEnumWorkspacesServiceDeregisterWorkspaceDirectory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeregisterWorkspaceDirectoryResult != nil {
        // handle response
    }
}
```

## DescribeAccount

Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.

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
    res, err := s.SDK.DescribeAccount(ctx, operations.DescribeAccountRequest{
        RequestBody: map[string]interface{}{
            "libero": "nobis",
            "dolores": "quis",
            "totam": "dignissimos",
            "eaque": "quis",
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.DescribeAccountXAmzTargetEnumWorkspacesServiceDescribeAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccountResult != nil {
        // handle response
    }
}
```

## DescribeAccountModifications

Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.

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
    res, err := s.SDK.DescribeAccountModifications(ctx, operations.DescribeAccountModificationsRequest{
        DescribeAccountModificationsRequest: shared.DescribeAccountModificationsRequest{
            NextToken: sdk.String("vero"),
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.DescribeAccountModificationsXAmzTargetEnumWorkspacesServiceDescribeAccountModifications,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccountModificationsResult != nil {
        // handle response
    }
}
```

## DescribeClientBranding

<p>Describes the specified client branding. Client branding allows you to customize the log in page of various device types for your users. You can add your company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <note> <p>Only device types that have branding information configured will be shown in the response.</p> </note>

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
    res, err := s.SDK.DescribeClientBranding(ctx, operations.DescribeClientBrandingRequest{
        DescribeClientBrandingRequest: shared.DescribeClientBrandingRequest{
            ResourceID: "porro",
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("blanditiis"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.DescribeClientBrandingXAmzTargetEnumWorkspacesServiceDescribeClientBranding,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeClientBrandingResult != nil {
        // handle response
    }
}
```

## DescribeClientProperties

Retrieves a list that describes one or more specified Amazon WorkSpaces clients.

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
    res, err := s.SDK.DescribeClientProperties(ctx, operations.DescribeClientPropertiesRequest{
        DescribeClientPropertiesRequest: shared.DescribeClientPropertiesRequest{
            ResourceIds: []string{
                "earum",
                "modi",
                "iste",
                "dolorum",
            },
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.DescribeClientPropertiesXAmzTargetEnumWorkspacesServiceDescribeClientProperties,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeClientPropertiesResult != nil {
        // handle response
    }
}
```

## DescribeConnectClientAddIns

Retrieves a list of Amazon Connect client add-ins that have been created.

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
    res, err := s.SDK.DescribeConnectClientAddIns(ctx, operations.DescribeConnectClientAddInsRequest{
        DescribeConnectClientAddInsRequest: shared.DescribeConnectClientAddInsRequest{
            MaxResults: sdk.Int64(554242),
            NextToken: sdk.String("aliquid"),
            ResourceID: "dolorem",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.DescribeConnectClientAddInsXAmzTargetEnumWorkspacesServiceDescribeConnectClientAddIns,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConnectClientAddInsResult != nil {
        // handle response
    }
}
```

## DescribeConnectionAliasPermissions

Describes the permissions that the owner of a connection alias has granted to another Amazon Web Services account for the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

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
    res, err := s.SDK.DescribeConnectionAliasPermissions(ctx, operations.DescribeConnectionAliasPermissionsRequest{
        DescribeConnectionAliasPermissionsRequest: shared.DescribeConnectionAliasPermissionsRequest{
            AliasID: "voluptate",
            MaxResults: sdk.Int64(490459),
            NextToken: sdk.String("reiciendis"),
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.DescribeConnectionAliasPermissionsXAmzTargetEnumWorkspacesServiceDescribeConnectionAliasPermissions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConnectionAliasPermissionsResult != nil {
        // handle response
    }
}
```

## DescribeConnectionAliases

Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.

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
    res, err := s.SDK.DescribeConnectionAliases(ctx, operations.DescribeConnectionAliasesRequest{
        DescribeConnectionAliasesRequest: shared.DescribeConnectionAliasesRequest{
            AliasIds: []string{
                "quaerat",
                "accusamus",
            },
            Limit: sdk.Int64(696344),
            NextToken: sdk.String("voluptatibus"),
            ResourceID: sdk.String("voluptas"),
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("soluta"),
        XAmzTarget: operations.DescribeConnectionAliasesXAmzTargetEnumWorkspacesServiceDescribeConnectionAliases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConnectionAliasesResult != nil {
        // handle response
    }
}
```

## DescribeIPGroups

Describes one or more of your IP access control groups.

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
    res, err := s.SDK.DescribeIPGroups(ctx, operations.DescribeIPGroupsRequest{
        DescribeIPGroupsRequest: shared.DescribeIPGroupsRequest{
            GroupIds: []string{
                "iusto",
                "voluptate",
                "dolorum",
            },
            MaxResults: sdk.Int64(536579),
            NextToken: sdk.String("omnis"),
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.DescribeIPGroupsXAmzTargetEnumWorkspacesServiceDescribeIPGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeIPGroupsResult != nil {
        // handle response
    }
}
```

## DescribeTags

Describes the specified tags for the specified WorkSpaces resource.

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
    res, err := s.SDK.DescribeTags(ctx, operations.DescribeTagsRequest{
        DescribeTagsRequest: shared.DescribeTagsRequest{
            ResourceID: "saepe",
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.DescribeTagsXAmzTargetEnumWorkspacesServiceDescribeTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTagsResult != nil {
        // handle response
    }
}
```

## DescribeWorkspaceBundles

<p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>

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
    res, err := s.SDK.DescribeWorkspaceBundles(ctx, operations.DescribeWorkspaceBundlesRequest{
        DescribeWorkspaceBundlesRequest: shared.DescribeWorkspaceBundlesRequest{
            BundleIds: []string{
                "suscipit",
                "deserunt",
                "provident",
                "minima",
            },
            NextToken: sdk.String("repellendus"),
            Owner: sdk.String("totam"),
        },
        NextToken: sdk.String("similique"),
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzTarget: operations.DescribeWorkspaceBundlesXAmzTargetEnumWorkspacesServiceDescribeWorkspaceBundles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkspaceBundlesResult != nil {
        // handle response
    }
}
```

## DescribeWorkspaceDirectories

Describes the available directories that are registered with Amazon WorkSpaces.

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
    res, err := s.SDK.DescribeWorkspaceDirectories(ctx, operations.DescribeWorkspaceDirectoriesRequest{
        DescribeWorkspaceDirectoriesRequest: shared.DescribeWorkspaceDirectoriesRequest{
            DirectoryIds: []string{
                "dolorum",
            },
            Limit: sdk.Int64(952792),
            NextToken: sdk.String("esse"),
        },
        NextToken: sdk.String("harum"),
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.DescribeWorkspaceDirectoriesXAmzTargetEnumWorkspacesServiceDescribeWorkspaceDirectories,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkspaceDirectoriesResult != nil {
        // handle response
    }
}
```

## DescribeWorkspaceImagePermissions

Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.

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
    res, err := s.SDK.DescribeWorkspaceImagePermissions(ctx, operations.DescribeWorkspaceImagePermissionsRequest{
        DescribeWorkspaceImagePermissionsRequest: shared.DescribeWorkspaceImagePermissionsRequest{
            ImageID: "numquam",
            MaxResults: sdk.Int64(313692),
            NextToken: sdk.String("dolorem"),
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.DescribeWorkspaceImagePermissionsXAmzTargetEnumWorkspacesServiceDescribeWorkspaceImagePermissions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkspaceImagePermissionsResult != nil {
        // handle response
    }
}
```

## DescribeWorkspaceImages

Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described. 

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
    res, err := s.SDK.DescribeWorkspaceImages(ctx, operations.DescribeWorkspaceImagesRequest{
        DescribeWorkspaceImagesRequest: shared.DescribeWorkspaceImagesRequest{
            ImageIds: []string{
                "libero",
                "voluptas",
            },
            ImageType: shared.ImageTypeEnumShared.ToPointer(),
            MaxResults: sdk.Int64(463575),
            NextToken: sdk.String("ipsum"),
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DescribeWorkspaceImagesXAmzTargetEnumWorkspacesServiceDescribeWorkspaceImages,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkspaceImagesResult != nil {
        // handle response
    }
}
```

## DescribeWorkspaceSnapshots

Describes the snapshots for the specified WorkSpace.

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
    res, err := s.SDK.DescribeWorkspaceSnapshots(ctx, operations.DescribeWorkspaceSnapshotsRequest{
        DescribeWorkspaceSnapshotsRequest: shared.DescribeWorkspaceSnapshotsRequest{
            WorkspaceID: "laborum",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.DescribeWorkspaceSnapshotsXAmzTargetEnumWorkspacesServiceDescribeWorkspaceSnapshots,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkspaceSnapshotsResult != nil {
        // handle response
    }
}
```

## DescribeWorkspaces

<p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>

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
    res, err := s.SDK.DescribeWorkspaces(ctx, operations.DescribeWorkspacesRequest{
        DescribeWorkspacesRequest: shared.DescribeWorkspacesRequest{
            BundleID: sdk.String("quam"),
            DirectoryID: sdk.String("molestias"),
            Limit: sdk.Int64(840429),
            NextToken: sdk.String("qui"),
            UserName: sdk.String("Conor48"),
            WorkspaceIds: []string{
                "ullam",
            },
        },
        Limit: sdk.String("nam"),
        NextToken: sdk.String("hic"),
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DescribeWorkspacesXAmzTargetEnumWorkspacesServiceDescribeWorkspaces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkspacesResult != nil {
        // handle response
    }
}
```

## DescribeWorkspacesConnectionStatus

Describes the connection status of the specified WorkSpaces.

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
    res, err := s.SDK.DescribeWorkspacesConnectionStatus(ctx, operations.DescribeWorkspacesConnectionStatusRequest{
        DescribeWorkspacesConnectionStatusRequest: shared.DescribeWorkspacesConnectionStatusRequest{
            NextToken: sdk.String("veritatis"),
            WorkspaceIds: []string{
                "quos",
                "tempore",
                "cupiditate",
            },
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DescribeWorkspacesConnectionStatusXAmzTargetEnumWorkspacesServiceDescribeWorkspacesConnectionStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkspacesConnectionStatusResult != nil {
        // handle response
    }
}
```

## DisassociateConnectionAlias

<p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different Regions. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>

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
    res, err := s.SDK.DisassociateConnectionAlias(ctx, operations.DisassociateConnectionAliasRequest{
        DisassociateConnectionAliasRequest: shared.DisassociateConnectionAliasRequest{
            AliasID: "architecto",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.DisassociateConnectionAliasXAmzTargetEnumWorkspacesServiceDisassociateConnectionAlias,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateConnectionAliasResult != nil {
        // handle response
    }
}
```

## DisassociateIPGroups

Disassociates the specified IP access control group from the specified directory.

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
    res, err := s.SDK.DisassociateIPGroups(ctx, operations.DisassociateIPGroupsRequest{
        DisassociateIPGroupsRequest: shared.DisassociateIPGroupsRequest{
            DirectoryID: "porro",
            GroupIds: []string{
                "ut",
                "facilis",
                "cupiditate",
                "qui",
            },
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.DisassociateIPGroupsXAmzTargetEnumWorkspacesServiceDisassociateIPGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateIPGroupsResult != nil {
        // handle response
    }
}
```

## ImportClientBranding

<p>Imports client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you import client branding, the default branding experience for the specified platform type is replaced with the imported experience</p> <note> <ul> <li> <p>You must specify at least one platform type when importing client branding.</p> </li> <li> <p>You can import up to 6 MB of data with each request. If your request exceeds this limit, you can import client branding for different platform types using separate requests.</p> </li> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify only one parameter for each platform type, but not both.</p> </li> <li> <p>Imported data can take up to a minute to appear in the WorkSpaces client.</p> </li> </ul> </note>

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
    res, err := s.SDK.ImportClientBranding(ctx, operations.ImportClientBrandingRequest{
        ImportClientBrandingRequest: shared.ImportClientBrandingRequest{
            DeviceTypeAndroid: &shared.DefaultImportClientBrandingAttributes{
                ForgotPasswordLink: sdk.String("omnis"),
                LoginMessage: map[string]string{
                    "ipsum": "delectus",
                    "voluptate": "consectetur",
                },
                Logo: sdk.String("vero"),
                SupportEmail: sdk.String("tenetur"),
                SupportLink: sdk.String("dignissimos"),
            },
            DeviceTypeIos: &shared.IosImportClientBrandingAttributes{
                ForgotPasswordLink: sdk.String("hic"),
                LoginMessage: map[string]string{
                    "quod": "odio",
                    "similique": "facilis",
                    "vero": "ducimus",
                },
                Logo: sdk.String("dolore"),
                Logo2x: sdk.String("quibusdam"),
                Logo3x: sdk.String("illum"),
                SupportEmail: sdk.String("sequi"),
                SupportLink: sdk.String("natus"),
            },
            DeviceTypeLinux: &shared.DefaultImportClientBrandingAttributes{
                ForgotPasswordLink: sdk.String("impedit"),
                LoginMessage: map[string]string{
                    "voluptatibus": "exercitationem",
                },
                Logo: sdk.String("nulla"),
                SupportEmail: sdk.String("fugit"),
                SupportLink: sdk.String("porro"),
            },
            DeviceTypeOsx: &shared.DefaultImportClientBrandingAttributes{
                ForgotPasswordLink: sdk.String("maiores"),
                LoginMessage: map[string]string{
                    "iusto": "eligendi",
                    "ducimus": "alias",
                    "officia": "tempora",
                    "ipsam": "ea",
                },
                Logo: sdk.String("aspernatur"),
                SupportEmail: sdk.String("vel"),
                SupportLink: sdk.String("possimus"),
            },
            DeviceTypeWeb: &shared.DefaultImportClientBrandingAttributes{
                ForgotPasswordLink: sdk.String("magnam"),
                LoginMessage: map[string]string{
                    "ex": "laudantium",
                },
                Logo: sdk.String("dicta"),
                SupportEmail: sdk.String("dolor"),
                SupportLink: sdk.String("maiores"),
            },
            DeviceTypeWindows: &shared.DefaultImportClientBrandingAttributes{
                ForgotPasswordLink: sdk.String("quasi"),
                LoginMessage: map[string]string{
                    "nulla": "excepturi",
                    "voluptatibus": "nostrum",
                },
                Logo: sdk.String("sapiente"),
                SupportEmail: sdk.String("quisquam"),
                SupportLink: sdk.String("saepe"),
            },
            ResourceID: "ea",
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.ImportClientBrandingXAmzTargetEnumWorkspacesServiceImportClientBranding,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportClientBrandingResult != nil {
        // handle response
    }
}
```

## ImportWorkspaceImage

Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows Desktop Licenses</a>.

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
    res, err := s.SDK.ImportWorkspaceImage(ctx, operations.ImportWorkspaceImageRequest{
        ImportWorkspaceImageRequest: shared.ImportWorkspaceImageRequest{
            Applications: []shared.ApplicationEnum{
                shared.ApplicationEnumMicrosoftOffice2016,
                shared.ApplicationEnumMicrosoftOffice2019,
                shared.ApplicationEnumMicrosoftOffice2016,
                shared.ApplicationEnumMicrosoftOffice2016,
            },
            Ec2ImageID: "eaque",
            ImageDescription: "a",
            ImageName: "libero",
            IngestionProcess: shared.WorkspaceImageIngestionProcessEnumByolRegular,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deleniti",
                    Value: sdk.String("impedit"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.ImportWorkspaceImageXAmzTargetEnumWorkspacesServiceImportWorkspaceImage,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportWorkspaceImageResult != nil {
        // handle response
    }
}
```

## ListAvailableManagementCidrRanges

<p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>This operation can be run only by Amazon Web Services accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>

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
    res, err := s.SDK.ListAvailableManagementCidrRanges(ctx, operations.ListAvailableManagementCidrRangesRequest{
        ListAvailableManagementCidrRangesRequest: shared.ListAvailableManagementCidrRangesRequest{
            ManagementCidrRangeConstraint: "laborum",
            MaxResults: sdk.Int64(810424),
            NextToken: sdk.String("velit"),
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.ListAvailableManagementCidrRangesXAmzTargetEnumWorkspacesServiceListAvailableManagementCidrRanges,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailableManagementCidrRangesResult != nil {
        // handle response
    }
}
```

## MigrateWorkspace

<p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p> <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code> user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code> folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p> <p>For available migration scenarios, details about what happens during migration, and best practices, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>

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
    res, err := s.SDK.MigrateWorkspace(ctx, operations.MigrateWorkspaceRequest{
        MigrateWorkspaceRequest: shared.MigrateWorkspaceRequest{
            BundleID: "libero",
            SourceWorkspaceID: "quasi",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.MigrateWorkspaceXAmzTargetEnumWorkspacesServiceMigrateWorkspace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MigrateWorkspaceResult != nil {
        // handle response
    }
}
```

## ModifyAccount

Modifies the configuration of Bring Your Own License (BYOL) for the specified account.

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
    res, err := s.SDK.ModifyAccount(ctx, operations.ModifyAccountRequest{
        ModifyAccountRequest: shared.ModifyAccountRequest{
            DedicatedTenancyManagementCidrRange: sdk.String("odio"),
            DedicatedTenancySupport: shared.DedicatedTenancySupportEnumEnumEnabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.ModifyAccountXAmzTargetEnumWorkspacesServiceModifyAccount,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyAccountResult != nil {
        // handle response
    }
}
```

## ModifyCertificateBasedAuthProperties

Modifies the properties of the certificate-based authentication you want to use with your WorkSpaces.

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
    res, err := s.SDK.ModifyCertificateBasedAuthProperties(ctx, operations.ModifyCertificateBasedAuthPropertiesRequest{
        ModifyCertificateBasedAuthPropertiesRequest: shared.ModifyCertificateBasedAuthPropertiesRequest{
            CertificateBasedAuthProperties: &shared.CertificateBasedAuthProperties{
                CertificateAuthorityArn: sdk.String("fugiat"),
                Status: shared.CertificateBasedAuthStatusEnumEnumDisabled.ToPointer(),
            },
            PropertiesToDelete: []shared.DeletableCertificateBasedAuthPropertyEnum{
                shared.DeletableCertificateBasedAuthPropertyEnumCertificateBasedAuthPropertiesCertificateAuthorityArn,
                shared.DeletableCertificateBasedAuthPropertyEnumCertificateBasedAuthPropertiesCertificateAuthorityArn,
            },
            ResourceID: "suscipit",
        },
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.ModifyCertificateBasedAuthPropertiesXAmzTargetEnumWorkspacesServiceModifyCertificateBasedAuthProperties,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyCertificateBasedAuthPropertiesResult != nil {
        // handle response
    }
}
```

## ModifyClientProperties

Modifies the properties of the specified Amazon WorkSpaces clients.

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
    res, err := s.SDK.ModifyClientProperties(ctx, operations.ModifyClientPropertiesRequest{
        ModifyClientPropertiesRequest: shared.ModifyClientPropertiesRequest{
            ClientProperties: shared.ClientProperties{
                LogUploadEnabled: shared.LogUploadEnumEnumDisabled.ToPointer(),
                ReconnectEnabled: shared.ReconnectEnumEnumEnabled.ToPointer(),
            },
            ResourceID: "quo",
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.ModifyClientPropertiesXAmzTargetEnumWorkspacesServiceModifyClientProperties,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyClientPropertiesResult != nil {
        // handle response
    }
}
```

## ModifySamlProperties

Modifies multiple properties related to SAML 2.0 authentication, including the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.

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
    res, err := s.SDK.ModifySamlProperties(ctx, operations.ModifySamlPropertiesRequest{
        ModifySamlPropertiesRequest: shared.ModifySamlPropertiesRequest{
            PropertiesToDelete: []shared.DeletableSamlPropertyEnum{
                shared.DeletableSamlPropertyEnumSamlPropertiesUserAccessURL,
                shared.DeletableSamlPropertyEnumSamlPropertiesUserAccessURL,
                shared.DeletableSamlPropertyEnumSamlPropertiesRelayStateParameterName,
            },
            ResourceID: "ipsam",
            SamlProperties: &shared.SamlProperties{
                RelayStateParameterName: sdk.String("aspernatur"),
                Status: shared.SamlStatusEnumEnumDisabled.ToPointer(),
                UserAccessURL: sdk.String("quo"),
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("inventore"),
        XAmzTarget: operations.ModifySamlPropertiesXAmzTargetEnumWorkspacesServiceModifySamlProperties,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifySamlPropertiesResult != nil {
        // handle response
    }
}
```

## ModifySelfservicePermissions

Modifies the self-service WorkSpace management capabilities for your users. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.

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
    res, err := s.SDK.ModifySelfservicePermissions(ctx, operations.ModifySelfservicePermissionsRequest{
        ModifySelfservicePermissionsRequest: shared.ModifySelfservicePermissionsRequest{
            ResourceID: "nihil",
            SelfservicePermissions: shared.SelfservicePermissions{
                ChangeComputeType: shared.ReconnectEnumEnumDisabled.ToPointer(),
                IncreaseVolumeSize: shared.ReconnectEnumEnumDisabled.ToPointer(),
                RebuildWorkspace: shared.ReconnectEnumEnumEnabled.ToPointer(),
                RestartWorkspace: shared.ReconnectEnumEnumEnabled.ToPointer(),
                SwitchRunningMode: shared.ReconnectEnumEnumDisabled.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.ModifySelfservicePermissionsXAmzTargetEnumWorkspacesServiceModifySelfservicePermissions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifySelfservicePermissionsResult != nil {
        // handle response
    }
}
```

## ModifyWorkspaceAccessProperties

Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access"> Control Device Access</a>.

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
    res, err := s.SDK.ModifyWorkspaceAccessProperties(ctx, operations.ModifyWorkspaceAccessPropertiesRequest{
        ModifyWorkspaceAccessPropertiesRequest: shared.ModifyWorkspaceAccessPropertiesRequest{
            ResourceID: "eum",
            WorkspaceAccessProperties: shared.WorkspaceAccessProperties{
                DeviceTypeAndroid: shared.AccessPropertyValueEnumDeny.ToPointer(),
                DeviceTypeChromeOs: shared.AccessPropertyValueEnumDeny.ToPointer(),
                DeviceTypeIos: shared.AccessPropertyValueEnumAllow.ToPointer(),
                DeviceTypeLinux: shared.AccessPropertyValueEnumDeny.ToPointer(),
                DeviceTypeOsx: shared.AccessPropertyValueEnumAllow.ToPointer(),
                DeviceTypeWeb: shared.AccessPropertyValueEnumDeny.ToPointer(),
                DeviceTypeWindows: shared.AccessPropertyValueEnumDeny.ToPointer(),
                DeviceTypeZeroClient: shared.AccessPropertyValueEnumAllow.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.ModifyWorkspaceAccessPropertiesXAmzTargetEnumWorkspacesServiceModifyWorkspaceAccessProperties,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyWorkspaceAccessPropertiesResult != nil {
        // handle response
    }
}
```

## ModifyWorkspaceCreationProperties

Modify the default properties used to create WorkSpaces.

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
    res, err := s.SDK.ModifyWorkspaceCreationProperties(ctx, operations.ModifyWorkspaceCreationPropertiesRequest{
        ModifyWorkspaceCreationPropertiesRequest: shared.ModifyWorkspaceCreationPropertiesRequest{
            ResourceID: "ratione",
            WorkspaceCreationProperties: shared.WorkspaceCreationProperties{
                CustomSecurityGroupID: sdk.String("explicabo"),
                DefaultOu: sdk.String("saepe"),
                EnableInternetAccess: sdk.Bool(false),
                EnableMaintenanceMode: sdk.Bool(false),
                EnableWorkDocs: sdk.Bool(false),
                UserEnabledAsLocalAdministrator: sdk.Bool(false),
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("veritatis"),
        XAmzTarget: operations.ModifyWorkspaceCreationPropertiesXAmzTargetEnumWorkspacesServiceModifyWorkspaceCreationProperties,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyWorkspaceCreationPropertiesResult != nil {
        // handle response
    }
}
```

## ModifyWorkspaceProperties

<p>Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html"> Modify a WorkSpace</a>. </p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>

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
    res, err := s.SDK.ModifyWorkspaceProperties(ctx, operations.ModifyWorkspacePropertiesRequest{
        ModifyWorkspacePropertiesRequest: shared.ModifyWorkspacePropertiesRequest{
            WorkspaceID: "esse",
            WorkspaceProperties: shared.WorkspaceProperties{
                ComputeTypeName: shared.ComputeEnumGraphicsG4Dn.ToPointer(),
                Protocols: []shared.ProtocolEnum{
                    shared.ProtocolEnumWsp,
                    shared.ProtocolEnumPcoip,
                    shared.ProtocolEnumPcoip,
                },
                RootVolumeSizeGib: sdk.Int64(904045),
                RunningMode: shared.RunningModeEnumAlwaysOn.ToPointer(),
                RunningModeAutoStopTimeoutInMinutes: sdk.Int64(690025),
                UserVolumeSizeGib: sdk.Int64(473221),
            },
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.ModifyWorkspacePropertiesXAmzTargetEnumWorkspacesServiceModifyWorkspaceProperties,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyWorkspacePropertiesResult != nil {
        // handle response
    }
}
```

## ModifyWorkspaceState

<p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>

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
    res, err := s.SDK.ModifyWorkspaceState(ctx, operations.ModifyWorkspaceStateRequest{
        ModifyWorkspaceStateRequest: shared.ModifyWorkspaceStateRequest{
            WorkspaceID: "tempore",
            WorkspaceState: shared.TargetWorkspaceStateEnumAvailable,
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.ModifyWorkspaceStateXAmzTargetEnumWorkspacesServiceModifyWorkspaceState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyWorkspaceStateResult != nil {
        // handle response
    }
}
```

## RebootWorkspaces

<p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>

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
    res, err := s.SDK.RebootWorkspaces(ctx, operations.RebootWorkspacesRequest{
        RebootWorkspacesRequest: shared.RebootWorkspacesRequest{
            RebootWorkspaceRequests: []shared.RebootRequest{
                shared.RebootRequest{
                    WorkspaceID: "blanditiis",
                },
                shared.RebootRequest{
                    WorkspaceID: "provident",
                },
            },
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzTarget: operations.RebootWorkspacesXAmzTargetEnumWorkspacesServiceRebootWorkspaces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RebootWorkspacesResult != nil {
        // handle response
    }
}
```

## RebuildWorkspaces

<p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>

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
    res, err := s.SDK.RebuildWorkspaces(ctx, operations.RebuildWorkspacesRequest{
        RebuildWorkspacesRequest: shared.RebuildWorkspacesRequest{
            RebuildWorkspaceRequests: []shared.RebuildRequest{
                shared.RebuildRequest{
                    WorkspaceID: "pariatur",
                },
                shared.RebuildRequest{
                    WorkspaceID: "possimus",
                },
                shared.RebuildRequest{
                    WorkspaceID: "quia",
                },
            },
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("similique"),
        XAmzTarget: operations.RebuildWorkspacesXAmzTargetEnumWorkspacesServiceRebuildWorkspaces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RebuildWorkspacesResult != nil {
        // handle response
    }
}
```

## RegisterWorkspaceDirectory

Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role"> Creating the workspaces_DefaultRole Role</a>.

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
    res, err := s.SDK.RegisterWorkspaceDirectory(ctx, operations.RegisterWorkspaceDirectoryRequest{
        RegisterWorkspaceDirectoryRequest: shared.RegisterWorkspaceDirectoryRequest{
            DirectoryID: "culpa",
            EnableSelfService: sdk.Bool(false),
            EnableWorkDocs: false,
            SubnetIds: []string{
                "tenetur",
                "quae",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "vel",
                    Value: sdk.String("in"),
                },
                shared.Tag{
                    Key: "eius",
                    Value: sdk.String("libero"),
                },
                shared.Tag{
                    Key: "illum",
                    Value: sdk.String("soluta"),
                },
                shared.Tag{
                    Key: "accusantium",
                    Value: sdk.String("aliquam"),
                },
            },
            Tenancy: shared.TenancyEnumShared.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.RegisterWorkspaceDirectoryXAmzTargetEnumWorkspacesServiceRegisterWorkspaceDirectory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RegisterWorkspaceDirectoryResult != nil {
        // handle response
    }
}
```

## RestoreWorkspace

<p>Restores the specified WorkSpace to its last known healthy state.</p> <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpace is completely restored.</p>

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
    res, err := s.SDK.RestoreWorkspace(ctx, operations.RestoreWorkspaceRequest{
        RestoreWorkspaceRequest: shared.RestoreWorkspaceRequest{
            WorkspaceID: "qui",
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.RestoreWorkspaceXAmzTargetEnumWorkspacesServiceRestoreWorkspace,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RestoreWorkspaceResult != nil {
        // handle response
    }
}
```

## RevokeIPRules

Removes one or more rules from the specified IP access control group.

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
    res, err := s.SDK.RevokeIPRules(ctx, operations.RevokeIPRulesRequest{
        RevokeIPRulesRequest: shared.RevokeIPRulesRequest{
            GroupID: "tenetur",
            UserRules: []string{
                "at",
            },
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.RevokeIPRulesXAmzTargetEnumWorkspacesServiceRevokeIPRules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RevokeIPRulesResult != nil {
        // handle response
    }
}
```

## StartWorkspaces

<p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>

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
    res, err := s.SDK.StartWorkspaces(ctx, operations.StartWorkspacesRequest{
        StartWorkspacesRequest: shared.StartWorkspacesRequest{
            StartWorkspaceRequests: []shared.StartRequest{
                shared.StartRequest{
                    WorkspaceID: sdk.String("temporibus"),
                },
                shared.StartRequest{
                    WorkspaceID: sdk.String("accusantium"),
                },
                shared.StartRequest{
                    WorkspaceID: sdk.String("rem"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.StartWorkspacesXAmzTargetEnumWorkspacesServiceStartWorkspaces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartWorkspacesResult != nil {
        // handle response
    }
}
```

## StopWorkspaces

<p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>

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
    res, err := s.SDK.StopWorkspaces(ctx, operations.StopWorkspacesRequest{
        StopWorkspacesRequest: shared.StopWorkspacesRequest{
            StopWorkspaceRequests: []shared.StopRequest{
                shared.StopRequest{
                    WorkspaceID: sdk.String("dolor"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.StopWorkspacesXAmzTargetEnumWorkspacesServiceStopWorkspaces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopWorkspacesResult != nil {
        // handle response
    }
}
```

## TerminateWorkspaces

<p>Terminates the specified WorkSpaces.</p> <important> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services Support before terminating the WorkSpace.</p> </important> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html"> DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>

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
    res, err := s.SDK.TerminateWorkspaces(ctx, operations.TerminateWorkspacesRequest{
        TerminateWorkspacesRequest: shared.TerminateWorkspacesRequest{
            TerminateWorkspaceRequests: []shared.TerminateRequest{
                shared.TerminateRequest{
                    WorkspaceID: "maiores",
                },
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.TerminateWorkspacesXAmzTargetEnumWorkspacesServiceTerminateWorkspaces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminateWorkspacesResult != nil {
        // handle response
    }
}
```

## UpdateConnectClientAddIn

Updates a Amazon Connect client add-in. Use this action to update the name and endpoint URL of a Amazon Connect client add-in.

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
    res, err := s.SDK.UpdateConnectClientAddIn(ctx, operations.UpdateConnectClientAddInRequest{
        UpdateConnectClientAddInRequest: shared.UpdateConnectClientAddInRequest{
            AddInID: "quaerat",
            Name: sdk.String("Kari Nikolaus"),
            ResourceID: "officia",
            URL: sdk.String("asperiores"),
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.UpdateConnectClientAddInXAmzTargetEnumWorkspacesServiceUpdateConnectClientAddIn,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConnectClientAddInResult != nil {
        // handle response
    }
}
```

## UpdateConnectionAliasPermission

<p>Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <ul> <li> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </li> <li> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </li> </ul> </note>

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
    res, err := s.SDK.UpdateConnectionAliasPermission(ctx, operations.UpdateConnectionAliasPermissionRequest{
        UpdateConnectionAliasPermissionRequest: shared.UpdateConnectionAliasPermissionRequest{
            AliasID: "adipisci",
            ConnectionAliasPermission: shared.ConnectionAliasPermission{
                AllowAssociation: false,
                SharedAccountID: "fuga",
            },
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.UpdateConnectionAliasPermissionXAmzTargetEnumWorkspacesServiceUpdateConnectionAliasPermission,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConnectionAliasPermissionResult != nil {
        // handle response
    }
}
```

## UpdateRulesOfIPGroup

Replaces the current rules of the specified IP access control group with the specified rules.

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
    res, err := s.SDK.UpdateRulesOfIPGroup(ctx, operations.UpdateRulesOfIPGroupRequest{
        UpdateRulesOfIPGroupRequest: shared.UpdateRulesOfIPGroupRequest{
            GroupID: "fugiat",
            UserRules: []shared.IPRuleItem{
                shared.IPRuleItem{
                    IPRule: sdk.String("ducimus"),
                    RuleDesc: sdk.String("quos"),
                },
                shared.IPRuleItem{
                    IPRule: sdk.String("vel"),
                    RuleDesc: sdk.String("labore"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
        XAmzTarget: operations.UpdateRulesOfIPGroupXAmzTargetEnumWorkspacesServiceUpdateRulesOfIPGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRulesOfIPGroupResult != nil {
        // handle response
    }
}
```

## UpdateWorkspaceBundle

<p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html"> Update a Custom WorkSpaces Bundle</a>.</p> <important> <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.</p> </important>

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
    res, err := s.SDK.UpdateWorkspaceBundle(ctx, operations.UpdateWorkspaceBundleRequest{
        UpdateWorkspaceBundleRequest: shared.UpdateWorkspaceBundleRequest{
            BundleID: sdk.String("assumenda"),
            ImageID: sdk.String("nemo"),
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        XAmzTarget: operations.UpdateWorkspaceBundleXAmzTargetEnumWorkspacesServiceUpdateWorkspaceBundle,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkspaceBundleResult != nil {
        // handle response
    }
}
```

## UpdateWorkspaceImagePermission

<p>Shares or unshares an image with one account in the same Amazon Web Services Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.</p> <p>After an image has been shared, the recipient account can copy the image to other Regions as needed.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <p>For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.</p> <note> <ul> <li> <p>To delete an image that has been shared, you must unshare the image before you delete it.</p> </li> <li> <p>Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.</p> </li> </ul> </note>

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
    res, err := s.SDK.UpdateWorkspaceImagePermission(ctx, operations.UpdateWorkspaceImagePermissionRequest{
        UpdateWorkspaceImagePermissionRequest: shared.UpdateWorkspaceImagePermissionRequest{
            AllowCopyImage: false,
            ImageID: "earum",
            SharedAccountID: "facere",
        },
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.UpdateWorkspaceImagePermissionXAmzTargetEnumWorkspacesServiceUpdateWorkspaceImagePermission,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkspaceImagePermissionResult != nil {
        // handle response
    }
}
```
