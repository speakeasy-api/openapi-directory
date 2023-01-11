import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotCopyGrantList } from "./snapshotcopygrantlist";



// SnapshotCopyGrantMessage
/** 
 * <p/>
**/
export class SnapshotCopyGrantMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: SnapshotCopyGrantList })
  snapshotCopyGrants?: SnapshotCopyGrantList[];
}
