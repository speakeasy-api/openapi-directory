import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";
/**
 * Represents the output of a <code>PurchaseReservedNodesOffering</code> operation.
 */
export declare class ReservedNode extends SpeakeasyBase {
    arn?: string;
    duration?: number;
    fixedPrice?: number;
    nodeCount?: number;
    nodeType?: string;
    offeringType?: string;
    recurringCharges?: RecurringCharge[];
    reservationId?: string;
    reservedNodesOfferingId?: string;
    startTime?: Date;
    state?: string;
}
