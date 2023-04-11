import { SpeakeasyBase } from "../../../internal/utils";
import { EcommerceDiscount } from "./ecommercediscount";
export declare class EcommerceOrderLineItemOptions extends SpeakeasyBase {
    /**
     * A unique identifier for the option.
     */
    id?: string;
    /**
     * The name of the option.
     */
    name?: string;
    /**
     * The value of the option.
     */
    value?: string;
}
/**
 * A single line item of an ecommerce order, representing a product or variant with associated options, quantity, and pricing information.
 */
export declare class EcommerceOrderLineItem extends SpeakeasyBase {
    /**
     * The description of the product or variant associated with the line item.
     */
    description?: string;
    discounts?: EcommerceDiscount[];
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The name of the product or variant associated with the line item.
     */
    name: string;
    options?: EcommerceOrderLineItemOptions[];
    /**
     * A unique identifier for the product associated with the line item.
     */
    productId?: string;
    /**
     * The quantity of the product or variant associated with the line item.
     */
    quantity: string;
    /**
     * The SKU of the product or variant associated with the line item.
     */
    sku?: string;
    /**
     * The total tax amount applied to the product or variant associated with the line item.
     */
    taxAmount?: string;
    /**
     * The tax rate applied to the product or variant associated with the line item.
     */
    taxRate?: string;
    /**
     * The total amount for the product(s) or variant associated with the line item, including taxes and discounts.
     */
    totalAmount: string;
    /**
     * The unit price of the product or variant associated with the line item.
     */
    unitPrice?: string;
    /**
     * A unique identifier for the variant of the product associated with the line item, if applicable.
     */
    variantId?: string;
}
