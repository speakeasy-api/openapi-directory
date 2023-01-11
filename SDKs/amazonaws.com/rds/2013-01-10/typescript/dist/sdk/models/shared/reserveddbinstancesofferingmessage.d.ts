import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstancesOfferingList } from "./reserveddbinstancesofferinglist";
export declare class ReservedDbInstancesOfferingMessage extends SpeakeasyBase {
    marker?: string;
    reservedDBInstancesOfferings?: ReservedDbInstancesOfferingList[];
}
