import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";



// TagListMessage
/** 
 * Represents the output of <a>ListTagsForResource</a>.
**/
export class TagListMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TagList })
  tagList?: TagList[];
}
