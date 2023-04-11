import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterSnapshotList } from "./dbclustersnapshotlist";
/**
 * Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action.
 */
export declare class DBClusterSnapshotMessage extends SpeakeasyBase {
    dbClusterSnapshots?: DBClusterSnapshotList[];
    marker?: string;
}
