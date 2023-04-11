import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The frequency with which the source data will be analyzed for anomalies.
 */
export declare enum CreateMetricSetRequestBodyMetricSetFrequencyEnum {
    P1D = "P1D",
    Pt1H = "PT1H",
    Pt10M = "PT10M",
    Pt5M = "PT5M"
}
/**
 * Contains information about source data used to generate metrics.
 */
export declare class CreateMetricSetRequestBodyMetricSource extends SpeakeasyBase {
    appFlowConfig?: shared.AppFlowConfig;
    athenaSourceConfig?: shared.AthenaSourceConfig;
    cloudWatchConfig?: shared.CloudWatchConfig;
    rdsSourceConfig?: shared.RDSSourceConfig;
    redshiftSourceConfig?: shared.RedshiftSourceConfig;
    /**
     * Contains information about the configuration of the S3 bucket that contains source files.
     */
    s3SourceConfig?: shared.S3SourceConfig;
}
/**
 * Contains information about the column used to track time in a source data file.
 */
export declare class CreateMetricSetRequestBodyTimestampColumn extends SpeakeasyBase {
    columnFormat?: string;
    columnName?: string;
}
export declare class CreateMetricSetRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the anomaly detector that will use the dataset.
     */
    anomalyDetectorArn: string;
    /**
     * A list of filters that specify which data is kept for anomaly detection.
     */
    dimensionFilterList?: shared.MetricSetDimensionFilter[];
    /**
     * A list of the fields you want to treat as dimensions.
     */
    dimensionList?: string[];
    /**
     * A list of metrics that the dataset will contain.
     */
    metricList: shared.Metric[];
    /**
     * A description of the dataset you are creating.
     */
    metricSetDescription?: string;
    /**
     * The frequency with which the source data will be analyzed for anomalies.
     */
    metricSetFrequency?: CreateMetricSetRequestBodyMetricSetFrequencyEnum;
    /**
     * The name of the dataset.
     */
    metricSetName: string;
    /**
     * Contains information about source data used to generate metrics.
     */
    metricSource: CreateMetricSetRequestBodyMetricSource;
    /**
     * After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.
     */
    offset?: number;
    /**
     * A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the dataset.
     */
    tags?: Record<string, string>;
    /**
     * Contains information about the column used to track time in a source data file.
     */
    timestampColumn?: CreateMetricSetRequestBodyTimestampColumn;
    /**
     * The time zone in which your source data was recorded.
     */
    timezone?: string;
}
export declare class CreateMetricSetRequest extends SpeakeasyBase {
    requestBody: CreateMetricSetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMetricSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createMetricSetResponse?: shared.CreateMetricSetResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
