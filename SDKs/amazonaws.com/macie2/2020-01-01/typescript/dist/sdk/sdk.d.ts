import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://macie2.{region}.amazonaws.com", "https://macie2.{region}.amazonaws.com", "http://macie2.{region}.amazonaws.com.cn", "https://macie2.{region}.amazonaws.com.cn"];
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
 * Amazon Macie
 *
 * @see {@link https://docs.aws.amazon.com/macie2/} - Amazon Web Services documentation
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
     * Accepts an Amazon Macie membership invitation that was received from a specific account.
     */
    acceptInvitation(req: operations.AcceptInvitationRequest, config?: AxiosRequestConfig): Promise<operations.AcceptInvitationResponse>;
    /**
     * Retrieves information about one or more custom data identifiers.
     */
    batchGetCustomDataIdentifiers(req: operations.BatchGetCustomDataIdentifiersRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetCustomDataIdentifiersResponse>;
    /**
     * Creates and defines the settings for an allow list.
     */
    createAllowList(req: operations.CreateAllowListRequest, config?: AxiosRequestConfig): Promise<operations.CreateAllowListResponse>;
    /**
     * Creates and defines the settings for a classification job.
     */
    createClassificationJob(req: operations.CreateClassificationJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateClassificationJobResponse>;
    /**
     * Creates and defines the criteria and other settings for a custom data identifier.
     */
    createCustomDataIdentifier(req: operations.CreateCustomDataIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomDataIdentifierResponse>;
    /**
     * Creates and defines the criteria and other settings for a findings filter.
     */
    createFindingsFilter(req: operations.CreateFindingsFilterRequest, config?: AxiosRequestConfig): Promise<operations.CreateFindingsFilterResponse>;
    /**
     * Sends an Amazon Macie membership invitation to one or more accounts.
     */
    createInvitations(req: operations.CreateInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.CreateInvitationsResponse>;
    /**
     * Associates an account with an Amazon Macie administrator account.
     */
    createMember(req: operations.CreateMemberRequest, config?: AxiosRequestConfig): Promise<operations.CreateMemberResponse>;
    /**
     * Creates sample findings.
     */
    createSampleFindings(req: operations.CreateSampleFindingsRequest, config?: AxiosRequestConfig): Promise<operations.CreateSampleFindingsResponse>;
    /**
     * Declines Amazon Macie membership invitations that were received from specific accounts.
     */
    declineInvitations(req: operations.DeclineInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.DeclineInvitationsResponse>;
    /**
     * Deletes an allow list.
     */
    deleteAllowList(req: operations.DeleteAllowListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAllowListResponse>;
    /**
     * Soft deletes a custom data identifier.
     */
    deleteCustomDataIdentifier(req: operations.DeleteCustomDataIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomDataIdentifierResponse>;
    /**
     * Deletes a findings filter.
     */
    deleteFindingsFilter(req: operations.DeleteFindingsFilterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFindingsFilterResponse>;
    /**
     * Deletes Amazon Macie membership invitations that were received from specific accounts.
     */
    deleteInvitations(req: operations.DeleteInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInvitationsResponse>;
    /**
     * Deletes the association between an Amazon Macie administrator account and an account.
     */
    deleteMember(req: operations.DeleteMemberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMemberResponse>;
    /**
     * Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.
     */
    describeBuckets(req: operations.DescribeBucketsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBucketsResponse>;
    /**
     * Retrieves the status and settings for a classification job.
     */
    describeClassificationJob(req: operations.DescribeClassificationJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeClassificationJobResponse>;
    /**
     * Retrieves the Amazon Macie configuration settings for an organization in Organizations.
     */
    describeOrganizationConfiguration(req: operations.DescribeOrganizationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationConfigurationResponse>;
    /**
     * Disables Amazon Macie and deletes all settings and resources for a Macie account.
     */
    disableMacie(req: operations.DisableMacieRequest, config?: AxiosRequestConfig): Promise<operations.DisableMacieResponse>;
    /**
     * Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.
     */
    disableOrganizationAdminAccount(req: operations.DisableOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisableOrganizationAdminAccountResponse>;
    /**
     * Disassociates a member account from its Amazon Macie administrator account.
     */
    disassociateFromAdministratorAccount(req: operations.DisassociateFromAdministratorAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateFromAdministratorAccountResponse>;
    /**
     * (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
     */
    disassociateFromMasterAccount(req: operations.DisassociateFromMasterAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateFromMasterAccountResponse>;
    /**
     * Disassociates an Amazon Macie administrator account from a member account.
     */
    disassociateMember(req: operations.DisassociateMemberRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateMemberResponse>;
    /**
     * Enables Amazon Macie and specifies the configuration settings for a Macie account.
     */
    enableMacie(req: operations.EnableMacieRequest, config?: AxiosRequestConfig): Promise<operations.EnableMacieResponse>;
    /**
     * Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.
     */
    enableOrganizationAdminAccount(req: operations.EnableOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.EnableOrganizationAdminAccountResponse>;
    /**
     * Retrieves information about the Amazon Macie administrator account for an account.
     */
    getAdministratorAccount(req: operations.GetAdministratorAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAdministratorAccountResponse>;
    /**
     * Retrieves the settings and status of an allow list.
     */
    getAllowList(req: operations.GetAllowListRequest, config?: AxiosRequestConfig): Promise<operations.GetAllowListResponse>;
    /**
     * Retrieves the configuration settings and status of automated sensitive data discovery for an account.
     */
    getAutomatedDiscoveryConfiguration(req: operations.GetAutomatedDiscoveryConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomatedDiscoveryConfigurationResponse>;
    /**
     * Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
     */
    getBucketStatistics(req: operations.GetBucketStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetBucketStatisticsResponse>;
    /**
     * Retrieves the configuration settings for storing data classification results.
     */
    getClassificationExportConfiguration(req: operations.GetClassificationExportConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationExportConfigurationResponse>;
    /**
     * Retrieves the classification scope settings for an account.
     */
    getClassificationScope(req: operations.GetClassificationScopeRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationScopeResponse>;
    /**
     * Retrieves the criteria and other settings for a custom data identifier.
     */
    getCustomDataIdentifier(req: operations.GetCustomDataIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomDataIdentifierResponse>;
    /**
     *  <p>Retrieves (queries) aggregated statistical data about findings.</p>
     */
    getFindingStatistics(req: operations.GetFindingStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingStatisticsResponse>;
    /**
     * Retrieves the details of one or more findings.
     */
    getFindings(req: operations.GetFindingsRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingsResponse>;
    /**
     * Retrieves the criteria and other settings for a findings filter.
     */
    getFindingsFilter(req: operations.GetFindingsFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingsFilterResponse>;
    /**
     * Retrieves the configuration settings for publishing findings to Security Hub.
     */
    getFindingsPublicationConfiguration(req: operations.GetFindingsPublicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingsPublicationConfigurationResponse>;
    /**
     * Retrieves the count of Amazon Macie membership invitations that were received by an account.
     */
    getInvitationsCount(req: operations.GetInvitationsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetInvitationsCountResponse>;
    /**
     * Retrieves the status and configuration settings for an Amazon Macie account.
     */
    getMacieSession(req: operations.GetMacieSessionRequest, config?: AxiosRequestConfig): Promise<operations.GetMacieSessionResponse>;
    /**
     * (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
     */
    getMasterAccount(req: operations.GetMasterAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetMasterAccountResponse>;
    /**
     * Retrieves information about an account that's associated with an Amazon Macie administrator account.
     */
    getMember(req: operations.GetMemberRequest, config?: AxiosRequestConfig): Promise<operations.GetMemberResponse>;
    /**
     * Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.
     */
    getResourceProfile(req: operations.GetResourceProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceProfileResponse>;
    /**
     * Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
     */
    getRevealConfiguration(req: operations.GetRevealConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetRevealConfigurationResponse>;
    /**
     * Retrieves occurrences of sensitive data reported by a finding.
     */
    getSensitiveDataOccurrences(req: operations.GetSensitiveDataOccurrencesRequest, config?: AxiosRequestConfig): Promise<operations.GetSensitiveDataOccurrencesResponse>;
    /**
     * Checks whether occurrences of sensitive data can be retrieved for a finding.
     */
    getSensitiveDataOccurrencesAvailability(req: operations.GetSensitiveDataOccurrencesAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.GetSensitiveDataOccurrencesAvailabilityResponse>;
    /**
     *  <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
     */
    getSensitivityInspectionTemplate(req: operations.GetSensitivityInspectionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetSensitivityInspectionTemplateResponse>;
    /**
     * Retrieves (queries) quotas and aggregated usage data for one or more accounts.
     */
    getUsageStatistics(req: operations.GetUsageStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsageStatisticsResponse>;
    /**
     * Retrieves (queries) aggregated usage data for an account.
     */
    getUsageTotals(req: operations.GetUsageTotalsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsageTotalsResponse>;
    /**
     * Retrieves a subset of information about all the allow lists for an account.
     */
    listAllowLists(req: operations.ListAllowListsRequest, config?: AxiosRequestConfig): Promise<operations.ListAllowListsResponse>;
    /**
     * Retrieves a subset of information about one or more classification jobs.
     */
    listClassificationJobs(req: operations.ListClassificationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListClassificationJobsResponse>;
    /**
     * Retrieves a subset of information about the classification scope for an account.
     */
    listClassificationScopes(req: operations.ListClassificationScopesRequest, config?: AxiosRequestConfig): Promise<operations.ListClassificationScopesResponse>;
    /**
     * Retrieves a subset of information about all the custom data identifiers for an account.
     */
    listCustomDataIdentifiers(req: operations.ListCustomDataIdentifiersRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomDataIdentifiersResponse>;
    /**
     * Retrieves a subset of information about one or more findings.
     */
    listFindings(req: operations.ListFindingsRequest, config?: AxiosRequestConfig): Promise<operations.ListFindingsResponse>;
    /**
     * Retrieves a subset of information about all the findings filters for an account.
     */
    listFindingsFilters(req: operations.ListFindingsFiltersRequest, config?: AxiosRequestConfig): Promise<operations.ListFindingsFiltersResponse>;
    /**
     * Retrieves information about the Amazon Macie membership invitations that were received by an account.
     */
    listInvitations(req: operations.ListInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.ListInvitationsResponse>;
    /**
     * Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
     */
    listManagedDataIdentifiers(req: operations.ListManagedDataIdentifiersRequest, config?: AxiosRequestConfig): Promise<operations.ListManagedDataIdentifiersResponse>;
    /**
     * Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
     */
    listMembers(req: operations.ListMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListMembersResponse>;
    /**
     * Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.
     */
    listOrganizationAdminAccounts(req: operations.ListOrganizationAdminAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListOrganizationAdminAccountsResponse>;
    /**
     * Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.
     */
    listResourceProfileArtifacts(req: operations.ListResourceProfileArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceProfileArtifactsResponse>;
    /**
     * Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.
     */
    listResourceProfileDetections(req: operations.ListResourceProfileDetectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceProfileDetectionsResponse>;
    /**
     *  <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>
     */
    listSensitivityInspectionTemplates(req: operations.ListSensitivityInspectionTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListSensitivityInspectionTemplatesResponse>;
    /**
     * Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Creates or updates the configuration settings for storing data classification results.
     */
    putClassificationExportConfiguration(req: operations.PutClassificationExportConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutClassificationExportConfigurationResponse>;
    /**
     * Updates the configuration settings for publishing findings to Security Hub.
     */
    putFindingsPublicationConfiguration(req: operations.PutFindingsPublicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutFindingsPublicationConfigurationResponse>;
    /**
     * Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
     */
    searchResources(req: operations.SearchResourcesRequest, config?: AxiosRequestConfig): Promise<operations.SearchResourcesResponse>;
    /**
     * Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Tests a custom data identifier.
     */
    testCustomDataIdentifier(req: operations.TestCustomDataIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.TestCustomDataIdentifierResponse>;
    /**
     * Removes one or more tags (keys and values) from an Amazon Macie resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the settings for an allow list.
     */
    updateAllowList(req: operations.UpdateAllowListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAllowListResponse>;
    /**
     * Enables or disables automated sensitive data discovery for an account.
     */
    updateAutomatedDiscoveryConfiguration(req: operations.UpdateAutomatedDiscoveryConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAutomatedDiscoveryConfigurationResponse>;
    /**
     * Changes the status of a classification job.
     */
    updateClassificationJob(req: operations.UpdateClassificationJobRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClassificationJobResponse>;
    /**
     * Updates the classification scope settings for an account.
     */
    updateClassificationScope(req: operations.UpdateClassificationScopeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClassificationScopeResponse>;
    /**
     * Updates the criteria and other settings for a findings filter.
     */
    updateFindingsFilter(req: operations.UpdateFindingsFilterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFindingsFilterResponse>;
    /**
     * Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.
     */
    updateMacieSession(req: operations.UpdateMacieSessionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMacieSessionResponse>;
    /**
     * Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.
     */
    updateMemberSession(req: operations.UpdateMemberSessionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMemberSessionResponse>;
    /**
     * Updates the Amazon Macie configuration settings for an organization in Organizations.
     */
    updateOrganizationConfiguration(req: operations.UpdateOrganizationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigurationResponse>;
    /**
     * Updates the sensitivity score for an S3 bucket.
     */
    updateResourceProfile(req: operations.UpdateResourceProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceProfileResponse>;
    /**
     * Updates the sensitivity scoring settings for an S3 bucket.
     */
    updateResourceProfileDetections(req: operations.UpdateResourceProfileDetectionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceProfileDetectionsResponse>;
    /**
     * Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
     */
    updateRevealConfiguration(req: operations.UpdateRevealConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRevealConfigurationResponse>;
    /**
     *  <p>Updates the settings for the sensitivity inspection template for an account.</p>
     */
    updateSensitivityInspectionTemplate(req: operations.UpdateSensitivityInspectionTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSensitivityInspectionTemplateResponse>;
}
