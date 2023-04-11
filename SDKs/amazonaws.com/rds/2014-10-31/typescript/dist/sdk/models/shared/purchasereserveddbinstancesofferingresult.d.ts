import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedDBInstance } from "./reserveddbinstance";
/**
 * Success
 */
export declare class PurchaseReservedDBInstancesOfferingResult extends SpeakeasyBase {
    /**
     * This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions.
     */
    reservedDBInstance?: ReservedDBInstance;
}
