import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";



// ReservedCacheNodesOfferingList
/** 
 * Describes all of the attributes of a reserved cache node offering.
**/
export class ReservedCacheNodesOfferingList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheNodeType?: string;

  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  fixedPrice?: number;

  @SpeakeasyMetadata()
  offeringType?: string;

  @SpeakeasyMetadata()
  productDescription?: string;

  @SpeakeasyMetadata({ elemType: RecurringChargeList })
  recurringCharges?: RecurringChargeList[];

  @SpeakeasyMetadata()
  reservedCacheNodesOfferingId?: string;

  @SpeakeasyMetadata()
  usagePrice?: number;
}
