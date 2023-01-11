import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RangeList
/** 
 * A range of integer values.
**/
export class RangeList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  from?: number;

  @SpeakeasyMetadata()
  step?: number;

  @SpeakeasyMetadata()
  to?: number;
}
