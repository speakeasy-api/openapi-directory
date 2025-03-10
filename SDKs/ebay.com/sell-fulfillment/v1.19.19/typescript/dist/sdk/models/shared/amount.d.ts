import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
 */
export declare class Amount extends SpeakeasyBase {
    /**
     * A three-letter ISO 4217 code that indicates the currency of the amount in the <b>convertedFromValue</b> field. This value is required or returned only if currency conversion/localization is required, and represents the pre-conversion currency. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
     */
    convertedFromCurrency?: string;
    /**
     * The monetary amount before any conversion is performed, in the currency specified by the <b>convertedFromCurrency</b> field. This value is required or returned only if currency conversion/localization is required. The <b>value</b> field contains the converted amount of this value, in the currency specified by the <b>currency</b> field.
     */
    convertedFromValue?: string;
    /**
     * A three-letter ISO 4217 code that indicates the currency of the amount in the <b>value</b> field. If currency conversion/localization is required, this is the post-conversion currency of the amount in the <b>value</b> field.<br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
     */
    currency?: string;
    /**
     * The monetary amount, in the currency specified by the <b>currency</b> field. If currency conversion/localization is required, this value is the converted amount, and the <b>convertedFromValue</b> field contains the amount in the original currency.  <br><br><i>Required in</i> the <b>amount</b> type.
     */
    value?: string;
}
