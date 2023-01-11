import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotList } from "./snapshotlist";



// DescribeSnapshotsListMessage
/** 
 * Represents the output of a <code>DescribeSnapshots</code> operation.
**/
export class DescribeSnapshotsListMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: SnapshotList })
  snapshots?: SnapshotList[];
}
