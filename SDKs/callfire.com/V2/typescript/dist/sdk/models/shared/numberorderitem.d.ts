import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an order item of a particular order
 */
export declare class NumberOrderItem extends SpeakeasyBase {
    /**
     * List of fulfilled items, e.g. phone numbers, keywords
     */
    fulfilled?: string[];
    /**
     * A total number of items bought within a single order item
     */
    ordered?: number;
    /**
     * A cost of unit
     */
    unitCost?: number;
}
