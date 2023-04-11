import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The currency and value of the item.
 */
export declare class Amount extends SpeakeasyBase {
    /**
     * The three-letter ISO 4217 code representing the currency of the amount in the value field. Default: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/bas:CurrencyCodeEnum'>eBay API documentation</a>
     */
    currency?: string;
    /**
     * The monetary value, in the currency specified by the currency field.
     */
    value?: string;
}
