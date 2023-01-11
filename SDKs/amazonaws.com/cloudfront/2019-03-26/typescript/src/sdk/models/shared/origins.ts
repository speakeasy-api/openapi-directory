import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginList } from "./originlist";



// Origins
/** 
 * A complex type that contains information about origins and origin groups for this distribution. 
**/
export class Origins extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: OriginList })
  items: OriginList[];

  @SpeakeasyMetadata()
  quantity: number;
}
