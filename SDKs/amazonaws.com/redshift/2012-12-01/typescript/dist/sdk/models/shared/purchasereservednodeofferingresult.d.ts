import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedNode } from "./reservednode";
/**
 * Success
 */
export declare class PurchaseReservedNodeOfferingResult extends SpeakeasyBase {
    /**
     * Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings.
     */
    reservedNode?: ReservedNode;
}
