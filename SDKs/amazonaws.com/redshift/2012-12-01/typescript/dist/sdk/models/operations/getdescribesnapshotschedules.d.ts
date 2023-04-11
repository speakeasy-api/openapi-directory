import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeSnapshotSchedulesActionEnum {
    DescribeSnapshotSchedules = "DescribeSnapshotSchedules"
}
export declare enum GETDescribeSnapshotSchedulesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDescribeSnapshotSchedulesRequest extends SpeakeasyBase {
    action: GETDescribeSnapshotSchedulesActionEnum;
    /**
     * The unique identifier for the cluster whose snapshot schedules you want to view.
     */
    clusterIdentifier?: string;
    /**
     * A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the <code>marker</code> parameter and retrying the command. If the <code>marker</code> field is empty, all response records have been retrieved for the request.
     */
    marker?: string;
    /**
     * The maximum number or response records to return in each call. If the number of remaining response records exceeds the specified <code>MaxRecords</code> value, a value is returned in a <code>marker</code> field of the response. You can retrieve the next set of records by retrying the command with the returned <code>marker</code> value.
     */
    maxRecords?: number;
    /**
     * A unique identifier for a snapshot schedule.
     */
    scheduleIdentifier?: string;
    /**
     * The key value for a snapshot schedule tag.
     */
    tagKeys?: string[];
    /**
     * The value corresponding to the key of the snapshot schedule tag.
     */
    tagValues?: string[];
    version: GETDescribeSnapshotSchedulesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeSnapshotSchedulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
