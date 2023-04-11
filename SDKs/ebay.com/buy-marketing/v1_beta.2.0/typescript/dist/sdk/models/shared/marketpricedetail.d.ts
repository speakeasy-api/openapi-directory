import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * The type that defines the fields for details about the product, such as condition and estimated start price.
 */
export declare class MarketPriceDetail extends SpeakeasyBase {
    /**
     * The name for the condition of the product. For example: NEW
     */
    conditionGroup?: string;
    /**
     * An array of condition identifiers for the product.
     */
    conditionIds?: string[];
    /**
     * This type defines the monetary value of an amount and the currency used.
     */
    estimatedStartPrice?: Amount;
}
