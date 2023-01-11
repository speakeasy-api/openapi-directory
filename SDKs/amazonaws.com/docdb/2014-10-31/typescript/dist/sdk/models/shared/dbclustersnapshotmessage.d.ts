import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshotList } from "./dbclustersnapshotlist";
/**
 * Represents the output of <a>DescribeDBClusterSnapshots</a>.
**/
export declare class DbClusterSnapshotMessage extends SpeakeasyBase {
    dbClusterSnapshots?: DbClusterSnapshotList[];
    marker?: string;
}
