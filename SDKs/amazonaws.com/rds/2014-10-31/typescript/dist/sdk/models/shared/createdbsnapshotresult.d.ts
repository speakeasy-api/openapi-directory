import { SpeakeasyBase } from "../../../internal/utils";
import { DBSnapshot } from "./dbsnapshot";
/**
 * Success
 */
export declare class CreateDBSnapshotResult extends SpeakeasyBase {
    /**
     * <p>Contains the details of an Amazon RDS DB snapshot.</p> <p>This data type is used as a response element in the <code>DescribeDBSnapshots</code> action.</p>
     */
    dbSnapshot?: DBSnapshot;
}
