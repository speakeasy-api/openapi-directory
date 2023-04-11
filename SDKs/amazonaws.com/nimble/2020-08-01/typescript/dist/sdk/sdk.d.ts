import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://nimble.{region}.amazonaws.com", "https://nimble.{region}.amazonaws.com", "http://nimble.{region}.amazonaws.com.cn", "https://nimble.{region}.amazonaws.com.cn"];
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
 * <p>Welcome to the Amazon Nimble Studio API reference. This API reference provides methods, schema, resources, parameters, and more to help you get the most out of Nimble Studio.</p> <p>Nimble Studio is a virtual studio that empowers visual effects, animation, and interactive content teams to create content securely within a scalable, private cloud service.</p>
 *
 * @see {@link https://docs.aws.amazon.com/nimble/} - Amazon Web Services documentation
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
     * Accept EULAs.
     */
    acceptEulas(req: operations.AcceptEulasRequest, config?: AxiosRequestConfig): Promise<operations.AcceptEulasResponse>;
    /**
     * Create a launch profile.
     */
    createLaunchProfile(req: operations.CreateLaunchProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateLaunchProfileResponse>;
    /**
     * Creates a streaming image resource in a studio.
     */
    createStreamingImage(req: operations.CreateStreamingImageRequest, config?: AxiosRequestConfig): Promise<operations.CreateStreamingImageResponse>;
    /**
     * <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in the <code>READY</code> state.</p>
     */
    createStreamingSession(req: operations.CreateStreamingSessionRequest, config?: AxiosRequestConfig): Promise<operations.CreateStreamingSessionResponse>;
    /**
     * <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in the <code>READY</code> state.</p>
     */
    createStreamingSessionStream(req: operations.CreateStreamingSessionStreamRequest, config?: AxiosRequestConfig): Promise<operations.CreateStreamingSessionStreamResponse>;
    /**
     * <p>Create a new studio.</p> <p>When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the <code>StudioEncryptionConfiguration</code>.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling <code>CreateStudio</code> to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
     */
    createStudio(req: operations.CreateStudioRequest, config?: AxiosRequestConfig): Promise<operations.CreateStudioResponse>;
    /**
     * Creates a studio component resource.
     */
    createStudioComponent(req: operations.CreateStudioComponentRequest, config?: AxiosRequestConfig): Promise<operations.CreateStudioComponentResponse>;
    /**
     * Permanently delete a launch profile.
     */
    deleteLaunchProfile(req: operations.DeleteLaunchProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLaunchProfileResponse>;
    /**
     * Delete a user from launch profile membership.
     */
    deleteLaunchProfileMember(req: operations.DeleteLaunchProfileMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLaunchProfileMemberResponse>;
    /**
     * Delete streaming image.
     */
    deleteStreamingImage(req: operations.DeleteStreamingImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStreamingImageResponse>;
    /**
     * <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a <code>DELETED</code> state.</p> <p>A streaming session will count against your streaming session quota until it is marked <code>DELETED</code>.</p>
     */
    deleteStreamingSession(req: operations.DeleteStreamingSessionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStreamingSessionResponse>;
    /**
     * Delete a studio resource.
     */
    deleteStudio(req: operations.DeleteStudioRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudioResponse>;
    /**
     * Deletes a studio component resource.
     */
    deleteStudioComponent(req: operations.DeleteStudioComponentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudioComponentResponse>;
    /**
     * Delete a user from studio membership.
     */
    deleteStudioMember(req: operations.DeleteStudioMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudioMemberResponse>;
    /**
     * Get EULA.
     */
    getEula(req: operations.GetEulaRequest, config?: AxiosRequestConfig): Promise<operations.GetEulaResponse>;
    /**
     * Get a launch profile.
     */
    getLaunchProfile(req: operations.GetLaunchProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetLaunchProfileResponse>;
    /**
     * Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.
     */
    getLaunchProfileDetails(req: operations.GetLaunchProfileDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetLaunchProfileDetailsResponse>;
    /**
     * Get a launch profile initialization.
     */
    getLaunchProfileInitialization(req: operations.GetLaunchProfileInitializationRequest, config?: AxiosRequestConfig): Promise<operations.GetLaunchProfileInitializationResponse>;
    /**
     * Get a user persona in launch profile membership.
     */
    getLaunchProfileMember(req: operations.GetLaunchProfileMemberRequest, config?: AxiosRequestConfig): Promise<operations.GetLaunchProfileMemberResponse>;
    /**
     * Get streaming image.
     */
    getStreamingImage(req: operations.GetStreamingImageRequest, config?: AxiosRequestConfig): Promise<operations.GetStreamingImageResponse>;
    /**
     * <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
     */
    getStreamingSession(req: operations.GetStreamingSessionRequest, config?: AxiosRequestConfig): Promise<operations.GetStreamingSessionResponse>;
    /**
     * <p>Gets <code>StreamingSessionBackup</code> resource.</p> <p>Invoke this operation to poll for a streaming session backup while stopping a streaming session.</p>
     */
    getStreamingSessionBackup(req: operations.GetStreamingSessionBackupRequest, config?: AxiosRequestConfig): Promise<operations.GetStreamingSessionBackupResponse>;
    /**
     * <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking <code>CreateStreamingSessionStream</code>.</p> <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state, the url property will contain a stream to be used with the DCV streaming client.</p>
     */
    getStreamingSessionStream(req: operations.GetStreamingSessionStreamRequest, config?: AxiosRequestConfig): Promise<operations.GetStreamingSessionStreamResponse>;
    /**
     * Get a studio resource.
     */
    getStudio(req: operations.GetStudioRequest, config?: AxiosRequestConfig): Promise<operations.GetStudioResponse>;
    /**
     * Gets a studio component resource.
     */
    getStudioComponent(req: operations.GetStudioComponentRequest, config?: AxiosRequestConfig): Promise<operations.GetStudioComponentResponse>;
    /**
     * Get a user's membership in a studio.
     */
    getStudioMember(req: operations.GetStudioMemberRequest, config?: AxiosRequestConfig): Promise<operations.GetStudioMemberResponse>;
    /**
     * List EULA acceptances.
     */
    listEulaAcceptances(req: operations.ListEulaAcceptancesRequest, config?: AxiosRequestConfig): Promise<operations.ListEulaAcceptancesResponse>;
    /**
     * List EULAs.
     */
    listEulas(req: operations.ListEulasRequest, config?: AxiosRequestConfig): Promise<operations.ListEulasResponse>;
    /**
     * Get all users in a given launch profile membership.
     */
    listLaunchProfileMembers(req: operations.ListLaunchProfileMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListLaunchProfileMembersResponse>;
    /**
     * List all the launch profiles a studio.
     */
    listLaunchProfiles(req: operations.ListLaunchProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListLaunchProfilesResponse>;
    /**
     * <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>
     */
    listStreamingImages(req: operations.ListStreamingImagesRequest, config?: AxiosRequestConfig): Promise<operations.ListStreamingImagesResponse>;
    /**
     * Lists the backups of a streaming session in a studio.
     */
    listStreamingSessionBackups(req: operations.ListStreamingSessionBackupsRequest, config?: AxiosRequestConfig): Promise<operations.ListStreamingSessionBackupsResponse>;
    /**
     * Lists the streaming sessions in a studio.
     */
    listStreamingSessions(req: operations.ListStreamingSessionsRequest, config?: AxiosRequestConfig): Promise<operations.ListStreamingSessionsResponse>;
    /**
     * Lists the <code>StudioComponents</code> in a studio.
     */
    listStudioComponents(req: operations.ListStudioComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ListStudioComponentsResponse>;
    /**
     * <p>Get all users in a given studio membership.</p> <note> <p> <code>ListStudioMembers</code> only returns admin members.</p> </note>
     */
    listStudioMembers(req: operations.ListStudioMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListStudioMembersResponse>;
    /**
     * List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.
     */
    listStudios(req: operations.ListStudiosRequest, config?: AxiosRequestConfig): Promise<operations.ListStudiosResponse>;
    /**
     * <p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Add/update users with given persona to launch profile membership.
     */
    putLaunchProfileMembers(req: operations.PutLaunchProfileMembersRequest, config?: AxiosRequestConfig): Promise<operations.PutLaunchProfileMembersResponse>;
    /**
     * Add/update users with given persona to studio membership.
     */
    putStudioMembers(req: operations.PutStudioMembersRequest, config?: AxiosRequestConfig): Promise<operations.PutStudioMembersResponse>;
    /**
     * Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code> state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the <code>STOPPED</code> and <code>READY</code> states.
     */
    startStreamingSession(req: operations.StartStreamingSessionRequest, config?: AxiosRequestConfig): Promise<operations.StartStreamingSessionResponse>;
    /**
     * <p>Repairs the IAM Identity Center configuration for a given studio.</p> <p>If the studio has a valid IAM Identity Center configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid IAM Identity Center configuration currently associated with it, then a new IAM Identity Center application is created for the studio and the studio is changed to the <code>READY</code> state.</p> <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
     */
    startStudioSSOConfigurationRepair(req: operations.StartStudioSSOConfigurationRepairRequest, config?: AxiosRequestConfig): Promise<operations.StartStudioSSOConfigurationRepairResponse>;
    /**
     * Transitions sessions from the <code>READY</code> state into the <code>STOPPED</code> state. The <code>STOP_IN_PROGRESS</code> state is the intermediate state between the <code>READY</code> and <code>STOPPED</code> states.
     */
    stopStreamingSession(req: operations.StopStreamingSessionRequest, config?: AxiosRequestConfig): Promise<operations.StopStreamingSessionResponse>;
    /**
     * Creates tags for a resource, given its ARN.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Deletes the tags for a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Update a launch profile.
     */
    updateLaunchProfile(req: operations.UpdateLaunchProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLaunchProfileResponse>;
    /**
     * Update a user persona in launch profile membership.
     */
    updateLaunchProfileMember(req: operations.UpdateLaunchProfileMemberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLaunchProfileMemberResponse>;
    /**
     * Update streaming image.
     */
    updateStreamingImage(req: operations.UpdateStreamingImageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStreamingImageResponse>;
    /**
     * <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
     */
    updateStudio(req: operations.UpdateStudioRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStudioResponse>;
    /**
     * Updates a studio component resource.
     */
    updateStudioComponent(req: operations.UpdateStudioComponentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStudioComponentResponse>;
}
