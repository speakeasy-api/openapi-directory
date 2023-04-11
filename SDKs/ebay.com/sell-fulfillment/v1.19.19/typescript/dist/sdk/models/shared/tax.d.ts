import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type contains information about any sales tax applied to a line item.
 */
export declare class Tax extends SpeakeasyBase {
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    amount?: Amount;
    /**
     * Tax type. This field is only available when <strong>fieldGroups</strong> is set to <code>TAX_BREAKDOWN</code>. If the order has fees, a breakdown of the fees is also provided. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxTypeEnum'>eBay API documentation</a>
     */
    taxType?: string;
}
