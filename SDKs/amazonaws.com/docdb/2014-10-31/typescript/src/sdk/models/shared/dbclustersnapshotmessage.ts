import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshotList } from "./dbclustersnapshotlist";



// DbClusterSnapshotMessage
/** 
 * Represents the output of <a>DescribeDBClusterSnapshots</a>.
**/
export class DbClusterSnapshotMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbClusterSnapshotList })
  dbClusterSnapshots?: DbClusterSnapshotList[];

  @SpeakeasyMetadata()
  marker?: string;
}
