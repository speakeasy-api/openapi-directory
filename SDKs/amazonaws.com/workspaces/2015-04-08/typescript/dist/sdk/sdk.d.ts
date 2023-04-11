import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://workspaces.{region}.amazonaws.com", "https://workspaces.{region}.amazonaws.com", "http://workspaces.{region}.amazonaws.com.cn", "https://workspaces.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <fullname>Amazon WorkSpaces Service</fullname> <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows or Amazon Linux desktops for your users, known as <i>WorkSpaces</i>. WorkSpaces eliminates the need to procure and deploy hardware or install complex software. You can quickly add or remove users as your needs change. Users can access their virtual desktops from multiple devices or web browsers.</p> <p>This API Reference provides detailed information about the actions, data types, parameters, and errors of the WorkSpaces service. For more information about the supported Amazon Web Services Regions, endpoints, and service quotas of the Amazon WorkSpaces service, see <a href="https://docs.aws.amazon.com/general/latest/gr/wsp.html">WorkSpaces endpoints and quotas</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>You can also manage your WorkSpaces resources using the WorkSpaces console, Command Line Interface (CLI), and SDKs. For more information about administering WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/">Amazon WorkSpaces Administration Guide</a>. For more information about using the Amazon WorkSpaces client application or web browser to access provisioned WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/userguide/">Amazon WorkSpaces User Guide</a>. For more information about using the CLI to manage your WorkSpaces resources, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/workspaces/index.html">WorkSpaces section of the CLI Reference</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/workspaces/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * <p>Associates the specified connection alias with the specified directory to enable cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>
     */
    associateConnectionAlias(req: operations.AssociateConnectionAliasRequest, config?: AxiosRequestConfig): Promise<operations.AssociateConnectionAliasResponse>;
    /**
     * Associates the specified IP access control group with the specified directory.
     */
    associateIpGroups(req: operations.AssociateIpGroupsRequest, config?: AxiosRequestConfig): Promise<operations.AssociateIpGroupsResponse>;
    /**
     * <p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>
     */
    authorizeIpRules(req: operations.AuthorizeIpRulesRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizeIpRulesResponse>;
    /**
     * <p>Copies the specified image from the specified Region to the current Region. For more information about copying images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html"> Copy a Custom WorkSpaces Image</a>.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <important> <p>Before copying a shared image, be sure to verify that it has been shared from the correct Amazon Web Services account. To determine if an image has been shared and to see the ID of the Amazon Web Services account that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p> </important>
     */
    copyWorkspaceImage(req: operations.CopyWorkspaceImageRequest, config?: AxiosRequestConfig): Promise<operations.CopyWorkspaceImageResponse>;
    /**
     * <p>Creates a client-add-in for Amazon Connect within a directory. You can create only one Amazon Connect client add-in within a directory.</p> <p>This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.</p>
     */
    createConnectClientAddIn(req: operations.CreateConnectClientAddInRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectClientAddInResponse>;
    /**
     * Creates the specified connection alias for use with cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
     */
    createConnectionAlias(req: operations.CreateConnectionAliasRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionAliasResponse>;
    /**
     * <p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>
     */
    createIpGroup(req: operations.CreateIpGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateIpGroupResponse>;
    /**
     * Creates a standby WorkSpace in a secondary Region.
     */
    createStandbyWorkspaces(req: operations.CreateStandbyWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.CreateStandbyWorkspacesResponse>;
    /**
     * Creates the specified tags for the specified WorkSpaces resource.
     */
    createTags(req: operations.CreateTagsRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagsResponse>;
    /**
     * <p>Creates a new updated WorkSpace image based on the specified source image. The new updated WorkSpace image has the latest drivers and other updates required by the Amazon WorkSpaces components.</p> <p>To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces requirements, use <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html"> DescribeWorkspaceImages</a>.</p> <note> <ul> <li> <p>Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images can be programmatically updated at this time.</p> </li> <li> <p>Microsoft Windows updates and other application updates are not included in the update process.</p> </li> <li> <p>The source WorkSpace image is not deleted. You can delete the source image after you've verified your new updated image and created a new bundle. </p> </li> </ul> </note>
     */
    createUpdatedWorkspaceImage(req: operations.CreateUpdatedWorkspaceImageRequest, config?: AxiosRequestConfig): Promise<operations.CreateUpdatedWorkspaceImageResponse>;
    /**
     * Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html"> Create a Custom WorkSpaces Image and Bundle</a>.
     */
    createWorkspaceBundle(req: operations.CreateWorkspaceBundleRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceBundleResponse>;
    /**
     * Creates a new WorkSpace image from an existing WorkSpace.
     */
    createWorkspaceImage(req: operations.CreateWorkspaceImageRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceImageResponse>;
    /**
     * <p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>
     */
    createWorkspaces(req: operations.CreateWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspacesResponse>;
    /**
     * <p>Deletes customized client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you delete your customized client branding, your login portal reverts to the default client branding.</p>
     */
    deleteClientBranding(req: operations.DeleteClientBrandingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClientBrandingResponse>;
    /**
     * Deletes a client-add-in for Amazon Connect that is configured within a directory.
     */
    deleteConnectClientAddIn(req: operations.DeleteConnectClientAddInRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectClientAddInResponse>;
    /**
     * <p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <important> <p> <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b> For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p> </important> <note> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </note>
     */
    deleteConnectionAlias(req: operations.DeleteConnectionAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionAliasResponse>;
    /**
     * <p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>
     */
    deleteIpGroup(req: operations.DeleteIpGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIpGroupResponse>;
    /**
     * Deletes the specified tags from the specified WorkSpaces resource.
     */
    deleteTags(req: operations.DeleteTagsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagsResponse>;
    /**
     * Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html"> Delete a Custom WorkSpaces Bundle or Image</a>.
     */
    deleteWorkspaceBundle(req: operations.DeleteWorkspaceBundleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceBundleResponse>;
    /**
     * Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts.
     */
    deleteWorkspaceImage(req: operations.DeleteWorkspaceImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceImageResponse>;
    /**
     * <p>Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>
     */
    deregisterWorkspaceDirectory(req: operations.DeregisterWorkspaceDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterWorkspaceDirectoryResponse>;
    /**
     * Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.
     */
    describeAccount(req: operations.DescribeAccountRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountResponse>;
    /**
     * Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.
     */
    describeAccountModifications(req: operations.DescribeAccountModificationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountModificationsResponse>;
    /**
     * <p>Describes the specified client branding. Client branding allows you to customize the log in page of various device types for your users. You can add your company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <note> <p>Only device types that have branding information configured will be shown in the response.</p> </note>
     */
    describeClientBranding(req: operations.DescribeClientBrandingRequest, config?: AxiosRequestConfig): Promise<operations.DescribeClientBrandingResponse>;
    /**
     * Retrieves a list that describes one or more specified Amazon WorkSpaces clients.
     */
    describeClientProperties(req: operations.DescribeClientPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeClientPropertiesResponse>;
    /**
     * Retrieves a list of Amazon Connect client add-ins that have been created.
     */
    describeConnectClientAddIns(req: operations.DescribeConnectClientAddInsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectClientAddInsResponse>;
    /**
     * Describes the permissions that the owner of a connection alias has granted to another Amazon Web Services account for the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
     */
    describeConnectionAliasPermissions(req: operations.DescribeConnectionAliasPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectionAliasPermissionsResponse>;
    /**
     * Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
     */
    describeConnectionAliases(req: operations.DescribeConnectionAliasesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectionAliasesResponse>;
    /**
     * Describes one or more of your IP access control groups.
     */
    describeIpGroups(req: operations.DescribeIpGroupsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeIpGroupsResponse>;
    /**
     * Describes the specified tags for the specified WorkSpaces resource.
     */
    describeTags(req: operations.DescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTagsResponse>;
    /**
     * <p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>
     */
    describeWorkspaceBundles(req: operations.DescribeWorkspaceBundlesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceBundlesResponse>;
    /**
     * Describes the available directories that are registered with Amazon WorkSpaces.
     */
    describeWorkspaceDirectories(req: operations.DescribeWorkspaceDirectoriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceDirectoriesResponse>;
    /**
     * Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.
     */
    describeWorkspaceImagePermissions(req: operations.DescribeWorkspaceImagePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceImagePermissionsResponse>;
    /**
     * Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described.
     */
    describeWorkspaceImages(req: operations.DescribeWorkspaceImagesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceImagesResponse>;
    /**
     * Describes the snapshots for the specified WorkSpace.
     */
    describeWorkspaceSnapshots(req: operations.DescribeWorkspaceSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceSnapshotsResponse>;
    /**
     * <p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>
     */
    describeWorkspaces(req: operations.DescribeWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspacesResponse>;
    /**
     * Describes the connection status of the specified WorkSpaces.
     */
    describeWorkspacesConnectionStatus(req: operations.DescribeWorkspacesConnectionStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspacesConnectionStatusResponse>;
    /**
     * <p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different Regions. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>
     */
    disassociateConnectionAlias(req: operations.DisassociateConnectionAliasRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateConnectionAliasResponse>;
    /**
     * Disassociates the specified IP access control group from the specified directory.
     */
    disassociateIpGroups(req: operations.DisassociateIpGroupsRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateIpGroupsResponse>;
    /**
     * <p>Imports client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you import client branding, the default branding experience for the specified platform type is replaced with the imported experience</p> <note> <ul> <li> <p>You must specify at least one platform type when importing client branding.</p> </li> <li> <p>You can import up to 6 MB of data with each request. If your request exceeds this limit, you can import client branding for different platform types using separate requests.</p> </li> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify only one parameter for each platform type, but not both.</p> </li> <li> <p>Imported data can take up to a minute to appear in the WorkSpaces client.</p> </li> </ul> </note>
     */
    importClientBranding(req: operations.ImportClientBrandingRequest, config?: AxiosRequestConfig): Promise<operations.ImportClientBrandingResponse>;
    /**
     * Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows Desktop Licenses</a>.
     */
    importWorkspaceImage(req: operations.ImportWorkspaceImageRequest, config?: AxiosRequestConfig): Promise<operations.ImportWorkspaceImageResponse>;
    /**
     * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>This operation can be run only by Amazon Web Services accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
     */
    listAvailableManagementCidrRanges(req: operations.ListAvailableManagementCidrRangesRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailableManagementCidrRangesResponse>;
    /**
     * <p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p> <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code> user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code> folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p> <p>For available migration scenarios, details about what happens during migration, and best practices, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>
     */
    migrateWorkspace(req: operations.MigrateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.MigrateWorkspaceResponse>;
    /**
     * Modifies the configuration of Bring Your Own License (BYOL) for the specified account.
     */
    modifyAccount(req: operations.ModifyAccountRequest, config?: AxiosRequestConfig): Promise<operations.ModifyAccountResponse>;
    /**
     * Modifies the properties of the certificate-based authentication you want to use with your WorkSpaces.
     */
    modifyCertificateBasedAuthProperties(req: operations.ModifyCertificateBasedAuthPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.ModifyCertificateBasedAuthPropertiesResponse>;
    /**
     * Modifies the properties of the specified Amazon WorkSpaces clients.
     */
    modifyClientProperties(req: operations.ModifyClientPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.ModifyClientPropertiesResponse>;
    /**
     * Modifies multiple properties related to SAML 2.0 authentication, including the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.
     */
    modifySamlProperties(req: operations.ModifySamlPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.ModifySamlPropertiesResponse>;
    /**
     * Modifies the self-service WorkSpace management capabilities for your users. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
     */
    modifySelfservicePermissions(req: operations.ModifySelfservicePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ModifySelfservicePermissionsResponse>;
    /**
     * Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access"> Control Device Access</a>.
     */
    modifyWorkspaceAccessProperties(req: operations.ModifyWorkspaceAccessPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.ModifyWorkspaceAccessPropertiesResponse>;
    /**
     * Modify the default properties used to create WorkSpaces.
     */
    modifyWorkspaceCreationProperties(req: operations.ModifyWorkspaceCreationPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.ModifyWorkspaceCreationPropertiesResponse>;
    /**
     * <p>Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html"> Modify a WorkSpace</a>. </p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>
     */
    modifyWorkspaceProperties(req: operations.ModifyWorkspacePropertiesRequest, config?: AxiosRequestConfig): Promise<operations.ModifyWorkspacePropertiesResponse>;
    /**
     * <p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>
     */
    modifyWorkspaceState(req: operations.ModifyWorkspaceStateRequest, config?: AxiosRequestConfig): Promise<operations.ModifyWorkspaceStateResponse>;
    /**
     * <p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
     */
    rebootWorkspaces(req: operations.RebootWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.RebootWorkspacesResponse>;
    /**
     * <p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>
     */
    rebuildWorkspaces(req: operations.RebuildWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.RebuildWorkspacesResponse>;
    /**
     * Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role"> Creating the workspaces_DefaultRole Role</a>.
     */
    registerWorkspaceDirectory(req: operations.RegisterWorkspaceDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.RegisterWorkspaceDirectoryResponse>;
    /**
     * <p>Restores the specified WorkSpace to its last known healthy state.</p> <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpace is completely restored.</p>
     */
    restoreWorkspace(req: operations.RestoreWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.RestoreWorkspaceResponse>;
    /**
     * Removes one or more rules from the specified IP access control group.
     */
    revokeIpRules(req: operations.RevokeIpRulesRequest, config?: AxiosRequestConfig): Promise<operations.RevokeIpRulesResponse>;
    /**
     * <p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>
     */
    startWorkspaces(req: operations.StartWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.StartWorkspacesResponse>;
    /**
     * <p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>
     */
    stopWorkspaces(req: operations.StopWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.StopWorkspacesResponse>;
    /**
     * <p>Terminates the specified WorkSpaces.</p> <important> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services Support before terminating the WorkSpace.</p> </important> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html"> DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>
     */
    terminateWorkspaces(req: operations.TerminateWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.TerminateWorkspacesResponse>;
    /**
     * Updates a Amazon Connect client add-in. Use this action to update the name and endpoint URL of a Amazon Connect client add-in.
     */
    updateConnectClientAddIn(req: operations.UpdateConnectClientAddInRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectClientAddInResponse>;
    /**
     * <p>Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <ul> <li> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </li> <li> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </li> </ul> </note>
     */
    updateConnectionAliasPermission(req: operations.UpdateConnectionAliasPermissionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectionAliasPermissionResponse>;
    /**
     * Replaces the current rules of the specified IP access control group with the specified rules.
     */
    updateRulesOfIpGroup(req: operations.UpdateRulesOfIpGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRulesOfIpGroupResponse>;
    /**
     * <p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html"> Update a Custom WorkSpaces Bundle</a>.</p> <important> <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.</p> </important>
     */
    updateWorkspaceBundle(req: operations.UpdateWorkspaceBundleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceBundleResponse>;
    /**
     * <p>Shares or unshares an image with one account in the same Amazon Web Services Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.</p> <p>After an image has been shared, the recipient account can copy the image to other Regions as needed.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <p>For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.</p> <note> <ul> <li> <p>To delete an image that has been shared, you must unshare the image before you delete it.</p> </li> <li> <p>Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.</p> </li> </ul> </note>
     */
    updateWorkspaceImagePermission(req: operations.UpdateWorkspaceImagePermissionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceImagePermissionResponse>;
}
