import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterSnapshotAttributesResult } from "./dbclustersnapshotattributesresult";
/**
 * Success
 */
export declare class DescribeDBClusterSnapshotAttributesResult extends SpeakeasyBase {
    /**
     * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
     */
    dbClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}
