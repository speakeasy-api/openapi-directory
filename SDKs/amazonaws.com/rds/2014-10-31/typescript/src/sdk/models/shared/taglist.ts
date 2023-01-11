import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagList
/** 
 * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
**/
export class TagList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}
