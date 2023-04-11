import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines the monetary value of an amount and the currency used.
 */
export declare class Amount extends SpeakeasyBase {
    /**
     * The three-letter <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank">ISO 4217</a> code representing the currency of the amount in the <b> value</b> field. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/marketing/types/bas:CurrencyCodeEnum'>eBay API documentation</a>
     */
    currency?: string;
    /**
     * The monetary amount, in the currency specified by the <b> currency</b> field.
     */
    value?: string;
}
