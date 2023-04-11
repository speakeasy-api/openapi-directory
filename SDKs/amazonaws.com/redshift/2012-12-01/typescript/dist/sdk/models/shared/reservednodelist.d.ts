import { SpeakeasyBase } from "../../../internal/utils";
import { RecurringChargeList } from "./recurringchargelist";
import { ReservedNodeOfferingTypeEnum } from "./reservednodeofferingtypeenum";
/**
 * Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings.
 */
export declare class ReservedNodeList extends SpeakeasyBase {
    currencyCode?: string;
    duration?: number;
    fixedPrice?: number;
    nodeCount?: number;
    nodeType?: string;
    offeringType?: string;
    recurringCharges?: RecurringChargeList[];
    reservedNodeId?: string;
    reservedNodeOfferingId?: string;
    reservedNodeOfferingType?: ReservedNodeOfferingTypeEnum;
    startTime?: Date;
    state?: string;
    usagePrice?: number;
}
