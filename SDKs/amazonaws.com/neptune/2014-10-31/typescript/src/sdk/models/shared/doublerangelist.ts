import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DoubleRangeList
/** 
 * A range of double values.
**/
export class DoubleRangeList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  from?: number;

  @SpeakeasyMetadata()
  to?: number;
}
