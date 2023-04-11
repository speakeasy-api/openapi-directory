import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://iotanalytics.{region}.amazonaws.com", "https://iotanalytics.{region}.amazonaws.com", "http://iotanalytics.{region}.amazonaws.com.cn", "https://iotanalytics.{region}.amazonaws.com.cn"];
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
 * <p>IoT Analytics allows you to collect large amounts of device data, process messages, and store them. You can then query the data and run sophisticated analytics on it. IoT Analytics enables advanced data exploration through integration with Jupyter Notebooks and data visualization through integration with Amazon QuickSight.</p> <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result the data from these devices can have significant gaps, corrupted messages, and false readings that must be cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data from external sources. </p> <p>IoT Analytics automates the steps required to analyze data from IoT devices. IoT Analytics filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You can set up the service to collect only the data you need from your devices, apply mathematical transforms to process the data, and enrich the data with device-specific metadata such as device type and location before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine, or perform more complex analytics and machine learning inference. IoT Analytics includes pre-built models for common IoT use cases so you can answer questions like which devices are about to fail or which customers are at risk of abandoning their wearable devices.</p>
 *
 * @see {@link https://docs.aws.amazon.com/iotanalytics/} - Amazon Web Services documentation
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
     * Sends messages to a channel.
     */
    batchPutMessage(req: operations.BatchPutMessageRequest, config?: AxiosRequestConfig): Promise<operations.BatchPutMessageResponse>;
    /**
     * Cancels the reprocessing of data through the pipeline.
     */
    cancelPipelineReprocessing(req: operations.CancelPipelineReprocessingRequest, config?: AxiosRequestConfig): Promise<operations.CancelPipelineReprocessingResponse>;
    /**
     * Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
     */
    createChannel(req: operations.CreateChannelRequest, config?: AxiosRequestConfig): Promise<operations.CreateChannelResponse>;
    /**
     * Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.
     */
    createDataset(req: operations.CreateDatasetRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetResponse>;
    /**
     * Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).
     */
    createDatasetContent(req: operations.CreateDatasetContentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetContentResponse>;
    /**
     * Creates a data store, which is a repository for messages.
     */
    createDatastore(req: operations.CreateDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatastoreResponse>;
    /**
     * Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
     */
    createPipeline(req: operations.CreatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineResponse>;
    /**
     * Deletes the specified channel.
     */
    deleteChannel(req: operations.DeleteChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelResponse>;
    /**
     * <p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>
     */
    deleteDataset(req: operations.DeleteDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetResponse>;
    /**
     * Deletes the content of the specified dataset.
     */
    deleteDatasetContent(req: operations.DeleteDatasetContentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetContentResponse>;
    /**
     * Deletes the specified data store.
     */
    deleteDatastore(req: operations.DeleteDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatastoreResponse>;
    /**
     * Deletes the specified pipeline.
     */
    deletePipeline(req: operations.DeletePipelineRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineResponse>;
    /**
     * Retrieves information about a channel.
     */
    describeChannel(req: operations.DescribeChannelRequest, config?: AxiosRequestConfig): Promise<operations.DescribeChannelResponse>;
    /**
     * Retrieves information about a dataset.
     */
    describeDataset(req: operations.DescribeDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDatasetResponse>;
    /**
     * Retrieves information about a data store.
     */
    describeDatastore(req: operations.DescribeDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDatastoreResponse>;
    /**
     * Retrieves the current settings of the IoT Analytics logging options.
     */
    describeLoggingOptions(req: operations.DescribeLoggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLoggingOptionsResponse>;
    /**
     * Retrieves information about a pipeline.
     */
    describePipeline(req: operations.DescribePipelineRequest, config?: AxiosRequestConfig): Promise<operations.DescribePipelineResponse>;
    /**
     * Retrieves the contents of a dataset as presigned URIs.
     */
    getDatasetContent(req: operations.GetDatasetContentRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetContentResponse>;
    /**
     * Retrieves a list of channels.
     */
    listChannels(req: operations.ListChannelsRequest, config?: AxiosRequestConfig): Promise<operations.ListChannelsResponse>;
    /**
     * Lists information about dataset contents that have been created.
     */
    listDatasetContents(req: operations.ListDatasetContentsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetContentsResponse>;
    /**
     * Retrieves information about datasets.
     */
    listDatasets(req: operations.ListDatasetsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetsResponse>;
    /**
     * Retrieves a list of data stores.
     */
    listDatastores(req: operations.ListDatastoresRequest, config?: AxiosRequestConfig): Promise<operations.ListDatastoresResponse>;
    /**
     * Retrieves a list of pipelines.
     */
    listPipelines(req: operations.ListPipelinesRequest, config?: AxiosRequestConfig): Promise<operations.ListPipelinesResponse>;
    /**
     * Lists the tags (metadata) that you have assigned to the resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>
     */
    putLoggingOptions(req: operations.PutLoggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutLoggingOptionsResponse>;
    /**
     * Simulates the results of running a pipeline activity on a message payload.
     */
    runPipelineActivity(req: operations.RunPipelineActivityRequest, config?: AxiosRequestConfig): Promise<operations.RunPipelineActivityResponse>;
    /**
     * Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
     */
    sampleChannelData(req: operations.SampleChannelDataRequest, config?: AxiosRequestConfig): Promise<operations.SampleChannelDataResponse>;
    /**
     * Starts the reprocessing of raw message data through the pipeline.
     */
    startPipelineReprocessing(req: operations.StartPipelineReprocessingRequest, config?: AxiosRequestConfig): Promise<operations.StartPipelineReprocessingResponse>;
    /**
     * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes the given tags (metadata) from the resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Used to update the settings of a channel.
     */
    updateChannel(req: operations.UpdateChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateChannelResponse>;
    /**
     * Updates the settings of a dataset.
     */
    updateDataset(req: operations.UpdateDatasetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatasetResponse>;
    /**
     * Used to update the settings of a data store.
     */
    updateDatastore(req: operations.UpdateDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatastoreResponse>;
    /**
     * Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
     */
    updatePipeline(req: operations.UpdatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineResponse>;
}
