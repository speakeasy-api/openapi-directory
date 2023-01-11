import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";



// TagListMessage
/** 
 * Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.
**/
export class TagListMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TagList })
  tagList?: TagList[];
}
