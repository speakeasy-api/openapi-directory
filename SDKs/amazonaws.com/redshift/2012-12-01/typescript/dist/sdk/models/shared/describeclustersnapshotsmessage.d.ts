import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotSortingEntityList } from "./snapshotsortingentitylist";
/**
 * <p/>
 */
export declare class DescribeClusterSnapshotsMessage extends SpeakeasyBase {
    clusterExists?: boolean;
    clusterIdentifier?: string;
    endTime?: Date;
    marker?: string;
    maxRecords?: number;
    ownerAccount?: string;
    snapshotArn?: string;
    snapshotIdentifier?: string;
    snapshotType?: string;
    sortingEntities?: SnapshotSortingEntityList[];
    startTime?: Date;
    tagKeys?: string[];
    tagValues?: string[];
}
