import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginCustomHeadersList } from "./origincustomheaderslist";



// CustomHeaders
/** 
 * A complex type that contains the list of Custom Headers for each origin. 
**/
export class CustomHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: OriginCustomHeadersList })
  items?: OriginCustomHeadersList[];

  @SpeakeasyMetadata()
  quantity: number;
}
