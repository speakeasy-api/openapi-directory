import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlobalNodeGroupList
/** 
 * Indicates the slot configuration and global identifier for a slice group.
**/
export class GlobalNodeGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalNodeGroupId?: string;

  @SpeakeasyMetadata()
  slots?: string;
}
