import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeEventsActionEnum {
    DescribeEvents = "DescribeEvents"
}
/**
 * The event source to retrieve events for. If no value is specified, all events are returned.
 */
export declare enum GETDescribeEventsSourceTypeEnum {
    CacheCluster = "cache-cluster",
    CacheParameterGroup = "cache-parameter-group",
    CacheSecurityGroup = "cache-security-group",
    CacheSubnetGroup = "cache-subnet-group",
    ReplicationGroup = "replication-group",
    User = "user",
    UserGroup = "user-group"
}
export declare enum GETDescribeEventsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDescribeEventsRequest extends SpeakeasyBase {
    action: GETDescribeEventsActionEnum;
    /**
     * The number of minutes worth of events to retrieve.
     */
    duration?: number;
    /**
     * <p>The end of the time interval for which to retrieve events, specified in ISO 8601 format.</p> <p> <b>Example:</b> 2017-03-30T07:03:49.555Z</p>
     */
    endTime?: Date;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
     */
    marker?: string;
    /**
     * <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: minimum 20; maximum 100.</p>
     */
    maxRecords?: number;
    /**
     * The identifier of the event source for which events are returned. If not specified, all sources are included in the response.
     */
    sourceIdentifier?: string;
    /**
     * The event source to retrieve events for. If no value is specified, all events are returned.
     */
    sourceType?: GETDescribeEventsSourceTypeEnum;
    /**
     * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601 format.</p> <p> <b>Example:</b> 2017-03-30T07:03:49.555Z</p>
     */
    startTime?: Date;
    version: GETDescribeEventsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
