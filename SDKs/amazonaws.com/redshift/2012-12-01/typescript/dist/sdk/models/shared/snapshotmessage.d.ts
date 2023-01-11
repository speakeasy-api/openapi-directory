import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotList } from "./snapshotlist";
/**
 * Contains the output from the <a>DescribeClusterSnapshots</a> action.
**/
export declare class SnapshotMessage extends SpeakeasyBase {
    marker?: string;
    snapshots?: SnapshotList[];
}
