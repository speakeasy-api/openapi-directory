import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DescribeSnapshotsMessage</code> operation.
 */
export declare class DescribeSnapshotsMessage extends SpeakeasyBase {
    cacheClusterId?: string;
    marker?: string;
    maxRecords?: number;
    replicationGroupId?: string;
    showNodeGroupConfig?: boolean;
    snapshotName?: string;
    snapshotSource?: string;
}
