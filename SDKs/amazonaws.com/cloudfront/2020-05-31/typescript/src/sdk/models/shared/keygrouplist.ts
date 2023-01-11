import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyGroupSummaryList } from "./keygroupsummarylist";



// KeyGroupList
/** 
 * A list of key groups.
**/
export class KeyGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: KeyGroupSummaryList })
  items?: KeyGroupSummaryList[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
