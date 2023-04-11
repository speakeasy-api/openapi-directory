import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";
/**
 * Describes all of the attributes of a reserved cache node offering.
 */
export declare class ReservedCacheNodesOfferingList extends SpeakeasyBase {
    cacheNodeType?: string;
    duration?: number;
    fixedPrice?: number;
    offeringType?: string;
    productDescription?: string;
    recurringCharges?: RecurringChargeList[];
    reservedCacheNodesOfferingId?: string;
    usagePrice?: number;
}
