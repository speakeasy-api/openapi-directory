import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterSnapshot } from "./dbclustersnapshot";
/**
 * Success
 */
export declare class DeleteDBClusterSnapshotResult extends SpeakeasyBase {
    /**
     * <p>Contains the details for an Amazon RDS DB cluster snapshot</p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action.</p>
     */
    dbClusterSnapshot?: DBClusterSnapshot;
}
