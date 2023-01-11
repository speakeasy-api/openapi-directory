import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginList } from "./originlist";



// Origins
/** 
 * Contains information about the origins for this distribution.
**/
export class Origins extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: OriginList })
  items: OriginList[];

  @SpeakeasyMetadata()
  quantity: number;
}
