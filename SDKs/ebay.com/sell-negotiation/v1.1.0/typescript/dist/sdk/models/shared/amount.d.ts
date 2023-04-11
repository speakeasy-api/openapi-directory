import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that describes the value of a monetary amount as represented by a global currency.
 */
export declare class Amount extends SpeakeasyBase {
    /**
     * The base currency applied to the value field to establish a monetary amount. The currency is represented as a 3-letter ISO4217 currency code. For example, the code for the Canadian Dollar is CAD. Default: The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/bas:CurrencyCodeEnum'>eBay API documentation</a>
     */
    currency?: string;
    /**
     * The monetary amount in the specified currency.
     */
    value?: string;
}
