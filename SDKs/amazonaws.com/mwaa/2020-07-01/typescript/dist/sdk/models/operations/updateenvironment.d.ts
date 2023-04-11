import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines the Apache Airflow log types to send to CloudWatch Logs.
 */
export declare class UpdateEnvironmentRequestBodyLoggingConfiguration extends SpeakeasyBase {
    dagProcessingLogs?: shared.ModuleLoggingConfigurationInput;
    schedulerLogs?: shared.ModuleLoggingConfigurationInput;
    taskLogs?: shared.ModuleLoggingConfigurationInput;
    webserverLogs?: shared.ModuleLoggingConfigurationInput;
    workerLogs?: shared.ModuleLoggingConfigurationInput;
}
/**
 * Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
 */
export declare class UpdateEnvironmentRequestBodyNetworkConfiguration extends SpeakeasyBase {
    securityGroupIds?: string[];
}
/**
 * The Apache Airflow <i>Web server</i> access mode. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.
 */
export declare enum UpdateEnvironmentRequestBodyWebserverAccessModeEnum {
    PrivateOnly = "PRIVATE_ONLY",
    PublicOnly = "PUBLIC_ONLY"
}
export declare class UpdateEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.
     */
    airflowConfigurationOptions?: Record<string, string>;
    /**
     * The Apache Airflow version for your environment. If no value is specified, defaults to the latest version. Valid values: <code>1.10.12</code>, <code>2.0.2</code>, <code>2.2.2</code>, and <code>2.4.3</code>.
     */
    airflowVersion?: string;
    /**
     * The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.
     */
    dagS3Path?: string;
    /**
     * The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.
     */
    environmentClass?: string;
    /**
     * The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.
     */
    executionRoleArn?: string;
    /**
     * Defines the Apache Airflow log types to send to CloudWatch Logs.
     */
    loggingConfiguration?: UpdateEnvironmentRequestBodyLoggingConfiguration;
    /**
     * The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.
     */
    maxWorkers?: number;
    /**
     * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.
     */
    minWorkers?: number;
    /**
     * Defines the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
     */
    networkConfiguration?: UpdateEnvironmentRequestBodyNetworkConfiguration;
    /**
     * The version of the plugins.zip file on your Amazon S3 bucket. A version must be specified each time a plugins.zip file is updated. To learn more, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.
     */
    pluginsS3ObjectVersion?: string;
    /**
     * The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the plugins.zip version is required. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.
     */
    pluginsS3Path?: string;
    /**
     * The version of the requirements.txt file on your Amazon S3 bucket. A version must be specified each time a requirements.txt file is updated. To learn more, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.
     */
    requirementsS3ObjectVersion?: string;
    /**
     * The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a file version is required. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.
     */
    requirementsS3Path?: string;
    /**
     * The number of Apache Airflow schedulers to run in your Amazon MWAA environment.
     */
    schedulers?: number;
    /**
     * The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.
     */
    sourceBucketArn?: string;
    /**
     * The Apache Airflow <i>Web server</i> access mode. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.
     */
    webserverAccessMode?: UpdateEnvironmentRequestBodyWebserverAccessModeEnum;
    /**
     * The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only.
     */
    weeklyMaintenanceWindowStart?: string;
}
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    /**
     * The name of your Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.
     */
    name: string;
    requestBody: UpdateEnvironmentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateEnvironmentOutput?: shared.UpdateEnvironmentOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
