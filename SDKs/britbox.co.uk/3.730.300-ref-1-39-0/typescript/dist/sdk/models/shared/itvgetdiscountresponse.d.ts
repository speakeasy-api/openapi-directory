import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Avalable save offer plan, if any.
 */
export declare class ItvGetDiscountResponse extends SpeakeasyBase {
    /**
     * Payment currency.
     */
    currency?: string;
    /**
     * Description
     */
    description?: string;
    /**
     * Headline
     */
    headline?: string;
    /**
     * The if of a discount for a user.
     */
    id: string;
    /**
     * The initial cost.
     */
    initialCost?: number;
    /**
     * Long description
     */
    longDescription?: string;
    /**
     * Discount nickname.
     */
    nickname?: string;
    /**
     * How long the descount will be valid for.
     */
    offerdurationperiod?: string;
    /**
     * Short description
     */
    shortDescription?: string;
}
