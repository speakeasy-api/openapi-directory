import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://pi.{region}.amazonaws.com", "https://pi.{region}.amazonaws.com", "http://pi.{region}.amazonaws.com.cn", "https://pi.{region}.amazonaws.com.cn"];
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
 * <fullname>Amazon RDS Performance Insights</fullname> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. The guide provides detailed information about Performance Insights data types, parameters and errors.</p> <p>When Performance Insights is enabled, the Amazon RDS Performance Insights API provides visibility into the performance of your DB instance. Amazon CloudWatch provides the authoritative source for Amazon Web Services service-vended monitoring metrics. Performance Insights offers a domain-specific view of DB load.</p> <p>DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.</p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <i> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a> </i>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <i> <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a> </i>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon DocumentDB clusters, go to the <i> <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html"> Amazon DocumentDB Developer Guide</a> </i>.</p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/pi/} - Amazon Web Services documentation
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
     * <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
     */
    describeDimensionKeys(req: operations.DescribeDimensionKeysRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDimensionKeysResponse>;
    /**
     * Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.
     */
    getDimensionKeyDetails(req: operations.GetDimensionKeyDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetDimensionKeyDetailsResponse>;
    /**
     * Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.
     */
    getResourceMetadata(req: operations.GetResourceMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceMetadataResponse>;
    /**
     * <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
     */
    getResourceMetrics(req: operations.GetResourceMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceMetricsResponse>;
    /**
     * Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
     */
    listAvailableResourceDimensions(req: operations.ListAvailableResourceDimensionsRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailableResourceDimensionsResponse>;
    /**
     * Retrieve metrics of the specified types that can be queried for a specified DB instance.
     */
    listAvailableResourceMetrics(req: operations.ListAvailableResourceMetricsRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailableResourceMetricsResponse>;
}
