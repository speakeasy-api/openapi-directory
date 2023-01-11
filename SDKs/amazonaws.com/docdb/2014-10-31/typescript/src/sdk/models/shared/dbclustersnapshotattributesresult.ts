import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshotAttributeList } from "./dbclustersnapshotattributelist";



// DbClusterSnapshotAttributesResult
/** 
 * Detailed information about the attributes that are associated with a cluster snapshot.
**/
export class DbClusterSnapshotAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterSnapshotAttributeList })
  dbClusterSnapshotAttributes?: DbClusterSnapshotAttributeList[];

  @SpeakeasyMetadata()
  dbClusterSnapshotIdentifier?: string;
}
