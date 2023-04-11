import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://inspector2.{region}.amazonaws.com", "https://inspector2.{region}.amazonaws.com", "http://inspector2.{region}.amazonaws.com.cn", "https://inspector2.{region}.amazonaws.com.cn"];
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
 * Amazon Inspector is a vulnerability discovery service that automates continuous scanning for security vulnerabilities within your Amazon EC2 and Amazon ECR environments.
 *
 * @see {@link https://docs.aws.amazon.com/inspector2/} - Amazon Web Services documentation
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
     * Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.
     */
    associateMember(req: operations.AssociateMemberRequest, config?: AxiosRequestConfig): Promise<operations.AssociateMemberResponse>;
    /**
     * Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
     */
    batchGetAccountStatus(req: operations.BatchGetAccountStatusRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetAccountStatusResponse>;
    /**
     * Gets free trial status for multiple Amazon Web Services accounts.
     */
    batchGetFreeTrialInfo(req: operations.BatchGetFreeTrialInfoRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetFreeTrialInfoResponse>;
    /**
     * Cancels the given findings report.
     */
    cancelFindingsReport(req: operations.CancelFindingsReportRequest, config?: AxiosRequestConfig): Promise<operations.CancelFindingsReportResponse>;
    /**
     * Creates a filter resource using specified filter criteria.
     */
    createFilter(req: operations.CreateFilterRequest, config?: AxiosRequestConfig): Promise<operations.CreateFilterResponse>;
    /**
     * Creates a finding report.
     */
    createFindingsReport(req: operations.CreateFindingsReportRequest, config?: AxiosRequestConfig): Promise<operations.CreateFindingsReportResponse>;
    /**
     * Deletes a filter resource.
     */
    deleteFilter(req: operations.DeleteFilterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFilterResponse>;
    /**
     * Describe Amazon Inspector configuration settings for an Amazon Web Services organization.
     */
    describeOrganizationConfiguration(req: operations.DescribeOrganizationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationConfigurationResponse>;
    /**
     * Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.
     */
    disable(req: operations.DisableRequest, config?: AxiosRequestConfig): Promise<operations.DisableResponse>;
    /**
     * Disables the Amazon Inspector delegated administrator for your organization.
     */
    disableDelegatedAdminAccount(req: operations.DisableDelegatedAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisableDelegatedAdminAccountResponse>;
    /**
     * Disassociates a member account from an Amazon Inspector delegated administrator.
     */
    disassociateMember(req: operations.DisassociateMemberRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateMemberResponse>;
    /**
     * Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
     */
    enable(req: operations.EnableRequest, config?: AxiosRequestConfig): Promise<operations.EnableResponse>;
    /**
     * Enables the Amazon Inspector delegated administrator for your Organizations organization.
     */
    enableDelegatedAdminAccount(req: operations.EnableDelegatedAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.EnableDelegatedAdminAccountResponse>;
    /**
     * Retrieves setting configurations for Inspector scans.
     */
    getConfiguration(req: operations.GetConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationResponse>;
    /**
     * Retrieves information about the Amazon Inspector delegated administrator for your organization.
     */
    getDelegatedAdminAccount(req: operations.GetDelegatedAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetDelegatedAdminAccountResponse>;
    /**
     * Gets the status of a findings report.
     */
    getFindingsReportStatus(req: operations.GetFindingsReportStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingsReportStatusResponse>;
    /**
     * Gets member information for your organization.
     */
    getMember(req: operations.GetMemberRequest, config?: AxiosRequestConfig): Promise<operations.GetMemberResponse>;
    /**
     * Lists the permissions an account has to configure Amazon Inspector.
     */
    listAccountPermissions(req: operations.ListAccountPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountPermissionsResponse>;
    /**
     * Lists coverage details for you environment.
     */
    listCoverage(req: operations.ListCoverageRequest, config?: AxiosRequestConfig): Promise<operations.ListCoverageResponse>;
    /**
     * Lists Amazon Inspector coverage statistics for your environment.
     */
    listCoverageStatistics(req: operations.ListCoverageStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ListCoverageStatisticsResponse>;
    /**
     * Lists information about the Amazon Inspector delegated administrator of your organization.
     */
    listDelegatedAdminAccounts(req: operations.ListDelegatedAdminAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListDelegatedAdminAccountsResponse>;
    /**
     * Lists the filters associated with your account.
     */
    listFilters(req: operations.ListFiltersRequest, config?: AxiosRequestConfig): Promise<operations.ListFiltersResponse>;
    /**
     * Lists aggregated finding data for your environment based on specific criteria.
     */
    listFindingAggregations(req: operations.ListFindingAggregationsRequest, config?: AxiosRequestConfig): Promise<operations.ListFindingAggregationsResponse>;
    /**
     * Lists findings for your environment.
     */
    listFindings(req: operations.ListFindingsRequest, config?: AxiosRequestConfig): Promise<operations.ListFindingsResponse>;
    /**
     * List members associated with the Amazon Inspector delegated administrator for your organization.
     */
    listMembers(req: operations.ListMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListMembersResponse>;
    /**
     * Lists all tags attached to a given resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists the Amazon Inspector usage totals over the last 30 days.
     */
    listUsageTotals(req: operations.ListUsageTotalsRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageTotalsResponse>;
    /**
     * Adds tags to a resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.
     */
    updateConfiguration(req: operations.UpdateConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigurationResponse>;
    /**
     * Specifies the action that is to be applied to the findings that match the filter.
     */
    updateFilter(req: operations.UpdateFilterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFilterResponse>;
    /**
     * Updates the configurations for your Amazon Inspector organization.
     */
    updateOrganizationConfiguration(req: operations.UpdateOrganizationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigurationResponse>;
}
