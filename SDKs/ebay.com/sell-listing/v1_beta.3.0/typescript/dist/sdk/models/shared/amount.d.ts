import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type that defines the fields for the currency and a monetary amount.
 */
export declare class Amount extends SpeakeasyBase {
    /**
     * The three-letter ISO 4217 code representing the currency of the amount in the value field. Restriction: Only the currency of the marketplace is supported. For example, on the US marketplace the only currency supported is USD. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/listing/types/bas:CurrencyCodeEnum'>eBay API documentation</a>
     */
    currency?: string;
    /**
     * The monetary amount, in the currency specified by the currency field.
     */
    value?: string;
}
