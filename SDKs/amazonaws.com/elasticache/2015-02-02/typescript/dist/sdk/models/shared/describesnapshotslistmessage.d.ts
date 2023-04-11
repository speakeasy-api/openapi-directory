import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotList } from "./snapshotlist";
/**
 * Represents the output of a <code>DescribeSnapshots</code> operation.
 */
export declare class DescribeSnapshotsListMessage extends SpeakeasyBase {
    marker?: string;
    snapshots?: SnapshotList[];
}
