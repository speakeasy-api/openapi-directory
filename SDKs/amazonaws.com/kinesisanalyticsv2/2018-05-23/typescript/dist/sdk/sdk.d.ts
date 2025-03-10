import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://kinesisanalytics.{region}.amazonaws.com", "https://kinesisanalytics.{region}.amazonaws.com", "http://kinesisanalytics.{region}.amazonaws.com.cn", "https://kinesisanalytics.{region}.amazonaws.com.cn"];
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
 * Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using Java, SQL, or Scala. The service enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time series analytics, feed real-time dashboards, and create real-time metrics.
 *
 * @see {@link https://docs.aws.amazon.com/kinesisanalytics/} - Amazon Web Services documentation
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
     * Adds an Amazon CloudWatch log stream to monitor application configuration errors.
     */
    addApplicationCloudWatchLoggingOption(req: operations.AddApplicationCloudWatchLoggingOptionRequest, config?: AxiosRequestConfig): Promise<operations.AddApplicationCloudWatchLoggingOptionResponse>;
    /**
     * <p> Adds a streaming source to your SQL-based Kinesis Data Analytics application. </p> <p>You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see <a>CreateApplication</a>.</p> <p>Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version. </p>
     */
    addApplicationInput(req: operations.AddApplicationInputRequest, config?: AxiosRequestConfig): Promise<operations.AddApplicationInputResponse>;
    /**
     * Adds an <a>InputProcessingConfiguration</a> to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.
     */
    addApplicationInputProcessingConfiguration(req: operations.AddApplicationInputProcessingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.AddApplicationInputProcessingConfigurationResponse>;
    /**
     * <p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p> <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.</p> <p> You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. </p> <p> Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>
     */
    addApplicationOutput(req: operations.AddApplicationOutputRequest, config?: AxiosRequestConfig): Promise<operations.AddApplicationOutputResponse>;
    /**
     * <p>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.</p> <p>Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.</p>
     */
    addApplicationReferenceDataSource(req: operations.AddApplicationReferenceDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.AddApplicationReferenceDataSourceResponse>;
    /**
     * <p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store and access resources securely.</p> <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p> <ul> <li> <p>VPC configurations are not supported for SQL applications.</p> </li> <li> <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p> </li> </ul>
     */
    addApplicationVpcConfiguration(req: operations.AddApplicationVpcConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.AddApplicationVpcConfigurationResponse>;
    /**
     * Creates a Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/getting-started.html">Creating an Application</a>.
     */
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * <p>Creates and returns a URL that you can use to connect to an application's extension.</p> <p>The IAM role or user used to call this API defines the permissions to access the extension. After the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request that attempts to connect to the extension. </p> <p>You control the amount of time that the URL will be valid using the <code>SessionExpirationDurationInSeconds</code> parameter. If you do not provide this parameter, the returned URL is valid for twelve hours.</p> <note> <p>The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes to be valid. If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</p> </note>
     */
    createApplicationPresignedUrl(req: operations.CreateApplicationPresignedUrlRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationPresignedUrlResponse>;
    /**
     * Creates a snapshot of the application's state data.
     */
    createApplicationSnapshot(req: operations.CreateApplicationSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationSnapshotResponse>;
    /**
     * Deletes the specified application. Kinesis Data Analytics halts application execution and deletes the application.
     */
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * Deletes an Amazon CloudWatch log stream from an Kinesis Data Analytics application.
     */
    deleteApplicationCloudWatchLoggingOption(req: operations.DeleteApplicationCloudWatchLoggingOptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationCloudWatchLoggingOptionResponse>;
    /**
     * Deletes an <a>InputProcessingConfiguration</a> from an input.
     */
    deleteApplicationInputProcessingConfiguration(req: operations.DeleteApplicationInputProcessingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationInputProcessingConfigurationResponse>;
    /**
     * Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.
     */
    deleteApplicationOutput(req: operations.DeleteApplicationOutputRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationOutputResponse>;
    /**
     * <p>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration.</p> <p>If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the <a>AddApplicationReferenceDataSource</a> operation. </p>
     */
    deleteApplicationReferenceDataSource(req: operations.DeleteApplicationReferenceDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationReferenceDataSourceResponse>;
    /**
     * Deletes a snapshot of application state.
     */
    deleteApplicationSnapshot(req: operations.DeleteApplicationSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationSnapshotResponse>;
    /**
     * Removes a VPC configuration from a Kinesis Data Analytics application.
     */
    deleteApplicationVpcConfiguration(req: operations.DeleteApplicationVpcConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationVpcConfigurationResponse>;
    /**
     * <p>Returns information about a specific Kinesis Data Analytics application.</p> <p>If you want to retrieve a list of all applications in your account, use the <a>ListApplications</a> operation.</p>
     */
    describeApplication(req: operations.DescribeApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeApplicationResponse>;
    /**
     * Returns information about a snapshot of application state data.
     */
    describeApplicationSnapshot(req: operations.DescribeApplicationSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DescribeApplicationSnapshotResponse>;
    /**
     * <p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>
     */
    describeApplicationVersion(req: operations.DescribeApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeApplicationVersionResponse>;
    /**
     * <p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose delivery stream) or Amazon S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p> <p> You can use the inferred schema when configuring a streaming source for your application. When you create an application using the Kinesis Data Analytics console, the console uses this operation to infer a schema and show it in the console user interface. </p>
     */
    discoverInputSchema(req: operations.DiscoverInputSchemaRequest, config?: AxiosRequestConfig): Promise<operations.DiscoverInputSchemaResponse>;
    /**
     * Lists information about the current application snapshots.
     */
    listApplicationSnapshots(req: operations.ListApplicationSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationSnapshotsResponse>;
    /**
     * <p>Lists all the versions for the specified application, including versions that were rolled back. The response also includes a summary of the configuration associated with each version.</p> <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>
     */
    listApplicationVersions(req: operations.ListApplicationVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationVersionsResponse>;
    /**
     * <p>Returns a list of Kinesis Data Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. </p> <p>If you want detailed information about a specific application, use <a>DescribeApplication</a>.</p>
     */
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
    /**
     * Retrieves the list of key-value tags assigned to the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Reverts the application to the previous running version. You can roll back an application if you suspect it is stuck in a transient status. </p> <p>You can roll back an application only if it is in the <code>UPDATING</code> or <code>AUTOSCALING</code> status.</p> <p>When you rollback an application, it loads state data from the last successful snapshot. If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p> <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>
     */
    rollbackApplication(req: operations.RollbackApplicationRequest, config?: AxiosRequestConfig): Promise<operations.RollbackApplicationResponse>;
    /**
     * Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to start your application.
     */
    startApplication(req: operations.StartApplicationRequest, config?: AxiosRequestConfig): Promise<operations.StartApplicationResponse>;
    /**
     * <p>Stops the application from processing data. You can stop an application only if it is in the running status, unless you set the <code>Force</code> parameter to <code>true</code>.</p> <p>You can use the <a>DescribeApplication</a> operation to find the application status. </p> <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set to <code>true</code>.</p>
     */
    stopApplication(req: operations.StopApplicationRequest, config?: AxiosRequestConfig): Promise<operations.StopApplicationResponse>;
    /**
     * Adds one or more key-value tags to a Kinesis Data Analytics application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes one or more tags from a Kinesis Data Analytics application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Updates an existing Kinesis Data Analytics application. Using this operation, you can update application code, input configuration, and output configuration. </p> <p>Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update your application. </p> <note> <p>You cannot update the <code>RuntimeEnvironment</code> of an existing application. If you need to update an application's <code>RuntimeEnvironment</code>, you must delete the application and create it again.</p> </note>
     */
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
    /**
     * <p>Updates the maintenance configuration of the Kinesis Data Analytics application. </p> <p>You can invoke this operation on an application that is in one of the two following states: <code>READY</code> or <code>RUNNING</code>. If you invoke it when the application is in a state other than these two states, it throws a <code>ResourceInUseException</code>. The service makes use of the updated configuration the next time it schedules maintenance for the application. If you invoke this operation after the service schedules maintenance, the service will apply the configuration update the next time it schedules maintenance for the application. This means that you might not see the maintenance configuration update applied to the maintenance process that follows a successful invocation of this operation, but to the following maintenance process instead.</p> <p>To see the current maintenance configuration of your application, invoke the <a>DescribeApplication</a> operation.</p> <p>For information about application maintenance, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/maintenance.html">Kinesis Data Analytics for Apache Flink Maintenance</a>.</p> <note> <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p> </note>
     */
    updateApplicationMaintenanceConfiguration(req: operations.UpdateApplicationMaintenanceConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationMaintenanceConfigurationResponse>;
}
