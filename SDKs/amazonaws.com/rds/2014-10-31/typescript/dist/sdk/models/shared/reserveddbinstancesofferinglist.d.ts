import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";
/**
 * This data type is used as a response element in the <code>DescribeReservedDBInstancesOfferings</code> action.
 */
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
