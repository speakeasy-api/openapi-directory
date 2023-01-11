import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedCacheNodesOfferingList } from "./reservedcachenodesofferinglist";



// ReservedCacheNodesOfferingMessage
/** 
 * Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.
**/
export class ReservedCacheNodesOfferingMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedCacheNodesOfferingList })
  reservedCacheNodesOfferings?: ReservedCacheNodesOfferingList[];
}
