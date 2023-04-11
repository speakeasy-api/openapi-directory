import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://ds.{region}.amazonaws.com", "https://ds.{region}.amazonaws.com", "http://ds.{region}.amazonaws.com.cn", "https://ds.{region}.amazonaws.com.cn"];
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
 * <fullname>Directory Service</fullname> <p>Directory Service is a web service that makes it easy for you to setup and run directories in the Amazon Web Services cloud, or connect your Amazon Web Services resources with an existing self-managed Microsoft Active Directory. This guide provides detailed information about Directory Service operations, data types, parameters, and errors. For information about Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">Directory Service Administration Guide</a>.</p> <note> <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to Directory Service and other Amazon Web Services services. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>
 *
 * @see {@link https://docs.aws.amazon.com/ds/} - Amazon Web Services documentation
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
     * Accepts a directory sharing request that was sent from the directory owner account.
     */
    acceptSharedDirectory(req: operations.AcceptSharedDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.AcceptSharedDirectoryResponse>;
    /**
     * <p>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
     */
    addIpRoutes(req: operations.AddIpRoutesRequest, config?: AxiosRequestConfig): Promise<operations.AddIpRoutesResponse>;
    /**
     * Adds two domain controllers in the specified Region for the specified directory.
     */
    addRegion(req: operations.AddRegionRequest, config?: AxiosRequestConfig): Promise<operations.AddRegionResponse>;
    /**
     * Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.
     */
    addTagsToResource(req: operations.AddTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.AddTagsToResourceResponse>;
    /**
     * Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.
     */
    cancelSchemaExtension(req: operations.CancelSchemaExtensionRequest, config?: AxiosRequestConfig): Promise<operations.CancelSchemaExtensionResponse>;
    /**
     * <p>Creates an AD Connector to connect to a self-managed directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
     */
    connectDirectory(req: operations.ConnectDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.ConnectDirectoryResponse>;
    /**
     * <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>
     */
    createAlias(req: operations.CreateAliasRequest, config?: AxiosRequestConfig): Promise<operations.CreateAliasResponse>;
    /**
     * Creates an Active Directory computer object in the specified directory.
     */
    createComputer(req: operations.CreateComputerRequest, config?: AxiosRequestConfig): Promise<operations.CreateComputerResponse>;
    /**
     * Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.
     */
    createConditionalForwarder(req: operations.CreateConditionalForwarderRequest, config?: AxiosRequestConfig): Promise<operations.CreateConditionalForwarderResponse>;
    /**
     * <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
     */
    createDirectory(req: operations.CreateDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.CreateDirectoryResponse>;
    /**
     * Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.
     */
    createLogSubscription(req: operations.CreateLogSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateLogSubscriptionResponse>;
    /**
     * <p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
     */
    createMicrosoftAD(req: operations.CreateMicrosoftADRequest, config?: AxiosRequestConfig): Promise<operations.CreateMicrosoftADResponse>;
    /**
     * <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>
     */
    createSnapshot(req: operations.CreateSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateSnapshotResponse>;
    /**
     * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
     */
    createTrust(req: operations.CreateTrustRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrustResponse>;
    /**
     * Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.
     */
    deleteConditionalForwarder(req: operations.DeleteConditionalForwarderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConditionalForwarderResponse>;
    /**
     * <p>Deletes an Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
     */
    deleteDirectory(req: operations.DeleteDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDirectoryResponse>;
    /**
     * Deletes the specified log subscription.
     */
    deleteLogSubscription(req: operations.DeleteLogSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLogSubscriptionResponse>;
    /**
     * Deletes a directory snapshot.
     */
    deleteSnapshot(req: operations.DeleteSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSnapshotResponse>;
    /**
     * Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.
     */
    deleteTrust(req: operations.DeleteTrustRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrustResponse>;
    /**
     * Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.
     */
    deregisterCertificate(req: operations.DeregisterCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterCertificateResponse>;
    /**
     * Removes the specified directory as a publisher to the specified Amazon SNS topic.
     */
    deregisterEventTopic(req: operations.DeregisterEventTopicRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterEventTopicResponse>;
    /**
     * Displays information about the certificate registered for secure LDAP or client certificate authentication.
     */
    describeCertificate(req: operations.DescribeCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCertificateResponse>;
    /**
     * Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported.
     */
    describeClientAuthenticationSettings(req: operations.DescribeClientAuthenticationSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeClientAuthenticationSettingsResponse>;
    /**
     * <p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
     */
    describeConditionalForwarders(req: operations.DescribeConditionalForwardersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConditionalForwardersResponse>;
    /**
     * <p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>
     */
    describeDirectories(req: operations.DescribeDirectoriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDirectoriesResponse>;
    /**
     * Provides information about any domain controllers in your directory.
     */
    describeDomainControllers(req: operations.DescribeDomainControllersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDomainControllersResponse>;
    /**
     * <p>Obtains information about which Amazon SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
     */
    describeEventTopics(req: operations.DescribeEventTopicsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventTopicsResponse>;
    /**
     * Describes the status of LDAP security for the specified directory.
     */
    describeLDAPSSettings(req: operations.DescribeLDAPSSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLDAPSSettingsResponse>;
    /**
     * Provides information about the Regions that are configured for multi-Region replication.
     */
    describeRegions(req: operations.DescribeRegionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRegionsResponse>;
    /**
     * Retrieves information about the configurable settings for the specified directory.
     */
    describeSettings(req: operations.DescribeSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSettingsResponse>;
    /**
     * Returns the shared directories in your account.
     */
    describeSharedDirectories(req: operations.DescribeSharedDirectoriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSharedDirectoriesResponse>;
    /**
     * <p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>
     */
    describeSnapshots(req: operations.DescribeSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSnapshotsResponse>;
    /**
     * <p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
     */
    describeTrusts(req: operations.DescribeTrustsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTrustsResponse>;
    /**
     *  Describes the updates of a directory for a particular update type.
     */
    describeUpdateDirectory(req: operations.DescribeUpdateDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUpdateDirectoryResponse>;
    /**
     * Disables alternative client authentication methods for the specified directory.
     */
    disableClientAuthentication(req: operations.DisableClientAuthenticationRequest, config?: AxiosRequestConfig): Promise<operations.DisableClientAuthenticationResponse>;
    /**
     * Deactivates LDAP secure calls for the specified directory.
     */
    disableLDAPS(req: operations.DisableLDAPSRequest, config?: AxiosRequestConfig): Promise<operations.DisableLDAPSResponse>;
    /**
     * Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
     */
    disableRadius(req: operations.DisableRadiusRequest, config?: AxiosRequestConfig): Promise<operations.DisableRadiusResponse>;
    /**
     * Disables single-sign on for a directory.
     */
    disableSso(req: operations.DisableSsoRequest, config?: AxiosRequestConfig): Promise<operations.DisableSsoResponse>;
    /**
     * Enables alternative client authentication methods for the specified directory.
     */
    enableClientAuthentication(req: operations.EnableClientAuthenticationRequest, config?: AxiosRequestConfig): Promise<operations.EnableClientAuthenticationResponse>;
    /**
     * Activates the switch for the specific directory to always use LDAP secure calls.
     */
    enableLDAPS(req: operations.EnableLDAPSRequest, config?: AxiosRequestConfig): Promise<operations.EnableLDAPSResponse>;
    /**
     * Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
     */
    enableRadius(req: operations.EnableRadiusRequest, config?: AxiosRequestConfig): Promise<operations.EnableRadiusResponse>;
    /**
     * Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.
     */
    enableSso(req: operations.EnableSsoRequest, config?: AxiosRequestConfig): Promise<operations.EnableSsoResponse>;
    /**
     * Obtains directory limit information for the current Region.
     */
    getDirectoryLimits(req: operations.GetDirectoryLimitsRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectoryLimitsResponse>;
    /**
     * Obtains the manual snapshot limits for a directory.
     */
    getSnapshotLimits(req: operations.GetSnapshotLimitsRequest, config?: AxiosRequestConfig): Promise<operations.GetSnapshotLimitsResponse>;
    /**
     * For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.
     */
    listCertificates(req: operations.ListCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.ListCertificatesResponse>;
    /**
     * Lists the address blocks that you have added to a directory.
     */
    listIpRoutes(req: operations.ListIpRoutesRequest, config?: AxiosRequestConfig): Promise<operations.ListIpRoutesResponse>;
    /**
     * Lists the active log subscriptions for the Amazon Web Services account.
     */
    listLogSubscriptions(req: operations.ListLogSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.ListLogSubscriptionsResponse>;
    /**
     * Lists all schema extensions applied to a Microsoft AD Directory.
     */
    listSchemaExtensions(req: operations.ListSchemaExtensionsRequest, config?: AxiosRequestConfig): Promise<operations.ListSchemaExtensionsResponse>;
    /**
     * Lists all tags on a directory.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Registers a certificate for a secure LDAP or client certificate authentication.
     */
    registerCertificate(req: operations.RegisterCertificateRequest, config?: AxiosRequestConfig): Promise<operations.RegisterCertificateResponse>;
    /**
     * Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.
     */
    registerEventTopic(req: operations.RegisterEventTopicRequest, config?: AxiosRequestConfig): Promise<operations.RegisterEventTopicResponse>;
    /**
     * Rejects a directory sharing request that was sent from the directory owner account.
     */
    rejectSharedDirectory(req: operations.RejectSharedDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.RejectSharedDirectoryResponse>;
    /**
     * Removes IP address blocks from a directory.
     */
    removeIpRoutes(req: operations.RemoveIpRoutesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveIpRoutesResponse>;
    /**
     * Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the <code>DeleteDirectory</code> API.
     */
    removeRegion(req: operations.RemoveRegionRequest, config?: AxiosRequestConfig): Promise<operations.RemoveRegionResponse>;
    /**
     * Removes tags from a directory.
     */
    removeTagsFromResource(req: operations.RemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.RemoveTagsFromResourceResponse>;
    /**
     * <p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>Amazon Web Services Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration Guide</i>.</p> </li> </ul>
     */
    resetUserPassword(req: operations.ResetUserPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetUserPasswordResponse>;
    /**
     * <p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>
     */
    restoreFromSnapshot(req: operations.RestoreFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.RestoreFromSnapshotResponse>;
    /**
     * <p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p> <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>
     */
    shareDirectory(req: operations.ShareDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.ShareDirectoryResponse>;
    /**
     * Applies a schema extension to a Microsoft AD directory.
     */
    startSchemaExtension(req: operations.StartSchemaExtensionRequest, config?: AxiosRequestConfig): Promise<operations.StartSchemaExtensionResponse>;
    /**
     * Stops the directory sharing between the directory owner and consumer accounts.
     */
    unshareDirectory(req: operations.UnshareDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.UnshareDirectoryResponse>;
    /**
     * Updates a conditional forwarder that has been set up for your Amazon Web Services directory.
     */
    updateConditionalForwarder(req: operations.UpdateConditionalForwarderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConditionalForwarderResponse>;
    /**
     *  Updates the directory for a particular update type.
     */
    updateDirectorySetup(req: operations.UpdateDirectorySetupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDirectorySetupResponse>;
    /**
     * Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
     */
    updateNumberOfDomainControllers(req: operations.UpdateNumberOfDomainControllersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNumberOfDomainControllersResponse>;
    /**
     * Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.
     */
    updateRadius(req: operations.UpdateRadiusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRadiusResponse>;
    /**
     * Updates the configurable settings for the specified directory.
     */
    updateSettings(req: operations.UpdateSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingsResponse>;
    /**
     * Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.
     */
    updateTrust(req: operations.UpdateTrustRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTrustResponse>;
    /**
     * <p>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</p>
     */
    verifyTrust(req: operations.VerifyTrustRequest, config?: AxiosRequestConfig): Promise<operations.VerifyTrustResponse>;
}
