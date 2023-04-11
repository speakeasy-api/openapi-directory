import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterSnapshot } from "./dbclustersnapshot";
/**
 * Success
 */
export declare class CopyDBClusterSnapshotResult extends SpeakeasyBase {
    /**
     * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
     */
    dbClusterSnapshot?: DBClusterSnapshot;
}
