import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshotList } from "./dbclustersnapshotlist";



// DbClusterSnapshotMessage
/** 
 *  Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action. 
**/
export class DbClusterSnapshotMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterSnapshotList })
  dbClusterSnapshots?: DbClusterSnapshotList[];

  @SpeakeasyMetadata()
  marker?: string;
}
