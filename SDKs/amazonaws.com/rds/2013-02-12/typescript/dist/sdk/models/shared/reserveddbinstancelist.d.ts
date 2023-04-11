import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";
export declare class ReservedDBInstanceList extends SpeakeasyBase {
    currencyCode?: string;
    dbInstanceClass?: string;
    dbInstanceCount?: number;
    duration?: number;
    fixedPrice?: number;
    multiAZ?: boolean;
    offeringType?: string;
    productDescription?: string;
    recurringCharges?: RecurringChargeList[];
    reservedDBInstanceId?: string;
    reservedDBInstancesOfferingId?: string;
    startTime?: Date;
    state?: string;
    usagePrice?: number;
}
