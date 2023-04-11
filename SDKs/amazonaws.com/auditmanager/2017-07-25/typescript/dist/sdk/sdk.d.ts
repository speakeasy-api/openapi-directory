import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://auditmanager.{region}.amazonaws.com", "https://auditmanager.{region}.amazonaws.com", "http://auditmanager.{region}.amazonaws.com.cn", "https://auditmanager.{region}.amazonaws.com.cn"];
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
 * <p>Welcome to the Audit Manager API reference. This guide is for developers who need detailed information about the Audit Manager API operations, data types, and errors. </p> <p>Audit Manager is a service that provides automated evidence collection so that you can continually audit your Amazon Web Services usage. You can use it to assess the effectiveness of your controls, manage risk, and simplify compliance.</p> <p>Audit Manager provides prebuilt frameworks that structure and automate assessments for a given compliance standard. Frameworks include a prebuilt collection of controls with descriptions and testing procedures. These controls are grouped according to the requirements of the specified compliance standard or regulation. You can also customize frameworks and controls to support internal audits with specific requirements. </p> <p>Use the following links to get started with the Audit Manager API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Audit Manager API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Audit Manager data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul> <p>If you're new to Audit Manager, we recommend that you review the <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html"> Audit Manager User Guide</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/auditmanager/} - Amazon Web Services documentation
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
     *  Associates an evidence folder to an assessment report in an Audit Manager assessment.
     */
    associateAssessmentReportEvidenceFolder(req: operations.AssociateAssessmentReportEvidenceFolderRequest, config?: AxiosRequestConfig): Promise<operations.AssociateAssessmentReportEvidenceFolderResponse>;
    /**
     *  Associates a list of evidence to an assessment report in an Audit Manager assessment.
     */
    batchAssociateAssessmentReportEvidence(req: operations.BatchAssociateAssessmentReportEvidenceRequest, config?: AxiosRequestConfig): Promise<operations.BatchAssociateAssessmentReportEvidenceResponse>;
    /**
     *  Creates a batch of delegations for an assessment in Audit Manager.
     */
    batchCreateDelegationByAssessment(req: operations.BatchCreateDelegationByAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.BatchCreateDelegationByAssessmentResponse>;
    /**
     *  Deletes a batch of delegations for an assessment in Audit Manager.
     */
    batchDeleteDelegationByAssessment(req: operations.BatchDeleteDelegationByAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteDelegationByAssessmentResponse>;
    /**
     *  Disassociates a list of evidence from an assessment report in Audit Manager.
     */
    batchDisassociateAssessmentReportEvidence(req: operations.BatchDisassociateAssessmentReportEvidenceRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisassociateAssessmentReportEvidenceResponse>;
    /**
     * <p>Uploads one or more pieces of evidence to a control in an Audit Manager assessment. You can upload manual evidence from any Amazon Simple Storage Service (Amazon S3) bucket by specifying the S3 URI of the evidence. </p> <p>You must upload manual evidence to your S3 bucket before you can upload it to your assessment. For instructions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> in the <i>Amazon Simple Storage Service API Reference.</i> </p> <p>The following restrictions apply to this action:</p> <ul> <li> <p>Maximum size of an individual evidence file: 100 MB</p> </li> <li> <p>Number of daily manual evidence uploads per control: 100</p> </li> <li> <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i> </p> </li> </ul> <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and restrictions for Audit Manager</a>.</p>
     */
    batchImportEvidenceToAssessmentControl(req: operations.BatchImportEvidenceToAssessmentControlRequest, config?: AxiosRequestConfig): Promise<operations.BatchImportEvidenceToAssessmentControlResponse>;
    /**
     *  Creates an assessment in Audit Manager.
     */
    createAssessment(req: operations.CreateAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssessmentResponse>;
    /**
     *  Creates a custom framework in Audit Manager.
     */
    createAssessmentFramework(req: operations.CreateAssessmentFrameworkRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssessmentFrameworkResponse>;
    /**
     *  Creates an assessment report for the specified assessment.
     */
    createAssessmentReport(req: operations.CreateAssessmentReportRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssessmentReportResponse>;
    /**
     *  Creates a new custom control in Audit Manager.
     */
    createControl(req: operations.CreateControlRequest, config?: AxiosRequestConfig): Promise<operations.CreateControlResponse>;
    /**
     *  Deletes an assessment in Audit Manager.
     */
    deleteAssessment(req: operations.DeleteAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssessmentResponse>;
    /**
     *  Deletes a custom framework in Audit Manager.
     */
    deleteAssessmentFramework(req: operations.DeleteAssessmentFrameworkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssessmentFrameworkResponse>;
    /**
     *  Deletes a share request for a custom framework in Audit Manager.
     */
    deleteAssessmentFrameworkShare(req: operations.DeleteAssessmentFrameworkShareRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssessmentFrameworkShareResponse>;
    /**
     * <p>Deletes an assessment report in Audit Manager. </p> <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager attempts to delete the following data:</p> <ol> <li> <p>The specified assessment report that’s stored in your S3 bucket</p> </li> <li> <p>The associated metadata that’s stored in Audit Manager</p> </li> </ol> <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself. </p> <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403 (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>
     */
    deleteAssessmentReport(req: operations.DeleteAssessmentReportRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssessmentReportResponse>;
    /**
     *  Deletes a custom control in Audit Manager.
     */
    deleteControl(req: operations.DeleteControlRequest, config?: AxiosRequestConfig): Promise<operations.DeleteControlResponse>;
    /**
     * <p> Deregisters an account in Audit Manager. </p> <note> <p>Before you deregister, you can use the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html">UpdateSettings</a> API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the <code>DeregistrationPolicy</code> attribute to request the deletion of your data. </p> <p>For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>. </p> </note>
     */
    deregisterAccount(req: operations.DeregisterAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterAccountResponse>;
    /**
     * <p>Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager. </p> <p>When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward.</p> <important> <p>Keep in mind the following cleanup task if you use evidence finder:</p> <p>Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html">deletes the event data store</a>.</p> <p>This cleanup task is necessary to ensure that you don't end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don't delete it.</p> </important> <p>When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager. </p> <p>To delete your Audit Manager resource data, see the following instructions: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html">DeleteAssessment</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html">Deleting an assessment</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html">DeleteAssessmentFramework</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html">Deleting a custom framework</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html">DeleteAssessmentFrameworkShare</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html">Deleting a share request</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html">DeleteAssessmentReport</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps">Deleting an assessment report</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html">DeleteControl</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html">Deleting a custom control</a> in the <i>Audit Manager User Guide</i>)</p> </li> </ul> <p>At this time, Audit Manager doesn't provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.</p>
     */
    deregisterOrganizationAdminAccount(req: operations.DeregisterOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterOrganizationAdminAccountResponse>;
    /**
     *  Disassociates an evidence folder from the specified assessment report in Audit Manager.
     */
    disassociateAssessmentReportEvidenceFolder(req: operations.DisassociateAssessmentReportEvidenceFolderRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateAssessmentReportEvidenceFolderResponse>;
    /**
     *  Returns the registration status of an account in Audit Manager.
     */
    getAccountStatus(req: operations.GetAccountStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountStatusResponse>;
    /**
     * Returns an assessment from Audit Manager.
     */
    getAssessment(req: operations.GetAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.GetAssessmentResponse>;
    /**
     * Returns a framework from Audit Manager.
     */
    getAssessmentFramework(req: operations.GetAssessmentFrameworkRequest, config?: AxiosRequestConfig): Promise<operations.GetAssessmentFrameworkResponse>;
    /**
     *  Returns the URL of an assessment report in Audit Manager.
     */
    getAssessmentReportUrl(req: operations.GetAssessmentReportUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetAssessmentReportUrlResponse>;
    /**
     *  Returns a list of changelogs from Audit Manager.
     */
    getChangeLogs(req: operations.GetChangeLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetChangeLogsResponse>;
    /**
     *  Returns a control from Audit Manager.
     */
    getControl(req: operations.GetControlRequest, config?: AxiosRequestConfig): Promise<operations.GetControlResponse>;
    /**
     *  Returns a list of delegations from an audit owner to a delegate.
     */
    getDelegations(req: operations.GetDelegationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDelegationsResponse>;
    /**
     *  Returns evidence from Audit Manager.
     */
    getEvidence(req: operations.GetEvidenceRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceResponse>;
    /**
     *  Returns all evidence from a specified evidence folder in Audit Manager.
     */
    getEvidenceByEvidenceFolder(req: operations.GetEvidenceByEvidenceFolderRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceByEvidenceFolderResponse>;
    /**
     *  Returns an evidence folder from the specified assessment in Audit Manager.
     */
    getEvidenceFolder(req: operations.GetEvidenceFolderRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceFolderResponse>;
    /**
     *  Returns the evidence folders from a specified assessment in Audit Manager.
     */
    getEvidenceFoldersByAssessment(req: operations.GetEvidenceFoldersByAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceFoldersByAssessmentResponse>;
    /**
     *  Returns a list of evidence folders that are associated with a specified control in an Audit Manager assessment.
     */
    getEvidenceFoldersByAssessmentControl(req: operations.GetEvidenceFoldersByAssessmentControlRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceFoldersByAssessmentControlResponse>;
    /**
     * Gets the latest analytics data for all your current active assessments.
     */
    getInsights(req: operations.GetInsightsRequest, config?: AxiosRequestConfig): Promise<operations.GetInsightsResponse>;
    /**
     * Gets the latest analytics data for a specific active assessment.
     */
    getInsightsByAssessment(req: operations.GetInsightsByAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.GetInsightsByAssessmentResponse>;
    /**
     *  Returns the name of the delegated Amazon Web Services administrator account for the organization.
     */
    getOrganizationAdminAccount(req: operations.GetOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdminAccountResponse>;
    /**
     * Returns a list of all of the Amazon Web Services that you can choose to include in your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to narrow the assessment's <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.
     */
    getServicesInScope(req: operations.GetServicesInScopeRequest, config?: AxiosRequestConfig): Promise<operations.GetServicesInScopeResponse>;
    /**
     *  Returns the settings for the specified Amazon Web Services account.
     */
    getSettings(req: operations.GetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsResponse>;
    /**
     * <p>Lists the latest analytics data for controls within a specific control domain and a specific active assessment.</p> <note> <p>Control insights are listed only if the control belongs to the control domain and assessment that was specified. Moreover, the control must have collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsByAssessment</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>
     */
    listAssessmentControlInsightsByControlDomain(req: operations.ListAssessmentControlInsightsByControlDomainRequest, config?: AxiosRequestConfig): Promise<operations.ListAssessmentControlInsightsByControlDomainResponse>;
    /**
     *  Returns a list of sent or received share requests for custom frameworks in Audit Manager.
     */
    listAssessmentFrameworkShareRequests(req: operations.ListAssessmentFrameworkShareRequestsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssessmentFrameworkShareRequestsResponse>;
    /**
     *  Returns a list of the frameworks that are available in the Audit Manager framework library.
     */
    listAssessmentFrameworks(req: operations.ListAssessmentFrameworksRequest, config?: AxiosRequestConfig): Promise<operations.ListAssessmentFrameworksResponse>;
    /**
     *  Returns a list of assessment reports created in Audit Manager.
     */
    listAssessmentReports(req: operations.ListAssessmentReportsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssessmentReportsResponse>;
    /**
     *  Returns a list of current and past assessments from Audit Manager.
     */
    listAssessments(req: operations.ListAssessmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssessmentsResponse>;
    /**
     * <p>Lists the latest analytics data for control domains across all of your active assessments. </p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that control domain.</p> </note>
     */
    listControlDomainInsights(req: operations.ListControlDomainInsightsRequest, config?: AxiosRequestConfig): Promise<operations.ListControlDomainInsightsResponse>;
    /**
     * <p>Lists analytics data for control domains within a specified active assessment.</p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that domain.</p> </note>
     */
    listControlDomainInsightsByAssessment(req: operations.ListControlDomainInsightsByAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.ListControlDomainInsightsByAssessmentResponse>;
    /**
     * <p>Lists the latest analytics data for controls within a specific control domain across all active assessments.</p> <note> <p>Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>
     */
    listControlInsightsByControlDomain(req: operations.ListControlInsightsByControlDomainRequest, config?: AxiosRequestConfig): Promise<operations.ListControlInsightsByControlDomainResponse>;
    /**
     *  Returns a list of controls from Audit Manager.
     */
    listControls(req: operations.ListControlsRequest, config?: AxiosRequestConfig): Promise<operations.ListControlsResponse>;
    /**
     *  Returns a list of keywords that are pre-mapped to the specified control data source.
     */
    listKeywordsForDataSource(req: operations.ListKeywordsForDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.ListKeywordsForDataSourceResponse>;
    /**
     *  Returns a list of all Audit Manager notifications.
     */
    listNotifications(req: operations.ListNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.ListNotificationsResponse>;
    /**
     *  Returns a list of tags for the specified resource in Audit Manager.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     *  Enables Audit Manager for the specified Amazon Web Services account.
     */
    registerAccount(req: operations.RegisterAccountRequest, config?: AxiosRequestConfig): Promise<operations.RegisterAccountResponse>;
    /**
     *  Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager.
     */
    registerOrganizationAdminAccount(req: operations.RegisterOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.RegisterOrganizationAdminAccountResponse>;
    /**
     * <p> Creates a share request for a custom framework in Audit Manager. </p> <p>The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires.</p> <p>When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p> <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs:</p> <ul> <li> <p>The sender revokes the share request.</p> </li> <li> <p>The recipient declines the share request.</p> </li> <li> <p>The recipient encounters an error and doesn't successfully accept the share request.</p> </li> <li> <p>The share request expires before the recipient responds to the request.</p> </li> </ul> <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework. </p> <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request. </p> <important> <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User Guide</i>.</p> </important>
     */
    startAssessmentFrameworkShare(req: operations.StartAssessmentFrameworkShareRequest, config?: AxiosRequestConfig): Promise<operations.StartAssessmentFrameworkShareResponse>;
    /**
     *  Tags the specified resource in Audit Manager.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     *  Removes a tag from a resource in Audit Manager.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     *  Edits an Audit Manager assessment.
     */
    updateAssessment(req: operations.UpdateAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssessmentResponse>;
    /**
     *  Updates a control within an assessment in Audit Manager.
     */
    updateAssessmentControl(req: operations.UpdateAssessmentControlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssessmentControlResponse>;
    /**
     *  Updates the status of a control set in an Audit Manager assessment.
     */
    updateAssessmentControlSetStatus(req: operations.UpdateAssessmentControlSetStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssessmentControlSetStatusResponse>;
    /**
     *  Updates a custom framework in Audit Manager.
     */
    updateAssessmentFramework(req: operations.UpdateAssessmentFrameworkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssessmentFrameworkResponse>;
    /**
     *  Updates a share request for a custom framework in Audit Manager.
     */
    updateAssessmentFrameworkShare(req: operations.UpdateAssessmentFrameworkShareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssessmentFrameworkShareResponse>;
    /**
     *  Updates the status of an assessment in Audit Manager.
     */
    updateAssessmentStatus(req: operations.UpdateAssessmentStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssessmentStatusResponse>;
    /**
     *  Updates a custom control in Audit Manager.
     */
    updateControl(req: operations.UpdateControlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateControlResponse>;
    /**
     *  Updates Audit Manager settings for the current account.
     */
    updateSettings(req: operations.UpdateSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingsResponse>;
    /**
     *  Validates the integrity of an assessment report in Audit Manager.
     */
    validateAssessmentReportIntegrity(req: operations.ValidateAssessmentReportIntegrityRequest, config?: AxiosRequestConfig): Promise<operations.ValidateAssessmentReportIntegrityResponse>;
}
