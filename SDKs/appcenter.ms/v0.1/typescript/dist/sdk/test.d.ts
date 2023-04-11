import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Test {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Logically deletes a test run
     */
    testArchiveTestRun(req: operations.TestArchiveTestRunRequest, security: operations.TestArchiveTestRunSecurity, config?: AxiosRequestConfig): Promise<operations.TestArchiveTestRunResponse>;
    /**
     * Creates a short ID for a list of devices
     */
    testCreateDeviceSelection(req: operations.TestCreateDeviceSelectionRequest, security: operations.TestCreateDeviceSelectionSecurity, config?: AxiosRequestConfig): Promise<operations.TestCreateDeviceSelectionResponse>;
    /**
     * Creates a device set belonging to the owner
     */
    testCreateDeviceSetOfOwner(req: operations.TestCreateDeviceSetOfOwnerRequest, security: operations.TestCreateDeviceSetOfOwnerSecurity, config?: AxiosRequestConfig): Promise<operations.TestCreateDeviceSetOfOwnerResponse>;
    /**
     * Creates a device set belonging to the user
     */
    testCreateDeviceSetOfUser(req: operations.TestCreateDeviceSetOfUserRequest, security: operations.TestCreateDeviceSetOfUserSecurity, config?: AxiosRequestConfig): Promise<operations.TestCreateDeviceSetOfUserResponse>;
    /**
     * Accept a free trial subscription
     */
    testCreateSubscription(req: operations.TestCreateSubscriptionRequest, security: operations.TestCreateSubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.TestCreateSubscriptionResponse>;
    /**
     * Creates a new test run
     */
    testCreateTestRun(req: operations.TestCreateTestRunRequest, security: operations.TestCreateTestRunSecurity, config?: AxiosRequestConfig): Promise<operations.TestCreateTestRunResponse>;
    /**
     * Creates new test series for an application
     */
    testCreateTestSeries(req: operations.TestCreateTestSeriesRequest, security: operations.TestCreateTestSeriesSecurity, config?: AxiosRequestConfig): Promise<operations.TestCreateTestSeriesResponse>;
    /**
     * Deletes a device set belonging to the owner
     */
    testDeleteDeviceSetOfOwner(req: operations.TestDeleteDeviceSetOfOwnerRequest, security: operations.TestDeleteDeviceSetOfOwnerSecurity, config?: AxiosRequestConfig): Promise<operations.TestDeleteDeviceSetOfOwnerResponse>;
    /**
     * Deletes a device set belonging to the user
     */
    testDeleteDeviceSetOfUser(req: operations.TestDeleteDeviceSetOfUserRequest, security: operations.TestDeleteDeviceSetOfUserSecurity, config?: AxiosRequestConfig): Promise<operations.TestDeleteDeviceSetOfUserResponse>;
    /**
     * Deletes a single test series
     */
    testDeleteTestSeries(req: operations.TestDeleteTestSeriesRequest, security: operations.TestDeleteTestSeriesSecurity, config?: AxiosRequestConfig): Promise<operations.TestDeleteTestSeriesResponse>;
    /**
     * Lists account data
     */
    testGdprExportAccount(config?: AxiosRequestConfig): Promise<operations.TestGdprExportAccountResponse>;
    /**
     * Lists all the endpoints available for Test accounts data
     */
    testGdprExportAccounts(config?: AxiosRequestConfig): Promise<operations.TestGdprExportAccountsResponse>;
    /**
     * Lists app data
     */
    testGdprExportApp(req: operations.TestGdprExportAppRequest, security: operations.TestGdprExportAppSecurity, config?: AxiosRequestConfig): Promise<operations.TestGdprExportAppResponse>;
    /**
     * Lists all the endpoints available for Test apps data
     */
    testGdprExportApps(req: operations.TestGdprExportAppsRequest, security: operations.TestGdprExportAppsSecurity, config?: AxiosRequestConfig): Promise<operations.TestGdprExportAppsResponse>;
    /**
     * Lists feature flag data
     */
    testGdprExportFeatureFlag(config?: AxiosRequestConfig): Promise<operations.TestGdprExportFeatureFlagResponse>;
    /**
     * Lists file set file data
     */
    testGdprExportFileSetFile(req: operations.TestGdprExportFileSetFileRequest, security: operations.TestGdprExportFileSetFileSecurity, config?: AxiosRequestConfig): Promise<operations.TestGdprExportFileSetFileResponse>;
    /**
     * Lists hash file data
     */
    testGdprExportHashFile(req: operations.TestGdprExportHashFileRequest, security: operations.TestGdprExportHashFileSecurity, config?: AxiosRequestConfig): Promise<operations.TestGdprExportHashFileResponse>;
    /**
     * Lists pipeline test data
     */
    testGdprExportPipelineTest(req: operations.TestGdprExportPipelineTestRequest, security: operations.TestGdprExportPipelineTestSecurity, config?: AxiosRequestConfig): Promise<operations.TestGdprExportPipelineTestResponse>;
    /**
     * Lists test run data
     */
    testGdprExportTestRun(req: operations.TestGdprExportTestRunRequest, security: operations.TestGdprExportTestRunSecurity, config?: AxiosRequestConfig): Promise<operations.TestGdprExportTestRunResponse>;
    /**
     * Returns list of all test runs for a given test series
     */
    testGetAllTestRunsForSeries(req: operations.TestGetAllTestRunsForSeriesRequest, security: operations.TestGetAllTestRunsForSeriesSecurity, config?: AxiosRequestConfig): Promise<operations.TestGetAllTestRunsForSeriesResponse>;
    /**
     * Returns list of all test series for an application
     */
    testGetAllTestSeries(req: operations.TestGetAllTestSeriesRequest, security: operations.TestGetAllTestSeriesSecurity, config?: AxiosRequestConfig): Promise<operations.TestGetAllTestSeriesResponse>;
    /**
     * Returns a list of available devices
     */
    testGetDeviceConfigurations(req: operations.TestGetDeviceConfigurationsRequest, security: operations.TestGetDeviceConfigurationsSecurity, config?: AxiosRequestConfig): Promise<operations.TestGetDeviceConfigurationsResponse>;
    /**
     * Gets a device set belonging to the owner
     */
    testGetDeviceSetOfOwner(req: operations.TestGetDeviceSetOfOwnerRequest, security: operations.TestGetDeviceSetOfOwnerSecurity, config?: AxiosRequestConfig): Promise<operations.TestGetDeviceSetOfOwnerResponse>;
    /**
     * Gets a device set belonging to the user
     */
    testGetDeviceSetOfUser(req: operations.TestGetDeviceSetOfUserRequest, security: operations.TestGetDeviceSetOfUserSecurity, config?: AxiosRequestConfig): Promise<operations.TestGetDeviceSetOfUserResponse>;
    /**
     * Get information about the currently active subscriptions, if any
     */
    testGetSubscriptions(req: operations.TestGetSubscriptionsRequest, security: operations.TestGetSubscriptionsSecurity, config?: AxiosRequestConfig): Promise<operations.TestGetSubscriptionsResponse>;
    /**
     * Returns a single test report
     */
    testGetTestReport(req: operations.TestGetTestReportRequest, security: operations.TestGetTestReportSecurity, config?: AxiosRequestConfig): Promise<operations.TestGetTestReportResponse>;
    /**
     * Returns a single test runs
     */
    testGetTestRun(req: operations.TestGetTestRunRequest, security: operations.TestGetTestRunSecurity, config?: AxiosRequestConfig): Promise<operations.TestGetTestRunResponse>;
    /**
     * Gets state of the test run
     */
    testGetTestRunState(req: operations.TestGetTestRunStateRequest, security: operations.TestGetTestRunStateSecurity, config?: AxiosRequestConfig): Promise<operations.TestGetTestRunStateResponse>;
    /**
     * Returns a list of test runs
     */
    testGetTestRuns(req: operations.TestGetTestRunsRequest, security: operations.TestGetTestRunsSecurity, config?: AxiosRequestConfig): Promise<operations.TestGetTestRunsResponse>;
    /**
     * Lists device sets belonging to the owner
     */
    testListDeviceSetsOfOwner(req: operations.TestListDeviceSetsOfOwnerRequest, security: operations.TestListDeviceSetsOfOwnerSecurity, config?: AxiosRequestConfig): Promise<operations.TestListDeviceSetsOfOwnerResponse>;
    /**
     * Lists device sets belonging to the user
     */
    testListDeviceSetsOfUser(req: operations.TestListDeviceSetsOfUserRequest, security: operations.TestListDeviceSetsOfUserSecurity, config?: AxiosRequestConfig): Promise<operations.TestListDeviceSetsOfUserResponse>;
    /**
     * Updates name and slug of a test series
     */
    testPatchTestSeries(req: operations.TestPatchTestSeriesRequest, security: operations.TestPatchTestSeriesSecurity, config?: AxiosRequestConfig): Promise<operations.TestPatchTestSeriesResponse>;
    /**
     * Starts test run
     */
    testStartTestRun(req: operations.TestStartTestRunRequest, security: operations.TestStartTestRunSecurity, config?: AxiosRequestConfig): Promise<operations.TestStartTestRunResponse>;
    /**
     * Uploads file for a test run
     */
    testStartUploadingFile(req: operations.TestStartUploadingFileRequest, security: operations.TestStartUploadingFileSecurity, config?: AxiosRequestConfig): Promise<operations.TestStartUploadingFileResponse>;
    /**
     * Stop a test run execution
     */
    testStopTestRun(req: operations.TestStopTestRunRequest, security: operations.TestStopTestRunSecurity, config?: AxiosRequestConfig): Promise<operations.TestStopTestRunResponse>;
    /**
     * Updates a device set belonging to the owner
     */
    testUpdateDeviceSetOfOwner(req: operations.TestUpdateDeviceSetOfOwnerRequest, security: operations.TestUpdateDeviceSetOfOwnerSecurity, config?: AxiosRequestConfig): Promise<operations.TestUpdateDeviceSetOfOwnerResponse>;
    /**
     * Updates a device set belonging to the user
     */
    testUpdateDeviceSetOfUser(req: operations.TestUpdateDeviceSetOfUserRequest, security: operations.TestUpdateDeviceSetOfUserSecurity, config?: AxiosRequestConfig): Promise<operations.TestUpdateDeviceSetOfUserResponse>;
    /**
     * Adds file with the given hash to a test run
     */
    testUploadHash(req: operations.TestUploadHashRequest, security: operations.TestUploadHashSecurity, config?: AxiosRequestConfig): Promise<operations.TestUploadHashResponse>;
    /**
     * Adds file with the given hash to a test run
     */
    testUploadHashesBatch(req: operations.TestUploadHashesBatchRequest, security: operations.TestUploadHashesBatchSecurity, config?: AxiosRequestConfig): Promise<operations.TestUploadHashesBatchResponse>;
}
