import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagList
/** 
 * Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair.
**/
export class TagList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}
