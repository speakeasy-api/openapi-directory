import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";



// Tags
/** 
 *  A complex type that contains zero or more <code>Tag</code> elements.
**/
export class Tags extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TagList })
  items?: TagList[];
}
