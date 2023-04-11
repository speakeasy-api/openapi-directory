import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://appstream2.{region}.amazonaws.com", "https://appstream2.{region}.amazonaws.com", "http://appstream2.{region}.amazonaws.com.cn", "https://appstream2.{region}.amazonaws.com.cn"];
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
 * <fullname>Amazon AppStream 2.0</fullname> <p>This is the <i>Amazon AppStream 2.0 API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p> <note> <p>You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p> </note> <p>To learn more about AppStream 2.0, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/appstream2">Amazon AppStream 2.0 product page</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/documentation/appstream2">Amazon AppStream 2.0 documentation</a> </p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/appstream2/} - Amazon Web Services documentation
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
     * Associates the specified application with the specified fleet. This is only supported for Elastic fleets.
     */
    associateApplicationFleet(req: operations.AssociateApplicationFleetRequest, config?: AxiosRequestConfig): Promise<operations.AssociateApplicationFleetResponse>;
    /**
     * Associates an application to entitle.
     */
    associateApplicationToEntitlement(req: operations.AssociateApplicationToEntitlementRequest, config?: AxiosRequestConfig): Promise<operations.AssociateApplicationToEntitlementResponse>;
    /**
     * Associates the specified fleet with the specified stack.
     */
    associateFleet(req: operations.AssociateFleetRequest, config?: AxiosRequestConfig): Promise<operations.AssociateFleetResponse>;
    /**
     * Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.
     */
    batchAssociateUserStack(req: operations.BatchAssociateUserStackRequest, config?: AxiosRequestConfig): Promise<operations.BatchAssociateUserStackResponse>;
    /**
     * Disassociates the specified users from the specified stacks.
     */
    batchDisassociateUserStack(req: operations.BatchDisassociateUserStackRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisassociateUserStackResponse>;
    /**
     * Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.
     */
    copyImage(req: operations.CopyImageRequest, config?: AxiosRequestConfig): Promise<operations.CopyImageResponse>;
    /**
     * <p>Creates an app block.</p> <p>App blocks are an Amazon AppStream 2.0 resource that stores the details about the virtual hard disk in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. The virtual hard disk includes the application binaries and other files necessary to launch your applications. Multiple applications can be assigned to a single app block.</p> <p>This is only supported for Elastic fleets.</p>
     */
    createAppBlock(req: operations.CreateAppBlockRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppBlockResponse>;
    /**
     * <p>Creates an application.</p> <p>Applications are an Amazon AppStream 2.0 resource that stores the details about how to launch applications on Elastic fleet streaming instances. An application consists of the launch details, icon, and display name. Applications are associated with an app block that contains the application binaries and other files. The applications assigned to an Elastic fleet are the applications users can launch. </p> <p>This is only supported for Elastic fleets.</p>
     */
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * Creates a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
     */
    createDirectoryConfig(req: operations.CreateDirectoryConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateDirectoryConfigResponse>;
    /**
     * Creates a new entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. Amazon AppStream 2.0 user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.
     */
    createEntitlement(req: operations.CreateEntitlementRequest, config?: AxiosRequestConfig): Promise<operations.CreateEntitlementResponse>;
    /**
     * Creates a fleet. A fleet consists of streaming instances that your users access for their applications and desktops.
     */
    createFleet(req: operations.CreateFleetRequest, config?: AxiosRequestConfig): Promise<operations.CreateFleetResponse>;
    /**
     * <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p> <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
     */
    createImageBuilder(req: operations.CreateImageBuilderRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageBuilderResponse>;
    /**
     * Creates a URL to start an image builder streaming session.
     */
    createImageBuilderStreamingURL(req: operations.CreateImageBuilderStreamingURLRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageBuilderStreamingURLResponse>;
    /**
     * Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations.
     */
    createStack(req: operations.CreateStackRequest, config?: AxiosRequestConfig): Promise<operations.CreateStackResponse>;
    /**
     * Creates a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup.
     */
    createStreamingURL(req: operations.CreateStreamingURLRequest, config?: AxiosRequestConfig): Promise<operations.CreateStreamingURLResponse>;
    /**
     * <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p> <p>For more information, see the "Update an Image by Using Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    createUpdatedImage(req: operations.CreateUpdatedImageRequest, config?: AxiosRequestConfig): Promise<operations.CreateUpdatedImageResponse>;
    /**
     * Creates a usage report subscription. Usage reports are generated daily.
     */
    createUsageReportSubscription(req: operations.CreateUsageReportSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateUsageReportSubscriptionResponse>;
    /**
     * Creates a new user in the user pool.
     */
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * Deletes an app block.
     */
    deleteAppBlock(req: operations.DeleteAppBlockRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppBlockResponse>;
    /**
     * Deletes an application.
     */
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * Deletes the specified Directory Config object from AppStream 2.0. This object includes the information required to join streaming instances to an Active Directory domain.
     */
    deleteDirectoryConfig(req: operations.DeleteDirectoryConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDirectoryConfigResponse>;
    /**
     * Deletes the specified entitlement.
     */
    deleteEntitlement(req: operations.DeleteEntitlementRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEntitlementResponse>;
    /**
     * Deletes the specified fleet.
     */
    deleteFleet(req: operations.DeleteFleetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFleetResponse>;
    /**
     * Deletes the specified image. You cannot delete an image when it is in use. After you delete an image, you cannot provision new capacity using the image.
     */
    deleteImage(req: operations.DeleteImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageResponse>;
    /**
     * Deletes the specified image builder and releases the capacity.
     */
    deleteImageBuilder(req: operations.DeleteImageBuilderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageBuilderResponse>;
    /**
     * Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.
     */
    deleteImagePermissions(req: operations.DeleteImagePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImagePermissionsResponse>;
    /**
     * Deletes the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released.
     */
    deleteStack(req: operations.DeleteStackRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStackResponse>;
    /**
     * Disables usage report generation.
     */
    deleteUsageReportSubscription(req: operations.DeleteUsageReportSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsageReportSubscriptionResponse>;
    /**
     * Deletes a user from the user pool.
     */
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Retrieves a list that describes one or more app blocks.
     */
    describeAppBlocks(req: operations.DescribeAppBlocksRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAppBlocksResponse>;
    /**
     * Retrieves a list that describes one or more application fleet associations. Either ApplicationArn or FleetName must be specified.
     */
    describeApplicationFleetAssociations(req: operations.DescribeApplicationFleetAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeApplicationFleetAssociationsResponse>;
    /**
     * Retrieves a list that describes one or more applications.
     */
    describeApplications(req: operations.DescribeApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeApplicationsResponse>;
    /**
     * <p>Retrieves a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. These objects include the configuration information required to join fleets and image builders to Microsoft Active Directory domains. </p> <p>Although the response syntax in this topic includes the account password, this password is not returned in the actual response.</p>
     */
    describeDirectoryConfigs(req: operations.DescribeDirectoryConfigsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDirectoryConfigsResponse>;
    /**
     * Retrieves a list that describes one of more entitlements.
     */
    describeEntitlements(req: operations.DescribeEntitlementsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEntitlementsResponse>;
    /**
     * Retrieves a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described.
     */
    describeFleets(req: operations.DescribeFleetsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFleetsResponse>;
    /**
     * Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.
     */
    describeImageBuilders(req: operations.DescribeImageBuildersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImageBuildersResponse>;
    /**
     * Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own.
     */
    describeImagePermissions(req: operations.DescribeImagePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImagePermissionsResponse>;
    /**
     * Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.
     */
    describeImages(req: operations.DescribeImagesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImagesResponse>;
    /**
     * Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet, only streaming sessions for that user are described. If an authentication type is not provided, the default is to authenticate users using a streaming URL.
     */
    describeSessions(req: operations.DescribeSessionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSessionsResponse>;
    /**
     * Retrieves a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described.
     */
    describeStacks(req: operations.DescribeStacksRequest, config?: AxiosRequestConfig): Promise<operations.DescribeStacksResponse>;
    /**
     * Retrieves a list that describes one or more usage report subscriptions.
     */
    describeUsageReportSubscriptions(req: operations.DescribeUsageReportSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUsageReportSubscriptionsResponse>;
    /**
     * <p>Retrieves a list that describes the UserStackAssociation objects. You must specify either or both of the following:</p> <ul> <li> <p>The stack name</p> </li> <li> <p>The user name (email address of the user associated with the stack) and the authentication type for the user</p> </li> </ul>
     */
    describeUserStackAssociations(req: operations.DescribeUserStackAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserStackAssociationsResponse>;
    /**
     * Retrieves a list that describes one or more specified users in the user pool.
     */
    describeUsers(req: operations.DescribeUsersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUsersResponse>;
    /**
     * Disables the specified user in the user pool. Users can't sign in to AppStream 2.0 until they are re-enabled. This action does not delete the user.
     */
    disableUser(req: operations.DisableUserRequest, config?: AxiosRequestConfig): Promise<operations.DisableUserResponse>;
    /**
     * Disassociates the specified application from the fleet.
     */
    disassociateApplicationFleet(req: operations.DisassociateApplicationFleetRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateApplicationFleetResponse>;
    /**
     * Deletes the specified application from the specified entitlement.
     */
    disassociateApplicationFromEntitlement(req: operations.DisassociateApplicationFromEntitlementRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateApplicationFromEntitlementResponse>;
    /**
     * Disassociates the specified fleet from the specified stack.
     */
    disassociateFleet(req: operations.DisassociateFleetRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateFleetResponse>;
    /**
     * Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.
     */
    enableUser(req: operations.EnableUserRequest, config?: AxiosRequestConfig): Promise<operations.EnableUserResponse>;
    /**
     * Immediately stops the specified streaming session.
     */
    expireSession(req: operations.ExpireSessionRequest, config?: AxiosRequestConfig): Promise<operations.ExpireSessionResponse>;
    /**
     * Retrieves the name of the fleet that is associated with the specified stack.
     */
    listAssociatedFleets(req: operations.ListAssociatedFleetsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociatedFleetsResponse>;
    /**
     * Retrieves the name of the stack with which the specified fleet is associated.
     */
    listAssociatedStacks(req: operations.ListAssociatedStacksRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociatedStacksResponse>;
    /**
     * Retrieves a list of entitled applications.
     */
    listEntitledApplications(req: operations.ListEntitledApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListEntitledApplicationsResponse>;
    /**
     * <p>Retrieves a list of all tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Starts the specified fleet.
     */
    startFleet(req: operations.StartFleetRequest, config?: AxiosRequestConfig): Promise<operations.StartFleetResponse>;
    /**
     * Starts the specified image builder.
     */
    startImageBuilder(req: operations.StartImageBuilderRequest, config?: AxiosRequestConfig): Promise<operations.StartImageBuilderResponse>;
    /**
     * Stops the specified fleet.
     */
    stopFleet(req: operations.StopFleetRequest, config?: AxiosRequestConfig): Promise<operations.StopFleetResponse>;
    /**
     * Stops the specified image builder.
     */
    stopImageBuilder(req: operations.StopImageBuilderRequest, config?: AxiosRequestConfig): Promise<operations.StopImageBuilderResponse>;
    /**
     * <p>Adds or overwrites one or more tags for the specified AppStream 2.0 resource. You can tag AppStream 2.0 image builders, images, fleets, and stacks.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>. To disassociate tags from your resources, use <a>UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * <p>Disassociates one or more specified tags from the specified AppStream 2.0 resource.</p> <p>To list the current tags for your resources, use <a>ListTagsForResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the specified application.
     */
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
    /**
     * Updates the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
     */
    updateDirectoryConfig(req: operations.UpdateDirectoryConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDirectoryConfigResponse>;
    /**
     * Updates the specified entitlement.
     */
    updateEntitlement(req: operations.UpdateEntitlementRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEntitlementResponse>;
    /**
     * <p>Updates the specified fleet.</p> <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except the fleet name.</p> <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based on the fleet type:</p> <ul> <li> <p>Always-On and On-Demand fleet types</p> <p>You can update the <code>DisplayName</code>, <code>ComputeCapacity</code>, <code>ImageARN</code>, <code>ImageName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, and <code>DisconnectTimeoutInSeconds</code> attributes.</p> </li> <li> <p>Elastic fleet type</p> <p>You can update the <code>DisplayName</code>, <code>IdleDisconnectTimeoutInSeconds</code>, <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code> and <code>UsbDeviceFilterStrings</code> attributes.</p> </li> </ul> <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>
     */
    updateFleet(req: operations.UpdateFleetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFleetResponse>;
    /**
     * Adds or updates permissions for the specified private image.
     */
    updateImagePermissions(req: operations.UpdateImagePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateImagePermissionsResponse>;
    /**
     * Updates the specified fields for the specified stack.
     */
    updateStack(req: operations.UpdateStackRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStackResponse>;
}
