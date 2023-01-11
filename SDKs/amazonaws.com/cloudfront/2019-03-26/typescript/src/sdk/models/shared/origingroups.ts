import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginGroupList } from "./origingrouplist";



// OriginGroups
/** 
 * A complex data type for the origin groups specified for a distribution.
**/
export class OriginGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: OriginGroupList })
  items?: OriginGroupList[];

  @SpeakeasyMetadata()
  quantity: number;
}
