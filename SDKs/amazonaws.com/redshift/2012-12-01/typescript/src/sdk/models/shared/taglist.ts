import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagList
/** 
 * A tag consisting of a name/value pair for a resource.
**/
export class TagList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}
