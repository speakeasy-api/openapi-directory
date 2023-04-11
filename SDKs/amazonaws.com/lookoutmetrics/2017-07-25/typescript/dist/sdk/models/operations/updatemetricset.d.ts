import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The dataset's interval.
 */
export declare enum UpdateMetricSetRequestBodyMetricSetFrequencyEnum {
    P1D = "P1D",
    Pt1H = "PT1H",
    Pt10M = "PT10M",
    Pt5M = "PT5M"
}
/**
 * Contains information about source data used to generate metrics.
 */
export declare class UpdateMetricSetRequestBodyMetricSource extends SpeakeasyBase {
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
export declare class UpdateMetricSetRequestBodyTimestampColumn extends SpeakeasyBase {
    columnFormat?: string;
    columnName?: string;
}
export declare class UpdateMetricSetRequestBody extends SpeakeasyBase {
    /**
     * Describes a list of filters for choosing specific dimensions and specific values. Each filter consists of the dimension and one of its values that you want to include. When multiple dimensions or values are specified, the dimensions are joined with an AND operation and the values are joined with an OR operation.
     */
    dimensionFilterList?: shared.MetricSetDimensionFilter[];
    /**
     * The dimension list.
     */
    dimensionList?: string[];
    /**
     * The metric list.
     */
    metricList?: shared.Metric[];
    /**
     * The ARN of the dataset to update.
     */
    metricSetArn: string;
    /**
     * The dataset's description.
     */
    metricSetDescription?: string;
    /**
     * The dataset's interval.
     */
    metricSetFrequency?: UpdateMetricSetRequestBodyMetricSetFrequencyEnum;
    /**
     * Contains information about source data used to generate metrics.
     */
    metricSource?: UpdateMetricSetRequestBodyMetricSource;
    /**
     * After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.
     */
    offset?: number;
    /**
     * Contains information about the column used to track time in a source data file.
     */
    timestampColumn?: UpdateMetricSetRequestBodyTimestampColumn;
}
export declare class UpdateMetricSetRequest extends SpeakeasyBase {
    requestBody: UpdateMetricSetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateMetricSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateMetricSetResponse?: shared.UpdateMetricSetResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
