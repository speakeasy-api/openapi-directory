import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheBehaviorList } from "./cachebehaviorlist";



// CacheBehaviors
/** 
 * A complex type that contains zero or more <code>CacheBehavior</code> elements. 
**/
export class CacheBehaviors extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheBehaviorList })
  items?: CacheBehaviorList[];

  @SpeakeasyMetadata()
  quantity: number;
}
