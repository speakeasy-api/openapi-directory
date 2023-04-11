import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * The details provided for the shipping provider, such as shipping cost and type.
 */
export declare class ShippingOption extends SpeakeasyBase {
    /**
     * The currency and value of the item.
     */
    shippingCost?: Amount;
    /**
     * The class of the shipping cost. Valid Values: FIXED or CALCULATED Code so that your app gracefully handles any future changes to this list.
     */
    shippingCostType?: string;
}
