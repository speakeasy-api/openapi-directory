import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterSnapshotList } from "./dbclustersnapshotlist";
/**
 * Represents the output of <a>DescribeDBClusterSnapshots</a>.
 */
export declare class DBClusterSnapshotMessage extends SpeakeasyBase {
    dbClusterSnapshots?: DBClusterSnapshotList[];
    marker?: string;
}
