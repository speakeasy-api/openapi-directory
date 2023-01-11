import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaggedResourceList } from "./taggedresourcelist";



// TaggedResourceListMessage
/** 
 * <p/>
**/
export class TaggedResourceListMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: TaggedResourceList })
  taggedResources?: TaggedResourceList[];
}
