import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing a discount applied to an ecommerce order or product.
 */
export declare class EcommerceDiscount extends SpeakeasyBase {
    /**
     * The fixed amount of the discount.
     */
    amount?: string;
    /**
     * The code used to apply the discount.
     */
    code?: string;
    /**
     * The percentage of the discount.
     */
    percentage?: string;
}
