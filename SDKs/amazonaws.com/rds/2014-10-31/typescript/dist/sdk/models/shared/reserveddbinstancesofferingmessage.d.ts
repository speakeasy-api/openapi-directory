import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstancesOfferingList } from "./reserveddbinstancesofferinglist";
/**
 *  Contains the result of a successful invocation of the <code>DescribeReservedDBInstancesOfferings</code> action.
**/
export declare class ReservedDbInstancesOfferingMessage extends SpeakeasyBase {
    marker?: string;
    reservedDBInstancesOfferings?: ReservedDbInstancesOfferingList[];
}
