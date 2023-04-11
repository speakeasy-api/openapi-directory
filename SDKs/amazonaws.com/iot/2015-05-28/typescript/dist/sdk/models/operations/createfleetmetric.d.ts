import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of aggregation queries.
 */
export declare class CreateFleetMetricRequestBodyAggregationType extends SpeakeasyBase {
    name?: shared.AggregationTypeNameEnum;
    values?: string[];
}
/**
 * Used to support unit transformation such as milliseconds to seconds. The unit must be supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>. Default to null.
 */
export declare enum CreateFleetMetricRequestBodyUnitEnum {
    Seconds = "Seconds",
    Microseconds = "Microseconds",
    Milliseconds = "Milliseconds",
    Bytes = "Bytes",
    Kilobytes = "Kilobytes",
    Megabytes = "Megabytes",
    Gigabytes = "Gigabytes",
    Terabytes = "Terabytes",
    Bits = "Bits",
    Kilobits = "Kilobits",
    Megabits = "Megabits",
    Gigabits = "Gigabits",
    Terabits = "Terabits",
    Percent = "Percent",
    Count = "Count",
    BytesSecond = "Bytes/Second",
    KilobytesSecond = "Kilobytes/Second",
    MegabytesSecond = "Megabytes/Second",
    GigabytesSecond = "Gigabytes/Second",
    TerabytesSecond = "Terabytes/Second",
    BitsSecond = "Bits/Second",
    KilobitsSecond = "Kilobits/Second",
    MegabitsSecond = "Megabits/Second",
    GigabitsSecond = "Gigabits/Second",
    TerabitsSecond = "Terabits/Second",
    CountSecond = "Count/Second",
    None = "None"
}
export declare class CreateFleetMetricRequestBody extends SpeakeasyBase {
    /**
     * The field to aggregate.
     */
    aggregationField: string;
    /**
     * The type of aggregation queries.
     */
    aggregationType: CreateFleetMetricRequestBodyAggregationType;
    /**
     * The fleet metric description.
     */
    description?: string;
    /**
     * The name of the index to search.
     */
    indexName?: string;
    /**
     * The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.
     */
    period: number;
    /**
     * The search query string.
     */
    queryString: string;
    /**
     * The query version.
     */
    queryVersion?: string;
    /**
     * Metadata, which can be used to manage the fleet metric.
     */
    tags?: shared.Tag[];
    /**
     * Used to support unit transformation such as milliseconds to seconds. The unit must be supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>. Default to null.
     */
    unit?: CreateFleetMetricRequestBodyUnitEnum;
}
export declare class CreateFleetMetricRequest extends SpeakeasyBase {
    requestBody: CreateFleetMetricRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the fleet metric to create.
     */
    metricName: string;
}
export declare class CreateFleetMetricResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createFleetMetricResponse?: shared.CreateFleetMetricResponse;
    /**
     * IndexNotReadyException
     */
    indexNotReadyException?: any;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidAggregationException
     */
    invalidAggregationException?: any;
    /**
     * InvalidQueryException
     */
    invalidQueryException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
