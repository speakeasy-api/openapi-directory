import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeSnapshotsActionEnum {
    DescribeSnapshots = "DescribeSnapshots"
}
export declare enum GETDescribeSnapshotsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDescribeSnapshotsRequest extends SpeakeasyBase {
    action: GETDescribeSnapshotsActionEnum;
    /**
     * A user-supplied cluster identifier. If this parameter is specified, only snapshots associated with that specific cluster are described.
     */
    cacheClusterId?: string;
    /**
     * An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
     */
    marker?: string;
    /**
     * <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 50</p> <p>Constraints: minimum 20; maximum 50.</p>
     */
    maxRecords?: number;
    /**
     * A user-supplied replication group identifier. If this parameter is specified, only snapshots associated with that specific replication group are described.
     */
    replicationGroupId?: string;
    /**
     * A Boolean value which if true, the node group (shard) configuration is included in the snapshot description.
     */
    showNodeGroupConfig?: boolean;
    /**
     * A user-supplied name of the snapshot. If this parameter is specified, only this snapshot are described.
     */
    snapshotName?: string;
    /**
     * If set to <code>system</code>, the output shows snapshots that were automatically created by ElastiCache. If set to <code>user</code> the output shows snapshots that were manually created. If omitted, the output shows both automatically and manually created snapshots.
     */
    snapshotSource?: string;
    version: GETDescribeSnapshotsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
