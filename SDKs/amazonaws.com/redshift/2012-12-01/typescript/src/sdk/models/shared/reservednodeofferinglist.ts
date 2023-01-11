import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";
import { ReservedNodeOfferingTypeEnum } from "./reservednodeofferingtypeenum";



// ReservedNodeOfferingList
/** 
 * Describes a reserved node offering.
**/
export class ReservedNodeOfferingList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currencyCode?: string;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  fixedPrice?: number;

  @SpeakeasyMetadata()
  nodeType?: string;

  @SpeakeasyMetadata()
  offeringType?: string;

  @SpeakeasyMetadata({ elemType: RecurringChargeList })
  recurringCharges?: RecurringChargeList[];

  @SpeakeasyMetadata()
  reservedNodeOfferingId?: string;

  @SpeakeasyMetadata()
  reservedNodeOfferingType?: ReservedNodeOfferingTypeEnum;

  @SpeakeasyMetadata()
  usagePrice?: number;
}
