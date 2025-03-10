import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used by the base request of the <b>createOrReplaceSalesTax</b>.
 */
export declare class SalesTaxBase extends SpeakeasyBase {
    /**
     * This field is used to set the sales tax rate for the tax jurisdiction set in the call URI. When applicable to an order, this sales tax rate will be applied to sales price. The <b>shippingAndHandlingTaxed</b> value will indicate whether or not sales tax is also applied to shipping and handling charges<br><br>Although it is a string, a percentage value is set here, such as <code>7.75</code>.
     */
    salesTaxPercentage?: string;
    /**
     * This field is set to <code>true</code> if the seller wishes to apply sales tax to shipping and handling charges, and not just the total sales price of the order. Otherwise, this field's value should be set to <code>false</code>.
     */
    shippingAndHandlingTaxed?: boolean;
}
