import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshotAttributeList } from "./dbclustersnapshotattributelist";



// DbClusterSnapshotAttributesResult
/** 
 * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
**/
export class DbClusterSnapshotAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterSnapshotAttributeList })
  dbClusterSnapshotAttributes?: DbClusterSnapshotAttributeList[];

  @SpeakeasyMetadata()
  dbClusterSnapshotIdentifier?: string;
}
