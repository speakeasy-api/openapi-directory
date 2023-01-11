import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstancesOfferingList } from "./reserveddbinstancesofferinglist";



// ReservedDbInstancesOfferingMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeReservedDBInstancesOfferings</code> action. 
**/
export class ReservedDbInstancesOfferingMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedDbInstancesOfferingList })
  reservedDBInstancesOfferings?: ReservedDbInstancesOfferingList[];
}
