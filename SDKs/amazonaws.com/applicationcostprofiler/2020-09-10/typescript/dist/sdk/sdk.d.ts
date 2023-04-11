import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://application-cost-profiler.{region}.amazonaws.com", "https://application-cost-profiler.{region}.amazonaws.com", "http://application-cost-profiler.{region}.amazonaws.com.cn", "https://application-cost-profiler.{region}.amazonaws.com.cn"];
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
 * <p>This reference provides descriptions of the AWS Application Cost Profiler API.</p> <p>The AWS Application Cost Profiler API provides programmatic access to view, create, update, and delete application cost report definitions, as well as to import your usage data into the Application Cost Profiler service.</p> <p>For more information about using this service, see the <a href="https://docs.aws.amazon.com/application-cost-profiler/latest/userguide/introduction.html">AWS Application Cost Profiler User Guide</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/application-cost-profiler/} - Amazon Web Services documentation
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
     * Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.
     */
    deleteReportDefinition(req: operations.DeleteReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportDefinitionResponse>;
    /**
     * Retrieves the definition of a report already configured in AWS Application Cost Profiler.
     */
    getReportDefinition(req: operations.GetReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetReportDefinitionResponse>;
    /**
     * <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>
     */
    importApplicationUsage(req: operations.ImportApplicationUsageRequest, config?: AxiosRequestConfig): Promise<operations.ImportApplicationUsageResponse>;
    /**
     * <p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>
     */
    listReportDefinitions(req: operations.ListReportDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListReportDefinitionsResponse>;
    /**
     * Creates the report definition for a report in Application Cost Profiler.
     */
    putReportDefinition(req: operations.PutReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutReportDefinitionResponse>;
    /**
     * Updates existing report in AWS Application Cost Profiler.
     */
    updateReportDefinition(req: operations.UpdateReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReportDefinitionResponse>;
}
