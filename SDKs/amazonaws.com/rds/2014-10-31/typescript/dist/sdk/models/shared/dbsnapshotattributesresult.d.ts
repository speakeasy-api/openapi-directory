import { SpeakeasyBase } from "../../../internal/utils";
import { DBSnapshotAttributeList } from "./dbsnapshotattributelist";
/**
 * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code> API action.</p> <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API action.</p>
 */
export declare class DBSnapshotAttributesResult extends SpeakeasyBase {
    dbSnapshotAttributes?: DBSnapshotAttributeList[];
    dbSnapshotIdentifier?: string;
}
