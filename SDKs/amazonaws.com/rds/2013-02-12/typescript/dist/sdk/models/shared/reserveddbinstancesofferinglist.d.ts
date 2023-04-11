import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";
export declare class ReservedDBInstancesOfferingList extends SpeakeasyBase {
    currencyCode?: string;
    dbInstanceClass?: string;
    duration?: number;
    fixedPrice?: number;
    multiAZ?: boolean;
    offeringType?: string;
    productDescription?: string;
    recurringCharges?: RecurringChargeList[];
    reservedDBInstancesOfferingId?: string;
    usagePrice?: number;
}
