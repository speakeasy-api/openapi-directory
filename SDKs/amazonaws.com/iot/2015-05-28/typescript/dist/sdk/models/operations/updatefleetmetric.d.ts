import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of aggregation queries.
 */
export declare class UpdateFleetMetricRequestBodyAggregationType extends SpeakeasyBase {
    name?: shared.AggregationTypeNameEnum;
    values?: string[];
}
/**
 * Used to support unit transformation such as milliseconds to seconds. The unit must be supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>.
 */
export declare enum UpdateFleetMetricRequestBodyUnitEnum {
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
export declare class UpdateFleetMetricRequestBody extends SpeakeasyBase {
    /**
     * The field to aggregate.
     */
    aggregationField?: string;
    /**
     * The type of aggregation queries.
     */
    aggregationType?: UpdateFleetMetricRequestBodyAggregationType;
    /**
     * The description of the fleet metric.
     */
    description?: string;
    /**
     * The expected version of the fleet metric record in the registry.
     */
    expectedVersion?: number;
    /**
     * The name of the index to search.
     */
    indexName: string;
    /**
     * The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.
     */
    period?: number;
    /**
     * The search query string.
     */
    queryString?: string;
    /**
     * The version of the query.
     */
    queryVersion?: string;
    /**
     * Used to support unit transformation such as milliseconds to seconds. The unit must be supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>.
     */
    unit?: UpdateFleetMetricRequestBodyUnitEnum;
}
export declare class UpdateFleetMetricRequest extends SpeakeasyBase {
    requestBody: UpdateFleetMetricRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the fleet metric to update.
     */
    metricName: string;
}
export declare class UpdateFleetMetricResponse extends SpeakeasyBase {
    contentType: string;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * VersionConflictException
     */
    versionConflictException?: any;
}
