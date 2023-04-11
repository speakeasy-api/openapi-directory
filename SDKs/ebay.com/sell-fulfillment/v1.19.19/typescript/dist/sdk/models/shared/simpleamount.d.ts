import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines the monetary value of the payment dispute, and the currency used.
 */
export declare class SimpleAmount extends SpeakeasyBase {
    /**
     * A three-letter ISO 4217 code (such as <code>USD</code> for US site) that indicates the currency of the amount in the <strong>value</strong> field. Both the <strong>value</strong> and <strong>currency</strong> fields are always returned with the <strong>amount</strong> container. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
     */
    currency?: string;
    /**
     * The monetary amount of the payment dispute. Both the <strong>value</strong> and <strong>currency</strong> fields are always returned with the <strong>amount</strong> container.
     */
    value?: string;
}
