import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// TaggedResourceList
/** 
 * A tag and its associated resource.
**/
export class TaggedResourceList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceName?: string;

  @SpeakeasyMetadata()
  resourceType?: string;

  @SpeakeasyMetadata()
  tag?: Tag;
}
