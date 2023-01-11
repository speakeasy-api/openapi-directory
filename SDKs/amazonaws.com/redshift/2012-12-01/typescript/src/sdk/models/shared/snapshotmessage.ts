import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotList } from "./snapshotlist";



// SnapshotMessage
/** 
 * Contains the output from the <a>DescribeClusterSnapshots</a> action. 
**/
export class SnapshotMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: SnapshotList })
  snapshots?: SnapshotList[];
}
