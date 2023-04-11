import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Analytics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns whether audience definition exists.
     */
    analyticsAudienceNameExists(req: operations.AnalyticsAudienceNameExistsRequest, security: operations.AnalyticsAudienceNameExistsSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsAudienceNameExistsResponse>;
    /**
     * Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices.
     */
    analyticsCrashFreeDevicePercentages(req: operations.AnalyticsCrashFreeDevicePercentagesRequest, security: operations.AnalyticsCrashFreeDevicePercentagesSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsCrashFreeDevicePercentagesResponse>;
    /**
     * Available for UWP apps only.
     *
     * @remarks
     * Count of crashes by day in the time range of the selected crash group with selected version. Available for UWP apps only.
     */
    analyticsCrashGroupCounts(req: operations.AnalyticsCrashGroupCountsRequest, security: operations.AnalyticsCrashGroupCountsSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsCrashGroupCountsResponse>;
    /**
     * Available for UWP apps only.
     *
     * @remarks
     * Top models of the selected crash group with selected version. Available for UWP apps only.
     */
    analyticsCrashGroupModelCounts(req: operations.AnalyticsCrashGroupModelCountsRequest, security: operations.AnalyticsCrashGroupModelCountsSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsCrashGroupModelCountsResponse>;
    /**
     * Available for UWP apps only.
     *
     * @remarks
     * Top OSes of the selected crash group with selected version. Available for UWP apps only.
     */
    analyticsCrashGroupOperatingSystemCounts(req: operations.AnalyticsCrashGroupOperatingSystemCountsRequest, security: operations.AnalyticsCrashGroupOperatingSystemCountsSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsCrashGroupOperatingSystemCountsResponse>;
    /**
     * Available for UWP apps only.
     *
     * @remarks
     * Overall crashes and affected users count of the selected crash group with selected version. Available for UWP apps only.
     */
    analyticsCrashGroupTotals(req: operations.AnalyticsCrashGroupTotalsRequest, security: operations.AnalyticsCrashGroupTotalsSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsCrashGroupTotalsResponse>;
    /**
     * Overall crashes and affected users count of the selected crash groups with selected versions.
     */
    analyticsCrashGroupsTotals(req: operations.AnalyticsCrashGroupsTotalsRequest, security: operations.AnalyticsCrashGroupsTotalsSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsCrashGroupsTotalsResponse>;
    /**
     * Creates or updates audience definition.
     */
    analyticsCreateOrUpdateAudience(req: operations.AnalyticsCreateOrUpdateAudienceRequest, security: operations.AnalyticsCreateOrUpdateAudienceSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsCreateOrUpdateAudienceResponse>;
    /**
     * Deletes audience definition.
     */
    analyticsDeleteAudience(req: operations.AnalyticsDeleteAudienceRequest, security: operations.AnalyticsDeleteAudienceSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsDeleteAudienceResponse>;
    /**
     * Count of total downloads for the provided distribution releases.
     */
    analyticsDistributionReleaseCounts(req: operations.AnalyticsDistributionReleaseCountsRequest, security: operations.AnalyticsDistributionReleaseCountsSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsDistributionReleaseCountsResponse>;
    /**
     * Event properties.
     */
    analyticsEventProperties(req: operations.AnalyticsEventPropertiesRequest, security: operations.AnalyticsEventPropertiesSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsEventPropertiesResponse>;
    /**
     * Delete the set of Events with the specified event names.
     */
    analyticsEventsDelete(req: operations.AnalyticsEventsDeleteRequest, security: operations.AnalyticsEventsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsEventsDeleteResponse>;
    /**
     * Delete the set of Events with the specified event names.
     */
    analyticsEventsDeleteLogs(req: operations.AnalyticsEventsDeleteLogsRequest, security: operations.AnalyticsEventsDeleteLogsSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsEventsDeleteLogsResponse>;
    /**
     * Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
     */
    analyticsGenericLogFlow(req: operations.AnalyticsGenericLogFlowRequest, security: operations.AnalyticsGenericLogFlowSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsGenericLogFlowResponse>;
    /**
     * Gets audience definition.
     */
    analyticsGetAudience(req: operations.AnalyticsGetAudienceRequest, security: operations.AnalyticsGetAudienceSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsGetAudienceResponse>;
    /**
     * Get list of audiences.
     */
    analyticsListAudiences(req: operations.AnalyticsListAudiencesRequest, security: operations.AnalyticsListAudiencesSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsListAudiencesResponse>;
    /**
     * Get list of custom properties.
     */
    analyticsListCustomProperties(req: operations.AnalyticsListCustomPropertiesRequest, security: operations.AnalyticsListCustomPropertiesSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsListCustomPropertiesResponse>;
    /**
     * Get list of device properties.
     */
    analyticsListDeviceProperties(req: operations.AnalyticsListDevicePropertiesRequest, security: operations.AnalyticsListDevicePropertiesSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsListDevicePropertiesResponse>;
    /**
     * Get list of device property values.
     */
    analyticsListDevicePropertyValues(req: operations.AnalyticsListDevicePropertyValuesRequest, security: operations.AnalyticsListDevicePropertyValuesSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsListDevicePropertyValuesResponse>;
    /**
     * Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.
     */
    analyticsLogFlow(req: operations.AnalyticsLogFlowRequest, security: operations.AnalyticsLogFlowSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsLogFlowResponse>;
    /**
     * Tests audience definition.
     */
    analyticsTestAudience(req: operations.AnalyticsTestAudienceRequest, security: operations.AnalyticsTestAudienceSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsTestAudienceResponse>;
    /**
     * **Warning, this operation is not reversible.**
     *
     * A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id.
     *
     */
    appBlockLogs(req: operations.AppBlockLogsRequest, security: operations.AppBlockLogsSecurity, config?: AxiosRequestConfig): Promise<operations.AppBlockLogsResponse>;
    /**
     * Get session logs by crash ID
     */
    crashesListSessionLogs(req: operations.CrashesListSessionLogsRequest, security: operations.CrashesListSessionLogsSecurity, config?: AxiosRequestConfig): Promise<operations.CrashesListSessionLogsResponse>;
    /**
     * **Warning, this operation is not reversible.**
     *
     *  A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user.
     *
     */
    devicesBlockLogs(req: operations.DevicesBlockLogsRequest, security: operations.DevicesBlockLogsSecurity, config?: AxiosRequestConfig): Promise<operations.DevicesBlockLogsResponse>;
}
