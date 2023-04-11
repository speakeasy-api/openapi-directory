import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";
/**
 * Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.
 */
export declare class ReservedCacheNode extends SpeakeasyBase {
    cacheNodeCount?: number;
    cacheNodeType?: string;
    duration?: number;
    fixedPrice?: number;
    offeringType?: string;
    productDescription?: string;
    recurringCharges?: RecurringChargeList[];
    reservationARN?: string;
    reservedCacheNodeId?: string;
    reservedCacheNodesOfferingId?: string;
    startTime?: Date;
    state?: string;
    usagePrice?: number;
}
