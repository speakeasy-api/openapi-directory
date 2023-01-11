import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodeOfferingList } from "./reservednodeofferinglist";



export class GetReservedNodeExchangeOfferingsOutputMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedNodeOfferingList })
  reservedNodeOfferings?: ReservedNodeOfferingList[];
}
