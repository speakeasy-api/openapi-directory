import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagList
/** 
 *  A complex type that contains <code>Tag</code> key and <code>Tag</code> value.
**/
export class TagList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key: string;

  @SpeakeasyMetadata()
  value?: string;
}
