import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedDBInstancesOfferingList } from "./reserveddbinstancesofferinglist";
/**
 * Contains the result of a successful invocation of the <code>DescribeReservedDBInstancesOfferings</code> action.
 */
export declare class ReservedDBInstancesOfferingMessage extends SpeakeasyBase {
    marker?: string;
    reservedDBInstancesOfferings?: ReservedDBInstancesOfferingList[];
}
