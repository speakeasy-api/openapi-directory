import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://wellarchitected.{region}.amazonaws.com", "https://wellarchitected.{region}.amazonaws.com", "http://wellarchitected.{region}.amazonaws.com.cn", "https://wellarchitected.{region}.amazonaws.com.cn"];
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
 * <fullname>Well-Architected Tool</fullname> <p>This is the <i>Well-Architected Tool API Reference</i>. The WA Tool API provides programmatic access to the <a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> in the <a href="https://console.aws.amazon.com/wellarchitected">Amazon Web Services Management Console</a>. For information about the Well-Architected Tool, see the <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Well-Architected Tool User Guide</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/wellarchitected/} - Amazon Web Services documentation
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
     * <p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>
     */
    associateLenses(req: operations.AssociateLensesRequest, config?: AxiosRequestConfig): Promise<operations.AssociateLensesResponse>;
    /**
     * <p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, IAM users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Shared access to a lens is not removed until the lens invitation is deleted.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
     */
    createLensShare(req: operations.CreateLensShareRequest, config?: AxiosRequestConfig): Promise<operations.CreateLensShareResponse>;
    /**
     * <p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>After a lens has been imported, create a new lens version to publish it. The owner of a lens can share the lens with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>
     */
    createLensVersion(req: operations.CreateLensVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateLensVersionResponse>;
    /**
     * Create a milestone for an existing workload.
     */
    createMilestone(req: operations.CreateMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.CreateMilestoneResponse>;
    /**
     * <p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, IAM users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>
     */
    createWorkload(req: operations.CreateWorkloadRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkloadResponse>;
    /**
     * <p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>
     */
    createWorkloadShare(req: operations.CreateWorkloadShareRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkloadShareResponse>;
    /**
     * <p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and IAM users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
     */
    deleteLens(req: operations.DeleteLensRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLensResponse>;
    /**
     * <p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, IAM users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
     */
    deleteLensShare(req: operations.DeleteLensShareRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLensShareResponse>;
    /**
     * Delete an existing workload.
     */
    deleteWorkload(req: operations.DeleteWorkloadRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkloadResponse>;
    /**
     * Delete a workload share.
     */
    deleteWorkloadShare(req: operations.DeleteWorkloadShareRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkloadShareResponse>;
    /**
     * <p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>
     */
    disassociateLenses(req: operations.DisassociateLensesRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateLensesResponse>;
    /**
     * <p>Export an existing lens.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>. Only the owner of a lens can export it. </p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
     */
    exportLens(req: operations.ExportLensRequest, config?: AxiosRequestConfig): Promise<operations.ExportLensResponse>;
    /**
     * Get the answer to a specific question in a workload review.
     */
    getAnswer(req: operations.GetAnswerRequest, config?: AxiosRequestConfig): Promise<operations.GetAnswerResponse>;
    /**
     * Get an existing lens.
     */
    getLens(req: operations.GetLensRequest, config?: AxiosRequestConfig): Promise<operations.GetLensResponse>;
    /**
     * Get lens review.
     */
    getLensReview(req: operations.GetLensReviewRequest, config?: AxiosRequestConfig): Promise<operations.GetLensReviewResponse>;
    /**
     * Get lens review report.
     */
    getLensReviewReport(req: operations.GetLensReviewReportRequest, config?: AxiosRequestConfig): Promise<operations.GetLensReviewReportResponse>;
    /**
     * Get lens version differences.
     */
    getLensVersionDifference(req: operations.GetLensVersionDifferenceRequest, config?: AxiosRequestConfig): Promise<operations.GetLensVersionDifferenceResponse>;
    /**
     * Get a milestone for an existing workload.
     */
    getMilestone(req: operations.GetMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.GetMilestoneResponse>;
    /**
     * Get an existing workload.
     */
    getWorkload(req: operations.GetWorkloadRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkloadResponse>;
    /**
     * <p>Import a new lens.</p> <p>The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with <a>CreateLensVersion</a> </p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
     */
    importLens(req: operations.ImportLensRequest, config?: AxiosRequestConfig): Promise<operations.ImportLensResponse>;
    /**
     * List of answers.
     */
    listAnswers(req: operations.ListAnswersRequest, config?: AxiosRequestConfig): Promise<operations.ListAnswersResponse>;
    /**
     * List of Trusted Advisor check details by account related to the workload.
     */
    listCheckDetails(req: operations.ListCheckDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ListCheckDetailsResponse>;
    /**
     * List of Trusted Advisor checks summarized for all accounts related to the workload.
     */
    listCheckSummaries(req: operations.ListCheckSummariesRequest, config?: AxiosRequestConfig): Promise<operations.ListCheckSummariesResponse>;
    /**
     * List lens review improvements.
     */
    listLensReviewImprovements(req: operations.ListLensReviewImprovementsRequest, config?: AxiosRequestConfig): Promise<operations.ListLensReviewImprovementsResponse>;
    /**
     * List lens reviews.
     */
    listLensReviews(req: operations.ListLensReviewsRequest, config?: AxiosRequestConfig): Promise<operations.ListLensReviewsResponse>;
    /**
     * List the lens shares associated with the lens.
     */
    listLensShares(req: operations.ListLensSharesRequest, config?: AxiosRequestConfig): Promise<operations.ListLensSharesResponse>;
    /**
     * List the available lenses.
     */
    listLenses(req: operations.ListLensesRequest, config?: AxiosRequestConfig): Promise<operations.ListLensesResponse>;
    /**
     * List all milestones for an existing workload.
     */
    listMilestones(req: operations.ListMilestonesRequest, config?: AxiosRequestConfig): Promise<operations.ListMilestonesResponse>;
    /**
     * List lens notifications.
     */
    listNotifications(req: operations.ListNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.ListNotificationsResponse>;
    /**
     * List the workload invitations.
     */
    listShareInvitations(req: operations.ListShareInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.ListShareInvitationsResponse>;
    /**
     * <p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * List the workload shares associated with the workload.
     */
    listWorkloadShares(req: operations.ListWorkloadSharesRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkloadSharesResponse>;
    /**
     * List workloads. Paginated.
     */
    listWorkloads(req: operations.ListWorkloadsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkloadsResponse>;
    /**
     * <p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * <p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Update the answer to a specific question in a workload review.
     */
    updateAnswer(req: operations.UpdateAnswerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnswerResponse>;
    /**
     * Updates whether the Amazon Web Services account is opted into organization sharing features.
     */
    updateGlobalSettings(req: operations.UpdateGlobalSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGlobalSettingsResponse>;
    /**
     * Update lens review.
     */
    updateLensReview(req: operations.UpdateLensReviewRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLensReviewResponse>;
    /**
     * <p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>
     */
    updateShareInvitation(req: operations.UpdateShareInvitationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateShareInvitationResponse>;
    /**
     * Update an existing workload.
     */
    updateWorkload(req: operations.UpdateWorkloadRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkloadResponse>;
    /**
     * Update a workload share.
     */
    updateWorkloadShare(req: operations.UpdateWorkloadShareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkloadShareResponse>;
    /**
     * Upgrade lens review.
     */
    upgradeLensReview(req: operations.UpgradeLensReviewRequest, config?: AxiosRequestConfig): Promise<operations.UpgradeLensReviewResponse>;
}
