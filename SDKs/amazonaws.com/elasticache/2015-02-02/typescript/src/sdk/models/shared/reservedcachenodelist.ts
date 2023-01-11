import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";



// ReservedCacheNodeList
/** 
 * Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.
**/
export class ReservedCacheNodeList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheNodeCount?: number;

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
  reservationARN?: string;

  @SpeakeasyMetadata()
  reservedCacheNodeId?: string;

  @SpeakeasyMetadata()
  reservedCacheNodesOfferingId?: string;

  @SpeakeasyMetadata()
  startTime?: Date;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata()
  usagePrice?: number;
}
