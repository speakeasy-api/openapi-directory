import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";
/**
 *  This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions.
**/
export declare class ReservedDbInstanceList extends SpeakeasyBase {
    currencyCode?: string;
    dbInstanceClass?: string;
    dbInstanceCount?: number;
    duration?: number;
    fixedPrice?: number;
    leaseId?: string;
    multiAZ?: boolean;
    offeringType?: string;
    productDescription?: string;
    recurringCharges?: RecurringChargeList[];
    reservedDBInstanceArn?: string;
    reservedDBInstanceId?: string;
    reservedDBInstancesOfferingId?: string;
    startTime?: Date;
    state?: string;
    usagePrice?: number;
}
