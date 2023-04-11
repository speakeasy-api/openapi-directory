import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://lookoutequipment.{region}.amazonaws.com", "https://lookoutequipment.{region}.amazonaws.com", "http://lookoutequipment.{region}.amazonaws.com.cn", "https://lookoutequipment.{region}.amazonaws.com.cn"];
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
 * Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify anomalies in machines from sensor data for use in predictive maintenance.
 *
 * @see {@link https://docs.aws.amazon.com/lookoutequipment/} - Amazon Web Services documentation
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
     * Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data.
     */
    createDataset(req: operations.CreateDatasetRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetResponse>;
    /**
     *  Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data.
     */
    createInferenceScheduler(req: operations.CreateInferenceSchedulerRequest, config?: AxiosRequestConfig): Promise<operations.CreateInferenceSchedulerResponse>;
    /**
     *  Creates a label for an event.
     */
    createLabel(req: operations.CreateLabelRequest, config?: AxiosRequestConfig): Promise<operations.CreateLabelResponse>;
    /**
     *  Creates a group of labels.
     */
    createLabelGroup(req: operations.CreateLabelGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateLabelGroupResponse>;
    /**
     * <p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>
     */
    createModel(req: operations.CreateModelRequest, config?: AxiosRequestConfig): Promise<operations.CreateModelResponse>;
    /**
     *  Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future.
     */
    deleteDataset(req: operations.DeleteDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetResponse>;
    /**
     * Deletes an inference scheduler that has been set up. Already processed output results are not affected.
     */
    deleteInferenceScheduler(req: operations.DeleteInferenceSchedulerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInferenceSchedulerResponse>;
    /**
     *  Deletes a label.
     */
    deleteLabel(req: operations.DeleteLabelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLabelResponse>;
    /**
     *  Deletes a group of labels.
     */
    deleteLabelGroup(req: operations.DeleteLabelGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLabelGroupResponse>;
    /**
     * Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up.
     */
    deleteModel(req: operations.DeleteModelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelResponse>;
    /**
     * Provides information on a specific data ingestion job such as creation time, dataset ARN, and status.
     */
    describeDataIngestionJob(req: operations.DescribeDataIngestionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDataIngestionJobResponse>;
    /**
     * Provides a JSON description of the data in each time series dataset, including names, column names, and data types.
     */
    describeDataset(req: operations.DescribeDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDatasetResponse>;
    /**
     *  Specifies information about the inference scheduler being used, including name, model, status, and associated metadata
     */
    describeInferenceScheduler(req: operations.DescribeInferenceSchedulerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeInferenceSchedulerResponse>;
    /**
     *  Returns the name of the label.
     */
    describeLabel(req: operations.DescribeLabelRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLabelResponse>;
    /**
     *  Returns information about the label group.
     */
    describeLabelGroup(req: operations.DescribeLabelGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLabelGroupResponse>;
    /**
     * Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on.
     */
    describeModel(req: operations.DescribeModelRequest, config?: AxiosRequestConfig): Promise<operations.DescribeModelResponse>;
    /**
     * Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on.
     */
    listDataIngestionJobs(req: operations.ListDataIngestionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListDataIngestionJobsResponse>;
    /**
     * Lists all datasets currently available in your account, filtering on the dataset name.
     */
    listDatasets(req: operations.ListDatasetsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetsResponse>;
    /**
     *  Lists all inference events that have been found for the specified inference scheduler.
     */
    listInferenceEvents(req: operations.ListInferenceEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListInferenceEventsResponse>;
    /**
     *  Lists all inference executions that have been performed by the specified inference scheduler.
     */
    listInferenceExecutions(req: operations.ListInferenceExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListInferenceExecutionsResponse>;
    /**
     * Retrieves a list of all inference schedulers currently available for your account.
     */
    listInferenceSchedulers(req: operations.ListInferenceSchedulersRequest, config?: AxiosRequestConfig): Promise<operations.ListInferenceSchedulersResponse>;
    /**
     *  Returns a list of the label groups.
     */
    listLabelGroups(req: operations.ListLabelGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListLabelGroupsResponse>;
    /**
     *  Provides a list of labels.
     */
    listLabels(req: operations.ListLabelsRequest, config?: AxiosRequestConfig): Promise<operations.ListLabelsResponse>;
    /**
     * Generates a list of all models in the account, including model name and ARN, dataset, and status.
     */
    listModels(req: operations.ListModelsRequest, config?: AxiosRequestConfig): Promise<operations.ListModelsResponse>;
    /**
     *  Lists statistics about the data collected for each of the sensors that have been successfully ingested in the particular dataset. Can also be used to retreive Sensor Statistics for a previous ingestion job.
     */
    listSensorStatistics(req: operations.ListSensorStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.ListSensorStatisticsResponse>;
    /**
     * Lists all the tags for a specified resource, including key and value.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Starts a data ingestion job. Amazon Lookout for Equipment returns the job status.
     */
    startDataIngestionJob(req: operations.StartDataIngestionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartDataIngestionJobResponse>;
    /**
     * Starts an inference scheduler.
     */
    startInferenceScheduler(req: operations.StartInferenceSchedulerRequest, config?: AxiosRequestConfig): Promise<operations.StartInferenceSchedulerResponse>;
    /**
     * Stops an inference scheduler.
     */
    stopInferenceScheduler(req: operations.StopInferenceSchedulerRequest, config?: AxiosRequestConfig): Promise<operations.StopInferenceSchedulerResponse>;
    /**
     * Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes a specific tag from a given resource. The tag is specified by its key.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an inference scheduler.
     */
    updateInferenceScheduler(req: operations.UpdateInferenceSchedulerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInferenceSchedulerResponse>;
    /**
     *  Updates the label group.
     */
    updateLabelGroup(req: operations.UpdateLabelGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLabelGroupResponse>;
}
