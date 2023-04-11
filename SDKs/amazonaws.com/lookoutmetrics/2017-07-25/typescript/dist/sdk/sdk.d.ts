import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://lookoutmetrics.{region}.amazonaws.com", "https://lookoutmetrics.{region}.amazonaws.com", "http://lookoutmetrics.{region}.amazonaws.com.cn", "https://lookoutmetrics.{region}.amazonaws.com.cn"];
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
 * This is the <i>Amazon Lookout for Metrics API Reference</i>. For an introduction to the service with tutorials for getting started, visit <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev">Amazon Lookout for Metrics Developer Guide</a>.
 *
 * @see {@link https://docs.aws.amazon.com/lookoutmetrics/} - Amazon Web Services documentation
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
     * Activates an anomaly detector.
     */
    activateAnomalyDetector(req: operations.ActivateAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.ActivateAnomalyDetectorResponse>;
    /**
     * Runs a backtest for anomaly detection for the specified resource.
     */
    backTestAnomalyDetector(req: operations.BackTestAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.BackTestAnomalyDetectorResponse>;
    /**
     * Creates an alert for an anomaly detector.
     */
    createAlert(req: operations.CreateAlertRequest, config?: AxiosRequestConfig): Promise<operations.CreateAlertResponse>;
    /**
     * Creates an anomaly detector.
     */
    createAnomalyDetector(req: operations.CreateAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.CreateAnomalyDetectorResponse>;
    /**
     * Creates a dataset.
     */
    createMetricSet(req: operations.CreateMetricSetRequest, config?: AxiosRequestConfig): Promise<operations.CreateMetricSetResponse>;
    /**
     * Deactivates an anomaly detector.
     */
    deactivateAnomalyDetector(req: operations.DeactivateAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateAnomalyDetectorResponse>;
    /**
     * Deletes an alert.
     */
    deleteAlert(req: operations.DeleteAlertRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlertResponse>;
    /**
     * Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.
     */
    deleteAnomalyDetector(req: operations.DeleteAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnomalyDetectorResponse>;
    /**
     * <p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
     */
    describeAlert(req: operations.DescribeAlertRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAlertResponse>;
    /**
     * Returns information about the status of the specified anomaly detection jobs.
     */
    describeAnomalyDetectionExecutions(req: operations.DescribeAnomalyDetectionExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAnomalyDetectionExecutionsResponse>;
    /**
     * <p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
     */
    describeAnomalyDetector(req: operations.DescribeAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAnomalyDetectorResponse>;
    /**
     * <p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
     */
    describeMetricSet(req: operations.DescribeMetricSetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMetricSetResponse>;
    /**
     * Detects an Amazon S3 dataset's file format, interval, and offset.
     */
    detectMetricSetConfig(req: operations.DetectMetricSetConfigRequest, config?: AxiosRequestConfig): Promise<operations.DetectMetricSetConfigResponse>;
    /**
     * Returns details about a group of anomalous metrics.
     */
    getAnomalyGroup(req: operations.GetAnomalyGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetAnomalyGroupResponse>;
    /**
     * Returns details about the requested data quality metrics.
     */
    getDataQualityMetrics(req: operations.GetDataQualityMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetDataQualityMetricsResponse>;
    /**
     * Get feedback for an anomaly group.
     */
    getFeedback(req: operations.GetFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.GetFeedbackResponse>;
    /**
     * Returns a selection of sample records from an Amazon S3 datasource.
     */
    getSampleData(req: operations.GetSampleDataRequest, config?: AxiosRequestConfig): Promise<operations.GetSampleDataResponse>;
    /**
     * <p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
     */
    listAlerts(req: operations.ListAlertsRequest, config?: AxiosRequestConfig): Promise<operations.ListAlertsResponse>;
    /**
     * <p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
     */
    listAnomalyDetectors(req: operations.ListAnomalyDetectorsRequest, config?: AxiosRequestConfig): Promise<operations.ListAnomalyDetectorsResponse>;
    /**
     * Returns a list of measures that are potential causes or effects of an anomaly group.
     */
    listAnomalyGroupRelatedMetrics(req: operations.ListAnomalyGroupRelatedMetricsRequest, config?: AxiosRequestConfig): Promise<operations.ListAnomalyGroupRelatedMetricsResponse>;
    /**
     * Returns a list of anomaly groups.
     */
    listAnomalyGroupSummaries(req: operations.ListAnomalyGroupSummariesRequest, config?: AxiosRequestConfig): Promise<operations.ListAnomalyGroupSummariesResponse>;
    /**
     * Gets a list of anomalous metrics for a measure in an anomaly group.
     */
    listAnomalyGroupTimeSeries(req: operations.ListAnomalyGroupTimeSeriesRequest, config?: AxiosRequestConfig): Promise<operations.ListAnomalyGroupTimeSeriesResponse>;
    /**
     * <p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
     */
    listMetricSets(req: operations.ListMetricSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListMetricSetsResponse>;
    /**
     * Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Add feedback for an anomalous metric.
     */
    putFeedback(req: operations.PutFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.PutFeedbackResponse>;
    /**
     * Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Make changes to an existing alert.
     */
    updateAlert(req: operations.UpdateAlertRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAlertResponse>;
    /**
     * Updates a detector. After activation, you can only change a detector's ingestion delay and description.
     */
    updateAnomalyDetector(req: operations.UpdateAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnomalyDetectorResponse>;
    /**
     * Updates a dataset.
     */
    updateMetricSet(req: operations.UpdateMetricSetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMetricSetResponse>;
}
