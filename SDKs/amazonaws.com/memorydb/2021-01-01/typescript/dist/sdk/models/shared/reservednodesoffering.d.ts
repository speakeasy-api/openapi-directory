import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringCharge } from "./recurringcharge";
/**
 * The offering type of this node.
 */
export declare class ReservedNodesOffering extends SpeakeasyBase {
    duration?: number;
    fixedPrice?: number;
    nodeType?: string;
    offeringType?: string;
    recurringCharges?: RecurringCharge[];
    reservedNodesOfferingId?: string;
}
