import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedDBInstancesOfferingList } from "./reserveddbinstancesofferinglist";
/**
 * Success
 */
export declare class ReservedDBInstancesOfferingMessage extends SpeakeasyBase {
    marker?: string;
    reservedDBInstancesOfferings?: ReservedDBInstancesOfferingList[];
}
