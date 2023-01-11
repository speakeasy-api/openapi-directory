import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodeOfferingList } from "./reservednodeofferinglist";



// ReservedNodeOfferingsMessage
/** 
 * <p/>
**/
export class ReservedNodeOfferingsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedNodeOfferingList })
  reservedNodeOfferings?: ReservedNodeOfferingList[];
}
