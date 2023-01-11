import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";



// TagListMessage
/** 
 * <p/>
**/
export class TagListMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TagList })
  tagList?: TagList[];
}
