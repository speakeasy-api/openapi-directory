import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Errors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List of app builds
     */
    errorsAppBuildsList(req: operations.ErrorsAppBuildsListRequest, security: operations.ErrorsAppBuildsListSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsAppBuildsListResponse>;
    /**
     * Get all available versions in the time range.
     */
    errorsAvailableVersions(req: operations.ErrorsAvailableVersionsRequest, security: operations.ErrorsAvailableVersionsSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsAvailableVersionsResponse>;
    /**
     * Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.
     */
    errorsCountsPerDay(req: operations.ErrorsCountsPerDayRequest, security: operations.ErrorsCountsPerDaySecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsCountsPerDayResponse>;
    /**
     * Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.
     */
    errorsDeleteError(req: operations.ErrorsDeleteErrorRequest, security: operations.ErrorsDeleteErrorSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsDeleteErrorResponse>;
    /**
     * Error attachment location.
     */
    errorsErrorAttachmentLocation(req: operations.ErrorsErrorAttachmentLocationRequest, security: operations.ErrorsErrorAttachmentLocationSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsErrorAttachmentLocationResponse>;
    /**
     * Error attachment text.
     */
    errorsErrorAttachmentText(req: operations.ErrorsErrorAttachmentTextRequest, security: operations.ErrorsErrorAttachmentTextSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsErrorAttachmentTextResponse>;
    /**
     * List error attachments.
     */
    errorsErrorAttachments(req: operations.ErrorsErrorAttachmentsRequest, security: operations.ErrorsErrorAttachmentsSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsErrorAttachmentsResponse>;
    /**
     * Download details for a specific error.
     */
    errorsErrorDownload(req: operations.ErrorsErrorDownloadRequest, security: operations.ErrorsErrorDownloadSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsErrorDownloadResponse>;
    /**
     * Error groups list based on search parameters
     */
    errorsErrorGroupsSearch(req: operations.ErrorsErrorGroupsSearchRequest, security: operations.ErrorsErrorGroupsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsErrorGroupsSearchResponse>;
    /**
     * Error location.
     */
    errorsErrorLocation(req: operations.ErrorsErrorLocationRequest, security: operations.ErrorsErrorLocationSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsErrorLocationResponse>;
    /**
     * Errors list based on search parameters
     */
    errorsErrorSearch(req: operations.ErrorsErrorSearchRequest, security: operations.ErrorsErrorSearchSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsErrorSearchResponse>;
    /**
     * Error Stacktrace details.
     */
    errorsErrorStackTrace(req: operations.ErrorsErrorStackTraceRequest, security: operations.ErrorsErrorStackTraceSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsErrorStackTraceResponse>;
    /**
     * Error details.
     */
    errorsGetErrorDetails(req: operations.ErrorsGetErrorDetailsRequest, security: operations.ErrorsGetErrorDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsGetErrorDetailsResponse>;
    /**
     * Count of errors by day in the time range of the selected error group with selected version
     */
    errorsGroupCountsPerDay(req: operations.ErrorsGroupCountsPerDayRequest, security: operations.ErrorsGroupCountsPerDaySecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsGroupCountsPerDayResponse>;
    /**
     * Error group details
     */
    errorsGroupDetails(req: operations.ErrorsGroupDetailsRequest, security: operations.ErrorsGroupDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsGroupDetailsResponse>;
    /**
     * Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices
     */
    errorsGroupErrorFreeDevicePercentages(req: operations.ErrorsGroupErrorFreeDevicePercentagesRequest, security: operations.ErrorsGroupErrorFreeDevicePercentagesSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsGroupErrorFreeDevicePercentagesResponse>;
    /**
     * Gets the stack trace for the error group.
     */
    errorsGroupErrorStackTrace(req: operations.ErrorsGroupErrorStackTraceRequest, security: operations.ErrorsGroupErrorStackTraceSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsGroupErrorStackTraceResponse>;
    /**
     * List of error groups
     */
    errorsGroupList(req: operations.ErrorsGroupListRequest, security: operations.ErrorsGroupListSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsGroupListResponse>;
    /**
     * Top models of the selected error group.
     */
    errorsGroupModelCounts(req: operations.ErrorsGroupModelCountsRequest, security: operations.ErrorsGroupModelCountsSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsGroupModelCountsResponse>;
    /**
     * Top OSes of the selected error group.
     */
    errorsGroupOperatingSystemCounts(req: operations.ErrorsGroupOperatingSystemCountsRequest, security: operations.ErrorsGroupOperatingSystemCountsSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsGroupOperatingSystemCountsResponse>;
    /**
     * Latest error details.
     */
    errorsLatestErrorDetails(req: operations.ErrorsLatestErrorDetailsRequest, security: operations.ErrorsLatestErrorDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsLatestErrorDetailsResponse>;
    /**
     * Get all errors for group
     */
    errorsListForGroup(req: operations.ErrorsListForGroupRequest, security: operations.ErrorsListForGroupSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsListForGroupResponse>;
    /**
     * Get session logs by error ID
     */
    errorsListSessionLogs(req: operations.ErrorsListSessionLogsRequest, security: operations.ErrorsListSessionLogsSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsListSessionLogsResponse>;
    /**
     * Update error group state
     */
    errorsUpdateState(req: operations.ErrorsUpdateStateRequest, security: operations.ErrorsUpdateStateSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsUpdateStateResponse>;
    /**
     * gets the retention settings in days
     *
     * @remarks
     * gets the retention settings in days
     */
    errorsGetRetentionSettings(req: operations.ErrorsGetRetentionSettingsRequest, security: operations.ErrorsGetRetentionSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.ErrorsGetRetentionSettingsResponse>;
}
