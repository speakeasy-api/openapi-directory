import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that defines the data for a payment amount, such as the sale price.
 */
export declare class ProposedBid extends SpeakeasyBase {
    /**
     * The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " title="https://www.iso.org " target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:CurrencyCodeEnum'>eBay API documentation</a>
     */
    currency?: string;
    /**
     * The end of the range specified for the bid.
     */
    rangeEnd?: string;
    /**
     * The start of the range specified for the bid.
     */
    rangeStart?: string;
    /**
     * The value of the proposed bid.
     */
    value?: string;
}
