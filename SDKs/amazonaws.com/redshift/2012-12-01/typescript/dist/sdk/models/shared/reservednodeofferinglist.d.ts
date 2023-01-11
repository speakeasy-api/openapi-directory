import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";
import { ReservedNodeOfferingTypeEnum } from "./reservednodeofferingtypeenum";
/**
 * Describes a reserved node offering.
**/
export declare class ReservedNodeOfferingList extends SpeakeasyBase {
    currencyCode?: string;
    duration?: number;
    fixedPrice?: number;
    nodeType?: string;
    offeringType?: string;
    recurringCharges?: RecurringChargeList[];
    reservedNodeOfferingId?: string;
    reservedNodeOfferingType?: ReservedNodeOfferingTypeEnum;
    usagePrice?: number;
}
