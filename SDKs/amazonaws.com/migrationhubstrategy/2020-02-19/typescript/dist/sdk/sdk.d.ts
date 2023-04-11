import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://migrationhub-strategy.{region}.amazonaws.com", "https://migrationhub-strategy.{region}.amazonaws.com", "http://migrationhub-strategy.{region}.amazonaws.com.cn", "https://migrationhub-strategy.{region}.amazonaws.com.cn"];
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
 * <p><fullname>Migration Hub Strategy Recommendations</fullname> <p>This API reference provides descriptions, syntax, and other details about each of the actions and data types for Migration Hub Strategy Recommendations (Strategy Recommendations). The topic for each action shows the API request parameters and the response. Alternatively, you can use one of the AWS SDKs to access an API that is tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p></p>
 *
 * @see {@link https://docs.aws.amazon.com/migrationhub-strategy/} - Amazon Web Services documentation
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
     *  Retrieves details about an application component.
     */
    getApplicationComponentDetails(req: operations.GetApplicationComponentDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationComponentDetailsResponse>;
    /**
     *  Retrieves a list of all the recommended strategies and tools for an application component running on a server.
     */
    getApplicationComponentStrategies(req: operations.GetApplicationComponentStrategiesRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationComponentStrategiesResponse>;
    /**
     *  Retrieves the status of an on-going assessment.
     */
    getAssessment(req: operations.GetAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.GetAssessmentResponse>;
    /**
     *  Retrieves the details about a specific import task.
     */
    getImportFileTask(req: operations.GetImportFileTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetImportFileTaskResponse>;
    /**
     * Retrieve the latest ID of a specific assessment task.
     */
    getLatestAssessmentId(req: operations.GetLatestAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestAssessmentIdResponse>;
    /**
     *  Retrieves your migration and modernization preferences.
     */
    getPortfolioPreferences(req: operations.GetPortfolioPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioPreferencesResponse>;
    /**
     *  Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns.
     */
    getPortfolioSummary(req: operations.GetPortfolioSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioSummaryResponse>;
    /**
     *  Retrieves detailed information about the specified recommendation report.
     */
    getRecommendationReportDetails(req: operations.GetRecommendationReportDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecommendationReportDetailsResponse>;
    /**
     *  Retrieves detailed information about a specified server.
     */
    getServerDetails(req: operations.GetServerDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetServerDetailsResponse>;
    /**
     *  Retrieves recommended strategies and tools for the specified server.
     */
    getServerStrategies(req: operations.GetServerStrategiesRequest, config?: AxiosRequestConfig): Promise<operations.GetServerStrategiesResponse>;
    /**
     *  Retrieves a list of all the application components (processes).
     */
    listApplicationComponents(req: operations.ListApplicationComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationComponentsResponse>;
    /**
     *  Retrieves a list of all the installed collectors.
     */
    listCollectors(req: operations.ListCollectorsRequest, config?: AxiosRequestConfig): Promise<operations.ListCollectorsResponse>;
    /**
     *  Retrieves a list of all the imports performed.
     */
    listImportFileTask(req: operations.ListImportFileTaskRequest, config?: AxiosRequestConfig): Promise<operations.ListImportFileTaskResponse>;
    /**
     *  Returns a list of all the servers.
     */
    listServers(req: operations.ListServersRequest, config?: AxiosRequestConfig): Promise<operations.ListServersResponse>;
    /**
     *  Saves the specified migration and modernization preferences.
     */
    putPortfolioPreferences(req: operations.PutPortfolioPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.PutPortfolioPreferencesResponse>;
    /**
     *  Starts the assessment of an on-premises environment.
     */
    startAssessment(req: operations.StartAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.StartAssessmentResponse>;
    /**
     *  Starts a file import.
     */
    startImportFileTask(req: operations.StartImportFileTaskRequest, config?: AxiosRequestConfig): Promise<operations.StartImportFileTaskResponse>;
    /**
     *  Starts generating a recommendation report.
     */
    startRecommendationReportGeneration(req: operations.StartRecommendationReportGenerationRequest, config?: AxiosRequestConfig): Promise<operations.StartRecommendationReportGenerationResponse>;
    /**
     *  Stops the assessment of an on-premises environment.
     */
    stopAssessment(req: operations.StopAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.StopAssessmentResponse>;
    /**
     *  Updates the configuration of an application component.
     */
    updateApplicationComponentConfig(req: operations.UpdateApplicationComponentConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationComponentConfigResponse>;
    /**
     *  Updates the configuration of the specified server.
     */
    updateServerConfig(req: operations.UpdateServerConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServerConfigResponse>;
}
